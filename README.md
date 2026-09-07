# Playwright Automation Project

End-to-end test automation framework built using **Playwright with TypeScript** and integrated with **Jenkins CI** for automated test execution.

## 🛠️ Tech Stack

- Playwright
- TypeScript
- Node.js
- Git & GitHub
- Jenkins
- JavaScript/TypeScript
- Page Object Model (POM)

## 📁 Project Structure

```text
automation-project/
│
├── pages/                  # Page Object Model classes
├── tests/                  # Test cases
│   ├── e2e/                # End-to-end test scenarios
│   ├── sanity/             # Sanity test cases
│   └── smoke/              # Smoke test cases
│
├── test-data/              # Test data
├── playwright.config.ts    # Playwright configuration
├── Jenkinsfile             # Jenkins CI pipeline
├── package.json            # Project dependencies and scripts
├── package-lock.json       # Locked dependency versions
├── playwright-report/      # HTML test report
└── README.md               # Project documentation
