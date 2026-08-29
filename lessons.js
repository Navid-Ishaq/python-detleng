window.PYTHON_LESSONS = {
  1: {
    title: "Welcome to Python",
    stage: "Foundations",
    level: "Beginner",
    time: "12 minutes",
    tags: ["First program", "Print text"],
    intro: "Your first goal is small and important: read one Python instruction, run it yourself, change its message, and see the computer respond.",
    explanation: "Python is a programming language we can use to give a computer instructions. Your first instruction uses <strong>print()</strong>. It asks Python to display the text written between the quotation marks. You do not need to memorise everything—run it, change it, and let the result teach you.",
    concept: "Code is an instruction. With print(), you can ask Python to display a message you choose.",
    starterCode: `print("Hello, Python!")
print("I am ready to learn.")`,
    expectedOutput: `Hello, Python!
I am ready to learn.`,
    lineByLine: [
      '<code>print</code> tells Python that you want to display something in the output.',
      "The parentheses <code>()</code> hold the message that <code>print()</code> should display.",
      'Quotation marks keep the message together as text, such as <code>"Hello, Python!"</code>.',
      "When you press <strong>Run Python</strong>, each message appears in the output panel. Nothing is sent anywhere; Python runs here in your browser."
    ],
    outputExplanation: "Python displays two lines because the program contains two <code>print()</code> instructions. The quotation marks and parentheses do not appear in the output—only the messages inside them appear.",
    changeIt: "Change <code>\"Hello, Python!\"</code> to a greeting of your choice. Then change the second message too. Keep the quotation marks and parentheses, run the program again, and notice that Python displays your words.",
    challenge: "Add a third <code>print()</code> instruction that displays: <strong>I am learning Python.</strong>",
    hint: "Copy the shape of an existing instruction: <code>print(\"Your message\")</code>. Give the new message its own line.",
    solution: `print("Hello, Python!")
print("I am ready to learn.")
print("I am learning Python.")`,
    practiceCoach: {
      knowledgeBoundary: {
        current: ["print", "parentheses", "quoted text", "running code"],
        previous: [],
        prohibited: ["comments", "variables", "input", "number operations", "conditions", "loops", "collections", "user-defined functions", "imports"]
      },
      activities: [
        {
          id: "hello-your-way",
          stage: "Easy Start · Make It Yours",
          title: "Hello, Your Way",
          mission: "Replace the greeting with words of your choice. Keep print(), the parentheses, and both quotation marks.",
          starterCode: `print("Hello, Python!")`,
          hint: "Change only the words between the quotation marks, then run the code again.",
          success: "You changed a Python instruction and made the output use your own words.",
          check: { minimumPrints: 1, mustChange: true }
        },
        {
          id: "two-friendly-messages",
          stage: "Easy Start · Make It Yours",
          title: "Two Friendly Messages",
          mission: "Change both messages, then run the program so Python displays your two new lines.",
          starterCode: `print("Welcome!")
print("You can do this.")`,
          hint: "There are two pairs of quotation marks. Change the words inside each pair.",
          success: "Python displayed two messages that you chose.",
          check: { minimumPrints: 2, mustChange: true }
        },
        {
          id: "add-one-more",
          stage: "Growing · Build With What You Know",
          title: "Add One More",
          mission: "Add a third print() instruction that displays exactly: I did it!",
          starterCode: `print("My first program")
print("It is working")`,
          hint: "Give the new message its own line: print(\"I did it!\")",
          success: "You added a new instruction and made the program display one more line.",
          check: { minimumPrints: 3, requiredOutput: ["I did it!"] }
        },
        {
          id: "repair-the-quotes",
          stage: "Growing · Fix and Learn",
          title: "Repair the Quotation Mark",
          mission: "Python will find a small error. Add the missing quotation mark, run again, and make both messages appear.",
          starterCode: `print("Hello, Python!)
print("I fixed it!")`,
          hint: "The first message begins with a quotation mark but does not close with one before the parenthesis.",
          success: "You read an error, repaired the quotation marks, and ran the program successfully.",
          check: { minimumPrints: 2, mustChange: true, requiredOutput: ["Hello, Python!", "I fixed it!"] }
        },
        {
          id: "cheer-yourself",
          stage: "Growing · Make It Yours",
          title: "A Message for You",
          mission: "Replace both starter messages with two encouraging sentences you would like to see.",
          starterCode: `print("Keep trying.")
print("Small steps matter.")`,
          hint: "Keep the shape print(\"message\") and change only the message inside.",
          success: "You used Python to create an encouraging two-line message.",
          check: { minimumPrints: 2, mustChange: true }
        },
        {
          id: "tiny-poster",
          stage: "Ready for a Challenge · Build With What You Know",
          title: "A Tiny Python Poster",
          mission: "Add one more print() instruction so the poster ends with exactly: Keep going!",
          starterCode: `print("PYTHON LEARNER")
print("One step at a time")`,
          hint: "Add print(\"Keep going!\") on a new line.",
          success: "You built a complete three-line poster using only your first Python tool.",
          check: { minimumPrints: 3, requiredOutput: ["Keep going!"] }
        }
      ]
    },
    freshPracticeGenerator: {
      templates: [
        {
          id: "fresh-greeting",
          skill: "Change One Message",
          title: "A Fresh Greeting",
          mission: "Change the message so Python displays exactly: {{target}}",
          starterCode: `print("{{starter}}")`,
          hint: "Keep print(), the parentheses and quotation marks. Replace only the words inside the quotation marks.",
          solution: `print("{{target}}")`,
          success: "Python displayed the fresh greeting exactly as requested.",
          check: { minimumPrints: 1, mustChange: true, requiredOutput: ["{{target}}"] },
          values: {
            starter: ["Hello, Python!", "Welcome!", "Good morning!", "Ready to learn!", "My code works!", "A new day begins!"],
            target: ["Hello, learner!", "Welcome to Python!", "I can write code!", "Small steps matter!", "I am ready!", "Let us begin!"]
          }
        },
        {
          id: "fresh-two-lines",
          skill: "Two Messages",
          title: "Two Fresh Lines",
          mission: "Change both instructions so the first output line is '{{first}}' and the second is '{{second}}'.",
          starterCode: `print("Change this first line")\nprint("Change this second line")`,
          hint: "Edit the words inside both pairs of quotation marks. Keep each print() instruction on its own line.",
          solution: `print("{{first}}")\nprint("{{second}}")`,
          success: "Your two print() instructions displayed the requested messages in order.",
          check: { minimumPrints: 2, mustChange: true, expectedOutput: ["{{first}}", "{{second}}"] },
          values: {
            first: ["Learning starts here", "Python is listening", "My program begins", "One small instruction", "Hello from my code", "I pressed Run"],
            second: ["I can do this", "The output appeared", "Now I understand", "Another step complete", "My message worked", "I will keep going"]
          }
        },
        {
          id: "fresh-add-line",
          skill: "Add an Instruction",
          title: "Add One Fresh Message",
          mission: "Add one new print() instruction so the final output line is exactly: {{target}}",
          starterCode: `print("{{first}}")\nprint("{{second}}")`,
          hint: "Add a third line using the same shape: print(\"your message\").",
          solution: `print("{{first}}")\nprint("{{second}}")\nprint("{{target}}")`,
          success: "You added a third Python instruction and produced the requested final line.",
          check: { minimumPrints: 3, requiredOutput: ["{{target}}"] },
          values: {
            first: ["My program started", "Python is ready", "A tiny story begins", "First line complete", "I wrote some code", "The screen is waiting"],
            second: ["The next line runs", "I am still learning", "The program continues", "Second line complete", "Python follows along", "Now add one more"],
            target: ["I did it!", "Keep going!", "My program is complete!", "Three lines are working!", "Python followed my instructions!", "Another success!"]
          }
        },
        {
          id: "fresh-fix-quote",
          skill: "Fix and Run",
          title: "Repair a Fresh Message",
          mission: "This program has one missing quotation mark. Repair it so both messages appear.",
          starterCode: `print("{{broken}})\nprint("{{working}}")`,
          hint: "The first message opens with a quotation mark. Add its matching quotation mark just before the closing parenthesis.",
          solution: `print("{{broken}}")\nprint("{{working}}")`,
          success: "You repaired the quotation marks and made both instructions run.",
          check: { minimumPrints: 2, mustChange: true, expectedOutput: ["{{broken}}", "{{working}}"] },
          values: {
            broken: ["Hello again!", "I can fix this!", "My first line works", "Python, try again", "A quote belongs here", "This message is repaired"],
            working: ["Both lines are ready", "The second line works", "I learned from the error", "Now the program runs", "Fixing code is learning", "Success after one change"]
          }
        },
        {
          id: "fresh-mini-poster",
          skill: "Build a Tiny Poster",
          title: "A Fresh Python Poster",
          mission: "Complete the tiny poster by adding a third print() instruction that displays exactly: {{ending}}",
          starterCode: `print("{{heading}}")\nprint("{{middle}}")`,
          hint: "Give the ending its own line and place its words between quotation marks inside print().",
          solution: `print("{{heading}}")\nprint("{{middle}}")\nprint("{{ending}}")`,
          success: "You completed a fresh three-line poster using only print().",
          check: { minimumPrints: 3, requiredOutput: ["{{ending}}"] },
          values: {
            heading: ["PYTHON LEARNER", "MY FIRST PROGRAM", "TODAY'S SMALL WIN", "HELLO, COMPUTER", "LEARNING IN PROGRESS", "CODE CAN BE FRIENDLY"],
            middle: ["One line at a time", "Run, notice, learn", "I choose the message", "Every try teaches me", "Simple code can be useful", "I am building confidence"],
            ending: ["Keep going!", "You can learn this!", "Run it again!", "Small steps win!", "My code works!", "More practice, more confidence!"]
          }
        }
      ]
    },
    challengeGenerator: {
      activities: [
        {
          id: "third-message-challenge",
          title: "The Third Message",
          mission: "Add one print() instruction so the program also displays: I am learning Python.",
          starterCode: `print("Hello, Python!")
print("My first program works.")`,
          hint: "Add a new line using print(\"I am learning Python.\")",
          solution: `print("Hello, Python!")
print("My first program works.")
print("I am learning Python.")`
        },
        {
          id: "welcome-sign-challenge",
          title: "The Welcome Sign",
          mission: "Change the two messages and add a third one to create your own three-line welcome sign.",
          starterCode: `print("WELCOME")
print("This is Python")`,
          hint: "Change the quoted text, then add one more complete print() instruction.",
          solution: `print("WELCOME")
print("This is my first program")
print("Come and learn with me")`
        },
        {
          id: "missing-parenthesis-challenge",
          title: "Close the Instruction",
          mission: "The second instruction is missing its final parenthesis. Repair it so both messages run.",
          starterCode: `print("First message")
print("Second message"`,
          hint: "A print instruction opens with ( and must also close with ).",
          solution: `print("First message")
print("Second message")`
        },
        {
          id: "morning-card-challenge",
          title: "A Morning Card",
          mission: "Replace the messages to make a friendly two-line morning card, then add a third line.",
          starterCode: `print("Good morning")
print("Welcome")`,
          hint: "Keep each message inside quotation marks and give every print() instruction its own line.",
          solution: `print("Good morning")
print("Today is a fresh start")
print("Have a wonderful day")`
        },
        {
          id: "punctuation-challenge",
          title: "Keep the Excitement",
          mission: "Make both messages exciting by changing their words and keeping punctuation inside the quotation marks.",
          starterCode: `print("Python is working!")
print("I wrote this!")`,
          hint: "Change the text, but keep each ! inside the quotation marks.",
          solution: `print("My program is working!")
print("I can write Python!")`
        },
        {
          id: "three-line-card-challenge",
          title: "My First Code Card",
          mission: "Turn the two starter messages into a three-line code card that says something about your learning.",
          starterCode: `print("MY CODE CARD")
print("I started Python")`,
          hint: "Change a quoted message if you wish, then add a third print() line.",
          solution: `print("MY CODE CARD")
print("I started Python")
print("I will keep practising")`
        }
      ]
    },
    quizGenerator: {
      activities: [
        {
          id: "print-tool",
          question: "Which Python tool displays a message as output?",
          code: "",
          options: ["input()", "print()", "message()", "show()"],
          correct: 1,
          explanation: "Correct — print() displays a message in the output."
        },
        {
          id: "first-output",
          question: "What will this instruction display?",
          code: `print("Hello!")`,
          options: [`print`, `"Hello!"`, `Hello!`, `Nothing`],
          correct: 2,
          explanation: "Correct — Python displays the message inside the quotation marks, without displaying the quotation marks."
        },
        {
          id: "quotation-purpose",
          question: "What do the quotation marks show in this instruction?",
          code: `print("Welcome")`,
          options: ["The text to display", "An error", "A button", "The program has ended"],
          correct: 0,
          explanation: "Correct — the quotation marks keep the message together as text for print() to display."
        },
        {
          id: "two-instructions",
          question: "How many output lines will this program display?",
          code: `print("One")
print("Two")`,
          options: ["0", "1", "2", "3"],
          correct: 2,
          explanation: "Correct — each print() instruction displays its message on a line."
        },
        {
          id: "complete-instruction",
          question: "Which line is a complete Python instruction?",
          code: "",
          options: [`print("Hello")`, `print"Hello"`, `print("Hello"`, `print(Hello")`],
          correct: 0,
          explanation: "Correct — the complete instruction has print, opening and closing parentheses, and matching quotation marks."
        },
        {
          id: "exact-message",
          question: "Which instruction displays: I can learn Python!",
          code: "",
          options: [`print("I can learn Python!")`, `print(I can learn Python!)`, `"I can learn Python!"`, `show("I can learn Python!")`],
          correct: 0,
          explanation: "Correct — print() contains the complete message inside matching quotation marks."
        }
      ]
    },
    quiz: {
      question: "Which Python function displays text as output?",
      options: ["input()", "print()", "text()", "show()"],
      correct: 1,
      explanation: "Correct — print() displays output."
    }
  },
  2: {
    title: "How Python Code Runs",
    stage: "Foundations",
    level: "Beginner",
    time: "14 minutes",
    tags: ["Code order", "Reading output"],
    intro: "Python follows your instructions in order. In this lesson, you will prove that by changing the order and running the program again.",
    explanation: "A Python program is a sequence of instructions. Python normally starts at the first line, runs it, then moves to the next line. This order matters: changing the order of the instructions can change the output.",
    concept: "Python normally runs code from top to bottom, one instruction at a time.",
    starterCode: `print("First: open the book")
print("Second: read one page")
print("Third: close the book")`,
    expectedOutput: `First: open the book
Second: read one page
Third: close the book`,
    lineByLine: [
      "Python reads the first line and displays the first message.",
      "It moves to the second line and displays the second message.",
      "It reaches the third line, displays the final message, and then the program ends."
    ],
    outputExplanation: "The messages appear in the same order as the <code>print()</code> instructions. The output is a visible record of what Python did first, second, and third.",
    changeIt: "Move the third <code>print()</code> line to the top. Before you run it, predict which message will appear first. Then run the code and check your prediction.",
    challenge: "Write a three-line morning routine. Each line should use <code>print()</code>. Put the steps in the order they should happen, then run the program.",
    hint: "Start with three separate lines. For example: <code>print(\"First: wake up\")</code>. Give the next two steps their own <code>print()</code> lines.",
    solution: `print("First: wake up")
print("Second: drink water")
print("Third: eat breakfast")`,
    practiceCoach: {
      knowledgeBoundary: {
        current: ["top-to-bottom execution", "instruction order", "predicting output"],
        previous: ["print", "parentheses", "quoted text", "running code"],
        prohibited: ["comments", "variables", "input", "number operations", "conditions", "loops", "collections", "user-defined functions", "imports"]
      },
      activities: [
        {
          id: "reverse-the-messages",
          stage: "Easy Start · Change the Order",
          title: "Turn It Around",
          mission: "Move the three complete print() lines so the output becomes Third, Second, First.",
          starterCode: `print("First")
print("Second")
print("Third")`,
          hint: "Move the last complete line to the top and the first complete line to the bottom.",
          success: "You changed the output by changing only the order of the instructions.",
          check: { minimumPrints: 3, expectedOutput: ["Third", "Second", "First"] }
        },
        {
          id: "morning-order",
          stage: "Easy Start · Put It in Order",
          title: "A Morning in Order",
          mission: "Rearrange the lines so the routine displays Wake up, Drink water, Eat breakfast.",
          starterCode: `print("Eat breakfast")
print("Wake up")
print("Drink water")`,
          hint: "Python starts with the top line. Put Wake up at the top, then Drink water.",
          success: "Your code now tells the morning story in a sensible order.",
          check: { minimumPrints: 3, expectedOutput: ["Wake up", "Drink water", "Eat breakfast"] }
        },
        {
          id: "missing-middle",
          stage: "Growing · Add the Next Step",
          title: "The Missing Middle",
          mission: "Add one instruction between the two lines so the output reads Start, Keep going, Finish.",
          starterCode: `print("Start")
print("Finish")`,
          hint: "Add print(\"Keep going\") between the existing lines.",
          success: "You placed a new instruction exactly where Python needed to run it.",
          check: { minimumPrints: 3, expectedOutput: ["Start", "Keep going", "Finish"] }
        },
        {
          id: "book-journey",
          stage: "Growing · Read the Story",
          title: "The Book Journey",
          mission: "Put the instructions in this order: Take the book, Read one page, Return the book.",
          starterCode: `print("Return the book")
print("Read one page")
print("Take the book")`,
          hint: "The first action belongs on the first line and the final action belongs on the last line.",
          success: "Python followed your reordered instructions and told the complete story.",
          check: { minimumPrints: 3, expectedOutput: ["Take the book", "Read one page", "Return the book"] }
        },
        {
          id: "launch-countdown",
          stage: "Growing · Predict and Arrange",
          title: "Launch Countdown",
          mission: "Rearrange the lines so the output counts down: 3, 2, 1, Launch!",
          starterCode: `print("Launch!")
print("1")
print("3")
print("2")`,
          hint: "Put 3 at the top. Launch! must be the final instruction.",
          success: "Your four instructions now run in countdown order.",
          check: { minimumPrints: 4, expectedOutput: ["3", "2", "1", "Launch!"] }
        },
        {
          id: "little-journey",
          stage: "Ready for a Challenge · Build With What You Know",
          title: "A Little Journey",
          mission: "Rearrange the four lines so the journey starts at Home, reaches the Park, visits the Lake, and returns Home.",
          starterCode: `print("Return Home")
print("Visit the Lake")
print("Start at Home")
print("Reach the Park")`,
          hint: "Find the starting instruction first, then follow the journey one step at a time.",
          success: "You controlled a four-step program by reading and arranging its instructions.",
          check: { minimumPrints: 4, expectedOutput: ["Start at Home", "Reach the Park", "Visit the Lake", "Return Home"] }
        }
      ]
    },
    freshPracticeGenerator: {
      templates: [
        {
          id: "fresh-three-step-order",
          skill: "Put It in Order",
          title: "A Fresh Three-Step Story",
          mission: "Rearrange the complete print() lines so Python displays this order: {{first}}, {{second}}, {{third}}.",
          starterCode: `print("{{third}}")\nprint("{{first}}")\nprint("{{second}}")`,
          hint: "Python starts at the top. Move the line containing '{{first}}' to the top and '{{third}}' to the bottom.",
          solution: `print("{{first}}")\nprint("{{second}}")\nprint("{{third}}")`,
          success: "You controlled the story by placing all three instructions in top-to-bottom order.",
          check: { minimumPrints: 3, mustChange: true, expectedOutput: ["{{first}}", "{{second}}", "{{third}}"] },
          values: {
            first: ["Wake up", "Open the curtains", "Get out of bed", "Stretch your arms", "Turn off the alarm", "Put on your slippers"],
            second: ["Drink some water", "Wash your face", "Get dressed", "Brush your teeth", "Pack your bag", "Eat breakfast"],
            third: ["Begin the day", "Leave for school", "Walk to the door", "Start learning", "Step outside", "Say good morning"]
          }
        },
        {
          id: "fresh-missing-middle",
          skill: "Add the Middle Step",
          title: "A Fresh Missing Middle",
          mission: "Add one print() instruction between the existing lines so the output becomes: {{start}}, {{middle}}, {{finish}}.",
          starterCode: `print("{{start}}")\nprint("{{finish}}")`,
          hint: "Keep the first and last lines where they are. Add print(\"{{middle}}\") between them.",
          solution: `print("{{start}}")\nprint("{{middle}}")\nprint("{{finish}}")`,
          success: "You added the missing instruction exactly where Python needed to run it.",
          check: { minimumPrints: 3, mustChange: true, expectedOutput: ["{{start}}", "{{middle}}", "{{finish}}"] },
          values: {
            start: ["Choose a book", "Open the book", "Find a quiet seat", "Pick a short story", "Turn to page one", "Begin reading"],
            middle: ["Read one page", "Follow the story", "Read the next part", "Look at the pictures", "Continue reading", "Reach the final page"],
            finish: ["Close the book", "Return the book", "Finish the story", "Mark your place", "Put the book away", "Think about the story"]
          }
        },
        {
          id: "fresh-four-step-order",
          skill: "Follow Four Steps",
          title: "Four Fresh Instructions",
          mission: "Put all four print() instructions into this order: {{one}}, {{two}}, {{three}}, {{four}}.",
          starterCode: `print("{{four}}")\nprint("{{two}}")\nprint("{{one}}")\nprint("{{three}}")`,
          hint: "Find '{{one}}' first. Python will then move downward through the remaining three lines.",
          solution: `print("{{one}}")\nprint("{{two}}")\nprint("{{three}}")\nprint("{{four}}")`,
          success: "Python followed your four instructions in exactly the order you predicted.",
          check: { minimumPrints: 4, mustChange: true, expectedOutput: ["{{one}}", "{{two}}", "{{three}}", "{{four}}"] },
          values: {
            one: ["Take a clean cup", "Choose your cup", "Place a cup on the table", "Find an empty cup", "Pick up a cup", "Set out a cup"],
            two: ["Pour in some water", "Add some juice", "Pour in some milk", "Fill it with water", "Add your drink", "Pour carefully"],
            three: ["Take a small drink", "Taste the drink", "Enjoy your drink", "Take the first sip", "Drink slowly", "Finish the drink"],
            four: ["Put the cup away", "Wash the cup", "Return the cup", "Leave the cup by the sink", "Place the cup down", "Clean the cup"]
          }
        },
        {
          id: "fresh-first-line",
          skill: "Choose What Runs First",
          title: "Move the First Message",
          mission: "Move the complete print() lines so '{{first}}' appears first, followed by '{{second}}' and '{{third}}'.",
          starterCode: `print("{{second}}")\nprint("{{third}}")\nprint("{{first}}")`,
          hint: "Move the final complete line to the top. Do not change the words inside the quotation marks.",
          solution: `print("{{first}}")\nprint("{{second}}")\nprint("{{third}}")`,
          success: "You changed which message appeared first by moving one complete instruction.",
          check: { minimumPrints: 3, mustChange: true, expectedOutput: ["{{first}}", "{{second}}", "{{third}}"] },
          values: {
            first: ["FIRST", "Step one", "Begin here", "Starting message", "First instruction", "The program begins"],
            second: ["SECOND", "Step two", "Continue here", "Middle message", "Second instruction", "The program continues"],
            third: ["THIRD", "Step three", "Finish here", "Final message", "Third instruction", "The program ends"]
          }
        },
        {
          id: "fresh-predict-order",
          skill: "Predict and Arrange",
          title: "A Fresh Output Prediction",
          mission: "Before running, predict the output. Then rearrange the lines so Python displays: {{top}}, {{middle}}, {{bottom}}.",
          starterCode: `print("{{middle}}")\nprint("{{bottom}}")\nprint("{{top}}")`,
          hint: "The output follows the same top-to-bottom order as the print() lines in the editor.",
          solution: `print("{{top}}")\nprint("{{middle}}")\nprint("{{bottom}}")`,
          success: "Your prediction matched the top-to-bottom order you created.",
          check: { minimumPrints: 3, mustChange: true, expectedOutput: ["{{top}}", "{{middle}}", "{{bottom}}"] },
          values: {
            top: ["Top shelf", "Top row", "Highest step", "Upper box", "Top position", "First level"],
            middle: ["Middle shelf", "Middle row", "Centre step", "Middle box", "Centre position", "Second level"],
            bottom: ["Bottom shelf", "Bottom row", "Lowest step", "Lower box", "Bottom position", "Third level"]
          }
        }
      ]
    },
    challengeGenerator: {
      activities: [
        {
          id: "morning-routine-challenge",
          title: "Morning Routine",
          mission: "Rearrange the instructions so the morning begins with waking up and ends with leaving home.",
          starterCode: `print("Leave home")
print("Eat breakfast")
print("Wake up")
print("Get dressed")`,
          hint: "Wake up belongs first. Leave home belongs last.",
          solution: `print("Wake up")
print("Get dressed")
print("Eat breakfast")
print("Leave home")`
        },
        {
          id: "sandwich-challenge",
          title: "Make a Sandwich",
          mission: "Put the four sandwich instructions into a sensible top-to-bottom order.",
          starterCode: `print("Eat the sandwich")
print("Add the filling")
print("Take two slices of bread")
print("Close the sandwich")`,
          hint: "Begin with the bread. Eating must be the final step.",
          solution: `print("Take two slices of bread")
print("Add the filling")
print("Close the sandwich")
print("Eat the sandwich")`
        },
        {
          id: "missing-scene-challenge",
          title: "Add the Missing Scene",
          mission: "Add a middle instruction so the story displays Open the door, Walk inside, Close the door.",
          starterCode: `print("Open the door")
print("Close the door")`,
          hint: "Add print(\"Walk inside\") between the two existing lines.",
          solution: `print("Open the door")
print("Walk inside")
print("Close the door")`
        },
        {
          id: "plant-seed-challenge",
          title: "Plant a Seed",
          mission: "Arrange the instructions so they describe planting and caring for a seed.",
          starterCode: `print("Water the soil")
print("Cover the seed")
print("Make a small hole")
print("Place the seed inside")`,
          hint: "A hole is needed before the seed can go inside. Water comes after covering it.",
          solution: `print("Make a small hole")
print("Place the seed inside")
print("Cover the seed")
print("Water the soil")`
        },
        {
          id: "three-two-one-challenge",
          title: "Ready, Set, Go",
          mission: "Reorder the messages so the program builds up to Go!",
          starterCode: `print("Go!")
print("Set")
print("Ready")`,
          hint: "Ready is the beginning and Go! is the ending.",
          solution: `print("Ready")
print("Set")
print("Go!")`
        },
        {
          id: "school-bag-challenge",
          title: "Pack the School Bag",
          mission: "Put the packing steps in order, then add a final instruction that displays: Bag ready!",
          starterCode: `print("Close the bag")
print("Put in the notebook")
print("Open the bag")`,
          hint: "Open comes first, Close comes after putting in the notebook, and Bag ready! comes last.",
          solution: `print("Open the bag")
print("Put in the notebook")
print("Close the bag")
print("Bag ready!")`
        }
      ]
    },
    quizGenerator: {
      activities: [
        {
          id: "first-instruction",
          question: "What will Python normally display first?",
          code: `print("A")
print("B")`,
          options: ["A", "B", "A and B at exactly the same time", "Nothing"],
          correct: 0,
          explanation: "Correct — Python starts with the top instruction, so A appears first."
        },
        {
          id: "changed-order",
          question: "Which message appears first in this program?",
          code: `print("Third")
print("First")
print("Second")`,
          options: ["First", "Second", "Third", "Python chooses"],
          correct: 2,
          explanation: "Correct — the word Third is on the top line, so Python displays it first."
        },
        {
          id: "complete-output-order",
          question: "Which option shows the complete output in order?",
          code: `print("Red")
print("Green")
print("Blue")`,
          options: ["Blue, Green, Red", "Red, Green, Blue", "Green, Blue, Red", "Red only"],
          correct: 1,
          explanation: "Correct — the output follows the same top-to-bottom order as the instructions."
        },
        {
          id: "move-line-effect",
          question: "If print(\"Tea\") moves above print(\"Water\"), what appears first?",
          code: `print("Tea")
print("Water")`,
          options: ["Water", "Tea", "Both disappear", "An error"],
          correct: 1,
          explanation: "Correct — Tea is now the first instruction, so it becomes the first output line."
        },
        {
          id: "last-output",
          question: "What will be the final output line?",
          code: `print("Start")
print("Middle")
print("Finish")`,
          options: ["Start", "Middle", "Finish", "All on one line"],
          correct: 2,
          explanation: "Correct — Finish comes from the last instruction."
        },
        {
          id: "add-between",
          question: "Where should print(\"Two\") go to create the output One, Two, Three?",
          code: `print("One")
print("Three")`,
          options: ["Before print(\"One\")", "Between the two lines", "After print(\"Three\")", "It cannot be added"],
          correct: 1,
          explanation: "Correct — placing the instruction between One and Three creates the required output order."
        }
      ]
    },
    quiz: {
      question: "What will Python normally do first when this program runs?",
      code: `print("A")
print("B")`,
      options: ["Display A", "Display B", "Display both at the same time", "Ask which line to run"],
      correct: 0,
      explanation: "Correct — Python starts with the first instruction, so A appears before B."
    }
  },
  3: {
    title: "Comments & Code Readability",
    stage: "Foundations",
    level: "Beginner",
    time: "12 minutes",
    tags: ["Comments", "Readable code"],
    intro: "Comments are notes for humans. You will see Python ignore a comment, then use a comment to temporarily stop one line of code.",
    explanation: "A <strong>comment</strong> is a note inside your code that helps a person understand it. In Python, a comment begins with <code>#</code>. Python ignores everything after <code>#</code> on that line and runs only the instructions that are not comments.",
    concept: "Comments begin with #. Python does not execute them, but they can make a program easier for humans to understand.",
    starterCode: `# My first readable program
print("Welcome to Python")

# Another message
print("I can read this code")`,
    expectedOutput: `Welcome to Python
I can read this code`,
    lineByLine: [
      '<code># My first readable program</code> is a note for the person reading the code. Python ignores it.',
      '<code>print("Welcome to Python")</code> is an instruction, so Python displays its message.',
      "The blank line separates two small ideas. It does not produce output.",
      '<code># Another message</code> explains why the next instruction is there, and Python ignores this comment too.',
      "Consistent spacing and useful comments make code easier to scan. Avoid comments that merely repeat an obvious instruction."
    ],
    outputExplanation: "Only the two <code>print()</code> instructions appear in the output. The comments are visible to you in the editor, but Python does not display or execute them. A comment may also appear after code, such as <code>print(\"Hello\")  # Display a greeting</code>.",
    changeIt: "First, change the opening comment to <code># This program prints two messages</code> and run the code. The output stays the same because Python ignores comments.<br><br>Next, place <code>#</code> before <code>print(\"Welcome to Python\")</code> and run again. That instruction is now <strong>commented out</strong>, so only the second message appears.",
    challenge: "Make the program below easier to understand without changing the words inside its messages. Add a useful comment before the first line and another before the final line. Then comment out the middle <code>print()</code> instruction so it does not run:<br><br><code>print(\"Starting program\")</code><br><code>print(\"Checking information\")</code><br><code>print(\"Program finished\")</code>",
    hint: "A comment begins with <code>#</code>. To temporarily stop an instruction from running, place <code>#</code> at the beginning of that line.",
    solution: `# Start the program
print("Starting program")

# print("Checking information")

# Show that the program has finished
print("Program finished")`,
    practiceCoach: {
      knowledgeBoundary: {
        current: ["comments with #", "commenting out code", "inline comments", "readable formatting"],
        previous: ["print()", "quoted text", "top-to-bottom execution", "predicting output"],
        prohibited: ["variables", "input", "number operations", "conditions", "loops", "collections", "user-defined functions", "imports"]
      },
      activities: [
        {
          id: "change-the-note",
          stage: "Easy Start · See What Python Ignores",
          title: "Change the Note",
          mission: "Replace the opening comment with your own useful note. Run the program and notice that its output stays exactly the same.",
          starterCode: `# Display a friendly greeting
print("Hello, learner!")`,
          hint: "Change only the words after #. Keep the print() instruction unchanged.",
          success: "You changed a note for humans without changing what Python displayed.",
          check: { minimumComments: 1, mustChange: true, expectedOutput: ["Hello, learner!"] }
        },
        {
          id: "quiet-middle-line",
          stage: "Easy Start · Comment Out Code",
          title: "Make One Line Quiet",
          mission: "Temporarily stop the middle message by placing # at the beginning of its print() line. Do not delete it.",
          starterCode: `print("First message")
print("Pause this message")
print("Final message")`,
          hint: "Turn the middle line into: # print(\"Pause this message\")",
          success: "You commented out one instruction, and Python skipped it without losing the code.",
          check: { mustChange: true, minimumComments: 1, commentedCode: [`print("Pause this message")`], expectedOutput: ["First message", "Final message"] }
        },
        {
          id: "two-helpful-signposts",
          stage: "Growing · Explain the Story",
          title: "Add Helpful Signposts",
          mission: "Add one useful comment before the first message and another before the last message. Keep all three messages running in the same order.",
          starterCode: `print("Open the book")
print("Read one page")
print("Close the book")`,
          hint: "Add a # note on its own line above the first print() and another above the final print().",
          success: "You added human-friendly signposts without changing the program's behaviour.",
          check: { mustChange: true, minimumComments: 2, expectedOutput: ["Open the book", "Read one page", "Close the book"] }
        },
        {
          id: "repair-the-comment",
          stage: "Growing · Fix and Learn",
          title: "Repair the Comment",
          mission: "This human note is missing #, so Python sees an error. Add #, run again, and make the message appear.",
          starterCode: `Display the welcome message
print("Welcome!")`,
          hint: "A Python comment must begin with #: # Display the welcome message",
          success: "You turned plain words into a valid Python comment and repaired the program.",
          check: { mustChange: true, minimumComments: 1, expectedOutput: ["Welcome!"] }
        },
        {
          id: "clean-the-spacing",
          stage: "Growing · Make It Readable",
          title: "Clean the Little Program",
          mission: "Remove the unnecessary spaces and improve the comment. Keep the three output messages unchanged and in order.",
          starterCode: `#messages
print(  "Ready"  )
print( "Set" )
print(   "Go!"   )`,
          hint: "Use the clean shape print(\"message\") and make the # note explain the group of messages.",
          success: "Your cleaner formatting is easier for a human to scan and still works the same way.",
          check: { mustChange: true, minimumComments: 1, expectedOutput: ["Ready", "Set", "Go!"] }
        },
        {
          id: "predict-the-silent-line",
          stage: "Ready for a Challenge · Predict and Test",
          title: "Choose the Silent Step",
          mission: "Before running, predict the output. Then comment out only the line that displays Pack the bag and confirm the remaining steps stay in order.",
          starterCode: `# Morning steps
print("Wake up")
print("Pack the bag")
print("Leave home")`,
          hint: "Put # immediately before the second print() instruction. Leave the opening comment as it is.",
          success: "You predicted and tested how one commented instruction changes a top-to-bottom program.",
          check: { mustChange: true, minimumComments: 2, commentedCode: [`print("Pack the bag")`], expectedOutput: ["Wake up", "Leave home"] }
        }
      ]
    },
    freshPracticeGenerator: {
      templates: [
        {
          id: "fresh-change-comment",
          skill: "Change a Human Note",
          title: "A Fresh Comment",
          mission: "Replace the opening comment with your own useful note. Run the program and confirm that the output stays the same.",
          starterCode: `# Display a message\nprint("{{message}}")`,
          hint: "Change only the words after #. Python ignores the comment but still runs the print() instruction.",
          solution: `# Explain the message\nprint("{{message}}")`,
          success: "You changed a note for humans without changing Python's output.",
          check: { minimumComments: 1, mustChange: true, expectedOutput: ["{{message}}"] },
          values: {
            message: ["Welcome, learner!", "My program is ready", "Python is listening", "One small step", "I can read this code", "Practice makes progress"]
          }
        },
        {
          id: "fresh-comment-middle",
          skill: "Comment Out Code",
          title: "Make a Fresh Line Quiet",
          mission: "Comment out only the middle print() instruction. Keep it in the editor, then run the program and predict what remains.",
          starterCode: `print("{{first}}")\nprint("{{silent}}")\nprint("{{last}}")`,
          hint: "Place # at the beginning of the line that displays '{{silent}}'. Do not delete the line.",
          solution: `print("{{first}}")\n# print("{{silent}}")\nprint("{{last}}")`,
          success: "Python skipped the commented instruction and kept the other messages in order.",
          check: { mustChange: true, minimumComments: 1, commentedCode: [`print("{{silent}}")`], expectedOutput: ["{{first}}", "{{last}}"] },
          values: {
            first: ["Start the program", "Begin here", "First message", "Step one", "The program begins", "Show this first"],
            silent: ["Pause this message", "Skip this step", "Make this quiet", "Hide this message", "Do not show this", "Comment out this line"],
            last: ["Finish the program", "End here", "Final message", "Step three", "The program ends", "Show this last"]
          }
        },
        {
          id: "fresh-add-signposts",
          skill: "Add Helpful Signposts",
          title: "Fresh Readable Signposts",
          mission: "Add one useful # comment before the first message and another before the final message. Keep all three messages running in order.",
          starterCode: `print("{{first}}")\nprint("{{middle}}")\nprint("{{last}}")`,
          hint: "Add a comment on its own line above the first print(), then another above the final print().",
          solution: `# Begin the three-step story\nprint("{{first}}")\nprint("{{middle}}")\n\n# Show the final step\nprint("{{last}}")`,
          success: "You added two useful signposts without changing the program's behaviour.",
          check: { mustChange: true, minimumComments: 2, expectedOutput: ["{{first}}", "{{middle}}", "{{last}}"] },
          values: {
            first: ["Begin the activity", "Start the program", "Show the first step", "The story begins", "Open the task", "First message"],
            middle: ["Continue the activity", "Run the next instruction", "Show the middle step", "The story continues", "Try the task", "Middle message"],
            last: ["Finish the activity", "End the program", "Show the final step", "The story ends", "Close the task", "Final message"]
          }
        },
        {
          id: "fresh-repair-note",
          skill: "Repair a Comment",
          title: "Repair a Fresh Human Note",
          mission: "The first line is meant for humans, but it is missing #. Repair that line so Python can run both messages.",
          starterCode: `{{note}}\nprint("{{first}}")\nprint("{{second}}")`,
          hint: "Place # and one space before the words on the first line.",
          solution: `# {{note}}\nprint("{{first}}")\nprint("{{second}}")`,
          success: "You turned the human note into a valid Python comment and repaired the program.",
          check: { mustChange: true, minimumComments: 1, expectedOutput: ["{{first}}", "{{second}}"] },
          values: {
            note: ["Show two friendly messages", "Display the beginning and ending", "Explain the two output lines", "Show the program status", "Display two readable lines", "Introduce this tiny program"],
            first: ["Welcome!", "The program begins", "First line ready", "Program started", "Hello, learner!", "The story begins"],
            second: ["Keep learning!", "The program ends", "Second line ready", "Program finished", "You can do this!", "The story ends"]
          }
        },
        {
          id: "fresh-restore-line",
          skill: "Restore a Commented Line",
          title: "Wake a Quiet Line",
          mission: "The middle print() instruction is commented out. Remove only the # before that instruction so all three messages run in order.",
          starterCode: `# Display three ordered messages\nprint("{{first}}")\n# print("{{middle}}")\nprint("{{last}}")`,
          hint: "Keep the helpful opening comment. Remove # only from the line that displays '{{middle}}'.",
          solution: `# Display three ordered messages\nprint("{{first}}")\nprint("{{middle}}")\nprint("{{last}}")`,
          success: "You restored a commented instruction and made all three messages run again.",
          check: { mustChange: true, minimumComments: 1, expectedOutput: ["{{first}}", "{{middle}}", "{{last}}"] },
          values: {
            first: ["Ready", "First", "Step one", "Start", "Begin", "Message one"],
            middle: ["Set", "Second", "Step two", "Continue", "Keep going", "Message two"],
            last: ["Go!", "Third", "Step three", "Finish", "Done", "Message three"]
          }
        }
      ]
    },
    challengeGenerator: {
      activities: [
        {
          id: "program-status-challenge",
          title: "Program Status",
          mission: "Add a useful opening comment and a useful comment before the final message. Comment out the middle instruction without deleting it.",
          starterCode: `print("Starting program")
print("Checking information")
print("Program finished")`,
          hint: "Use three # symbols: two for notes and one before the middle print() instruction.",
          solution: `# Start the program
print("Starting program")

# print("Checking information")

# Show that the program has finished
print("Program finished")`
        },
        {
          id: "recipe-step-challenge",
          title: "The Recipe Step",
          mission: "Add a comment that explains this tiny recipe, then temporarily comment out Wash the cup. The other steps must keep their order.",
          starterCode: `print("Choose a cup")
print("Wash the cup")
print("Pour the juice")`,
          hint: "Add a # note above the steps, then add # before the second print() line.",
          solution: `# Prepare a drink
print("Choose a cup")
# print("Wash the cup")
print("Pour the juice")`
        },
        {
          id: "repair-human-note-challenge",
          title: "A Note Python Understands",
          mission: "Repair the first line so Python treats it as a comment and the two messages run successfully.",
          starterCode: `Show two travel messages
print("Ticket ready")
print("Time to go")`,
          hint: "Place # and one space before the words on the first line.",
          solution: `# Show two travel messages
print("Ticket ready")
print("Time to go")`
        },
        {
          id: "clean-countdown-challenge",
          title: "A Readable Countdown",
          mission: "Clean the unnecessary spaces and replace the vague comment with a useful one. Do not change the output.",
          starterCode: `#numbers
print(  "Three" )
print( "Two"   )
print(   "One" )`,
          hint: "Use print(\"message\") consistently and let the comment explain that this is a countdown.",
          solution: `# Display a short countdown
print("Three")
print("Two")
print("One")`
        },
        {
          id: "inline-comment-challenge",
          title: "One Helpful Inline Note",
          mission: "Add a short inline comment after the first instruction to explain that it displays the heading. Keep both messages running.",
          starterCode: `print("TODAY")
print("Keep learning")`,
          hint: "After the closing parenthesis on the first line, add two spaces, #, and your note.",
          solution: `print("TODAY")  # Display the heading
print("Keep learning")`
        },
        {
          id: "weekend-plan-challenge",
          title: "The Weekend Plan",
          mission: "Add useful comments to separate the beginning and end. Temporarily comment out Buy snacks, but keep the other two messages running.",
          starterCode: `print("Choose a film")
print("Buy snacks")
print("Enjoy the evening")`,
          hint: "Use notes above the first and last instructions, and place # before the middle instruction.",
          solution: `# Begin the evening plan
print("Choose a film")

# print("Buy snacks")

# Finish the evening plan
print("Enjoy the evening")`
        }
      ]
    },
    quizGenerator: {
      activities: [
        {
          id: "comment-symbol",
          question: "Which symbol begins a Python comment?",
          code: "",
          options: ["//", "#", "<!--", "*"],
          correct: 1,
          explanation: "Correct — # begins a Python comment that continues to the end of that line."
        },
        {
          id: "ignored-first-line",
          question: "What will this program display?",
          code: `# print("First")
print("Second")`,
          options: ["First, then Second", "Second", "First", "Nothing"],
          correct: 1,
          explanation: "Correct — the first instruction is commented out, so Python displays only Second."
        },
        {
          id: "changed-comment-output",
          question: "If you change only the words in this comment, what happens to the output?",
          code: `# Display a greeting
print("Hello")`,
          options: ["The output stays Hello", "Python displays the new comment", "The program always stops", "Hello disappears"],
          correct: 0,
          explanation: "Correct — changing a comment does not change the output because Python ignores the comment."
        },
        {
          id: "inline-comment",
          question: "What does Python display from this line?",
          code: `print("Ready")  # Display the status`,
          options: ["Ready", "Display the status", "Ready # Display the status", "Nothing"],
          correct: 0,
          explanation: "Correct — Python runs the instruction before # and ignores the inline comment after it."
        },
        {
          id: "useful-comment",
          question: "Which comment adds more useful context?",
          code: `print("Hello")`,
          options: ["# Print Hello", "# Show the welcome message when the program starts", "# Code", "# print"],
          correct: 1,
          explanation: "Correct — the better comment explains why the message exists instead of merely repeating the code."
        },
        {
          id: "readable-version",
          question: "Which version is easiest for a person to read?",
          code: "",
          options: [`# Display two messages\nprint("Hello")\nprint("Python")`, `#messages\nprint(  "Hello" )\nprint( "Python"    )`, `print("Hello");print("Python")`, `# Print Hello\nprint("Hello")# Print Python\nprint("Python")`],
          correct: 0,
          explanation: "Correct — consistent spacing and one useful comment make the first version clear without adding clutter."
        }
      ]
    },
    quiz: {
      question: "What will this program display?",
      code: `# print("First")
print("Second")`,
      options: ["First, then Second", "Second", "First", "Nothing"],
      correct: 1,
      explanation: "Correct — the first line is a comment, so Python runs only the second line and displays Second."
    }
  },
  4: {
    title: "Variables",
    stage: "Foundations",
    level: "Beginner",
    time: "15 minutes",
    tags: ["Remembering values", "Meaningful names"],
    intro: "Until now, Python has followed instructions. Today, you will give a value a name, use it later, and watch the program remember your choice.",
    explanation: "A <strong>variable</strong> is a name that lets us refer to a value. Think of it as a useful label. In <code>name = \"Amina\"</code>, Python remembers the text <code>\"Amina\"</code> under the name <code>name</code>. Nothing is displayed until we ask <code>print()</code> to show that value.",
    concept: "A variable gives a useful name to a value so we can use that value again and change it in one place.",
    starterCode: `name = "Learner"
city = "Your city"

print("NAME")
print(name)

print("CITY")
print(city)`,
    expectedOutput: `NAME
Learner
CITY
Your city`,
    lineByLine: [
      '<code>name = "Learner"</code> gives the text <code>"Learner"</code> the useful name <code>name</code>. Read <code>=</code> here as “give this value this name.”',
      '<code>city = "Your city"</code> creates another variable. Python is now remembering two values.',
      '<code>print("NAME")</code> displays the text inside quotation marks, exactly as you learned earlier.',
      '<code>print(name)</code> has no quotation marks around <code>name</code>, so Python looks up the value remembered by that variable.',
      "Names such as <code>name</code>, <code>city</code>, and <code>total_price</code> explain what their values mean. Variable names cannot contain spaces or begin with a number, and capital letters matter."
    ],
    outputExplanation: "The labels <code>NAME</code> and <code>CITY</code> come directly from the two text-printing instructions. The other lines come from the values stored in <code>name</code> and <code>city</code>. Replace those two values with your own information and the program tells your story without changing its <code>print()</code> instructions.",
    changeIt: "First, replace <code>\"Learner\"</code> and <code>\"Your city\"</code> with your own name and city, then run the program.<br><br>Next, try this small prediction: set <code>weather = \"sunny\"</code>, print it, then set <code>weather = \"rainy\"</code> and print it again. The variable name stays the same, but its value changes as the program moves forward.",
    challenge: "Build a tiny Player Card. Change only the three values near the top—not the <code>print()</code> instructions. Give the player a new name, move them to a new place, and make them reach level 2:<br><br><code>player = \"Alex\"</code><br><code>level = 1</code><br><code>place = \"Green Valley\"</code><br><br><code>print(\"PLAYER\")</code><br><code>print(player)</code><br><code>print(\"LEVEL\")</code><br><code>print(level)</code><br><code>print(\"LOCATION\")</code><br><code>print(place)</code>",
    hint: "Look only at the three variable lines near the top. Change the values after <code>=</code>. Leave every <code>print()</code> instruction unchanged.",
    solution: `player = "Amina"
level = 2
place = "Crystal Forest"

print("PLAYER")
print(player)

print("LEVEL")
print(level)

print("LOCATION")
print(place)`,
    practiceCoach: {
      knowledgeBoundary: {
        current: ["variables", "assignment", "reassignment", "meaningful names"],
        previous: ["print", "top-to-bottom execution", "comments", "quoted text"],
        prohibited: ["input", "conditions", "loops", "collections", "functions", "f-strings", "imports"]
      },
      activities: [
        {
          id: "my-profile",
          stage: "Easy Start · Make It Yours",
          title: "My Profile",
          mission: "Load the practice, replace both starter values with a name and city of your choice, then run it and check your work.",
          starterCode: `name = "Your name"
city = "Your city"

print("NAME")
print(name)

print("CITY")
print(city)`,
          hint: "Look at the two lines containing =. Change only the text inside quotation marks.",
          success: "You gave two values meaningful names, and Python used your choices.",
          check: { variables: [
            { name: "name", notValues: ["your name"], minimumPrints: 1 },
            { name: "city", notValues: ["your city"], minimumPrints: 1 }
          ] }
        },
        {
          id: "favourite-things",
          stage: "Easy Start · Make It Yours",
          title: "Favourite Things",
          mission: "Change the food and colour to two things you like. Leave the variable names in place, run the program, then check it.",
          starterCode: `favourite_food = "pizza"
favourite_colour = "yellow"

print("FAVOURITE FOOD")
print(favourite_food)

print("FAVOURITE COLOUR")
print(favourite_colour)`,
          hint: "Change \"pizza\" and \"yellow\" after the = signs. Keep the quotation marks.",
          success: "Your new values changed the whole little profile without changing its print instructions.",
          check: { variables: [
            { name: "favourite_food", notValues: ["pizza"], minimumPrints: 1 },
            { name: "favourite_colour", notValues: ["yellow"], minimumPrints: 1 }
          ] }
        },
        {
          id: "weather-story",
          stage: "Growing · Change the Story",
          title: "Weather Changes",
          mission: "Give weather three different values as the day moves forward. Run the program and watch the same variable tell three parts of the story.",
          starterCode: `weather = "sunny"
print(weather)

weather = "rainy"
print(weather)

weather = "windy"
print(weather)`,
          hint: "Keep the name weather each time. Change the three values inside quotation marks so all three are different.",
          success: "The variable name stayed the same while its value changed three times—exactly what reassignment does.",
          check: { variables: [
            { name: "weather", minimumAssignments: 3, distinctValues: 3, minimumPrints: 3 }
          ] }
        },
        {
          id: "pet-profile",
          stage: "Growing · Build With What You Know",
          title: "Pet Profile",
          mission: "Create a pet by changing its name, kind, and age. Run the profile and check that Python remembers all three choices.",
          starterCode: `pet_name = "Milo"
pet_kind = "cat"
pet_age = 2

print("PET")
print(pet_name)
print(pet_kind)
print(pet_age)`,
          hint: "Change the three values after =. Text keeps quotation marks; the small age number does not need them.",
          success: "Python remembered three different pieces of information for your pet profile.",
          check: { variables: [
            { name: "pet_name", notValues: ["milo"], minimumPrints: 1 },
            { name: "pet_kind", notValues: ["cat"], minimumPrints: 1 },
            { name: "pet_age", notValues: ["2"], minimumPrints: 1 }
          ] }
        },
        {
          id: "visitor-card",
          stage: "Growing · Change the Story",
          title: "Visitor Card",
          mission: "Change the visitor and place. Then give place a second value before its final print so the visitor moves somewhere new.",
          starterCode: `visitor = "Amina"
place = "Python Lab"

print(visitor)
print(place)

place = "Learning Garden"
print(place)`,
          hint: "There are two place = lines. Give them different values, and keep both print(place) instructions.",
          success: "You changed personal data and reassigned place to move the visitor through the story.",
          check: { variables: [
            { name: "visitor", notValues: ["amina"], minimumPrints: 1 },
            { name: "place", minimumAssignments: 2, distinctValues: 2, minimumPrints: 2 }
          ] }
        },
        {
          id: "player-card",
          stage: "Ready for a Challenge · Build With What You Know",
          title: "Player Card",
          mission: "Change the player and location, and make the player reach level 2. Do not replace the meaningful variable names.",
          starterCode: `player = "Alex"
level = 1
place = "Green Valley"

print("PLAYER")
print(player)

print("LEVEL")
print(level)

print("LOCATION")
print(place)`,
          hint: "Only the three values near the top need attention. The level must become 2.",
          success: "You changed the data—not the whole program—and created a new level 2 Player Card.",
          check: { variables: [
            { name: "player", notValues: ["alex"], minimumPrints: 1 },
            { name: "level", equals: 2, minimumPrints: 1 },
            { name: "place", notValues: ["green valley"], minimumPrints: 1 }
          ] }
        }
      ]
    },
    freshPracticeGenerator: {
      templates: [
        {
          id: "fresh-profile-values",
          skill: "Give Values Useful Names",
          title: "A Fresh Profile",
          mission: "Change the two values so name remembers '{{targetName}}' and city remembers '{{targetCity}}'. Keep both variable names and print() instructions unchanged.",
          starterCode: `name = "{{starterName}}"\ncity = "{{starterCity}}"\n\nprint(name)\nprint(city)`,
          hint: "Change only the text after each = sign. Keep the quotation marks around both text values.",
          solution: `name = "{{targetName}}"\ncity = "{{targetCity}}"\n\nprint(name)\nprint(city)`,
          success: "Python remembered and displayed both fresh profile values.",
          check: { mustChange: true, variables: [
            { name: "name", equals: "{{targetName}}", minimumPrints: 1 },
            { name: "city", equals: "{{targetCity}}", minimumPrints: 1 }
          ] },
          values: {
            starterName: ["Learner", "Alex", "Sam", "Noor", "Mina", "Taylor"],
            starterCity: ["Your city", "River Town", "Green City", "Hill View", "Sunny Bay", "Old Town"],
            targetName: ["Amina", "Sara", "Naveed", "Omar", "Maya", "Lina"],
            targetCity: ["Longford", "Dublin", "Cork", "Galway", "Limerick", "Waterford"]
          }
        },
        {
          id: "fresh-reassignment",
          skill: "Reassign a Variable",
          title: "A Fresh Changing Story",
          mission: "The variable weather changes as the program runs. Replace its final value with '{{target}}', then predict and check all three output lines.",
          starterCode: `weather = "{{first}}"\nprint(weather)\n\nweather = "{{second}}"\nprint(weather)\n\nweather = "{{third}}"\nprint(weather)`,
          hint: "Change only the value in the final weather = line. The same variable name is used throughout the story.",
          solution: `weather = "{{first}}"\nprint(weather)\n\nweather = "{{second}}"\nprint(weather)\n\nweather = "{{target}}"\nprint(weather)`,
          success: "You reassigned one variable and watched its latest value appear at the end.",
          check: { mustChange: true, variables: [
            { name: "weather", minimumAssignments: 3, distinctValues: 3, minimumPrints: 3, equals: "{{target}}" }
          ] },
          values: {
            first: ["sunny", "clear", "bright", "cool", "calm", "dry"],
            second: ["cloudy", "rainy", "windy", "misty", "warm", "breezy"],
            third: ["stormy", "cold", "foggy", "wet", "hot", "still"],
            target: ["snowy", "fresh", "chilly", "showery", "humid", "peaceful"]
          }
        },
        {
          id: "fresh-player-card",
          skill: "Change Data, Keep the Program",
          title: "A Fresh Player Card",
          mission: "Change only the three stored values. Set player to '{{playerValue}}', level to {{levelValue}}, and place to '{{placeValue}}'.",
          starterCode: `player = "Alex"\nlevel = 1\nplace = "Green Valley"\n\nprint(player)\nprint(level)\nprint(place)`,
          hint: "Edit the values after the three = signs. Text needs quotation marks; the level number does not.",
          solution: `player = "{{playerValue}}"\nlevel = {{levelValue}}\nplace = "{{placeValue}}"\n\nprint(player)\nprint(level)\nprint(place)`,
          success: "You changed the data while every print() instruction stayed reusable.",
          check: { mustChange: true, variables: [
            { name: "player", equals: "{{playerValue}}", minimumPrints: 1 },
            { name: "level", equals: "{{levelValue}}", minimumPrints: 1 },
            { name: "place", equals: "{{placeValue}}", minimumPrints: 1 }
          ] },
          values: {
            playerValue: ["Amina", "Zara", "Omar", "Maya", "Noah", "Lina"],
            levelValue: [2, 3, 4, 5, 6, 7],
            placeValue: ["Crystal Forest", "Moon Harbour", "Blue Mountain", "Quiet Island", "Golden Cave", "Python Garden"]
          }
        },
        {
          id: "fresh-repair-name",
          skill: "Repair a Variable Name",
          title: "Repair a Fresh Variable",
          mission: "The variable name contains a space, so Python cannot run it. Replace the space with _ to create favourite_food, then run the program.",
          starterCode: `favourite food = "{{value}}"\n\nprint(favourite food)`,
          hint: "Variable names cannot contain spaces. Use an underscore in both the assignment and print() lines.",
          solution: `favourite_food = "{{value}}"\n\nprint(favourite_food)`,
          success: "You repaired the variable name and Python displayed its remembered value.",
          check: { mustChange: true, variables: [
            { name: "favourite_food", equals: "{{value}}", minimumPrints: 1 }
          ] },
          values: {
            value: ["pizza", "pasta", "rice", "soup", "apples", "sandwiches"]
          }
        },
        {
          id: "fresh-case-matters",
          skill: "Notice Capital Letters",
          title: "A Fresh Case-Sensitive Pair",
          mission: "Python treats name and Name as different variables. Set name to '{{lowerValue}}' and Name to '{{upperValue}}', then predict both output lines.",
          starterCode: `name = "Learner"\nName = "Visitor"\n\nprint(name)\nprint(Name)`,
          hint: "Change the two text values, but keep the first variable lowercase and the second one capitalised.",
          solution: `name = "{{lowerValue}}"\nName = "{{upperValue}}"\n\nprint(name)\nprint(Name)`,
          success: "You used two case-sensitive variable names and Python kept their values separate.",
          check: { mustChange: true, variables: [
            { name: "name", equals: "{{lowerValue}}", minimumPrints: 1 },
            { name: "Name", equals: "{{upperValue}}", minimumPrints: 1 }
          ] },
          values: {
            lowerValue: ["Amina", "Sara", "Omar", "Maya", "Noah", "Lina"],
            upperValue: ["Teacher", "Guide", "Visitor", "Helper", "Friend", "Coach"]
          }
        }
      ]
    },
    challengeGenerator: {
      activities: [
        {
          id: "player-card-challenge",
          title: "The Player Card",
          mission: "Change the player and location, then make the player reach level 2. Change only the values—not the print instructions.",
          starterCode: `player = "Alex"
level = 1
place = "Green Valley"

print("PLAYER")
print(player)
print("LEVEL")
print(level)
print("LOCATION")
print(place)`,
          hint: "Look at the three lines containing = near the top. The level value needs to become 2.",
          solution: `player = "Amina"
level = 2
place = "Crystal Forest"

print("PLAYER")
print(player)
print("LEVEL")
print(level)
print("LOCATION")
print(place)`
        },
        {
          id: "explorer-badge-challenge",
          title: "The Explorer Badge",
          mission: "Create a new explorer by changing the explorer, badge, and destination values. Keep all three variable names and print instructions.",
          starterCode: `explorer = "Noah"
badge = "Beginner"
destination = "Moon Base"

print("EXPLORER")
print(explorer)
print("BADGE")
print(badge)
print("DESTINATION")
print(destination)`,
          hint: "Only change the text inside quotation marks on the three variable lines.",
          solution: `explorer = "Sara"
badge = "Brave Learner"
destination = "Ocean Station"

print("EXPLORER")
print(explorer)
print("BADGE")
print(badge)
print("DESTINATION")
print(destination)`
        },
        {
          id: "moving-day-challenge",
          title: "Moving Day",
          mission: "Make the person move from one city to another. Change the person, give city two different values, and keep both print(city) instructions.",
          starterCode: `person = "Maya"
city = "Galway"

print(person)
print(city)

city = "Dublin"
print(city)`,
          hint: "The name city should stay the same, but its first and second values should be different.",
          solution: `person = "Hamza"
city = "Cork"

print(person)
print(city)

city = "Longford"
print(city)`
        },
        {
          id: "robot-status-challenge",
          title: "Robot Status",
          mission: "Give the robot a new name. Then change status from one value to another so the output shows the robot's little journey.",
          starterCode: `robot = "Pico"
status = "sleeping"

print(robot)
print(status)

status = "ready"
print(status)`,
          hint: "Change the robot value and both status values. Keep the variable names exactly as they are.",
          solution: `robot = "Nova"
status = "charging"

print(robot)
print(status)

status = "exploring"
print(status)`
        },
        {
          id: "book-shelf-challenge",
          title: "The Book Shelf",
          mission: "Create a different book card by changing its title, shelf, and copy number. Let the existing print instructions display your choices.",
          starterCode: `book_title = "Python Journey"
shelf = "Green Shelf"
copy_number = 1

print("BOOK")
print(book_title)
print("SHELF")
print(shelf)
print("COPY")
print(copy_number)`,
          hint: "Change the three values after =. Keep quotation marks around text; the copy number can stay a small number.",
          solution: `book_title = "My First Program"
shelf = "Yellow Shelf"
copy_number = 3

print("BOOK")
print(book_title)
print("SHELF")
print(shelf)
print("COPY")
print(copy_number)`
        },
        {
          id: "team-card-challenge",
          title: "The Team Card",
          mission: "Change the member, role, and team number to build a new team card without rewriting the output instructions.",
          starterCode: `member = "Leo"
role = "Helper"
team_number = 1

print("MEMBER")
print(member)
print("ROLE")
print(role)
print("TEAM")
print(team_number)`,
          hint: "The information lives in the three variable lines at the top. Change those values and leave print() alone.",
          solution: `member = "Zara"
role = "Explorer"
team_number = 4

print("MEMBER")
print(member)
print("ROLE")
print(role)
print("TEAM")
print(team_number)`
        }
      ]
    },
    quizGenerator: {
      activities: [
        {
          id: "latest-score",
          question: "What will this program display?",
          code: `score = 5
score = 10

print(score)`,
          options: ["5", "10", "5 10", "score"],
          correct: 1,
          explanation: "Correct — score received a newer value before print(score), so Python displays 10."
        },
        {
          id: "variable-or-text",
          question: "What will the second print instruction display?",
          code: `city = "Cork"

print("city")
print(city)`,
          options: ["city", "Cork", "city Cork", "Nothing"],
          correct: 1,
          explanation: "Correct — city without quotation marks means: use the value remembered by the variable."
        },
        {
          id: "changing-message",
          question: "Which two lines will appear in the output?",
          code: `message = "Hello"
print(message)

message = "Goodbye"
print(message)`,
          options: ["Hello, then Goodbye", "Goodbye, then Hello", "Hello twice", "Goodbye twice"],
          correct: 0,
          explanation: "Correct — Python prints the first value, then the reassigned value as it runs from top to bottom."
        },
        {
          id: "case-matters",
          question: "What will this program display?",
          code: `name = "Amina"
Name = "Sara"

print(name)
print(Name)`,
          options: ["Amina, then Sara", "Sara, then Amina", "Sara twice", "Amina twice"],
          correct: 0,
          explanation: "Correct — Python treats name and Name as two different variable names because capital letters matter."
        },
        {
          id: "meaningful-name",
          question: "Which variable name most clearly explains the value it stores?",
          code: `# Each line could store the same city name.`,
          options: [`x = "Dublin"`, `a = "Dublin"`, `city = "Dublin"`, `thing = "Dublin"`],
          correct: 2,
          explanation: "Correct — city tells a human reader what the value represents."
        },
        {
          id: "valid-variable-name",
          question: "Which line uses a valid, readable Python variable name?",
          code: `# Choose one line.`,
          options: [`first name = "Amina"`, `2name = "Amina"`, `first_name = "Amina"`, `first-name = "Amina"`],
          correct: 2,
          explanation: "Correct — first_name contains no spaces, does not begin with a number, and clearly describes its value."
        }
      ]
    },
    quiz: {
      question: "What will this program display?",
      code: `score = 5
score = 10

print(score)`,
      options: ["5", "10", "5 10", "score"],
      correct: 1,
      explanation: "Correct — score was given a newer value before print(score), so Python displays 10."
    }
  },
  5: {
    title: "Numbers — Integers and Floats",
    stage: "Foundations",
    level: "Beginner",
    time: "18 minutes",
    tags: ["Integers & floats", "First calculations"],
    intro: "Variables gave Python something to remember. Today, you will give it numbers, make it calculate, and change the values to watch the answer change.",
    explanation: "Python commonly works with two kinds of numbers. An <strong>integer</strong> is a whole number such as <code>4</code>, <code>0</code>, or <code>-3</code>. A <strong>float</strong> contains a decimal point, such as <code>2.5</code> or <code>10.0</code>. A value's kind is called its <strong>type</strong>. Unlike text, numbers do not need quotation marks.",
    concept: "Integers are whole numbers, floats contain a decimal point, and Python can calculate with both.",
    starterCode: `apples = 4
oranges = 3

total_fruit = apples + oranges

print(apples)
print(oranges)
print(total_fruit)`,
    expectedOutput: `4
3
7`,
    lineByLine: [
      '<code>apples = 4</code> gives the whole number <code>4</code> the useful name <code>apples</code>. Because it has no decimal point, it is an integer.',
      '<code>oranges = 3</code> remembers another integer. Numbers do not need quotation marks.',
      '<code>total_fruit = apples + oranges</code> asks Python to add the two remembered values and names the answer <code>total_fruit</code>.',
      '<code>print(apples)</code> and <code>print(oranges)</code> display the two starting values in top-to-bottom order.',
      '<code>print(total_fruit)</code> displays the calculated answer: <code>7</code>.'
    ],
    outputExplanation: "The first two output lines are the remembered values. The third line is Python's calculated answer. If one value changes, Python recalculates <code>total_fruit</code>. A float may lose an unnecessary final zero when displayed—for example, <code>3.50</code> may appear as <code>3.5</code>.",
    changeIt: "First, change <code>apples</code> from <code>4</code> to <code>10</code>. Predict the new total, then run the program.<br><br>Next, change <code>+</code> to <code>-</code> and predict again. Finally, try <code>price = 2.5</code>, <code>quantity = 4</code>, and <code>total = price * quantity</code>. Notice that the result is displayed as a float.",
    challenge: "Create a café order. Store a drink price and snack price as floats, add them, and display the total price:<br><br><code>drink_price = 2.5</code><br><code>snack_price = 3.0</code><br><code>total_price = drink_price + snack_price</code><br><code>print(total_price)</code>",
    hint: "Numbers do not need quotation marks. Use <code>+</code> to add, <code>-</code> to subtract, <code>*</code> to multiply, and <code>/</code> to divide.",
    solution: `drink_price = 2.5
snack_price = 3.0

total_price = drink_price + snack_price
print(total_price)`,
    practiceCoach: {
      knowledgeBoundary: {
        current: ["integers", "floats", "addition", "subtraction", "multiplication", "division", "calculated variables"],
        previous: ["print()", "comments", "variables", "changing values", "top-to-bottom execution"],
        prohibited: ["input", "string-number joining", "f-strings", "comparisons", "conditions", "loops", "collections", "user-defined functions", "imports"]
      },
      activities: [
        {
          id: "add-the-fruit",
          stage: "Easy Start · Add Two Values",
          title: "Add the Fruit",
          mission: "Change both fruit amounts, predict their total, then run the program and check your calculation.",
          starterCode: `apples = 3
bananas = 2

total = apples + bananas
print(total)`,
          hint: "Change only the two number values first. Keep total = apples + bananas.",
          success: "Python added the two integer values you chose.",
          check: { mustChange: true, variables: [{ name: "apples", notValues: ["3"] }, { name: "bananas", notValues: ["2"] }], calculation: { target: "total", left: "apples", operator: "+", right: "bananas" } }
        },
        {
          id: "points-remaining",
          stage: "Easy Start · Find What Remains",
          title: "Points Remaining",
          mission: "Change the starting points and used points, then use subtraction to find what remains.",
          starterCode: `points = 20
used = 6

remaining = points - used
print(remaining)`,
          hint: "Keep remaining = points - used, and make the starting points larger than the used points.",
          success: "You used subtraction to calculate a remaining amount.",
          check: { mustChange: true, variables: [{ name: "points", notValues: ["20"] }, { name: "used", notValues: ["6"] }], calculation: { target: "remaining", left: "points", operator: "-", right: "used" } }
        },
        {
          id: "boxes-of-pencils",
          stage: "Growing · Build Equal Groups",
          title: "Boxes of Pencils",
          mission: "Change the number of boxes and pencils in each box. Predict the total, then let Python multiply.",
          starterCode: `boxes = 4
pencils_each = 6

total_pencils = boxes * pencils_each
print(total_pencils)`,
          hint: "Python uses * for multiplication. Keep total_pencils = boxes * pencils_each.",
          success: "You used multiplication to calculate several equal groups.",
          check: { mustChange: true, variables: [{ name: "boxes", notValues: ["4"] }, { name: "pencils_each", notValues: ["6"] }], calculation: { target: "total_pencils", left: "boxes", operator: "*", right: "pencils_each" } }
        },
        {
          id: "share-the-slices",
          stage: "Growing · Share an Amount",
          title: "Share the Slices",
          mission: "Change the slices and friends to values that share evenly. Run the program and notice the float result.",
          starterCode: `slices = 12
friends = 3

slices_each = slices / friends
print(slices_each)`,
          hint: "Python uses / for division. Try values such as 20 slices and 4 friends.",
          success: "You used division and saw Python display the share as a float.",
          check: { mustChange: true, variables: [{ name: "slices", notValues: ["12"] }, { name: "friends", notValues: ["3"] }], calculation: { target: "slices_each", left: "slices", operator: "/", right: "friends" } }
        },
        {
          id: "repair-the-calculation",
          stage: "Growing · Fix and Learn",
          title: "Repair the Calculation",
          mission: "The calculation is missing an operator. Add + so Python can calculate and display all the tickets.",
          starterCode: `adult_tickets = 2
child_tickets = 3

total_tickets = adult_tickets child_tickets
print(total_tickets)`,
          hint: "Put + between adult_tickets and child_tickets.",
          success: "You read an error, repaired the calculation, and produced the correct total.",
          check: { mustChange: true, calculation: { target: "total_tickets", left: "adult_tickets", operator: "+", right: "child_tickets" } }
        },
        {
          id: "update-the-score",
          stage: "Ready for a Challenge · Update a Value",
          title: "Update the Score",
          mission: "Change the starting score and bonus. Predict the updated score before running the program.",
          starterCode: `score = 10
bonus = 5

score = score + bonus
print(score)`,
          hint: "Python reads the old score, adds the bonus, then stores the answer back in score.",
          success: "You used a variable's old value to calculate and remember its new value.",
          check: { mustChange: true, variables: [{ name: "score", notValues: ["10"] }, { name: "bonus", notValues: ["5"] }], calculation: { target: "score", left: "score", operator: "+", right: "bonus" } }
        }
      ]
    },
    freshPracticeGenerator: {
      scenarios: [
        { id: "fruit-total", skill: "Addition", title: "A Fresh Fruit Total", mission: "A basket contains apples and oranges. Use addition to find all the fruit.", leftName: "apples", rightName: "oranges", targetName: "total_fruit", operator: "+", numberType: "integer", minimum: 1, maximum: 40, hint: "Keep total_fruit = apples + oranges. Change only the two whole-number values first.", success: "You created and checked a fresh addition calculation." },
        { id: "game-score", skill: "Addition", title: "A New Game Score", mission: "A player earns a bonus. Add it to the starting score.", leftName: "starting_score", rightName: "bonus", targetName: "final_score", operator: "+", numberType: "integer", minimum: 1, maximum: 100, hint: "Use + between starting_score and bonus.", success: "You calculated a new game score with values you chose." },
        { id: "cafe-total", skill: "Float Addition", title: "A Fresh Café Order", mission: "Add the prices of a drink and a snack.", leftName: "drink_price", rightName: "snack_price", targetName: "total_price", operator: "+", numberType: "float", minimum: 1, maximum: 15, hint: "Keep the decimal points and use + to calculate total_price.", success: "You added two float prices and checked the café total." },
        { id: "points-left", skill: "Subtraction", title: "Points Left", mission: "Some points were used. Subtract them from the starting amount.", leftName: "points", rightName: "used", targetName: "remaining", operator: "-", numberType: "integer", minimum: 1, maximum: 100, hint: "Use remaining = points - used. Keep the starting amount larger.", success: "You found a fresh remaining amount with subtraction." },
        { id: "seats-left", skill: "Subtraction", title: "Seats Still Free", mission: "Subtract the occupied seats from all available seats.", leftName: "total_seats", rightName: "occupied_seats", targetName: "free_seats", operator: "-", numberType: "integer", minimum: 5, maximum: 120, hint: "Keep free_seats = total_seats - occupied_seats.", success: "You calculated how many seats are still free." },
        { id: "pencil-boxes", skill: "Multiplication", title: "New Pencil Boxes", mission: "Every box contains the same number of pencils. Find the complete number of pencils.", leftName: "boxes", rightName: "pencils_each", targetName: "total_pencils", operator: "*", numberType: "integer", minimum: 2, maximum: 15, hint: "Python uses * for multiplication.", success: "You multiplied equal groups and checked the total." },
        { id: "reading-plan", skill: "Multiplication", title: "A Fresh Reading Plan", mission: "Multiply the number of days by the pages read each day.", leftName: "days", rightName: "pages_each_day", targetName: "total_pages", operator: "*", numberType: "integer", minimum: 2, maximum: 20, hint: "Keep total_pages = days * pages_each_day.", success: "You built and checked a new reading calculation." },
        { id: "share-coins", skill: "Division", title: "Share New Treasure", mission: "Share all the coins equally between the players.", leftName: "coins", rightName: "players", targetName: "coins_each", operator: "/", rightMinimum: 2, rightMaximum: 10, quotientMinimum: 2, quotientMaximum: 20, hint: "Use coins_each = coins / players. The starter values divide evenly.", success: "You divided a fresh treasure into equal shares." },
        { id: "share-slices", skill: "Division", title: "Share Fresh Slices", mission: "Share the slices equally between the friends.", leftName: "slices", rightName: "friends", targetName: "slices_each", operator: "/", rightMinimum: 2, rightMaximum: 10, quotientMinimum: 2, quotientMaximum: 12, hint: "Keep slices_each = slices / friends. The starter values divide evenly.", success: "You used division to calculate a new equal share." }
      ]
    },
    challengeGenerator: {
      activities: [
        {
          id: "shopping-total-challenge",
          title: "The Shopping Total",
          mission: "Change the price and quantity, then calculate the complete cost with multiplication.",
          starterCode: `price = 2.5
quantity = 4

total = price * quantity
print(total)`,
          hint: "Change the two values near the top. Keep * between price and quantity.",
          solution: `price = 3.5
quantity = 3

total = price * quantity
print(total)`
        },
        {
          id: "game-score-challenge",
          title: "The Game Score",
          mission: "Give the player a different starting score and bonus, then display the correct final score.",
          starterCode: `starting_score = 20
bonus = 10

final_score = starting_score + bonus
print(final_score)`,
          hint: "Use + to combine the starting score and bonus.",
          solution: `starting_score = 35
bonus = 15

final_score = starting_score + bonus
print(final_score)`
        },
        {
          id: "seats-remaining-challenge",
          title: "Seats Remaining",
          mission: "Change the total and occupied seats, then calculate how many seats remain.",
          starterCode: `total_seats = 30
occupied_seats = 18

remaining_seats = total_seats - occupied_seats
print(remaining_seats)`,
          hint: "Subtract occupied_seats from total_seats.",
          solution: `total_seats = 50
occupied_seats = 32

remaining_seats = total_seats - occupied_seats
print(remaining_seats)`
        },
        {
          id: "pages-read-challenge",
          title: "Pages Read",
          mission: "Create a new reading plan. Multiply the days by pages read each day and predict the total.",
          starterCode: `days = 5
pages_each_day = 8

total_pages = days * pages_each_day
print(total_pages)`,
          hint: "Use * because the same number of pages is read each day.",
          solution: `days = 7
pages_each_day = 6

total_pages = days * pages_each_day
print(total_pages)`
        },
        {
          id: "share-treasure-challenge",
          title: "Share the Treasure",
          mission: "Change the coins and players, then calculate each player's equal share.",
          starterCode: `coins = 24
players = 4

coins_each = coins / players
print(coins_each)`,
          hint: "Use / to divide the coins by the number of players.",
          solution: `coins = 30
players = 5

coins_each = coins / players
print(coins_each)`
        },
        {
          id: "cafe-order-challenge",
          title: "The Café Order",
          mission: "Change both prices and make Python add the complete order. Keep the prices as floats.",
          starterCode: `drink_price = 2.5
snack_price = 3.0

total_price = drink_price + snack_price
print(total_price)`,
          hint: "Floats contain a decimal point. Add the two price variables with +.",
          solution: `drink_price = 3.25
snack_price = 2.75

total_price = drink_price + snack_price
print(total_price)`
        }
      ]
    },
    quizGenerator: {
      activities: [
        {
          id: "recognise-integer",
          question: "Which value is an integer?",
          code: "",
          options: [`"5"`, "5.0", "5", `"five"`],
          correct: 2,
          explanation: "Correct — 5 is a whole number with no decimal point, so it is an integer."
        },
        {
          id: "recognise-float",
          question: "Which value is a float?",
          code: "",
          options: ["12", "12.5", `"12.5"`, "twelve"],
          correct: 1,
          explanation: "Correct — 12.5 is a number containing a decimal point, so it is a float."
        },
        {
          id: "addition-output",
          question: "What will this program display?",
          code: `apples = 4
oranges = 3

total = apples + oranges
print(total)`,
          options: ["43", "7", "apples + oranges", "total"],
          correct: 1,
          explanation: "Correct — Python adds 4 and 3, stores 7 in total, and displays it."
        },
        {
          id: "multiplication-operator",
          question: "Which operator does Python use for multiplication?",
          code: "",
          options: ["×", "x", "*", "+"],
          correct: 2,
          explanation: "Correct — Python uses * for multiplication."
        },
        {
          id: "division-output",
          question: "What will this program display?",
          code: `total = 10 / 2
print(total)`,
          options: ["5", "5.0", "10 / 2", "2"],
          correct: 1,
          explanation: "Correct — normal division with / produces a float, so Python displays 5.0."
        },
        {
          id: "updated-score",
          question: "What will this program display?",
          code: `score = 10
bonus = 5

score = score + bonus
print(score)`,
          options: ["5", "10", "15", "score"],
          correct: 2,
          explanation: "Correct — Python adds the bonus to the old score and stores the new value 15 in score."
        }
      ]
    },
    quiz: {
      question: "What will this program display?",
      code: `price = 2.5
quantity = 4

total = price * quantity
print(total)`,
      options: ["6.5", "8", "10.0", "2.54"],
      correct: 2,
      explanation: "Correct — 2.5 multiplied by 4 is 10.0. Because the calculation uses a float, Python displays a float result."
    }
  },
  6: {
    title: "Arithmetic Operators",
    stage: "Foundations",
    level: "Beginner",
    time: "20 minutes",
    tags: ["Seven operators", "Useful calculations"],
    intro: "Python already knows your numbers. Today, you will choose what it does with them—from adding a total to finding complete groups, leftovers, and powers.",
    explanation: "An <strong>arithmetic operator</strong> is a symbol that tells Python which calculation to perform. You already met <code>+</code>, <code>-</code>, <code>*</code>, and <code>/</code>. Now you will use all seven arithmetic operators and learn why <code>//</code>, <code>%</code>, and <code>**</code> are especially useful.",
    concept: "Operators tell Python how to calculate: add, subtract, multiply, divide, count complete groups, find a remainder, or raise a number to a power.",
    starterCode: `items = 17
group_size = 4

print(items + group_size)
print(items - group_size)
print(items * group_size)
print(items / group_size)
print(items // group_size)
print(items % group_size)
print(2 ** 3)`,
    expectedOutput: `21
13
68
4.25
4
1
8`,
    lineByLine: [
      '<code>items + group_size</code> uses <code>+</code> to add <code>17</code> and <code>4</code>, producing <code>21</code>.',
      '<code>items - group_size</code> uses <code>-</code> to subtract <code>4</code> from <code>17</code>, producing <code>13</code>.',
      '<code>items * group_size</code> uses <code>*</code> to multiply the two values, producing <code>68</code>.',
      '<code>items / group_size</code> uses ordinary division. The full answer is the float <code>4.25</code>.',
      '<code>items // group_size</code> asks how many complete groups of four fit inside seventeen. The answer is <code>4</code>.',
      '<code>items % group_size</code> asks what remains after making those complete groups. One item remains, so the answer is <code>1</code>.',
      '<code>2 ** 3</code> means two raised to the power of three: <code>2 * 2 * 2</code>, which is <code>8</code>.'
    ],
    outputExplanation: "The first four lines use familiar calculations. The next two describe the same sharing story in a more useful way: <code>//</code> gives the number of complete groups, while <code>%</code> gives what is left over. The final line uses <code>**</code> for a power.",
    changeIt: "First, change <code>items</code> to <code>18</code>. Before running, predict the results of <code>/</code>, <code>//</code>, and <code>%</code>.<br><br>Next, change <code>group_size</code> to <code>5</code> and predict again. Finally, change <code>2 ** 3</code> to <code>3 ** 2</code>. Use parentheses when you want to make a calculation order clear, such as <code>(2 + 3) * 4</code>.",
    challenge: "Build a party-group calculator. Store <code>guests = 17</code> and <code>group_size = 4</code>. Use <code>//</code> to calculate complete groups and <code>%</code> to calculate people left over. Display both answers.",
    hint: "Use <code>full_groups = guests // group_size</code> and <code>people_left = guests % group_size</code>.",
    solution: `guests = 17
group_size = 4

full_groups = guests // group_size
people_left = guests % group_size

print(full_groups)
print(people_left)`,
    practiceCoach: {
      knowledgeBoundary: {
        current: ["addition", "subtraction", "multiplication", "ordinary division", "floor division", "remainder", "powers", "parentheses"],
        previous: ["print()", "comments", "variables", "integers", "floats", "calculated variables", "top-to-bottom execution"],
        prohibited: ["input", "f-strings", "comparisons", "conditions", "loops", "collections", "user-defined functions", "imports"]
      },
      activities: [
        { id: "operator-add", stage: "Easy Start · Add", title: "Add the Tickets", mission: "Change both ticket amounts and calculate their total with +.", starterCode: `adult_tickets = 5
child_tickets = 3

total_tickets = adult_tickets + child_tickets
print(total_tickets)`, hint: "Keep + between the two ticket variables.", success: "You used + to combine two amounts.", check: { mustChange: true, variables: [{ name: "adult_tickets", notValues: ["5"] }, { name: "child_tickets", notValues: ["3"] }], calculation: { target: "total_tickets", left: "adult_tickets", operator: "+", right: "child_tickets" } } },
        { id: "operator-subtract", stage: "Easy Start · Subtract", title: "Seats Remaining", mission: "Change both values and use - to calculate how many seats remain.", starterCode: `total_seats = 30
occupied_seats = 18

free_seats = total_seats - occupied_seats
print(free_seats)`, hint: "Subtract occupied_seats from total_seats.", success: "You used - to find what remains.", check: { mustChange: true, variables: [{ name: "total_seats", notValues: ["30"] }, { name: "occupied_seats", notValues: ["18"] }], calculation: { target: "free_seats", left: "total_seats", operator: "-", right: "occupied_seats" } } },
        { id: "operator-multiply", stage: "Growing · Multiply", title: "Pages in a Reading Plan", mission: "Change the days and pages per day, then calculate all pages with *.", starterCode: `days = 6
pages_each_day = 8

total_pages = days * pages_each_day
print(total_pages)`, hint: "Use * because the same number of pages is read each day.", success: "You used * to calculate equal groups.", check: { mustChange: true, variables: [{ name: "days", notValues: ["6"] }, { name: "pages_each_day", notValues: ["8"] }], calculation: { target: "total_pages", left: "days", operator: "*", right: "pages_each_day" } } },
        { id: "operator-divide", stage: "Growing · Divide", title: "Share the Juice", mission: "Change both values so the juice shares evenly, then calculate each share with /.", starterCode: `litres = 12
friends = 3

litres_each = litres / friends
print(litres_each)`, hint: "Use / for the full division answer. Do not set friends to zero.", success: "You used / and saw an ordinary division result.", check: { mustChange: true, variables: [{ name: "litres", notValues: ["12"] }, { name: "friends", notValues: ["3"] }], calculation: { target: "litres_each", left: "litres", operator: "/", right: "friends" } } },
        { id: "operator-floor", stage: "Growing · Complete Groups", title: "Build Complete Teams", mission: "Change the players and team size, then use // to find the number of complete teams.", starterCode: `players = 19
team_size = 4

full_teams = players // team_size
print(full_teams)`, hint: "Use // when you need the number of complete whole groups.", success: "You used // to count complete teams.", check: { mustChange: true, variables: [{ name: "players", notValues: ["19"] }, { name: "team_size", notValues: ["4"] }], calculation: { target: "full_teams", left: "players", operator: "//", right: "team_size" } } },
        { id: "operator-remainder", stage: "Growing · Find What Is Left", title: "Cakes Left Over", mission: "Change the cakes and tray size, then use % to calculate how many cakes remain outside complete trays.", starterCode: `cakes = 22
tray_size = 5

left_over = cakes % tray_size
print(left_over)`, hint: "% gives the remainder after making complete groups.", success: "You used % to find the leftover amount.", check: { mustChange: true, variables: [{ name: "cakes", notValues: ["22"] }, { name: "tray_size", notValues: ["5"] }], calculation: { target: "left_over", left: "cakes", operator: "%", right: "tray_size" } } },
        { id: "operator-power", stage: "Ready for a Challenge · Powers", title: "A Small Power", mission: "Change the base and exponent to small positive numbers, then calculate the power with **.", starterCode: `base = 3
exponent = 2

answer = base ** exponent
print(answer)`, hint: "Python uses ** for powers. Keep the numbers small while experimenting.", success: "You used ** to calculate a power.", check: { mustChange: true, variables: [{ name: "base", notValues: ["3"] }, { name: "exponent", notValues: ["2"] }], calculation: { target: "answer", left: "base", operator: "**", right: "exponent" } } }
      ]
    },
    freshPracticeGenerator: {
      scenarios: [
        { id: "fresh-ticket-total", skill: "Addition", title: "A Fresh Ticket Total", mission: "Add the adult and child tickets.", leftName: "adult_tickets", rightName: "child_tickets", targetName: "total_tickets", operator: "+", numberType: "integer", minimum: 1, maximum: 60, hint: "Use + to combine both ticket amounts.", success: "You checked a fresh addition calculation." },
        { id: "fresh-seats-left", skill: "Subtraction", title: "Fresh Seats Remaining", mission: "Subtract the occupied seats from all seats.", leftName: "total_seats", rightName: "occupied_seats", targetName: "free_seats", operator: "-", numberType: "integer", minimum: 5, maximum: 120, hint: "Use total_seats - occupied_seats.", success: "You checked a fresh subtraction calculation." },
        { id: "fresh-reading-total", skill: "Multiplication", title: "A Fresh Reading Total", mission: "Multiply the days by the pages read each day.", leftName: "days", rightName: "pages_each_day", targetName: "total_pages", operator: "*", numberType: "integer", minimum: 2, maximum: 20, hint: "Use * for equal groups.", success: "You checked a fresh multiplication calculation." },
        { id: "fresh-share", skill: "Ordinary Division", title: "A Fresh Equal Share", mission: "Share the slices equally between friends.", leftName: "slices", rightName: "friends", targetName: "slices_each", operator: "/", rightMinimum: 2, rightMaximum: 10, quotientMinimum: 2, quotientMaximum: 15, hint: "Use / for ordinary division.", success: "You checked a fresh ordinary-division calculation." },
        { id: "fresh-teams", skill: "Complete Groups", title: "Fresh Complete Teams", mission: "Find how many complete teams can be made.", leftName: "players", rightName: "team_size", targetName: "full_teams", operator: "//", rightMinimum: 2, rightMaximum: 9, quotientMinimum: 2, quotientMaximum: 15, remainderMinimum: 0, remainderMaximum: 8, hint: "Use // to count complete whole teams.", success: "You checked a fresh complete-groups calculation." },
        { id: "fresh-leftovers", skill: "Remainder", title: "Fresh Leftovers", mission: "Find how many items remain after complete boxes are filled.", leftName: "items", rightName: "box_size", targetName: "left_over", operator: "%", rightMinimum: 2, rightMaximum: 10, quotientMinimum: 2, quotientMaximum: 15, remainderMinimum: 1, remainderMaximum: 9, hint: "Use % to find the remainder.", success: "You checked a fresh remainder calculation." },
        { id: "fresh-power", skill: "Powers", title: "A Fresh Small Power", mission: "Raise the base to the exponent.", leftName: "base", rightName: "exponent", targetName: "answer", operator: "**", baseMinimum: 2, baseMaximum: 8, exponentMinimum: 2, exponentMaximum: 4, hint: "Use ** between the base and exponent.", success: "You checked a fresh power calculation." }
      ]
    },
    challengeGenerator: {
      activities: [
        { id: "party-groups", title: "The Party Groups", mission: "Change the guests and group size. Calculate complete groups with // and people left over with %.", starterCode: `guests = 17
group_size = 4

full_groups = guests // group_size
people_left = guests % group_size

print(full_groups)
print(people_left)`, hint: "The same two values can be used in both calculations.", solution: `guests = 23
group_size = 5

full_groups = guests // group_size
people_left = guests % group_size

print(full_groups)
print(people_left)` },
        { id: "school-buses", title: "School Buses", mission: "Find the number of full buses and pupils waiting for another bus.", starterCode: `pupils = 94
bus_size = 30

full_buses = pupils // bus_size
waiting = pupils % bus_size

print(full_buses)
print(waiting)`, hint: "Use // for full buses and % for the remainder.", solution: `pupils = 107
bus_size = 32

full_buses = pupils // bus_size
waiting = pupils % bus_size

print(full_buses)
print(waiting)` },
        { id: "score-power", title: "Power Up the Score", mission: "Change the small base and exponent, then predict the powered score.", starterCode: `base_score = 4
power = 3

powered_score = base_score ** power
print(powered_score)`, hint: "Use ** between base_score and power.", solution: `base_score = 5
power = 2

powered_score = base_score ** power
print(powered_score)` },
        { id: "calculation-order", title: "Choose the Order", mission: "Run both calculations and explain why their answers differ.", starterCode: `first_answer = 2 + 3 * 4
second_answer = (2 + 3) * 4

print(first_answer)
print(second_answer)`, hint: "Multiplication happens before addition unless parentheses choose another order.", solution: `first_answer = 2 + 3 * 4
second_answer = (2 + 3) * 4

print(first_answer)
print(second_answer)` },
        { id: "bakery-trays", title: "Bakery Trays", mission: "Use // and % to describe complete trays and leftover cakes.", starterCode: `cakes = 38
tray_size = 6

full_trays = cakes // tray_size
left_over = cakes % tray_size

print(full_trays)
print(left_over)`, hint: "Both calculations use cakes and tray_size.", solution: `cakes = 50
tray_size = 8

full_trays = cakes // tray_size
left_over = cakes % tray_size

print(full_trays)
print(left_over)` },
        { id: "operator-repair", title: "Repair the Operator", mission: "Replace the incorrect + operator so the program finds the remainder.", starterCode: `coins = 23
players = 5

coins_left = coins + players
print(coins_left)`, hint: "The remainder operator is %.", solution: `coins = 23
players = 5

coins_left = coins % players
print(coins_left)` }
      ]
    },
    quizGenerator: {
      activities: [
        { id: "quiz-add", question: "Which operator adds two values?", code: "", options: ["+", "-", "//", "**"], correct: 0, explanation: "Correct — + adds one value to another." },
        { id: "quiz-division", question: "What will this program display?", code: `print(9 / 2)`, options: ["4", "4.0", "4.5", "1"], correct: 2, explanation: "Correct — / gives the full division result, so 9 / 2 is 4.5." },
        { id: "quiz-floor", question: "What will this program display?", code: `print(17 // 4)`, options: ["4", "4.25", "1", "68"], correct: 0, explanation: "Correct — four complete groups of four fit inside seventeen." },
        { id: "quiz-remainder", question: "What will this program display?", code: `print(17 % 4)`, options: ["4", "4.25", "1", "0"], correct: 2, explanation: "Correct — after four complete groups of four, one remains." },
        { id: "quiz-power", question: "What will this program display?", code: `print(2 ** 4)`, options: ["6", "8", "16", "24"], correct: 2, explanation: "Correct — 2 ** 4 means 2 * 2 * 2 * 2, which is 16." },
        { id: "quiz-order", question: "What will this program display?", code: `print(2 + 3 * 4)`, options: ["20", "14", "24", "9"], correct: 1, explanation: "Correct — Python multiplies 3 * 4 first, then adds 2, producing 14." },
        { id: "quiz-parentheses", question: "What will this program display?", code: `print((2 + 3) * 4)`, options: ["14", "20", "24", "9"], correct: 1, explanation: "Correct — parentheses make Python add 2 + 3 first, then multiply 5 by 4." }
      ]
    },
    quiz: {
      question: "What will this program display?",
      code: `items = 17
box_size = 4

print(items // box_size)
print(items % box_size)`,
      options: ["4 then 1", "4.25 then 1", "1 then 4", "4 then 0"],
      correct: 0,
      explanation: "Correct — // finds four complete boxes, and % finds the one item left over."
    }
  },
  7: {
    title: "Strings — Creating and Using Text",
    stage: "Foundations",
    level: "Beginner",
    time: "20 minutes",
    tags: ["Text values", "Quotation marks"],
    intro: "Python has remembered numbers and calculated with them. Today, it will remember names, places, messages, and other text chosen by you.",
    explanation: "A <strong>string</strong> is text stored inside quotation marks. In <code>name = \"Amina\"</code>, the quotation marks tell Python where the text begins and ends. The variable <code>name</code> lets us use that text later.",
    concept: "A string is text inside matching quotation marks. Store it in a meaningful variable, then use print() to display it.",
    starterCode: `name = "Amina"
city = "Longford"
message = "Python can remember text."

print(name)
print(city)
print(message)`,
    expectedOutput: `Amina
Longford
Python can remember text.`,
    lineByLine: [
      '<code>name = "Amina"</code> stores the string <code>"Amina"</code> under the useful variable name <code>name</code>.',
      '<code>city = "Longford"</code> stores another string. The matching quotation marks show where its text starts and ends.',
      '<code>message = "Python can remember text."</code> shows that a string can contain spaces and punctuation—not only one word.',
      '<code>print(name)</code> looks up the value stored in <code>name</code> and displays <code>Amina</code>.',
      '<code>print(city)</code> and <code>print(message)</code> display the other remembered strings in top-to-bottom order.',
      'The quotation marks help Python recognise each string, but they do not normally appear in the output.'
    ],
    outputExplanation: "Python displays the text stored in each variable without displaying the surrounding quotation marks. There is an important difference between <code>print(name)</code> and <code>print(\"name\")</code>: the first displays the variable's value, while the second displays the exact word <code>name</code>.",
    changeIt: "Replace <code>\"Amina\"</code>, <code>\"Longford\"</code>, and the message with text of your choice. Predict all three output lines, then run the program.<br><br>Next, add <code>print(\"name\")</code> below <code>print(name)</code>. Run again and explain why one line displays your chosen name while the other displays the word <code>name</code>.",
    challenge: "Create a welcome card using three string variables: <code>visitor</code>, <code>place</code>, and <code>message</code>. Change only their text values, then display all three.",
    hint: "Put every text value inside matching quotation marks. Use <code>print(visitor)</code>, not <code>print(\"visitor\")</code>, to display the stored visitor name.",
    solution: `visitor = "Amina"
place = "Python Lab"
message = "You are ready to learn."

print(visitor)
print(place)
print(message)`,
    practiceCoach: {
      knowledgeBoundary: {
        current: ["strings", "single quotes", "double quotes", "empty strings", "literal text", "string variables", "repairing quotation errors"],
        previous: ["print()", "comments", "variables", "numbers", "arithmetic", "top-to-bottom execution"],
        prohibited: ["string concatenation", "string repetition", "membership", "indexing", "slicing", "string methods", "f-strings", "input", "conditions", "loops", "collections", "functions"]
      },
      activities: [
        { id: "string-profile", stage: "Easy Start · Make It Yours", title: "My Short Profile", mission: "Replace all three starter strings with a name, city, and message of your choice, then run the program.", starterCode: `name = "Your name"
city = "Your city"
message = "Your message"

print(name)
print(city)
print(message)`, hint: "Change only the text inside the quotation marks first.", success: "You stored and displayed three strings chosen by you.", check: { mustChange: true, variables: [{ name: "name", notValues: ["your name"], minimumPrints: 1 }, { name: "city", notValues: ["your city"], minimumPrints: 1 }, { name: "message", notValues: ["your message"], minimumPrints: 1 }] } },
        { id: "variable-or-text", stage: "Easy Start · Notice the Quotes", title: "Variable or Exact Text?", mission: "Change the second print() instruction so the program displays the stored name first and the exact word name second.", starterCode: `name = "Amina"

print(name)
print(name)`, hint: "Put quotation marks around name only in the second print() instruction.", success: "You saw how quotation marks change a variable name into exact text.", check: { mustChange: true, expectedOutput: ["Amina", "name"] } },
        { id: "apostrophe-string", stage: "Growing · Choose Helpful Quotes", title: "Keep the Apostrophe", mission: "Change the sentence while keeping an apostrophe inside it. Use double quotes around the complete string.", starterCode: `message = "I'm learning Python."

print(message)`, hint: "Double quotes around the complete string allow the apostrophe in I'm to remain ordinary text.", success: "You chose quotation marks that kept the apostrophe readable.", check: { mustChange: true, variables: [{ name: "message", notValues: ["i'm learning python."], minimumPrints: 1 }] } },
        { id: "repair-missing-quote", stage: "Growing · Read an Error", title: "Close the String", mission: "Python cannot find the end of the message. Add the missing double quote, then run the repaired program.", starterCode: `message = "Hello, Python!

print(message)`, hint: "Add a double quote immediately after the exclamation mark.", success: "You repaired an unclosed string and ran it successfully.", check: { mustChange: true, variables: [{ name: "message", equals: "Hello, Python!", minimumPrints: 1 }] } },
        { id: "repair-bare-word", stage: "Growing · Mark Text Clearly", title: "Turn the City into Text", mission: "Python is treating Longford like a variable. Add quotation marks so it becomes a string.", starterCode: `city = Longford

print(city)`, hint: "Write city = \"Longford\".", success: "You used quotation marks to tell Python that Longford is text.", check: { mustChange: true, variables: [{ name: "city", equals: "Longford", minimumPrints: 1 }] } },
        { id: "empty-string", stage: "Growing · Text Can Be Empty", title: "Make an Empty Message", mission: "Replace the current message with an empty string, keep print(message), and run the program.", starterCode: `message = "This is not empty"

print(message)`, hint: "An empty string is two matching quotation marks with nothing between them: \"\".", success: "You created a valid string containing no characters.", check: { mustChange: true, variables: [{ name: "message", equals: "", allowEmpty: true, minimumPrints: 1 }] } },
        { id: "meaningful-string-name", stage: "Ready for a Challenge · Readable Code", title: "Give the Message a Useful Name", mission: "Replace the variable x with welcome_message in both lines. Keep its string value unchanged.", starterCode: `x = "Welcome to Python"

print(x)`, hint: "Use welcome_message on the left of = and inside print().", success: "You gave a string a meaningful, readable variable name.", check: { mustChange: true, variables: [{ name: "welcome_message", equals: "Welcome to Python", minimumPrints: 1 }] } }
      ]
    },
    freshPracticeGenerator: {
      templates: [
        { id: "fresh-string-profile", skill: "Store Personal Text", title: "A Fresh Text Profile", mission: "Change name to '{{targetName}}' and city to '{{targetCity}}'. Keep both variable names and print() instructions.", starterCode: `name = "{{starterName}}"
city = "{{starterCity}}"

print(name)
print(city)`, hint: "Change only the text inside both pairs of quotation marks.", solution: `name = "{{targetName}}"
city = "{{targetCity}}"

print(name)
print(city)`, success: "You stored and displayed both fresh strings.", check: { mustChange: true, variables: [{ name: "name", equals: "{{targetName}}", minimumPrints: 1 }, { name: "city", equals: "{{targetCity}}", minimumPrints: 1 }] }, values: { starterName: ["Learner", "Visitor", "Student", "Reader", "Explorer", "Coder"], starterCity: ["Your city", "Old Town", "River City", "Sunny Bay", "Hill View", "Green Town"], targetName: ["Amina", "Sara", "Omar", "Maya", "Noah", "Lina"], targetCity: ["Longford", "Dublin", "Cork", "Galway", "Limerick", "Waterford"] } },
        { id: "fresh-welcome-message", skill: "Create a Message", title: "A Fresh Welcome Message", mission: "Replace the starter text with the exact message '{{targetMessage}}', then display it.", starterCode: `message = "{{starterMessage}}"

print(message)`, hint: "Keep message as the variable name and place the requested sentence inside matching quotes.", solution: `message = "{{targetMessage}}"

print(message)`, success: "You created and displayed a fresh message string.", check: { mustChange: true, variables: [{ name: "message", equals: "{{targetMessage}}", minimumPrints: 1 }] }, values: { starterMessage: ["Starter message", "Change this text", "A message goes here", "Hello for now", "This is the starter", "Ready to change"], targetMessage: ["Welcome to Python!", "One step at a time.", "I can work with text.", "Practice makes progress.", "Python remembers my words.", "I am ready to learn."] } },
        { id: "fresh-apostrophe", skill: "Choose Helpful Quotes", title: "A Fresh Apostrophe Sentence", mission: "Store the exact sentence '{{sentence}}'. Use double quotes around it so its apostrophe remains part of the text.", starterCode: `message = "Change me"

print(message)`, hint: "Place the complete sentence inside double quotes.", solution: `message = "{{sentence}}"

print(message)`, success: "You used double quotes to preserve an apostrophe inside a string.", check: { mustChange: true, variables: [{ name: "message", equals: "{{sentence}}", minimumPrints: 1 }] }, values: { sentence: ["I'm learning Python.", "It's a good day to practise.", "Python's messages are text.", "I'm ready for another try.", "It's okay to make mistakes.", "I'm building confidence."] } },
        { id: "fresh-quoted-word", skill: "Put Quotes Inside Text", title: "A Fresh Quoted Word", mission: "Store the exact sentence '{{sentence}}'. Use single quotes around the complete string so its double quotes stay visible.", starterCode: `message = 'Change me'

print(message)`, hint: "Use single quotes around the complete sentence.", solution: `message = '{{sentence}}'

print(message)`, success: "You kept double quotes visible inside a single-quoted string.", check: { mustChange: true, variables: [{ name: "message", equals: "{{sentence}}", minimumPrints: 1 }] }, values: { sentence: ['Python says "Hello".', 'The sign says "Welcome".', 'She said "Try again".', 'The button says "Run".', 'My note says "Keep going".', 'The screen shows "Ready".'] } },
        { id: "fresh-literal", skill: "Variable or Exact Text", title: "A Fresh Variable-or-Text Test", mission: "Change only the second print() instruction so the output is '{{value}}' followed by the exact word label.", starterCode: `label = "{{value}}"

print(label)
print(label)`, hint: "The second instruction needs print(\"label\").", solution: `label = "{{value}}"

print(label)
print("label")`, success: "You distinguished a stored string from literal text.", check: { mustChange: true, expectedOutput: ["{{value}}", "label"] }, values: { value: ["Welcome", "Ready", "Python", "Begin", "Learning", "Success"] } },
        { id: "fresh-close-string", skill: "Repair a String", title: "Close a Fresh String", mission: "Add the missing closing quote so Python can store and display '{{value}}'.", starterCode: `message = "{{value}}

print(message)`, hint: "Add a double quote at the end of the first line.", solution: `message = "{{value}}"

print(message)`, success: "You repaired and ran a fresh unclosed string.", check: { mustChange: true, variables: [{ name: "message", equals: "{{value}}", minimumPrints: 1 }] }, values: { value: ["Hello, Python!", "Keep going!", "Text is useful.", "I fixed the string.", "Practice is working.", "Ready to run."] } },
        { id: "fresh-bare-text", skill: "Mark Text Clearly", title: "Repair Fresh Bare Text", mission: "Add quotation marks so {{value}} becomes text instead of an unknown variable.", starterCode: `word = {{value}}

print(word)`, hint: "Put matching quotation marks around the word after =.", solution: `word = "{{value}}"

print(word)`, success: "You turned fresh bare text into a valid string.", check: { mustChange: true, variables: [{ name: "word", equals: "{{value}}", minimumPrints: 1 }] }, values: { value: ["Python", "Welcome", "Learning", "Practice", "Progress", "Confidence"] } },
        { id: "fresh-empty-string", skill: "Create Empty Text", title: "A Fresh Empty String", mission: "Replace '{{starter}}' with an empty string and run the program.", starterCode: `message = "{{starter}}"

print(message)`, hint: "Use message = \"\".", solution: `message = ""

print(message)`, success: "You created and ran a fresh empty-string activity.", check: { mustChange: true, variables: [{ name: "message", equals: "", allowEmpty: true, minimumPrints: 1 }] }, values: { starter: ["Busy", "Not empty", "Some text", "A message", "Filled", "Change this"] } }
      ]
    },
    challengeGenerator: {
      activities: [
        { id: "welcome-card", title: "The Welcome Card", mission: "Change only the visitor, place, and message strings so the card tells your story.", starterCode: `visitor = "Amina"
place = "Python Lab"
message = "You are ready to learn."

print("VISITOR")
print(visitor)
print("PLACE")
print(place)
print("MESSAGE")
print(message)`, hint: "Edit only the three text values near the top. Keep all print() instructions.", solution: `visitor = "Naveed"
place = "DeTLeng Studio"
message = "One step at a time."

print("VISITOR")
print(visitor)
print("PLACE")
print(place)
print("MESSAGE")
print(message)` },
        { id: "book-label", title: "The Book Label", mission: "Create fresh title, author, and shelf strings without changing the print() instructions.", starterCode: `title = "Python Steps"
author = "Amina"
shelf = "Beginner Books"

print(title)
print(author)
print(shelf)`, hint: "Every value is text, so keep matching quotation marks around it.", solution: `title = "My First Python Book"
author = "Sara"
shelf = "Learning Corner"

print(title)
print(author)
print(shelf)` },
        { id: "travel-card", title: "The Travel Card", mission: "Change the traveller, destination, and travel message strings.", starterCode: `traveller = "Omar"
destination = "Galway"
message = "The journey begins today."

print(traveller)
print(destination)
print(message)`, hint: "Change the values after = while keeping the variable names.", solution: `traveller = "Maya"
destination = "Cork"
message = "The journey begins tomorrow."

print(traveller)
print(destination)
print(message)` },
        { id: "character-card", title: "A Tiny Character Card", mission: "Give the character a new name, role, and motto using strings.", starterCode: `character = "Nova"
role = "Explorer"
motto = "Keep moving forward."

print(character)
print(role)
print(motto)`, hint: "A role and a complete motto can both be strings.", solution: `character = "Luna"
role = "Guide"
motto = "Every step teaches me."

print(character)
print(role)
print(motto)` },
        { id: "shop-sign", title: "The Shop Sign", mission: "Change the shop name, status, and short notice strings.", starterCode: `shop_name = "Green Market"
status = "Open"
notice = "Welcome inside."

print(shop_name)
print(status)
print(notice)`, hint: "Use meaningful string values and keep the existing variables.", solution: `shop_name = "Python Corner"
status = "Open today"
notice = "Learners are welcome."

print(shop_name)
print(status)
print(notice)` },
        { id: "quote-repair", title: "Repair the Announcement", mission: "Repair the missing quotation mark, then run the announcement.", starterCode: `announcement = "Class begins now.

print(announcement)`, hint: "Close the string after the full stop.", solution: `announcement = "Class begins now."

print(announcement)` },
        { id: "literal-challenge", title: "Stored Value or Written Word?", mission: "Make the program display Ready on the first line and status on the second.", starterCode: `status = "Ready"

print(status)
print(status)`, hint: "The second print() instruction should contain the quoted word \"status\".", solution: `status = "Ready"

print(status)
print("status")` }
      ]
    },
    quizGenerator: {
      activities: [
        { id: "quiz-string", question: "Which value is a string?", code: "", options: ["Python", "10", "\"Python\"", "3.5"], correct: 2, explanation: "Correct — quotation marks tell Python that \"Python\" is text." },
        { id: "quiz-variable-output", question: "What will this program display?", code: `name = "Sara"
print(name)`, options: ["name", "Sara", "\"Sara\"", "error"], correct: 1, explanation: "Correct — print(name) displays the string stored in the variable name." },
        { id: "quiz-literal-output", question: "What will this program display?", code: `name = "Sara"
print("name")`, options: ["Sara", "name", "\"name\"", "error"], correct: 1, explanation: "Correct — quotation marks make name exact text rather than a variable lookup." },
        { id: "quiz-matching-quotes", question: "Which line contains a valid string?", code: "", options: [`message = "Hello'`, `message = 'Hello"`, `message = "Hello"`, `message = Hello`], correct: 2, explanation: "Correct — the string begins and ends with matching double quotes." },
        { id: "quiz-apostrophe", question: "Which line stores the sentence without breaking its apostrophe?", code: "", options: [`message = 'I'm ready.'`, `message = "I'm ready."`, `message = I'm ready.`, `message = "I'm ready.'`], correct: 1, explanation: "Correct — double quotes surround the complete sentence while the apostrophe remains inside it." },
        { id: "quiz-text-number", question: "Which value is text rather than a number?", code: "", options: ["10", "10.0", `"10"`, "-10"], correct: 2, explanation: "Correct — \"10\" is inside quotation marks, so Python treats it as text." },
        { id: "quiz-empty", question: "What does this string contain?", code: `message = ""`, options: ["A space", "The word message", "No characters", "An error"], correct: 2, explanation: "Correct — matching quotes with nothing between them create a valid empty string." },
        { id: "quiz-readable-name", question: "Which variable name most clearly describes a welcome message?", code: "", options: ["x", "a", "welcome_message", "m1"], correct: 2, explanation: "Correct — welcome_message clearly explains what its string value represents." },
        { id: "quiz-two-outputs", question: "What will this program display?", code: `name = "Amina"

print(name)
print("name")`, options: ["Amina then Amina", "name then name", "Amina then name", "error"], correct: 2, explanation: "Correct — name looks up the variable, while \"name\" is literal text." }
      ]
    },
    quiz: {
      question: "What will this program display?",
      code: `name = "Amina"

print(name)
print("name")`,
      options: ["Amina then Amina", "name then name", "Amina then name", "An error"],
      correct: 2,
      explanation: "Correct — the variable displays Amina, while the quoted word displays name."
    }
  },
  8: {
    title: "String Operations — Joining, Repeating and Checking Text",
    stage: "Foundations",
    level: "Beginner",
    time: "20 minutes",
    tags: ["Join text", "Repeat and check"],
    intro: "You can already create and store text. Now you will make those strings work together: join them, repeat them, and ask whether they contain particular text.",
    explanation: "Strings can be combined with simple <strong>operations</strong>. The <code>+</code> operator joins strings, <code>*</code> repeats a string, and <code>in</code> or <code>not in</code> checks whether some text appears inside another string.",
    concept: "Use + to join strings, * to repeat a string, and in or not in to receive a simple True-or-False answer about contained text.",
    starterCode: `first_word = "Python"
second_word = "Learner"

message = first_word + " " + second_word

print(message)
print("Go! " * 3)
print("Python" in message)`,
    expectedOutput: `Python Learner
Go! Go! Go!
True`,
    lineByLine: [
      '<code>first_word</code> and <code>second_word</code> store two strings, using the skills from Lesson 07.',
      '<code>first_word + " " + second_word</code> joins three strings. The middle string contains one space, so the words do not run together.',
      'Joining strings with <code>+</code> is called <strong>concatenation</strong>. The name is less important than understanding the action: pieces of text become one string.',
      '<code>print(message)</code> displays the newly joined string <code>Python Learner</code>.',
      '<code>"Go! " * 3</code> repeats the complete string three times. The space inside the string keeps the repeated words readable.',
      '<code>"Python" in message</code> asks whether that exact text appears inside <code>message</code>. Python answers <code>True</code>, meaning yes.',
      'Python pays attention to capital and lowercase letters when checking text. <code>"python" in message</code> would produce <code>False</code> here.'
    ],
    outputExplanation: "The first output line comes from joining three strings, including a one-space string. The second comes from repeating <code>\"Go! \"</code> three times. The final <code>True</code> is Python's yes answer because <code>\"Python\"</code> appears inside <code>message</code>. Booleans receive their full lesson later; for now, read <code>True</code> as yes and <code>False</code> as no.",
    changeIt: "First, replace <code>\"Learner\"</code> with your name and run the program.<br><br>Next, change <code>* 3</code> to <code>* 5</code>. Predict how many times <code>Go!</code> will appear before you run it.<br><br>Finally, replace <code>\"Python\"</code> in the final line with <code>\"Java\"</code>. Predict whether Python will answer <code>True</code> or <code>False</code>, then test your prediction.",
    challenge: "Build a small welcome banner. Join a greeting and a name with a readable space, repeat a cheer three times, and check whether the name appears in the finished message.",
    hint: "The space must be a string too: <code>greeting + \" \" + name</code>. Repeat with <code>cheer * 3</code>, then check with <code>name in message</code>.",
    solution: `greeting = "Welcome"
name = "Amina"
cheer = "Go! "

message = greeting + " " + name

print(message)
print(cheer * 3)
print(name in message)`,
    practiceCoach: {
      knowledgeBoundary: {
        current: ["string concatenation with +", "spaces while joining", "string repetition with *", "membership with in", "absence checks with not in", "True and False as simple yes/no results"],
        previous: ["print()", "comments", "variables", "numbers", "arithmetic", "strings", "quotation marks", "top-to-bottom execution"],
        prohibited: ["indexing", "slicing", "string methods", "f-strings", "input", "comparisons", "logical operators", "conditions", "loops", "collections", "functions"]
      },
      activities: [
        { id: "join-full-name", stage: "Easy Start · Join Two Values", title: "Build a Full Name", mission: "Change the two starter values, then join them with one space so the program displays your chosen full name.", starterCode: `first_name = "Amina"
last_name = "Khan"

full_name = first_name + last_name
print(full_name)`, hint: "Put the string \" \" between first_name and last_name.", success: "You joined two stored strings without losing the space between them.", check: { mustChange: true, expectedOutput: ["Amina Khan"] } },
        { id: "welcome-message", stage: "Easy Start · Build a Message", title: "Make a Welcome Message", mission: "Use + to display the exact message Welcome Sara without changing the two stored values.", starterCode: `greeting = "Welcome"
name = "Sara"

message = greeting
print(message)`, hint: "Join greeting, a one-space string, and name.", success: "You built a readable welcome message from three string pieces.", check: { mustChange: true, expectedOutput: ["Welcome Sara"] } },
        { id: "repair-space", stage: "Growing · Notice the Gap", title: "Remember the Space", mission: "The words currently run together. Change only the joined expression so the output becomes Good Morning.", starterCode: `first = "Good"
second = "Morning"

message = first + second
print(message)`, hint: "A space is text too. Add + \" \" + between the variables.", success: "You deliberately placed a space inside joined text.", check: { mustChange: true, expectedOutput: ["Good Morning"] } },
        { id: "repeat-cheer", stage: "Growing · Repeat Text", title: "Repeat the Cheer", mission: "Change the program so Go! appears exactly four times on one output line.", starterCode: `cheer = "Go! "

print(cheer * 2)`, hint: "Change the repeat number after * from 2 to 4.", success: "You repeated one complete string four times.", check: { mustChange: true, expectedOutput: ["Go! Go! Go! Go!"] } },
        { id: "find-secret", stage: "Growing · Ask a Text Question", title: "Check a Secret Word", mission: "Change only the final line so Python checks whether the word treasure appears in the message.", starterCode: `message = "The treasure is nearby."

print("map" in message)`, hint: "Replace \"map\" with the exact string \"treasure\".", success: "Python answered True because it found the requested text.", check: { mustChange: true, expectedOutput: ["True"] } },
        { id: "check-missing", stage: "Growing · Check What Is Absent", title: "Check What Is Missing", mission: "Use not in to ask whether rain is absent from the weather message. The program should display True.", starterCode: `weather = "Today is sunny."

print("rain" in weather)`, hint: "Place not before in: \"rain\" not in weather.", success: "You used not in to ask whether text was absent.", check: { mustChange: true, expectedOutput: ["True"] } },
        { id: "join-three-pieces", stage: "Ready for a Challenge · Tell a Story", title: "Join Three Pieces", mission: "Join all three values with suitable spaces so the output is Learning Python today.", starterCode: `first = "Learning"
second = "Python"
third = "today"

sentence = first + second + third
print(sentence)`, hint: "Place + \" \" + between each pair of variables.", success: "You combined three stored values into one readable sentence.", check: { mustChange: true, expectedOutput: ["Learning Python today"] } }
      ]
    },
    freshPracticeGenerator: {
      templates: [
        { id: "fresh-join-names", skill: "Join Names", title: "A Fresh Full Name", mission: "Join {{firstName}} and {{lastName}} with exactly one space, then display the complete name.", starterCode: `first_name = "{{firstName}}"
last_name = "{{lastName}}"

full_name = first_name + last_name
print(full_name)`, hint: "Join first_name + \" \" + last_name.", solution: `first_name = "{{firstName}}"
last_name = "{{lastName}}"

full_name = first_name + " " + last_name
print(full_name)`, success: "You joined a fresh first and last name with a readable space.", check: { mustChange: true, expectedOutput: ["{{firstName}} {{lastName}}"] }, values: { firstName: ["Amina", "Sara", "Omar", "Maya", "Noah", "Lina"], lastName: ["Khan", "Ali", "Murphy", "Smith", "Ahmed", "Brown"] } },
        { id: "fresh-welcome", skill: "Join a Greeting", title: "A Fresh Welcome", mission: "Build and display the exact message '{{greeting}} {{name}}'.", starterCode: `greeting = "{{greeting}}"
name = "{{name}}"

message = greeting
print(message)`, hint: "Join greeting, \" \", and name.", solution: `greeting = "{{greeting}}"
name = "{{name}}"

message = greeting + " " + name
print(message)`, success: "You built a fresh greeting from stored strings.", check: { mustChange: true, expectedOutput: ["{{greeting}} {{name}}"] }, values: { greeting: ["Welcome", "Hello", "Greetings", "Well done", "Keep going", "Good morning"], name: ["Amina", "Sara", "Omar", "Maya", "Noah", "Lina"] } },
        { id: "fresh-repeat", skill: "Repeat Text", title: "A Fresh Cheer", mission: "Make the cheer appear exactly {{count}} times on one line.", starterCode: `cheer = "{{cheer}} "

print(cheer * 1)`, hint: "Replace 1 with {{count}} after the * operator.", solution: `cheer = "{{cheer}} "

print(cheer * {{count}})`, success: "You repeated a fresh string the requested number of times.", check: { mustChange: true, expectedOutput: ["{{repeated}}"] }, values: { cheer: ["Go!"], count: [4], repeated: ["Go! Go! Go! Go!"] } },
        { id: "fresh-find-present", skill: "Find Present Text", title: "Find a Fresh Word", mission: "Change the search text so Python checks whether '{{word}}' appears in the message and displays True.", starterCode: `message = "The hidden word is {{word}}."

print("missing" in message)`, hint: "Replace \"missing\" with \"{{word}}\".", solution: `message = "The hidden word is {{word}}."

print("{{word}}" in message)`, success: "You found the requested text inside a fresh message.", check: { mustChange: true, expectedOutput: ["True"] }, values: { word: ["Python", "practice", "green", "star", "learner", "sunny"] } },
        { id: "fresh-find-absent", skill: "Check Missing Text", title: "A Fresh Absence Check", mission: "Use not in to confirm that '{{missing}}' does not appear in the message.", starterCode: `message = "{{message}}"

print("{{missing}}" in message)`, hint: "Change in to not in.", solution: `message = "{{message}}"

print("{{missing}}" not in message)`, success: "You confirmed that fresh text was absent.", check: { mustChange: true, expectedOutput: ["True"] }, values: { message: ["The sky is blue.", "Python is ready.", "The shop is open.", "A cat is sleeping.", "The train arrived.", "Tea is warm."], missing: ["rain", "Java", "closed", "dog", "bus", "coffee"] } },
        { id: "fresh-repair-space", skill: "Repair Joined Text", title: "Repair a Fresh Space", mission: "Repair the joined expression so it displays '{{left}} {{right}}'.", starterCode: `left = "{{left}}"
right = "{{right}}"

result = left + right
print(result)`, hint: "Add the string \" \" between left and right.", solution: `left = "{{left}}"
right = "{{right}}"

result = left + " " + right
print(result)`, success: "You repaired a fresh missing space.", check: { mustChange: true, expectedOutput: ["{{left}} {{right}}"] }, values: { left: ["Good", "Happy", "Green", "Python", "Keep", "One"], right: ["morning", "learning", "valley", "practice", "going", "step"] } },
        { id: "fresh-three-part", skill: "Join Three Pieces", title: "A Fresh Three-Part Message", mission: "Join all three stored strings with one space between them.", starterCode: `one = "{{one}}"
two = "{{two}}"
three = "{{three}}"

message = one + two + three
print(message)`, hint: "Use one + \" \" + two + \" \" + three.", solution: `one = "{{one}}"
two = "{{two}}"
three = "{{three}}"

message = one + " " + two + " " + three
print(message)`, success: "You joined three fresh text values into one message.", check: { mustChange: true, expectedOutput: ["{{one}} {{two}} {{three}}"] }, values: { one: ["I", "We", "Python", "Practice", "Learning", "Today"], two: ["can", "keep", "makes", "builds", "takes", "feels"], three: ["learn", "going", "progress", "confidence", "patience", "good"] } },
        { id: "fresh-case-check", skill: "Notice Letter Case", title: "A Fresh Case Check", mission: "Change only the search text so Python finds the exact capitalised word '{{word}}' and displays True.", starterCode: `message = "{{message}}"

print("{{lower}}" in message)`, hint: "Python distinguishes capital and lowercase letters. Search for \"{{word}}\" exactly.", solution: `message = "{{message}}"

print("{{word}}" in message)`, success: "You matched the exact letter case in a fresh membership check.", check: { mustChange: true, expectedOutput: ["True"] }, values: { message: ["Python is friendly."], word: ["Python"], lower: ["python"] } }
      ]
    },
    challengeGenerator: {
      activities: [
        { id: "welcome-banner", title: "The Welcome Banner", mission: "Join the greeting and name with one space, repeat the cheer three times, and check whether the name appears in the message.", starterCode: `greeting = "Welcome"
name = "Amina"
cheer = "Go! "

message = greeting + name

print(message)
print(cheer)
print("Sara" in message)`, hint: "Add \" \" while joining, multiply cheer by 3, and search using the name variable.", solution: `greeting = "Welcome"
name = "Amina"
cheer = "Go! "

message = greeting + " " + name

print(message)
print(cheer * 3)
print(name in message)` },
        { id: "player-name", title: "Build a Player Name", mission: "Join the player's first and last names, display the full name twice, then check whether the first name appears in it.", starterCode: `first = "Nova"
last = "Stone"

player = first + last

print(player)
print(player)
print("Alex" in player)`, hint: "Add a space while joining and use first in player for the final check.", solution: `first = "Nova"
last = "Stone"

player = first + " " + last

print(player)
print(player)
print(first in player)` },
        { id: "celebration", title: "Repeat a Celebration", mission: "Join the event and result into a readable message, then repeat the celebration four times.", starterCode: `event = "Lesson"
result = "complete"
celebration = "Hooray! "

message = event + result

print(message)
print(celebration)`, hint: "Join with \" \" and use celebration * 4.", solution: `event = "Lesson"
result = "complete"
celebration = "Hooray! "

message = event + " " + result

print(message)
print(celebration * 4)` },
        { id: "hidden-word", title: "Find the Hidden Word", mission: "Make the program display True by checking for the hidden word river.", starterCode: `clue = "Walk beside the river at sunrise."

print("road" in clue)`, hint: "Search for the exact string \"river\".", solution: `clue = "Walk beside the river at sunrise."

print("river" in clue)` },
        { id: "missing-item", title: "Check the Missing Item", mission: "Use not in to confirm that bread is missing from the shopping note.", starterCode: `note = "milk, apples, tea"

print("bread" in note)`, hint: "Change in to not in.", solution: `note = "milk, apples, tea"

print("bread" not in note)` },
        { id: "missing-space", title: "Repair the Missing Space", mission: "Repair all missing spaces so the three values form the sentence Keep learning Python.", starterCode: `one = "Keep"
two = "learning"
three = "Python"

message = one + two + three
print(message)`, hint: "Join a one-space string between one and two, and again between two and three.", solution: `one = "Keep"
two = "learning"
three = "Python"

message = one + " " + two + " " + three
print(message)` },
        { id: "text-toolbox", title: "The Text Toolbox", mission: "Complete all three operations: join the label and value, repeat the marker twice, and check that Python appears in the joined text.", starterCode: `label = "Skill"
value = "Python"
marker = "* "

text = label

print(text)
print(marker)
print("Python" not in text)`, hint: "Join with a space, multiply marker by 2, and use in for the final question.", solution: `label = "Skill"
value = "Python"
marker = "* "

text = label + " " + value

print(text)
print(marker * 2)
print("Python" in text)` }
      ]
    },
    quizGenerator: {
      activities: [
        { id: "quiz-join", question: "What will this program display?", code: `print("Hello" + "Python")`, options: ["Hello Python", "HelloPython", "Hello+Python", "An error"], correct: 1, explanation: "Correct — + joins the strings exactly as written. No space was included." },
        { id: "quiz-space", question: "Which expression produces Hello Amina with one space?", code: "", options: [`"Hello" + "Amina"`, `"Hello " + "Amina"`, `"Hello" * "Amina"`, `"Hello" in "Amina"`], correct: 1, explanation: "Correct — the space at the end of \"Hello \" remains in the joined result." },
        { id: "quiz-repeat", question: "What will this program display?", code: `print("Hi! " * 3)`, options: ["Hi! 3", "Hi! Hi! Hi! ", "3 Hi!", "An error"], correct: 1, explanation: "Correct — * 3 repeats the complete string three times." },
        { id: "quiz-in-true", question: "What will this program display?", code: `message = "Learning Python"
print("Python" in message)`, options: ["Python", "True", "False", "message"], correct: 1, explanation: "Correct — Python appears inside the message, so the answer is True." },
        { id: "quiz-in-false", question: "What will this program display?", code: `message = "Learning Python"
print("Java" in message)`, options: ["Java", "True", "False", "An error"], correct: 2, explanation: "Correct — Java does not appear inside the message, so the answer is False." },
        { id: "quiz-not-in", question: "What will this program display?", code: `weather = "sunny"
print("rain" not in weather)`, options: ["rain", "True", "False", "sunny"], correct: 1, explanation: "Correct — rain is absent from sunny, so not in produces True." },
        { id: "quiz-text-v-number", question: "Which line joins text rather than adding numbers?", code: "", options: [`print(2 + 3)`, `print("2" + "3")`, `print(2 * 3)`, `print(2 ** 3)`], correct: 1, explanation: "Correct — quotation marks make both values strings, so + joins them to produce 23." },
        { id: "quiz-case", question: "What will this program display?", code: `word = "Python"
print("python" in word)`, options: ["Python", "python", "True", "False"], correct: 3, explanation: "Correct — membership checks pay attention to capital and lowercase letters." },
        { id: "quiz-variable-membership", question: "Which line checks whether the stored name appears in message?", code: `name = "Amina"
message = "Welcome Amina"`, options: [`print("name" in message)`, `print(name in message)`, `print(name + message)`, `print(message * name)`], correct: 1, explanation: "Correct — name without quotation marks uses the stored string Amina for the membership check." }
      ]
    },
    quiz: {
      question: "What will this program display?",
      code: `word = "Go! "
message = "Go! Go! Go! "

print(word * 3)
print("Go!" in message)`,
      options: ["Go! Go! Go! then True", "Go! 3 then False", "Go! Go! Go! then False", "An error"],
      correct: 0,
      explanation: "Correct — the first line repeats the string three times, and the second confirms that Go! appears inside message."
    }
  },
  9: {
    title: "String Indexing — Accessing Individual Characters",
    stage: "Foundations",
    level: "Beginner",
    time: "20 minutes",
    tags: ["Character positions", "Positive and negative indexes"],
    intro: "A string may look like one piece of text, but Python also sees an ordered row of characters. Today you will reach one character at a time.",
    explanation: "An <strong>index</strong> is a character's position inside a string. Write the position inside square brackets: <code>word[0]</code>. Python starts counting at <code>0</code>, so index <code>0</code> gives the first character.",
    concept: "Use square brackets to request one character. Counting begins at 0 from the left, while -1 begins at the end.",
    starterCode: `word = "Python"

print(word)
print(word[0])
print(word[2])
print(word[5])
print(word[-1])`,
    expectedOutput: `Python
P
t
n
n`,
    lineByLine: [
      '<code>word = "Python"</code> stores a six-character string. Its positions are <code>0</code> through <code>5</code>.',
      '<code>print(word)</code> displays the complete string, just as it did in earlier lessons.',
      '<code>word[0]</code> requests the character at the first position. Python starts at zero, so the answer is <code>P</code>.',
      '<code>word[2]</code> requests the third character, <code>t</code>. Position zero is first, one is second, and two is third.',
      '<code>word[5]</code> reaches the sixth and final character from the left, <code>n</code>.',
      '<code>word[-1]</code> reaches the first character from the end—the last character—so it also produces <code>n</code>.',
      'Letters, digits, spaces, and punctuation all occupy character positions inside a string.'
    ],
    outputExplanation: "The complete word appears first. Each later line contains one character selected by its index. Both <code>word[5]</code> and <code>word[-1]</code> reach the final <code>n</code>, but they count from different directions.",
    changeIt: "First, change <code>word[0]</code> to <code>word[3]</code>. Predict the character, then run.<br><br>Next, change <code>word[-1]</code> to <code>word[-2]</code> and predict again.<br><br>Finally, replace <code>\"Python\"</code> with your own name. Keep only <code>print(word[0])</code> and <code>print(word[-1])</code> to discover its first and last characters.",
    challenge: "Store a player name and a place. Display the first and last characters of both strings using indexes.",
    hint: "Use <code>[0]</code> for a first character and <code>[-1]</code> for a last character.",
    solution: `player = "Amina"
place = "Python Lab"

print(player[0])
print(player[-1])
print(place[0])
print(place[-1])`,
    practiceCoach: {
      knowledgeBoundary: {
        current: ["string indexing", "zero-based positions", "positive indexes", "negative indexes", "spaces and punctuation as characters", "IndexError from out-of-range positions"],
        previous: ["print()", "variables", "numbers", "strings", "joining strings", "repeating strings", "membership checks", "top-to-bottom execution"],
        prohibited: ["len()", "slicing", "string methods", "f-strings", "input", "comparisons", "logical operators", "conditions", "loops", "collections", "functions"]
      },
      activities: [
        { id: "first-character", stage: "Easy Start · Begin at Zero", title: "Find the First Character", mission: "Change the index so the program displays the first character P.", starterCode: `word = "Python"

print(word[2])`, hint: "Python's first position is 0.", success: "You used index 0 to reach the first character.", check: { mustChange: true, expectedOutput: ["P"] } },
        { id: "third-character", stage: "Easy Start · Count Carefully", title: "Find the Third Character", mission: "Change the index so the program displays the third character d.", starterCode: `word = "Code"

print(word[0])`, hint: "First is 0, second is 1, and third is 2.", success: "You translated a human position into Python's zero-based index.", check: { mustChange: true, expectedOutput: ["d"] } },
        { id: "last-character", stage: "Growing · Count from the End", title: "Find the Last Character", mission: "Use a negative index to display the final character g.", starterCode: `word = "Learning"

print(word[0])`, hint: "The last character is at index -1.", success: "You reached the last character without counting the whole word.", check: { mustChange: true, expectedOutput: ["g"] } },
        { id: "second-last", stage: "Growing · One Step Back", title: "Find the Second-Last Character", mission: "Use a negative index to display the second-last character o.", starterCode: `word = "Python"

print(word[-1])`, hint: "If -1 is last, -2 is second-last.", success: "You counted two positions from the end.", check: { mustChange: true, expectedOutput: ["o"] } },
        { id: "find-space", stage: "Growing · Spaces Count Too", title: "Find the Space", mission: "Change the index so Python selects the space between Hi and Sam. The output line will look blank.", starterCode: `message = "Hi Sam"

print(message[0])`, hint: "H is 0, i is 1, and the space is 2.", success: "You discovered that a space occupies a real string position.", check: { mustChange: true, expectedOutput: [""] } },
        { id: "repair-index-error", stage: "Growing · Read an Error", title: "Repair the Missing Position", mission: "This program asks for a position that does not exist. Change only the index so it displays t.", starterCode: `word = "Cat"

print(word[5])`, hint: "Cat has indexes 0, 1, and 2. The t is at index 2.", success: "You repaired an out-of-range index after understanding the error.", check: { mustChange: true, expectedOutput: ["t"] } },
        { id: "inspect-name", stage: "Ready for a Challenge · Inspect Both Ends", title: "Inspect a Name", mission: "Replace Learner with Amina, then display A from the beginning and a from the end.", starterCode: `name = "Learner"

print(name)
print(name)`, hint: "Store Amina, then use name[0] and name[-1].", success: "You inspected both ends of a name.", check: { mustChange: true, expectedOutput: ["A", "a"] } }
      ]
    },
    freshPracticeGenerator: {
      templates: [
        { id: "fresh-first", skill: "First Character", title: "A Fresh First Character", mission: "Change the index so the program displays '{{letter}}', the first character.", starterCode: `word = "{{letter}}arden"

print(word[2])`, hint: "Use index 0.", solution: `word = "{{letter}}arden"

print(word[0])`, success: "You found a fresh first character.", check: { mustChange: true, expectedOutput: ["{{letter}}"] }, values: { letter: ["G", "H", "P", "B", "C", "M"] } },
        { id: "fresh-middle", skill: "Positive Position", title: "A Fresh Middle Position", mission: "Change the index so Python displays the middle character '{{letter}}'.", starterCode: `code = "A{{letter}}B"

print(code[0])`, hint: "The middle character in this three-character string is at index 1.", solution: `code = "A{{letter}}B"

print(code[1])`, success: "You selected a fresh middle position.", check: { mustChange: true, expectedOutput: ["{{letter}}"] }, values: { letter: ["x", "y", "z", "7", "!", "?"] } },
        { id: "fresh-last", skill: "Last Character", title: "A Fresh Last Character", mission: "Use a negative index to display the final character '{{letter}}'.", starterCode: `word = "ready{{letter}}"

print(word[0])`, hint: "Use index -1.", solution: `word = "ready{{letter}}"

print(word[-1])`, success: "You reached a fresh last character from the end.", check: { mustChange: true, expectedOutput: ["{{letter}}"] }, values: { letter: ["!", "?", "7", "X", "Z", "."] } },
        { id: "fresh-second-last", skill: "Second-Last Character", title: "A Fresh Second-Last Character", mission: "Use a negative index to display '{{letter}}', the second-last character.", starterCode: `code = "ABC{{letter}}Z"

print(code[-1])`, hint: "Use index -2.", solution: `code = "ABC{{letter}}Z"

print(code[-2])`, success: "You reached a fresh second-last character.", check: { mustChange: true, expectedOutput: ["{{letter}}"] }, values: { letter: ["M", "N", "Q", "4", "#", "@"] } },
        { id: "fresh-space", skill: "Find a Space", title: "A Fresh Space Hunt", mission: "Change the index so Python selects the one space between Go and Now.", starterCode: `message = "Go Now"

print(message[0])`, hint: "G is 0, o is 1, and the space is 2.", solution: `message = "Go Now"

print(message[2])`, success: "You found a fresh space character.", check: { mustChange: true, expectedOutput: [""] } },
        { id: "fresh-punctuation", skill: "Find Punctuation", title: "A Fresh Punctuation Hunt", mission: "Use a negative index to display the final punctuation mark '{{mark}}'.", starterCode: `message = "Ready{{mark}}"

print(message[0])`, hint: "The final character is at index -1.", solution: `message = "Ready{{mark}}"

print(message[-1])`, success: "You selected fresh punctuation as an ordinary character.", check: { mustChange: true, expectedOutput: ["{{mark}}"] }, values: { mark: ["!", "?", ".", ":", ";"] } },
        { id: "fresh-error", skill: "Repair an IndexError", title: "Repair a Fresh Index", mission: "Replace the impossible index with the position that displays '{{letter}}'.", starterCode: `word = "A{{letter}}Z"

print(word[8])`, hint: "The middle character is at index 1.", solution: `word = "A{{letter}}Z"

print(word[1])`, success: "You repaired a fresh out-of-range index.", check: { mustChange: true, expectedOutput: ["{{letter}}"] }, values: { letter: ["B", "C", "D", "5", "*", "+"] } },
        { id: "fresh-both-ends", skill: "Inspect Both Ends", title: "A Fresh Two-End Inspector", mission: "Display '{{first}}' from the beginning and '{{last}}' from the end using two indexes.", starterCode: `name = "{{first}}mina{{last}}"

print(name)
print(name)`, hint: "Use name[0] and name[-1].", solution: `name = "{{first}}mina{{last}}"

print(name[0])
print(name[-1])`, success: "You inspected both ends of a fresh string.", check: { mustChange: true, expectedOutput: ["{{first}}", "{{last}}"] }, values: { first: ["A", "S", "L", "M", "R"], last: ["a", "h", "n", "r", "y"] } }
      ]
    },
    challengeGenerator: {
      activities: [
        { id: "secret-initials", title: "The Secret Initials", mission: "Display the first character of each stored name.", starterCode: `first_name = "Amina"
second_name = "Naveed"

print(first_name)
print(second_name)`, hint: "Use [0] after each variable.", solution: `first_name = "Amina"
second_name = "Naveed"

print(first_name[0])
print(second_name[0])` },
        { id: "first-last", title: "First and Last", mission: "Display the first and last characters of the word Python.", starterCode: `word = "Python"

print(word)
print(word)`, hint: "Use word[0] and word[-1].", solution: `word = "Python"

print(word[0])
print(word[-1])` },
        { id: "unlock-word", title: "Unlock the Word", mission: "Use the requested positions to display C, d, and e on separate lines.", starterCode: `word = "Code"

print(word)
print(word)
print(word)`, hint: "C is index 0, d is index 2, and e is index -1.", solution: `word = "Code"

print(word[0])
print(word[2])
print(word[-1])` },
        { id: "find-punctuation", title: "Find the Punctuation", mission: "Display only the exclamation mark at the end of the message.", starterCode: `message = "You did it!"

print(message)`, hint: "The last character is at index -1.", solution: `message = "You did it!"

print(message[-1])` },
        { id: "hidden-space", title: "The Hidden Space", mission: "Select the space between Red and Door. The output should be one blank-looking line.", starterCode: `label = "Red Door"

print(label[0])`, hint: "R is 0, e is 1, d is 2, and the space is 3.", solution: `label = "Red Door"

print(label[3])` },
        { id: "broken-index", title: "Repair the Broken Index", mission: "Repair the impossible index so the program displays the final t.", starterCode: `animal = "Cat"

print(animal[9])`, hint: "Use index 2 or index -1.", solution: `animal = "Cat"

print(animal[-1])` },
        { id: "character-detective", title: "Character Detective", mission: "Display the first and last characters of both the player and place.", starterCode: `player = "Amina"
place = "Python Lab"

print(player)
print(player)
print(place)
print(place)`, hint: "Use [0] and [-1] with each variable.", solution: `player = "Amina"
place = "Python Lab"

print(player[0])
print(player[-1])
print(place[0])
print(place[-1])` }
      ]
    },
    quizGenerator: {
      activities: [
        { id: "quiz-first-index", question: "Which index selects the first character of a string?", code: "", options: ["1", "0", "-2", "first"], correct: 1, explanation: "Correct — Python begins string positions at index 0." },
        { id: "quiz-second", question: "What will this program display?", code: `word = "Code"
print(word[1])`, options: ["C", "o", "d", "e"], correct: 1, explanation: "Correct — index 1 is the second character, o." },
        { id: "quiz-third", question: "What will this program display?", code: `word = "Code"
print(word[2])`, options: ["C", "o", "d", "e"], correct: 2, explanation: "Correct — counting 0, 1, 2 reaches d." },
        { id: "quiz-last", question: "Which expression selects the final character of word?", code: "", options: ["word[0]", "word[1]", "word[-1]", "word[last]"], correct: 2, explanation: "Correct — index -1 selects the final character." },
        { id: "quiz-second-last", question: "What will this program display?", code: `word = "Python"
print(word[-2])`, options: ["P", "y", "o", "n"], correct: 2, explanation: "Correct — -1 is n, so -2 is the second-last character o." },
        { id: "quiz-space", question: "What kind of character is at index 2?", code: `message = "Hi Sam"`, options: ["H", "i", "A space", "S"], correct: 2, explanation: "Correct — spaces occupy positions inside strings too." },
        { id: "quiz-punctuation", question: "What will this program display?", code: `message = "Ready!"
print(message[-1])`, options: ["R", "y", "!", "Ready"], correct: 2, explanation: "Correct — punctuation is a character, and -1 reaches the final exclamation mark." },
        { id: "quiz-error", question: "What happens when this program runs?", code: `word = "Cat"
print(word[3])`, options: ["It displays t", "It displays Cat", "It produces IndexError", "It displays nothing"], correct: 2, explanation: "Correct — Cat has only indexes 0, 1, and 2, so index 3 is out of range." },
        { id: "quiz-whole-or-one", question: "Which line displays only the first character stored in word?", code: "", options: ["print(word)", "print(\"word\")", "print(word[0])", "print(word[-1])"], correct: 2, explanation: "Correct — word[0] selects one character from the beginning." }
      ]
    },
    quiz: {
      question: "What will this program display?",
      code: `word = "Python"

print(word[0])
print(word[-1])`,
      options: ["P then n", "y then o", "Python twice", "An error"],
      correct: 0,
      explanation: "Correct — index 0 selects P from the beginning, and -1 selects n from the end."
    }
  },
  10: {
    title: "String Slicing — Taking Portions of Text",
    stage: "Foundations",
    level: "Beginner",
    time: "20 minutes",
    tags: ["Start and stop", "Useful text portions"],
    intro: "You can already select one character from a string. Now you will place two boundaries around several characters and take a useful portion of the text.",
    explanation: "A <strong>slice</strong> is a portion of a string. Write a start and stop position inside square brackets: <code>word[0:3]</code>. Python includes the start position and stops before the stop position.",
    concept: "A slice uses [start:stop]. Start is included, stop is not included, and an empty side means continue to that end of the string.",
    starterCode: `word = "Python"

print(word[0:3])
print(word[2:6])
print(word[:4])
print(word[3:])
print(word[-3:])`,
    expectedOutput: `Pyt
thon
Pyth
hon
hon`,
    lineByLine: [
      '<code>word[0:3]</code> begins at index 0 and stops before index 3, producing <code>Pyt</code>.',
      'The start position belongs to the slice. The stop position acts like a boundary and is not included.',
      '<code>word[2:6]</code> begins at <code>t</code> and takes the available characters before position 6, producing <code>thon</code>.',
      '<code>word[:4]</code> has no written start, so Python begins at the start of the string and produces <code>Pyth</code>.',
      '<code>word[3:]</code> has no written stop, so Python continues from index 3 to the end and produces <code>hon</code>.',
      '<code>word[-3:]</code> reuses negative positions from Lesson 09. It begins three characters from the end and produces <code>hon</code>.',
      'Unlike one impossible index, a slice may safely reach beyond the end. Python simply returns the available portion.'
    ],
    outputExplanation: "Each output line is a portion of the same string. The colon marks a range rather than one exact position. The two <code>hon</code> results reach the same portion using a positive start and a negative start.",
    changeIt: "First, change <code>word[0:3]</code> to <code>word[0:4]</code> and predict the extra character.<br><br>Next, try <code>word[:2]</code> and <code>word[2:]</code>. Notice how the two slices divide the word.<br><br>Finally, add <code>print(word[::2])</code>. It takes one character, skips one, and continues.",
    challenge: "Separate the text PYTHON10 into the word PYTHON and the final two characters. Then take the final two characters again with a negative slice.",
    hint: "Use <code>code[:6]</code>, <code>code[6:]</code>, and <code>code[-2:]</code>.",
    solution: `code = "PYTHON10"

print(code[:6])
print(code[6:])
print(code[-2:])`,
    practiceCoach: {
      knowledgeBoundary: {
        current: ["string slicing", "included start", "excluded stop", "omitted boundaries", "negative slices", "simple slice steps", "safe out-of-range slices", "indexing versus slicing"],
        previous: ["print()", "variables", "strings", "string operations", "positive indexes", "negative indexes", "IndexError"],
        prohibited: ["len()", "string methods", "f-strings", "input", "comparisons", "logical operators", "conditions", "loops", "collections", "functions"]
      },
      activities: [
        { id: "first-three", stage: "Easy Start · Set Two Boundaries", title: "Take the First Three", mission: "Change the stop boundary so the program displays Pyt.", starterCode: `word = "Python"

print(word[0:1])`, hint: "Begin at 0 and stop before 3.", success: "You used two boundaries to take the first three characters.", check: { mustChange: true, expectedOutput: ["Pyt"] } },
        { id: "middle-slice", stage: "Easy Start · Take the Middle", title: "Take the Middle", mission: "Change the slice so the output is tho.", starterCode: `word = "Python"

print(word[0:2])`, hint: "Start at index 2 and stop before index 5.", success: "You selected a middle portion without taking either end.", check: { mustChange: true, expectedOutput: ["tho"] } },
        { id: "omit-start", stage: "Growing · Begin Automatically", title: "Start from the Beginning", mission: "Use an omitted start to display Welc.", starterCode: `message = "Welcome"

print(message[2:4])`, hint: "Leave the left side of the colon empty and stop before 4.", success: "You let Python begin the slice automatically.", check: { mustChange: true, expectedOutput: ["Welc"] } },
        { id: "omit-stop", stage: "Growing · Continue Automatically", title: "Continue to the End", mission: "Use an omitted stop to display come.", starterCode: `message = "Welcome"

print(message[3:5])`, hint: "Begin at 3 and leave the right side of the colon empty.", success: "You let Python continue the slice to the end.", check: { mustChange: true, expectedOutput: ["come"] } },
        { id: "last-three-slice", stage: "Growing · Reuse Negative Positions", title: "Take the Last Three", mission: "Use a negative start to display hon.", starterCode: `word = "Python"

print(word[0:3])`, hint: "Begin three characters from the end and omit the stop: word[-3:].", success: "You combined negative indexing knowledge with slicing.", check: { mustChange: true, expectedOutput: ["hon"] } },
        { id: "split-two", stage: "Growing · Make Two Parts", title: "Split a Word into Two Parts", mission: "Use two slices to display Sun and shine on separate lines.", starterCode: `word = "Sunshine"

print(word)
print(word)`, hint: "Use word[:3] first, then word[3:].", success: "You split one string into two matching portions.", check: { mustChange: true, expectedOutput: ["Sun", "shine"] } },
        { id: "repair-boundary", stage: "Ready for a Challenge · Check the Stop", title: "Repair the Slice Boundary", mission: "Repair only the stop boundary so the output is Code.", starterCode: `message = "Code Ready"

print(message[0:3])`, hint: "The stop position is excluded, so stop before index 4.", success: "You repaired an off-by-one slice boundary.", check: { mustChange: true, expectedOutput: ["Code"] } }
      ]
    },
    freshPracticeGenerator: {
      templates: [
        { id: "fresh-beginning", skill: "Beginning Slice", title: "A Fresh Beginning Slice", mission: "Change the slice to display the first three characters '{{part}}'.", starterCode: `text = "{{part}}XYZ"

print(text[0:1])`, hint: "Use text[:3] or text[0:3].", solution: `text = "{{part}}XYZ"

print(text[:3])`, success: "You took a fresh three-character beginning.", check: { mustChange: true, expectedOutput: ["{{part}}"] }, values: { part: ["Sun", "Car", "Map", "Sky", "Pen", "Run"] } },
        { id: "fresh-ending", skill: "Ending Slice", title: "A Fresh Ending Slice", mission: "Use an omitted stop to display the ending '{{part}}'.", starterCode: `text = "ABC{{part}}"

print(text[0:3])`, hint: "The ending begins at index 3. Use text[3:].", solution: `text = "ABC{{part}}"

print(text[3:])`, success: "You continued a fresh slice to the end.", check: { mustChange: true, expectedOutput: ["{{part}}"] }, values: { part: ["sun", "car", "map", "sky", "pen", "run"] } },
        { id: "fresh-middle", skill: "Middle Slice", title: "A Fresh Middle Slice", mission: "Select only the middle three characters '{{part}}'.", starterCode: `text = "A{{part}}Z"

print(text[0:2])`, hint: "Start at 1 and stop before 4.", solution: `text = "A{{part}}Z"

print(text[1:4])`, success: "You took a fresh middle portion.", check: { mustChange: true, expectedOutput: ["{{part}}"] }, values: { part: ["cat", "run", "sky", "map", "box", "joy"] } },
        { id: "fresh-last-two", skill: "Negative Slice", title: "A Fresh Last-Two Slice", mission: "Use a negative slice to display the final two characters '{{part}}'.", starterCode: `text = "ABCDE{{part}}"

print(text[:2])`, hint: "Begin two characters from the end: text[-2:].", solution: `text = "ABCDE{{part}}"

print(text[-2:])`, success: "You took a fresh ending with a negative boundary.", check: { mustChange: true, expectedOutput: ["{{part}}"] }, values: { part: ["10", "OK", "go", "42", "!?", "XY"] } },
        { id: "fresh-split", skill: "Split into Two Portions", title: "A Fresh Two-Part Split", mission: "Display '{{left}}' and '{{right}}' on separate lines using two slices.", starterCode: `text = "{{left}}{{right}}"

print(text)
print(text)`, hint: "Both parts contain three characters. Use text[:3] and text[3:].", solution: `text = "{{left}}{{right}}"

print(text[:3])
print(text[3:])`, success: "You split a fresh string into two complete portions.", check: { mustChange: true, expectedOutput: ["{{left}}", "{{right}}"] }, values: { left: ["Sun", "Car", "Map", "Sky", "Red", "Day"], right: ["day", "pet", "box", "way", "fox", "one"] } },
        { id: "fresh-repair", skill: "Repair a Boundary", title: "Repair a Fresh Boundary", mission: "Repair the stop boundary so the output is '{{part}}'.", starterCode: `text = "{{part}}XYZ"

print(text[:2])`, hint: "The requested portion has three characters, so stop before 3.", solution: `text = "{{part}}XYZ"

print(text[:3])`, success: "You repaired a fresh excluded-stop boundary.", check: { mustChange: true, expectedOutput: ["{{part}}"] }, values: { part: ["One", "Two", "Six", "Ten", "Top", "Win"] } },
        { id: "fresh-step", skill: "Every Other Character", title: "A Fresh Step Slice", mission: "Use a step of 2 to display ACE.", starterCode: `letters = "ABCDEF"

print(letters[:3])`, hint: "Leave both boundaries empty and add a second colon: letters[::2].", solution: `letters = "ABCDEF"

print(letters[::2])`, success: "You used a simple step to take every other character.", check: { mustChange: true, expectedOutput: ["ACE"] } },
        { id: "fresh-safe-long", skill: "Safe Long Slice", title: "A Fresh Safe Long Slice", mission: "Change the expression to a slice that begins at 0 and safely stops at 20, displaying the complete word '{{word}}'.", starterCode: `word = "{{word}}"

print(word[0])`, hint: "Use word[0:20]. A slice may safely extend beyond the end.", solution: `word = "{{word}}"

print(word[0:20])`, success: "You used a fresh out-of-range stop safely.", check: { mustChange: true, expectedOutput: ["{{word}}"] }, values: { word: ["Cat", "Python", "Ready", "Sun", "Practice", "Code"] } }
      ]
    },
    challengeGenerator: {
      activities: [
        { id: "username", title: "The Username Extractor", mission: "Extract user from the beginning and 2026 from the end.", starterCode: `username = "user2026"

print(username)
print(username)`, hint: "Use username[:4] and username[4:].", solution: `username = "user2026"

print(username[:4])
print(username[4:])` },
        { id: "secret-code", title: "Split the Secret Code", mission: "Display PYTHON and 10 as two portions, then display the final two characters again.", starterCode: `code = "PYTHON10"

print(code)
print(code)
print(code)`, hint: "Use [:6], [6:], and [-2:].", solution: `code = "PYTHON10"

print(code[:6])
print(code[6:])
print(code[-2:])` },
        { id: "two-halves", title: "First Half, Second Half", mission: "Split Sunshine into Sun and shine.", starterCode: `word = "Sunshine"

print(word)
print(word)`, hint: "The first part ends before index 3.", solution: `word = "Sunshine"

print(word[:3])
print(word[3:])` },
        { id: "remove-beginning", title: "Remove the Beginning", mission: "Use a slice to remove Start- and display Learning.", starterCode: `message = "Start-Learning"

print(message)`, hint: "Learning begins at index 6.", solution: `message = "Start-Learning"

print(message[6:])` },
        { id: "keep-ending", title: "Keep the Ending", mission: "Use a negative slice to display only Lab from PythonLab.", starterCode: `place = "PythonLab"

print(place)`, hint: "Lab is the final three characters.", solution: `place = "PythonLab"

print(place[-3:])` },
        { id: "every-other", title: "Every Other Character", mission: "Use one step slice to display 135 from 123456.", starterCode: `numbers = "123456"

print(numbers)`, hint: "Use numbers[::2].", solution: `numbers = "123456"

print(numbers[::2])` },
        { id: "slice-toolbox", title: "The Slice Toolbox", mission: "Display Code, Ready, and every other character of ABCDEF.", starterCode: `message = "CodeReady"
letters = "ABCDEF"

print(message)
print(message)
print(letters)`, hint: "Use message[:4], message[4:], and letters[::2].", solution: `message = "CodeReady"
letters = "ABCDEF"

print(message[:4])
print(message[4:])
print(letters[::2])` }
      ]
    },
    quizGenerator: {
      activities: [
        { id: "quiz-basic", question: "What will this program display?", code: `word = "Python"
print(word[1:4])`, options: ["Pyt", "yth", "ytho", "thon"], correct: 1, explanation: "Correct — the slice includes index 1 and stops before index 4." },
        { id: "quiz-stop", question: "In text[2:5], which stop position is not included?", code: "", options: ["2", "3", "4", "5"], correct: 3, explanation: "Correct — a slice stops before its stop boundary, so index 5 is not included." },
        { id: "quiz-omit-start", question: "What will this program display?", code: `word = "Python"
print(word[:2])`, options: ["Py", "Pyt", "yt", "thon"], correct: 0, explanation: "Correct — an empty start begins at the beginning and stops before index 2." },
        { id: "quiz-omit-stop", question: "What will this program display?", code: `word = "Python"
print(word[3:])`, options: ["Pyt", "yth", "hon", "thon"], correct: 2, explanation: "Correct — the slice begins at index 3 and continues to the end." },
        { id: "quiz-negative", question: "What will this program display?", code: `word = "Python"
print(word[-3:])`, options: ["Pyt", "tho", "hon", "on"], correct: 2, explanation: "Correct — -3 begins three characters from the end." },
        { id: "quiz-step", question: "What will this program display?", code: `text = "123456"
print(text[::2])`, options: ["123", "246", "135", "654321"], correct: 2, explanation: "Correct — step 2 takes 1, skips 2, takes 3, and continues." },
        { id: "quiz-index-slice", question: "Which expression requests a portion rather than one exact character?", code: "", options: ["word[2]", "word[-1]", "word[1:4]", "word[0]"], correct: 2, explanation: "Correct — the colon marks a slice containing a range of characters." },
        { id: "quiz-safe", question: "What will this program display?", code: `word = "Cat"
print(word[:20])`, options: ["Cat", "IndexError", "C", "Nothing"], correct: 0, explanation: "Correct — a slice safely returns the available characters before its distant boundary." },
        { id: "quiz-whole", question: "Which slice returns the complete string stored in word?", code: "", options: ["word[0]", "word[-1]", "word[:]", "word[1:]"], correct: 2, explanation: "Correct — with both boundaries omitted, the slice covers the complete string." }
      ]
    },
    quiz: {
      question: "What will this program display?",
      code: `word = "Python"

print(word[:3])
print(word[3:])`,
      options: ["Pyt then hon", "Python twice", "Py then thon", "An error"],
      correct: 0,
      explanation: "Correct — the first slice stops before index 3, and the second begins at index 3."
    }
  },
  11: {
    title: "Useful String Methods — Cleaning, Changing, Dividing and Searching",
    stage: "Input & Decisions",
    level: "Beginner",
    time: "25 minutes",
    tags: ["Ready-made text tools", "Returned results"],
    intro: "You have created, joined, indexed, and sliced strings. Now Python will do four common text jobs for you with ready-made methods.",
    explanation: "A <strong>string method</strong> is a ready-made action for text. The dot connects a string to an action: <code>message.strip()</code>. Today you will clean outer spaces, replace text, split text into portions, and find where text begins.",
    concept: "Use strip() to clean the outside, replace() to make a changed version, split() to divide text, and find() to locate text.",
    starterCode: `message = "  Python is friendly  "

clean_message = message.strip()
new_message = clean_message.replace("friendly", "powerful")
words = clean_message.split()
position = clean_message.find("Python")

print(">" + clean_message + "<")
print(new_message)
print(words)
print(position)`,
    expectedOutput: `>Python is friendly<
Python is powerful
['Python', 'is', 'friendly']
0`,
    lineByLine: [
      '<code>message</code> begins and ends with extra spaces. The visible markers later help us see whether those spaces remain.',
      '<code>message.strip()</code> returns a cleaned string without whitespace at its beginning or end.',
      '<code>clean_message.replace("friendly", "powerful")</code> returns a new version containing the requested replacement.',
      '<code>clean_message.split()</code> divides the string at ordinary spaces. Python displays the resulting portions inside square brackets.',
      'That grouped result is called a <strong>list</strong>. Lists receive their own lessons later; today, simply notice the separated text portions.',
      '<code>clean_message.find("Python")</code> returns <code>0</code> because the requested text begins at index 0.',
      'Each method gives back a result. We store each result in a variable so we can print it and use it later.'
    ],
    outputExplanation: "The markers touch the cleaned message because <code>strip()</code> removed only its outer spaces. <code>replace()</code> produced a changed sentence, <code>split()</code> produced three visible portions, and <code>find()</code> reported the starting position 0.",
    changeIt: "First, add more outer spaces to <code>message</code> and confirm that the markers still touch the cleaned result.<br><br>Next, replace <code>\"powerful\"</code> with <code>\"helpful\"</code>.<br><br>Then try <code>items = \"tea,bread,milk\"</code> and <code>print(items.split(\",\"))</code>.<br><br>Finally, search for <code>\"Java\"</code> and observe the not-found result <code>-1</code>.",
    challenge: "Clean the outer spaces from a sentence, replace one word, and find where Python begins. Store every returned result before printing it.",
    hint: "Use <code>strip()</code> first, then call <code>replace()</code> and <code>find()</code> on the cleaned variable.",
    solution: `message = "  Python is difficult  "

clean_message = message.strip()
new_message = clean_message.replace("difficult", "learnable")
position = new_message.find("Python")

print(">" + clean_message + "<")
print(new_message)
print(position)`,
    practiceCoach: {
      knowledgeBoundary: {
        current: ["string methods", "dot syntax", "strip()", "replace()", "split()", "find()", "returned strings", "split list preview", "find -1 as not found"],
        previous: ["print()", "variables", "strings", "concatenation", "indexing", "slicing", "character positions"],
        prohibited: ["list indexing", "list methods", "loops over split results", "advanced method chaining", "f-strings", "input", "comparisons", "conditions", "loops", "functions"]
      },
      activities: [
        { id: "clean-name", stage: "Easy Start · Clean the Outside", title: "Clean a Name", mission: "Use strip() so the markers touch Amina with no outer spaces.", starterCode: `name = "   Amina   "

print(">" + name + "<")`, hint: "Store name.strip() or use it inside the joined output.", success: "You removed outer whitespace while keeping the text.", check: { mustChange: true, expectedOutput: [">Amina<"] } },
        { id: "middle-space", stage: "Easy Start · Keep Useful Spaces", title: "Keep the Middle Space", mission: "Clean only the outside so the output remains Python Lab with its middle space.", starterCode: `place = "  Python Lab  "

print(place)`, hint: "Use place.strip(). strip() keeps the space between words.", success: "You cleaned the ends without harming the useful middle space.", check: { mustChange: true, expectedOutput: ["Python Lab"] } },
        { id: "replace-colour", stage: "Growing · Make a New Version", title: "Replace the Colour", mission: "Use replace() so the program displays green door.", starterCode: `message = "red door"

print(message)`, hint: "Use message.replace(\"red\", \"green\").", success: "You created a changed version of the string.", check: { mustChange: true, expectedOutput: ["green door"] } },
        { id: "replace-all", stage: "Growing · Change Every Match", title: "Replace Every Match", mission: "Replace every go with learn so all three words change.", starterCode: `message = "go go go"

print(message)`, hint: "replace() changes every matching occurrence by default.", success: "You replaced every matching piece of text.", check: { mustChange: true, expectedOutput: ["learn learn learn"] } },
        { id: "split-note", stage: "Growing · Divide at a Separator", title: "Split the Shopping Note", mission: "Use the comma as a separator so Python displays three separate portions.", starterCode: `items = "tea,bread,milk"

print(items)`, hint: "Use items.split(\",\").", success: "You divided comma-separated text into three portions.", check: { mustChange: true, expectedOutput: ["['tea', 'bread', 'milk']"] } },
        { id: "find-position", stage: "Growing · Locate Text", title: "Find the Starting Position", mission: "Use find() to display the position where Python begins.", starterCode: `message = "Learning Python"

print(message)`, hint: "Use message.find(\"Python\").", success: "You found the exact starting index of requested text.", check: { mustChange: true, expectedOutput: ["9"] } },
        { id: "not-found", stage: "Ready for a Challenge · Read the Result", title: "Understand Not Found", mission: "Search for Java and display find()'s honest not-found result.", starterCode: `message = "Learning Python"

print(message)`, hint: "Use message.find(\"Java\").", success: "You recognised -1 as find()'s not-found result.", check: { mustChange: true, expectedOutput: ["-1"] } }
      ]
    },
    freshPracticeGenerator: {
      templates: [
        { id: "fresh-clean", skill: "Clean Outer Spaces", title: "A Fresh Cleaning Task", mission: "Use strip() so the markers touch '{{value}}'.", starterCode: `text = "   {{value}}   "

print(">" + text + "<")`, hint: "Join the markers with text.strip().", solution: `text = "   {{value}}   "

print(">" + text.strip() + "<")`, success: "You cleaned fresh outer whitespace.", check: { mustChange: true, expectedOutput: [">{{value}}<"] }, values: { value: ["Amina", "Python Lab", "Ready", "Keep going", "Practice", "Welcome", "One step", "Learning", "Naveed", "New message", "Good work", "Try again"] } },
        { id: "fresh-replace", skill: "Replace One Piece", title: "A Fresh Replacement", mission: "Replace red with green while keeping '{{thing}}'.", starterCode: `message = "red {{thing}}"

print(message)`, hint: "Use message.replace(\"red\", \"green\").", solution: `message = "red {{thing}}"

print(message.replace("red", "green"))`, success: "You made a fresh changed string.", check: { mustChange: true, expectedOutput: ["green {{thing}}"] }, values: { thing: ["door", "car", "box", "bag", "kite", "book", "hat", "cup", "chair", "sign", "card", "ball"] } },
        { id: "fresh-replace-all", skill: "Replace Every Match", title: "Replace Every Fresh Match", mission: "Replace every go with '{{target}}'.", starterCode: `message = "go go go"

print(message)`, hint: "Use message.replace(\"go\", \"{{target}}\").", solution: `message = "go go go"

print(message.replace("go", "{{target}}"))`, success: "You replaced all fresh matches.", check: { mustChange: true, expectedOutput: ["{{target}} {{target}} {{target}}"] }, values: { target: ["learn", "run", "try", "grow", "win", "code", "read", "build", "move", "start", "practise", "continue"] } },
        { id: "fresh-word-split", skill: "Split at Spaces", title: "A Fresh Word Split", mission: "Use split() to divide the two words into separate portions.", starterCode: `message = "{{first}} {{second}}"

print(message)`, hint: "Use message.split() with empty parentheses.", solution: `message = "{{first}} {{second}}"

print(message.split())`, success: "You split a fresh two-word message.", check: { mustChange: true, expectedOutput: ["['{{first}}', '{{second}}']"] }, values: { first: ["Keep", "Python", "Learn", "Small", "Bright", "Try", "Build", "Read", "Move", "Start", "Practise", "Continue"], second: ["going", "practice", "daily", "steps", "future", "again", "slowly", "today", "forward", "carefully", "together", "confidently"] } },
        { id: "fresh-separator-split", skill: "Split at a Separator", title: "A Fresh Separator Split", mission: "Use the | character to divide all three values.", starterCode: `items = "{{one}}|{{two}}|{{three}}"

print(items)`, hint: "Use items.split(\"|\").", solution: `items = "{{one}}|{{two}}|{{three}}"

print(items.split("|"))`, success: "You used a fresh custom separator.", check: { mustChange: true, expectedOutput: ["['{{one}}', '{{two}}', '{{three}}']"] }, values: { one: ["red", "tea", "one", "cat"], two: ["green", "bread", "two", "dog"], three: ["blue", "milk", "three", "bird"] } },
        { id: "fresh-find", skill: "Find Present Text", title: "A Fresh Text Search", mission: "Use find() to locate '{{word}}'. It begins at index 3.", starterCode: `message = "Go {{word}}"

print(message)`, hint: "Use message.find(\"{{word}}\").", solution: `message = "Go {{word}}"

print(message.find("{{word}}"))`, success: "You located fresh text at its starting index.", check: { mustChange: true, expectedOutput: ["3"] }, values: { word: ["Python", "learn", "again", "slowly", "forward", "today", "practice", "build", "continue", "ready", "explore", "create"] } },
        { id: "fresh-missing", skill: "Find Missing Text", title: "A Fresh Not-Found Search", mission: "Search for '{{missing}}' and display find()'s result.", starterCode: `message = "{{message}}"

print(message)`, hint: "Use message.find(\"{{missing}}\"). The requested text is absent.", solution: `message = "{{message}}"

print(message.find("{{missing}}"))`, success: "You correctly read a fresh not-found result.", check: { mustChange: true, expectedOutput: ["-1"] }, values: { message: ["Python is ready", "The door is open", "Tea is warm", "Today is sunny", "The cat is sleeping", "Practice feels good"], missing: ["Java", "closed", "coffee", "rain", "dog", "difficult"] } },
        { id: "fresh-toolbox", skill: "Clean and Replace", title: "A Fresh Method Toolbox", mission: "Clean the outer spaces, then replace red with '{{colour}}'. Display both returned results.", starterCode: `message = "  red {{thing}}  "

print(message)
print(message)`, hint: "Store message.strip(), then use replace() on the clean result.", solution: `message = "  red {{thing}}  "

clean_message = message.strip()
new_message = clean_message.replace("red", "{{colour}}")

print(clean_message)
print(new_message)`, success: "You combined two fresh method results clearly.", check: { mustChange: true, expectedOutput: ["red {{thing}}", "{{colour}} {{thing}}"] }, values: { thing: ["door", "car", "box", "bag"], colour: ["green", "blue", "yellow", "white"] } }
      ]
    },
    challengeGenerator: {
      activities: [
        { id: "clean-visitor", title: "Clean the Visitor Name", mission: "Clean the visitor name and display it between markers.", starterCode: `visitor = "   Amina   "

print(">" + visitor + "<")`, hint: "Use visitor.strip() inside the joined output.", solution: `visitor = "   Amina   "

clean_visitor = visitor.strip()
print(">" + clean_visitor + "<")` },
        { id: "welcome-repair", title: "Repair the Welcome Message", mission: "Replace difficult with learnable without changing the original variable.", starterCode: `message = "Python is difficult"

print(message)`, hint: "Store message.replace() in a new variable.", solution: `message = "Python is difficult"
new_message = message.replace("difficult", "learnable")

print(message)
print(new_message)` },
        { id: "colour-list", title: "Split the Colour List", mission: "Split the comma-separated colours into visible portions.", starterCode: `colours = "red,green,blue"

print(colours)`, hint: "Use colours.split(\",\").", solution: `colours = "red,green,blue"

print(colours.split(","))` },
        { id: "secret-word", title: "Find the Secret Word", mission: "Find where treasure begins in the clue.", starterCode: `clue = "Find the treasure nearby"

print(clue)`, hint: "Use clue.find(\"treasure\").", solution: `clue = "Find the treasure nearby"

print(clue.find("treasure"))` },
        { id: "missing-search", title: "Search for Missing Text", mission: "Search for rain and display the honest result.", starterCode: `weather = "Today is sunny"

print(weather)`, hint: "Use weather.find(\"rain\").", solution: `weather = "Today is sunny"

print(weather.find("rain"))` },
        { id: "clean-replace", title: "Clean and Replace", mission: "Clean the sentence, replace slow with steady, and display both results.", starterCode: `message = "  Progress is slow  "

print(message)
print(message)`, hint: "Store strip() first, then call replace() on the clean variable.", solution: `message = "  Progress is slow  "

clean_message = message.strip()
new_message = clean_message.replace("slow", "steady")

print(clean_message)
print(new_message)` },
        { id: "text-workshop", title: "The Text Workshop", mission: "Clean the message, replace difficult, split the result, and find Python.", starterCode: `message = "  Python is difficult  "

print(message)
print(message)
print(message)
print(message)`, hint: "Store each returned result in its own meaningful variable.", solution: `message = "  Python is difficult  "

clean_message = message.strip()
new_message = clean_message.replace("difficult", "learnable")
words = new_message.split()
position = new_message.find("Python")

print(clean_message)
print(new_message)
print(words)
print(position)` }
      ]
    },
    quizGenerator: {
      activities: [
        { id: "quiz-strip", question: "What does strip() remove by default?", code: "", options: ["Every space", "Outer whitespace", "Every letter", "The complete string"], correct: 1, explanation: "Correct — strip() removes whitespace from the beginning and end." },
        { id: "quiz-middle-space", question: "What will this program display?", code: `message = "  Python Lab  "
print(message.strip())`, options: ["PythonLab", "Python Lab", "  Python Lab", "An error"], correct: 1, explanation: "Correct — strip() keeps the useful space between the words." },
        { id: "quiz-replace", question: "What will this program display?", code: `message = "red door"
print(message.replace("red", "green"))`, options: ["red door", "green door", "green red", "An error"], correct: 1, explanation: "Correct — replace() returns a version with red changed to green." },
        { id: "quiz-replace-all", question: "What will this program display?", code: `text = "go go"
print(text.replace("go", "run"))`, options: ["run go", "go run", "run run", "go go"], correct: 2, explanation: "Correct — replace() changes every matching occurrence by default." },
        { id: "quiz-split-space", question: "What will this program display?", code: `text = "one two"
print(text.split())`, options: ["one two", "['one', 'two']", "onetwo", "An error"], correct: 1, explanation: "Correct — split() divides the text at whitespace into two portions." },
        { id: "quiz-split-comma", question: "Which expression divides items at each comma?", code: "", options: ["items.strip()", "items.replace(",")", "items.split(",")", "items.find(",")"], correct: 2, explanation: "Correct — the comma argument tells split() where to divide." },
        { id: "quiz-find", question: "What will this program display?", code: `text = "Go Python"
print(text.find("Python"))`, options: ["0", "2", "3", "9"], correct: 2, explanation: "Correct — Python begins at index 3 after Go and one space." },
        { id: "quiz-not-found", question: "What will find() return when requested text is absent?", code: "", options: ["0", "False", "-1", "Nothing"], correct: 2, explanation: "Correct — find() uses -1 to report that text was not found." },
        { id: "quiz-returned-result", question: "Which code stores the cleaned result for later use?", code: "", options: ["message.strip()", "print(message)", "clean_message = message.strip()", "message.find()"], correct: 2, explanation: "Correct — assigning the returned result gives the cleaned string a useful name." }
      ]
    },
    quiz: {
      question: "What will this program display?",
      code: `message = "  red door  "

clean_message = message.strip()
print(clean_message.replace("red", "green"))`,
      options: ["  red door  ", "red door", "green door", "An error"],
      correct: 2,
      explanation: "Correct — strip() cleans the outside, then replace() returns green door."
    }
  },
  12: {
    title: "String Formatting — Building Messages with f-Strings",
    stage: "Input & Decisions",
    level: "Beginner",
    time: "25 minutes",
    tags: ["f-strings", "Readable messages"],
    intro: "Your programs already remember names, places, and numbers. Now those values will become part of natural, readable sentences.",
    explanation: "An <strong>f-string</strong> places stored values inside text. Put <code>f</code> before the opening quote and a variable inside braces: <code>f\"Hello, {name}!\"</code>.",
    concept: "The leading f activates formatting. Python evaluates each value or simple expression inside braces and places its result in the message.",
    starterCode: `name = "Amina"
city = "Longford"
lessons = 12

message = f"{name} is learning Python in {city}."
progress = f"{name} has reached Lesson {lessons}."

print(message)
print(progress)`,
    expectedOutput: `Amina is learning Python in Longford.
Amina has reached Lesson 12.`,
    lineByLine: [
      '<code>name</code>, <code>city</code>, and <code>lessons</code> store two strings and one number.',
      'The <code>f</code> before the quote tells Python that this string contains values to insert.',
      '<code>{name}</code> and <code>{city}</code> are replaced by the text stored in those variables.',
      '<code>{lessons}</code> places the number 12 into text without manual conversion.',
      'The ordinary words and punctuation around the braces remain exactly where they were written.',
      'The complete formatted strings are stored under meaningful names before being displayed.',
      'Without the leading <code>f</code>, Python would display braces and the word inside them as literal text.'
    ],
    outputExplanation: "Python evaluates each pair of braces and builds two complete messages. The variable values change while the sentence structure remains easy to read in the code.",
    changeIt: "Replace the name and city with your own choices, then run again.<br><br>Change <code>lessons</code> to another number.<br><br>Add <code>score = 10</code> and display <code>f\"{name} scored {score} points.\"</code>.<br><br>Finally, remove the leading <code>f</code>, observe the literal braces, then restore it.",
    challenge: "Build a Player Card using f-strings. Display the player, level, location, and score without changing the print labels.",
    hint: "Use one formatted string per line, such as <code>f\"PLAYER: {player}\"</code>.",
    solution: `player = "Nova"
level = 3
place = "Green Valley"
score = 40

print(f"PLAYER: {player}")
print(f"LEVEL: {level}")
print(f"LOCATION: {place}")
print(f"SCORE: {score}")`,
    practiceCoach: {
      knowledgeBoundary: {
        current: ["f-strings", "leading f", "braces", "multiple values", "numbers in messages", "simple expressions in braces", ".1f and .2f precision", "repairing f-string syntax"],
        previous: ["print()", "variables", "strings", "numbers", "arithmetic", "string methods"],
        prohibited: ["input()", "type conversion", "formal booleans", "comparisons", "conditions", "loops", "collections", "functions", "advanced alignment"]
      },
      activities: [
        { id: "personal-greeting", stage: "Easy Start · Insert One Value", title: "Write a Personal Greeting", mission: "Use an f-string to display Hello, Amina!", starterCode: `name = "Amina"

print("Hello, name!")`, hint: "Write print(f\"Hello, {name}!\").", success: "You placed a stored name inside a natural greeting.", check: { mustChange: true, expectedOutput: ["Hello, Amina!"] } },
        { id: "add-city", stage: "Easy Start · Insert Two Values", title: "Add a City", mission: "Display Sara is learning in Cork.", starterCode: `name = "Sara"
city = "Cork"

print(name)
print(city)`, hint: "Use both {name} and {city} in one f-string.", success: "You inserted two string values into one message.", check: { mustChange: true, expectedOutput: ["Sara is learning in Cork."] } },
        { id: "include-number", stage: "Growing · Mix Text and a Number", title: "Include a Number", mission: "Display Omar has 12 points.", starterCode: `name = "Omar"
score = 12

print(name)
print(score)`, hint: "An f-string can place {score} directly into text.", success: "You placed a number into text without manual conversion.", check: { mustChange: true, expectedOutput: ["Omar has 12 points."] } },
        { id: "player-status", stage: "Growing · Tell a Small Story", title: "Build a Player Status", mission: "Display Nova reached level 3 in Green Valley.", starterCode: `player = "Nova"
level = 3
place = "Green Valley"

print(player)`, hint: "Use all three variables inside one f-string.", success: "You built a readable status from three values.", check: { mustChange: true, expectedOutput: ["Nova reached level 3 in Green Valley."] } },
        { id: "expression-message", stage: "Growing · Calculate Inside Braces", title: "Calculate Inside the Message", mission: "Use the two variables inside braces so the output is Total fruit: 7.", starterCode: `apples = 4
oranges = 3

print("Total fruit: {apples + oranges}")`, hint: "Add f before the quote; Python will calculate the expression.", success: "You evaluated earlier arithmetic inside an f-string.", check: { mustChange: true, expectedOutput: ["Total fruit: 7"] } },
        { id: "missing-f", stage: "Growing · Activate Formatting", title: "Repair the Missing f", mission: "Make the program display Hello, Amina! instead of literal braces.", starterCode: `name = "Amina"

print("Hello, {name}!")`, hint: "Add f immediately before the opening quote.", success: "You activated formatting with the leading f.", check: { mustChange: true, expectedOutput: ["Hello, Amina!"] } },
        { id: "close-brace", stage: "Ready for a Challenge · Repair Syntax", title: "Close the Brace", mission: "Repair the unmatched brace so Python displays Score: 10.", starterCode: `score = 10

print(f"Score: {score")`, hint: "Add } after score.", success: "You repaired a genuine f-string syntax error.", check: { mustChange: true, expectedOutput: ["Score: 10"] } }
      ]
    },
    freshPracticeGenerator: {
      templates: [
        { id: "fresh-greeting", skill: "Personal Greeting", title: "A Fresh Personal Greeting", mission: "Use an f-string to greet {{name}}.", starterCode: `name = "{{name}}"

print("Hello, name!")`, hint: "Use f\"Hello, {name}!\".", solution: `name = "{{name}}"

print(f"Hello, {name}!")`, success: "You created a fresh formatted greeting.", check: { mustChange: true, expectedOutput: ["Hello, {{name}}!"] }, values: { name: ["Amina", "Sara", "Omar", "Maya", "Noah", "Lina", "Naveed", "Alex", "Rosa", "Sam"] } },
        { id: "fresh-city", skill: "Name and City", title: "A Fresh City Message", mission: "Display {{name}} is learning in {{city}}.", starterCode: `name = "{{name}}"
city = "{{city}}"

print(name)`, hint: "Use {name} and {city} in one f-string.", solution: `name = "{{name}}"
city = "{{city}}"

print(f"{name} is learning in {city}.")`, success: "You combined two fresh text values.", check: { mustChange: true, expectedOutput: ["{{name}} is learning in {{city}}."] }, values: { name: ["Amina", "Sara", "Omar", "Maya", "Noah", "Lina"], city: ["Cork", "Dublin", "Galway", "Longford", "Limerick", "Waterford"] } },
        { id: "fresh-score", skill: "Score Report", title: "A Fresh Score Report", mission: "Display {{name}} scored {{score}} points.", starterCode: `name = "{{name}}"
score = {{score}}

print(name)
print(score)`, hint: "Place both variables inside one f-string.", solution: `name = "{{name}}"
score = {{score}}

print(f"{name} scored {score} points.")`, success: "You formatted fresh text and a number.", check: { mustChange: true, expectedOutput: ["{{name}} scored {{score}} points."] }, values: { name: ["Amina", "Sara", "Omar", "Maya", "Noah", "Lina"], score: [5, 10, 15, 20, 25, 30] } },
        { id: "fresh-player", skill: "Player Status", title: "A Fresh Player Status", mission: "Build one status message using all three stored values.", starterCode: `player = "{{player}}"
level = {{level}}
place = "{{place}}"

print(player)`, hint: "Use f\"{player} reached level {level} in {place}.\".", solution: `player = "{{player}}"
level = {{level}}
place = "{{place}}"

print(f"{player} reached level {level} in {place}.")`, success: "You built a fresh player story.", check: { mustChange: true, expectedOutput: ["{{player}} reached level {{level}} in {{place}}."] }, values: { player: ["Nova", "Luna", "Atlas", "Maya"], level: [2, 3, 4, 5], place: ["Green Valley", "Crystal Forest", "Python Lab", "River Town"] } },
        { id: "fresh-total", skill: "Expression in Braces", title: "A Fresh Total Message", mission: "Calculate the total inside braces and display Total: {{total}}.", starterCode: `first = {{first}}
second = {{second}}

print("Total: {first + second}")`, hint: "Add f before the quote.", solution: `first = {{first}}
second = {{second}}

print(f"Total: {first + second}")`, success: "You calculated a fresh result inside braces.", check: { mustChange: true, expectedOutput: ["Total: {{total}}"] }, values: { first: [2], second: [3], total: [5] } },
        { id: "fresh-price", skill: "Decimal Precision", title: "A Fresh Decimal Price", mission: "Display the price with exactly two decimal places.", starterCode: `price = {{price}}

print(price)`, hint: "Use f\"Price: €{price:.2f}\".", solution: `price = {{price}}

print(f"Price: €{price:.2f}")`, success: "You formatted a fresh decimal price.", check: { mustChange: true, expectedOutput: ["Price: €{{formatted}}"] }, values: { price: [3.5], formatted: ["3.50"] } },
        { id: "fresh-missing-f", skill: "Repair Formatting", title: "Repair a Fresh Missing f", mission: "Activate the braces so the message displays {{name}}.", starterCode: `name = "{{name}}"

print("Welcome, {name}!")`, hint: "Add f before the opening quote.", solution: `name = "{{name}}"

print(f"Welcome, {name}!")`, success: "You repaired fresh inactive formatting.", check: { mustChange: true, expectedOutput: ["Welcome, {{name}}!"] }, values: { name: ["Amina", "Sara", "Omar", "Maya", "Noah", "Lina"] } },
        { id: "fresh-brace", skill: "Repair Braces", title: "Repair Fresh Braces", mission: "Add the missing closing brace so the score displays correctly.", starterCode: `score = {{score}}

print(f"Score: {score")`, hint: "Close {score} with }.", solution: `score = {{score}}

print(f"Score: {score}")`, success: "You repaired fresh f-string braces.", check: { mustChange: true, expectedOutput: ["Score: {{score}}"] }, values: { score: [5, 10, 15, 20, 25, 30] } }
      ]
    },
    challengeGenerator: {
      activities: [
        { id: "learner-card", title: "The Learner Card", mission: "Display the learner, city, and lesson in three formatted lines.", starterCode: `name = "Amina"
city = "Longford"
lesson = 12

print(name)
print(city)
print(lesson)`, hint: "Use one labelled f-string per line.", solution: `name = "Amina"
city = "Longford"
lesson = 12

print(f"LEARNER: {name}")
print(f"CITY: {city}")
print(f"LESSON: {lesson}")` },
        { id: "player-card", title: "Player Status", mission: "Build a four-line formatted Player Card.", starterCode: `player = "Nova"
level = 3
place = "Green Valley"
score = 40

print(player)`, hint: "Place each value after a readable label.", solution: `player = "Nova"
level = 3
place = "Green Valley"
score = 40

print(f"PLAYER: {player}")
print(f"LEVEL: {level}")
print(f"LOCATION: {place}")
print(f"SCORE: {score}")` },
        { id: "shopping-total", title: "Shopping Total", mission: "Calculate and display the total cost inside one f-string.", starterCode: `price = 3
quantity = 4

print(price)
print(quantity)`, hint: "Use {price * quantity} inside the message.", solution: `price = 3
quantity = 4

print(f"Total cost: €{price * quantity}")` },
        { id: "weather", title: "Weather Report", mission: "Display a natural report using the city and temperature.", starterCode: `city = "Cork"
temperature = 18.756

print(city)
print(temperature)`, hint: "Use {temperature:.1f} for one decimal place.", solution: `city = "Cork"
temperature = 18.756

print(f"{city}: {temperature:.1f}°C")` },
        { id: "progress", title: "Lesson Progress Message", mission: "Display the learner's current lesson and next lesson.", starterCode: `name = "Amina"
lesson = 12

print(name)
print(lesson)`, hint: "Use {lesson} and {lesson + 1}.", solution: `name = "Amina"
lesson = 12

print(f"{name} is on Lesson {lesson}.")
print(f"Next: Lesson {lesson + 1}.")` },
        { id: "broken-greeting", title: "Repair the Broken Greeting", mission: "Repair the missing f and closing brace.", starterCode: `name = "Sara"

print("Hello, {name!")`, hint: "Add f before the quote and } after name.", solution: `name = "Sara"

print(f"Hello, {name}!")` },
        { id: "formatted-story", title: "The Formatted Story", mission: "Use all four values in a readable two-line story.", starterCode: `player = "Nova"
place = "Crystal Forest"
coins = 7
bonus = 3

print(player)
print(place)`, hint: "Use values directly and calculate coins + bonus inside braces.", solution: `player = "Nova"
place = "Crystal Forest"
coins = 7
bonus = 3

print(f"{player} explored {place}.")
print(f"Total coins: {coins + bonus}")` }
      ]
    },
    quizGenerator: {
      activities: [
        { id: "quiz-f", question: "What does the f before a string enable?", code: "", options: ["File access", "Formatted values in braces", "A loop", "A comment"], correct: 1, explanation: "Correct — f activates formatted values inside braces." },
        { id: "quiz-greeting", question: "What will this program display?", code: `name = "Sara"
print(f"Hello, {name}!")`, options: ["Hello, name!", "Hello, Sara!", "{Sara}", "An error"], correct: 1, explanation: "Correct — {name} is replaced by Sara." },
        { id: "quiz-missing-f", question: "What will this ordinary string display?", code: `name = "Sara"
print("Hello, {name}!")`, options: ["Hello, Sara!", "Hello, {name}!", "Sara", "An error"], correct: 1, explanation: "Correct — without f, the braces remain literal text." },
        { id: "quiz-number", question: "What will this program display?", code: `score = 10
print(f"Score: {score}")`, options: ["Score: score", "Score: 10", "10 score", "An error"], correct: 1, explanation: "Correct — an f-string places the number into the message." },
        { id: "quiz-expression", question: "What will this program display?", code: `score = 5
print(f"Score: {score + 2}")`, options: ["Score: 5 + 2", "Score: 5", "Score: 7", "An error"], correct: 2, explanation: "Correct — Python evaluates the expression inside braces first." },
        { id: "quiz-multiple", question: "Which f-string uses both name and city?", code: "", options: ["f\"name city\"", "f\"{name} lives in {city}.\"", "\"{name} {city}\"", "f\"name lives in city\""], correct: 1, explanation: "Correct — both variable names appear inside braces." },
        { id: "quiz-quoted", question: "What does {'name'} insert inside an f-string?", code: "", options: ["The variable's value", "The literal word name", "A number", "An error"], correct: 1, explanation: "Correct — quotation marks make name literal text." },
        { id: "quiz-decimal", question: "What will this program display?", code: `price = 3.5
print(f"€{price:.2f}")`, options: ["€3.5", "€3.50", "€price", "An error"], correct: 1, explanation: "Correct — .2f displays two digits after the decimal point." },
        { id: "quiz-brace", question: "What is missing from f\"Hello, {name!\"?", code: "", options: ["A colon", "A closing brace", "A number", "A second f"], correct: 1, explanation: "Correct — every opening formatting brace needs its closing }." }
      ]
    },
    quiz: {
      question: "What will this program display?",
      code: `name = "Amina"
lesson = 12

print(f"{name} has reached Lesson {lesson}.")`,
      options: ["{name} has reached Lesson {lesson}.", "Amina has reached Lesson 12.", "Amina lesson", "An error"],
      correct: 1,
      explanation: "Correct — both stored values are inserted into the readable message."
    }
  },
  13: {
    title: "Booleans — True and False",
    stage: "Input & Decisions",
    level: "Beginner",
    time: "20 minutes",
    tags: ["True and False", "Program state"],
    intro: "Some information has only two honest answers: yes or no, on or off, ready or not ready. Python gives us two special values for exactly that kind of fact.",
    explanation: "A <strong>Boolean</strong> is a value that is either <code>True</code> or <code>False</code>. These are Python values, not quoted pieces of text.",
    concept: "Use a Boolean when a program needs to remember whether something is true or false. Python requires a capital T in True and a capital F in False.",
    starterCode: `lesson_ready = True
quiz_complete = False

print(lesson_ready)
print(quiz_complete)

print(f"Lesson ready: {lesson_ready}")
print(f"Quiz complete: {quiz_complete}")`,
    expectedOutput: `True
False
Lesson ready: True
Quiz complete: False`,
    lineByLine: [
      '<code>lesson_ready = True</code> stores a yes-like fact: the lesson is ready.',
      '<code>quiz_complete = False</code> stores a no-like fact: the quiz is not complete yet.',
      '<code>True</code> and <code>False</code> begin with capital letters and have no quotation marks.',
      '<code>print(lesson_ready)</code> displays the Boolean value currently stored under that name.',
      'The f-strings place Boolean values inside clear, human-readable messages.',
      'A Boolean variable can receive a new value later, just like the other variables you already know.'
    ],
    outputExplanation: "The first two lines show the Boolean values themselves. The next two lines use f-strings from Lesson 12 to explain what each fact represents.",
    changeIt: "Change <code>quiz_complete</code> from <code>False</code> to <code>True</code>, predict which output line will change, then run again.<br><br>Next, add <code>sound_on = True</code> and display it in an f-string.<br><br>Finally, put quotation marks around one <code>True</code>. The output may look similar, but remember: <code>\"True\"</code> is text, while <code>True</code> is a Boolean.",
    challenge: "Create a small Learning Status panel using three clearly named Boolean variables and display each fact with an f-string.",
    hint: "Store each fact first, such as <code>lesson_open = True</code>, then display it with <code>print(f\"Lesson open: {lesson_open}\")</code>.",
    solution: `lesson_open = True
practice_complete = True
quiz_complete = False

print(f"Lesson open: {lesson_open}")
print(f"Practice complete: {practice_complete}")
print(f"Quiz complete: {quiz_complete}")`,
    practiceCoach: {
      knowledgeBoundary: {
        current: ["Boolean values", "True", "False", "capitalisation", "Booleans in variables", "changing program state", "displaying Booleans", "Booleans versus quoted text"],
        previous: ["print()", "variables", "strings", "numbers", "f-strings"],
        prohibited: ["comparisons", "logical operators", "if statements", "input()", "type conversion", "truthiness", "conditions", "loops", "collections", "functions"]
      },
      activities: [
        { id: "make-ready", stage: "Easy Start · Store One Fact", title: "Make the Lesson Ready", mission: "Change the stored value so the output is True.", starterCode: `lesson_ready = False

print(lesson_ready)`, hint: "Replace False with True. Keep the capital T.", success: "You changed a Boolean fact from False to True.", check: { mustChange: true, expectedOutput: ["True"] } },
        { id: "mark-incomplete", stage: "Easy Start · Store a No Fact", title: "Mark the Quiz Incomplete", mission: "Use the correct Boolean so the output is Quiz complete: False.", starterCode: `quiz_complete = True

print(f"Quiz complete: {quiz_complete}")`, hint: "Give quiz_complete the Boolean value False.", success: "You used False to represent an unfinished task.", check: { mustChange: true, expectedOutput: ["Quiz complete: False"] } },
        { id: "remove-quotes", stage: "Growing · Boolean or Text", title: "Remove the Quotation Marks", mission: "Turn the text into a real Boolean while keeping the output True.", starterCode: `door_open = "True"

print(door_open)`, hint: "Remove both quotation marks around True.", success: "You changed quoted text into a genuine Boolean value.", check: { mustChange: true, expectedOutput: ["True"] } },
        { id: "repair-capital", stage: "Growing · Write Python's Spelling", title: "Repair the Capital Letter", mission: "Fix the value so Python displays False without an error.", starterCode: `lights_on = false

print(lights_on)`, hint: "Python writes this Boolean with a capital F: False.", success: "You repaired Python's exact Boolean spelling.", check: { mustChange: true, expectedOutput: ["False"] } },
        { id: "two-facts", stage: "Growing · Describe Two Facts", title: "Show Two Settings", mission: "Make the output exactly Sound on: True and Music on: False.", starterCode: `sound_on = False
music_on = True

print(f"Sound on: {sound_on}")
print(f"Music on: {music_on}")`, hint: "Swap the two Boolean values near the top.", success: "You represented two independent settings clearly.", check: { mustChange: true, expectedOutput: ["Sound on: True", "Music on: False"] } },
        { id: "state-change", stage: "Growing · Watch State Change", title: "Complete the Download", mission: "Display Download complete: False first, then Download complete: True.", starterCode: `download_complete = False

print(f"Download complete: {download_complete}")`, hint: "After the first print, assign True to download_complete and print the same message again.", success: "You watched one Boolean variable change as the story moved forward.", check: { mustChange: true, expectedOutput: ["Download complete: False", "Download complete: True"] } },
        { id: "status-card", stage: "Ready for a Challenge · Build a Status", title: "Build a Tiny Status Card", mission: "Display Account active: True, Email verified: True, and Premium member: False.", starterCode: `account_active = True
email_verified = False
premium_member = True

print(account_active)`, hint: "Correct the stored facts, then use three labelled f-strings.", success: "You built a readable status card from three Boolean facts.", check: { mustChange: true, expectedOutput: ["Account active: True", "Email verified: True", "Premium member: False"] } }
      ]
    },
    freshPracticeGenerator: {
      templates: [
        { id: "fresh-ready", skill: "Store a True Fact", title: "A Fresh Ready State", mission: "Make the stored fact true and display {{label}}: True.", starterCode: `status = False

print(f"{{label}}: {status}")`, hint: "Change the Boolean value to True.", solution: `status = True

print(f"{{label}}: {status}")`, success: "You made a fresh item ready.", check: { mustChange: true, expectedOutput: ["{{label}}: True"] }, values: { label: ["Lesson ready", "Game ready", "Report ready", "Room ready", "Camera ready", "Message ready"] } },
        { id: "fresh-off", skill: "Store a False Fact", title: "A Fresh Off State", mission: "Turn the setting off so the message ends with False.", starterCode: `setting_on = True

print(f"{{label}}: {setting_on}")`, hint: "Replace True with False.", solution: `setting_on = False

print(f"{{label}}: {setting_on}")`, success: "You represented a fresh off state.", check: { mustChange: true, expectedOutput: ["{{label}}: False"] }, values: { label: ["Sound on", "Music on", "Camera on", "Lights on", "Alerts on", "Wi-Fi on"] } },
        { id: "fresh-unquote", skill: "Boolean Not Text", title: "Unquote a Fresh Boolean", mission: "Make the stored value a real Boolean while preserving the displayed word.", starterCode: `status = "{{value}}"

print(status)`, hint: "Remove the quotation marks around {{value}}.", solution: `status = {{value}}

print(status)`, success: "You distinguished a fresh Boolean from text.", check: { mustChange: true, expectedOutput: ["{{value}}"] }, values: { value: ["True", "False"] } },
        { id: "fresh-capital", skill: "Repair Boolean Spelling", title: "Repair Fresh Boolean Spelling", mission: "Correct Python's spelling in this {{context}} status so the program displays True.", starterCode: `# {{context}} status
status = true

print(status)`, hint: "Boolean values begin with a capital letter.", solution: `status = True

print(status)`, success: "You repaired fresh Boolean capitalisation.", check: { mustChange: true, expectedOutput: ["True"] }, values: { context: ["door", "task", "sound", "file", "lesson", "message"] } },
        { id: "fresh-message", skill: "Boolean in an f-String", title: "A Fresh Status Message", mission: "Use the stored Boolean to display {{label}}: {{value}}.", starterCode: `status = {{value}}

print(status)`, hint: "Place the variable inside a labelled f-string.", solution: `status = {{value}}

print(f"{{label}}: {status}")`, success: "You placed a fresh Boolean inside a clear message.", check: { mustChange: true, expectedOutput: ["{{label}}: {{value}}"] }, values: { label: ["File saved", "Email sent", "Door locked", "Profile public"], value: ["True", "False"] } },
        { id: "fresh-pair", skill: "Two Boolean Facts", title: "A Fresh Pair of Facts", mission: "Correct both facts and display the two requested status lines.", starterCode: `first_status = False
second_status = True

print(f"{{firstLabel}}: {first_status}")
print(f"{{secondLabel}}: {second_status}")`, hint: "The first fact should be True and the second should be False.", solution: `first_status = True
second_status = False

print(f"{{firstLabel}}: {first_status}")
print(f"{{secondLabel}}: {second_status}")`, success: "You managed two fresh Boolean facts.", check: { mustChange: true, expectedOutput: ["{{firstLabel}}: True", "{{secondLabel}}: False"] }, values: { firstLabel: ["Account active", "Lesson open", "Ticket valid"], secondLabel: ["Premium member", "Quiz complete", "Seat empty"] } },
        { id: "fresh-change", skill: "Change Program State", title: "A Fresh State Change", mission: "Show {{label}}: False followed by {{label}}: True.", starterCode: `status = False

print(f"{{label}}: {status}")`, hint: "After the first print, assign True and print the same f-string again.", solution: `status = False

print(f"{{label}}: {status}")

status = True
print(f"{{label}}: {status}")`, success: "You changed a fresh Boolean state over time.", check: { mustChange: true, expectedOutput: ["{{label}}: False", "{{label}}: True"] }, values: { label: ["Download complete", "Task complete", "File saved", "Message sent"] } },
        { id: "fresh-card", skill: "Boolean Status Card", title: "A Fresh Boolean Card", mission: "Build a readable three-line status card from the stored facts.", starterCode: `first_status = True
second_status = False
third_status = True

print(first_status)`, hint: "Use three f-strings with the supplied labels.", solution: `first_status = True
second_status = False
third_status = True

print(f"{{firstLabel}}: {first_status}")
print(f"{{secondLabel}}: {second_status}")
print(f"{{thirdLabel}}: {third_status}")`, success: "You built a fresh multi-fact status card.", check: { mustChange: true, expectedOutput: ["{{firstLabel}}: True", "{{secondLabel}}: False", "{{thirdLabel}}: True"] }, values: { firstLabel: ["Account active", "Lesson open"], secondLabel: ["Quiz complete", "Premium member"], thirdLabel: ["Practice ready", "Sound on"] } }
      ]
    },
    challengeGenerator: {
      activities: [
        { id: "learning-status", title: "Learning Status", mission: "Build a three-line learning status using the stored Boolean facts.", starterCode: `lesson_open = True
practice_complete = True
quiz_complete = False

print(lesson_open)`, hint: "Use one labelled f-string for each variable.", solution: `lesson_open = True
practice_complete = True
quiz_complete = False

print(f"Lesson open: {lesson_open}")
print(f"Practice complete: {practice_complete}")
print(f"Quiz complete: {quiz_complete}")` },
        { id: "game-settings", title: "Game Settings", mission: "Display sound, music, and hints as clear Boolean settings.", starterCode: `sound_on = True
music_on = False
hints_on = True

print(sound_on)`, hint: "Let each f-string explain the fact it displays.", solution: `sound_on = True
music_on = False
hints_on = True

print(f"Sound on: {sound_on}")
print(f"Music on: {music_on}")
print(f"Hints on: {hints_on}")` },
        { id: "repair-values", title: "Repair the Boolean Values", mission: "Repair the spelling and remove the quotation marks so both values are real Booleans.", starterCode: `door_open = true
lights_on = "False"

print(door_open)
print(lights_on)`, hint: "Use True and False with capital first letters and no quotes.", solution: `door_open = True
lights_on = False

print(door_open)
print(lights_on)` },
        { id: "order-status", title: "Order Status", mission: "Display three clear facts about a small order.", starterCode: `paid = True
packed = True
delivered = False

print(paid)`, hint: "Use the labels Paid, Packed, and Delivered.", solution: `paid = True
packed = True
delivered = False

print(f"Paid: {paid}")
print(f"Packed: {packed}")
print(f"Delivered: {delivered}")` },
        { id: "state-story", title: "Watch the Task Change", mission: "Show Task complete: False, change the stored fact, then show Task complete: True.", starterCode: `task_complete = False

print(task_complete)`, hint: "Print a labelled f-string, assign True, then print the same line again.", solution: `task_complete = False

print(f"Task complete: {task_complete}")

task_complete = True
print(f"Task complete: {task_complete}")` },
        { id: "account-card", title: "Account Card", mission: "Create a readable account card from four Boolean facts.", starterCode: `account_active = True
email_verified = True
premium_member = False
profile_public = False

print(account_active)`, hint: "Display each variable beside a plain-language label.", solution: `account_active = True
email_verified = True
premium_member = False
profile_public = False

print(f"Account active: {account_active}")
print(f"Email verified: {email_verified}")
print(f"Premium member: {premium_member}")
print(f"Profile public: {profile_public}")` },
        { id: "boolean-story", title: "The Boolean Story", mission: "Tell a two-step door story by changing one Boolean variable.", starterCode: `door_locked = True

print(door_locked)`, hint: "Display the first state, set door_locked to False, and display it again.", solution: `door_locked = True

print(f"Door locked: {door_locked}")

door_locked = False
print(f"Door locked: {door_locked}")` }
      ]
    },
    quizGenerator: {
      activities: [
        { id: "quiz-values", question: "Which two values are Python Booleans?", code: "", options: ["Yes and No", "1 and 0", "True and False", "On and Off"], correct: 2, explanation: "Correct — Python's two Boolean values are True and False." },
        { id: "quiz-capital", question: "Which line uses the correct Python Boolean spelling?", code: "", options: ["ready = true", "ready = TRUE", "ready = True", "ready = yes"], correct: 2, explanation: "Correct — True begins with a capital T and the remaining letters are lowercase." },
        { id: "quiz-output", question: "What will this program display?", code: `is_ready = True
print(is_ready)`, options: ["is_ready", "True", "\"True\"", "An error"], correct: 1, explanation: "Correct — print() displays the Boolean value stored in is_ready." },
        { id: "quiz-false", question: "Which value best represents an unfinished task?", code: "", options: ["False", "Finished", "0.0", "\"No\""], correct: 0, explanation: "Correct — False clearly represents a fact that is not true." },
        { id: "quiz-quotes", question: "Which line stores a real Boolean rather than text?", code: "", options: ["saved = \"True\"", "saved = 'False'", "saved = True", "saved = \"yes\""], correct: 2, explanation: "Correct — a Boolean has no quotation marks." },
        { id: "quiz-change", question: "What will the final line display?", code: `door_open = False
door_open = True
print(door_open)`, options: ["False", "True", "door_open", "False True"], correct: 1, explanation: "Correct — the later assignment changes the stored Boolean to True." },
        { id: "quiz-fstring", question: "What will this program display?", code: `music_on = False
print(f"Music on: {music_on}")`, options: ["Music on: music_on", "False", "Music on: False", "An error"], correct: 2, explanation: "Correct — the f-string places False after the readable label." },
        { id: "quiz-error", question: "Why does ready = false cause an error?", code: "", options: ["Booleans need quotation marks", "Python requires a capital F in False", "Variables cannot store Booleans", "False must be a number"], correct: 1, explanation: "Correct — Python is case-sensitive, so its Boolean value is spelled False." },
        { id: "quiz-purpose", question: "When is a Boolean a useful choice?", code: "", options: ["When storing a yes-or-no fact", "When writing a long paragraph", "When storing five names", "When drawing a picture"], correct: 0, explanation: "Correct — Booleans are ideal for facts with two states." }
      ]
    },
    quiz: {
      question: "What will this program display?",
      code: `lesson_complete = False

print(f"Lesson complete: {lesson_complete}")`,
      options: ["Lesson complete: lesson_complete", "Lesson complete: False", "False lesson", "An error"],
      correct: 1,
      explanation: "Correct — the f-string places the Boolean value False inside the message."
    }
  },
  14: {
    title: "Comparison Operators — Asking Python Questions",
    stage: "Input & Decisions",
    level: "Beginner",
    time: "25 minutes",
    tags: ["Comparisons", "Boolean answers"],
    intro: "You already know True and False. Now you will ask Python small questions about values—and watch Python create those Boolean answers for you.",
    explanation: "A <strong>comparison</strong> asks how two values relate. Python answers every comparison with <code>True</code> or <code>False</code>.",
    concept: "Use <code>==</code>, <code>!=</code>, <code>&gt;</code>, <code>&lt;</code>, <code>&gt;=</code>, and <code>&lt;=</code> to ask whether values are equal, different, larger, smaller, or on a boundary.",
    starterCode: `score = 10
target = 12

print(score == target)
print(score != target)
print(score > 7)
print(score < 5)
print(score >= 10)
print(score <= 9)`,
    expectedOutput: `False
True
True
False
True
False`,
    lineByLine: [
      '<code>score == target</code> asks whether 10 and 12 are equal. They are not, so the answer is False.',
      '<code>score != target</code> asks whether the values are different. They are, so the answer is True.',
      '<code>score &gt; 7</code> asks whether 10 is greater than 7.',
      '<code>score &lt; 5</code> asks whether 10 is less than 5.',
      '<code>score &gt;= 10</code> accepts a value that is greater than or equal to 10.',
      '<code>score &lt;= 9</code> asks whether 10 is smaller than or equal to 9.',
      '<code>=</code> gives a variable a value; <code>==</code> asks whether two values are equal.'
    ],
    outputExplanation: "Each line is the answer to a different question about score. The answers change because each operator asks something different.",
    changeIt: "Change <code>score</code> from 10 to 12 and predict all six answers before running again.<br><br>Next, try <code>temperature = 20</code>, then compare <code>temperature &gt; 20</code> and <code>temperature &gt;= 20</code>.<br><br>Finally, compare <code>\"Amina\" == \"amina\"</code>. Python notices the capital letter, so the answer is False.",
    challenge: "Build a Game Checkpoint report. Use comparisons inside f-strings to show whether the score target was reached, whether the score is perfect, whether lives remain, and whether lives are at their maximum.",
    hint: "Place a comparison inside each pair of f-string braces, such as <code>{score &gt;= required_score}</code>.",
    solution: `score = 18
required_score = 15
lives = 2
maximum_lives = 3

print(f"Reached score: {score >= required_score}")
print(f"Perfect score: {score == 20}")
print(f"Lives remaining: {lives > 0}")
print(f"Maximum lives: {lives == maximum_lives}")`,
    practiceCoach: {
      knowledgeBoundary: {
        current: ["==", "!=", ">", "<", ">=", "<=", "comparison results", "= versus ==", "number comparisons", "string equality", "storing comparison results"],
        previous: ["print()", "variables", "strings", "numbers", "f-strings", "True", "False"],
        prohibited: ["and", "or", "not", "if statements", "input()", "type conversion", "chained comparisons", "conditions", "loops", "collections", "functions"]
      },
      activities: [
        { id: "equal-score", stage: "Easy Start · Ask About Equality", title: "Check the Score", mission: "Change the final line so Python answers whether score equals 10.", starterCode: `score = 10

print(score)`, hint: "Use print(score == 10). Two equals signs ask a question.", success: "You asked an equality question and received True.", check: { mustChange: true, expectedOutput: ["True"] } },
        { id: "different-city", stage: "Easy Start · Ask About Difference", title: "Find What Is Different", mission: "Display whether Cork is different from Dublin.", starterCode: `city = "Cork"

print(city)`, hint: "Use city != \"Dublin\".", success: "You used != to ask whether two strings differ.", check: { mustChange: true, expectedOutput: ["True"] } },
        { id: "higher-target", stage: "Growing · Compare Size", title: "Higher Than the Target", mission: "Display whether 14 points are greater than the target of 10.", starterCode: `points = 14
target = 10

print(points)`, hint: "Use print(points > target).", success: "You correctly compared two number variables.", check: { mustChange: true, expectedOutput: ["True"] } },
        { id: "below-limit", stage: "Growing · Stay Below a Limit", title: "Below the Limit", mission: "Display whether temperature is less than the limit.", starterCode: `temperature = 18
limit = 20

print(temperature)`, hint: "Use temperature < limit.", success: "You used < to check a lower value.", check: { mustChange: true, expectedOutput: ["True"] } },
        { id: "equality-counts", stage: "Growing · Include the Boundary", title: "Equality Counts Too", mission: "Make Python answer whether age is at least 18.", starterCode: `age = 18

print(age > 18)`, hint: "At least means greater than or equal to: >=.", success: "You included equality at the exact boundary.", check: { mustChange: true, expectedOutput: ["True"] } },
        { id: "maximum", stage: "Growing · Check a Maximum", title: "Stay Within the Maximum", mission: "Display whether 5 items are no more than the maximum of 5.", starterCode: `items = 5
maximum = 5

print(items < maximum)`, hint: "No more than means less than or equal to: <=.", success: "You used <= to include the maximum itself.", check: { mustChange: true, expectedOutput: ["True"] } },
        { id: "repair-equals", stage: "Ready for a Challenge · Repair the Question", title: "Repair = and ==", mission: "Repair the final line so it asks whether level equals 3 and displays True.", starterCode: `level = 3

print(level = 3)`, hint: "One equals sign assigns. Use two equals signs to compare.", success: "You repaired the important difference between assignment and comparison.", check: { mustChange: true, expectedOutput: ["True"] } }
      ]
    },
    freshPracticeGenerator: {
      templates: [
        { id: "fresh-equal", skill: "Equality", title: "A Fresh Equality Question", mission: "Ask whether the stored {{label}} equals itself.", starterCode: `value = {{value}}

print(value)`, hint: "Use print(value == value).", solution: `value = {{value}}

print(value == value)`, success: "You completed a fresh equality comparison.", check: { mustChange: true, expectedOutput: ["True"] }, values: { label: ["score", "level", "price", "age", "temperature", "total"], value: [3, 5, 8, 10, 12, 20, 25, 50] } },
        { id: "fresh-different", skill: "Difference", title: "A Fresh Difference Question", mission: "Ask whether the stored number is different from zero.", starterCode: `number = {{value}}

print(number)`, hint: "Use number != 0.", solution: `number = {{value}}

print(number != 0)`, success: "You completed a fresh not-equal comparison.", check: { mustChange: true, expectedOutput: ["True"] }, values: { value: [1, 2, 4, 7, 10, 15, 30, 100] } },
        { id: "fresh-greater", skill: "Greater Than", title: "A Fresh Greater-Than Check", mission: "Ask whether {{label}} is greater than zero.", starterCode: `number = {{value}}

print(number)`, hint: "Use number > 0.", solution: `number = {{value}}

print(number > 0)`, success: "You proved a fresh positive number is greater than zero.", check: { mustChange: true, expectedOutput: ["True"] }, values: { label: ["the score", "the quantity", "the level", "the total", "the distance"], value: [1, 3, 6, 9, 12, 18, 25] } },
        { id: "fresh-less", skill: "Less Than", title: "A Fresh Less-Than Check", mission: "Ask whether the stored value is less than 100.", starterCode: `value = {{value}}

print(value)`, hint: "Use value < 100.", solution: `value = {{value}}

print(value < 100)`, success: "You completed a fresh less-than comparison.", check: { mustChange: true, expectedOutput: ["True"] }, values: { value: [2, 8, 15, 24, 37, 50, 75, 99] } },
        { id: "fresh-at-least", skill: "Greater Than or Equal", title: "A Fresh At-Least Check", mission: "Ask whether the value is at least {{boundary}}.", starterCode: `value = {{boundary}}

print(value > {{boundary}})`, hint: "At least includes equality. Use >=.", solution: `value = {{boundary}}

print(value >= {{boundary}})`, success: "You included a fresh equality boundary.", check: { mustChange: true, expectedOutput: ["True"] }, values: { boundary: [5, 10, 12, 18, 20, 25, 50] } },
        { id: "fresh-at-most", skill: "Less Than or Equal", title: "A Fresh At-Most Check", mission: "Ask whether the value is at most {{boundary}}.", starterCode: `value = {{boundary}}

print(value < {{boundary}})`, hint: "At most includes equality. Use <=.", solution: `value = {{boundary}}

print(value <= {{boundary}})`, success: "You included a fresh maximum boundary.", check: { mustChange: true, expectedOutput: ["True"] }, values: { boundary: [3, 5, 8, 10, 15, 20, 40] } },
        { id: "fresh-text", skill: "String Equality", title: "A Fresh Text Match", mission: "Ask whether the two pieces of text match exactly.", starterCode: `first = "{{word}}"
second = "{{word}}"

print(first)`, hint: "Use print(first == second).", solution: `first = "{{word}}"
second = "{{word}}"

print(first == second)`, success: "You compared fresh text exactly.", check: { mustChange: true, expectedOutput: ["True"] }, values: { word: ["Python", "Amina", "Dublin", "Ready", "Level 3", "Green Valley", "Practice", "Complete"] } },
        { id: "fresh-store", skill: "Store a Comparison", title: "Store a Fresh Answer", mission: "Store whether the value is at least 10, then display the Boolean answer.", starterCode: `value = {{value}}

print(value >= 10)`, hint: "Create reached_target = value >= 10, then print reached_target.", solution: `value = {{value}}

reached_target = value >= 10
print(reached_target)`, success: "You stored a fresh comparison result in a Boolean variable.", check: { mustChange: true, expectedOutput: ["True"] }, values: { value: [10, 11, 12, 15, 20, 25, 50] } }
      ]
    },
    challengeGenerator: {
      activities: [
        { id: "checkpoint", title: "The Game Checkpoint", mission: "Display four labelled comparison answers about score and lives.", starterCode: `score = 18
required_score = 15
lives = 2
maximum_lives = 3

print(score)
print(lives)`, hint: "Use >= for the target and > 0 for remaining lives.", solution: `score = 18
required_score = 15
lives = 2
maximum_lives = 3

print(f"Reached score: {score >= required_score}")
print(f"Perfect score: {score == 20}")
print(f"Lives remaining: {lives > 0}")
print(f"Maximum lives: {lives == maximum_lives}")` },
        { id: "budget", title: "Shop Budget Check", mission: "Compare a price with a budget and display three useful Boolean answers.", starterCode: `price = 18
budget = 20

print(price)
print(budget)`, hint: "Ask whether price <= budget, price == budget, and price > budget.", solution: `price = 18
budget = 20

print(f"Within budget: {price <= budget}")
print(f"Uses full budget: {price == budget}")
print(f"Over budget: {price > budget}")` },
        { id: "height", title: "Theme Park Height Check", mission: "Show whether the rider meets, exceeds, or exactly matches the minimum height.", starterCode: `height = 130
minimum_height = 120

print(height)`, hint: "Use >=, >, and == in three labelled f-strings.", solution: `height = 130
minimum_height = 120

print(f"Can ride: {height >= minimum_height}")
print(f"Above minimum: {height > minimum_height}")
print(f"Exactly minimum: {height == minimum_height}")` },
        { id: "temperature", title: "Temperature Monitor", mission: "Compare the current temperature with the target and display three answers.", starterCode: `temperature = 18
target = 20

print(temperature)`, hint: "Ask whether it is below, equal to, or above the target.", solution: `temperature = 18
target = 20

print(f"Below target: {temperature < target}")
print(f"At target: {temperature == target}")
print(f"Above target: {temperature > target}")` },
        { id: "names", title: "Match Two Names", mission: "Show whether two names match exactly and whether they are different.", starterCode: `first_name = "Amina"
second_name = "amina"

print(first_name)
print(second_name)`, hint: "Use == for an exact match and != for difference.", solution: `first_name = "Amina"
second_name = "amina"

print(f"Exact match: {first_name == second_name}")
print(f"Different: {first_name != second_name}")` },
        { id: "capacity", title: "Classroom Capacity", mission: "Show whether the class is within, exactly at, or over its capacity.", starterCode: `students = 24
capacity = 25

print(students)`, hint: "Use <=, ==, and > with the capacity.", solution: `students = 24
capacity = 25

print(f"Within capacity: {students <= capacity}")
print(f"Class full: {students == capacity}")
print(f"Over capacity: {students > capacity}")` },
        { id: "repair-report", title: "Repair the Comparison Report", mission: "Repair all three comparison lines so the report runs and answers correctly.", starterCode: `level = 5
target = 5

print(f"Target reached: {level = target}")
print(f"Above target: {level => target}")
print(f"Not target: {level ! target}")`, hint: "Use ==, >=, and !=. Comparison symbols must stay in their correct order.", solution: `level = 5
target = 5

print(f"Target reached: {level == target}")
print(f"At least target: {level >= target}")
print(f"Not target: {level != target}")` }
      ]
    },
    quizGenerator: {
      activities: [
        { id: "quiz-equal", question: "Which operator asks whether two values are equal?", code: "", options: ["=", "==", "!=", ">="], correct: 1, explanation: "Correct — == compares two values for equality." },
        { id: "quiz-assignment", question: "What is the difference between = and ==?", code: "", options: ["There is no difference", "= assigns; == compares", "== assigns; = compares", "Both mean not equal"], correct: 1, explanation: "Correct — one equals sign assigns a value; two ask an equality question." },
        { id: "quiz-different", question: "What is the result of 8 != 5?", code: "", options: ["True", "False", "8", "An error"], correct: 0, explanation: "Correct — 8 and 5 are different." },
        { id: "quiz-greater", question: "What is the result of 10 > 10?", code: "", options: ["True", "False", "10", "An error"], correct: 1, explanation: "Correct — a number is equal to itself, not greater than itself." },
        { id: "quiz-boundary", question: "What is the result of 10 >= 10?", code: "", options: ["True", "False", "20", "An error"], correct: 0, explanation: "Correct — >= includes equality." },
        { id: "quiz-less", question: "What is the result of 3 <= 2?", code: "", options: ["True", "False", "1", "An error"], correct: 1, explanation: "Correct — 3 is neither less than nor equal to 2." },
        { id: "quiz-case", question: "What will this comparison display?", code: `print("Amina" == "amina")`, options: ["True", "False", "Amina", "An error"], correct: 1, explanation: "Correct — Python notices the different capitalisation." },
        { id: "quiz-result", question: "What kind of value does a comparison produce?", code: "", options: ["Only a string", "A Boolean", "Only a float", "A comment"], correct: 1, explanation: "Correct — every comparison produces True or False." },
        { id: "quiz-two-lines", question: "What will these two comparisons display?", code: `age = 18
print(age > 18)
print(age >= 18)`, options: ["True then True", "False then True", "False then False", "True then False"], correct: 1, explanation: "Correct — 18 is not greater than 18, but it is equal to 18." }
      ]
    },
    quiz: {
      question: "What will these two comparisons display?",
      code: `score = 10

print(score == 10)
print(score != 10)`,
      options: ["True then False", "False then True", "True then True", "An error"],
      correct: 0,
      explanation: "Correct — score equals 10, so == is True and != is False."
    }
  },
  15: {
    title: "Logical Operators — Combining True and False",
    stage: "Input & Decisions",
    level: "Beginner",
    time: "25 minutes",
    tags: ["and or not", "Combined facts"],
    intro: "A program often knows more than one fact. Logical operators let those True and False answers work together in one clear result.",
    explanation: "The logical operators <code>and</code>, <code>or</code>, and <code>not</code> combine or reverse Boolean values. Python writes them as simple lowercase words.",
    concept: "<code>and</code> needs both sides to be True, <code>or</code> needs at least one True side, and <code>not</code> reverses a Boolean answer.",
    starterCode: `age = 20
has_ticket = True
is_member = False
door_locked = False

old_enough = age >= 18

print(old_enough and has_ticket)
print(has_ticket or is_member)
print(not door_locked)`,
    expectedOutput: `True
True
True`,
    lineByLine: [
      '<code>age &gt;= 18</code> creates the Boolean answer True and stores it as <code>old_enough</code>.',
      '<code>old_enough and has_ticket</code> is True because both facts are True.',
      '<code>has_ticket or is_member</code> is True because at least one of the two facts is True.',
      '<code>not door_locked</code> reverses False, producing True.',
      '<code>not</code> does not overwrite the stored variable; it reverses the answer in that expression.',
      'Python logical operators are the lowercase words <code>and</code>, <code>or</code>, and <code>not</code>.'
    ],
    outputExplanation: "Each line reaches True for a different reason: both facts pass, one fact passes, and one False fact is reversed.",
    changeIt: "Change <code>has_ticket</code> to <code>False</code> and predict the first two outputs.<br><br>Then change <code>is_member</code> to <code>True</code>. Notice that <code>or</code> now succeeds even without a ticket.<br><br>Finally, change <code>door_locked</code> to <code>True</code> and watch <code>not door_locked</code> become False.",
    challenge: "Build a Learning Gate report using all three logical operators. Combine completion facts, accept either a quiz or bonus pass, and reverse the locked state.",
    hint: "Create three readable result variables: one with <code>and</code>, one with <code>or</code>, and one with <code>not</code>.",
    solution: `lesson_complete = True
practice_complete = True
quiz_complete = False
bonus_pass = True
door_locked = False

core_work_complete = lesson_complete and practice_complete
can_finish_today = quiz_complete or bonus_pass
door_open = not door_locked

print(f"Core work complete: {core_work_complete}")
print(f"Can finish today: {can_finish_today}")
print(f"Door open: {door_open}")`,
    practiceCoach: {
      knowledgeBoundary: {
        current: ["and", "or", "not", "combining Boolean values", "combining comparisons", "reversing a Boolean", "storing combined results", "readable logical expressions"],
        previous: ["print()", "variables", "strings", "numbers", "f-strings", "Booleans", "comparison operators"],
        prohibited: ["if statements", "input()", "type conversion", "truthiness", "short-circuit evaluation", "bitwise operators", "loops", "collections", "functions"]
      },
      activities: [
        { id: "both-complete", stage: "Easy Start · Both Must Pass", title: "Both Tasks Complete", mission: "Use and so the program displays True only when both tasks are complete.", starterCode: `lesson_complete = True
quiz_complete = True

print(lesson_complete)`, hint: "Use print(lesson_complete and quiz_complete).", success: "You used and to require both facts.", check: { mustChange: true, expectedOutput: ["True"] } },
        { id: "either-entry", stage: "Easy Start · One Is Enough", title: "One Entry Method Is Enough", mission: "Use or to show that entry is possible with either a ticket or membership.", starterCode: `has_ticket = False
is_member = True

print(has_ticket)`, hint: "Use print(has_ticket or is_member).", success: "You used or when either fact was enough.", check: { mustChange: true, expectedOutput: ["True"] } },
        { id: "reverse-lock", stage: "Growing · Reverse a Fact", title: "Reverse the Lock", mission: "Display True to show that the unlocked door is open.", starterCode: `door_locked = False

print(door_locked)`, hint: "Use print(not door_locked).", success: "You reversed False with not.", check: { mustChange: true, expectedOutput: ["True"] } },
        { id: "two-targets", stage: "Growing · Combine Comparisons", title: "Meet Two Targets", mission: "Display whether age is at least 18 and score is at least 60.", starterCode: `age = 20
score = 75

print(age >= 18)`, hint: "Join age >= 18 and score >= 60 with and.", success: "You combined two comparison results with and.", check: { mustChange: true, expectedOutput: ["True"] } },
        { id: "either-score", stage: "Growing · Accept Either Result", title: "Accept Either Score", mission: "Display True when the main score or bonus score reaches 10.", starterCode: `main_score = 7
bonus_score = 12

print(main_score >= 10)`, hint: "Join the two >= comparisons with or.", success: "You combined two comparisons with or.", check: { mustChange: true, expectedOutput: ["True"] } },
        { id: "store-result", stage: "Growing · Name the Answer", title: "Store the Combined Answer", mission: "Create can_enter from both facts, then display it.", starterCode: `old_enough = True
has_ticket = True

print(old_enough and has_ticket)`, hint: "Write can_enter = old_enough and has_ticket, then print(can_enter).", success: "You gave a useful name to a combined Boolean answer.", check: { mustChange: true, expectedOutput: ["True"] } },
        { id: "repair-logic", stage: "Ready for a Challenge · Repair Python Words", title: "Repair the Logical Expression", mission: "Repair the final line so Python displays True.", starterCode: `lesson_ready = True
quiz_ready = True

print(lesson_ready && quiz_ready)`, hint: "Python uses the lowercase word and, not &&.", success: "You repaired the logical expression using Python's readable word.", check: { mustChange: true, expectedOutput: ["True"] } }
      ]
    },
    freshPracticeGenerator: {
      templates: [
        { id: "fresh-and", skill: "Both Facts", title: "A Fresh Both-Facts Check", mission: "Use and to combine the two completed {{context}} facts.", starterCode: `# {{context}} facts
first_complete = True
second_complete = True

print(first_complete)`, hint: "Use first_complete and second_complete.", solution: `# {{context}} facts
first_complete = True
second_complete = True

print(first_complete and second_complete)`, success: "You required both fresh facts to be True.", check: { mustChange: true, expectedOutput: ["True"] }, values: { context: ["lesson", "game", "account", "order", "project", "profile", "journey", "practice"] } },
        { id: "fresh-or", skill: "Either Fact", title: "A Fresh Either-Fact Check", mission: "Use or because either {{context}} method is enough.", starterCode: `# {{context}} options
first_option = False
second_option = True

print(first_option)`, hint: "Use first_option or second_option.", solution: `# {{context}} options
first_option = False
second_option = True

print(first_option or second_option)`, success: "You accepted either fresh True fact.", check: { mustChange: true, expectedOutput: ["True"] }, values: { context: ["entry", "payment", "login", "travel", "delivery", "access", "contact", "verification"] } },
        { id: "fresh-not", skill: "Reverse a Fact", title: "A Fresh Reversal", mission: "Reverse the stored {{labelLower}} state so the output is True.", starterCode: `# {{labelLower}} state
status = False

print(status)`, hint: "Use print(not status).", solution: `# {{labelLower}} state
status = False

print(not status)`, success: "You reversed a fresh False fact.", check: { mustChange: true, expectedOutput: ["True"] }, values: { labelLower: ["locked", "blocked", "closed", "hidden", "paused", "muted", "empty", "missing"] } },
        { id: "fresh-comparison-and", skill: "Two Comparison Targets", title: "A Fresh Double Target", mission: "Use and to check that the value reaches both positive targets.", starterCode: `value = {{value}}

print(value >= 5)`, hint: "Combine value >= 5 and value >= 10 with and.", solution: `value = {{value}}

print(value >= 5 and value >= 10)`, success: "You combined two fresh comparison answers.", check: { mustChange: true, expectedOutput: ["True"] }, values: { value: [10, 11, 12, 15, 18, 20, 25, 50] } },
        { id: "fresh-comparison-or", skill: "Either Comparison", title: "A Fresh Outside Check", mission: "Use or to ask whether the value is below 10 or above 30.", starterCode: `value = {{value}}

print(value < 10)`, hint: "Join value < 10 and value > 30 with or.", solution: `value = {{value}}

print(value < 10 or value > 30)`, success: "You allowed either fresh comparison to succeed.", check: { mustChange: true, expectedOutput: ["True"] }, values: { value: [1, 3, 5, 8, 31, 35, 40, 50] } },
        { id: "fresh-store", skill: "Store Combined Logic", title: "Store a Fresh Logical Answer", mission: "Store both ready facts as can_start, then display the named answer.", starterCode: `# {{context}} setup
first_ready = True
second_ready = True

print(first_ready and second_ready)`, hint: "Create can_start = first_ready and second_ready.", solution: `# {{context}} setup
first_ready = True
second_ready = True

can_start = first_ready and second_ready
print(can_start)`, success: "You stored a fresh logical result clearly.", check: { mustChange: true, expectedOutput: ["True"] }, values: { context: ["lesson", "game", "account", "order", "travel", "profile", "security", "practice"] } },
        { id: "fresh-report", skill: "Logical Status Message", title: "A Fresh Logic Report", mission: "Use and inside the f-string to complete the {{label}} report.", starterCode: `first_ready = True
second_ready = True

print(f"{{label}}: {first_ready}")`, hint: "Place first_ready and second_ready inside the braces.", solution: `first_ready = True
second_ready = True

print(f"{{label}}: {first_ready and second_ready}")`, success: "You placed a fresh logical answer inside a readable message.", check: { mustChange: true, expectedOutput: ["{{label}}: True"] }, values: { label: ["Ready to begin", "Work complete", "Access granted", "Checks passed", "Setup ready", "Order ready", "Profile ready", "Journey ready"] } },
        { id: "fresh-repair", skill: "Repair Logical Syntax", title: "Repair Fresh Logical Code", mission: "Replace the non-Python symbol in this {{context}} check.", starterCode: `first_fact = True
second_fact = True

# {{context}} check
print(first_fact && second_fact)`, hint: "Python uses and instead of &&.", solution: `first_fact = True
second_fact = True

# {{context}} check
print(first_fact and second_fact)`, success: "You repaired fresh logical syntax.", check: { mustChange: true, expectedOutput: ["True"] }, values: { context: ["lesson", "game", "account", "order", "travel", "profile", "security", "practice"] } }
      ]
    },
    challengeGenerator: {
      activities: [
        { id: "learning-gate", title: "The Learning Gate", mission: "Use and, or, and not to build a three-line learning report.", starterCode: `lesson_complete = True
practice_complete = True
quiz_complete = False
bonus_pass = True
door_locked = False

print(lesson_complete)`, hint: "Build three named results before printing the report.", solution: `lesson_complete = True
practice_complete = True
quiz_complete = False
bonus_pass = True
door_locked = False

core_work_complete = lesson_complete and practice_complete
can_finish_today = quiz_complete or bonus_pass
door_open = not door_locked

print(f"Core work complete: {core_work_complete}")
print(f"Can finish today: {can_finish_today}")
print(f"Door open: {door_open}")` },
        { id: "game-access", title: "Game Access", mission: "Combine player facts to report entry, bonus access, and whether the gate is open.", starterCode: `old_enough = True
has_ticket = True
is_member = False
has_bonus_pass = True
gate_locked = False

print(old_enough)`, hint: "Use and for entry, or for bonus access, and not for the gate.", solution: `old_enough = True
has_ticket = True
is_member = False
has_bonus_pass = True
gate_locked = False

can_enter = old_enough and has_ticket
bonus_access = is_member or has_bonus_pass
gate_open = not gate_locked

print(f"Can enter: {can_enter}")
print(f"Bonus access: {bonus_access}")
print(f"Gate open: {gate_open}")` },
        { id: "account-security", title: "Account Security", mission: "Build a readable report for login checks and account blocking.", starterCode: `email_verified = True
password_correct = True
recovery_code = False
trusted_device = True
account_blocked = False

print(email_verified)`, hint: "Combine verification with and, alternatives with or, and reverse blocked with not.", solution: `email_verified = True
password_correct = True
recovery_code = False
trusted_device = True
account_blocked = False

login_checks_pass = email_verified and password_correct
backup_access = recovery_code or trusted_device
account_available = not account_blocked

print(f"Login checks pass: {login_checks_pass}")
print(f"Backup access: {backup_access}")
print(f"Account available: {account_available}")` },
        { id: "discount", title: "Shop Discount Eligibility", mission: "Use comparisons and logical operators to calculate three discount facts.", starterCode: `total = 60
minimum_total = 50
is_member = False
has_coupon = True
coupon_expired = False

print(total)`, hint: "Use total >= minimum_total, then and, or, and not in readable result variables.", solution: `total = 60
minimum_total = 50
is_member = False
has_coupon = True
coupon_expired = False

minimum_reached = total >= minimum_total
member_discount = minimum_reached and is_member
some_discount = is_member or has_coupon
coupon_valid = not coupon_expired

print(f"Member discount: {member_discount}")
print(f"Some discount available: {some_discount}")
print(f"Coupon valid: {coupon_valid}")` },
        { id: "weather", title: "Weather Warning", mission: "Report uncomfortable weather, safe equipment, and whether the road is open.", starterCode: `temperature = 35
very_cold = temperature < 5
very_hot = temperature > 30
has_hat = True
has_water = True
road_closed = False

print(temperature)`, hint: "Join temperature facts with or, equipment with and, and reverse road_closed.", solution: `temperature = 35
very_cold = temperature < 5
very_hot = temperature > 30
has_hat = True
has_water = True
road_closed = False

weather_warning = very_cold or very_hot
equipment_ready = has_hat and has_water
road_open = not road_closed

print(f"Weather warning: {weather_warning}")
print(f"Equipment ready: {equipment_ready}")
print(f"Road open: {road_open}")` },
        { id: "event-entry", title: "Event Entry", mission: "Build an event entry report from age, ticket, guest-list, and closure facts.", starterCode: `age = 20
has_ticket = False
on_guest_list = True
id_ready = True
event_closed = False

print(age)`, hint: "First create old_enough, then combine the remaining Boolean facts.", solution: `age = 20
has_ticket = False
on_guest_list = True
id_ready = True
event_closed = False

old_enough = age >= 18
entry_method = has_ticket or on_guest_list
checks_pass = old_enough and id_ready
event_open = not event_closed

print(f"Entry method: {entry_method}")
print(f"Checks pass: {checks_pass}")
print(f"Event open: {event_open}")` },
        { id: "repair-report", title: "Repair the Logic Report", mission: "Replace three non-Python operators so the report runs correctly.", starterCode: `lesson_ready = True
quiz_ready = True
bonus_pass = False
door_locked = False

print(lesson_ready && quiz_ready)
print(quiz_ready || bonus_pass)
print(!door_locked)`, hint: "Python uses the lowercase words and, or, and not.", solution: `lesson_ready = True
quiz_ready = True
bonus_pass = False
door_locked = False

print(lesson_ready and quiz_ready)
print(quiz_ready or bonus_pass)
print(not door_locked)` }
      ]
    },
    quizGenerator: {
      activities: [
        { id: "quiz-and-true", question: "What is the result of True and True?", code: "", options: ["True", "False", "An error", "None"], correct: 0, explanation: "Correct — and is True only when both sides are True." },
        { id: "quiz-and-false", question: "What is the result of True and False?", code: "", options: ["True", "False", "True False", "An error"], correct: 1, explanation: "Correct — one False side makes the and result False." },
        { id: "quiz-or-true", question: "What is the result of False or True?", code: "", options: ["True", "False", "None", "An error"], correct: 0, explanation: "Correct — or needs only one True side." },
        { id: "quiz-or-false", question: "What is the result of False or False?", code: "", options: ["True", "False", "0", "An error"], correct: 1, explanation: "Correct — neither side is True." },
        { id: "quiz-not-true", question: "What is the result of not True?", code: "", options: ["True", "False", "not", "An error"], correct: 1, explanation: "Correct — not reverses True into False." },
        { id: "quiz-not-false", question: "What is the result of not False?", code: "", options: ["True", "False", "None", "An error"], correct: 0, explanation: "Correct — not reverses False into True." },
        { id: "quiz-comparison-and", question: "What will this program display?", code: `age = 20
has_ticket = False
print(age >= 18 and has_ticket)`, options: ["True", "False", "20", "An error"], correct: 1, explanation: "Correct — the age comparison is True, but and also needs has_ticket to be True." },
        { id: "quiz-comparison-or", question: "What will this program display?", code: `score = 7
bonus = 12
print(score >= 10 or bonus >= 10)`, options: ["True", "False", "19", "An error"], correct: 0, explanation: "Correct — the bonus comparison is True, which is enough for or." },
        { id: "quiz-python-words", question: "Which line uses Python's logical syntax?", code: "", options: ["ready && complete", "ready AND complete", "ready and complete", "ready & complete"], correct: 2, explanation: "Correct — Python uses the lowercase word and." }
      ]
    },
    quiz: {
      question: "What will this program display?",
      code: `old_enough = True
has_ticket = False

print(old_enough and has_ticket)
print(old_enough or has_ticket)`,
      options: ["False then True", "True then False", "True then True", "False then False"],
      correct: 0,
      explanation: "Correct — and needs both facts, while or needs only one True fact."
    }
  },
  16: {
    title: "Getting User Input — Letting the Program Ask",
    stage: "Input & Decisions",
    level: "Beginner",
    time: "25 minutes",
    tags: ["input()", "Program conversations"],
    usesInput: true,
    intro: "Until now, every value was written before the program ran. Today your program will pause, ask a question, and remember the learner's answer.",
    explanation: "The <code>input()</code> function asks the person running a program for an answer. Python pauses at that line, waits for text, and then continues. Store the answer in a variable so the program can use it later.",
    concept: "<code>input()</code> lets a running program receive text from a person. A clear prompt explains what answer the program needs.",
    starterCode: `name = input("What is your name? ")
city = input("Which city are you in? ")

print(f"Hello, {name}!")
print(f"You are learning Python from {city}.")`,
    starterInput: `Amina
Longford`,
    expectedOutput: `What is your name? Amina
Which city are you in? Longford
Hello, Amina!
You are learning Python from Longford.`,
    lineByLine: [
      '<code>input("What is your name? ")</code> displays a helpful prompt and waits for the first answer.',
      'The first answer is stored in the variable <code>name</code>. Python can now reuse that text.',
      'The second <code>input()</code> waits for another answer and stores it in <code>city</code>.',
      'The interactive console asks each question in order. Type an answer and press Enter before Python moves to the next <code>input()</code> instruction.',
      'The two f-strings place the remembered answers inside friendly output messages.',
      '<code>input()</code> gives Python text. Lesson 17 will teach how to convert number-shaped text before calculating with it.'
    ],
    outputExplanation: "The interactive prompts and your answers make a short conversation. Python remembers the first answer as name and the second as city, then the f-strings reuse both values.",
    changeIt: "First run the starter conversation. Answer the name prompt, press Enter, then answer the city prompt.<br><br>Run it again with different answers and predict the two final messages before they appear.<br><br>Finally, improve one prompt—for example, change <code>What is your name?</code> to <code>What should I call you?</code>—and notice that your new question appears in the console.",
    challenge: "Build a Tiny Introduction Card. Ask for a name, a favourite activity, and a city. Store all three answers, then display a friendly three-line introduction.",
    hint: "Write three <code>input()</code> lines first. Give every answer a clear variable name, then reuse those variables in f-strings.",
    solution: `name = input("What is your name? ")
activity = input("What do you enjoy? ")
city = input("Where do you live? ")

print(f"Meet {name}.")
print(f"{name} enjoys {activity}.")
print(f"{name} lives in {city}.")`,
    practiceCoach: {
      knowledgeBoundary: {
        current: ["input()", "prompts", "storing answers", "multiple inputs", "input order", "reusing answers in f-strings"],
        previous: ["print()", "comments", "variables", "strings", "f-strings", "Booleans", "comparisons", "logical operators"],
        prohibited: ["type conversion", "calculating with input", "if statements", "loops", "collections", "functions", "validation", "passwords or private information"]
      },
      activities: [
        { id: "ask-name", stage: "Easy Start · One Answer", title: "Ask for a Name", mission: "Run the practice, answer the name prompt yourself, then check the greeting.", starterCode: `name = input("What is your name? ")
print(f"Hello, {name}!")`, starterInput: "Learner", hint: "Press Run Python, type a name in the console, and press Enter.", success: "You supplied and reused your own answer.", check: { mustChange: true, minimumInputLines: 1, inputNotValues: ["Learner"] } },
        { id: "ask-city", stage: "Easy Start · Clear Prompt", title: "Ask for a City", mission: "Run the practice and answer its travel question with a city of your choice.", starterCode: `city = input("Which city would you visit? ")
print(f"Next stop: {city}")`, starterInput: "Dublin", hint: "Type your answer when the console asks the question.", success: "Your program used a fresh city answer.", check: { mustChange: true, minimumInputLines: 1, inputNotValues: ["Dublin"] } },
        { id: "two-answers", stage: "Growing · Input Order", title: "Two Answers, One Message", mission: "Replace both answers, keeping the name first and the colour second.", starterCode: `name = input("Your name: ")
colour = input("Favourite colour: ")
print(f"{name} likes {colour}.")`, starterInput: `Amina
green`, hint: "Answer each console prompt in the order Python asks it.", success: "You matched two answers to two prompts.", check: { mustChange: true, minimumInputLines: 2, inputNotValues: ["Amina", "green"] } },
        { id: "reuse-answer", stage: "Growing · Reuse Text", title: "Reuse One Answer", mission: "Give the console a word and watch Python reuse your answer twice.", starterCode: `word = input("Choose a word: ")
print(f"You chose {word}.")
print(f"I remembered {word}.")`, starterInput: "Python", hint: "Run the code and type one word when the prompt appears.", success: "You saw one input value reused safely.", check: { mustChange: true, minimumInputLines: 1, inputNotValues: ["Python"] } },
        { id: "better-prompt", stage: "Growing · Help the User", title: "Make the Prompt Clear", mission: "Change the vague prompt into a clear question, then use your own answer.", starterCode: `food = input("Answer: ")
print(f"You chose {food}.")`, starterInput: "pizza", hint: "Inside input(), ask what favourite food the person has.", success: "You made the conversation easier to understand.", check: { mustChange: true, minimumInputLines: 1, inputNotValues: ["pizza"] } },
        { id: "profile", stage: "Growing · Tiny Profile", title: "Build a Two-Line Profile", mission: "Supply a new name and hobby, then run the profile.", starterCode: `name = input("Name: ")
hobby = input("Hobby: ")
print(f"NAME: {name}")
print(f"HOBBY: {hobby}")`, starterInput: `Sara
reading`, hint: "Answer the name prompt first and the hobby prompt second.", success: "You built a personal profile from two answers.", check: { mustChange: true, minimumInputLines: 2, inputNotValues: ["Sara", "reading"] } },
        { id: "repair-variable", stage: "Ready for a Challenge · Repair", title: "Remember the Answer", mission: "Store the answer as animal so the final f-string can use it, then choose a new animal.", starterCode: `input("Favourite animal: ")
print(f"You chose {animal}.")`, starterInput: "cat", hint: "Begin the first line with animal =", success: "You repaired the missing variable and remembered the answer.", check: { mustChange: true, minimumInputLines: 1, inputNotValues: ["cat"] } }
      ]
    },
    freshPracticeGenerator: {
      templates: [
        { id: "fresh-one", skill: "One Answer", title: "A Fresh Question", mission: "Run the code and answer with a {{thing}} of your choice.", starterCode: `answer = input("Choose a {{thing}}: ")
print(f"Your {{thing}} is {answer}.")`, starterInput: "{{starter}}", hint: "Type your choice when the console prompt appears.", solution: `answer = input("Choose a {{thing}}: ")
print(f"Your {{thing}} is {answer}.")`, success: "You completed a fresh one-answer conversation.", check: { mustChange: true, minimumInputLines: 1, inputNotValues: ["{{starter}}"] }, values: { thing: ["colour", "food", "animal", "city", "book", "game", "song", "place"], starter: ["Your answer"] } },
        { id: "fresh-pair", skill: "Two Answers", title: "A Fresh Pair", mission: "Answer both fresh prompts in the order Python asks them.", starterCode: `first = input("First {{label}}: ")
second = input("Second {{label}}: ")
print(f"You chose {first} and {second}.")`, starterInput: `{{first}}
{{second}}`, hint: "Finish the first prompt before the second prompt appears.", solution: `first = input("First {{label}}: ")
second = input("Second {{label}}: ")
print(f"You chose {first} and {second}.")`, success: "You supplied a fresh pair in the correct order.", check: { mustChange: true, minimumInputLines: 2, inputNotValues: ["{{first}}", "{{second}}"] }, values: { label: ["city", "food", "colour", "animal", "activity", "place"], first: ["First answer"], second: ["Second answer"] } },
        { id: "fresh-greeting", skill: "Personal Message", title: "A Fresh Welcome", mission: "Give a new name and place so Python creates a personal welcome.", starterCode: `name = input("Name: ")
place = input("Place: ")
print(f"Welcome {name} to {place}!")`, starterInput: `{{name}}
{{place}}`, hint: "Answer the name prompt first, then the place prompt.", solution: `name = input("Name: ")
place = input("Place: ")
print(f"Welcome {name} to {place}!")`, success: "You created a fresh personal welcome.", check: { mustChange: true, minimumInputLines: 2, inputNotValues: ["{{name}}", "{{place}}"] }, values: { name: ["Amina", "Sara", "Ali", "Omar", "Noor", "Zara"], place: ["Python Lab", "Code Garden", "Learning Room", "Idea Studio", "Practice Park", "Story Space"] } },
        { id: "fresh-reuse", skill: "Reuse an Answer", title: "Remember a Fresh Word", mission: "Replace the word and see Python reuse it in two messages.", starterCode: `word = input("Give me a word: ")
print(f"You said {word}.")
print(f"Python remembered {word}.")`, starterInput: "{{word}}", hint: "Only one console answer is needed.", solution: `word = input("Give me a word: ")
print(f"You said {word}.")
print(f"Python remembered {word}.")`, success: "You reused one fresh answer twice.", check: { mustChange: true, minimumInputLines: 1, inputNotValues: ["{{word}}"] }, values: { word: ["sunshine", "learning", "kindness", "journey", "courage", "practice", "curiosity", "progress"] } }
      ]
    },
    challengeGenerator: {
      activities: [
        { id: "intro-card", title: "Tiny Introduction Card", mission: "Ask for a name, activity, and city, then display a three-line introduction.", starterCode: `name = input("Name: ")
activity = input("Favourite activity: ")
city = input("City: ")

print(name)`, starterInput: `Amina
reading
Longford`, hint: "Reuse all three variables in friendly f-strings.", solution: `name = input("Name: ")
activity = input("Favourite activity: ")
city = input("City: ")

print(f"Meet {name}.")
print(f"{name} enjoys {activity}.")
print(f"{name} lives in {city}.")` },
        { id: "travel-card", title: "Travel Card", mission: "Ask for a traveller and destination, then create two travel messages.", starterCode: `traveller = input("Traveller: ")
destination = input("Destination: ")

print(traveller)`, starterInput: `Ali
Galway`, hint: "Use both answers inside f-strings.", solution: `traveller = input("Traveller: ")
destination = input("Destination: ")

print(f"Traveller: {traveller}")
print(f"Next destination: {destination}")` },
        { id: "story-card", title: "Tiny Story Starter", mission: "Ask for a character and place, then make one story sentence.", starterCode: `character = input("Character: ")
place = input("Place: ")

print(character)`, starterInput: `Mina
the green forest`, hint: "Join both remembered answers in one f-string.", solution: `character = input("Character: ")
place = input("Place: ")

print(f"{character} began a journey through {place}.")` },
        { id: "menu-card", title: "Favourite Meal Card", mission: "Ask for a name, food, and drink, then display a friendly meal card.", starterCode: `name = input("Name: ")
food = input("Food: ")
drink = input("Drink: ")

print(name)`, starterInput: `Noor
rice
tea`, hint: "Use each answer once in the finished card.", solution: `name = input("Name: ")
food = input("Food: ")
drink = input("Drink: ")

print(f"Meal for {name}")
print(f"Food: {food}")
print(f"Drink: {drink}")` },
        { id: "repair-card", title: "Repair the Conversation", mission: "Store both input answers so the final message can use them.", starterCode: `input("Name: ")
input("Favourite colour: ")

print(f"{name} chose {colour}.")`, starterInput: `Sara
violet`, hint: "Add name = and colour = before the matching input() calls.", solution: `name = input("Name: ")
colour = input("Favourite colour: ")

print(f"{name} chose {colour}.")` },
        { id: "order-card", title: "Input Order Detective", mission: "Answer the name prompt first and the city prompt second so the final message makes sense.", starterCode: `name = input("Name: ")
city = input("City: ")

print(f"{name} lives in {city}.")`, starterInput: `Dublin
Omar`, hint: "The first answer must be a name; the second must be a city.", solution: `name = input("Name: ")
city = input("City: ")

print(f"{name} lives in {city}.")`, solutionInput: `Omar
Dublin` },
        { id: "three-prompts", title: "Three Helpful Questions", mission: "Replace the vague prompts with questions that clearly request a name, goal, and place.", starterCode: `name = input("Answer 1: ")
goal = input("Answer 2: ")
place = input("Answer 3: ")

print(f"{name} wants to learn {goal} in {place}.")`, starterInput: `Amina
Python
the library`, hint: "Change only the text inside input() first.", solution: `name = input("What is your name? ")
goal = input("What would you like to learn? ")
place = input("Where are you studying? ")

print(f"{name} wants to learn {goal} in {place}.")` }
      ]
    },
    quizGenerator: {
      activities: [
        { id: "quiz-purpose", question: "What does input() do?", code: "", options: ["Repeats a loop", "Waits for an answer", "Deletes a variable", "Adds two numbers"], correct: 1, explanation: "Correct — input() pauses and waits for text from the person running the program." },
        { id: "quiz-store", question: "Which line stores the person's answer?", code: "", options: [`input("Name: ")`, `name = input("Name: ")`, `print("Name: ")`, `name == input`], correct: 1, explanation: "Correct — = gives the returned answer the useful name name." },
        { id: "quiz-order", question: "When does Python ask the second input() question?", code: "", options: ["Before the first question", "After the first answer is submitted", "After the program ends", "It never asks"], correct: 1, explanation: "Correct — Python follows the input() instructions in order." },
        { id: "quiz-prompt", question: "Which prompt is clearest for a beginner?", code: "", options: ["Answer:", "Type:", "What is your favourite colour? ", "Go:"], correct: 2, explanation: "Correct — a specific question tells the person exactly what to provide." },
        { id: "quiz-output", question: "If the supplied answer is Amina, what final line appears?", code: `name = input("Name: ")
print(f"Hello, {name}!")`, options: ["Hello, name!", "Hello, Amina!", "Name: name", "An error"], correct: 1, explanation: "Correct — the f-string uses the text stored in name." },
        { id: "quiz-return", question: "What kind of value does input() give us in this lesson?", code: "", options: ["Text", "Always an integer", "Always a float", "A comment"], correct: 0, explanation: "Correct — input() returns text. Lesson 17 will teach conversion." },
        { id: "quiz-two-inputs", question: "How many answers will this program ask for?", code: `name = input("Name: ")
city = input("City: ")`, options: ["0", "1", "2", "3"], correct: 2, explanation: "Correct — each input() call needs one answer." },
        { id: "quiz-reuse", question: "Which line displays the answer stored in food?", code: "", options: [`print("food")`, `print(food)`, `input(food)`, `food == print`], correct: 1, explanation: "Correct — without quotation marks, Python looks up the value stored in food." },
        { id: "quiz-boundary", question: "Why should we not calculate with age = input(...) yet?", code: "", options: ["input() gives text and conversion comes next", "Python cannot use numbers", "Variables cannot store answers", "Prompts stop print()"], correct: 0, explanation: "Correct — input() gives text; Lesson 17 teaches how to convert number-shaped text." }
      ]
    },
    quiz: {
      question: "Which line asks a question and remembers the answer?",
      code: "",
      options: [`print("What is your name?")`, `name = input("What is your name? ")`, `name = "What is your name?"`, `input = name`],
      correct: 1,
      explanation: "Correct — input() asks the question, and name = stores the returned text."
    }
  },
  17: {
    title: "Type Conversion — Giving Input the Right Type",
    stage: "Input & Decisions",
    level: "Beginner",
    time: "25 minutes",
    tags: ["int() · float()", "str() · bool()"],
    usesInput: true,
    intro: "A person can type digits into a program, but input() still gives Python text. Today you will turn that text into the kind of value your program needs.",
    explanation: "A value's <strong>type</strong> tells Python what kind of value it is. The text <code>\"25\"</code> and the number <code>25</code> look similar to us, but Python uses them differently. Type conversion creates a value of another type when that conversion makes sense.",
    concept: "<code>input()</code> gives us text. Use <code>int()</code> for whole-number text, <code>float()</code> for decimal-number text, and <code>str()</code> when you need a text version of a value.",
    starterCode: `age_text = input("How old are you? ")
age = int(age_text)

years_to_add = 5
future_age = age + years_to_add

print(f"In 5 years, you will be {future_age}.")`,
    starterInput: "20",
    expectedOutput: `How old are you? 20
In 5 years, you will be 25.`,
    lineByLine: [
      '<code>input()</code> asks the question and gives its answer to Python as text—even when the answer contains only digits.',
      '<code>age_text</code> reminds us that the first remembered value is still text.',
      '<code>int(age_text)</code> converts whole-number text such as <code>"20"</code> into the integer <code>20</code>.',
      '<code>years_to_add = 5</code> stores another integer, using the variable knowledge you already have.',
      '<code>age + years_to_add</code> now performs numerical addition because both values are numbers.',
      'The f-string places the calculated result inside a friendly sentence.'
    ],
    outputExplanation: "The prompt and your answer appear first. Python converts that answer from text to an integer, adds 5, and then displays the future age. Without <code>int()</code>, Python would not treat the answer as a number for this calculation.",
    changeIt: "Run the starter program and enter your own whole-number age.<br><br>Change <code>years_to_add = 5</code> to <code>years_to_add = 10</code>. Predict your future age before you run it again.<br><br>Then try entering a word such as <code>hello</code>. Read the final <code>ValueError</code> line: Python is honestly explaining that the text cannot become a whole number. Restore a valid age and run once more.",
    challenge: "Build a Pocket Money Planner. Ask how much money the learner has and how much one item costs. Convert both answers to decimal numbers, subtract the cost, and display the money remaining.",
    hint: "Keep the input answers in clearly named variables, use <code>float()</code> on both values, then subtract <code>cost</code> from <code>money</code>.",
    solution: `money_text = input("How much money do you have? ")
cost_text = input("How much does one item cost? ")

money = float(money_text)
cost = float(cost_text)
remaining = money - cost

print(f"Money remaining: {remaining}")`,
    practiceCoach: {
      knowledgeBoundary: {
        current: ["value types", "int()", "float()", "str()", "basic bool() behaviour", "converting input before arithmetic", "conversion errors"],
        previous: ["print()", "comments", "variables", "numbers", "arithmetic", "strings", "f-strings", "Booleans", "input()"],
        prohibited: ["if statements", "loops", "collections", "functions", "try and except", "validation", "rounding rules", "passwords or private information"]
      },
      activities: [
        { id: "next-age", stage: "Easy Start · int()", title: "Age Next Year", mission: "Run the program, enter a whole-number age, and check the calculated age for next year.", starterCode: `age = int(input("Age: "))
next_age = age + 1
print(next_age)`, starterInput: "20", hint: "Type digits such as 20 when the console asks. int() will turn that text into a whole number.", success: "You converted text to an integer before adding.", check: { mustChange: true, minimumInputLines: 1 } },
        { id: "notebook-total", stage: "Easy Start · Calculate", title: "Notebook Total", mission: "Enter a whole-number quantity and let Python calculate the total price.", starterCode: `quantity = int(input("How many notebooks? "))
price = 3
total = quantity * price
print(total)`, starterInput: "4", hint: "Enter a whole number. The conversion must happen before multiplication.", success: "You converted a quantity and used it in a calculation.", check: { mustChange: true, minimumInputLines: 1 } },
        { id: "decimal-distance", stage: "Growing · float()", title: "Double the Distance", mission: "Enter a decimal distance and let Python calculate twice that distance.", starterCode: `distance = float(input("Distance in kilometres: "))
double_distance = distance * 2
print(double_distance)`, starterInput: "2.5", hint: "A decimal answer such as 2.5 needs float(), not int().", success: "You converted decimal text with float().", check: { mustChange: true, minimumInputLines: 1 } },
        { id: "price-pair", stage: "Growing · Two Conversions", title: "Two Items Together", mission: "Enter two decimal prices in order and let Python add them.", starterCode: `first_price = float(input("First price: "))
second_price = float(input("Second price: "))
total = first_price + second_price
print(total)`, starterInput: `2.5
1.25`, hint: "Answer both prompts with number-shaped text. Each answer needs its own float() conversion.", success: "You converted two answers before adding them.", check: { mustChange: true, minimumInputLines: 2 } },
        { id: "score-text", stage: "Growing · str()", title: "Make Score Text", mission: "Run the program and see str() create text that can be joined to another string.", starterCode: `score = int(input("Score: "))
score_text = str(score)
print("Your score is " + score_text)`, starterInput: "10", hint: "int() first creates a number; str() then creates its text version for joining.", success: "You used both int() and str() for clear purposes.", check: { mustChange: true, minimumInputLines: 1 } },
        { id: "truthy-values", stage: "Growing · bool()", title: "Empty or Not?", mission: "Enter some text and watch bool() report whether that text is non-empty. Run again and submit an empty answer.", starterCode: `answer = input("Type something, or press Enter: ")
has_text = bool(answer)
print(has_text)`, starterInput: "Python", hint: "Non-empty text becomes True. Empty text becomes False.", success: "You observed bool() with text without treating it as a yes/no converter.", check: { mustChange: false } },
        { id: "repair-conversion", stage: "Ready for a Challenge · Repair", title: "Repair the Addition", mission: "Fix the program so a whole-number answer can have 5 added to it.", starterCode: `number = input("Whole number: ")
answer = number + 5
print(answer)`, starterInput: "7", hint: "Wrap the input() result in int(), or convert number on a separate line before adding.", success: "You repaired a real text-and-number TypeError.", check: { mustChange: true, minimumInputLines: 1 } }
      ]
    },
    freshPracticeGenerator: {
      templates: [
        { id: "fresh-int-add", skill: "int() Addition", title: "A Fresh Whole-Number Step", mission: "Enter a whole number, predict the result after {{amount}} is added, then run and check.", starterCode: `number = int(input("Whole number: "))
result = number + {{amount}}
print(result)`, starterInput: "{{starter}}", hint: "int() converts the answer before + {{amount}} runs.", solution: `number = int(input("Whole number: "))
result = number + {{amount}}
print(result)`, success: "You completed a fresh integer conversion.", check: { mustChange: true, minimumInputLines: 1 }, values: { amount: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15], starter: ["4", "6", "8", "10", "12", "15", "20"] } },
        { id: "fresh-int-multiply", skill: "int() Multiplication", title: "A Fresh Quantity", mission: "Enter the number of {{item}}, then calculate the total at {{price}} each.", starterCode: `quantity = int(input("How many {{item}}? "))
price = {{price}}
total = quantity * price
print(total)`, starterInput: "{{quantity}}", hint: "Convert the quantity with int() before multiplying.", solution: `quantity = int(input("How many {{item}}? "))
price = {{price}}
total = quantity * price
print(total)`, success: "You converted and multiplied a fresh quantity.", check: { mustChange: true, minimumInputLines: 1 }, values: { item: ["books", "tickets", "pencils", "apples", "notebooks", "stickers"], price: [2, 3, 4, 5, 6, 8, 10], quantity: ["2", "3", "4", "5", "6"] } },
        { id: "fresh-float", skill: "float()", title: "A Fresh Decimal", mission: "Enter a decimal {{measurement}} and multiply it by {{factor}}.", starterCode: `value = float(input("{{measurement}}: "))
result = value * {{factor}}
print(result)`, starterInput: "{{starter}}", hint: "float() accepts whole-number or decimal-number text.", solution: `value = float(input("{{measurement}}: "))
result = value * {{factor}}
print(result)`, success: "You completed a fresh decimal conversion.", check: { mustChange: true, minimumInputLines: 1 }, values: { measurement: ["Distance", "Price", "Weight", "Temperature change", "Journey length"], factor: [2, 3, 4, 5], starter: ["1.5", "2.25", "3.5", "4.75", "6.5"] } },
        { id: "fresh-two-values", skill: "Two Conversions", title: "A Fresh Pair of Numbers", mission: "Answer both {{kind}} prompts and add the converted values.", starterCode: `first = {{converter}}(input("First {{kind}}: "))
second = {{converter}}(input("Second {{kind}}: "))
total = first + second
print(total)`, starterInput: `{{first}}
{{second}}`, hint: "Both input() answers are text, so convert each one before adding.", solution: `first = {{converter}}(input("First {{kind}}: "))
second = {{converter}}(input("Second {{kind}}: "))
total = first + second
print(total)`, success: "You converted and added a fresh pair.", check: { mustChange: true, minimumInputLines: 2 }, values: { converter: ["int", "float"], kind: ["number", "score", "distance", "price"], first: ["2", "3.5", "5", "7.25"], second: ["1", "2.5", "4", "6.75"] } },
        { id: "fresh-string", skill: "str()", title: "A Fresh Number Label", mission: "Enter a whole number and let str() create text for the final label.", starterCode: `value = int(input("Number: "))
value_text = str(value)
print("{{label}}: " + value_text)`, starterInput: "{{starter}}", hint: "The number is converted back to text only when the message needs it.", solution: `value = int(input("Number: "))
value_text = str(value)
print("{{label}}: " + value_text)`, success: "You used str() in a fresh labelled message.", check: { mustChange: true, minimumInputLines: 1 }, values: { label: ["Score", "Level", "Tickets", "Points", "Items", "Steps"], starter: ["3", "5", "8", "10", "12", "20"] } },
        { id: "fresh-bool", skill: "bool()", title: "A Fresh Truth Test", mission: "Answer the prompt, then run again with an empty answer and compare True with False.", starterCode: `text = input("{{prompt}} ")
has_text = bool(text)
print(has_text)`, starterInput: "{{answer}}", hint: "Any non-empty text is True; empty text is False—even the text \"False\" is non-empty.", solution: `text = input("{{prompt}} ")
has_text = bool(text)
print(has_text)`, success: "You tested a fresh bool() conversion honestly.", check: { mustChange: true, minimumInputLines: 1 }, values: { prompt: ["Type a word:", "Write a city:", "Enter a message:", "Name an animal:", "Type something:"], answer: ["Python", "Dublin", "hello", "cat", "learning"] } }
      ]
    },
    challengeGenerator: {
      activities: [
        { id: "pocket-money", title: "Pocket Money Planner", mission: "Ask for available money and one item cost, convert both decimal answers, and display the amount remaining.", starterCode: `money_text = input("Money available: ")
cost_text = input("Item cost: ")

print(money_text)`, starterInput: `20
6.5`, hint: "Use float() twice, subtract cost from money, then place remaining in an f-string.", solution: `money_text = input("Money available: ")
cost_text = input("Item cost: ")

money = float(money_text)
cost = float(cost_text)
remaining = money - cost

print(f"Money remaining: {remaining}")` },
        { id: "cafe-total", title: "Café Total", mission: "Ask for a drink price and snack price, convert both answers, and display their total.", starterCode: `drink = input("Drink price: ")
snack = input("Snack price: ")

print(drink + snack)`, starterInput: `2.5
3.25`, hint: "Convert both answers with float() before adding them.", solution: `drink = float(input("Drink price: "))
snack = float(input("Snack price: "))
total = drink + snack

print(f"Total: {total}")` },
        { id: "game-score", title: "Game Score Boost", mission: "Ask for a whole-number score, add a 50-point bonus, and display the new score.", starterCode: `score = input("Current score: ")
bonus = 50

print(score)`, starterInput: "120", hint: "Convert score with int() before adding bonus.", solution: `score = int(input("Current score: "))
bonus = 50
new_score = score + bonus

print(f"New score: {new_score}")` },
        { id: "journey-total", title: "Two-Part Journey", mission: "Ask for two decimal distances and calculate the complete journey distance.", starterCode: `first = input("First distance: ")
second = input("Second distance: ")

print(first + second)`, starterInput: `3.5
2.25`, hint: "Use float() on both input() results before + runs.", solution: `first = float(input("First distance: "))
second = float(input("Second distance: "))
total = first + second

print(f"Total distance: {total}")` },
        { id: "ticket-cost", title: "Ticket Cost", mission: "Ask how many tickets are needed, multiply the converted quantity by the fixed price, and display the total.", starterCode: `tickets = input("How many tickets? ")
price = 8

print(tickets)`, starterInput: "3", hint: "Ticket quantity is a whole number, so int() is the suitable conversion.", solution: `tickets = int(input("How many tickets? "))
price = 8
total = tickets * price

print(f"Ticket total: {total}")` },
        { id: "truth-check", title: "The bool() Surprise", mission: "Predict bool() for empty text, the text False, zero, and five; then repair the starter code to display all four results.", starterCode: `print(bool(""))
print(bool("False"))`, starterInput: "", hint: "Add bool(0) and bool(5). Remember: non-empty text is True.", solution: `print(bool(""))
print(bool("False"))
print(bool(0))
print(bool(5))` }
      ]
    },
    quizGenerator: {
      activities: [
        { id: "quiz-input-type", question: "What type of value does input() normally give Python?", code: "", options: ["Text (str)", "Always int", "Always float", "Always bool"], correct: 0, explanation: "Correct — input() returns text, even when that text contains digits." },
        { id: "quiz-int", question: "What does int(\"12\") create?", code: "", options: ["The text 12", "The whole number 12", "The decimal 1.2", "True"], correct: 1, explanation: "Correct — int() converts suitable whole-number text into an integer." },
        { id: "quiz-float", question: "Which conversion is suitable for the text \"2.5\"?", code: "", options: ["int(\"2.5\")", "float(\"2.5\")", "bool(\"2.5\")", "No conversion can work"], correct: 1, explanation: "Correct — float() converts decimal-number text such as \"2.5\"." },
        { id: "quiz-add", question: "If the learner enters 4, what is displayed?", code: `number = int(input("Number: "))
print(number + 3)`, options: ["43", "7", "number + 3", "An error"], correct: 1, explanation: "Correct — int() creates 4 as a number, so Python calculates 4 + 3." },
        { id: "quiz-str", question: "What does str(25) create?", code: "", options: ["The text \"25\"", "The integer 25", "The decimal 2.5", "False"], correct: 0, explanation: "Correct — str() creates a text representation of the value." },
        { id: "quiz-bool-empty", question: "What does bool(\"\") return?", code: "", options: ["True", "False", "Empty text", "An error"], correct: 1, explanation: "Correct — empty text is false when converted with bool()." },
        { id: "quiz-bool-text", question: "What does bool(\"False\") return?", code: "", options: ["False", "True", "The text False", "An error"], correct: 1, explanation: "Correct — \"False\" is non-empty text, so bool() returns True." },
        { id: "quiz-error", question: "Why does int(\"hello\") raise ValueError?", code: "", options: ["hello is not whole-number text", "int() only works in loops", "Python cannot store text", "The quotation marks are comments"], correct: 0, explanation: "Correct — the text does not describe a valid whole number." },
        { id: "quiz-two-step", question: "Which version most clearly shows input text becoming a number?", code: "", options: [`age_text = input("Age: ")\nage = int(age_text)`, `age = input + int`, `age == "20"`, `print(int)`], correct: 0, explanation: "Correct — the first line receives text and the second line explicitly converts it." }
      ]
    },
    quiz: {
      question: "Which line lets a learner enter a whole number that Python can calculate with?",
      code: "",
      options: [`number = input("Number: ")`, `number = int(input("Number: "))`, `number = "input"`, `int = number`],
      correct: 1,
      explanation: "Correct — input() receives text and int() converts suitable whole-number text into an integer."
    }
  },
  18: {
    title: "Your First Mini Calculator — Input, Calculate, Explain",
    stage: "Input & Decisions",
    level: "Beginner",
    time: "30 minutes",
    tags: ["Interactive calculator", "Input → Output"],
    usesInput: true,
    intro: "You can now ask for values, convert them, and calculate with them. Today those skills become one small but real application: a calculator that works with the learner's numbers.",
    explanation: "A calculator has a simple journey: <strong>input → calculation → output</strong>. It receives values, performs an operation, and explains the answer. Because <code>input()</code> gives text, each answer must become a number before arithmetic begins.",
    concept: "Ask for two values, convert both with <code>float()</code>, calculate with an arithmetic operator, then display a clearly labelled result.",
    starterCode: `first_number = float(input("Enter the first number: "))
second_number = float(input("Enter the second number: "))

total = first_number + second_number

print(f"Total: {total}")`,
    starterInput: `8
4`,
    expectedOutput: `Enter the first number: 8
Enter the second number: 4
Total: 12.0`,
    lineByLine: [
      '<code>input()</code> asks for the first value, and <code>float()</code> converts its text answer into a number.',
      'Python repeats that careful process for <code>second_number</code>.',
      '<code>float()</code> accepts whole-number text such as <code>"8"</code> and decimal-number text such as <code>"2.5"</code>.',
      '<code>first_number + second_number</code> performs numerical addition—not text joining.',
      'The meaningful variable <code>total</code> remembers the calculated answer.',
      'The f-string gives the answer a clear label so a human knows what the number means.'
    ],
    outputExplanation: "The first two console lines are the calculator's input. After both answers are converted, Python adds the two numbers and displays the output as <code>Total</code>. The calculator did not know the answer beforehand—it calculated with the values you supplied.",
    changeIt: "Run the addition calculator with <code>10</code> and <code>5</code>, then try the decimals <code>2.5</code> and <code>1.25</code>.<br><br>Next, change only <code>+</code> to <code>*</code>. Rename <code>total</code> to <code>product</code> and change the output label to <code>Product</code>. Predict the result for 6 and 4 before running.<br><br>Finally, try <code>/</code> with a non-zero second number. Notice how one small operator changes the calculator's job.",
    challenge: "Build a Four-Answer Calculator. Ask for two numbers once, then calculate and display their sum, difference, product, and quotient.",
    hint: "Create four clearly named result variables using <code>+</code>, <code>-</code>, <code>*</code>, and <code>/</code>. For division, enter a second number other than zero.",
    solution: `first_number = float(input("First number: "))
second_number = float(input("Second number (not zero): "))

sum_answer = first_number + second_number
difference = first_number - second_number
product = first_number * second_number
quotient = first_number / second_number

print(f"Sum: {sum_answer}")
print(f"Difference: {difference}")
print(f"Product: {product}")
print(f"Quotient: {quotient}")`,
    practiceCoach: {
      knowledgeBoundary: {
        current: ["calculator input", "numeric conversion", "addition", "subtraction", "multiplication", "division", "labelled calculator output"],
        previous: ["print()", "comments", "variables", "integers and floats", "arithmetic operators", "strings", "f-strings", "input()", "type conversion"],
        prohibited: ["operation menus", "if statements", "loops", "collections", "functions", "try and except", "validation", "rounding APIs", "private information"]
      },
      activities: [
        { id: "add-two", stage: "Easy Start · Addition", title: "Add Two Numbers", mission: "Enter two numbers, predict their total, then run and check your answer.", starterCode: `first = float(input("First number: "))
second = float(input("Second number: "))
answer = first + second
print(answer)`, starterInput: `6
4`, hint: "Answer both prompts. + adds the converted numbers.", success: "You completed an interactive addition calculation.", check: { mustChange: true, minimumInputLines: 2 } },
        { id: "difference", stage: "Easy Start · Subtraction", title: "Find the Difference", mission: "Enter a starting number and a number to subtract. Pay attention to their order.", starterCode: `starting = float(input("Starting number: "))
take_away = float(input("Subtract: "))
difference = starting - take_away
print(difference)`, starterInput: `10
3`, hint: "Subtraction uses starting - take_away; changing the order changes the answer.", success: "You calculated a difference in the intended order.", check: { mustChange: true, minimumInputLines: 2 } },
        { id: "quantity-price", stage: "Growing · Multiplication", title: "Multiply a Quantity", mission: "Enter a whole-number quantity and a decimal price to calculate the total cost.", starterCode: `quantity = float(input("Quantity: "))
price = float(input("Price each: "))
total = quantity * price
print(f"Total cost: {total}")`, starterInput: `3
2.5`, hint: "* multiplies the two converted values.", success: "You built a small quantity-and-price calculator.", check: { mustChange: true, minimumInputLines: 2 } },
        { id: "share-equally", stage: "Growing · Division", title: "Share Equally", mission: "Enter a total and a non-zero number of people to calculate each share.", starterCode: `total = float(input("Total amount: "))
people = float(input("Number of people (not zero): "))
each_share = total / people
print(f"Each share: {each_share}")`, starterInput: `20
4`, hint: "Use a second answer other than zero because division by zero is not allowed.", success: "You used division to share a value equally.", check: { mustChange: true, minimumInputLines: 2 } },
        { id: "cafe-bill", stage: "Growing · Decimal Addition", title: "Café Bill", mission: "Enter a drink price and snack price, then calculate the complete bill.", starterCode: `drink = float(input("Drink price: "))
snack = float(input("Snack price: "))
bill = drink + snack
print(f"Bill: {bill}")`, starterInput: `2.25
3.5`, hint: "float() keeps decimal prices available for arithmetic.", success: "You calculated a bill from two decimal inputs.", check: { mustChange: true, minimumInputLines: 2 } },
        { id: "distance-total", stage: "Growing · Meaningful Output", title: "Journey Distance", mission: "Enter two journey distances and display their combined distance with a clear label.", starterCode: `first_part = float(input("First distance: "))
second_part = float(input("Second distance: "))
distance = first_part + second_part
print(f"Total distance: {distance}")`, starterInput: `3.5
4.25`, hint: "Convert both answers, add them, and keep the output label meaningful.", success: "You created a clear journey calculator.", check: { mustChange: true, minimumInputLines: 2 } },
        { id: "repair-calculator", stage: "Ready for a Challenge · Repair", title: "Repair the Calculator", mission: "Fix the program so two answers are added numerically instead of joined as text.", starterCode: `first = input("First number: ")
second = input("Second number: ")
answer = first + second
print(answer)`, starterInput: `2
3`, hint: "Convert each input() answer with float() before + runs.", success: "You repaired text joining and produced real addition.", check: { mustChange: true, minimumInputLines: 2 } }
      ]
    },
    freshPracticeGenerator: {
      templates: [
        { id: "fresh-add", skill: "Addition", title: "A Fresh Total", mission: "Enter two {{things}} values and calculate their total.", starterCode: `first = float(input("First {{things}} value: "))
second = float(input("Second {{things}} value: "))
answer = first + second
print(f"Total: {answer}")`, starterInput: `{{first}}
{{second}}`, hint: "+ adds both converted values.", solution: `first = float(input("First {{things}} value: "))
second = float(input("Second {{things}} value: "))
answer = first + second
print(f"Total: {answer}")`, success: "You completed a fresh addition calculator.", check: { mustChange: true, minimumInputLines: 2 }, values: { things: ["distance", "price", "score", "weight", "time", "savings"], first: ["2", "3.5", "5", "7.25", "10"], second: ["1", "2.25", "4", "6.5", "8"] } },
        { id: "fresh-subtract", skill: "Subtraction", title: "A Fresh Difference", mission: "Enter a starting {{thing}} and the amount used, then calculate what remains.", starterCode: `starting = float(input("Starting {{thing}}: "))
used = float(input("Amount used: "))
remaining = starting - used
print(f"Remaining: {remaining}")`, starterInput: `{{starting}}
{{used}}`, hint: "Keep starting - used in that order.", solution: `starting = float(input("Starting {{thing}}: "))
used = float(input("Amount used: "))
remaining = starting - used
print(f"Remaining: {remaining}")`, success: "You completed a fresh subtraction calculator.", check: { mustChange: true, minimumInputLines: 2 }, values: { thing: ["money", "distance", "time", "points", "material", "water"], starting: ["10", "15", "20", "25.5", "40"], used: ["2", "3.5", "5", "7.25", "10"] } },
        { id: "fresh-multiply", skill: "Multiplication", title: "A Fresh Cost Calculator", mission: "Enter a {{item}} quantity and price, then calculate the total cost.", starterCode: `quantity = float(input("{{item}} quantity: "))
price = float(input("Price each: "))
total = quantity * price
print(f"Total cost: {total}")`, starterInput: `{{quantity}}
{{price}}`, hint: "Use quantity * price after both conversions.", solution: `quantity = float(input("{{item}} quantity: "))
price = float(input("Price each: "))
total = quantity * price
print(f"Total cost: {total}")`, success: "You completed a fresh multiplication calculator.", check: { mustChange: true, minimumInputLines: 2 }, values: { item: ["Ticket", "Notebook", "Apple", "Sticker", "Juice", "Book"], quantity: ["2", "3", "4", "5", "6"], price: ["1.5", "2", "2.5", "3", "4.25"] } },
        { id: "fresh-divide", skill: "Division", title: "A Fresh Equal Share", mission: "Enter a {{thing}} total and a non-zero group count to calculate one share.", starterCode: `total = float(input("{{thing}} total: "))
groups = float(input("Number of groups (not zero): "))
share = total / groups
print(f"Each group: {share}")`, starterInput: `{{total}}
{{groups}}`, hint: "The second value must not be zero.", solution: `total = float(input("{{thing}} total: "))
groups = float(input("Number of groups (not zero): "))
share = total / groups
print(f"Each group: {share}")`, success: "You completed a fresh division calculator.", check: { mustChange: true, minimumInputLines: 2 }, values: { thing: ["Sweet", "Point", "Page", "Coin", "Distance", "Water"], total: ["12", "20", "24", "30", "36", "48"], groups: ["2", "3", "4", "5", "6"] } },
        { id: "fresh-change", skill: "Two Operations", title: "A Fresh Shopping Balance", mission: "Enter money available and two costs, then calculate the balance after both purchases.", starterCode: `money = float(input("Money available: "))
first_cost = float(input("First cost: "))
second_cost = float(input("Second cost: "))
balance = money - first_cost - second_cost
print(f"Balance: {balance}")`, starterInput: `{{money}}
{{first}}
{{second}}`, hint: "Subtract both converted costs from money.", solution: `money = float(input("Money available: "))
first_cost = float(input("First cost: "))
second_cost = float(input("Second cost: "))
balance = money - first_cost - second_cost
print(f"Balance: {balance}")`, success: "You completed a fresh three-input calculator.", check: { mustChange: true, minimumInputLines: 3 }, values: { money: ["20", "25", "30", "40", "50"], first: ["3", "5", "7.5", "8", "10"], second: ["2", "4", "5.5", "6", "9"] } },
        { id: "fresh-rectangle", skill: "Multiply and Add", title: "A Fresh Rectangle", mission: "Enter a rectangle's length and width, then calculate area and perimeter.", starterCode: `length = float(input("Length: "))
width = float(input("Width: "))
area = length * width
perimeter = 2 * length + 2 * width
print(f"Area: {area}")
print(f"Perimeter: {perimeter}")`, starterInput: `{{length}}
{{width}}`, hint: "Area uses length * width. Perimeter uses two lengths plus two widths.", solution: `length = float(input("Length: "))
width = float(input("Width: "))
area = length * width
perimeter = 2 * length + 2 * width
print(f"Area: {area}")
print(f"Perimeter: {perimeter}")`, success: "You completed a fresh two-result calculator.", check: { mustChange: true, minimumInputLines: 2 }, values: { length: ["3", "4", "5", "6.5", "8"], width: ["2", "2.5", "3", "4", "5.5"] } }
      ]
    },
    challengeGenerator: {
      activities: [
        { id: "four-results", title: "Four-Answer Calculator", mission: "Ask for two numbers once, then display their sum, difference, product, and quotient.", starterCode: `first = float(input("First number: "))
second = float(input("Second number (not zero): "))

print(first + second)`, starterInput: `12
4`, hint: "Create four result variables and use +, -, *, and /.", solution: `first = float(input("First number: "))
second = float(input("Second number (not zero): "))
sum_answer = first + second
difference = first - second
product = first * second
quotient = first / second
print(f"Sum: {sum_answer}")
print(f"Difference: {difference}")
print(f"Product: {product}")
print(f"Quotient: {quotient}")` },
        { id: "cafe-receipt", title: "Tiny Café Receipt", mission: "Ask for two item prices and display subtotal, a fixed service charge, and final total.", starterCode: `drink = float(input("Drink: "))
snack = float(input("Snack: "))
service = 1.5

print(drink + snack)`, starterInput: `2.5
3.25`, hint: "Calculate subtotal first, then add service for the final total.", solution: `drink = float(input("Drink: "))
snack = float(input("Snack: "))
service = 1.5
subtotal = drink + snack
total = subtotal + service
print(f"Subtotal: {subtotal}")
print(f"Service: {service}")
print(f"Total: {total}")` },
        { id: "journey-planner", title: "Journey Planner", mission: "Ask for distance and speed, then calculate travel time using distance divided by speed.", starterCode: `distance = float(input("Distance: "))
speed = float(input("Speed (not zero): "))

print(distance)`, starterInput: `120
60`, hint: "Travel time = distance / speed.", solution: `distance = float(input("Distance: "))
speed = float(input("Speed (not zero): "))
time = distance / speed
print(f"Travel time: {time}")` },
        { id: "money-balance", title: "Pocket-Money Balance", mission: "Ask for starting money and two costs, then display the remaining balance.", starterCode: `money = float(input("Starting money: "))
first_cost = float(input("First cost: "))
second_cost = float(input("Second cost: "))

print(money)`, starterInput: `30
8.5
4`, hint: "Subtract both costs from the starting money.", solution: `money = float(input("Starting money: "))
first_cost = float(input("First cost: "))
second_cost = float(input("Second cost: "))
remaining = money - first_cost - second_cost
print(f"Remaining: {remaining}")` },
        { id: "rectangle", title: "Rectangle Calculator", mission: "Ask for length and width, then display both area and perimeter.", starterCode: `length = float(input("Length: "))
width = float(input("Width: "))

print(length * width)`, starterInput: `6
4`, hint: "Area = length * width. Perimeter = 2 * length + 2 * width.", solution: `length = float(input("Length: "))
width = float(input("Width: "))
area = length * width
perimeter = 2 * length + 2 * width
print(f"Area: {area}")
print(f"Perimeter: {perimeter}")` },
        { id: "repair-joining", title: "The 23 Mystery", mission: "The learner enters 2 and 3 but sees 23. Repair the calculator so the output is 5.0.", starterCode: `first = input("First number: ")
second = input("Second number: ")
print(first + second)`, starterInput: `2
3`, hint: "input() gives text. Convert both answers before addition.", solution: `first = float(input("First number: "))
second = float(input("Second number: "))
answer = first + second
print(answer)` }
      ]
    },
    quizGenerator: {
      activities: [
        { id: "quiz-journey", question: "What are the three parts of this mini calculator?", code: "", options: ["Input → Calculation → Output", "Output → Comment → Input", "Loop → List → Function", "Text → Error → Stop"], correct: 0, explanation: "Correct — a calculator receives input, performs a calculation, and displays output." },
        { id: "quiz-convert", question: "Why does the calculator use float(input(...))?", code: "", options: ["To convert number-shaped text into a number", "To hide the prompt", "To create a comment", "To stop arithmetic"], correct: 0, explanation: "Correct — input() gives text and float() prepares suitable text for arithmetic." },
        { id: "quiz-joining", question: "Without conversion, what does adding the input text 2 and 3 produce?", code: `first = "2"
second = "3"
print(first + second)`, options: ["5", "5.0", "23", "An empty line"], correct: 2, explanation: "Correct — + joins two strings, producing the text 23." },
        { id: "quiz-addition", question: "After float conversion, what do inputs 2 and 3 produce with +?", code: "", options: ["23", "5.0", "6.0", "An error"], correct: 1, explanation: "Correct — the values are numbers, so Python calculates 2.0 + 3.0." },
        { id: "quiz-multiply", question: "Which arithmetic operator multiplies two calculator values?", code: "", options: ["+", "-", "*", "/"], correct: 2, explanation: "Correct — * is Python's multiplication operator." },
        { id: "quiz-order", question: "What does this calculate?", code: `answer = first_number - second_number`, options: ["Second minus first", "First minus second", "The two values joined", "First divided by second"], correct: 1, explanation: "Correct — subtraction follows the written left-to-right order." },
        { id: "quiz-product", question: "What will this display?", code: `first = 6.0
second = 4.0
answer = first * second
print(answer)`, options: ["10.0", "24.0", "64", "2.0"], correct: 1, explanation: "Correct — 6.0 multiplied by 4.0 is 24.0." },
        { id: "quiz-zero", question: "Why should a beginner use a non-zero second number for division here?", code: "", options: ["Zero causes ZeroDivisionError", "Zero changes input into text", "Python cannot print zero", "Division needs a loop"], correct: 0, explanation: "Correct — division by zero stops with ZeroDivisionError." },
        { id: "quiz-name", question: "Which result variable name is clearer for multiplication?", code: "", options: ["x", "a", "product", "thing"], correct: 2, explanation: "Correct — product tells the reader what the calculated value represents." },
        { id: "quiz-invalid", question: "Why can float(\"hello\") not power this calculator?", code: "", options: ["hello is not number-shaped text", "float() works only with comments", "Calculators cannot use text prompts", "Variables cannot store floats"], correct: 0, explanation: "Correct — float() needs text that describes a valid number." }
      ]
    },
    quiz: {
      question: "Which program correctly asks for two numbers and adds them?",
      code: "",
      options: [`first = input("First: ")\nsecond = input("Second: ")\nprint(first + second)`, `first = float(input("First: "))\nsecond = float(input("Second: "))\nprint(first + second)`, `print("first + second")`, `first == second`],
      correct: 1,
      explanation: "Correct — both text answers are converted before numerical addition."
    }
  },
  19: {
    title: "If Statements — Letting Python Make a Decision",
    stage: "Decisions",
    level: "Beginner",
    time: "30 minutes",
    tags: ["if statements", "True → action"],
    usesInput: true,
    intro: "Until now, your programs followed every instruction in order. Today Python will check a condition and decide whether one instruction should run.",
    explanation: "An <code>if</code> statement means: run this indented instruction only when the condition is <code>True</code>. When the condition is <code>False</code>, Python quietly skips that block and continues with the program.",
    concept: "<code>if condition:</code> begins a one-way decision. The indented block belongs to that decision and runs only when the condition is True.",
    starterCode: `temperature = float(input("What is the temperature? "))

print(f"Temperature: {temperature}")

if temperature > 25:
    print("It is a warm day.")

print("Weather check complete.")`,
    starterInput: "30",
    expectedOutput: `What is the temperature? 30
Temperature: 30.0
It is a warm day.
Weather check complete.`,
    lineByLine: [
      '<code>input()</code> asks for the temperature and <code>float()</code> converts the answer into a number.',
      '<code>temperature > 25</code> is a comparison that becomes either <code>True</code> or <code>False</code>.',
      '<code>if</code> tells Python to use that Boolean result to make a one-way decision.',
      'The colon <code>:</code> finishes the decision line and announces that an indented block follows.',
      'The four spaces before <code>print("It is a warm day.")</code> show that this instruction belongs to the <code>if</code>.',
      '<code>Weather check complete.</code> is not indented, so it runs whether the condition is True or False.'
    ],
    outputExplanation: "With an input above 25, the condition is True and the warm-day message appears. With an input such as 18, that message is skipped—but the final completion line still appears. A False condition is a normal decision, not an error.",
    changeIt: "Run the program with <code>30</code>, then run it with <code>18</code>. Compare the two outputs and identify the one conditional line.<br><br>Change the threshold from <code>25</code> to <code>20</code>, predict the result for exactly 20, and test it. Then replace <code>></code> with <code>>=</code> and test 20 again.<br><br>Finally, remove the four spaces before the warm-day <code>print()</code>, run the code to see the genuine <code>IndentationError</code>, then restore the indentation and run successfully.",
    challenge: "Build a Launch Readiness Check. Ask for a fuel level and whether systems are ready. Use two independent if statements to display each passed check, then always display a final completion message.",
    hint: "Use <code>if fuel >= 80:</code> for the number check and <code>if systems_ready == \"yes\":</code> for the exact text check. Indent only the messages controlled by each condition.",
    solution: `fuel = float(input("Fuel level: "))
systems_ready = input("Are systems ready? ")

print(f"Fuel: {fuel}")
print(f"Systems ready: {systems_ready}")

if fuel >= 80:
    print("Fuel check passed.")

if systems_ready == "yes":
    print("Systems check passed.")

print("Readiness check complete.")`,
    practiceCoach: {
      knowledgeBoundary: {
        current: ["if statements", "True and False paths", "colon", "indentation", "one-way decisions", "independent if statements"],
        previous: ["variables", "strings", "numbers", "Booleans", "comparisons", "logical operators", "input()", "type conversion", "arithmetic"],
        prohibited: ["else", "elif", "nested conditions", "conditional expressions", "loops", "collections", "functions", "try and except", "validation"]
      },
      activities: [
        { id: "warm-day", stage: "Easy Start · True or False", title: "Warm Day Check", mission: "Enter a temperature above 25 to trigger the message, then run again with a cooler value and compare.", starterCode: `temperature = float(input("Temperature: "))
if temperature > 25:
    print("Warm day")
print("Check complete")`, starterInput: "30", hint: "The indented message appears only when temperature > 25 is True.", success: "You tested both sides of a one-way temperature decision.", check: { mustChange: true, minimumInputLines: 1 } },
        { id: "target-reached", stage: "Easy Start · Threshold", title: "Target Reached", mission: "Enter a score of at least 50 and let the if statement recognise the achievement.", starterCode: `score = float(input("Score: "))
if score >= 50:
    print("Target reached")
print("Score check complete")`, starterInput: "75", hint: ">= includes the target value itself.", success: "You used a comparison result to control an instruction.", check: { mustChange: true, minimumInputLines: 1 } },
        { id: "secret-word", stage: "Growing · Text Equality", title: "Secret Word", mission: "Enter the exact lowercase word python to reveal the message, then test a different spelling.", starterCode: `word = input("Secret word: ")
if word == "python":
    print("Secret found")
print("Word check complete")`, starterInput: "python", hint: "== asks whether the two text values are exactly equal.", success: "You made a text-based one-way decision.", check: { mustChange: true, minimumInputLines: 1 } },
        { id: "free-delivery", stage: "Growing · Practical Threshold", title: "Free Delivery", mission: "Enter an order total of 50 or more to trigger free delivery.", starterCode: `total = float(input("Order total: "))
if total >= 50:
    print("Free delivery unlocked")
print("Order check complete")`, starterInput: "65", hint: "The threshold comparison belongs after if and before the colon.", success: "You built a practical threshold decision.", check: { mustChange: true, minimumInputLines: 1 } },
        { id: "positive-number", stage: "Growing · Number Check", title: "Positive Number", mission: "Enter a positive number, zero, and a negative number in separate runs. Notice when the message appears.", starterCode: `number = float(input("Number: "))
if number > 0:
    print("The number is positive")
print("Number check complete")`, starterInput: "8", hint: "Only values greater than zero make the condition True.", success: "You explored a numerical condition across several inputs.", check: { mustChange: true, minimumInputLines: 1 } },
        { id: "case-sensitive", stage: "Growing · Exact Match", title: "Lowercase Yes", mission: "Enter yes, then Yes, and observe Python's case-sensitive text comparison.", starterCode: `answer = input("Type yes: ")
if answer == "yes":
    print("Thank you")
print("Answer check complete")`, starterInput: "yes", hint: "The text yes and Yes are not equal in Python.", success: "You observed an exact case-sensitive decision.", check: { mustChange: true, minimumInputLines: 1 } },
        { id: "repair-indent", stage: "Ready for a Challenge · Repair", title: "Repair the Indentation", mission: "Fix the indentation so the success message belongs to the if statement.", starterCode: `score = float(input("Score: "))
if score >= 50:
print("Target reached")
print("Check complete")`, starterInput: "70", hint: "Place four spaces before the conditional print().", success: "You repaired a genuine IndentationError.", check: { mustChange: true, minimumInputLines: 1 } }
      ]
    },
    freshPracticeGenerator: {
      templates: [
        { id: "fresh-number-above", skill: "Number Threshold", title: "A Fresh Threshold", mission: "Enter a {{value}} above {{threshold}} to reveal the message, then test a value below it.", starterCode: `value = float(input("{{prompt}} "))
if value > {{threshold}}:
    print("{{message}}")
print("Check complete")`, starterInput: "{{trueValue}}", hint: "The indented message needs value > {{threshold}} to be True.", solution: `value = float(input("{{prompt}} "))
if value > {{threshold}}:
    print("{{message}}")
print("Check complete")`, success: "You completed a fresh number-threshold decision.", check: { mustChange: true, minimumInputLines: 1 }, values: { prompt: ["Temperature:", "Score:", "Speed:", "Distance:", "Points:", "Savings:"], threshold: [10, 20, 25, 50, 60, 80, 100], trueValue: ["30", "55", "75", "90", "120"], message: ["Threshold passed", "Milestone reached", "Alert active", "Goal achieved", "Check passed"] } },
        { id: "fresh-at-least", skill: "Inclusive Threshold", title: "A Fresh At-Least Check", mission: "Enter a {{thing}} value equal to or above {{threshold}} and test what >= does at equality.", starterCode: `value = float(input("{{thing}}: "))
if value >= {{threshold}}:
    print("{{message}}")
print("Check complete")`, starterInput: "{{threshold}}", hint: ">= means greater than or equal to, so {{threshold}} itself passes.", solution: `value = float(input("{{thing}}: "))
if value >= {{threshold}}:
    print("{{message}}")
print("Check complete")`, success: "You completed a fresh inclusive-threshold decision.", check: { mustChange: true, minimumInputLines: 1 }, values: { thing: ["Order total", "Score", "Fuel", "Attendance", "Tickets", "Pages"], threshold: [5, 10, 20, 50, 80, 100], message: ["Target reached", "Requirement met", "Reward unlocked", "Check passed", "Milestone achieved"] } },
        { id: "fresh-text", skill: "Text Equality", title: "A Fresh Exact Word", mission: "Enter the exact lowercase {{label}} {{word}} to trigger the message, then change one letter and compare.", starterCode: `answer = input("Type {{label}}: ")
if answer == "{{word}}":
    print("Exact match")
print("Word check complete")`, starterInput: "{{word}}", hint: "== compares the exact text, including capital and lowercase letters.", solution: `answer = input("Type {{label}}: ")
if answer == "{{word}}":
    print("Exact match")
print("Word check complete")`, success: "You completed a fresh exact-text decision.", check: { mustChange: true, minimumInputLines: 1 }, values: { label: ["colour", "animal", "city", "word", "answer", "code"], word: ["blue", "cat", "dublin", "python", "yes", "ready"] } },
        { id: "fresh-zero", skill: "Exact Number", title: "A Fresh Zero Check", mission: "Enter zero to trigger the exact-number message, then try a non-zero value.", starterCode: `number = float(input("Number: "))
if number == 0:
    print("Exactly zero")
print("Number check complete")`, starterInput: "0", hint: "== asks whether number has exactly the value 0.", solution: `number = float(input("Number: "))
if number == 0:
    print("Exactly zero")
print("Number check complete")`, success: "You completed a fresh equality decision.", check: { mustChange: true, minimumInputLines: 1 }, values: { variation: ["a", "b", "c", "d", "e", "f", "g", "h"] } },
        { id: "fresh-two-if", skill: "Independent Decisions", title: "Two Fresh Checks", mission: "Enter a {{thing}} and the exact word {{word}}. Watch Python check both independent if statements.", starterCode: `number = float(input("{{thing}}: "))
answer = input("Type {{word}}: ")
if number >= {{threshold}}:
    print("Number check passed")
if answer == "{{word}}":
    print("Word check passed")
print("Both checks complete")`, starterInput: `{{number}}
{{word}}`, hint: "The two if statements are checked separately; neither one is inside the other.", solution: `number = float(input("{{thing}}: "))
answer = input("Type {{word}}: ")
if number >= {{threshold}}:
    print("Number check passed")
if answer == "{{word}}":
    print("Word check passed")
print("Both checks complete")`, success: "You completed two fresh independent decisions.", check: { mustChange: true, minimumInputLines: 2 }, values: { thing: ["Score", "Fuel", "Distance", "Points", "Pages", "Tickets"], word: ["ready", "go", "yes", "start", "python", "green"], threshold: [10, 20, 50, 80, 100], number: ["25", "60", "90", "120"] } },
        { id: "fresh-logical", skill: "One Combined Condition", title: "A Fresh Two-Fact Decision", mission: "Enter two values that make the condition True, then change one answer and compare.", starterCode: `score = float(input("Score: "))
ready = input("Ready? ")
if score >= {{threshold}} and ready == "yes":
    print("Both requirements passed")
print("Check complete")`, starterInput: `{{score}}
yes`, hint: "The message needs both comparisons to be True because the condition uses and.", solution: `score = float(input("Score: "))
ready = input("Ready? ")
if score >= {{threshold}} and ready == "yes":
    print("Both requirements passed")
print("Check complete")`, success: "You reused and inside a fresh if condition.", check: { mustChange: true, minimumInputLines: 2 }, values: { threshold: [20, 40, 50, 60, 80], score: ["50", "70", "90", "100"] } }
      ]
    },
    challengeGenerator: {
      activities: [
        { id: "launch", title: "Launch Readiness Check", mission: "Ask for fuel and a systems answer. Display each passed check with an independent if statement.", starterCode: `fuel = float(input("Fuel level: "))
systems = input("Systems ready? ")

print(f"Fuel: {fuel}")`, starterInput: `90
yes`, hint: "Use fuel >= 80 and systems == \"yes\" as two separate conditions.", solution: `fuel = float(input("Fuel level: "))
systems = input("Systems ready? ")
if fuel >= 80:
    print("Fuel check passed")
if systems == "yes":
    print("Systems check passed")
print("Readiness check complete")` },
        { id: "event-entry", title: "Event Entry Checks", mission: "Ask for age and ticket answer, then show each independent requirement that passes.", starterCode: `age = float(input("Age: "))
ticket = input("Ticket available? ")

print(age)`, starterInput: `21
yes`, hint: "Use age >= 18 and ticket == \"yes\" in two separate if statements.", solution: `age = float(input("Age: "))
ticket = input("Ticket available? ")
if age >= 18:
    print("Age check passed")
if ticket == "yes":
    print("Ticket check passed")
print("Entry check complete")` },
        { id: "study-goals", title: "Study Goal Tracker", mission: "Ask for pages read and minutes studied, then display each milestone reached.", starterCode: `pages = float(input("Pages read: "))
minutes = float(input("Minutes studied: "))

print("Checking goals")`, starterInput: `25
40`, hint: "Use pages >= 20 and minutes >= 30 as independent conditions.", solution: `pages = float(input("Pages read: "))
minutes = float(input("Minutes studied: "))
if pages >= 20:
    print("Reading goal reached")
if minutes >= 30:
    print("Study-time goal reached")
print("Goal check complete")` },
        { id: "delivery", title: "Delivery Milestones", mission: "Ask for order total and distance, then report free delivery and nearby delivery independently.", starterCode: `total = float(input("Order total: "))
distance = float(input("Distance: "))

print(total)`, starterInput: `60
3`, hint: "Use total >= 50 and distance <= 5 as two separate checks.", solution: `total = float(input("Order total: "))
distance = float(input("Distance: "))
if total >= 50:
    print("Free delivery unlocked")
if distance <= 5:
    print("Nearby delivery")
print("Delivery check complete")` },
        { id: "game-achievement", title: "Game Achievements", mission: "Ask for points and collected stars, then display every achievement reached.", starterCode: `points = float(input("Points: "))
stars = float(input("Stars: "))

print("Checking achievements")`, starterInput: `120
10`, hint: "Use points >= 100 and stars >= 10 in independent if statements.", solution: `points = float(input("Points: "))
stars = float(input("Stars: "))
if points >= 100:
    print("Point Master unlocked")
if stars >= 10:
    print("Star Collector unlocked")
print("Achievement check complete")` },
        { id: "repair-if", title: "Repair the Decision", mission: "Repair the missing colon and indentation so the target message runs correctly.", starterCode: `score = float(input("Score: "))
if score >= 50
print("Target reached")
print("Check complete")`, starterInput: "75", hint: "Add : after the condition and four spaces before the controlled print().", solution: `score = float(input("Score: "))
if score >= 50:
    print("Target reached")
print("Check complete")` }
      ]
    },
    quizGenerator: {
      activities: [
        { id: "quiz-purpose", question: "What does an if statement do?", code: "", options: ["Runs an indented block only when a condition is True", "Repeats code forever", "Converts text to a number", "Creates a list"], correct: 0, explanation: "Correct — if controls whether its indented block should run." },
        { id: "quiz-condition", question: "What must an if condition become?", code: "", options: ["A filename", "True or False", "A comment", "Always a string"], correct: 1, explanation: "Correct — Python uses the condition's Boolean result." },
        { id: "quiz-colon", question: "Which symbol finishes an if decision line?", code: "", options: [";", ",", ":", "#"], correct: 2, explanation: "Correct — : announces that an indented block follows." },
        { id: "quiz-indent", question: "Why is the print() line indented?", code: `if score >= 50:
    print("Target reached")`, options: ["It belongs to the if block", "It is a comment", "It becomes input", "Indentation is only decoration"], correct: 0, explanation: "Correct — indentation tells Python which instruction the decision controls." },
        { id: "quiz-false", question: "What happens to an if block when its condition is False?", code: "", options: ["Python skips that block", "Python always reports an error", "The block runs twice", "The program restarts"], correct: 0, explanation: "Correct — a False condition quietly skips the controlled block." },
        { id: "quiz-equals", question: "Which operator asks whether two values are equal?", code: "", options: ["=", "==", ">", "+"], correct: 1, explanation: "Correct — = assigns a value; == compares two values." },
        { id: "quiz-inclusive", question: "If score is 50, is score >= 50 True?", code: "", options: ["Yes", "No", "Only for strings", "It causes an error"], correct: 0, explanation: "Correct — >= includes equality, so 50 meets the threshold 50." },
        { id: "quiz-always", question: "Which line always runs?", code: `if number > 5:
    print("Large")
print("Done")`, options: ["Large", "Done", "Both always run", "Neither line"], correct: 1, explanation: "Correct — Done is outside the indented if block." },
        { id: "quiz-case", question: "Does the text \"Yes\" equal \"yes\" in Python?", code: "", options: ["Yes", "No", "Only inside if", "Only for numbers"], correct: 1, explanation: "Correct — Python text comparisons are case-sensitive." },
        { id: "quiz-true-output", question: "What will this display?", code: `number = 8
if number > 5:
    print("Large")
print("Done")`, options: ["Large then Done", "Done only", "Large only", "Nothing"], correct: 0, explanation: "Correct — the condition is True, then the unindented final line also runs." },
        { id: "quiz-false-output", question: "What will this display?", code: `number = 3
if number > 5:
    print("Large")
print("Done")`, options: ["Large then Done", "Done only", "Large only", "Nothing"], correct: 1, explanation: "Correct — Large is skipped, but Done remains outside the block." }
      ]
    },
    quiz: {
      question: "Which code correctly displays a message only when score reaches 50?",
      code: "",
      options: [`if score >= 50:\n    print("Target reached")`, `if score >= 50\nprint("Target reached")`, `score = 50:\n    print("Target reached")`, `if = score >= 50`],
      correct: 0,
      explanation: "Correct — the condition has a colon, and the controlled instruction is indented."
    }
  },
  20: {
    title: "If / Else",
    stage: "Foundations",
    level: "Beginner",
    time: "~18 minutes",
    tags: ["Two-way decisions", "if / else", "Exactly one path"],
    usesInput: true,
    intro: "An if statement can open one path. Adding else gives the program a second path, so it can respond whether the condition is True or False.",
    explanation: `An <strong>if / else</strong> decision has two connected branches. Python checks the <code>if</code> condition once. When it is <code>True</code>, Python runs the indented <code>if</code> block and skips the <code>else</code> block. When it is <code>False</code>, Python skips the first block and runs the indented <code>else</code> block.<br><br>The word <code>else</code> means “otherwise”. It needs no new condition. Its colon lines up with <code>if</code>, and both possible responses are indented. Exactly one of these two branches runs—not both.`,
    concept: "if handles the True path; else handles the False path. Together they guarantee one clear response.",
    starterCode: `score = float(input("Enter your score: "))

print(f"Score: {score}")

if score >= 50:
    print("You reached the target.")
else:
    print("Keep practising. You are still learning.")

print("Score check complete.")`,
    starterInput: "75",
    expectedOutput: `Enter your score: 75
Score: 75.0
You reached the target.
Score check complete.`,
    lineByLine: [
      "input() asks the learner for a score, and float() converts the typed text into a number.",
      "score >= 50 produces either True or False. The value 50 is included because the operator is >=.",
      "When the condition is True, Python runs the indented message directly below if.",
      "When the condition is False, Python skips the first message and runs the indented else message instead.",
      "The final print() is outside both branches, so it runs after either path finishes."
    ],
    outputExplanation: "With 75, the condition score >= 50 is True, so the target message appears. Try 40 to see the else path. Try exactly 50 to confirm that the boundary belongs to the True path.",
    changeIt: `Run the starter with <code>75</code>, then replace the Program Input with <code>40</code> and run again. Notice that only one decision message appears each time.<br><br>Now try exactly <code>50</code>. Predict the path before running. Finally, change <code>&gt;=</code> to <code>&gt;</code> and test 50 again. That tiny edit moves the boundary from one path to the other.`,
    challenge: {
      title: "Simple Ticket Adviser",
      mission: "Ask for an age. Display Adult ticket when the age is 18 or more; otherwise display Junior ticket. Keep the final recommendation print outside the decision.",
      starterCode: `age = float(input("How old are you? "))

# Create a two-way decision here

print(f"Recommendation: {ticket}")`,
      starterInput: "20"
    },
    hint: "Use if age >= 18: for the first path. Give ticket one text value in that block and a different text value under else:.",
    solution: `age = float(input("How old are you? "))

if age >= 18:
    ticket = "Adult ticket"
else:
    ticket = "Junior ticket"

print(f"Recommendation: {ticket}")`,
    practiceCoach: {
      knowledgeBoundary: "Use only input(), float(), variables, strings, f-strings, comparisons, Boolean knowledge, if, else and print(). Do not use elif, nested decisions, loops or functions.",
      activities: [
        { id: "target", eyebrow: "EASY START · TEST BOTH PATHS", title: "Target Checker", mission: "Load the code, enter one score above 50 and one below 50 on separate runs, and observe the two possible messages.", starterCode: `score = float(input("Score: "))
if score >= 50:
    print("Target reached")
else:
    print("Keep practising")`, starterInput: "72", hint: "Try 72 first, then replace Program Input with 31.", checks: { mustRun: true, minimumInputLines: 1 } },
        { id: "weather", eyebrow: "TEXT DECISION · MAKE A CHOICE", title: "Coat Reminder", mission: "Change the weather answer and make both branches run on different attempts.", starterCode: `weather = input("Weather: ")
if weather == "cold":
    print("Take a warm coat")
else:
    print("A light jacket may be enough")`, starterInput: "cold", hint: "Python compares text exactly. Try cold, then sunny.", checks: { mustRun: true, minimumInputLines: 1 } },
        { id: "ticket", eyebrow: "BOUNDARY · AGE 18", title: "Ticket Type", mission: "Test an age below 18, exactly 18 and above 18.", starterCode: `age = float(input("Age: "))
if age >= 18:
    print("Adult ticket")
else:
    print("Junior ticket")`, starterInput: "18", hint: "The >= operator includes 18.", checks: { mustRun: true, minimumInputLines: 1 } },
        { id: "balance", eyebrow: "REAL-LIFE CHOICE · COMPARE NUMBERS", title: "Balance Check", mission: "Change the balance so the purchase is possible, then make it too small.", starterCode: `balance = float(input("Balance: "))
price = 12
if balance >= price:
    print("Purchase available")
else:
    print("Not enough balance")`, starterInput: "20", hint: "Try a value above 12 and another below 12.", checks: { mustRun: true, minimumInputLines: 1 } },
        { id: "answer", eyebrow: "IMPORTANT IDEA · OTHERWISE", title: "Yes or Something Else", mission: "Run with yes, then with a different answer. Notice that else means every result where the condition is False.", starterCode: `answer = input("Type yes to continue: ")
if answer == "yes":
    print("Continuing")
else:
    print("Different answer received")`, starterInput: "yes", hint: "Try no, maybe or YES. Each makes answer == \"yes\" False.", checks: { mustRun: true, minimumInputLines: 1 } },
        { id: "sharing", eyebrow: "REUSE ARITHMETIC · TWO PATHS", title: "Even Sharing", mission: "Test whether some items can be shared evenly between a non-zero number of people.", starterCode: `items = float(input("Items: "))
people = float(input("People: "))
if people != 0 and items % people == 0:
    print("Shares evenly")
else:
    print("Does not share evenly")`, starterInput: `12
3`, hint: "Try 12 and 3, then 10 and 3. The first condition also protects against division by zero.", checks: { mustRun: true, minimumInputLines: 2 } },
        { id: "repair", eyebrow: "FIX IT · READ THE ERROR", title: "Repair the Else", mission: "Fix the missing colon and indentation, then run both paths.", starterCode: `temperature = float(input("Temperature: "))
if temperature >= 20:
print("Warm")
else
    print("Cool")`, starterInput: "24", hint: "Indent the first message and add : after else.", checks: { mustChange: true, mustRun: true, minimumInputLines: 1 } }
      ]
    },
    freshPracticeGenerator: {
      templates: [
        { id: "fresh-score", eyebrow: "FRESH PRACTICE · SCORE PATH", title: "Fresh Score Decision", mission: "Predict which score message will appear, then run it.", code: `score = float(input("Score: "))
if score >= {{target}}:
    print("Target reached")
else:
    print("Keep learning")`, input: "{{score}}", hint: "Compare the entered score with the target.", solution: "Run once on each side of the target.", values: { target: [40, 50, 60, 70], score: [25, 39, 40, 49, 50, 61, 75, 88] } },
        { id: "fresh-temp", eyebrow: "FRESH PRACTICE · TEMPERATURE PATH", title: "Fresh Temperature Choice", mission: "Use the temperature to choose one of two clothing messages.", code: `temperature = float(input("Temperature: "))
if temperature >= {{limit}}:
    print("Light clothing")
else:
    print("Warm clothing")`, input: "{{temperature}}", hint: "Exactly the limit follows the first path.", solution: "Test one value above and one below the limit.", values: { limit: [15, 18, 20, 22], temperature: [8, 14, 15, 17, 20, 23, 28] } },
        { id: "fresh-balance", eyebrow: "FRESH PRACTICE · PURCHASE PATH", title: "Fresh Purchase Check", mission: "Decide whether the available money is enough.", code: `money = float(input("Money: "))
price = {{price}}
if money >= price:
    print("Enough money")
else:
    print("Save a little more")`, input: "{{money}}", hint: "Compare money with price.", solution: "The first path includes an exact match.", values: { price: [5, 8, 12, 15, 20], money: [3, 5, 7, 10, 12, 18, 25] } },
        { id: "fresh-word", eyebrow: "FRESH PRACTICE · TEXT PATH", title: "Fresh Word Check", mission: "Type the requested word exactly, then try a different answer.", code: `answer = input("Type {{word}}: ")
if answer == "{{word}}":
    print("Exact match")
else:
    print("Different answer")`, input: "{{word}}", hint: "Text comparison pays attention to spelling and capital letters.", solution: "An exact match uses the first path; every other answer uses else.", values: { word: ["ready", "python", "start", "learn", "yes"] } },
        { id: "fresh-access", eyebrow: "FRESH PRACTICE · ACCESS PATH", title: "Fresh Access Gate", mission: "Check whether the entered level unlocks access.", code: `level = float(input("Level: "))
if level >= {{required}}:
    print("Access unlocked")
else:
    print("Access locked")`, input: "{{level}}", hint: "The required level itself is accepted.", solution: "Test the boundary and one lower value.", values: { required: [2, 3, 4, 5, 6], level: [1, 2, 3, 4, 5, 7] } },
        { id: "fresh-sign", eyebrow: "FRESH PRACTICE · NUMBER PATH", title: "Fresh Number Sign", mission: "Choose the correct path for a number that is zero or greater versus one below zero.", code: `number = float(input("Number: "))
if number >= 0:
    print("Zero or positive")
else:
    print("Negative")`, input: "{{number}}", hint: "Zero belongs to the first branch.", solution: "Try zero, a positive number and a negative number.", values: { number: [-12, -3, -1, 0, 2, 7, 15] } }
      ]
    },
    challengeGenerator: {
      activities: [
        { id: "ticket-adviser", title: "Ticket Adviser", mission: "Set ticket to Adult ticket for ages 18 or more, otherwise Junior ticket, then print the recommendation.", starterCode: `age = float(input("Age: "))

# Build the two paths

print(f"Recommendation: {ticket}")`, starterInput: "21", hint: "Assign ticket inside both branches.", solution: `age = float(input("Age: "))
if age >= 18:
    ticket = "Adult ticket"
else:
    ticket = "Junior ticket"
print(f"Recommendation: {ticket}")` },
        { id: "clothing", title: "Clothing Suggestion", mission: "Suggest a light jacket at 18 or above and a warm coat otherwise.", starterCode: `temperature = float(input("Temperature: "))

# Add one if / else decision`, starterInput: "14", hint: "Compare temperature >= 18.", solution: `temperature = float(input("Temperature: "))
if temperature >= 18:
    print("Choose a light jacket")
else:
    print("Choose a warm coat")` },
        { id: "delivery", title: "Delivery Decision", mission: "Give free delivery for totals of 50 or more; otherwise show the delivery charge message.", starterCode: `total = float(input("Order total: "))

# Add the two delivery paths`, starterInput: "55", hint: "Use total >= 50.", solution: `total = float(input("Order total: "))
if total >= 50:
    print("Free delivery")
else:
    print("Delivery charge applies")` },
        { id: "game", title: "Game Access", mission: "Unlock the next world at level 5 or above; otherwise ask the player to keep playing.", starterCode: `level = float(input("Player level: "))

# Add the decision`, starterInput: "4", hint: "Use level >= 5.", solution: `level = float(input("Player level: "))
if level >= 5:
    print("Next world unlocked")
else:
    print("Keep playing to unlock it")` },
        { id: "budget", title: "Budget Result", mission: "Compare a budget and cost, then report whether the plan is affordable.", starterCode: `budget = float(input("Budget: "))
cost = float(input("Cost: "))

# Add the decision`, starterInput: `30
25`, hint: "The plan is affordable when budget >= cost.", solution: `budget = float(input("Budget: "))
cost = float(input("Cost: "))
if budget >= cost:
    print("Plan is affordable")
else:
    print("Plan costs too much")` },
        { id: "sign", title: "Number Sign Reporter", mission: "Report Zero or positive for numbers at least zero and Negative otherwise.", starterCode: `number = float(input("Number: "))

# Add both paths`, starterInput: "-4", hint: "Use number >= 0 so zero has a clear home.", solution: `number = float(input("Number: "))
if number >= 0:
    print("Zero or positive")
else:
    print("Negative")` }
      ]
    },
    quizGenerator: {
      activities: [
        { id: "purpose", question: "What does else provide?", code: "", options: ["The path used when the if condition is False", "A second condition", "A loop", "A comment"], correct: 0, explanation: "Correct — else means otherwise and handles the False path." },
        { id: "count", question: "How many branches run in one if / else decision?", code: "", options: ["Exactly one", "Always both", "Neither", "Any number"], correct: 0, explanation: "Correct — the branches are connected, so exactly one runs." },
        { id: "condition", question: "Does else need its own condition?", code: "", options: ["No", "Yes", "Only for text", "Only for numbers"], correct: 0, explanation: "Correct — else automatically handles every case where the if condition is False." },
        { id: "colon", question: "Which line is written correctly?", code: "", options: ["else:", "else", "else condition:", "else ="], correct: 0, explanation: "Correct — else is followed directly by a colon." },
        { id: "true", question: "What prints when score is 70?", code: `if score >= 50:
    print("Reached")
else:
    print("Keep going")`, options: ["Reached", "Keep going", "Both", "Nothing"], correct: 0, explanation: "Correct — 70 >= 50 is True." },
        { id: "false", question: "What prints when score is 40?", code: `if score >= 50:
    print("Reached")
else:
    print("Keep going")`, options: ["Reached", "Keep going", "Both", "An error"], correct: 1, explanation: "Correct — the False result sends Python to else." },
        { id: "boundary", question: "What prints when score is exactly 50?", code: `if score >= 50:
    print("Reached")
else:
    print("Keep going")`, options: ["Reached", "Keep going", "Both", "Nothing"], correct: 0, explanation: "Correct — >= includes equality." },
        { id: "outside", question: "Which message always prints?", code: `if age >= 18:
    print("Adult")
else:
    print("Junior")
print("Done")`, options: ["Adult", "Junior", "Done", "All three"], correct: 2, explanation: "Correct — Done is outside both indented branches." },
        { id: "alignment", question: "Where should else line up?", code: "", options: ["With its if", "Inside the if message", "At the end of print()", "Alignment never matters"], correct: 0, explanation: "Correct — if and else align, while their controlled instructions are indented." },
        { id: "meaning", question: "If answer is \"maybe\", which path runs?", code: `if answer == "yes":
    print("Continuing")
else:
    print("Different answer")`, options: ["Continuing", "Different answer", "Both", "Python guesses"], correct: 1, explanation: "Correct — else means any result that makes the condition False, not only the word no." },
        { id: "difference", question: "How is if / else different from two independent if statements?", code: "", options: ["Its branches are connected and only one runs", "It cannot use comparisons", "It always runs both blocks", "There is no difference"], correct: 0, explanation: "Correct — separate if statements are checked independently; if / else chooses one connected path." },
        { id: "variable", question: "After this code, what is ticket when age is 12?", code: `if age >= 18:
    ticket = "Adult"
else:
    ticket = "Junior"`, options: ["Adult", "Junior", "12", "Undefined"], correct: 1, explanation: "Correct — the False branch assigns Junior." }
      ]
    },
    quiz: {
      question: "Which structure gives a message for both possible results of a condition?",
      code: "",
      options: [`if ready:
    print("Go")
else:
    print("Wait")`, `if ready
print("Go")`, `else ready:
    print("Wait")`, `if ready:
else print("Wait")`],
      correct: 0,
      explanation: "Correct — if and else align, each has a colon, and each controlled instruction is indented."
    }
  },
  21: {
    title: "Elif",
    stage: "Foundations",
    level: "Beginner",
    time: "~20 minutes",
    tags: ["Multiple conditions", "elif", "First match wins"],
    usesInput: true,
    intro: "Some decisions need more than two paths. Today you will connect several conditions and let Python choose the first one that matches.",
    explanation: `An <strong>if / elif / else</strong> chain gives Python several connected paths. Python checks them from top to bottom. The first condition that becomes <code>True</code> runs its indented block, and Python skips the rest of that chain.<br><br>The word <code>elif</code> means “otherwise, if this condition is True”. You may use more than one <code>elif</code>, but every chain begins with <code>if</code>. The final <code>else</code> needs no condition because it handles anything not already matched.`,
    concept: "Python checks a connected decision chain from top to bottom. The first True branch wins, so condition order matters.",
    starterCode: `score = float(input("Enter your score: "))

print(f"Score: {score}")

if score >= 80:
    print("Result: Excellent")
elif score >= 50:
    print("Result: Passed")
else:
    print("Result: Keep practising")

print("Result check complete.")`,
    starterInput: "86",
    expectedOutput: `Enter your score: 86
Score: 86.0
Result: Excellent
Result check complete.`,
    lineByLine: [
      "input() asks for a score, and float() converts the typed text into a number.",
      "Python first checks score >= 80. When it is True, Excellent runs and the rest of the chain is skipped.",
      "The elif condition is checked only when the earlier if condition was False.",
      "The final else handles every score that matched neither earlier condition.",
      "The last print() is outside the chain, so it runs after whichever branch Python chooses."
    ],
    outputExplanation: "With 86, both score >= 80 and score >= 50 could be true, but only Excellent appears. Python stops at the first True branch in this connected chain.",
    changeIt: `Run the starter with <code>86</code>, <code>65</code>, and <code>32</code> to reach all three paths. Predict each result first.<br><br>Then test the exact boundaries <code>80</code>, <code>50</code>, and <code>49</code>. Finally, swap the two conditions so <code>score &gt;= 50</code> comes first. Run 86 again and explain why the result becomes Passed even though the code has no syntax error.`,
    challenge: {
      title: "The Adventure Guide",
      mission: "Use experience points to choose one of four locations. Begin with the highest threshold and keep the final print() outside the decision chain.",
      starterCode: `points = float(input("Experience points: "))

# Build the decision chain here

print(f"Next location: {location}")`,
      starterInput: "120"
    },
    hint: "Check 100 first, then 60, then 25. Assign location in every branch so the final print() always has a value to display.",
    solution: `points = float(input("Experience points: "))

if points >= 100:
    location = "Dragon Mountain"
elif points >= 60:
    location = "Crystal Forest"
elif points >= 25:
    location = "Green Valley"
else:
    location = "Training Camp"

print(f"Next location: {location}")`,
    practiceCoach: {
      knowledgeBoundary: "Use only knowledge from Lessons 1–21: input, conversion, values, strings, arithmetic, comparisons, logical operators, if, elif, else and print. Do not use nested decisions, loops, collections or functions.",
      activities: [
        { id: "score-paths", stage: "EASY START · REACH THREE PATHS", title: "Three Score Paths", mission: "Run 86, 65 and 32 on separate attempts and observe that exactly one result appears each time.", starterCode: `score = float(input("Score: "))
if score >= 80:
    print("Excellent")
elif score >= 50:
    print("Passed")
else:
    print("Keep practising")`, starterInput: "86", hint: "Use one value from each range: 80+, 50–79, and below 50.", check: { mustRun: true, minimumInputLines: 1 } },
        { id: "weather", stage: "BOUNDARIES · 25 AND 15", title: "Weather Advice", mission: "Test 25, 15 and 14 and notice where each exact boundary belongs.", starterCode: `temperature = float(input("Temperature: "))
if temperature >= 25:
    print("Wear light clothing")
elif temperature >= 15:
    print("Take a jacket")
else:
    print("Wear a warm coat")`, starterInput: "25", hint: "The >= operator includes the threshold itself.", check: { mustRun: true, minimumInputLines: 1 } },
        { id: "ticket", stage: "REAL-LIFE RANGES · HIGHEST FIRST", title: "Ticket Category", mission: "Reach Senior, Adult and Junior with different ages, including exact boundaries.", starterCode: `age = float(input("Age: "))
if age >= 65:
    print("Senior ticket")
elif age >= 18:
    print("Adult ticket")
else:
    print("Junior ticket")`, starterInput: "70", hint: "Try 65, 18 and 17 after the first run.", check: { mustRun: true, minimumInputLines: 1 } },
        { id: "delivery", stage: "TEXT CHOICES · HONEST ELSE", title: "Delivery Speed", mission: "Try fast, normal, economy and one unexpected word. Notice what else really means.", starterCode: `choice = input("Choose fast, normal, or economy: ")
if choice == "fast":
    print("Express delivery")
elif choice == "normal":
    print("Standard delivery")
else:
    print("Economy delivery")`, starterInput: "fast", hint: "Any answer other than fast or normal reaches else—even a misspelling.", check: { mustRun: true, minimumInputLines: 1 } },
        { id: "sign", stage: "EXACT MATCH · GIVE ZERO A HOME", title: "Number Description", mission: "Run a positive number, zero and a negative number to reach every branch.", starterCode: `number = float(input("Number: "))
if number > 0:
    print("Positive")
elif number == 0:
    print("Zero")
else:
    print("Negative")`, starterInput: "0", hint: "Zero is neither greater than zero nor less than zero.", check: { mustRun: true, minimumInputLines: 1 } },
        { id: "order", stage: "LOGIC BUG · CODE CAN RUN AND BE WRONG", title: "Order Matters", mission: "Reorder the conditions so 120 displays Gold instead of Silver.", starterCode: `points = float(input("Points: "))
if points >= 50:
    print("Silver")
elif points >= 100:
    print("Gold")
else:
    print("Keep collecting")`, starterInput: "120", hint: "Move the more specific, higher threshold above the broader threshold.", check: { mustChange: true, mustRun: true, minimumInputLines: 1 } },
        { id: "repair", stage: "FIX IT · COLONS AND INDENTATION", title: "Repair the Chain", mission: "Repair all missing colons and indentation, then run each score path.", starterCode: `score = float(input("Score: "))
if score >= 80:
print("Excellent")
elif score >= 50
    print("Passed")
else
    print("Keep practising")`, starterInput: "65", hint: "Indent the first message and add : after the elif and else lines.", check: { mustChange: true, mustRun: true, minimumInputLines: 1 } }
      ]
    },
    freshPracticeGenerator: {
      templates: [
        { id: "fresh-score-bands", skill: "Score Bands", title: "Fresh Score Categories", mission: "Predict the first matching score category, then run the program.", starterCode: `score = float(input("Score: "))
if score >= {{high}}:
    print("High result")
elif score >= {{middle}}:
    print("Middle result")
else:
    print("Building result")`, starterInput: "{{score}}", hint: "Check the higher threshold first, then the middle threshold.", solution: "Test one value in each of the three ranges.", success: "You completed a fresh score-band decision.", check: { mustChange: true, minimumInputLines: 1 }, values: { high: [80, 85, 90], middle: [40, 50, 60], score: [25, 45, 55, 65, 82, 91, 98] } },
        { id: "fresh-temperature", skill: "Weather Bands", title: "Fresh Weather Guide", mission: "Use the temperature to select one of three clothing messages.", starterCode: `temperature = float(input("Temperature: "))
if temperature >= {{warm}}:
    print("Light clothing")
elif temperature >= {{cool}}:
    print("Take a jacket")
else:
    print("Warm coat")`, starterInput: "{{temperature}}", hint: "The warm threshold must stay above the cool threshold.", solution: "Try each boundary and a value below both.", success: "You completed a fresh weather-band decision.", check: { mustChange: true, minimumInputLines: 1 }, values: { warm: [24, 25, 28], cool: [10, 12, 15], temperature: [5, 12, 17, 24, 27, 31] } },
        { id: "fresh-age", skill: "Age Bands", title: "Fresh Ticket Guide", mission: "Choose Senior, Adult or Junior from the entered age.", starterCode: `age = float(input("Age: "))
if age >= {{senior}}:
    print("Senior ticket")
elif age >= {{adult}}:
    print("Adult ticket")
else:
    print("Junior ticket")`, starterInput: "{{age}}", hint: "Highest age threshold comes first.", solution: "Test the two boundaries and one younger age.", success: "You completed a fresh age-band decision.", check: { mustChange: true, minimumInputLines: 1 }, values: { senior: [60, 65, 70], adult: [16, 18, 21], age: [10, 17, 22, 60, 67, 75] } },
        { id: "fresh-membership", skill: "Membership Levels", title: "Fresh Member Level", mission: "Use points to display one membership level.", starterCode: `points = float(input("Member points: "))
if points >= {{gold}}:
    print("Gold member")
elif points >= {{silver}}:
    print("Silver member")
else:
    print("Starter member")`, starterInput: "{{points}}", hint: "Gold must be checked before Silver.", solution: "Exactly the threshold belongs to that level.", success: "You completed a fresh membership decision.", check: { mustChange: true, minimumInputLines: 1 }, values: { gold: [100, 120, 150], silver: [40, 50, 75], points: [20, 50, 80, 110, 140, 180] } },
        { id: "fresh-delivery", skill: "Delivery Bands", title: "Fresh Delivery Cost", mission: "Select free, reduced or standard delivery from the order total.", starterCode: `total = float(input("Order total: "))
if total >= {{free}}:
    print("Free delivery")
elif total >= {{reduced}}:
    print("Reduced delivery")
else:
    print("Standard delivery")`, starterInput: "{{total}}", hint: "Check the free-delivery threshold first.", solution: "Run one total in each band.", success: "You completed a fresh delivery-band decision.", check: { mustChange: true, minimumInputLines: 1 }, values: { free: [50, 60, 75], reduced: [20, 25, 30], total: [10, 25, 40, 55, 70, 90] } },
        { id: "fresh-number", skill: "Number Classification", title: "Fresh Number Description", mission: "Classify a number as above, equal to or below a chosen target.", starterCode: `number = float(input("Number: "))
target = {{target}}
if number > target:
    print("Above target")
elif number == target:
    print("Exactly on target")
else:
    print("Below target")`, starterInput: "{{number}}", hint: "Equality needs its own elif branch.", solution: "Test the target itself plus one value on either side.", success: "You completed a fresh number-classification decision.", check: { mustChange: true, minimumInputLines: 1 }, values: { target: [0, 5, 10, 20], number: [-4, 0, 4, 5, 9, 10, 15, 25] } }
      ]
    },
    challengeGenerator: {
      activities: [
        { id: "adventure", title: "Adventure Guide", mission: "Assign Dragon Mountain, Crystal Forest, Green Valley or Training Camp using thresholds 100, 60 and 25.", starterCode: `points = float(input("Experience points: "))

# Create the four paths

print(f"Next location: {location}")`, starterInput: "120", hint: "Begin with points >= 100 and move downward.", solution: `points = float(input("Experience points: "))
if points >= 100:
    location = "Dragon Mountain"
elif points >= 60:
    location = "Crystal Forest"
elif points >= 25:
    location = "Green Valley"
else:
    location = "Training Camp"
print(f"Next location: {location}")` },
        { id: "grade", title: "Grade Band", mission: "Display A for 80+, B for 70+, C for 60+, and Keep learning otherwise.", starterCode: `score = float(input("Score: "))

# Create the grade chain`, starterInput: "74", hint: "Start with the highest threshold.", solution: `score = float(input("Score: "))
if score >= 80:
    print("Grade A")
elif score >= 70:
    print("Grade B")
elif score >= 60:
    print("Grade C")
else:
    print("Keep learning")` },
        { id: "cinema", title: "Cinema Ticket", mission: "Select Senior, Adult or Junior ticket from age, then print the selected ticket.", starterCode: `age = float(input("Age: "))

# Assign ticket here

print(ticket)`, starterInput: "30", hint: "Check senior age before adult age.", solution: `age = float(input("Age: "))
if age >= 65:
    ticket = "Senior ticket"
elif age >= 18:
    ticket = "Adult ticket"
else:
    ticket = "Junior ticket"
print(ticket)` },
        { id: "clothing", title: "Clothing Adviser", mission: "Recommend light clothing at 25+, a jacket at 15+, and a warm coat otherwise.", starterCode: `temperature = float(input("Temperature: "))

# Add the decision chain`, starterInput: "16", hint: "Check 25 before 15.", solution: `temperature = float(input("Temperature: "))
if temperature >= 25:
    print("Light clothing")
elif temperature >= 15:
    print("Take a jacket")
else:
    print("Warm coat")` },
        { id: "delivery-priority", title: "Delivery Priority", mission: "Map urgent to Same-day, normal to Standard, and every remaining answer to Economy.", starterCode: `priority = input("Priority: ")

# Choose delivery`, starterInput: "urgent", hint: "Compare exact text in the if and elif conditions.", solution: `priority = input("Priority: ")
if priority == "urgent":
    print("Same-day delivery")
elif priority == "normal":
    print("Standard delivery")
else:
    print("Economy delivery")` },
        { id: "rank", title: "Game Rank Reporter", mission: "Display Master for 100+, Explorer for 50+, Beginner for 10+, and New Player otherwise.", starterCode: `points = float(input("Game points: "))

# Report the rank`, starterInput: "55", hint: "Order thresholds 100, 50, 10.", solution: `points = float(input("Game points: "))
if points >= 100:
    print("Master")
elif points >= 50:
    print("Explorer")
elif points >= 10:
    print("Beginner")
else:
    print("New Player")` }
      ]
    },
    quizGenerator: {
      activities: [
        { id: "meaning", question: "What does elif mean in a decision chain?", code: "", options: ["Otherwise, check another condition", "Repeat the program", "End Python", "Create a variable"], correct: 0, explanation: "Correct — elif checks another condition only after earlier conditions were False." },
        { id: "first-match", question: "What happens after the first True branch runs?", code: "", options: ["Python skips the remaining chain", "Every later branch runs", "The program restarts", "Python asks again"], correct: 0, explanation: "Correct — the first matching branch wins." },
        { id: "output-90", question: "What does this display when score is 90?", code: `if score >= 80:
    print("Excellent")
elif score >= 50:
    print("Passed")
else:
    print("Keep practising")`, options: ["Excellent", "Passed", "Both Excellent and Passed", "Nothing"], correct: 0, explanation: "Correct — Python stops after the first True branch." },
        { id: "output-65", question: "What does the same chain display when score is 65?", code: "", options: ["Excellent", "Passed", "Keep practising", "An error"], correct: 1, explanation: "Correct — 65 misses 80 but reaches 50." },
        { id: "boundary-50", question: "Which branch receives exactly 50?", code: `if score >= 80:
    print("Excellent")
elif score >= 50:
    print("Passed")
else:
    print("Keep practising")`, options: ["Excellent", "Passed", "Keep practising", "None"], correct: 1, explanation: "Correct — >= includes equality." },
        { id: "needs-if", question: "Can elif begin a decision chain without if?", code: "", options: ["No", "Yes", "Only with numbers", "Only with input"], correct: 0, explanation: "Correct — every elif belongs to an earlier if." },
        { id: "many", question: "Can one chain contain more than one elif?", code: "", options: ["Yes", "No", "Only in comments", "Only after else"], correct: 0, explanation: "Correct — use as many sensible intermediate paths as the decision needs." },
        { id: "else-condition", question: "Does else need its own condition?", code: "", options: ["No", "Yes", "Only for text", "Only after two elif lines"], correct: 0, explanation: "Correct — else handles everything still unmatched." },
        { id: "alignment", question: "Where should elif and else line up?", code: "", options: ["With their connected if", "Inside the previous print", "Anywhere", "After the program ends"], correct: 0, explanation: "Correct — the branch keywords align; their controlled instructions are indented." },
        { id: "wrong-order", question: "Why does 120 display Silver here?", code: `if points >= 50:
    print("Silver")
elif points >= 100:
    print("Gold")`, options: ["The broad 50+ condition matches first", "120 is below 100", "elif never runs", "Python cannot compare numbers"], correct: 0, explanation: "Correct — order is a logic issue even though the code runs." },
        { id: "independent", question: "How is a chain different from independent if statements?", code: "", options: ["A chain runs only its first matching branch", "A chain runs every matching branch", "A chain cannot compare values", "There is no difference"], correct: 0, explanation: "Correct — separate if statements are each checked independently." },
        { id: "zero", question: "What is displayed when number is 0?", code: `if number > 0:
    print("Positive")
elif number == 0:
    print("Zero")
else:
    print("Negative")`, options: ["Positive", "Zero", "Negative", "Nothing"], correct: 1, explanation: "Correct — equality gives zero its own branch." }
      ]
    },
    quiz: {
      question: "Which chain correctly checks the highest score range first?",
      code: "",
      options: [`if score >= 80:
    print("Excellent")
elif score >= 50:
    print("Passed")
else:
    print("Keep practising")`, `elif score >= 80:
    print("Excellent")
else:
    print("Passed")`, `if score >= 50:
    print("Passed")
elif score >= 80:
    print("Excellent")`, `if score >= 80
print("Excellent")`],
      correct: 0,
      explanation: "Correct — the chain begins with if, checks the highest threshold first, uses colons, and indents each branch body."
    }
  },
  22: {
    title: "Nested Conditions",
    stage: "Foundations",
    level: "Beginner",
    time: "20 minutes",
    tags: ["Decisions inside decisions", "Nested if", "Indentation"],
    usesInput: true,
    intro: "Some decisions only make sense after an earlier decision succeeds. Today you will ask one clear question inside another.",
    explanation: `A <strong>nested condition</strong> is an <code>if</code> statement inside another decision. Python checks the outer condition first. Only when that path runs can Python reach the inner condition.<br><br>Indentation shows the relationship. The inner <code>if</code> is moved farther to the right, and its instructions move farther again. This lets a program make a second decision only when that second question is relevant.`,
    concept: "A nested condition asks a second question inside the path created by the first question. If the outer path does not run, the inner question is not checked.",
    starterCode: `has_ticket = input("Do you have a ticket? yes/no: ")
age = int(input("What is your age? "))

if has_ticket == "yes":
    print("Ticket accepted.")

    if age >= 12:
        print("You may enter the adventure ride.")
    else:
        print("You need an adult with you.")
else:
    print("Please get a ticket first.")

print("Entrance check complete.")`,
    starterInput: `yes
14`,
    expectedOutput: `Do you have a ticket? yes/no: yes
What is your age? 14
Ticket accepted.
You may enter the adventure ride.
Entrance check complete.`,
    lineByLine: [
      "The two input() calls collect a ticket answer and an age. int() converts the typed age into a number.",
      "The outer if asks the first question: is has_ticket equal to yes?",
      "Only inside that True path does Python reach the age decision. The extra indentation shows that the age check belongs inside the ticket check.",
      "The inner else belongs to if age >= 12. It handles a ticket holder who is younger than 12.",
      "The outer else lines up with the first if. It handles anyone without a ticket, and the final print() runs after every path."
    ],
    outputExplanation: "With yes and 14, the outer ticket condition is True, so Python enters that block and checks age. The age condition is also True, so the ride is approved. If the ticket answer is no, Python never reaches the age decision.",
    changeIt: `Run the starter with <code>yes</code> and <code>14</code>. Next, keep the ticket but change the age to <code>10</code>. Predict which two decision messages will appear.<br><br>Then use <code>no</code> and <code>14</code>. Notice that Python asks for both inputs first, but the age <em>condition</em> is not checked after the outer ticket condition fails. Finally, test the exact boundary age <code>12</code>.`,
    challenge: {
      title: "Adventure Camp Check-In",
      mission: "Approve check-in only through the correct path. A registered guest under 16 needs permission; a registered guest aged 16 or over can enter without that extra check.",
      starterCode: `registered = input("Registered? yes/no: ")
age = int(input("Age: "))
has_permission = input("Permission? yes/no: ")

# Build the nested check-in decision here`,
      starterInput: `yes
13
yes`
    },
    hint: "Begin with registered == \"yes\". Inside that path, ask whether age < 16. Only inside the younger path do you need to check has_permission.",
    solution: `registered = input("Registered? yes/no: ")
age = int(input("Age: "))
has_permission = input("Permission? yes/no: ")

if registered == "yes":
    print("Registration found.")

    if age < 16:
        if has_permission == "yes":
            print("Check-in approved.")
        else:
            print("Permission is required.")
    else:
        print("Check-in approved.")
else:
    print("Please register first.")`,
    practiceCoach: {
      knowledgeBoundary: "Use only knowledge from Lessons 1–22: input, conversion, values, strings, arithmetic, comparisons, logical operators, if, elif, else, nested decisions and print. Do not use loops, collections or functions.",
      activities: [
        { id: "library-computer", stage: "EASY START · SECOND QUESTION", title: "Library Computer", mission: "Try every path: library closed, library open with a computer, and library open without one.", starterCode: `library_open = input("Library open? yes/no: ")
computer_free = input("Computer free? yes/no: ")

if library_open == "yes":
    print("You may enter.")
    if computer_free == "yes":
        print("A computer is ready.")
    else:
        print("Please wait for a computer.")
else:
    print("Come back when the library opens.")`, starterInput: `yes
yes`, hint: "The computer question is meaningful only inside the open-library path.", check: { mustRun: true, minimumInputLines: 2 } },
        { id: "game-level", stage: "TWO GATES · LOGIN THEN LEVEL", title: "Game Level", mission: "Reach the locked, ready and sign-in paths by changing the two answers.", starterCode: `logged_in = input("Logged in? yes/no: ")
level = int(input("Player level: "))

if logged_in == "yes":
    if level >= 5:
        print("New mission unlocked.")
    else:
        print("Reach level 5 first.")
else:
    print("Please sign in.")`, starterInput: `yes
7`, hint: "When logged_in is no, the level condition is not reached.", check: { mustRun: true, minimumInputLines: 2 } },
        { id: "cinema", stage: "OUTER AND INNER ELSE · FOLLOW INDENTATION", title: "Cinema Entry", mission: "Run a missing ticket, a correct ticket, and a ticket for the wrong screen.", starterCode: `ticket_valid = input("Valid ticket? yes/no: ")
screen = int(input("Screen number: "))

if ticket_valid == "yes":
    print("Ticket accepted.")
    if screen == 3:
        print("This is your screen.")
    else:
        print("Please check your screen number.")
else:
    print("Ticket not accepted.")`, starterInput: `yes
3`, hint: "The indented else beside screen == 3 belongs to the screen decision.", check: { mustRun: true, minimumInputLines: 2 } },
        { id: "weather-trip", stage: "BOOLEANS · SAFE THEN READY", title: "Weather Trip", mission: "Change the Boolean values to explore all three messages.", starterCode: `weather_safe = True
transport_ready = False

if weather_safe:
    print("The weather is safe.")
    if transport_ready:
        print("The trip can begin.")
    else:
        print("Waiting for transport.")
else:
    print("The trip is postponed.")`, starterInput: "", hint: "Change only True and False. Keep the nested structure intact.", check: { mustChange: true, mustRun: true } },
        { id: "boundary", stage: "BOUNDARY · EXACTLY TWELVE", title: "Ride Boundary", mission: "Test ages 11 and 12 with a valid ticket, then test no ticket. Explain why 12 is approved.", starterCode: `has_ticket = input("Ticket? yes/no: ")
age = int(input("Age: "))

if has_ticket == "yes":
    if age >= 12:
        print("Ride approved.")
    else:
        print("Adult needed.")
else:
    print("Ticket needed.")`, starterInput: `yes
12`, hint: ">= includes the boundary itself.", check: { mustRun: true, minimumInputLines: 2 } },
        { id: "repair", stage: "FIX IT · INDENTATION TELLS THE STORY", title: "Repair the Nest", mission: "Repair the indentation so the stock check happens only when the shop is open.", starterCode: `shop_open = True
in_stock = True

if shop_open:
print("Shop is open.")
if in_stock:
print("Item available.")
else:
print("Shop is closed.")`, starterInput: "", hint: "The stock if belongs inside shop_open. Its print moves one more level right. Add a separate inner else if you want an out-of-stock message.", check: { mustChange: true, mustRun: true } },
        { id: "and-or-nested", stage: "CHOOSE CLEARLY · NESTING HAS A PURPOSE", title: "Member Discount", mission: "Keep nesting because the program should first confirm membership, then give a separate points message.", starterCode: `member = input("Member? yes/no: ")
points = int(input("Points: "))

if member == "yes":
    print("Membership confirmed.")
    if points >= 100:
        print("Discount unlocked.")
    else:
        print("Keep collecting points.")
else:
    print("Join to collect points.")`, starterInput: `yes
120`, hint: "The separate membership message is one reason this nested structure is easy to follow.", check: { mustRun: true, minimumInputLines: 2 } }
      ]
    },
    freshPracticeGenerator: {
      templates: [
        { id: "fresh-library", skill: "Relevant Second Decisions", title: "Fresh Library Check", mission: "Follow the outer opening decision, then the inner resource decision.", starterCode: `open_now = input("{{place}} open? yes/no: ")
resource_ready = input("{{resource}} ready? yes/no: ")
if open_now == "yes":
    print("You may enter.")
    if resource_ready == "yes":
        print("{{resource}} is ready.")
    else:
        print("Please wait for {{resource}}.")
else:
    print("{{place}} is closed.")`, starterInput: `{{outer}}
{{inner}}`, hint: "The resource check is nested because it matters only when the place is open.", solution: "Run yes/yes, yes/no and no/no to observe every path.", success: "You followed both levels of a fresh place decision.", check: { mustChange: true, minimumInputLines: 2 }, values: { place: ["Library", "Study room", "Learning lab", "Community centre"], resource: ["Computer", "Desk", "Projector", "Practice room"], outer: ["yes", "no"], inner: ["yes", "no"] } },
        { id: "fresh-level", skill: "Two Gates", title: "Fresh Access Check", mission: "Pass an outer access gate before Python checks a fresh number boundary.", starterCode: `access = input("Access approved? yes/no: ")
level = int(input("Level: "))
if access == "yes":
    if level >= {{required}}:
        print("{{success}}")
    else:
        print("Reach level {{required}} first.")
else:
    print("Access is required.")`, starterInput: `{{access}}
{{level}}`, hint: "The numeric check is reached only inside the approved-access path.", solution: "Test the boundary itself, one value below it, and a no-access path.", success: "You completed a fresh two-gate decision.", check: { mustChange: true, minimumInputLines: 2 }, values: { required: [3, 5, 8, 10], success: ["Mission unlocked.", "Room unlocked.", "Challenge ready.", "Next stage ready."], access: ["yes", "no"], level: [2, 3, 4, 5, 7, 8, 10, 12] } },
        { id: "fresh-booking", skill: "Text Inside Text", title: "Fresh Booking Check", mission: "Confirm the booking before checking the selected place.", starterCode: `booked = input("Booking found? yes/no: ")
choice = input("Chosen {{kind}}: ")
if booked == "yes":
    print("Booking found.")
    if choice == "{{correct}}":
        print("Correct {{kind}} selected.")
    else:
        print("Please check your {{kind}}.")
else:
    print("Make a booking first.")`, starterInput: `{{booked}}
{{choice}}`, hint: "Exact text comparisons are case-sensitive.", solution: "Test the correct choice, a different choice, and no booking.", success: "You completed a fresh nested text decision.", check: { mustChange: true, minimumInputLines: 2 }, values: { kind: ["room", "desk", "screen", "session"], correct: ["A", "B", "3", "morning"], booked: ["yes", "no"], choice: ["A", "B", "3", "4", "morning", "evening"] } },
        { id: "fresh-weather", skill: "Boolean Paths", title: "Fresh Readiness Check", mission: "Change two Boolean values and predict which fresh readiness message appears.", starterCode: `first_ready = {{first}}
second_ready = {{second}}
if first_ready:
    print("First check passed.")
    if second_ready:
        print("{{ready}}")
    else:
        print("One more thing is needed.")
else:
        print("The first check must pass.")`, starterInput: "", hint: "The second Boolean is checked only inside the True outer path.", solution: "Try True/True, True/False and False/True.", success: "You completed a fresh Boolean nest.", check: { mustChange: true }, values: { first: ["True", "False"], second: ["True", "False"], ready: ["Everything is ready.", "The activity can begin.", "Both checks passed.", "Ready to continue."] } },
        { id: "fresh-age", skill: "Boundary Inside Permission", title: "Fresh Age Check", mission: "Confirm permission before checking a generated age boundary.", starterCode: `permission = input("Permission received? yes/no: ")
age = int(input("Age: "))
if permission == "yes":
    if age >= {{minimum}}:
        print("Activity approved.")
    else:
        print("Minimum age is {{minimum}}.")
else:
    print("Permission is required.")`, starterInput: `{{permission}}
{{age}}`, hint: "Test the exact >= boundary as well as one number below it.", solution: "The outer path controls whether the age decision is reached.", success: "You completed a fresh permission and age check.", check: { mustChange: true, minimumInputLines: 2 }, values: { minimum: [8, 10, 12, 16], permission: ["yes", "no"], age: [7, 8, 9, 10, 11, 12, 15, 16, 18] } },
        { id: "fresh-stock", skill: "Stock After Opening", title: "Fresh Shop Decision", mission: "Let Python check stock only inside an open-shop path.", starterCode: `shop_open = input("Shop open? yes/no: ")
quantity = int(input("Quantity in stock: "))
if shop_open == "yes":
    print("Shop is open.")
    if quantity >= {{needed}}:
        print("Enough items are available.")
    else:
        print("Not enough items today.")
else:
    print("Come back later.")`, starterInput: `{{open}}
{{quantity}}`, hint: "The quantity comparison belongs inside the open-shop branch.", solution: "Test open with enough, open without enough, and closed.", success: "You completed a fresh stock decision.", check: { mustChange: true, minimumInputLines: 2 }, values: { needed: [2, 3, 4, 5], open: ["yes", "no"], quantity: [0, 1, 2, 3, 4, 5, 7] } }
      ]
    },
    challengeGenerator: {
      activities: [
        { id: "camp", title: "Adventure Camp Check-In", mission: "A registered guest under 16 needs permission. A registered guest aged 16+ can enter without the extra permission check.", starterCode: `registered = input("Registered? yes/no: ")
age = int(input("Age: "))
permission = input("Permission? yes/no: ")

# Build the nested check-in`, starterInput: `yes
13
yes`, hint: "Nest age inside registration, then permission inside the under-16 path.", solution: `registered = input("Registered? yes/no: ")
age = int(input("Age: "))
permission = input("Permission? yes/no: ")
if registered == "yes":
    if age < 16:
        if permission == "yes":
            print("Check-in approved.")
        else:
            print("Permission is required.")
    else:
        print("Check-in approved.")
else:
    print("Please register first.")` },
        { id: "account", title: "Account Security", mission: "First confirm the username, then check the PIN. Give a clear message for each failure.", starterCode: `username = input("Username: ")
pin = input("PIN: ")

# Add nested security checks`, starterInput: `learner
2468`, hint: "Compare username first. Put the PIN decision inside its True path.", solution: `username = input("Username: ")
pin = input("PIN: ")
if username == "learner":
    if pin == "2468":
        print("Welcome back.")
    else:
        print("Incorrect PIN.")
else:
    print("Unknown username.")` },
        { id: "delivery", title: "Delivery Checker", mission: "Check whether an item is in stock before checking whether the postcode is supported.", starterCode: `in_stock = input("In stock? yes/no: ")
postcode = input("Postcode area: ")

# Decide whether delivery is possible`, starterInput: `yes
D1`, hint: "Only check D1 after confirming stock.", solution: `in_stock = input("In stock? yes/no: ")
postcode = input("Postcode area: ")
if in_stock == "yes":
    if postcode == "D1":
        print("Delivery available.")
    else:
        print("Area not supported yet.")
else:
    print("Item is unavailable.")` },
        { id: "course", title: "Course Progress Gate", mission: "Confirm the previous lesson is complete, then check whether the quiz score is at least 70.", starterCode: `previous_complete = input("Previous lesson complete? yes/no: ")
score = int(input("Quiz score: "))

# Create the two-step gate`, starterInput: `yes
78`, hint: "The score matters only after previous_complete is yes.", solution: `previous_complete = input("Previous lesson complete? yes/no: ")
score = int(input("Quiz score: "))
if previous_complete == "yes":
    if score >= 70:
        print("Next lesson unlocked.")
    else:
        print("Try the quiz again.")
else:
    print("Complete the previous lesson first.")` },
        { id: "ride", title: "Ride and Height Check", mission: "Check for a valid pass, then approve heights of 120 or more.", starterCode: `valid_pass = input("Valid pass? yes/no: ")
height = int(input("Height in cm: "))

# Add the nested ride decision`, starterInput: `yes
125`, hint: "Pass first, height second. Test 119 and 120.", solution: `valid_pass = input("Valid pass? yes/no: ")
height = int(input("Height in cm: "))
if valid_pass == "yes":
    if height >= 120:
        print("Ride approved.")
    else:
        print("Height requirement not met.")
else:
    print("A valid pass is required.")` },
        { id: "repair-nest", title: "Repair the Decision Tree", mission: "Fix the indentation and connect each else to the intended if.", starterCode: `door_open = True
light_on = False
if door_open:
print("Door is open.")
if light_on:
print("Room is bright.")
else:
print("Door is closed.")`, starterInput: "", hint: "Nest light_on inside door_open. The inner else describes darkness; the outer else describes a closed door.", solution: `door_open = True
light_on = False
if door_open:
    print("Door is open.")
    if light_on:
        print("Room is bright.")
    else:
        print("Room is dark.")
else:
    print("Door is closed.")` }
      ]
    },
    quizGenerator: {
      activities: [
        { id: "meaning", question: "What is a nested condition?", code: "", options: ["A decision inside another decision", "A repeated print", "A type of string", "A comment inside code"], correct: 0, explanation: "Correct — nesting places one decision inside a path created by another." },
        { id: "outer-false", question: "What happens to the inner if when the outer condition is False?", code: "", options: ["It is not reached", "It always runs", "It becomes True", "Python repeats it"], correct: 0, explanation: "Correct — Python skips the entire indented outer block, including its inner decision." },
        { id: "both-true", question: "What is displayed when ticket is True and age is 14?", code: `if ticket:
    print("Ticket accepted")
    if age >= 12:
        print("Ride approved")`, options: ["Ticket accepted, then Ride approved", "Ride approved only", "Ticket accepted only", "Nothing"], correct: 0, explanation: "Correct — the outer path runs, then its inner condition is also True." },
        { id: "inner-false", question: "What is displayed when ticket is True and age is 10?", code: `if ticket:
    print("Ticket accepted")
    if age >= 12:
        print("Ride approved")
    else:
        print("Adult needed")`, options: ["Ticket accepted, then Adult needed", "Adult needed only", "Ride approved", "Nothing"], correct: 0, explanation: "Correct — the outer path runs, but the inner else handles the younger age." },
        { id: "which-else", question: "Which if owns the indented else?", code: `if shop_open:
    if in_stock:
        print("Available")
    else:
        print("Out of stock")`, options: ["if in_stock", "if shop_open", "Both", "Neither"], correct: 0, explanation: "Correct — alignment shows that else belongs to if in_stock." },
        { id: "indentation", question: "What tells Python that the age decision is inside the ticket decision?", code: "", options: ["Indentation", "Quotation marks", "The variable name", "A comment"], correct: 0, explanation: "Correct — indentation defines Python's code blocks and their relationships." },
        { id: "boundary", question: "Does age 12 reach Ride approved here?", code: `if ticket:
    if age >= 12:
        print("Ride approved")`, options: ["Yes", "No", "Only with elif", "It causes an error"], correct: 0, explanation: "Correct — >= includes 12 itself." },
        { id: "relevance", question: "Why might nesting be useful for checking stock inside shop_open?", code: "", options: ["Stock is relevant only after the shop is open", "It repeats the program", "It converts stock to text", "It removes indentation"], correct: 0, explanation: "Correct — nesting mirrors the natural order of related questions." },
        { id: "and", question: "Which simple check can be written without nesting when no separate messages are needed?", code: "", options: ["if ticket and age >= 12:", "if ticket age >= 12:", "if inside ticket:", "and ticket if age:"], correct: 0, explanation: "Correct — and can combine two requirements when a single result is enough." },
        { id: "outer-output", question: "What appears when shop_open is False?", code: `if shop_open:
    print("Open")
    if in_stock:
        print("Available")
else:
    print("Closed")`, options: ["Closed", "Open", "Available", "Open and Available"], correct: 0, explanation: "Correct — Python skips everything inside the False outer path and runs its else." },
        { id: "depth", question: "What is a good beginner habit for nested conditions?", code: "", options: ["Keep each level purposeful and readable", "Nest every if", "Remove all indentation", "Use as many levels as possible"], correct: 0, explanation: "Correct — nesting should clarify the decision, not bury it under unnecessary levels." },
        { id: "syntax", question: "Which version is correctly indented?", code: "", options: [`if ready:
    if safe:
        print("Begin")`, `if ready:
if safe:
print("Begin")`, `if ready
    if safe
        print("Begin")`, `if ready: if safe:
print("Begin")`], correct: 0, explanation: "Correct — every controlled block is indented one additional level and each if ends with a colon." }
      ]
    },
    quiz: {
      question: "What will this program display when registered is False?",
      code: `if registered:
    print("Registration found")
    if age >= 16:
        print("Check-in approved")
else:
    print("Please register first")`,
      options: ["Please register first", "Registration found", "Check-in approved", "Registration found and Check-in approved"],
      correct: 0,
      explanation: "Correct — the outer condition is False, so Python does not enter its block or check the nested age condition. It runs the outer else instead."
    }
  },
  23: {
    title: "Conditional Expressions",
    stage: "Foundations",
    level: "Beginner",
    time: "20 minutes",
    tags: ["Two values", "One-line decision", "Readable choices"],
    usesInput: true,
    intro: "A small two-way decision can sometimes choose its value in one clear line. Today you will learn that pattern—and when not to use it.",
    explanation: `A <strong>conditional expression</strong> chooses one of two values by checking a condition. Its pattern is <code>TRUE_VALUE if CONDITION else FALSE_VALUE</code>.<br><br>For example, <code>message = "Adult" if age &gt;= 18 else "Under 18"</code> gives <code>message</code> exactly one value. Read it naturally: “Use Adult if the age is at least 18; otherwise, use Under 18.”`,
    concept: "Use a conditional expression to choose between two simple values. If the decision becomes difficult to read, a normal if / elif / else block is better.",
    starterCode: `temperature = float(input("Temperature: "))

weather_message = "It feels warm." if temperature >= 20 else "It feels cool."

print(weather_message)`,
    starterInput: "24",
    expectedOutput: `Temperature: 24
It feels warm.`,
    lineByLine: [
      "input() collects the temperature, and float() converts the typed text into a number.",
      "temperature >= 20 is the condition. It produces either True or False.",
      "When the condition is True, Python chooses the value before if: It feels warm.",
      "When the condition is False, Python chooses the value after else: It feels cool.",
      "The selected value is stored in weather_message, and print() displays that one value."
    ],
    outputExplanation: "With 24, temperature >= 20 is True, so Python selects the first message. It does not display both choices. With 14, the same expression selects the message after else.",
    changeIt: `Run the starter with <code>24</code>, then with <code>14</code>. Predict each message first.<br><br>Next, test the exact boundary <code>20</code>. Change the messages to <code>"T-shirt weather"</code> and <code>"Jacket weather"</code>. Finally, change the threshold from <code>20</code> to <code>25</code> and run <code>24</code> again.`,
    challenge: {
      title: "Player Status Card",
      mission: "Create status with one conditional expression. Use Level unlocked for a score of 100 or more; otherwise use Keep collecting points. Do not write a full if / else block.",
      starterCode: `player = input("Player name: ")
score = int(input("Score: "))

# Create status with one conditional expression

print(f"Player: {player}")
print(f"Status: {status}")`,
      starterInput: `Amina
120`
    },
    hint: `Use this shape: <code>status = TRUE_VALUE if CONDITION else FALSE_VALUE</code>. The condition is <code>score &gt;= 100</code>.`,
    solution: `player = input("Player name: ")
score = int(input("Score: "))

status = "Level unlocked" if score >= 100 else "Keep collecting points"

print(f"Player: {player}")
print(f"Status: {status}")`,
    practiceCoach: {
      knowledgeBoundary: "Use only knowledge from Lessons 1–23: values, input, conversion, strings, arithmetic, comparisons, logical operators, if / elif / else, nested decisions, f-strings and one simple conditional expression. Do not use loops, collections, functions or chained conditional expressions.",
      activities: [
        { id: "weather-message", stage: "EASY START · CHOOSE ONE MESSAGE", title: "Weather Message", mission: "Run 24, 14 and the exact boundary 20. Notice that exactly one message is selected.", starterCode: `temperature = float(input("Temperature: "))
message = "Warm day" if temperature >= 20 else "Cool day"
print(message)`, starterInput: "24", hint: "The value before if is chosen when the condition is True.", check: { mustRun: true, minimumInputLines: 1 } },
        { id: "pass-message", stage: "BOUNDARY · FIFTY BELONGS TO PASS", title: "Pass Message", mission: "Test 49, 50 and 75. Predict which value result receives each time.", starterCode: `score = float(input("Score: "))
result = "Passed" if score >= 50 else "Keep practising"
print(result)`, starterInput: "50", hint: ">= includes the exact boundary.", check: { mustRun: true, minimumInputLines: 1 } },
        { id: "ticket-type", stage: "REAL-LIFE CHOICE · TWO VALUES", title: "Ticket Type", mission: "Change the age to reach both Adult ticket and Junior ticket.", starterCode: `age = int(input("Age: "))
ticket = "Adult ticket" if age >= 18 else "Junior ticket"
print(ticket)`, starterInput: "17", hint: "Try 17 and 18 to test both sides of the boundary.", check: { mustRun: true, minimumInputLines: 1 } },
        { id: "stock-message", stage: "NUMBER CHECK · VALUE FROM A CONDITION", title: "Stock Message", mission: "Run zero and a positive quantity. Then replace the two messages with your own clear wording.", starterCode: `quantity = int(input("Quantity: "))
message = "Available" if quantity > 0 else "Unavailable"
print(message)`, starterInput: "3", hint: "Zero is not greater than zero.", check: { mustChange: true, mustRun: true, minimumInputLines: 1 } },
        { id: "number-sign", stage: "COMPARISON · INCLUDE ZERO", title: "Number Sign", mission: "Predict the result for -4, 0 and 8. Explain why zero is Non-negative.", starterCode: `number = float(input("Number: "))
description = "Non-negative" if number >= 0 else "Negative"
print(description)`, starterInput: "0", hint: "Non-negative means zero or greater.", check: { mustRun: true, minimumInputLines: 1 } },
        { id: "login-greeting", stage: "TEXT CONDITION · EXACT MATCH", title: "Login Greeting", mission: "Try yes, no and YES. Observe that string comparisons pay attention to capital letters.", starterCode: `logged_in = input("Logged in? yes/no: ")
greeting = "Welcome back" if logged_in == "yes" else "Please sign in"
print(greeting)`, starterInput: "yes", hint: "The expression compares the answer exactly with lowercase yes.", check: { mustRun: true, minimumInputLines: 1 } },
        { id: "repair-expression", stage: "FIX IT · PUT THE PARTS IN ORDER", title: "Repair the Expression", mission: "Repair the one-line decision, then test both score paths.", starterCode: `score = int(input("Score: "))
result = if score >= 50 "Passed" else "Try again"
print(result)`, starterInput: "65", hint: "Start with the True value, then if and the condition, then else and the False value.", check: { mustChange: true, mustRun: true, minimumInputLines: 1 } }
      ]
    },
    freshPracticeGenerator: {
      templates: [
        { id: "fresh-score", skill: "Score Thresholds", title: "Fresh Score Decision", mission: "Predict which result is selected, then change the score and run both paths.", starterCode: `score = int(input("Score: "))
result = "{{high_message}}" if score >= {{threshold}} else "{{low_message}}"
print(result)`, starterInput: "{{score}}", hint: "Read the True value, condition and False value in that order.", solution: `result = "{{high_message}}" if score >= {{threshold}} else "{{low_message}}"`, success: "You completed a fresh score expression.", check: { mustChange: true, minimumInputLines: 1 }, values: { high_message: ["Passed", "Target reached", "Ready for the next step"], low_message: ["Keep practising", "Keep building", "Try once more"], threshold: [40, 50, 60, 70], score: [25, 39, 40, 49, 50, 65, 75, 90] } },
        { id: "fresh-temperature", skill: "Temperature Messages", title: "Fresh Temperature Choice", mission: "Use a generated temperature boundary to select one clear message.", starterCode: `temperature = float(input("Temperature: "))
advice = "{{warm}}" if temperature >= {{threshold}} else "{{cool}}"
print(advice)`, starterInput: "{{temperature}}", hint: "Test the exact threshold and one value below it.", solution: `advice = "{{warm}}" if temperature >= {{threshold}} else "{{cool}}"`, success: "You completed a fresh temperature expression.", check: { mustChange: true, minimumInputLines: 1 }, values: { warm: ["Light clothing", "Warm weather", "Open the window"], cool: ["Take a jacket", "Cool weather", "Keep the window closed"], threshold: [15, 18, 20, 25], temperature: [8, 14, 15, 19, 20, 24, 25, 30] } },
        { id: "fresh-age", skill: "Age Boundaries", title: "Fresh Age Category", mission: "Choose one of two generated age messages with a readable expression.", starterCode: `age = int(input("Age: "))
category = "{{older}}" if age >= {{boundary}} else "{{younger}}"
print(category)`, starterInput: "{{age}}", hint: "The boundary itself reaches the first value because the operator is >=.", solution: `category = "{{older}}" if age >= {{boundary}} else "{{younger}}"`, success: "You completed a fresh age expression.", check: { mustChange: true, minimumInputLines: 1 }, values: { older: ["Adult", "Independent entry", "Main activity"], younger: ["Junior", "Adult needed", "Junior activity"], boundary: [12, 16, 18, 21], age: [10, 11, 12, 15, 16, 17, 18, 22] } },
        { id: "fresh-stock", skill: "Quantity Choices", title: "Fresh Stock Message", mission: "Compare a quantity with the generated requirement and select one availability message.", starterCode: `quantity = int(input("Quantity: "))
message = "Enough stock" if quantity >= {{needed}} else "More stock needed"
print(message)`, starterInput: "{{quantity}}", hint: "Try the exact needed quantity as well as one below it.", solution: `message = "Enough stock" if quantity >= {{needed}} else "More stock needed"`, success: "You completed a fresh stock expression.", check: { mustChange: true, minimumInputLines: 1 }, values: { needed: [2, 3, 5, 8], quantity: [0, 1, 2, 3, 4, 5, 7, 8, 10] } },
        { id: "fresh-target", skill: "Number Comparisons", title: "Fresh Target Check", mission: "Select Above target or At or below target with one conditional expression.", starterCode: `number = float(input("Number: "))
message = "Above target" if number > {{target}} else "At or below target"
print(message)`, starterInput: "{{number}}", hint: "Because the operator is >, equality reaches the value after else.", solution: `message = "Above target" if number > {{target}} else "At or below target"`, success: "You completed a fresh target expression.", check: { mustChange: true, minimumInputLines: 1 }, values: { target: [0, 5, 10, 20], number: [-3, 0, 4, 5, 6, 10, 15, 21, 30] } },
        { id: "fresh-text", skill: "Text Choices", title: "Fresh Text Decision", mission: "Compare a typed choice and select one generated response.", starterCode: `choice = input("Choose {{expected}} or something else: ")
reply = "{{match}}" if choice == "{{expected}}" else "{{different}}"
print(reply)`, starterInput: "{{choice}}", hint: "Text must match the expected lowercase word exactly.", solution: `reply = "{{match}}" if choice == "{{expected}}" else "{{different}}"`, success: "You completed a fresh text expression.", check: { mustChange: true, minimumInputLines: 1 }, values: { expected: ["yes", "ready", "morning", "python"], choice: ["yes", "no", "ready", "later", "morning", "evening", "python", "Python"], match: ["Choice matched", "Welcome", "That is correct"], different: ["Different choice", "Try another answer", "Not matched"] } }
      ]
    },
    challengeGenerator: {
      activities: [
        { id: "player-status", title: "Player Status Card", mission: "Set status to Level unlocked for 100+ and Keep collecting points otherwise. Use one conditional expression.", starterCode: `player = input("Player name: ")
score = int(input("Score: "))

# Create status here

print(f"Player: {player}")
print(f"Status: {status}")`, starterInput: `Amina
120`, hint: "The condition is score >= 100. Put the unlocked message before if.", solution: `player = input("Player name: ")
score = int(input("Score: "))
status = "Level unlocked" if score >= 100 else "Keep collecting points"
print(f"Player: {player}")
print(f"Status: {status}")` },
        { id: "delivery", title: "Delivery Message", mission: "Choose Free delivery for totals of 50 or more; otherwise choose Delivery charge applies.", starterCode: `total = float(input("Order total: "))

# Create delivery_message

print(delivery_message)`, starterInput: "55", hint: "Use total >= 50 as the middle condition.", solution: `total = float(input("Order total: "))
delivery_message = "Free delivery" if total >= 50 else "Delivery charge applies"
print(delivery_message)` },
        { id: "exam", title: "Exam Result", mission: "Create Passed for 50+ and Keep practising otherwise, without a full if block.", starterCode: `score = float(input("Score: "))

# Create result

print(result)`, starterInput: "50", hint: "Write the Passed value first because it belongs to the True path.", solution: `score = float(input("Score: "))
result = "Passed" if score >= 50 else "Keep practising"
print(result)` },
        { id: "ride", title: "Ride Access", mission: "Select Ride approved for heights of 120 cm or more; otherwise select Height requirement not met.", starterCode: `height = int(input("Height in cm: "))

# Create access_message

print(access_message)`, starterInput: "125", hint: "Test 119 and the exact boundary 120.", solution: `height = int(input("Height in cm: "))
access_message = "Ride approved" if height >= 120 else "Height requirement not met"
print(access_message)` },
        { id: "member", title: "Member Greeting", mission: "Choose Welcome back when the answer is yes, and Please join us otherwise.", starterCode: `member = input("Member? yes/no: ")

# Create greeting

print(greeting)`, starterInput: "yes", hint: "Compare member exactly with the text yes.", solution: `member = input("Member? yes/no: ")
greeting = "Welcome back" if member == "yes" else "Please join us"
print(greeting)` },
        { id: "repair", title: "Repair the One-Line Decision", mission: "Repair the order and add the missing False value, then test 17 and 18.", starterCode: `age = int(input("Age: "))
ticket = if age >= 18 "Adult ticket"
print(ticket)`, starterInput: "18", hint: "The complete order is TRUE_VALUE if CONDITION else FALSE_VALUE.", solution: `age = int(input("Age: "))
ticket = "Adult ticket" if age >= 18 else "Junior ticket"
print(ticket)` }
      ]
    },
    quizGenerator: {
      activities: [
        { id: "purpose", question: "What does a conditional expression choose?", code: "", options: ["One of two values", "Every possible value", "A loop count", "A comment"], correct: 0, explanation: "Correct — it checks one condition and selects exactly one of two values." },
        { id: "syntax", question: "Which is the correct Python pattern?", code: "", options: ["TRUE_VALUE if CONDITION else FALSE_VALUE", "if CONDITION TRUE_VALUE else FALSE_VALUE", "CONDITION ? TRUE_VALUE : FALSE_VALUE", "TRUE_VALUE else CONDITION if FALSE_VALUE"], correct: 0, explanation: "Correct — Python places the True value first, then if, the condition, else and the False value." },
        { id: "true-path", question: "What is displayed?", code: `age = 20
message = "Adult" if age >= 18 else "Junior"
print(message)`, options: ["Adult", "Junior", "True", "Both"], correct: 0, explanation: "Correct — 20 >= 18 is True, so Python selects Adult." },
        { id: "false-path", question: "What is displayed when score is 42?", code: `result = "Passed" if score >= 50 else "Keep practising"
print(result)`, options: ["Passed", "Keep practising", "False", "Nothing"], correct: 1, explanation: "Correct — the condition is False, so the value after else is selected." },
        { id: "boundary", question: "What is selected when score is exactly 50?", code: `result = "Passed" if score >= 50 else "Try again"`, options: ["Passed", "Try again", "Both", "An error"], correct: 0, explanation: "Correct — >= includes equality." },
        { id: "missing-else", question: "What is missing here?", code: `message = "Ready" if score >= 10`, options: ["else and the False value", "A loop", "Another if", "A list"], correct: 0, explanation: "Correct — a conditional expression needs values for both possible results." },
        { id: "stored", question: "Where is the selected value stored?", code: `ticket = "Adult" if age >= 18 else "Junior"`, options: ["ticket", "age", "if", "else"], correct: 0, explanation: "Correct — the chosen string is assigned to ticket." },
        { id: "equivalent", question: "Which normal decision is equivalent?", code: `message = "Open" if shop_open else "Closed"`, options: [`if shop_open:
    message = "Open"
else:
    message = "Closed"`, `if shop_open:
    message = "Closed"`, `if message:
    shop_open = "Open"`, `message = "Open" and "Closed"`], correct: 0, explanation: "Correct — both versions assign one of the same two values from the same condition." },
        { id: "readability", question: "When is a normal if / elif / else usually clearer?", code: "", options: ["When there are several paths or instructions", "Whenever there are two short values", "Only with strings", "Never"], correct: 0, explanation: "Correct — compact code is useful only while it remains easy to understand." },
        { id: "text", question: "What does this display when answer is no?", code: `reply = "Welcome" if answer == "yes" else "Please try again"
print(reply)`, options: ["Welcome", "Please try again", "no", "False"], correct: 1, explanation: "Correct — no does not equal yes, so Python selects the value after else." },
        { id: "boolean", question: "What is selected when ready is True?", code: `status = "Begin" if ready else "Wait"`, options: ["Begin", "Wait", "True", "Nothing"], correct: 0, explanation: "Correct — the Boolean condition is already True, so the first value is selected." },
        { id: "too-complex", question: "Which version is easier for a beginner to maintain when there are three result paths?", code: "", options: ["A clear if / elif / else block", "Several conditional expressions chained together", "One very long line", "Removing the conditions"], correct: 0, explanation: "Correct — use the shorter form only for a genuinely simple two-value choice." }
      ]
    },
    quiz: {
      question: "What will this program display?",
      code: `score = 70
result = "Pass" if score >= 50 else "Try again"
print(result)`,
      options: ["Pass", "Try again", "True", "Pass and Try again"],
      correct: 0,
      explanation: "Correct — score >= 50 is True, so Python selects the value before if: Pass."
    }
  },
  24: {
    title: "While Loops",
    stage: "Repetition",
    level: "Beginner",
    time: "25 minutes",
    tags: ["Repeat safely", "while", "Stopping conditions"],
    usesInput: false,
    intro: "A loop lets Python repeat a useful instruction. Today you will control where repetition starts, why it continues, and exactly how it stops.",
    explanation: `A <strong>while loop</strong> repeats its indented instructions while a condition remains <code>True</code>. Python checks the condition before every repetition.<br><br>A controlled loop normally has three parts: a starting value, a condition, and a change that moves the loop toward stopping. If the condition is already <code>False</code>, the body runs zero times.`,
    concept: "A while loop follows this rhythm: start, check, run, change, then check again. The changing value should eventually make the condition False.",
    starterCode: `count = 1

while count <= 5:
    print(f"Count: {count}")
    count = count + 1

print("Counting complete.")`,
    expectedOutput: `Count: 1
Count: 2
Count: 3
Count: 4
Count: 5
Counting complete.`,
    lineByLine: [
      "count = 1 gives the loop its starting value.",
      "while count <= 5 checks the stopping condition before every repetition.",
      "The indented print() runs only while that condition is True.",
      "count = count + 1 changes the value, so the loop makes progress toward stopping.",
      "When count becomes 6, 6 <= 5 is False. Python leaves the loop and prints Counting complete."
    ],
    outputExplanation: "The loop displays 1 through 5. After displaying 5, it changes count to 6 and checks again. The condition is now False, so Python continues with the unindented instruction after the loop.",
    changeIt: `First change the finishing number from <code>5</code> to <code>8</code>. Predict how many Count lines will appear.<br><br>Next start at <code>3</code> and finish at <code>5</code>. Finally, restore the start to <code>1</code> and change the update to <code>count = count + 2</code>. Predict the sequence before running it.`,
    challenge: {
      title: "Rocket Countdown",
      mission: "Display every number from start down to 1, then display Liftoff! The supplied loop must also handle start = 0 safely.",
      starterCode: `start = 5

# Build the countdown loop here

print("Liftoff!")`
    },
    hint: "Use while start > 0. Inside the loop, print start and then subtract 1 from it.",
    solution: `start = 5

while start > 0:
    print(start)
    start = start - 1

print("Liftoff!")`,
    practiceCoach: {
      knowledgeBoundary: "Use only knowledge from Lessons 1–24: values, strings, numbers, arithmetic, comparisons, decisions, input before a loop, while loops, f-strings and print. Do not use for loops, break, continue, collections or functions.",
      activities: [
        { id: "count-five", stage: "EASY START · START CHECK CHANGE", title: "Count to Five", mission: "Run the loop, then identify its starting value, condition and update.", starterCode: `count = 1
while count <= 5:
    print(count)
    count = count + 1`, hint: "Start is 1, the condition uses <= 5, and the update adds 1.", check: { mustRun: true } },
        { id: "count-twos", stage: "CHANGE THE STEP · PREDICT FIRST", title: "Count by Twos", mission: "Change the starting value and finishing value, then predict the complete sequence.", starterCode: `number = 2
while number <= 10:
    print(number)
    number = number + 2`, hint: "Each repetition adds 2, so the displayed values are evenly spaced.", check: { mustChange: true, mustRun: true } },
        { id: "countdown", stage: "MOVE DOWNWARD · SUBTRACT ONE", title: "Countdown to Go", mission: "Change the start to 5 and keep the loop stopping safely at zero.", starterCode: `countdown = 3
while countdown > 0:
    print(countdown)
    countdown = countdown - 1
print("Go!")`, hint: "A countdown needs a decreasing value and a > 0 condition.", check: { mustChange: true, mustRun: true } },
        { id: "middle", stage: "DIFFERENT START · SAME FINISH", title: "Start in the Middle", mission: "Try starts of 3, 5 and 6. Observe which run has zero repetitions.", starterCode: `count = 3
while count <= 5:
    print(count)
    count = count + 1
print("Finished")`, hint: "When count starts at 6, the first condition check is already False.", check: { mustRun: true } },
        { id: "zero-times", stage: "ZERO REPETITIONS · CONDITION FIRST", title: "Skip the Loop", mission: "Run this initially-False loop, then change the start so its body runs exactly twice.", starterCode: `number = 10
while number <= 5:
    print(number)
    number = number + 1
print("Loop finished")`, hint: "A start of 4 reaches 4 and 5 before stopping.", check: { mustChange: true, mustRun: true } },
        { id: "points-target", stage: "BUILD TOWARD A TARGET · ADD EACH TIME", title: "Points Builder", mission: "Change the starting points and step while keeping the loop finite.", starterCode: `points = 0
while points < 20:
    print(f"Points: {points}")
    points = points + 5
print("Target reached")`, hint: "Use a positive step because points must move upward toward 20.", check: { mustChange: true, mustRun: true } },
        { id: "repair-loop", stage: "FIX IT · MAKE PROGRESS", title: "Repair the Loop", mission: "Add the missing update so the loop displays 1, 2 and 3, then stops.", starterCode: `count = 1
while count <= 3:
    print(count)
    # Add the update here`, hint: "Inside the loop, give count its current value plus 1.", check: { mustChange: true, mustRun: true } }
      ]
    },
    freshPracticeGenerator: {
      templates: [
        { id: "fresh-up", skill: "Count Up", title: "Fresh Count Up", mission: "Predict every displayed number, then change the start while keeping the loop safe.", starterCode: `number = {{start}}
while number <= {{finish}}:
    print(number)
    number = number + 1`, hint: "The value increases by 1 until it becomes greater than the finish.", solution: "Keep a positive update and a <= finishing condition.", success: "You completed a fresh count-up loop.", check: { mustChange: true }, values: { start: [1, 2, 3, 4], finish: [5, 6, 7, 8] } },
        { id: "fresh-step", skill: "Generated Steps", title: "Fresh Stepping Loop", mission: "Follow a generated positive step and predict the sequence before running.", starterCode: `number = {{start}}
while number <= {{finish}}:
    print(number)
    number = number + {{step}}`, hint: "Add the same positive step every time.", solution: "List values from the start, repeatedly adding the step while they remain <= the finish.", success: "You completed a fresh stepping loop.", check: { mustChange: true }, values: { start: [0, 1, 2, 3], finish: [10, 12, 15, 18], step: [2, 3, 4] } },
        { id: "fresh-down", skill: "Countdown", title: "Fresh Countdown", mission: "Predict the descending sequence and keep the subtraction inside the loop.", starterCode: `count = {{start}}
while count > 0:
    print(count)
    count = count - 1
print("Done")`, hint: "Subtract 1 so count moves toward the False condition.", solution: "Print, subtract one, then check > 0 again.", success: "You completed a fresh countdown.", check: { mustChange: true }, values: { start: [3, 4, 5, 6, 7] } },
        { id: "fresh-points", skill: "Reach a Target", title: "Fresh Points Target", mission: "Add a generated amount until the points reach or pass the target.", starterCode: `points = {{start}}
while points < {{target}}:
    print(f"Points: {points}")
    points = points + {{step}}
print("Target reached")`, hint: "A positive step makes points move toward the target.", solution: "Keep points < target and add the step inside the loop.", success: "You completed a fresh target loop.", check: { mustChange: true }, values: { start: [0, 2, 5], target: [15, 20, 25, 30], step: [2, 3, 5] } },
        { id: "fresh-message", skill: "Controlled Repetition", title: "Fresh Message Repeater", mission: "Display the generated message the requested number of times.", starterCode: `repeat = 1
while repeat <= {{times}}:
    print("{{message}}")
    repeat = repeat + 1`, hint: "Start at 1 and add 1 after every displayed message.", solution: "The <= condition includes the final repetition number.", success: "You completed a fresh message loop.", check: { mustChange: true }, values: { times: [2, 3, 4, 5], message: ["Keep learning", "One step at a time", "Python practice", "I can do this"] } },
        { id: "fresh-boundary", skill: "Zero or More Repetitions", title: "Fresh Boundary Loop", mission: "Decide whether the loop runs zero times or several times, then change its start.", starterCode: `value = {{start}}
while value < {{limit}}:
    print(value)
    value = value + {{step}}
print("Finished")`, hint: "Check the starting condition before predicting any output from the loop body.", solution: "If start is already at or above limit, only Finished appears.", success: "You completed a fresh boundary loop.", check: { mustChange: true }, values: { start: [0, 2, 5, 8, 10], limit: [5, 8, 10, 12], step: [1, 2, 3] } }
      ]
    },
    challengeGenerator: {
      activities: [
        { id: "rocket", title: "Rocket Countdown", mission: "Display every number from start down to 1, then Liftoff!", starterCode: `start = 5

# Build the countdown

print("Liftoff!")`, hint: "Use while start > 0, print start, then subtract 1.", solution: `start = 5
while start > 0:
    print(start)
    start = start - 1
print("Liftoff!")` },
        { id: "savings", title: "Savings Target", mission: "Display savings from 0, adding 10 until the target of 50 is reached.", starterCode: `savings = 0

# Build the savings loop

print("Savings target reached")`, hint: "Repeat while savings < 50 and add 10 each time.", solution: `savings = 0
while savings < 50:
    print(f"Savings: {savings}")
    savings = savings + 10
print("Savings target reached")` },
        { id: "training", title: "Training Repetitions", mission: "Display Training 1 through Training 4, then Session complete.", starterCode: `repetition = 1

# Build four repetitions

print("Session complete")`, hint: "Use repetition <= 4 and add 1 inside the loop.", solution: `repetition = 1
while repetition <= 4:
    print(f"Training {repetition}")
    repetition = repetition + 1
print("Session complete")` },
        { id: "climber", title: "Number Climber", mission: "Display 2, 5, 8 and 11 using one while loop.", starterCode: `number = 2

# Build the climbing loop`, hint: "The numbers rise by 3 and the final allowed value is 11.", solution: `number = 2
while number <= 11:
    print(number)
    number = number + 3` },
        { id: "zero", title: "Zero-Run Gate", mission: "Create a loop that displays Ready only while tickets > 0. Begin with zero and confirm that only Finished appears.", starterCode: `tickets = 0

# Build the loop

print("Finished")`, hint: "Use while tickets > 0. The starting condition is False.", solution: `tickets = 0
while tickets > 0:
    print("Ready")
    tickets = tickets - 1
print("Finished")` },
        { id: "repair-endless", title: "Repair the Endless Loop", mission: "Add one line so this program displays 1 through 4 and safely stops.", starterCode: `number = 1
while number <= 4:
    print(number)
    # Missing progress`, hint: "Increase number by 1 inside the loop.", solution: `number = 1
while number <= 4:
    print(number)
    number = number + 1` }
      ]
    },
    quizGenerator: {
      activities: [
        { id: "meaning", question: "What does a while loop do?", code: "", options: ["Repeats while a condition is True", "Runs only once", "Creates a string", "Deletes a condition"], correct: 0, explanation: "Correct — Python checks the condition before each repetition." },
        { id: "three-parts", question: "Which three ideas usually control a beginner while loop?", code: "", options: ["Start, condition and change", "Input, list and function", "String, file and class", "Comment, import and module"], correct: 0, explanation: "Correct — the changing value moves from its start toward making the condition False." },
        { id: "output-three", question: "What is displayed?", code: `count = 1
while count <= 3:
    print(count)
    count = count + 1`, options: ["1, 2, 3", "1, 2, 3, 4", "1 forever", "Nothing"], correct: 0, explanation: "Correct — count becomes 4 after displaying 3, so the next condition is False." },
        { id: "zero", question: "How many times does this loop body run?", code: `count = 10
while count <= 5:
    print(count)
    count = count + 1`, options: ["Zero", "One", "Five", "Forever"], correct: 0, explanation: "Correct — the condition is False before the first repetition." },
        { id: "endless", question: "Why does this loop not stop?", code: `number = 1
while number < 5:
    print(number)`, options: ["number never changes", "print is missing", "The condition is False", "while needs else"], correct: 0, explanation: "Correct — number remains 1, so number < 5 stays True." },
        { id: "fix", question: "Which line safely fixes the loop?", code: `number = 1
while number < 5:
    print(number)`, options: ["number = number + 1", "number = 1", "print = number", "while = False"], correct: 0, explanation: "Correct — adding 1 moves number toward the stopping condition." },
        { id: "after", question: "When does Done appear?", code: `count = 1
while count <= 2:
    print(count)
    count = count + 1
print("Done")`, options: ["After the loop stops", "Inside every repetition", "Before 1", "Never"], correct: 0, explanation: "Correct — the unindented print runs after the loop." },
        { id: "countdown", question: "What is the countdown output?", code: `count = 3
while count > 0:
    print(count)
    count = count - 1`, options: ["3, 2, 1", "1, 2, 3", "3, 2, 1, 0", "3 forever"], correct: 0, explanation: "Correct — zero fails the > 0 condition and is not displayed." },
        { id: "step-two", question: "What values appear?", code: `number = 1
while number <= 6:
    print(number)
    number = number + 2`, options: ["1, 3, 5", "1, 2, 3, 4, 5, 6", "2, 4, 6", "1, 3, 5, 7"], correct: 0, explanation: "Correct — the update adds 2, and 7 is beyond the allowed boundary." },
        { id: "condition-time", question: "When is the while condition checked?", code: "", options: ["Before every repetition", "Only after the program ends", "Only once after the body", "Never"], correct: 0, explanation: "Correct — this is why the body may run zero times." },
        { id: "indent", question: "Which instructions repeat?", code: `while count <= 3:
    print(count)
    count = count + 1
print("Done")`, options: ["The two indented instructions", "Only Done", "Every line forever", "No instructions"], correct: 0, explanation: "Correct — indentation marks the loop body." },
        { id: "safe-progress", question: "Which update moves an upward loop toward a larger target?", code: "", options: ["value = value + 1", "value = value - 1", "value = value", "Remove the condition"], correct: 0, explanation: "Correct — a positive update makes progress toward a larger boundary." }
      ]
    },
    quiz: {
      question: "What will this program display?",
      code: `count = 1
while count <= 3:
    print(count)
    count = count + 1`,
      options: ["1, 2, 3", "1, 2, 3, 4", "1 forever", "Nothing"],
      correct: 0,
      explanation: "Correct — after displaying 3, count becomes 4. The condition 4 <= 3 is False, so the loop stops."
    }
  },
  25: {
    title: "For Loops",
    stage: "Repetition",
    level: "Beginner",
    time: "25 minutes",
    tags: ["Items one by one", "for", "Finite repetition"],
    usesInput: false,
    intro: "A for loop helps Python work with available items one at a time. Today you will greet names, visit characters and see how indentation controls what repeats.",
    explanation: `A <strong>for loop</strong> takes each item from a sequence and runs its indented instructions once for that item.<br><br>In <code>for colour in colours:</code>, <code>colour</code> is the loop variable. Python gives it the first value, runs the loop body, then gives it the next value. When no items remain, the loop finishes naturally.`,
    concept: "A for loop says: for each available item, run these instructions. Python moves to the next item automatically and stops when the items are finished.",
    starterCode: `colours = ["red", "green", "blue"]

for colour in colours:
    print(f"Colour: {colour}")

print("Finished.")`,
    expectedOutput: `Colour: red
Colour: green
Colour: blue
Finished.`,
    lineByLine: [
      "colours stores three text values for this small example.",
      "for colour in colours asks Python to take the values one at a time.",
      "On the first repetition, colour refers to red; next it refers to green, then blue.",
      "The indented print() belongs to the loop, so it runs once for every colour.",
      "The final print() is not indented. It runs once after every available colour has been processed."
    ],
    outputExplanation: "The three Colour lines come from the indented loop body. Finished appears only once because it is outside the loop. Python needed no changing counter: the collection itself told the for loop when it was finished.",
    changeIt: `First add <code>"yellow"</code> to the colours and predict how many Colour lines will appear.<br><br>Next rename the loop variable from <code>colour</code> to <code>item</code> in both places. Then indent <code>print("Finished.")</code> so it becomes part of the loop and observe why its output changes.<br><br>Finally try <code>colours = []</code>. The loop body runs zero times, but the unindented final message still appears.`,
    challenge: {
      title: "The Travel Roll Call",
      mission: "Use one for loop to display that each traveller is ready. After every traveller, display the final departure message exactly once.",
      starterCode: `travellers = ["Amina", "Omar", "Sara"]

# Write your for loop here

print("Everyone is ready. Let us go!")`
    },
    hint: "Start with for traveller in travellers:. Put the personal ready message inside the loop and keep the final group message outside it.",
    solution: `travellers = ["Amina", "Omar", "Sara"]

for traveller in travellers:
    print(f"{traveller} is ready.")

print("Everyone is ready. Let us go!")`,
    practiceCoach: {
      knowledgeBoundary: "Use only knowledge from Lessons 1–25: values, strings, numbers, comparisons, decisions, while loops, small provided collections, for loops, f-strings and print. Do not use range, break, continue, nested loops, collection methods or functions.",
      activities: [
        { id: "welcome-guests", stage: "EASY START · EACH NAME ONCE", title: "Welcome Each Guest", mission: "Add one guest, change one name and run a personal welcome for everyone.", starterCode: `guests = ["Amina", "Bilal", "Sara"]

for guest in guests:
    print(f"Welcome, {guest}!")`, hint: "Change only the values in guests first. The loop already handles every available name.", check: { mustChange: true, mustRun: true } },
        { id: "letters", stage: "TEXT IS A SEQUENCE · ONE CHARACTER AT A TIME", title: "Visit Every Letter", mission: "Change the word, predict its vertical output and run it.", starterCode: `word = "PYTHON"

for letter in word:
    print(letter)`, hint: "A for loop can take each character directly; no index is needed here.", check: { mustChange: true, mustRun: true } },
        { id: "packing", stage: "SMALL COLLECTION · USEFUL LABEL", title: "Packing List", mission: "Add one useful item and make sure Bag ready appears only once.", starterCode: `items = ["water", "map", "snack"]

for item in items:
    print(f"Pack: {item}")

print("Bag ready.")`, hint: "The item message is inside the loop. Keep the final message unindented.", check: { mustChange: true, mustRun: true } },
        { id: "positive", stage: "REUSE IF · FILTER THE DISPLAY", title: "Positive Numbers", mission: "Predict which values appear, then add one positive and one negative number.", starterCode: `numbers = [4, -2, 7, -1]

for number in numbers:
    if number > 0:
        print(number)`, hint: "The loop visits every number, but the if statement displays only numbers greater than zero.", check: { mustChange: true, mustRun: true } },
        { id: "project-steps", stage: "MEANINGFUL VARIABLE · CLEAR STORY", title: "Project Steps", mission: "Replace one step and add one new step to the project.", starterCode: `steps = ["plan", "build", "test"]

for step in steps:
    print(f"Current step: {step}")`, hint: "The singular name step represents the current item from the plural collection steps.", check: { mustChange: true, mustRun: true } },
        { id: "character-count", stage: "REUSE A COUNTER · ADD ONCE PER ITEM", title: "Count the Characters", mission: "Predict the answer, change the word and check its new character count.", starterCode: `word = "code"
count = 0

for letter in word:
    count = count + 1

print(count)`, hint: "The loop adds 1 once for every character it visits.", check: { mustChange: true, mustRun: true } },
        { id: "empty", stage: "ZERO REPETITIONS · STILL CONTINUE", title: "Empty Shopping List", mission: "Run the empty collection, then add two items and compare the output.", starterCode: `shopping = []

for item in shopping:
    print(item)

print("List checked.")`, hint: "With no items, the body runs zero times. The unindented final line still runs.", check: { mustChange: true, mustRun: true } }
      ]
    },
    freshPracticeGenerator: {
      templates: [
        { id: "fresh-guests", skill: "Each Name Once", title: "Fresh Guest Welcome", mission: "Predict every greeting, then replace one generated guest with a name of your choice.", starterCode: `guests = ["{{guest1}}", "{{guest2}}", "{{guest3}}"]

for guest in guests:
    print(f"Welcome, {guest}!")`, hint: "The loop uses the same instruction once for each name.", solution: "Keep the loop variable singular and use it inside the f-string.", success: "You welcomed every guest with one for loop.", check: { mustChange: true }, values: { guest1: ["Amina", "Hana", "Omar", "Yusuf"], guest2: ["Bilal", "Sara", "Maya", "Noor"], guest3: ["Ali", "Zara", "Lina", "Hamza"] } },
        { id: "fresh-word", skill: "Characters in Text", title: "Fresh Letter Walk", mission: "Predict the vertical output, then change the generated word.", starterCode: `word = "{{word}}"

for letter in word:
    print(letter)`, hint: "Python visits the word from its first character to its last.", solution: "Use for letter in word and print the current letter.", success: "You visited every character in the word.", check: { mustChange: true }, values: { word: ["CODE", "LOOP", "LEARN", "LOGIC", "PYTHON", "BRAVE"] } },
        { id: "fresh-label", skill: "Label Every Item", title: "Fresh Labelled List", mission: "Run the generated collection, then add one item with the same clear label.", starterCode: `items = ["{{item1}}", "{{item2}}", "{{item3}}"]

for item in items:
    print(f"{{label}}: {item}")`, hint: "The label stays fixed while item changes on each repetition.", solution: "Keep the f-string inside the loop and use item in its braces.", success: "You labelled every generated item.", check: { mustChange: true }, values: { item1: ["water", "book", "apple", "map"], item2: ["snack", "pen", "banana", "ticket"], item3: ["coat", "lamp", "orange", "camera"], label: ["Item", "Pack", "Choice", "Ready"] } },
        { id: "fresh-filter", skill: "For with If", title: "Fresh Number Filter", mission: "Predict which generated numbers pass the condition, then add another passing value.", starterCode: `numbers = [{{number1}}, {{number2}}, {{number3}}, {{number4}}]

for number in numbers:
    if number > {{limit}}:
        print(number)`, hint: "The for loop visits all four values; the if statement controls which ones are displayed.", solution: "Display the current number only when number > limit is True.", success: "You combined a for loop with a decision.", check: { mustChange: true }, values: { number1: [1, 3, 5], number2: [7, 9, 12], number3: [2, 4, 6], number4: [10, 14, 18], limit: [4, 5, 6, 8] } },
        { id: "fresh-final", skill: "Inside and Outside", title: "Fresh Final Message", mission: "Add one collection value and keep the final message appearing exactly once.", starterCode: `places = ["{{place1}}", "{{place2}}", "{{place3}}"]

for place in places:
    print(f"Visiting {place}")

print("{{finalMessage}}")`, hint: "The final message must remain unindented so it runs after the loop.", solution: "Put item-specific output inside the loop and one closing message outside it.", success: "You controlled repeated and one-time output.", check: { mustChange: true }, values: { place1: ["Cork", "Lahore", "Dublin"], place2: ["Galway", "Karachi", "London"], place3: ["Longford", "Islamabad", "Barcelona"], finalMessage: ["Journey complete.", "All places visited.", "Trip finished."] } },
        { id: "fresh-count", skill: "Count Available Characters", title: "Fresh Character Counter", mission: "Predict the generated word's length, then change the word and check again.", starterCode: `word = "{{word}}"
count = 0

for letter in word:
    count = count + 1

print(f"Characters: {count}")`, hint: "The counter increases once for every character visited.", solution: "Start count at zero and add one inside the loop.", success: "You counted items while a for loop visited them.", check: { mustChange: true }, values: { word: ["cat", "river", "planet", "welcome", "practice", "variable"] } }
      ]
    },
    challengeGenerator: {
      activities: [
        { id: "travel", title: "The Travel Roll Call", mission: "Display that every traveller is ready, then one final departure message.", starterCode: `travellers = ["Amina", "Omar", "Sara"]

# Build the roll call

print("Everyone is ready. Let us go!")`, hint: "Use for traveller in travellers and place the personal message inside it.", solution: `travellers = ["Amina", "Omar", "Sara"]
for traveller in travellers:
    print(f"{traveller} is ready.")
print("Everyone is ready. Let us go!")` },
        { id: "cafe", title: "Café Order List", mission: "Display Order: followed by every drink, then Kitchen notified once.", starterCode: `drinks = ["tea", "coffee", "juice"]

# Display every order

print("Kitchen notified.")`, hint: "Use a singular drink variable and keep Kitchen notified outside the loop.", solution: `drinks = ["tea", "coffee", "juice"]
for drink in drinks:
    print(f"Order: {drink}")
print("Kitchen notified.")` },
        { id: "team", title: "Team Member Welcome", mission: "Welcome every team member with one loop, then display Team ready once.", starterCode: `members = ["Noor", "Ali", "Maya"]

# Welcome the members

print("Team ready.")`, hint: "The loop variable member represents one current value from members.", solution: `members = ["Noor", "Ali", "Maya"]
for member in members:
    print(f"Welcome, {member}!")
print("Team ready.")` },
        { id: "letters", title: "Secret Word Reveal", mission: "Display each character of the secret word on its own line, then Revealed! once.", starterCode: `secret = "BRAVE"

# Reveal the characters

print("Revealed!")`, hint: "A string can be visited directly: for letter in secret.", solution: `secret = "BRAVE"
for letter in secret:
    print(letter)
print("Revealed!")` },
        { id: "scores", title: "Scores Above Ten", mission: "Display only scores greater than 10 using one for loop and one if statement.", starterCode: `scores = [6, 14, 9, 18]

# Display qualifying scores`, hint: "Visit every score, then check score > 10 inside the loop.", solution: `scores = [6, 14, 9, 18]
for score in scores:
    if score > 10:
        print(score)` },
        { id: "packing", title: "Packing Checklist", mission: "Display a check mark message for every item, then Bag ready exactly once.", starterCode: `items = ["passport", "water", "map"]

# Check every item

print("Bag ready.")`, hint: "Put the item-specific check inside the loop and the closing message outside.", solution: `items = ["passport", "water", "map"]
for item in items:
    print(f"Checked: {item}")
print("Bag ready.")` }
      ]
    },
    quizGenerator: {
      activities: [
        { id: "meaning", question: "What does a for loop do in this lesson?", code: "", options: ["Processes available items one at a time", "Repeats forever", "Creates a file", "Deletes a value"], correct: 0, explanation: "Correct — Python visits each available item and then stops naturally." },
        { id: "letters", question: "What is displayed?", code: `for letter in "Hi":
    print(letter)`, options: ["H then i on separate lines", "Hi twice", "letter twice", "Nothing"], correct: 0, explanation: "Correct — a string supplies its characters from left to right." },
        { id: "final-once", question: "How many times does Finished appear?", code: `items = ["pen", "book", "bag"]
for item in items:
    print(item)
print("Finished")`, options: ["Once", "Three times", "Four times", "Never"], correct: 0, explanation: "Correct — the final print is outside the loop." },
        { id: "loop-variable", question: "During each repetition, what does colour refer to?", code: `for colour in colours:
    print(colour)`, options: ["The current item", "The complete program", "Always the first item", "A condition"], correct: 0, explanation: "Correct — the loop variable receives one current item at a time." },
        { id: "empty", question: "What is displayed?", code: `items = []
for item in items:
    print(item)
print("Done")`, options: ["Only Done", "item", "An error", "Nothing"], correct: 0, explanation: "Correct — the empty collection gives the body zero repetitions, then the program continues." },
        { id: "indent", question: "Which instruction repeats?", code: `for city in cities:
    print(city)
print("Finished")`, options: ["The indented print(city)", "Only Finished", "Both instructions forever", "Neither instruction"], correct: 0, explanation: "Correct — indentation marks the for-loop body." },
        { id: "name", question: "Which loop variable is clearer for a collection named students?", code: "", options: ["student", "x", "thing", "value2"], correct: 0, explanation: "Correct — student clearly describes one current item from students." },
        { id: "while-difference", question: "When is a for loop especially useful?", code: "", options: ["When processing available items", "Only when a condition must stay True", "Only when reading files", "Only for numbers"], correct: 0, explanation: "Correct — a for loop naturally visits the items supplied to it." },
        { id: "three", question: "How many personal messages appear?", code: `names = ["A", "B", "C"]
for name in names:
    print(f"Hello {name}")`, options: ["Three", "One", "Four", "Zero"], correct: 0, explanation: "Correct — the body runs once for each of the three names." },
        { id: "if-filter", question: "Which values are displayed?", code: `numbers = [2, 7, 4, 9]
for number in numbers:
    if number > 5:
        print(number)`, options: ["7 and 9", "2 and 4", "Every number", "Only 5"], correct: 0, explanation: "Correct — the loop visits all values, while the if statement displays only those above 5." },
        { id: "counter", question: "What is the final value of count?", code: `count = 0
for letter in "code":
    count = count + 1
print(count)`, options: ["4", "3", "5", "0"], correct: 0, explanation: "Correct — code has four characters, so the loop adds one four times." },
        { id: "automatic-stop", question: "Why does a for loop over a small list stop?", code: "", options: ["No items remain", "Its variable becomes False", "print stops it", "It always needs break"], correct: 0, explanation: "Correct — after the last available item, the loop is complete." }
      ]
    },
    quiz: {
      question: "What will this program display?",
      code: `for letter in "Hi":
    print(letter)`,
      options: ["H then i on separate lines", "Hi twice", "letter twice", "Nothing"],
      correct: 0,
      explanation: "Correct — the for loop takes H first and i second, displaying each character on its own line."
    }
  },
  26: {
    title: "The range() Function",
    stage: "Repetition",
    level: "Beginner",
    time: "25 minutes",
    tags: ["Controlled counting", "range()", "Start stop step"],
    usesInput: false,
    intro: "A for loop can visit items that already exist. With range(), you can instead describe a safe number sequence—where it starts, where it stops and how it moves.",
    explanation: `<code>range()</code> describes a sequence of integers that a <code>for</code> loop can use one at a time.<br><br>In <code>range(1, 6)</code>, counting starts at 1 and stops <strong>before</strong> 6. That gives 1, 2, 3, 4 and 5. The stopping value is a boundary, not an included result.`,
    concept: "range(start, stop) includes the start and stops before the stop. Add a step when you want larger jumps or a countdown.",
    starterCode: `for repetition in range(1, 6):
    print(f"Exercise {repetition}")

print("Session complete.")`,
    expectedOutput: `Exercise 1
Exercise 2
Exercise 3
Exercise 4
Exercise 5
Session complete.`,
    lineByLine: [
      "range(1, 6) begins at 1 and prepares values up to, but not including, 6.",
      "The for loop gives each prepared value the meaningful name repetition.",
      "The indented print() runs once for 1, 2, 3, 4 and 5.",
      "The default step is 1, so each new value is one larger than the previous value.",
      "The final unindented message runs once after the range has no more values."
    ],
    outputExplanation: "Five Exercise lines appear because range(1, 6) supplies five values. Exercise 6 does not appear: 6 is the excluded stopping boundary. Session complete appears once because it is outside the loop.",
    changeIt: `First change the stop from <code>6</code> to <code>9</code> and predict the final repetition number.<br><br>Next try <code>range(4)</code>. It begins at zero and supplies 0, 1, 2 and 3. Then try <code>range(2, 11, 2)</code> to count by twos.<br><br>Finally run <code>range(5, 0, -1)</code> for a countdown, and <code>range(5, 5)</code> to observe a loop body that runs zero times.`,
    challenge: {
      title: "Launch Sequence Controller",
      mission: "Use one upward range for Launch check 1 through 5, then another range to count down 3, 2, 1. Display Liftoff! exactly once.",
      starterCode: `# Display Launch check 1 through Launch check 5

# Count down from 3 to 1

print("Liftoff!")`
    },
    hint: "range(1, 6) supplies 1 through 5. range(3, 0, -1) supplies 3 through 1. Keep Liftoff! outside both loops.",
    solution: `for check in range(1, 6):
    print(f"Launch check {check}")

for count in range(3, 0, -1):
    print(count)

print("Liftoff!")`,
    practiceCoach: {
      knowledgeBoundary: "Use only Lessons 1–26: values, strings, numbers, arithmetic, decisions, while loops, for loops, range, f-strings and print. Do not use break, continue, nested loops, collection comprehensions or functions.",
      activities: [
        { id: "five-repetitions", stage: "EASY START · START INCLUDED STOP EXCLUDED", title: "Five Exercise Repetitions", mission: "Change the program to eight repetitions and predict the final displayed number.", starterCode: `for repetition in range(1, 6):
    print(f"Exercise {repetition}")`, hint: "To include 8, the excluded stopping boundary must be 9.", check: { mustChange: true, mustRun: true } },
        { id: "zero-based", stage: "ONE ARGUMENT · START AT ZERO", title: "Zero-Based Counter", mission: "Run the sequence, change the stop to 7 and explain why the final number is 6.", starterCode: `for number in range(4):
    print(number)`, hint: "range(stop) starts at zero and stops before the supplied value.", check: { mustChange: true, mustRun: true } },
        { id: "twos", stage: "THREE ARGUMENTS · CONTROL THE STEP", title: "Count by Twos", mission: "Change the starting value and step, then predict every result before running.", starterCode: `for number in range(2, 11, 2):
    print(number)`, hint: "Read the three values as start, stop-before and step.", check: { mustChange: true, mustRun: true } },
        { id: "countdown", stage: "NEGATIVE STEP · MOVE DOWNWARD", title: "Countdown to Go", mission: "Begin at 8, count down to 1 and keep Go! appearing once.", starterCode: `for count in range(5, 0, -1):
    print(count)

print("Go!")`, hint: "A negative step moves toward the smaller stopping boundary.", check: { mustChange: true, mustRun: true } },
        { id: "times-table", stage: "REUSE ARITHMETIC · KNOWN REPETITIONS", title: "Small Multiplication Pattern", mission: "Change the multiplier from 3 to 4 and check every answer.", starterCode: `multiplier = 3

for number in range(1, 6):
    answer = number * multiplier
    print(f"{number} × {multiplier} = {answer}")`, hint: "Change multiplier only; the same loop will calculate every new answer.", check: { mustChange: true, mustRun: true } },
        { id: "empty-range", stage: "ZERO REPETITIONS · CONTINUE AFTERWARD", title: "Empty Range", mission: "Run the empty range, then change stop so exactly three numbers appear.", starterCode: `for number in range(4, 4):
    print(number)

print("Finished.")`, hint: "Starting at 4 with a stop of 7 supplies 4, 5 and 6.", check: { mustChange: true, mustRun: true } },
        { id: "tickets", stage: "REAL-WORLD NUMBERS · FIRST AND LAST", title: "Ticket Numbers", mission: "Extend the sequence by two tickets without changing the print instruction.", starterCode: `for ticket in range(101, 106):
    print(f"Ticket {ticket}")`, hint: "The current final ticket is 105, while 106 is excluded.", check: { mustChange: true, mustRun: true } }
      ]
    },
    freshPracticeGenerator: {
      templates: [
        { id: "fresh-up", skill: "Start and Stop", title: "Fresh Count Up", mission: "Predict the generated sequence, then extend its stopping boundary.", starterCode: `for number in range({{start}}, {{stop}}):
    print(number)`, hint: "Begin at start and finish one number before stop.", solution: "The last possible value is stop minus one.", success: "You completed a fresh count-up range.", check: { mustChange: true }, values: { start: [0, 1, 2, 3, 4], stop: [6, 7, 8, 9, 10] } },
        { id: "fresh-zero", skill: "Zero-Based Range", title: "Fresh Zero Start", mission: "Predict how many values appear, then choose a new stop.", starterCode: `for number in range({{stop}}):
    print(f"Number: {number}")`, hint: "One-argument range begins at zero and excludes the stop.", solution: "The output runs from zero through stop minus one.", success: "You completed a fresh zero-based range.", check: { mustChange: true }, values: { stop: [3, 4, 5, 6, 7, 8] } },
        { id: "fresh-step", skill: "Positive Steps", title: "Fresh Stepping Range", mission: "Predict each generated jump, then change the positive step.", starterCode: `for number in range({{start}}, {{stop}}, {{step}}):
    print(number)`, hint: "Add the step repeatedly while the result remains below stop.", solution: "Use a positive step because the sequence moves upward.", success: "You completed a fresh stepped range.", check: { mustChange: true }, values: { start: [0, 1, 2, 3], stop: [10, 12, 15, 18], step: [2, 3, 4] } },
        { id: "fresh-down", skill: "Countdown", title: "Fresh Countdown", mission: "Predict the descending output, then choose a new starting number.", starterCode: `for count in range({{start}}, {{stop}}, -1):
    print(count)

print("Done!")`, hint: "The negative step moves downward and the stop remains excluded.", solution: "For a countdown to 1, use stop 0 with step -1.", success: "You completed a fresh countdown range.", check: { mustChange: true }, values: { start: [3, 4, 5, 6, 7, 8], stop: [0] } },
        { id: "fresh-label", skill: "Numbered Messages", title: "Fresh Numbered Activity", mission: "Run the generated activity count, then increase its total.", starterCode: `for number in range(1, {{stop}}):
    print(f"{{label}} {number}")`, hint: "The stop is one greater than the final displayed activity number.", solution: "Keep start at 1 and increase stop to create more messages.", success: "You created a fresh numbered activity.", check: { mustChange: true }, values: { stop: [4, 5, 6, 7], label: ["Round", "Exercise", "Step", "Practice"] } },
        { id: "fresh-table", skill: "Range with Arithmetic", title: "Fresh Multiplication Pattern", mission: "Check every generated product, then change the multiplier.", starterCode: `multiplier = {{multiplier}}

for number in range(1, {{stop}}):
    answer = number * multiplier
    print(f"{number} × {multiplier} = {answer}")`, hint: "The loop controls number; multiplier stays fixed during this run.", solution: "Multiply the current number by the stored multiplier inside the loop.", success: "You completed a fresh multiplication pattern.", check: { mustChange: true }, values: { multiplier: [2, 3, 4, 5, 6], stop: [4, 5, 6] } }
      ]
    },
    challengeGenerator: {
      activities: [
        { id: "launch", title: "Launch Sequence Controller", mission: "Display Launch check 1 through 5, count down 3 through 1, then Liftoff! once.", starterCode: `# Build the check loop

# Build the countdown

print("Liftoff!")`, hint: "Use range(1, 6), then range(3, 0, -1).", solution: `for check in range(1, 6):
    print(f"Launch check {check}")
for count in range(3, 0, -1):
    print(count)
print("Liftoff!")` },
        { id: "exercise", title: "Exercise Repetition Board", mission: "Display Repetition 1 through Repetition 8, then Workout complete once.", starterCode: `# Build eight repetitions

print("Workout complete.")`, hint: "To include 8, stop before 9.", solution: `for repetition in range(1, 9):
    print(f"Repetition {repetition}")
print("Workout complete.")` },
        { id: "evens", title: "Even Number Display", mission: "Display every even number from 2 through 12 using one range.", starterCode: `# Build the even-number loop`, hint: "Start at 2, stop before 13 and move by 2.", solution: `for number in range(2, 13, 2):
    print(number)` },
        { id: "tickets", title: "Ticket Number Printer", mission: "Display Ticket 201 through Ticket 206 without writing six print instructions.", starterCode: `# Build the ticket loop`, hint: "Start at 201 and use an excluded stop of 207.", solution: `for ticket in range(201, 207):
    print(f"Ticket {ticket}")` },
        { id: "table", title: "Five Times Pattern", mission: "Display 1 × 5 through 6 × 5 with calculated answers.", starterCode: `multiplier = 5

# Build the multiplication loop`, hint: "Use range(1, 7), calculate answer, then display all three values.", solution: `multiplier = 5
for number in range(1, 7):
    answer = number * multiplier
    print(f"{number} × {multiplier} = {answer}")` },
        { id: "reverse", title: "Reverse Countdown", mission: "Display 10, 8, 6, 4 and 2, then Finished once.", starterCode: `# Build the descending loop

print("Finished.")`, hint: "Start at 10, stop before 0 and step by -2.", solution: `for number in range(10, 0, -2):
    print(number)
print("Finished.")` }
      ]
    },
    quizGenerator: {
      activities: [
        { id: "stop-excluded", question: "What values does range(1, 5) provide?", code: "", options: ["1, 2, 3, 4", "1, 2, 3, 4, 5", "0, 1, 2, 3, 4", "Only 5"], correct: 0, explanation: "Correct — start is included and stop is excluded." },
        { id: "zero-start", question: "What is displayed?", code: `for number in range(3):
    print(number)`, options: ["0, 1, 2", "1, 2, 3", "0, 1, 2, 3", "Only 3"], correct: 0, explanation: "Correct — one-argument range begins at zero and stops before 3." },
        { id: "twos", question: "Which range provides 2, 4, 6 and 8?", code: "", options: ["range(2, 9, 2)", "range(2, 8, 2)", "range(1, 9, 2)", "range(8, 2, 2)"], correct: 0, explanation: "Correct — 2 starts the sequence, 9 is excluded and the step is 2." },
        { id: "down", question: "What is displayed?", code: `for count in range(3, 0, -1):
    print(count)`, options: ["3, 2, 1", "3, 2, 1, 0", "0, 1, 2, 3", "Nothing"], correct: 0, explanation: "Correct — the negative step moves downward and zero is excluded." },
        { id: "empty", question: "How many times does the body run?", code: `for number in range(5, 5):
    print(number)`, options: ["Zero", "One", "Five", "Forever"], correct: 0, explanation: "Correct — the start is already at the excluded stop boundary." },
        { id: "zero-step", question: "What happens with range(1, 5, 0)?", code: "", options: ["Python raises ValueError", "It repeats 1 forever", "It displays zero", "It counts normally"], correct: 0, explanation: "Correct — a range step cannot be zero because it would not move." },
        { id: "last-value", question: "What is the final displayed number?", code: `for number in range(4, 9):
    print(number)`, options: ["8", "9", "4", "7"], correct: 0, explanation: "Correct — 9 is excluded, so 8 is the final value." },
        { id: "step-three", question: "What values appear?", code: `for number in range(1, 10, 3):
    print(number)`, options: ["1, 4, 7", "1, 4, 7, 10", "3, 6, 9", "1 through 9"], correct: 0, explanation: "Correct — repeatedly add 3 while remaining below 10." },
        { id: "wrong-direction", question: "Why does range(5, 0) provide no values?", code: "", options: ["The default positive step moves the wrong way", "Five is invalid", "Stop must be larger than 10", "A for loop needs input"], correct: 0, explanation: "Correct — a countdown needs a negative step." },
        { id: "five-runs", question: "How many times does the body run?", code: `for repetition in range(1, 6):
    print(repetition)`, options: ["Five", "Six", "Four", "One"], correct: 0, explanation: "Correct — the supplied values are 1 through 5." },
        { id: "after-loop", question: "How many times does Done appear?", code: `for number in range(3):
    print(number)
print("Done")`, options: ["Once", "Three times", "Four times", "Never"], correct: 0, explanation: "Correct — the unindented line runs once after the loop." },
        { id: "best-use", question: "When is for with range() especially clear?", code: "", options: ["When a numeric sequence or known repetition count is needed", "Only for strings", "Only for endless repetition", "Only after defining a list"], correct: 0, explanation: "Correct — range describes controlled integer movement without manually listing every value." }
      ]
    },
    quiz: {
      question: "What values will this program display?",
      code: `for number in range(1, 5):
    print(number)`,
      options: ["1, 2, 3, 4", "1, 2, 3, 4, 5", "0, 1, 2, 3, 4", "Only 5"],
      correct: 0,
      explanation: "Correct — range includes 1 and stops before 5, so the final displayed value is 4."
    }
  }
};
