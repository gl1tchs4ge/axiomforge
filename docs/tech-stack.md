# AxiomForge Technology Stack

## Purpose

This document provides an overview of the technologies used throughout AxiomForge.

Technology decisions are made based on the project's requirements, architecture, maintainability, security, and long-term vision.

Detailed reasoning for major decisions can be found in the Architecture Decision Records (ADRs).

---

# Architecture

| Component          | Technology       | Status   |
| ------------------ | ---------------- | -------- |
| Architecture Style | Modular Monolith | Selected |

---

# Backend

| Component | Technology | Status   |
| --------- | ---------- | -------- |
| Language  | TypeScript | Selected |
| Framework | NestJS     | Selected |

---

# Frontend

| Component        | Technology | Status  |
| ---------------- | ---------- | ------- |
| Framework        | TBD        | Pending |
| Styling          | TBD        | Pending |
| State Management | TBD        | Pending |

---

# Database

| Component | Technology | Status  |
| --------- | ---------- | ------- |
| Database  | TBD        | Pending |
| ORM       | TBD        | Pending |

---

# Authentication & Authorization

| Component      | Technology | Status  |
| -------------- | ---------- | ------- |
| Authentication | TBD        | Pending |
| Authorization  | TBD        | Pending |

---

# Testing

| Component           | Technology | Status  |
| ------------------- | ---------- | ------- |
| Unit Testing        | TBD        | Pending |
| Integration Testing | TBD        | Pending |
| End-to-End Testing  | TBD        | Pending |

---

# Infrastructure

| Component        | Technology | Status  |
| ---------------- | ---------- | ------- |
| Containerization | TBD        | Pending |
| Reverse Proxy    | TBD        | Pending |
| Deployment       | TBD        | Pending |
| CI/CD            | TBD        | Pending |

---

# Development Tools

| Component          | Technology | Status   |
| ------------------ | ---------- | -------- |
| Version Control    | Git        | Selected |
| Repository Hosting | GitHub     | Selected |

---

# Guiding Principles

Technology choices should:

* Support the Modular Monolith architecture.
* Prioritize maintainability over premature optimization.
* Follow secure software development practices.
* Be well documented.
* Be appropriate for a solo developer while allowing future contributors.
* Scale with the project's long-term vision.

New technologies should only be introduced when they solve a clear problem or provide significant value.

