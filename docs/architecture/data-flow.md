# AxiomForge Data Flow

## Purpose

This document describes how data moves through the AxiomForge platform.

Unlike the sequence diagrams, which focus on interactions between components, this document focuses on the lifecycle of data from creation to storage and retrieval.

The objectives are to:

- Explain how information flows through the application.
- Define ownership of data.
- Clarify how modules interact.
- Maintain consistency as the platform grows.

---

# Data Flow Principles

AxiomForge follows these principles:

- Every request is validated before processing.
- Each module owns its own data.
- Modules communicate through services rather than directly manipulating another module's data.
- PostgreSQL is the primary source of truth.
- Redis is used only for temporary data such as sessions and caching.

---

# High-Level Data Flow

```text
User
 │
 ▼
Next.js Frontend
 │
 ▼
REST API
 │
 ▼
NestJS Controllers
 │
 ▼
Business Services
 │
 ▼
Repositories
 │
 ▼
PostgreSQL
 │
 ▼
HTTP Response
 │
 ▼
Frontend
```

---

# User Authentication

```text
User Credentials

↓

Validation

↓

Auth Service

↓

User Repository

↓

PostgreSQL

↓

Password Verification

↓

Redis Session

↓

Authenticated User
```

### Notes

- User credentials are validated.
- Passwords are verified using secure hashing.
- Session information is stored in Redis.
- Authentication state is maintained through a secure session cookie.

---

# Learning Content

```text
Author

↓

Course Module

↓

Course Repository

↓

PostgreSQL

↓

Published Course

↓

Student
```

### Notes

Educational content is stored in PostgreSQL after passing the review workflow.

---

# Lesson Completion

```text
Student

↓

Complete Lesson

↓

Progress Module

↓

Progress Repository

↓

PostgreSQL

↓

Updated Progress

↓

Dashboard
```

### Notes

The Progress module owns completion records.

The Learning module should never directly modify progress data.

---

# Assessment Flow

```text
Student Answers

↓

Assessment Module

↓

Evaluation

↓

Results Stored

↓

Progress Updated
```

### Notes

Assessment results may influence course or learning path completion.

---

# Content Review Workflow

```text
Draft

↓

Submitted

↓

Pending Review

↓

Approved / Rejected

↓

Published
```

Only approved content is visible to students.

---

# Data Ownership

Each module is responsible for its own data.

| Module      | Owns                             |
| ----------- | -------------------------------- |
| Auth        | Users, Sessions                  |
| Learning    | Learning Paths, Courses, Lessons |
| Assessments | Quizzes, Attempts, Results       |
| Progress    | Lesson Progress, Course Progress |
| Reviews     | Reviews, Approval Status         |
| Admin       | Administrative Configuration     |

Modules should expose services instead of allowing direct data modification by other modules.

---

# Database as the Source of Truth

PostgreSQL stores all persistent application data.

Examples include:

- Users
- Courses
- Lessons
- Assessments
- Progress
- Reviews

Redis should never become the authoritative data source.

---

# Redis Usage

Redis is used for temporary, high-speed operations.

Current uses include:

- Session storage.
- Short-lived cache entries (future).
- Rate limiting (future).

Redis data should always be recoverable from PostgreSQL when appropriate.

---

# Error Flow

If validation fails:

```text
Request

↓

Validation

↓

Validation Error

↓

HTTP Response

↓

No Database Changes
```

If a database operation fails:

```text
Repository

↓

Exception

↓

Global Exception Handler

↓

Standard API Error Response
```

---

# Future Data Flows

As the platform grows, this document should include flows for:

- Password recovery.
- Email verification.
- Notifications.
- Search indexing.
- Background jobs.
- AI-assisted learning.
- Lab execution.

---

# Summary

AxiomForge follows a predictable data flow:

```text
Client

↓

Validation

↓

Business Logic

↓

Persistence

↓

Response
```

Each module owns its data, PostgreSQL remains the source of truth, and Redis is used only for temporary or performance-related data.
