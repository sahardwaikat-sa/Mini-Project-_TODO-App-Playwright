Mini Project – TODO App Automation Testing
📌 Project Overview

This project is an end-to-end automation testing project for a TODO application using Playwright with JavaScript.

The purpose of this project is to automate the main functionalities of a TODO application and verify that they work as expected.

🛠️ Technologies Used
JavaScript
Playwright
Node.js
Visual Studio Code
Git & GitHub
GitHub Actions (CI/CD)
📂 Project Structure
text
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

The automation tests cover the following TODO application functionalities:

Add a new TODO task.
Display the TODO task.
Mark a task as completed.
Delete a task.
Verify TODO application functionality.

⚙️ Installation and Setup
1. Clone the repository
bash
git clone YOUR_GITHUB_REPOSITORY_URL

2. Navigate to the project folder
bash
cd Mini-Project-TODO-App-Playwright

3. Install dependencies
bash
npm install

4. Install Playwright browsers
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

📊 View Test Reports

To generate and view the HTML report:

bash
npx playwright show-report

🔄 CI/CD Integration

This project uses GitHub Actions to automatically execute Playwright tests when changes are pushed to GitHub.

The workflow helps ensure that the TODO application continues to work correctly after code changes.

👨‍💻 sahar

QA Automation Project

Project: Mini TODO App – Playwright Automation

Framework: Playwright with JavaScript

📚 Learning Objectives
Understand Playwright automation testing.
Implement Page Object Model (POM).
Write reusable test scripts.
Apply data-driven testing.
Execute automated tests.
Integrate Playwright with GitHub Actions.
