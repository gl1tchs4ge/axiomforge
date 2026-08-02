# ADR-017: Domain Model and Core Modules

## Status

Accepted

## Date

2026-08-02

## Context

AxiomForge is a cybersecurity and programming learning platform focused on structured education, practical exercises, and measurable progression.

The system requires a domain model that supports:

* Reusable educational content
* Personalized learning progression
* Practical labs
* Knowledge validation
* Community-driven content with quality control

The domain structure must remain simple enough for the initial project while supporting future growth.

## Decision

AxiomForge will use the following core modules:

```text
Auth

Users

Learning

Labs

Assessments

Progress

Reviews

Admin
```

---

# Module Responsibilities

## Auth

Responsible for:

* Authentication
* Sessions
* Password management

---

## Users

Responsible for:

* User profiles
* Roles
* Permissions

---

## Learning

Responsible for:

* Learning paths
* Courses
* Lessons

---

## Labs

Responsible for:

* Practical challenges
* Lab attempts
* Future isolated environments

---

## Assessments

Responsible for:

* Quizzes
* Readiness evaluations
* Knowledge validation

Assessments may determine whether users should repeat or skip existing content.

---

## Progress

Responsible for:

* Completion tracking
* User advancement
* Learning history

---

## Reviews

Responsible for:

* Content review workflow
* Approval processes
* Quality control

---

# Reusable Content Model

Educational resources will be designed as reusable components.

Courses, lessons, and labs will not be permanently tied to a single learning path.

Example:

```text
LearningPath

many-to-many

Course
```

This allows the same content to support multiple learning journeys.

---

# Learning Validation

Users may encounter existing content when entering a new path.

Instead of forcing repetition:

```text
Content

↓

Assessment

↓

Recommendation
```

The system can determine whether the user should:

* Review the material
* Complete the content
* Continue to advanced topics

---

# V1 Scope

The initial version will focus on the core learning ecosystem:

* Learning paths
* Courses
* Lessons
* Labs
* Assessments
* Progress tracking

Additional features will be introduced later.

Future features include:

* Community features
* AI assistance
* Certificates
* Leaderboards

These features are intentionally delayed to avoid distracting from the core platform.

---

# Consequences

## Positive Consequences

* Flexible learning system
* Reusable educational resources
* Personalized progression
* Clear module boundaries

## Negative Consequences

* More complex relationships between entities
* Requires careful database design
* Requires strong ownership rules

---

# Relationship to Previous Decisions

Supports:

* ADR-001: Modular Monolith Architecture
* ADR-016: Project Structure and Module Organization
* ADR-013: Testing Strategy

## Summary

AxiomForge will be built around a reusable learning ecosystem consisting of paths, courses, lessons, labs, assessments, and progress tracking. The architecture prioritizes educational flexibility while delaying secondary features until the core platform is established.

