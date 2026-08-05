# Technical Decision History

## Purpose

This document provides a summary of the major technical decisions made during the development of AxiomForge.

Detailed explanations, alternatives, and reasoning are documented in the corresponding Architecture Decision Records (ADRs).

ADRs are located in:

```text id="x3m7q9"
docs/decisions/
```

---

# Architecture Decisions

| ADR     | Decision                                  | Purpose                                                                    |
| ------- | ----------------------------------------- | -------------------------------------------------------------------------- |
| ADR-001 | Modular Monolith Architecture             | Establish a scalable application structure without unnecessary complexity. |
| ADR-016 | Project Structure and Module Organization | Define repository organization and application boundaries.                 |
| ADR-017 | Domain Model and Core Modules             | Define the main business domains of the platform.                          |

---

# Backend Decisions

| ADR     | Decision                    | Purpose                                                           |
| ------- | --------------------------- | ----------------------------------------------------------------- |
| ADR-002 | TypeScript Backend Language | Provide type safety and consistency across the stack.             |
| ADR-003 | NestJS Backend Framework    | Provide a structured and maintainable backend architecture.       |
| ADR-005 | TypeORM ORM                 | Provide database interaction while maintaining SQL understanding. |

---

# Database Decisions

| ADR     | Decision                                 | Purpose                                                            |
| ------- | ---------------------------------------- | ------------------------------------------------------------------ |
| ADR-004 | PostgreSQL Primary Database              | Provide a reliable relational database with strong SQL compliance. |
| ADR-018 | Database Design and Entity Relationships | Define database modeling principles and relationships.             |

---

# Frontend Decisions

| ADR     | Decision                    | Purpose                                                                 |
| ------- | --------------------------- | ----------------------------------------------------------------------- |
| ADR-006 | Next.js Frontend Framework  | Provide a modern frontend framework that complements the backend stack. |
| ADR-007 | Tailwind CSS                | Provide consistent and maintainable styling.                            |
| ADR-008 | shadcn/ui Component Library | Reduce unnecessary component development while maintaining flexibility. |

---

# Authentication and Security Decisions

| ADR     | Decision                         | Purpose                                                              |
| ------- | -------------------------------- | -------------------------------------------------------------------- |
| ADR-009 | Session-Based Authentication     | Provide secure authentication suitable for the current project size. |
| ADR-010 | Authorization and Content Review | Establish permissions and quality control workflows.                 |
| ADR-012 | Validation and Data Integrity    | Protect application data and enforce reliable inputs.                |

---

# API Decisions

| ADR     | Decision            | Purpose                                                               |
| ------- | ------------------- | --------------------------------------------------------------------- |
| ADR-011 | API Design Strategy | Define REST-first API principles with future flexibility for GraphQL. |

---

# Development Process Decisions

| ADR     | Decision                                     | Purpose                                        |
| ------- | -------------------------------------------- | ---------------------------------------------- |
| ADR-013 | Testing Strategy                             | Define a balanced testing approach.            |
| ADR-014 | Development Environment and Infrastructure   | Define local development standards.            |
| ADR-015 | CI/CD Pipeline and Development Workflow      | Define collaboration and automation practices. |
| ADR-019 | Coding Standards and Development Conventions | Establish consistent development practices.    |

---

# Decision Timeline

The architecture evolved in the following order:

```text id="w4n8c2"
Project Vision

↓

Architecture Pattern

↓

Backend Stack

↓

Database

↓

Frontend Stack

↓

Authentication

↓

Authorization

↓

API Design

↓

Testing

↓

Infrastructure

↓

Development Standards
```

Each decision was made after considering:

- Project goals.
- Maintainability.
- Security.
- Future growth.
- Development resources.

---

# How to Use ADRs

When making future technical decisions:

1. Check existing ADRs.
2. Determine if the decision affects architecture.
3. Create a new ADR if necessary.
4. Update this document.

---

# Future Decisions

Future ADRs may cover topics such as:

- Lab execution architecture.
- Background job systems.
- Search infrastructure.
- AI integration.
- Deployment architecture.
- Monitoring systems.

---

# Summary

AxiomForge uses Architecture Decision Records to preserve technical history.

This allows future contributors to understand:

- What choices were made.
- Why they were made.
- How the architecture evolved.

The goal is not only to build software, but to create a documented engineering process.
