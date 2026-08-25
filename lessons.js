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
  }
};
