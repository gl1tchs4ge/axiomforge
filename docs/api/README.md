# AxiomForge API Documentation

## Purpose

This document describes the API design principles and conventions used by AxiomForge.

The API provides communication between:

```text id="wq1d6e"
Frontend

↓

Backend API

↓

Application Logic

↓

Database
```

The API is designed to be:

* Predictable.
* Secure.
* Maintainable.
* Easy to document.

---

# API Architecture

AxiomForge uses a REST API architecture.

Base URL structure:

```text id="h8nq3a"
/api/v1/
```

Example:

```http id="71f4pg"
GET /api/v1/courses
```

---

# API Versioning

AxiomForge uses URL-based versioning.

Example:

Current:

```text id="p1m4g8"
/api/v1/courses
```

Future:

```text id="x4n2v0"
/api/v2/courses
```

---

# REST Principles

Endpoints represent resources.

Preferred:

```http id="s8j9kd"
GET /api/v1/courses

GET /api/v1/courses/123

POST /api/v1/courses
```

Avoid:

```http id="4q1h1w"
GET /api/v1/getCourses

POST /api/v1/createCourse
```

HTTP methods describe the action.

---

# HTTP Methods

## GET

Retrieve resources.

Example:

```http id="i6x1y4"
GET /api/v1/courses
```

---

## POST

Create resources.

Example:

```http id="s5q7mx"
POST /api/v1/courses
```

---

## PUT/PATCH

Update resources.

Example:

```http id="e6j8x9"
PATCH /api/v1/courses/123
```

---

## DELETE

Remove resources.

Example:

```http id="0wv6o7"
DELETE /api/v1/courses/123
```

---

# Response Format

Responses should be consistent.

Example success:

```json id="w0n5dr"
{
  "data": {
    "id": "123",
    "title": "Linux Fundamentals"
  }
}
```

---

Example error:

```json id="z6h1z0"
{
  "statusCode": 404,
  "error": "Not Found",
  "message": "Course not found"
}
```

---

# Authentication

AxiomForge uses session-based authentication.

Authentication flow:

```text id="1b8gwu"
User Login

↓

Credentials Validated

↓

Session Created

↓

Session Stored in Redis

↓

Authenticated Requests
```

---

# Protected Routes

Protected endpoints require a valid session.

Example:

```http id="5u2bqx"
GET /api/v1/progress
```

Requires:

```text id="zz5yk5"
Authenticated User Session
```

---

# Authorization

Authentication verifies:

> Who are you?

Authorization verifies:

> Are you allowed to do this?

Authorization uses:

* Roles.
* Permissions.

Example:

```text id="sl8c3w"
Student

can:

View courses

Complete lessons


cannot:

Approve content
```

---

# Validation

All external input must be validated.

Examples:

* Request bodies.
* Query parameters.
* URL parameters.

Validation protects against:

* Invalid data.
* Unexpected behavior.
* Malicious input.

---

# Content Security

User-generated content requires additional protection.

Examples:

* Markdown content.
* Learning materials.
* Community contributions.

Content must be sanitized before rendering.

---

# API Documentation

AxiomForge uses:

```text id="x0o1m2"
OpenAPI / Swagger
```

Swagger documentation provides:

* Available endpoints.
* Request formats.
* Response schemas.
* Authentication requirements.

---

# API Organization

Endpoints are organized by domain.

Example:

```text id="v7h3ii"
/api/v1/auth

/api/v1/users

/api/v1/courses

/api/v1/lessons

/api/v1/labs

/api/v1/progress
```

---

# API and Modules

Each endpoint belongs to a backend module.

Example:

```text id="t8w8mf"
/api/v1/courses

        |

        v

Learning Module
```

The API layer should not bypass module boundaries.

---

# Pagination

Large collections should support pagination.

Example:

```http id="58n7a5"
GET /api/v1/courses?page=1&limit=20
```

---

# Filtering

Resources may support filtering.

Example:

```http id="l9p0sd"
GET /api/v1/courses?difficulty=beginner
```

---

# Future GraphQL Compatibility

The current API uses REST.

However, the architecture should remain flexible enough for future GraphQL adoption if needed.

Possible future use cases:

* Complex dashboards.
* Custom learning analytics.
* Flexible queries.

GraphQL should only be introduced if REST limitations become a real problem.

---

# API Development Rules

When creating a new endpoint:

1. Define the resource.
2. Create DTOs.
3. Add validation.
4. Implement business logic in services.
5. Add tests.
6. Update OpenAPI documentation.

---

# Summary

The AxiomForge API follows:

* REST architecture.
* Versioned endpoints.
* Session-based authentication.
* Strong validation.
* OpenAPI documentation.
* Clear module ownership.

The API is designed to remain simple today while allowing future expansion.

