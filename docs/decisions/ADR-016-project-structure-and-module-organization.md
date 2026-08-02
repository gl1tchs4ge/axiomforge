# ADR-016: Project Structure and Module Organization

## Status

Accepted

## Date

2026-08-02

## Context

AxiomForge is designed as a modular monolith that should support long-term growth without requiring major rewrites.

The project requires a structure that provides:

* Clear ownership of functionality
* Maintainability
* Separation of responsibilities
* Easier testing
* Future scalability

The organization must support both the current solo developer workflow and future contributors.

## Decision

AxiomForge will use:

* Domain-based modules in the backend
* Feature-based organization in the frontend
* Module ownership boundaries
* Controlled communication between modules

The architecture will use clean architecture principles where beneficial without introducing unnecessary complexity.

---

# Backend Structure

The NestJS backend will be organized around business domains.

Example:

```text
src/

├── auth/
├── users/
├── learning/
├── labs/
├── progress/
├── admin/
├── common/
└── database/
```

Each domain owns its internal implementation.

Example:

```text
courses/

├── controller
├── service
├── module
├── dto
├── entities
└── repositories
```

## Module Ownership

Each module owns its own data and business logic.

Modules should not directly modify another module's database data.

Communication should happen through:

* Public services
* Defined interfaces
* Application-level contracts

This reduces coupling and improves security.

---

# Frontend Structure

The Next.js frontend will use feature-oriented organization.

Example:

```text
src/

├── app/
├── features/
├── components/
├── hooks/
├── lib/
└── styles/
```

Features will represent user-facing capabilities.

Examples:

* Authentication
* Courses
* Labs
* Dashboard
* Progress

---

# Options Considered

## Layer-Based Structure

Advantages:

* Simple initially
* Easy for small applications

Disadvantages:

* Features become spread across many folders
* Harder ownership
* Increased coupling

Rejected.

---

## Domain Modules

Advantages:

* Matches modular monolith architecture
* Clear ownership
* Easier scaling
* Easier maintenance

Chosen.

---

## Full Clean Architecture

Advantages:

* Strong separation
* Highly maintainable

Disadvantages:

* More complexity
* More abstraction
* Slower development

Not fully adopted.

Clean architecture principles will be applied selectively.

---

# Module Communication Rules

Modules should:

* Own their data
* Expose controlled interfaces
* Depend on public contracts

Modules should not:

* Access other modules' databases directly
* Modify another module's internal state
* Bypass business logic

---

# Consequences

## Positive Consequences

* Better maintainability
* Reduced coupling
* Easier testing
* Safer feature development
* Easier future team collaboration

## Negative Consequences

* Requires more planning
* Some communication requires additional abstractions
* Developers must respect boundaries

---

# Relationship to Previous Decisions

This decision supports:

* ADR-001: Modular Monolith Architecture
* ADR-003: NestJS Backend Framework
* ADR-013: Testing Strategy
* ADR-015: CI/CD Pipeline and Development Workflow

## Summary

AxiomForge will use a domain-driven modular structure with controlled module boundaries. The system will remain simple enough for a solo developer while maintaining professional architecture practices.

