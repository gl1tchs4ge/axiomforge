# ADR-004: Use PostgreSQL as the Primary Database

## Status

Accepted

## Date

2026-08-01

## Context

AxiomForge is a long-term educational platform with a rich relational domain model. The application manages interconnected entities including:

* Users
* Roles
* Learning Paths
* Courses
* Lessons
* Labs
* Assessments
* Progress
* Content Reviews

The database must provide strong data integrity, support complex relationships, and remain maintainable as the platform grows.

## Decision

AxiomForge will use **PostgreSQL** as its primary relational database.

PostgreSQL provides robust relational modeling, ACID-compliant transactions, excellent SQL standards compliance, and advanced querying capabilities that align with the project's long-term goals.

## Options Considered

### PostgreSQL

Advantages:

* Excellent relational database
* Strong SQL standards compliance
* ACID transactions
* Advanced indexing and query capabilities
* Rich feature set (JSONB, Full-Text Search, Window Functions, CTEs)
* Strong data integrity through constraints and foreign keys
* Mature ecosystem and documentation
* Excellent long-term scalability

Disadvantages:

* Steeper learning curve
* Larger feature set introduces additional complexity
* Advanced administration can require more knowledge

---

### MySQL

Advantages:

* Easy to learn
* Large community
* Mature ecosystem
* Excellent performance for common CRUD applications
* Broad hosting support

Disadvantages:

* Fewer advanced SQL features
* Less standards-compliant than PostgreSQL
* Less suitable for the complex relational requirements of AxiomForge

## Consequences

### Positive Consequences

* Strong support for complex relationships.
* High data integrity through constraints and transactions.
* Excellent foundation for future platform growth.
* Access to advanced SQL capabilities without changing databases later.
* Widely used in professional environments.

### Negative Consequences

* Developers must learn PostgreSQL-specific concepts.
* Some advanced features increase the learning curve.

## Relationship to Previous Decisions

This decision complements:

* ADR-001: Modular Monolith Architecture
* ADR-002: TypeScript as the Backend Language
* ADR-003: NestJS as the Backend Framework

PostgreSQL provides a robust relational foundation for the modular architecture and supports the application's growing domain model.

## Summary

PostgreSQL was selected because it best satisfies AxiomForge's requirements for data integrity, maintainability, scalability, and long-term growth. Its strong relational capabilities make it an excellent fit for a platform centered around structured learning, user progress, and interconnected educational content.

