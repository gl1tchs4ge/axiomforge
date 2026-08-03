# AxiomForge Documentation

Welcome to the AxiomForge documentation.

This section contains the technical documentation required to understand, develop, and contribute to the project.

---

# Documentation Structure

```text id="h4v7x2"
docs/

├── architecture/

├── decisions/

├── development/

├── api/

├── releases/

└── reference/
```

---

# Architecture

Location:

```text id="g8r2m5"
docs/architecture/
```

Purpose:

Contains the high-level design of AxiomForge.

Includes:

* System architecture.
* Technology choices.
* Module organization.
* Long-term roadmap.

Start here:

```text id="p6w9k1"
architecture/system-overview.md
```

---

# Architecture Decision Records

Location:

```text id="m3q8z4"
docs/decisions/
```

Purpose:

Contains Architecture Decision Records (ADRs).

ADRs document:

* Important technical decisions.
* Alternatives considered.
* Reasons behind choices.

Examples:

```text id="x9m1v7"
ADR-002 Backend Language

ADR-003 Database Selection

ADR-006 Frontend Framework
```

---

# Development

Location:

```text id="w2f6s8"
docs/development/
```

Purpose:

Contains guides for developers working on AxiomForge.

Includes:

* Setup instructions.
* Coding standards.
* Git workflow.
* Environment configuration.
* Testing strategy.

Start here:

```text id="u4n7c9"
development/getting-started.md
```

---

# API Documentation

Location:

```text id="k5s1x8"
docs/api/
```

Purpose:

Defines how applications communicate with the AxiomForge backend.

Includes:

* REST conventions.
* Endpoint structure.
* Authentication behavior.
* API versioning.
* OpenAPI documentation.

---

# Releases

Location:

```text id="r9m3q6"
docs/releases/
```

Purpose:

Documents project versions.

Includes:

* Features added.
* Architecture changes.
* Migration notes.
* Breaking changes.

---

# Reference

Location:

```text id="z7v2n5"
docs/reference/
```

Purpose:

Contains general project knowledge.

Includes:

* Glossary.
* Repository structure.
* Database conventions.
* Security model.

---

# For Contributors

Recommended reading order:

## 1. Project Overview

```text id="b6x8q2"
README.md
```

---

## 2. Architecture

```text id="c4m7y1"
docs/architecture/system-overview.md
```

---

## 3. Decisions

```text id="n8q5w3"
docs/decisions/
```

---

## 4. Development Setup

```text id="t1k6p9"
docs/development/getting-started.md
```

---

## 5. Contribution Rules

```text id="h3s9v4"
CONTRIBUTING.md
```

---

# Documentation Principles

AxiomForge documentation follows these principles:

## Explain Why

Important decisions should explain reasoning, not only implementation.

---

## Keep Information Current

Documentation should be updated when:

* Architecture changes.
* New workflows are introduced.
* Features change behavior.

---

## Prefer Clarity

Documentation should be understandable by:

* New contributors.
* Future maintainers.
* Developers learning from the project.

---

# Documentation Maintenance

When making significant changes:

Update the relevant documentation.

Examples:

New technology:

```text id="q7m2x4"
Add ADR
```

New API behavior:

```text id="e5v8n1"
Update API documentation
```

New development workflow:

```text id="j3k9s6"
Update development documentation
```

---

# Summary

The AxiomForge documentation system provides:

* Architectural transparency.
* Contributor guidance.
* Technical references.
* Project history.

The documentation evolves together with the software.

