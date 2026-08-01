# ADR-001: Use a Modular Monolith Architecture

## Status

Accepted

## Date

2026-08-01

## Context

AxiomForge is designed to grow into a complete technology learning platform.

The platform will eventually include:

* Learning paths
* Courses and lessons
* Hands-on labs
* Assessments
* Progress tracking
* User accounts
* Content management
* Community features
* AI-assisted learning
* Advanced security labs

The system needs an architecture that supports long-term growth while remaining practical to develop and maintain.

The initial development team is small, so introducing unnecessary complexity too early could slow development and increase maintenance difficulty.

## Decision

AxiomForge will use a **Modular Monolith architecture**.

The application will be built as a single deployable system, but internally organized into independent business modules.

Initial modules:

```text
AxiomForge

├── Auth
├── Users
├── Learning
├── Labs
├── Assessments
├── Progress
└── Content Management
```

Each module will own its own business logic and responsibilities.

## Options Considered

## Option 1: Layered Architecture

Structure:

```text
Application

├── Controllers
├── Services
├── Database
└── Models
```

### Advantages

* Simple to understand
* Fast initial development
* Common pattern
* Low complexity

### Disadvantages

* Organization follows technical layers instead of business domains
* Large applications can become difficult to maintain
* Modules can become tightly coupled

---

## Option 2: Clean Architecture

Structure:

```text
Domain

Application

Infrastructure

Interfaces
```

### Advantages

* Strong separation of business logic
* Highly testable
* Independent from frameworks and databases
* Good for complex systems

### Disadvantages

* More abstraction
* More initial complexity
* Slower development for a small team

---

## Option 3: Modular Monolith

Structure:

```text
Application

├── Auth Module
├── Learning Module
├── Labs Module
├── Progress Module
└── Other Domain Modules
```

### Advantages

* Clear business boundaries
* Easier long-term maintenance
* Avoids premature microservices
* Allows future scaling
* Easier extraction of individual services if needed

### Disadvantages

* Requires discipline
* Poor boundaries can recreate a traditional monolith
* Developers must carefully manage dependencies

---

## Consequences

### Positive Consequences

* AxiomForge can grow without immediately introducing distributed system complexity.
* Business domains remain separated.
* Developers can work on specific modules more easily.
* Future migration to microservices is possible if necessary.

### Negative Consequences

* The team must maintain strong module boundaries.
* Developers must avoid direct dependencies between unrelated modules.
* Some additional planning is required.

## Future Considerations

If a specific module develops significantly different requirements, it may be extracted into a separate service.

Examples:

* AI processing
* Large-scale lab infrastructure
* Notification systems

However, this should only happen when there is a clear technical need.

## Summary

AxiomForge will begin as a modular monolith to balance:

* Development speed
* Maintainability
* Scalability
* Architectural discipline

The goal is to build a strong foundation without over-engineering the first version.

