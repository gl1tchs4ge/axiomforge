# ADR-003: Use NestJS as the Backend Framework

## Status

Accepted

## Date

2026-08-01

## Context

AxiomForge is being developed as a long-term technology learning platform following a Modular Monolith architecture.

The platform is expected to grow over time and include multiple business domains, including:

- Authentication
- User Management
- Learning Paths
- Courses and Lessons
- Hands-on Labs
- Assessments
- Progress Tracking
- Content Management
- AI-assisted learning
- Community features

The backend framework should encourage modularity, maintainability, testability, and secure software development while remaining practical for a solo developer.

## Decision

AxiomForge will use **NestJS** as its backend framework.

NestJS provides an opinionated architecture that naturally aligns with the project's Modular Monolith design by organizing the application into independent feature modules.

The framework promotes separation of concerns, dependency injection, and a consistent project structure, making it well suited for a long-lived application.

## Options Considered

### Express

Advantages:

- Minimal and lightweight
- Large ecosystem
- Easy to start with
- Highly flexible

Disadvantages:

- Little architectural guidance
- Easy for large applications to become difficult to maintain
- Developers must establish and enforce project structure themselves

---

### Fastify

Advantages:

- High performance
- Excellent TypeScript support
- Modern plugin architecture
- Lower overhead than Express

Disadvantages:

- Smaller ecosystem
- Requires more architectural decisions from developers
- Less opinionated for large application organization

---

### NestJS

Advantages:

- Modular architecture
- Built-in dependency injection
- Excellent TypeScript support
- Strong separation of concerns
- Consistent project organization
- Integrated validation, guards, interceptors, and middleware
- Excellent testing support
- Well suited for large and maintainable applications

Disadvantages:

- Steeper learning curve
- More abstraction than minimal frameworks
- Slightly slower initial development due to additional structure

## Consequences

### Positive Consequences

- Clear module boundaries aligned with business domains.
- Consistent project organization.
- Improved maintainability as the application grows.
- Easier onboarding for future contributors.
- Built-in support for many common backend concerns.

### Negative Consequences

- Developers must learn the NestJS architecture and conventions.
- More boilerplate than lightweight frameworks.
- Small features may require more setup.

## Relationship to Previous Decisions

This decision builds upon:

- ADR-001: Modular Monolith Architecture
- ADR-002: TypeScript as the Backend Language

NestJS complements both decisions by providing architectural patterns that reinforce modularity and maintainability.

## Summary

NestJS was selected because its opinionated, modular architecture aligns closely with AxiomForge's long-term goals. The framework provides the structure needed to support a growing codebase while encouraging good software engineering practices and secure application design.
