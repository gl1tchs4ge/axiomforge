# ADR-018: Database Design and Entity Relationships

## Status

Accepted

## Date

2026-08-02

## Context

AxiomForge requires a relational database capable of supporting reusable educational content, personalized learning progress, and a review-driven content workflow.

The database should:

- Support long-term scalability
- Encourage clear ownership of data
- Avoid unnecessary complexity
- Align with the modular monolith architecture
- Leverage PostgreSQL's relational capabilities

## Decision

AxiomForge will use a balanced relational database design.

The schema will normalize important relationships while avoiding unnecessary fragmentation.

This approach provides maintainability, strong data integrity, and straightforward development.

---

## Core Entities

The initial domain includes:

- Users
- Roles
- Permissions
- Learning Paths
- Courses
- Lessons
- Labs
- Assessments
- Progress
- Review Requests

Each entity represents a distinct business concept with clearly defined ownership.

---

## Reusable Learning Content

Learning resources will remain independent from one another.

Relationships will be modeled using junction tables.

Examples:

```text
LearningPath ↔ Course

Course ↔ Lesson

Lesson ↔ Lab
```

This enables educational content to be reused across multiple learning paths without duplication.

---

## Progress Tracking

Progress will be tracked using specialized tables instead of a single universal progress table.

Examples include:

- Course Progress
- Lesson Progress
- Lab Attempts
- Assessment Attempts

This allows each resource type to store the information relevant to its behavior while keeping the schema clear and maintainable.

---

## Review Workflow

The review workflow is a first-class part of the system and will be included in Version 1.

Educational content will move through a structured lifecycle:

```text
Draft

↓

Submitted

↓

Review

↓

Approved

↓

Published
```

Review requests will store:

- Content type
- Content identifier
- Submitter
- Reviewer
- Status
- Review comments
- Timestamps

This enables consistent quality control across all educational resources.

---

## Options Considered

### Highly Normalized Schema

Advantages:

- Maximum normalization
- Minimal duplication

Disadvantages:

- Increased complexity
- More joins
- Slower development

Rejected.

---

### Balanced Relational Design

Advantages:

- Good maintainability
- Clear relationships
- Efficient PostgreSQL usage
- Appropriate complexity

Chosen.

---

### Document-Oriented Design

Advantages:

- Flexible document structure

Disadvantages:

- Poor fit for relational data
- Harder progress tracking
- Reduced data integrity

Rejected.

---

## Consequences

### Positive Consequences

- Reusable educational content
- Strong data integrity
- Clear ownership of entities
- Flexible learning paths
- Scalable schema

### Negative Consequences

- Additional junction tables
- More complex queries for many-to-many relationships
- Requires careful migration planning

---

## Relationship to Previous Decisions

This decision supports:

- ADR-001: Modular Monolith Architecture
- ADR-004: PostgreSQL Database
- ADR-005: TypeORM ORM
- ADR-016: Project Structure and Module Organization
- ADR-017: Domain Model and Core Modules

## Summary

AxiomForge will use a balanced relational schema built around reusable educational resources, specialized progress tracking, and a review workflow integrated into the platform from Version 1.
