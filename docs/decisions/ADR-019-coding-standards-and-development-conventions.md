# ADR-019: Coding Standards and Development Conventions

## Status

Accepted

## Date

2026-08-02

## Context

AxiomForge is intended to be a long-term, open-source project that prioritizes maintainability, consistency, security, and knowledge sharing.

As the project grows and new contributors join, a common set of development conventions is required to ensure that the codebase remains predictable and easy to maintain.

These conventions should encourage professional software engineering practices without introducing unnecessary complexity.

## Decision

AxiomForge will adopt a consistent set of coding standards and development conventions across the entire project.

These standards apply to all contributors and all future development.

---

# Naming Conventions

## TypeScript

- Classes: `PascalCase`
- Interfaces: `PascalCase`
- Enums: `PascalCase`
- Variables: `camelCase`
- Functions: `camelCase`
- Constants: `UPPER_SNAKE_CASE` when appropriate

Examples:

```typescript
class UserService {}

interface CourseProgress {}

enum UserRole {}

const sessionTimeout = 3600;
```

---

## Files

NestJS conventions will be followed.

Examples:

```text
auth.service.ts
users.controller.ts
progress.module.ts
course.repository.ts
```

---

## Database

Database objects will use `snake_case`.

Examples:

```text
learning_paths
course_progress
assessment_attempts
review_requests
```

---

# API Design

RESTful resource naming will be used.

Examples:

```text
GET    /api/v1/courses
POST   /api/v1/courses
GET    /api/v1/courses/:id
PATCH  /api/v1/courses/:id
DELETE /api/v1/courses/:id
```

Endpoints should represent resources rather than actions.

---

# Error Handling

The backend will use centralized exception handling.

Errors should be returned using a consistent response format.

Business logic should throw exceptions rather than manually constructing HTTP responses throughout the application.

---

# Logging

The project will initially use the built-in NestJS Logger.

Developers should avoid using `console.log()` outside of temporary debugging.

Future versions may migrate to a structured logging solution such as Pino without requiring significant application changes.

---

# Formatting and Static Analysis

The project will use:

- ESLint
- Prettier

Formatting should be automated whenever possible.

Code style discussions should be minimized by relying on tooling instead of personal preference.

---

# Git Workflow

The project will use Conventional Commits.

Examples:

```text
feat(auth): implement session login

fix(progress): correct lesson completion

docs(adr): add ADR-019

refactor(labs): simplify validation

test(users): add integration tests
```

Branch names should clearly describe their purpose.

Examples:

```text
feature/session-auth
feature/course-management
fix/login-redirect
docs/adr-019
refactor/review-service
```

---

# Documentation Standards

Documentation is considered part of the project and must evolve alongside the codebase.

When appropriate, contributors should update:

- ADRs
- README
- OpenAPI documentation
- `.env.example`
- Release documentation
- Architecture documentation

Documentation should explain both **what changed** and **why it changed**.

---

# Versioned Documentation

Major releases should include version-specific documentation.

Release documentation should describe:

- Features introduced
- Technology stack
- Architectural changes
- Breaking changes
- Migration notes
- Known limitations

The project should preserve historical documentation to help future contributors understand the evolution of AxiomForge.

---

# Comments

Comments should explain **why** something exists rather than **what** the code is doing.

Code should be written clearly enough that unnecessary comments are avoided.

---

# Definition of Done

A change is considered complete when applicable:

- Implementation is finished.
- Tests have been added or updated.
- Linting passes.
- Type checking passes.
- Build verification succeeds.
- Documentation has been updated.
- OpenAPI documentation has been updated (if applicable).
- New configuration has been documented.
- Code review has been completed.

---

# Options Considered

## Flexible Team Conventions

Advantages:

- Fewer initial rules.

Disadvantages:

- Inconsistent code.
- Harder maintenance.
- Lower contributor experience.

Rejected.

---

## Standardized Development Conventions

Advantages:

- Consistent codebase.
- Easier onboarding.
- Professional development workflow.
- Better long-term maintainability.

Chosen.

---

# Consequences

## Positive Consequences

- Consistent development practices.
- Easier code reviews.
- Higher code quality.
- Improved contributor experience.
- Better long-term maintainability.

## Negative Consequences

- Contributors must learn project conventions.
- Some additional documentation effort is required.

---

# Relationship to Previous Decisions

This decision supports all previous architectural decisions by defining how they are implemented consistently throughout the project.

## Summary

AxiomForge will maintain a consistent set of coding, documentation, Git, and development conventions to ensure long-term maintainability, professional collaboration, and a predictable contributor experience.
