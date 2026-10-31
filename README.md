🚀 Mini Project – TODO App Automation Testing

<p align="center">
<img src="https://img.shields.io/badge/Playwright-Automation-45ba4b?logo=playwright" />
<img src="https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript" />
<img src="https://img.shields.io/badge/Node.js-Runtime-green?logo=node.js" />
<img src="https://img.shields.io/badge/GitHub-Actions-black?logo=githubactions" />
</p>

📌 Project Overview

This project is an End-to-End (E2E) Automation Testing Project for a TODO application using Playwright with JavaScript.

The main objective is to automate the main functionalities of the TODO application and verify that they work as expected.

## 🛠️ Technologies & Tools

| Technology | Description |
|---|---|
| 🟨 JavaScript | Programming language |
| 🎭 Playwright | Automation testing framework |
| 🟢 Node.js | JavaScript runtime |
| 💻 VS Code | Code editor |
| 🐙 Git & GitHub | Version control |
| ⚙️ GitHub Actions | CI/CD automation |
## 📂 Project Structure

```text
Mini-Project-TODO-App-Playwright/
│
├── pages/
│   └── page.js
│
├── tests/
│   └── todo.spec.js
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── playwright.config.js
├── package.json
├── package-lock.json
└── README.md
🎯 Test Scenarios

The project covers the following test scenarios:

Add a new TODO task.
Display a TODO task.
Mark a task as completed.
Edit an existing task.
Delete a task.
Verify TODO application functionality.
⚙️ Installation & Setup
1️⃣ Clone the Repository
bash
git clone https://github.com/sahardwaikat-sa/Mini-Project_TODO-App-Playwright.git

2️⃣ Navigate to the Project Folder
bash
cd Mini-Project_TODO-App-Playwright

3️⃣ Install Dependencies
bash
npm install

4️⃣ Install Playwright Browsers
bash
npx playwright install

▶️ Running Tests

Run all tests:

bash
npx playwright test


Run tests in headed mode:

bash
npx playwright test --headed


Run a specific test file:

bash
npx playwright test tests/todo.spec.js


Run tests in debug mode:

bash
npx playwright test --debug

📊 Test Reports

To generate and view the HTML report:

bash
npx playwright show-report


The report provides information about:

Passed tests
Failed tests
Test execution time
Error details
Screenshots and traces, when configured
🔄 CI/CD Integration – GitHub Actions

This project uses GitHub Actions to automatically execute Playwright tests.

The workflow helps to:

Run tests automatically.
Detect failures after code changes.
Improve software quality.
Support continuous integration.
📚 Learning Outcomes

Through this project, I gained practical experience in:

Playwright automation using JavaScript.
End-to-End testing.
Page Object Model (POM).
Data-driven testing.
Reusable test scripts.
Git and GitHub.
CI/CD integration using GitHub Actions.
👩‍💻 Project Information
Item	Details
Project Name	TODO App Automation
Framework	Playwright
Programming Language	JavaScript
Testing Type	End-to-End Testing
CI/CD Tool	GitHub Actions
Repository	GitHub Repository

<p align="center">
<b>⭐ Thank you for visiting my project! ⭐</b>
</p>

<p align="center">
Made with ❤️ using Playwright & JavaScript
</p>
