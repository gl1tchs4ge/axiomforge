# AxiomForge Technology Stack

## Overview

This document defines the current technology stack used by AxiomForge.

The stack is chosen to support the project's goals:

- Building a maintainable production-quality platform.
- Learning modern software engineering practices.
- Supporting future scalability.
- Maintaining strong security practices.
- Avoiding unnecessary complexity.

Technology decisions are documented in detail through Architecture Decision Records (ADRs).

---

# Architecture

## Application Architecture

**Architecture Pattern:**

```text
Modular Monolith
```

AxiomForge uses a modular monolith architecture to maintain clear boundaries while avoiding unnecessary operational complexity.

Benefits:

- Simple deployment.
- Clear ownership boundaries.
- Easier development.
- Future scalability.

Reference:

- ADR-001: Modular Monolith Architecture.

---

# Backend

## Framework

**NestJS**

Purpose:

- Backend API development.
- Business logic implementation.
- Module organization.
- Dependency injection.

Why:

- Strong TypeScript support.
- Structured architecture.
- Good scalability.
- Industry adoption.

Reference:

- ADR-003: Backend Framework.

---

## Language

**TypeScript**

Purpose:

- Backend development.
- Type safety.
- Shared ecosystem with frontend.

Why:

- Strong tooling.
- Better maintainability for large applications.
- Full-stack consistency.

Reference:

- ADR-002: Backend Language.

---

## API Style

**REST API**

Versioning:

```text
/api/v1/
```

Example:

```text
GET /api/v1/courses
```

Documentation:

**OpenAPI / Swagger**

Purpose:

- API discovery.
- Client development.
- Easier maintenance.

Reference:

- ADR-011: API Design Strategy.

---

# Frontend

## Framework

**Next.js**

Purpose:

- User interface.
- Web application development.
- Frontend routing and rendering.

Why:

- Strong React ecosystem.
- Good performance options.
- Industry adoption.
- Future flexibility.

Reference:

- ADR-006: Frontend Framework.

---

## Language

**TypeScript**

Used for:

- Type-safe frontend development.
- Consistent full-stack language.

---

## Styling

**Tailwind CSS**

Purpose:

- UI styling.
- Consistent design system.

Why:

- Rapid development.
- Good component integration.
- Avoids large CSS files.

---

## Component Library

**shadcn/ui**

Purpose:

- Reusable accessible UI components.

Why:

- Avoids rebuilding common components.
- Maintains customization ability.

---

# Database

## Database Engine

**PostgreSQL**

Purpose:

- Primary application database.

Why:

- Strong relational capabilities.
- SQL standards compliance.
- Reliable for complex relationships.

Reference:

- ADR-004: Database Selection.

---

## ORM

**TypeORM**

Purpose:

- Database interaction.
- Entity management.
- Migrations.

Why:

- Strong SQL relationship with PostgreSQL.
- Fits the TypeScript ecosystem.
- Provides control over database behavior.

Reference:

- ADR-005: ORM Selection.

---

# Authentication and Authorization

## Authentication

**Session-Based Authentication**

Purpose:

- User authentication.

Why:

- Simpler security model.
- Easier session invalidation.
- Appropriate for initial project scale.

Reference:

- ADR-007: Authentication Strategy.

---

## Session Storage

**Redis**

Purpose:

- Session management.

Why:

- Fast access.
- Designed for temporary data.
- Allows future scalability.

Session invalidation rules:

- Password changes invalidate active sessions.

Reference:

- ADR-008: Session Storage.

---

## Authorization

**RBAC + Permissions**

Purpose:

- Role-based access control.
- Future team collaboration.

Examples:

Roles:

```text
Student
Instructor
Reviewer
Admin
```

Reference:

- ADR-009: Authorization Model.

---

# Content Security

## Markdown Processing

Markdown content must be sanitized before rendering.

Purpose:

- Prevent malicious content.
- Protect users from unsafe input.

Reference:

- ADR-012: Validation and Content Security.

---

# Testing

## Testing Philosophy

Balanced Professional Testing.

The project prioritizes:

- Critical functionality coverage.
- Security-sensitive testing.
- Automated checks.

Avoids:

- No testing.
- Excessive testing without value.

Reference:

- ADR-013: Testing Strategy.

---

# Infrastructure

## Local Development

**Docker Compose**

Purpose:

- Consistent development environments.
- Reproducible setup.

Services:

Expected initial services:

```text
Backend

Frontend

PostgreSQL

Redis
```

Reference:

- ADR-014: Development Environment.

---

# CI/CD

## Version Control

**GitHub Workflow**

Strategy:

- Feature branches.
- Pull requests.
- Reviews before merging.

---

## Automation

CI checks include:

- Build verification.
- Testing.
- Linting.
- Quality checks.

Reference:

- ADR-015: CI/CD Pipeline.

---

# Code Quality

Tools:

```text
ESLint

Prettier

Type checking

Automated tests
```

Standards:

- Conventional commits.
- Documented architectural changes.
- Reviewed pull requests.

Reference:

- ADR-019: Coding Standards.

---

# Future Considerations

The following technologies are intentionally not part of V1 but may be considered later.

## GraphQL

Possible use case:

- Complex dashboards.
- Flexible querying.

Current approach:

REST API with GraphQL readiness.

---

## Pino

Possible use case:

- Advanced structured logging.

Current approach:

NestJS Logger.

---

## Lab Infrastructure

Possible future technologies:

- Containers.
- Isolated environments.
- Dynamic challenge provisioning.

---

# Current Stack Summary

| Area              | Technology                 |
| ----------------- | -------------------------- |
| Architecture      | Modular Monolith           |
| Backend           | NestJS                     |
| Backend Language  | TypeScript                 |
| Frontend          | Next.js                    |
| Frontend Language | TypeScript                 |
| Styling           | Tailwind CSS               |
| UI Components     | shadcn/ui                  |
| Database          | PostgreSQL                 |
| ORM               | TypeORM                    |
| Authentication    | Sessions                   |
| Session Storage   | Redis                      |
| Authorization     | RBAC + Permissions         |
| API               | REST + OpenAPI             |
| Infrastructure    | Docker Compose             |
| CI/CD             | GitHub-based workflow      |
| Testing           | Balanced automated testing |

---

# Summary

AxiomForge uses a modern TypeScript-based full-stack architecture designed around maintainability, security, and future growth.

The stack intentionally avoids unnecessary complexity while providing a strong foundation for expansion.
