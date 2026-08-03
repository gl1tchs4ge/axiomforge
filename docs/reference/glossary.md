# AxiomForge Glossary

## Purpose

This document defines common terms used throughout the AxiomForge project.

The goal is to keep terminology consistent between:

* Developers.
* Contributors.
* Documentation.
* Future team members.

---

# General Terms

## AxiomForge

The name of the platform being developed.

AxiomForge is a technical learning ecosystem designed to help users develop practical IT, cybersecurity, and programming skills.

---

## User

A person who interacts with the AxiomForge platform.

Users may have different roles depending on their permissions.

Examples:

* Student.
* Reviewer.
* Administrator.

---

## Role

A collection of permissions assigned to a user.

Examples:

```text
Student

Reviewer

Admin
```

Roles define what type of access a user has.

---

## Permission

A specific action a user is allowed to perform.

Examples:

```text
course:create

review:approve

user:manage
```

Permissions provide more granular control than roles alone.

---

# Learning System Terms

## Learning Path

A structured collection of courses designed around a specific goal.

Example:

```text
Cybersecurity Fundamentals Path

↓

Course 1

↓

Course 2

↓

Course 3
```

---

## Course

A collection of lessons organized around a specific topic.

Example:

```text
Web Security Fundamentals
```

---

## Lesson

A single educational unit inside a course.

A lesson may contain:

* Explanations.
* Examples.
* Exercises.
* Labs.
* Assessments.

---

## Lab

A practical environment where users apply knowledge.

Examples:

* Security challenges.
* Programming exercises.
* System administration tasks.

---

## Assessment

A method of evaluating user understanding.

Examples:

* Quizzes.
* Knowledge checks.
* Practical evaluations.

---

## Progress

The recorded advancement of a user through learning resources.

Examples:

* Completed lessons.
* Finished labs.
* Assessment results.

---

# Content Terms

## Content

Educational material available on the platform.

Examples:

* Lessons.
* Labs.
* Documentation.
* Assessments.

---

## Content Author

A person who creates educational material.

---

## Reviewer

A user responsible for evaluating submitted content before publication.

---

## Review Workflow

The process used to verify content quality.

Example:

```text
Draft

↓

Submitted

↓

Reviewed

↓

Approved

↓

Published
```

---

# Technical Terms

## Modular Monolith

An application architecture where:

* The system is deployed as one application.
* Internal components are separated into independent modules.

AxiomForge uses this approach to balance simplicity and future scalability.

---

## Module

A self-contained business domain.

Examples:

```text
Auth Module

Learning Module

Progress Module
```

A module owns its logic and data.

---

## API

Application Programming Interface.

The communication layer between frontend and backend.

AxiomForge uses a REST API.

---

## Endpoint

A specific API route.

Example:

```http
GET /api/v1/courses
```

---

## Session

A temporary authentication state representing a logged-in user.

AxiomForge stores sessions using Redis.

---

## Repository

A code storage location managed with Git.

Also refers to a software pattern used for database access.

---

# Development Terms

## Pull Request (PR)

A request to merge changes into the main codebase.

PRs allow:

* Review.
* Discussion.
* Quality checks.

---

## Contributor

A person who helps improve AxiomForge.

Contributors may submit:

* Code.
* Documentation.
* Bug reports.
* Improvements.

---

## ADR

Architecture Decision Record.

A document explaining important technical decisions.

Example:

```text
ADR-002 Backend Language Choice
```

---

## Version

A specific state of the project.

Example:

```text
v1.0.0
```

Versions document project evolution.

---

# Security Terms

## Authentication

The process of verifying identity.

Example:

"Who are you?"

---

## Authorization

The process of verifying permissions.

Example:

"Are you allowed to do this?"

---

## Input Validation

Checking external data before processing it.

Used to prevent:

* Invalid data.
* Unexpected behavior.
* Security issues.

---

## Sanitization

Removing unsafe content from user-provided data.

Example:

Cleaning Markdown before displaying it.

---

## Vulnerability

A weakness that could allow unintended behavior or compromise.

---

# Summary

This glossary provides a shared vocabulary for AxiomForge.

As the project grows, new terms should be added when they become important enough to avoid confusion.

