(function () {
  "use strict";

  const lessonId = Number(new URLSearchParams(window.location.search).get("id") || 1);
  const lesson = window.PYTHON_LESSONS[lessonId];
  const storageKeys = {
    completed: "python.detleng.completed",
    current: "python.detleng.current",
    lastVisited: "python.detleng.lastVisited",
    quiz: "python.detleng.quizSuccess"
  };
  let pyodideReady = null;
  let hasRun = false;
  let quizPassed = false;

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
      byId("interactionNote").textContent = "Nice — you ran the code. Change it and run it again to see what changes.";
    } catch (error) {
      hasRun = true;
      byId("outputText").textContent = String(error);
      byId("interactionNote").textContent = "An error is useful feedback. Read its last line, check the code, and try again.";
    } finally {
      button.disabled = false;
      button.textContent = "▶ Run Python";
    }
  };
  window.resetCode = function () { byId("code").value = lesson.starterCode; };
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
  window.toggle = function (id) {
    const element = byId(id);
    element.style.display = element.style.display === "block" ? "none" : "block";
  };
  window.useSolution = function () {
    byId("code").value = lesson.solution;
    byId("interactionNote").textContent = "Solution placed in the editor. Run it and explain the output to yourself.";
    byId("code").focus();
  };
  window.checkQuiz = function () {
    const selected = document.querySelector('input[name="quiz"]:checked');
    if (!selected) { byId("quizResult").textContent = "Choose an answer first."; return; }
    quizPassed = Number(selected.value) === lesson.quiz.correct;
    byId("quizResult").textContent = quizPassed ? `✓ ${lesson.quiz.explanation}` : "Not quite. Look at the example, then try again.";
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
