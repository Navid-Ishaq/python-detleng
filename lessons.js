window.PYTHON_LESSONS = {
  1: {
    title: "Welcome to Python",
    stage: "Foundations",
    level: "Beginner",
    time: "10 minutes",
    tags: ["Runnable lesson", "First program"],
    intro: "Your first goal is deliberately small: understand what a Python instruction looks like, run it yourself, and change it.",
    explanation: "Python is a programming language that lets us give a computer instructions in readable code. Your first instruction uses <strong>print()</strong>, a built-in Python tool that displays something as output.",
    concept: "Code is an instruction. You write the instruction, Python runs it, and you observe the result.",
    starterCode: `print("Hello, Python!")

name = "Learner"
print("Welcome", name)`,
    expectedOutput: `Hello, Python!
Welcome Learner`,
    lineByLine: [
      '<code>print("Hello, Python!")</code> asks Python to display the text between the quotation marks.',
      "The text inside quotation marks is a <strong>string</strong>. A string is how Python represents text.",
      "When you press <strong>Run Python</strong>, Python follows the instructions from top to bottom and the result appears in the output panel."
    ],
    outputExplanation: "Python displays two lines because the program contains two <code>print()</code> instructions. The second line combines the word <code>Welcome</code> with the value named <code>name</code>.",
    changeIt: "Replace <strong>Learner</strong> with your own name. Then change the first greeting. Run the code again and watch the output change.",
    challenge: "Add one more line that displays: <strong>I am learning Python.</strong>",
    hint: "Use <code>print()</code> again and put the sentence inside quotation marks.",
    solution: `print("Hello, Python!")

name = "Learner"
print("Welcome", name)
print("I am learning Python.")`,
    quiz: {
      question: "Which Python function displays text as output?",
      options: ["input()", "print()", "text()"],
      correct: 1,
      explanation: "Correct — print() displays output."
    }
  },
  2: {
    title: "How Python Code Runs",
    stage: "Foundations",
    level: "Beginner",
    time: "12 minutes",
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
    quiz: {
      question: "What will this program display?",
      code: `score = 5
score = 10

print(score)`,
      options: ["5", "10", "5 10", "score"],
      correct: 1,
      explanation: "Correct — score was given a newer value before print(score), so Python displays 10."
    }
  }
};
