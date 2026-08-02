# ADR-005: Use TypeORM as the Object Relational Mapper

## Status

Accepted

## Date

2026-08-01

## Context

AxiomForge uses PostgreSQL as its primary database and requires a way for the NestJS backend to interact with relational data.

The platform contains a complex domain model including:

* Users
* Roles
* Learning Paths
* Courses
* Lessons
* Labs
* Assessments
* Progress Tracking

The ORM should provide productivity while maintaining a strong understanding of relational database concepts.

## Decision

AxiomForge will use **TypeORM** as its Object Relational Mapper.

TypeORM was selected because it integrates well with NestJS, provides a traditional ORM approach, and maintains a close relationship between application entities and database structures.

This approach supports the project's goal of developing strong software engineering and database skills while building a maintainable application.

## Options Considered

### Prisma

Advantages:

* Excellent TypeScript experience
* Strong type safety
* Simple developer workflow
* Excellent documentation

Disadvantages:

* Higher level of abstraction
* Some advanced database features may require leaving the ORM
* Can hide some relational database concepts from developers

---

### TypeORM

Advantages:

* Strong NestJS integration
* Entity-based architecture
* Familiar ORM patterns
* Close relationship with relational database concepts
* Supports migrations and complex relationships
* Allows direct control when needed

Disadvantages:

* More configuration
* Requires better understanding of database concepts
* Easier to create inefficient queries without proper knowledge

---

### Drizzle ORM

Advantages:

* Lightweight
* Excellent TypeScript support
* SQL-like approach
* Minimal abstraction

Disadvantages:

* Younger ecosystem
* Less established documentation
* Requires more manual decisions

## Consequences

### Positive Consequences

* Better understanding of relational database design.
* Strong alignment with NestJS architecture.
* Clear mapping between entities and database tables.
* More control over database operations.

### Negative Consequences

* Developers must understand SQL and database optimization.
* More responsibility for designing efficient queries.
* Additional ORM configuration compared with simpler solutions.

## Relationship to Previous Decisions

This decision builds upon:

* ADR-001: Modular Monolith Architecture
* ADR-002: TypeScript as the Backend Language
* ADR-003: NestJS as the Backend Framework
* ADR-004: PostgreSQL as the Primary Database

TypeORM fits the selected backend stack by providing a structured way for NestJS services to interact with PostgreSQL.

## Summary

TypeORM was selected because it provides the balance AxiomForge requires: professional backend development capabilities while maintaining a strong connection to relational database concepts.

