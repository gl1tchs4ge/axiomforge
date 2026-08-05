# ADR-002: Use TypeScript as the Backend Language

## Status

Accepted

## Date

2026-08-01

## Context

AxiomForge is intended to become a long-term technology learning platform with support for:

- User authentication and authorization
- Learning paths
- Courses and lessons
- Hands-on labs
- Assessments
- Progress tracking
- Community contributions
- AI-assisted learning
- Future expansion into additional technology domains

The backend language should support long-term maintainability, modern software engineering practices, and provide a strong learning experience while remaining practical for a solo developer.

## Decision

AxiomForge will use **TypeScript** as the primary backend programming language.

TypeScript provides a modern development experience with static typing while remaining part of the JavaScript ecosystem.

Using TypeScript also allows both the frontend and backend to share a common language, reducing context switching and improving consistency across the project.

## Options Considered

### Python

Advantages:

- Familiar language
- Excellent cybersecurity ecosystem
- Strong tooling for automation and AI
- Rapid development

Disadvantages:

- Separate language from the frontend
- Does not align as closely with the goal of becoming a full-stack web engineer

---

### TypeScript

Advantages:

- One language across the full stack
- Static type system
- Excellent tooling
- Large ecosystem
- Strong industry adoption
- Encourages maintainable codebases
- Supports modern software engineering practices

Disadvantages:

- Additional learning required
- Type system introduces more complexity than plain JavaScript

---

### Go

Advantages:

- Excellent performance
- Simple language
- Efficient concurrency
- Easy deployment

Disadvantages:

- Smaller ecosystem for this project's needs
- Does not align with the current learning objectives

---

### Java / C#

Advantages:

- Enterprise-grade ecosystems
- Excellent architectural support
- Mature frameworks

Disadvantages:

- Higher learning curve
- Slower initial development
- Not aligned with the current project goals

## Consequences

### Positive Consequences

- One programming language across the frontend and backend.
- Strong type safety.
- Improved maintainability.
- Modern tooling.
- Better preparation for full-stack software engineering roles.

### Negative Consequences

- Additional concepts such as advanced typing and generics must be learned.
- Slightly slower initial development compared to plain JavaScript.

## Summary

TypeScript best aligns with AxiomForge's goals of becoming a long-term, maintainable, secure, and modern software platform while helping the primary developer strengthen full-stack software engineering skills.
