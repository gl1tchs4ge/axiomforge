# AxiomForge Sequence Diagrams

## Purpose

This document describes the major request and interaction flows within AxiomForge.

Unlike the system overview, which explains the overall architecture, sequence diagrams focus on **how components interact over time** to fulfill a request.

These diagrams serve as implementation references and should evolve alongside the application.

---

# Conventions

The diagrams use simplified text notation.

```text
Actor
    │
    ▼
Component
    │
    ▼
Next Component
```

The goal is clarity rather than strict UML compliance.

---

# Login Flow

```
User
 │
 ▼
Next.js Frontend
 │
 ▼
POST /api/v1/auth/login
 │
 ▼
Auth Controller
 │
 ▼
Auth Service
 │
 ▼
User Repository
 │
 ▼
PostgreSQL
 │
 ▼
Verify Password
 │
 ▼
Redis Session Store
 │
 ▼
Session Created
 │
 ▼
HTTP Response
 │
 ▼
Frontend Dashboard
```

### Description

1. User submits credentials.
2. Backend validates the request.
3. User information is retrieved.
4. Password is verified.
5. A session is created in Redis.
6. Session cookie is returned.
7. User is redirected to the application.

---

# Logout Flow

```
User
 │
 ▼
Frontend
 │
 ▼
POST /api/v1/auth/logout
 │
 ▼
Auth Controller
 │
 ▼
Auth Service
 │
 ▼
Redis
 │
 ▼
Delete Session
 │
 ▼
HTTP Response
```

---

# Registration Flow

```
User
 │
 ▼
Frontend
 │
 ▼
POST /api/v1/auth/register
 │
 ▼
Validation
 │
 ▼
Auth Service
 │
 ▼
Hash Password
 │
 ▼
PostgreSQL
 │
 ▼
Create User
 │
 ▼
Success Response
```

---

# View Course Flow

```
User
 │
 ▼
Frontend
 │
 ▼
GET /api/v1/courses/:id
 │
 ▼
Course Controller
 │
 ▼
Course Service
 │
 ▼
Course Repository
 │
 ▼
PostgreSQL
 │
 ▼
Course Data
 │
 ▼
Frontend
```

---

# Complete Lesson Flow

```
Student
 │
 ▼
Frontend
 │
 ▼
POST /lessons/:id/complete
 │
 ▼
Progress Controller
 │
 ▼
Progress Service
 │
 ▼
Progress Repository
 │
 ▼
PostgreSQL
 │
 ▼
Progress Updated
 │
 ▼
Frontend
```

---

# Submit Assessment Flow

```
Student
 │
 ▼
Frontend
 │
 ▼
Submit Answers
 │
 ▼
Assessment Controller
 │
 ▼
Assessment Service
 │
 ▼
Evaluate Answers
 │
 ▼
Store Results
 │
 ▼
Update Progress
 │
 ▼
Response
```

---

# Content Review Flow

```
Author
 │
 ▼
Submit Content
 │
 ▼
Review Module
 │
 ▼
Status: Pending Review
 │
 ▼
Reviewer
 │
 ▼
Approve / Reject
 │
 ▼
Publish Content
```

---

# Password Change Flow

```
User
 │
 ▼
Frontend
 │
 ▼
POST /change-password
 │
 ▼
Validate Current Password
 │
 ▼
Hash New Password
 │
 ▼
Update Database
 │
 ▼
Invalidate All Sessions
 │
 ▼
Redis
 │
 ▼
Require Login Again
```

---

# Future Flows

As AxiomForge grows, this document should include additional flows such as:

- Password reset.
- Email verification.
- Learning path enrollment.
- Lab execution.
- Search.
- Notifications.
- Administrative actions.
- AI-assisted learning.

---

# Maintenance

Whenever a feature significantly changes how components interact, the corresponding sequence diagram should be updated to reflect the implementation.

This document should remain synchronized with the architecture and source code.
