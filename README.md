# Playwright Automation Framework

![Playwright](https://img.shields.io/badge/Playwright-Automation-green)
![JavaScript](https://img.shields.io/badge/Language-JavaScript-yellow)
![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)
![License](https://img.shields.io/badge/License-MIT-red)

A production-style Playwright Automation Framework built using JavaScript and the Page Object Model (POM).

This project automates the complete SauceDemo E-Commerce application including Login, Product Sorting, Add to Cart, Remove from Cart, Checkout, Logout, and End-to-End Purchase Flow.

---

# Project Overview

This project demonstrates modern UI Automation Testing using Playwright with JavaScript.

The framework follows the Page Object Model (POM) design pattern, making the project scalable, reusable, and easy to maintain.

---

# Features

- Page Object Model (POM)
- Reusable Base Page
- Modular Test Design
- Assertions using Playwright Test
- Git Version Control
- GitHub Repository
- HTML Reports
- Cross-browser Support
- End-to-End Automation

---

# Technology Stack

| Technology | Version |
|------------|----------|
| JavaScript | ES6 |
| Playwright | Latest |
| Node.js | Latest LTS |
| Git | Version Control |
| GitHub | Repository |

---

# Project Structure

```
Playwright-Automation/
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── pages/
│   ├── BasePage.js
│   ├── LoginPage.js
│   ├── InventoryPage.js
│   ├── CartPage.js
│   ├── CheckoutPage.js
│   └── MenuPage.js
│
├── tests/
│   ├── login.spec.js
│   ├── invalidLogin.spec.js
│   ├── inventory.spec.js
│   ├── cart.spec.js
│   ├── removeFromCart.spec.js
│   ├── checkout.spec.js
│   ├── logout.spec.js
│   └── endToEnd.spec.js
│
├── test-data/
├── screenshots/
├── utils/
│
├── playwright.config.js
├── package.json
├── package-lock.json
├── README.md
├── LICENSE
└── .gitignore
```

---

# Automated Test Scenarios

### Login

- Valid Login
- Invalid Login

### Inventory

- Verify Products
- Product Sorting

### Cart

- Add Product to Cart
- Remove Product from Cart

### Checkout

- Checkout Information
- Complete Purchase

### Logout

- Logout from Application

### End-to-End

- Login
- Add Product
- Verify Cart
- Checkout
- Logout

---

# Installation

Clone the repository

```bash
git clone https://github.com/bhavanagoud09-sys/Playwright-Automation.git
```

Navigate to the project

```bash
cd Playwright-Automation
```

Install dependencies

```bash
npm install
```

Install Playwright browsers

```bash
npx playwright install
```

---

# Run Tests

Run all tests

```bash
npx playwright test
```

Run a specific test

```bash
npx playwright test tests/login.spec.js
```

Run tests in headed mode

```bash
npx playwright test --headed
```

Run using UI Mode

```bash
npx playwright test --ui
```

---

# Generate HTML Report

```bash
npx playwright show-report
```

---

# Framework Design

The framework follows the **Page Object Model (POM)**.

Each page contains:

- Locators
- Actions
- Assertions
- Reusable methods

This keeps the framework:

- Maintainable
- Scalable
- Easy to understand

---

# Git Commands Used

```bash
git init

git status

git add .

git commit -m "Commit Message"

git push

git pull
```

---

# Folder Description

| Folder | Description |
|---------|-------------|
| pages | Page Object Classes |
| tests | Test Scripts |
| screenshots | Screenshots |
| test-data | Test Data |
| utils | Utility Classes |
| .github | GitHub Actions Workflow |

---

# Future Enhancements

- Data-driven Testing
- Environment Configuration (.env)
- API Testing
- Parallel Execution
- Retry Mechanism
- CI/CD Pipeline
- Docker Integration
- Jenkins Integration

---

# Project Screenshots

(Add screenshots here after completing the project.)

Example:

- Project Structure
- Test Execution
- HTML Report
- GitHub Repository

---

# Author

**Bhavana G**

QA Analyst with experience in Manual Testing of Oracle Retail applications, including Oracle Retail Merchandising Foundation Cloud Service (MFCS), Oracle Retail Order Management System (OMS), Oracle Retail Order Broker (OB), Salesforce Commerce Cloud (SFCC), and Oracle Retail Sales Audit (ReSA). Experienced in end-to-end business process validation and integration testing across retail modules.

This repository showcases my Playwright Automation project built using JavaScript and the Page Object Model (POM), demonstrating my practical skills in UI test automation.

Currently upskilling in Playwright Automation and seeking opportunities to transition into QA Automation roles.

GitHub:
https://github.com/bhavanagoud09-sys

# License

This project is licensed under the MIT License.
