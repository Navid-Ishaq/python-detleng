(function () {
  "use strict";

  const lessonId = Number(new URLSearchParams(window.location.search).get("id") || 1);
  const lesson = window.PYTHON_LESSONS[lessonId];
  const storageKeys = {
    completed: "python.detleng.completed",
    current: "python.detleng.current",
    lastVisited: "python.detleng.lastVisited",
    quiz: "python.detleng.quizSuccess",
    practice: "python.detleng.practiceProgress",
    freshPractice: "python.detleng.freshPractice"
  };
  let pyodideReady = null;
  let hasRun = false;
  let quizPassed = false;
  let activePractice = null;
  let activePracticeIndex = 0;
  let activeChallenge = null;
  let activeChallengeIndex = 0;
  let activeQuiz = null;
  let activeQuizIndex = 0;
  let editorBaseCode = "";
  let lastRun = null;

  function byId(id) { return document.getElementById(id); }
  function completedLessons() {
    try {
      const value = JSON.parse(localStorage.getItem(storageKeys.completed) || "[]");
      return Array.isArray(value) ? value.filter(Number.isInteger) : [];
    } catch (_) { return []; }
  }
  function setHtml(id, value) { byId(id).innerHTML = value; }

  function renderLesson() {
    if (!lesson) {
      document.title = "Lesson not available · Python · DeTLeng";
      byId("lessonPage").innerHTML = '<section class="missing"><h1>Lesson not available yet</h1><p>This lesson is part of the course path, but its teaching material has not been published yet.</p><a class="home" href="index.html">Return to Course Home</a></section>';
      return false;
    }

    document.title = `Lesson ${lessonId} · ${lesson.title} · DeTLeng`;
    byId("lessonCrumb").textContent = `Lesson ${String(lessonId).padStart(2, "0")} / 100 · ${lesson.stage}`;
    byId("lessonTitle").textContent = lesson.title;
    byId("lessonIntro").textContent = lesson.intro;
    byId("lessonLevel").textContent = lesson.level;
    byId("lessonTime").textContent = `~${lesson.time}`;
    byId("lessonTags").innerHTML = lesson.tags.map(tag => `<span>${tag}</span>`).join("");
    setHtml("lessonExplanation", lesson.explanation);
    setHtml("lessonConcept", `<strong>Core idea:</strong> ${lesson.concept}`);
    byId("lineByLine").innerHTML = lesson.lineByLine.map((line, index) => `<div class="line"><b>${index + 1}</b><span>${line}</span></div>`).join("");
    byId("code").value = lesson.starterCode;
    editorBaseCode = lesson.starterCode;
    byId("expectedOutput").textContent = lesson.expectedOutput;
    setHtml("outputExplanation", lesson.outputExplanation);
    setHtml("changeIt", lesson.changeIt);
    setHtml("challengeText", lesson.challenge);
    setHtml("hint", lesson.hint);
    byId("solutionCode").textContent = lesson.solution;
    byId("quizQuestion").textContent = lesson.quiz.question;
    byId("quizCode").textContent = lesson.quiz.code || "";
    byId("quizCode").hidden = !lesson.quiz.code;
    byId("quizOptions").innerHTML = lesson.quiz.options.map((option, index) => `<label><input type="radio" name="quiz" value="${index}"> ${option}</label>`).join("");
    renderPracticeCoach();
    renderChallengeGenerator();
    renderQuizGenerator();
    byId("lessonCount").textContent = `Lesson ${lessonId} of 100 · ${lessonId}%`;
    byId("progressBar").style.width = `${lessonId}%`;
    byId("completeTitle").textContent = `Ready to mark Lesson ${lessonId} complete?`;
    const previous = byId("previousLesson");
    previous.href = lessonId === 1 ? "index.html" : `lesson.html?id=${lessonId - 1}`;
    previous.textContent = lessonId === 1 ? "← Course Home" : `← Lesson ${lessonId - 1}`;
    const next = byId("nextLesson");
    next.href = lessonId === 100 ? "index.html" : `lesson.html?id=${lessonId + 1}`;
    next.textContent = lessonId === 100 ? "Course Home →" : `Lesson ${lessonId + 1} →`;
    localStorage.setItem(storageKeys.lastVisited, String(lessonId));
    if (!localStorage.getItem(storageKeys.current)) localStorage.setItem(storageKeys.current, String(lessonId));
    return true;
  }

  function practiceProgress() {
    try {
      const value = JSON.parse(localStorage.getItem(storageKeys.practice) || "{}");
      return value && typeof value === "object" ? value : {};
    } catch (_) { return {}; }
  }

  function completedPracticeIds() {
    const saved = practiceProgress()[lessonId];
    return Array.isArray(saved) ? saved : [];
  }

  function updatePracticeCount(count = completedPracticeIds().length) {
    byId("practiceCount").textContent = `${count} ${count === 1 ? "practice" : "practices"} complete`;
  }

  function freshPracticeProgress() {
    try {
      const value = JSON.parse(localStorage.getItem(storageKeys.freshPractice) || "{}");
      return value && typeof value === "object" ? value : {};
    } catch (_) { return {}; }
  }

  function freshLessonProgress() {
    const saved = freshPracticeProgress()[lessonId];
    return saved && typeof saved === "object" ? saved : { counter: 0, completed: 0, seen: [] };
  }

  function saveFreshLessonProgress(saved) {
    const progress = freshPracticeProgress();
    progress[lessonId] = { counter: saved.counter || 0, completed: saved.completed || 0, seen: (saved.seen || []).slice(-300) };
    localStorage.setItem(storageKeys.freshPractice, JSON.stringify(progress));
  }

  function updateFreshPracticeCount() {
    const count = freshLessonProgress().completed || 0;
    byId("freshPracticeCount").textContent = `${count} fresh ${count === 1 ? "practice" : "practices"} completed`;
  }

  function randomInteger(minimum, maximum) {
    const range = maximum - minimum + 1;
    if (window.crypto && window.crypto.getRandomValues) {
      const value = new Uint32Array(1);
      window.crypto.getRandomValues(value);
      return minimum + (value[0] % range);
    }
    return minimum + Math.floor(Math.random() * range);
  }

  function generatedNumber(specification) {
    if (specification.numberType === "float") {
      let quarters = randomInteger(specification.minimum * 4, specification.maximum * 4);
      if (quarters % 4 === 0) quarters += quarters === specification.maximum * 4 ? -1 : 1;
      return quarters / 4;
    }
    return randomInteger(specification.minimum, specification.maximum);
  }

  function renderFreshTemplate(value, replacements) {
    if (typeof value === "string") {
      return value.replace(/\{\{([a-zA-Z0-9_]+)\}\}/g, (_, key) => String(replacements[key] ?? ""));
    }
    if (Array.isArray(value)) return value.map(item => renderFreshTemplate(item, replacements));
    if (value && typeof value === "object") {
      return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, renderFreshTemplate(item, replacements)]));
    }
    return value;
  }

  function createTemplateFreshPractice(generator, saved, recent) {
    for (let attempt = 0; attempt < 80; attempt += 1) {
      const template = generator.templates[randomInteger(0, generator.templates.length - 1)];
      const replacements = {};
      for (const [key, choices] of Object.entries(template.values || {})) {
        replacements[key] = choices[randomInteger(0, choices.length - 1)];
      }
      const signature = `${template.id}:${Object.values(replacements).join(":")}`;
      if (recent.has(signature)) continue;
      const rendered = renderFreshTemplate(template, replacements);
      const generated = {
        ...rendered,
        id: `fresh-${lessonId}-${saved.counter + 1}`,
        generated: true,
        freshCompleted: false,
        signature,
        stage: `Fresh Practice · ${rendered.skill}`
      };
      saved.counter += 1;
      saved.seen = [...(saved.seen || []), signature];
      saveFreshLessonProgress(saved);
      return generated;
    }
    return null;
  }

  function createFreshPractice() {
    const generator = lesson.freshPracticeGenerator;
    const saved = freshLessonProgress();
    const recent = new Set(saved.seen || []);
    if (generator.templates && generator.templates.length) {
      return createTemplateFreshPractice(generator, saved, recent);
    }
    for (let attempt = 0; attempt < 80; attempt += 1) {
      const scenario = generator.scenarios[randomInteger(0, generator.scenarios.length - 1)];
      let left;
      let right;
      if (scenario.operator === "/") {
        right = randomInteger(scenario.rightMinimum, scenario.rightMaximum);
        left = right * randomInteger(scenario.quotientMinimum, scenario.quotientMaximum);
      } else {
        left = generatedNumber(scenario);
        right = generatedNumber(scenario);
        if (scenario.operator === "-" && right > left) [left, right] = [right, left];
      }
      const signature = `${scenario.id}:${left}:${right}`;
      if (recent.has(signature)) continue;
      const starterCode = `${scenario.leftName} = ${left}\n${scenario.rightName} = ${right}\n\n${scenario.targetName} = ${scenario.leftName} ${scenario.operator} ${scenario.rightName}\nprint(${scenario.targetName})`;
      const generated = {
        id: `fresh-${lessonId}-${saved.counter + 1}`,
        generated: true,
        freshCompleted: false,
        signature,
        stage: `Fresh Practice · ${scenario.skill}`,
        title: scenario.title,
        mission: `${scenario.mission} Change both starter numbers, predict the answer, then run and check your work.`,
        starterCode,
        hint: scenario.hint,
        success: scenario.success,
        check: {
          mustChange: true,
          variables: [
            { name: scenario.leftName, notValues: [String(left)] },
            { name: scenario.rightName, notValues: [String(right)] }
          ],
          calculation: { target: scenario.targetName, left: scenario.leftName, operator: scenario.operator, right: scenario.rightName }
        }
      };
      saved.counter += 1;
      saved.seen = [...(saved.seen || []), signature];
      saveFreshLessonProgress(saved);
      return generated;
    }
    return null;
  }

  function renderPracticeCoach() {
    if (!lesson.practiceCoach || !lesson.practiceCoach.activities.length) return;
    byId("practiceCoach").style.display = "block";
    byId("challengeNumber").textContent = "6";
    byId("quizNumber").textContent = "7";
    const completed = completedPracticeIds();
    const firstUnseen = lesson.practiceCoach.activities.findIndex(activity => !completed.includes(activity.id));
    activePracticeIndex = firstUnseen < 0 ? 0 : firstUnseen;
    showPractice(activePracticeIndex);
    if (lesson.freshPracticeGenerator && (lesson.freshPracticeGenerator.templates?.length || lesson.freshPracticeGenerator.scenarios?.length)) {
      byId("freshPractice").style.display = "block";
      updateFreshPracticeCount();
    }
  }

  function showPractice(index) {
    activePractice = lesson.practiceCoach.activities[index];
    byId("practiceStage").textContent = activePractice.stage;
    byId("practiceTitle").textContent = activePractice.title;
    byId("practiceMission").textContent = activePractice.mission;
    byId("practiceCode").textContent = activePractice.starterCode;
    byId("practiceHint").textContent = activePractice.hint;
    byId("practiceHint").style.display = "none";
    byId("practiceFeedback").textContent = "";
    updatePracticeCount();
  }

  function renderChallengeGenerator() {
    if (!lesson.challengeGenerator || !lesson.challengeGenerator.activities.length) return;
    byId("generatedChallengeActions").style.display = "flex";
    byId("challengeName").style.display = "block";
    byId("challengeCode").style.display = "block";
    showChallenge(0);
  }

  function showChallenge(index) {
    activeChallenge = lesson.challengeGenerator.activities[index];
    byId("challengeName").textContent = activeChallenge.title;
    byId("challengeText").textContent = activeChallenge.mission;
    byId("challengeCode").textContent = activeChallenge.starterCode;
    byId("hint").textContent = activeChallenge.hint;
    byId("solutionCode").textContent = activeChallenge.solution;
    byId("hint").style.display = "none";
    byId("solution").style.display = "none";
  }

  function renderQuizGenerator() {
    if (!lesson.quizGenerator || !lesson.quizGenerator.activities.length) return;
    byId("quizGeneratorButton").style.display = "inline-block";
    showQuiz(0);
  }

  function showQuiz(index) {
    activeQuiz = lesson.quizGenerator.activities[index];
    byId("quizQuestion").textContent = activeQuiz.question;
    byId("quizCode").textContent = activeQuiz.code || "";
    byId("quizCode").hidden = !activeQuiz.code;
    byId("quizOptions").innerHTML = activeQuiz.options.map((option, optionIndex) => `<label><input type="radio" name="quiz" value="${optionIndex}"> ${option}</label>`).join("");
    byId("quizResult").textContent = "";
    quizPassed = false;
  }

  function assignmentValues(code, name) {
    const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const pattern = new RegExp(`^\\s*${escaped}\\s*=\\s*(?:\"([^\"]*)\"|'([^']*)'|(-?\\d+(?:\\.\\d+)?))\\s*(?:#.*)?$`, "gm");
    const values = [];
    let match;
    while ((match = pattern.exec(code))) values.push(match[1] ?? match[2] ?? match[3]);
    return values;
  }

  function validatePractice(activity, code, output) {
    const outputLines = output.split("\n").map(line => line.trim());
    const commentLines = code.split("\n").filter(line => /^\s*#/.test(line));
    if (activity.check.minimumComments && commentLines.length < activity.check.minimumComments) {
      return `Add ${activity.check.minimumComments - commentLines.length} more useful ${activity.check.minimumComments - commentLines.length === 1 ? "comment" : "comments"}, then run the program again.`;
    }
    for (const text of activity.check.commentedCode || []) {
      const escaped = text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      if (!new RegExp(`^\\s*#\\s*${escaped}\\s*$`, "m").test(code)) {
        return `Place # before ${text} so Python temporarily ignores that instruction.`;
      }
    }
    if (activity.check.minimumPrints) {
      const printCount = (code.match(/\bprint\s*\(/g) || []).length;
      if (printCount < activity.check.minimumPrints) return `Add ${activity.check.minimumPrints - printCount} more print() ${activity.check.minimumPrints - printCount === 1 ? "instruction" : "instructions"}, then run the program again.`;
    }
    for (const text of activity.check.requiredOutput || []) {
      if (!outputLines.includes(text)) return `Almost there—make sure the output includes: ${text}`;
    }
    if (activity.check.expectedOutput && JSON.stringify(outputLines) !== JSON.stringify(activity.check.expectedOutput)) {
      return "The messages are all useful—now check their order and run the program again.";
    }
    for (const rule of activity.check.variables || []) {
      const values = assignmentValues(code, rule.name);
      if (values.length < (rule.minimumAssignments || 1)) return `Almost there—give ${rule.name} the value requested in the mission.`;
      const latest = values[values.length - 1];
      if (!latest.trim()) return `Give ${rule.name} a value of your choice, then run the program again.`;
      if (rule.notValues && rule.notValues.includes(latest.trim().toLowerCase())) return `Good start. Now change the value stored in ${rule.name} to make this story yours.`;
      if (rule.equals !== undefined && latest !== String(rule.equals)) return `Almost there—set ${rule.name} to ${rule.equals}.`;
      if (rule.distinctValues && new Set(values).size < rule.distinctValues) return `Change ${rule.name} as the story moves forward, then run it again.`;
      const printPattern = new RegExp(`print\\(\\s*${rule.name}\\s*\\)`, "g");
      if (rule.minimumPrints && (code.match(printPattern) || []).length < rule.minimumPrints) return `Use print(${rule.name}) so Python can show the remembered value.`;
      if (rule.minimumPrints && values.some(value => !outputLines.includes(value))) return `Run the program so each value stored in ${rule.name} appears in the output.`;
    }
    if (activity.check.calculation) {
      const rule = activity.check.calculation;
      const escaped = value => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const expression = new RegExp(`^\\s*${escaped(rule.target)}\\s*=\\s*${escaped(rule.left)}\\s*\\${rule.operator}\\s*${escaped(rule.right)}\\s*(?:#.*)?$`, "m");
      if (!expression.test(code)) return `Use ${rule.target} = ${rule.left} ${rule.operator} ${rule.right} to make the requested calculation.`;
      const leftValues = assignmentValues(code, rule.left);
      const rightValues = assignmentValues(code, rule.right);
      if (!leftValues.length || !rightValues.length) return "Give both number variables values, then run the calculation again.";
      const left = Number(leftValues[leftValues.length - 1]);
      const right = Number(rightValues[rightValues.length - 1]);
      const operations = { "+": (a, b) => a + b, "-": (a, b) => a - b, "*": (a, b) => a * b, "/": (a, b) => a / b };
      const expected = operations[rule.operator](left, right);
      if (!Number.isFinite(expected) || !outputLines.some(line => line !== "" && Number(line) === expected)) {
        return `Run the program and make sure print(${rule.target}) displays the calculated answer.`;
      }
    }
    return "";
  }

  async function initPyodide() {
    const state = byId("engineState");
    try {
      pyodideReady = await loadPyodide();
      state.textContent = "Python ready";
      byId("runBtn").disabled = false;
      byId("outputText").textContent = "Python is ready. Press Run Python.";
    } catch (_) {
      state.textContent = "Engine unavailable";
      byId("outputText").textContent = "Python could not load. Check your internet connection and refresh.";
    }
  }

  window.runPython = async function () {
    if (!pyodideReady) return;
    const button = byId("runBtn");
    button.disabled = true;
    button.textContent = "Running…";
    try {
      let outputBuffer = "";
      pyodideReady.setStdout({ batched: text => { outputBuffer += `${text}\n`; byId("outputText").textContent = outputBuffer.trimEnd() || "(No output)"; } });
      pyodideReady.setStderr({ batched: text => { outputBuffer += `${text}\n`; byId("outputText").textContent = outputBuffer.trimEnd(); } });
      byId("outputText").textContent = "";
      await pyodideReady.runPythonAsync(byId("code").value);
      if (!outputBuffer) byId("outputText").textContent = "(No output)";
      hasRun = true;
      lastRun = { code: byId("code").value, succeeded: true, output: outputBuffer.trimEnd() };
      byId("interactionNote").textContent = "Nice — you ran the code. Change it and run it again to see what changes.";
    } catch (error) {
      hasRun = true;
      lastRun = { code: byId("code").value, succeeded: false, output: String(error) };
      byId("outputText").textContent = String(error);
      byId("interactionNote").textContent = "An error is useful feedback. Read its last line, check the code, and try again.";
    } finally {
      button.disabled = false;
      button.textContent = "▶ Run Python";
    }
  };
  window.resetCode = function () {
    byId("code").value = editorBaseCode;
    lastRun = null;
    byId("interactionNote").textContent = activePractice && editorBaseCode === activePractice.starterCode ? "Practice reset. Change the requested values, then run it again." : "Starter code restored. Make a change and run it again.";
  };
  window.writeOwnCode = function () {
    const editor = byId("code");
    editor.focus();
    editor.select();
    byId("interactionNote").textContent = "Start typing your own Python code. The example stays here until you type.";
  };
  window.copyCode = async function () {
    const editor = byId("code");
    const button = byId("copyBtn");
    let copied = false;
    if (window.isSecureContext && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(editor.value);
        copied = true;
      } catch (_) {}
    }
    if (!copied) {
      const selectionStart = editor.selectionStart;
      const selectionEnd = editor.selectionEnd;
      editor.focus();
      editor.select();
      try { copied = document.execCommand("copy"); } catch (_) {}
      editor.setSelectionRange(selectionStart, selectionEnd);
    }
    if (copied) {
      button.textContent = "✓ Copied";
      byId("interactionNote").textContent = "Code copied. You can paste it wherever you need it.";
      window.setTimeout(() => { button.textContent = "Copy Code"; }, 1600);
    } else {
      byId("interactionNote").textContent = "Copy was blocked by the browser. Select the code and press Ctrl+C.";
      editor.focus();
      editor.select();
    }
  };
  window.clearOutput = function () { byId("outputText").textContent = "Output cleared."; };
  window.loadPractice = function () {
    const editor = byId("code");
    if (editor.value !== editorBaseCode && !window.confirm("Load this practice and replace the code currently in the editor?")) return;
    editorBaseCode = activePractice.starterCode;
    editor.value = editorBaseCode;
    lastRun = null;
    byId("outputText").textContent = "Practice loaded. Change the code, then press Run Python.";
    byId("interactionNote").textContent = "This practice is now in the editor. Follow its mission, run it, then choose Check My Work.";
    editor.focus();
    byId("pythonLab").scrollIntoView({ behavior: "smooth", block: "start" });
  };
  window.showPracticeHint = function () { byId("practiceHint").style.display = "block"; };
  window.checkPractice = function () {
    if (!activePractice) return;
    const code = byId("code").value;
    const feedback = byId("practiceFeedback");
    if (editorBaseCode !== activePractice.starterCode) { feedback.textContent = "Choose Try This Practice first so the coach knows which little mission you are working on."; return; }
    if (!lastRun || lastRun.code !== code) { feedback.textContent = "Run your latest code first, then come back and check your work."; return; }
    if (!lastRun.succeeded) { feedback.textContent = "Python found something we can fix. Read the last line of the error, make one small change, and run again."; return; }
    if (activePractice.check.mustChange && code.trim() === activePractice.starterCode.trim()) { feedback.textContent = "Good first run. Now make the change in the mission, run it again, and check your work."; return; }
    const issue = validatePractice(activePractice, code, lastRun.output);
    if (issue) { feedback.textContent = issue; return; }
    if (activePractice.generated) {
      if (!activePractice.freshCompleted) {
        const saved = freshLessonProgress();
        saved.completed = (saved.completed || 0) + 1;
        saveFreshLessonProgress(saved);
        activePractice.freshCompleted = true;
        updateFreshPracticeCount();
      }
      feedback.textContent = `✓ ${activePractice.success}`;
      return;
    }
    const progress = practiceProgress();
    const completed = new Set(Array.isArray(progress[lessonId]) ? progress[lessonId] : []);
    completed.add(activePractice.id);
    progress[lessonId] = Array.from(completed);
    localStorage.setItem(storageKeys.practice, JSON.stringify(progress));
    feedback.textContent = `✓ ${activePractice.success}`;
    updatePracticeCount(completed.size);
  };
  window.nextPractice = function () {
    const activities = lesson.practiceCoach.activities;
    activePracticeIndex = (activePracticeIndex + 1) % activities.length;
    showPractice(activePracticeIndex);
    byId("practiceCoach").scrollIntoView({ behavior: "smooth", block: "start" });
  };
  window.generateFreshPractice = function () {
    const generated = createFreshPractice();
    if (!generated) {
      byId("practiceFeedback").textContent = "You have explored many combinations. Try the button once more for a new set of values.";
      return;
    }
    activePractice = generated;
    byId("practiceStage").textContent = generated.stage;
    byId("practiceTitle").textContent = generated.title;
    byId("practiceMission").textContent = generated.mission;
    byId("practiceCode").textContent = generated.starterCode;
    byId("practiceHint").textContent = generated.hint;
    byId("practiceHint").style.display = "none";
    byId("practiceFeedback").textContent = "Fresh practice ready. Predict first, then choose Try This Practice.";
    byId("practiceCoach").scrollIntoView({ behavior: "smooth", block: "start" });
  };
  window.nextChallenge = function () {
    const activities = lesson.challengeGenerator.activities;
    activeChallengeIndex = (activeChallengeIndex + 1) % activities.length;
    showChallenge(activeChallengeIndex);
  };
  window.nextQuiz = function () {
    const activities = lesson.quizGenerator.activities;
    activeQuizIndex = (activeQuizIndex + 1) % activities.length;
    showQuiz(activeQuizIndex);
  };
  window.loadChallenge = function () {
    if (!activeChallenge) return;
    const editor = byId("code");
    if (editor.value !== editorBaseCode && !window.confirm("Load this challenge and replace the code currently in the editor?")) return;
    editorBaseCode = activeChallenge.starterCode;
    editor.value = editorBaseCode;
    lastRun = null;
    byId("outputText").textContent = "Challenge loaded. Change the values, then press Run Python.";
    byId("interactionNote").textContent = "This challenge is now in the editor. Make it yours, predict the output, and run it.";
    editor.focus();
    byId("pythonLab").scrollIntoView({ behavior: "smooth", block: "start" });
  };
  window.toggle = function (id) {
    const element = byId(id);
    element.style.display = element.style.display === "block" ? "none" : "block";
  };
  window.useSolution = function () {
    const solution = activeChallenge ? activeChallenge.solution : lesson.solution;
    byId("code").value = solution;
    lastRun = null;
    byId("interactionNote").textContent = "Solution placed in the editor. Run it and explain the output to yourself.";
    byId("code").focus();
  };
  window.checkQuiz = function () {
    const currentQuiz = activeQuiz || lesson.quiz;
    const selected = document.querySelector('input[name="quiz"]:checked');
    if (!selected) { byId("quizResult").textContent = "Choose an answer first."; return; }
    quizPassed = Number(selected.value) === currentQuiz.correct;
    byId("quizResult").textContent = quizPassed ? `✓ ${currentQuiz.explanation}` : "Not quite. Look at the example, then try again.";
  };
  window.completeLesson = function () {
    if (!hasRun || !quizPassed) {
      byId("completionMessage").textContent = "Run the Python example and answer the mini quiz correctly before completing this lesson.";
      return;
    }
    const completed = completedLessons();
    if (!completed.includes(lessonId)) completed.push(lessonId);
    completed.sort((a, b) => a - b);
    localStorage.setItem(storageKeys.completed, JSON.stringify(completed));
    localStorage.setItem(storageKeys.current, String(Math.min(100, lessonId + 1)));
    const quizSuccess = JSON.parse(localStorage.getItem(storageKeys.quiz) || "{}");
    quizSuccess[lessonId] = true;
    localStorage.setItem(storageKeys.quiz, JSON.stringify(quizSuccess));
    byId("completionMessage").textContent = `✓ Lesson ${lessonId} complete. Your progress is saved in this browser.`;
    byId("completeButton").disabled = true;
    byId("completeButton").textContent = "✓ Completed";
  };

  if (renderLesson()) initPyodide();
}());
