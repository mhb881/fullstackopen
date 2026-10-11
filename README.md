# Full Stack Open

<p align="center">
  <a href="README.md">English</a> •
  <a href="README_zh.md">简体中文</a>
</p>

<p align="center">
  <a href="https://fullstackopen.com/en/"><img src="https://img.shields.io/badge/Course-Full%20Stack%20Open-2b3a4a?style=flat-square&logo=react" alt="Course: Full Stack Open" /></a>
  <a href="https://www.helsinki.fi/en"><img src="https://img.shields.io/badge/University-University%20of%20Helsinki-002f6c?style=flat-square" alt="University of Helsinki" /></a>
  <img src="https://img.shields.io/badge/Progress-Part%200%20Completed-brightgreen?style=flat-square" alt="Progress" />
  <img src="https://img.shields.io/badge/License-MIT-blue?style=flat-square" alt="License" />
</p>

---

## 📖 Overview

This repository contains my exercise submissions, coursework, notes, and projects for **[Full Stack Open](https://fullstackopen.com/en/)**, offered by the **University of Helsinki**.

The course serves as a comprehensive, modern deep dive into full-stack web development. It focuses on single-page applications (SPA) built with React, backend services using Node.js, Express, and databases (MongoDB & PostgreSQL), testing, state management, containerization, and modern deployment practices.

---

## 🗺️ Course Curriculum & Progress

|  Part  | Topic                                             |     Directory      |     Status     |
| :----: | :------------------------------------------------ | :----------------: | :------------: |
| **0**  | **Fundamentals of Web apps**                      | [`/part0`](part0/) |  ✅ Completed  |
| **1**  | **Introduction to React**                         |      `/part1`      | ⏳ In Progress |
| **2**  | **Communicating with server**                     |      `/part2`      |   📋 Planned   |
| **3**  | **Programming a server with NodeJS and Express**  |      `/part3`      |   📋 Planned   |
| **4**  | **Testing Express servers, user administration**  |      `/part4`      |   📋 Planned   |
| **5**  | **Testing React apps**                            |      `/part5`      |   📋 Planned   |
| **6**  | **Advanced state management**                     |      `/part6`      |   📋 Planned   |
| **7**  | **React router, custom hooks, styling & webpack** |      `/part7`      |   📋 Planned   |
| **8**  | **GraphQL**                                       |      `/part8`      |   📋 Planned   |
| **9**  | **TypeScript**                                    |      `/part9`      |   📋 Planned   |
| **10** | **React Native**                                  |     `/part10`      |   📋 Planned   |
| **11** | **CI / CD**                                       |     `/part11`      |   📋 Planned   |
| **12** | **Containers - Docker**                           |     `/part12`      |   📋 Planned   |
| **13** | **Relational databases**                          |     `/part13`      |   📋 Planned   |

---

## 📂 Content Details

### [Part 0: Fundamentals of Web apps](part0/)

Introduction to web application architectures, HTTP requests, HTML/CSS, the DOM, AJAX, and Single-Page Applications (SPAs).

- [`part0/ex04.md`](part0/ex04.md) - Exercise 0.4: Sequence diagram for creating a new note (traditional web application)
- [`part0/ex05.md`](part0/ex05.md) - Exercise 0.5: Sequence diagram for loading the Single Page App (SPA)
- [`part0/ex06.md`](part0/ex06.md) - Exercise 0.6: Sequence diagram for creating a new note in the Single Page App

### [Part 1: Introduction to React](part1/) _(Next)_

- Component basics, JSX, props, state, event handling, and debugging React applications.

### [Part 2: Communicating with server](part2/)

- Rendering collections, forms, fetching data with Axios, effect hooks, and REST APIs.

### [Part 3: Programming a server with NodeJS and Express](part3/)

- RESTful APIs, Node.js, Express, MongoDB (Mongoose), validation, error handling, ESLint, and deploying to cloud services.

### [Part 4: Testing Express servers, user administration](part4/)

- Project structure, automated testing with Jest and Supertest, user authentication, and token-based auth (JWT).

### [Part 5: Testing React apps](part5/)

- Frontend token authentication, props.children, React testing library, end-to-end (E2E) testing with Cypress / Playwright.

### [Part 6: Advanced state management](part6/)

- Flux architecture, Redux Toolkit, React Query (TanStack Query), and context + reducer pattern.

### [Part 7: React router, custom hooks, styling & webpack](part7/)

- Client-side routing with React Router, custom React hooks, UI component styling (CSS modules, Styled Components, UI libraries), and Webpack configuration.

### [Part 8: GraphQL](part8/)

- GraphQL schema, queries, mutations, Apollo Server, and Apollo Client with React.

### [Part 9: TypeScript](part9/)

- TypeScript fundamentals, typed React components, and typed Express backends.

### [Part 10: React Native](part10/)

- Cross-platform mobile development with React Native, Expo, Apollo Client mobile integration, and testing.

### [Part 11: CI/CD](part11/)

- Continuous Integration and Continuous Delivery with GitHub Actions, automated testing, versioning, and deployment pipelines.

### [Part 12: Containers - Docker](part12/)

- Containerizing development and production environments, Dockerfiles, Docker Compose, and multi-stage builds.

### [Part 13: Relational databases](part13/)

- PostgreSQL, Sequelize ORM, database migrations, join tables, and relational data modeling.

---

## 🛠️ Tech Stack & Tools

- **Frontend:** React, React Router, Redux Toolkit, React Query, HTML5, CSS3, Tailwind / Styled Components
- **Backend:** Node.js, Express, REST APIs, GraphQL, Apollo Server
- **Databases:** MongoDB, Mongoose, PostgreSQL, Sequelize
- **Language:** JavaScript (ES6+), TypeScript
- **Testing:** Jest, Supertest, Vitest, React Testing Library, Playwright, Cypress
- **DevOps & Tooling:** Vite, Webpack, Docker, Docker Compose, GitHub Actions, ESLint
- **Diagrams:** Mermaid.js

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20+ recommended)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/) / [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

### Clone the Repository

```bash
git clone https://github.com/mhb881/fullstackopen.git
cd fullstackopen
```

### Running an Exercise Subproject

Each subfolder contains its own package configuration when applicable:

```bash
# Navigate to a specific part/exercise project
cd part1/courseinfo

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## 🔗 Useful Links

- [Full Stack Open Official Website](https://fullstackopen.com/en/)
- [Course Submissions System](https://studies.cs.helsinki.fi/stats/courses/fullstackopen)
- [University of Helsinki MOOC](https://www.mooc.fi/en/)
- [Full Stack Open Discord Community](https://study.cs.helsinki.fi/discord/join/fullstack)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE). Exercises and coursework are based on the [Full Stack Open](https://fullstackopen.com/) curriculum by the University of Helsinki.
