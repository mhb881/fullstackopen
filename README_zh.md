# Full Stack Open 全栈公开课

<p align="center">
  <a href="README.md">English</a> •
  <a href="README_zh.md">简体中文</a>
</p>

<p align="center">
  <a href="https://fullstackopen.com/zh/"><img src="https://img.shields.io/badge/课程-Full%20Stack%20Open-2b3a4a?style=flat-square&logo=react" alt="课程: Full Stack Open" /></a>
  <a href="https://www.helsinki.fi/zh"><img src="https://img.shields.io/badge/大学-赫尔辛基大学-002f6c?style=flat-square" alt="赫尔辛基大学" /></a>
  <img src="https://img.shields.io/badge/进度-Part%200%20已完成-brightgreen?style=flat-square" alt="学习进度" />
  <img src="https://img.shields.io/badge/License-MIT-blue?style=flat-square" alt="License" />
</p>

---

## 📖 项目简介

本项目用于记录和存放我在学习赫尔辛基大学（University of Helsinki）开设的著名全栈开发课程 **[Full Stack Open](https://fullstackopen.com/zh/)** 过程中的所有练习代码、笔记、流程图以及项目实现。

该课程深入介绍现代 Web 应用程序开发技术，核心围绕基于 React 的单页面应用（SPA）、基于 Node.js 与 Express 构建的 RESTful API 服务、MongoDB 与 PostgreSQL 数据库、自动化测试、状态管理、TypeScript、GraphQL、Docker 容器化以及现代 CI/CD 自动化部署。

---

## 🗺️ 课程大纲与完成进度

| 章节 (Part) | 主题内容                                             |      对应目录      | 当前状态  |
| :---------: | :--------------------------------------------------- | :----------------: | :-------: |
|    **0**    | **Web 应用基础 (Fundamentals of Web apps)**          | [`/part0`](part0/) | ✅ 已完成 |
|    **1**    | **React 入门 (Introduction to React)**               |      `/part1`      | ⏳ 进行中 |
|    **2**    | **与服务器通信 (Communicating with server)**         |      `/part2`      | 📋 计划中 |
|    **3**    | **Node.js 与 Express 服务端编程**                    |      `/part3`      | 📋 计划中 |
|    **4**    | **测试 Express 服务端与用户管理**                    |      `/part4`      | 📋 计划中 |
|    **5**    | **测试 React 应用**                                  |      `/part5`      | 📋 计划中 |
|    **6**    | **高级状态管理 (Redux & React Query)**               |      `/part6`      | 📋 计划中 |
|    **7**    | **React Router、自定义 Hook、样式与 Webpack**        |      `/part7`      | 📋 计划中 |
|    **8**    | **GraphQL**                                          |      `/part8`      | 📋 计划中 |
|    **9**    | **TypeScript**                                       |      `/part9`      | 📋 计划中 |
|   **10**    | **React Native 跨平台移动端开发**                    |     `/part10`      | 📋 计划中 |
|   **11**    | **CI / CD 持续集成与持续交付**                       |     `/part11`      | 📋 计划中 |
|   **12**    | **容器技术 (Containers - Docker)**                   |     `/part12`      | 📋 计划中 |
|   **13**    | **关系型数据库 (Relational Databases - PostgreSQL)** |     `/part13`      | 📋 计划中 |

---

## 📂 章节内容详述

### [Part 0: Web 应用基础](part0/)

学习经典 Web 应用架构、HTTP 请求响应周期、DOM 树、AJAX 与单页面应用（SPA）原理。

- [`part0/ex04.md`](part0/ex04.md) - 练习 0.4: 传统 Web 应用提交新笔记的时序图（Mermaid Sequence Diagram）
- [`part0/ex05.md`](part0/ex05.md) - 练习 0.5: 单页面应用（SPA）初次加载流程时序图
- [`part0/ex06.md`](part0/ex06.md) - 练习 0.6: 单页面应用（SPA）中提交新笔记时序图

### [Part 1: React 入门](part1/) _(下一阶段)_

- 组件基础语法、JSX、Props 传参、组件内部状态（`useState`）、事件驱动与 React 开发调试技巧。

### [Part 2: 与服务器通信](part2/)

- 集合渲染与 Keys、受控组件与表单处理、使用 Axios 从后端获取数据、副作用处理（`useEffect`）、RESTful 风格。

### [Part 3: Node.js 与 Express 服务端编程](part3/)

- 搭建 RESTful API 服务、Node.js 核心、Express 中间件机制、MongoDB 数据库（Mongoose ODM）、数据校验、全局错误处理与 ESLint 规范。

### [Part 4: 测试 Express 服务端与用户管理](part4/)

- 结构化后端工程架构、使用 Jest 与 Supertest 进行 API 集成测试、用户管理与密码散列（bcrypt）、基于 JWT 的身份验证机制。

### [Part 5: 测试 React 应用](part5/)

- 前端登录态保持与 Token 处理、`props.children` 与组件复用、React Testing Library 单元与集成测试、Playwright / Cypress 端到端（E2E）测试。

### [Part 6: 高级状态管理](part6/)

- Flux 架构、Redux Toolkit 状态流转、React Query（TanStack Query）异步服务端状态管理、`useReducer` + `useContext` 原生方案。

### [Part 7: React Router、自定义 Hook、样式与 Webpack](part7/)

- 声明式路由导航（React Router）、抽离与封装自定义 Hooks、现代 CSS 方案（Tailwind、CSS Modules、Styled Components 等）、深入构建工具 Webpack 配置。

### [Part 8: GraphQL](part8/)

- GraphQL 核心概念与 Schema 定义、Query 与 Mutation、基于 Apollo Server 搭建服务端、基于 Apollo Client 在 React 中消费 GraphQL。

### [Part 9: TypeScript](part9/)

- TypeScript 静态类型系统、类型推断与联合类型、带类型的 Express 后端 API 开发、强类型 React 组件开发。

### [Part 10: React Native 跨平台移动端开发](part10/)

- React Native 核心组件与布局、Expo 开发工作流、在移动端集成 Apollo Client 与状态通信、移动端测试。

### [Part 11: CI / CD](part11/)

- 使用 GitHub Actions 搭建自动化流水线、代码风格检查、自动化测试、语义化版本控制与自动化生产部署。

### [Part 12: 容器技术 (Docker)](part12/)

- 容器与镜像基础、编写高效 Dockerfile、多阶段构建优化、使用 Docker Compose 编排多服务开发与生产环境。

### [Part 13: 关系型数据库 (PostgreSQL)](part13/)

- 关系型数据建模、PostgreSQL 数据库操作、Sequelize ORM、数据库迁移（Migrations）与多表关联查询。

---

## 🛠️ 技术栈与工具清单

- **前端技术：** React、React Router、Redux Toolkit、React Query、HTML5、CSS3、Tailwind CSS / Styled Components
- **后端技术：** Node.js、Express、REST API、GraphQL、Apollo Server
- **数据库：** MongoDB (Mongoose)、PostgreSQL (Sequelize)
- **开发语言：** JavaScript (ES6+)、TypeScript
- **测试框架：** Jest、Supertest、Vitest、React Testing Library、Playwright、Cypress
- **工程化与运维：** Vite、Webpack、Docker、Docker Compose、GitHub Actions、ESLint
- **图表绘制：** Mermaid.js

---

## 🚀 本地运行与开发指引

### 环境要求

- [Node.js](https://nodejs.org/) (推荐 v20+)
- 包管理器：[npm](https://www.npmjs.com/) / [pnpm](https://pnpm.io/) / [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

### 克隆仓库

```bash
git clone https://github.com/mhb881/fullstackopen.git
cd fullstackopen
```

### 运行具体练习项目

各阶段的练习独立存放于对应目录下，并拥有独立的 `package.json`：

```bash
# 进入指定练习目录 (例如 Part 1)
cd part1/courseinfo

# 安装依赖
npm install

# 启动本地开发服务
npm run dev
```

---

## 🔗 实用资源链接

- [Full Stack Open 官方网站 (中文版)](https://fullstackopen.com/zh/)
- [课程作业提交系统](https://studies.cs.helsinki.fi/stats/courses/fullstackopen)
- [赫尔辛基大学 MOOC 平台](https://www.mooc.fi/en/)
- [Full Stack Open 官方 Discord 社区](https://study.cs.helsinki.fi/discord/join/fullstack)

---

## 📄 开源许可证

本项目基于 [MIT License](LICENSE) 开源。课程内容与作业要求来源于赫尔辛基大学开设的 [Full Stack Open](https://fullstackopen.com/) 课程。
