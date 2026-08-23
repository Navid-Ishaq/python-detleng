# Python · DeTLeng

The source for [python.detleng.com](https://python.detleng.com/), an interactive 100-lesson Python course built around one shared browser-based lesson engine.

## Architecture

- `index.html` — course homepage, navigator, and saved-progress summary
- `lesson.html?id=N` — shared lesson interface
- `lessons.js` — structured lesson content
- `course.js` — lesson rendering, Pyodide execution, quizzes, and local progress

Progress stays in the learner's browser. No account or server-side learner data is required.
