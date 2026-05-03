# QA Automation Assignment (Playwright)

## 📌 Project Overview

This project demonstrates end-to-end QA automation using **Playwright (JavaScript)**.
It covers both **UI automation** (DemoQA Book Store) and **API automation** (ReqRes), following the **Page Object Model (POM)** and **data-driven testing** approach.

---

## 🛠️ Tech Stack

* Playwright (JavaScript)
* Node.js
* POM (Page Object Model)
* JSON (data-driven testing)

---

## 📂 Project Structure

```
qa-automation-playwright/
├── tests/
│      └── api.spec.js
       └── bookstore.spec.js
├── api/
│   ├── baseAPI.js
│   ├── userAPI.js
│   ├── endpoints.js
|   ├── userAPI.js
├── pages/
│   ├── loginPage.js
│   ├── bookStorePage.js
|   ├── BasePage.js
├── test-data/
│   └── data.json
├── utils/
│   └── apiUtils.js
├── playwright.config.js
├── package.json
└── README.md
```

---

## ✅ Features Implemented

### 🔹 UI Automation (DemoQA)

* Navigate to Book Store Application
* Login with valid user
* Validate username and logout button
* Search for a book
* Validate search results
* Extract and store book details
* Logout functionality

---

### 🔹 API Automation (ReqRes)

* Create a user (POST)
* Validate response status and schema
* Get user details (GET)
* Update user details (PUT)
* Response validation and chaining where applicable

---

## 📊 Test Report

Playwright HTML report is generated after test execution.

To view the report:

```
npx playwright show-report
```

📸 Screenshot of the report is included in the repository.

---

## ▶️ How to Run the Project

### 1. Install dependencies

```
npm install
```

### 2. Run tests

```
npx playwright test
```

### 3. Open HTML report

```
npx playwright show-report
```

---

## 📁 Test Data

All test data is maintained in:

```
test-data/data.json
```

---

## 💡 Approach

* Followed **POM design pattern** for scalability and maintainability
* Implemented **data-driven testing** using JSON
* Separated UI and API layers for clarity
* Used reusable utility functions for validation

---

## 🚀 Conclusion

This project demonstrates a structured and scalable QA automation framework combining both UI and API testing using Playwright.

---
