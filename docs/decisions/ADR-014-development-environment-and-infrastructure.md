# ADR-014: Development Environment and Infrastructure

## Status

Accepted

## Date

2026-08-02

## Context

AxiomForge must provide a reliable and reproducible development environment.

The project will initially be developed by a single developer but is intended to support future contributors.

The development environment should:

- Reduce environment differences
- Simplify onboarding
- Support future CI/CD
- Maintain security best practices
- Avoid unnecessary infrastructure complexity

## Decision

AxiomForge will use Docker Compose for local development environments.

Docker will provide consistent environments for application dependencies.

The initial development environment will include:

```text
Docker Compose

├── PostgreSQL
├── NestJS Backend
└── Next.js Frontend
```

## Database Environment

PostgreSQL will run inside a Docker container during development.

Reasons:

- Consistent database version
- Easier setup
- Easier reset and testing
- Better onboarding experience

Persistent database storage will use Docker volumes.

## Configuration Management

Environment-specific configuration will be managed through environment variables.

The repository will contain:

```text
.env.example
```

which documents required configuration values.

Real secrets will be stored in:

```text
.env
```

which will not be committed to source control.

Sensitive information will never be stored directly in application code.

## Future Lab Infrastructure

The AxiomForge architecture will reserve space for future isolated lab environments.

V1 will focus on educational content and lab management.

Future versions may introduce:

```text
Labs Module

↓

Lab Execution System

↓

Isolated Containers

↓

Disposable Learning Environments
```

Future lab infrastructure will require:

- Container isolation
- Resource limits
- Network restrictions
- Secure execution controls

## Options Considered

### No Docker

Advantages:

- Simple initial setup

Disadvantages:

- Environment inconsistencies
- Harder onboarding
- More configuration problems

Rejected.

---

### Docker Compose

Advantages:

- Reproducible environments
- Easy local setup
- Industry standard
- Appropriate complexity for project size

Chosen.

---

### Advanced Infrastructure

Examples:

- Kubernetes
- Cloud orchestration

Advantages:

- Enterprise scalability

Disadvantages:

- Excessive complexity
- Requires operations overhead
- Not appropriate for current requirements

Rejected.

## Consequences

### Positive Consequences

- Consistent development environments
- Easier contributor onboarding
- Better CI/CD foundation
- Professional workflow

### Negative Consequences

- Additional Docker knowledge required
- Slightly higher resource usage
- More configuration files

## Relationship to Previous Decisions

This decision supports:

- ADR-001: Modular Monolith Architecture
- ADR-003: NestJS Backend Framework
- ADR-004: PostgreSQL Database
- ADR-013: Testing Strategy

## Summary

AxiomForge will use Docker Compose with containerized PostgreSQL and environment-based configuration. The architecture will remain prepared for future isolated cybersecurity lab environments without implementing unnecessary complexity in early versions.
