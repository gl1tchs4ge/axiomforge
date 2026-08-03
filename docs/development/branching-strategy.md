# Branching Strategy

## Purpose

This document defines the Git branching strategy used by AxiomForge.

The goal is to maintain a simple and scalable workflow that supports:

* Individual development.
* Code review.
* Future contributors.
* Stable releases.

AxiomForge avoids unnecessary Git complexity while maintaining professional development practices.

---

# Branch Structure

AxiomForge uses a lightweight feature branch workflow.

Main branches:

```text id="j6m8q2"
main
```

Feature branches:

```text id="v4s7n9"
feature/*
fix/*
docs/*
refactor/*
test/*
chore/*
```

---

# Main Branch

The `main` branch represents the stable version of the project.

Rules:

* Code should always compile.
* Tests should pass.
* Documentation should be updated when necessary.
* Direct commits should be avoided.

Changes enter `main` through Pull Requests.

---

# Feature Branches

Feature branches are created for new functionality.

Format:

```text id="h5r2p8"
feature/<description>
```

Examples:

```text id="m2q9x4"
feature/course-enrollment

feature/user-dashboard

feature/content-review
```

A feature branch should focus on one clear objective.

---

# Fix Branches

Used for bug fixes.

Format:

```text id="q7k3v1"
fix/<description>
```

Examples:

```text id="z8m4c2"
fix/session-expiration

fix/course-progress-error
```

---

# Documentation Branches

Used for documentation-only changes.

Format:

```text id="n3v6p9"
docs/<description>
```

Examples:

```text id="b4x8s1"
docs/update-api-guide

docs/improve-security-docs
```

---

# Refactoring Branches

Used for code improvements without changing functionality.

Format:

```text id="r6t2w8"
refactor/<description>
```

Examples:

```text id="k9m3f5"
refactor/auth-module

refactor/database-layer
```

---

# Testing Branches

Used for adding or improving tests.

Format:

```text id="y5p8n2"
test/<description>
```

Examples:

```text id="u7q4c6"
test/authentication

test/course-module
```

---

# Branch Lifecycle

The normal workflow:

```text id="x2k7m9"
Create Issue

↓

Create Branch

↓

Develop Feature

↓

Run Tests

↓

Create Pull Request

↓

Code Review

↓

Merge

↓

Delete Branch
```

---

# Pull Request Requirements

Before merging:

* Code must be reviewed.
* Automated checks must pass.
* Documentation should be updated if needed.
* The branch should be up to date with `main`.

---

# Commit Guidelines

Commits should follow the conventions defined in:

```text id="p8v3r5"
docs/development/coding-standards.md
```

Commit messages should clearly explain the purpose of the change.

---

# Long-Lived Branches

AxiomForge intentionally avoids maintaining many permanent branches.

The project does not use:

* Git Flow.
* Development branches.
* Release branches for every version.

The workflow remains simple:

```text id="w9q4m7"
main

+

short-lived branches
```

---

# Future Scaling

If the project grows significantly, additional branch strategies may be introduced.

Possible additions:

* Release branches.
* Hotfix branches.
* Environment-specific branches.

These should only be added when the project requires them.

---

# Summary

AxiomForge uses a simple feature branch workflow:

* `main` remains stable.
* Changes happen through branches.
* Pull Requests provide review.
* Complexity is added only when needed.

This approach balances professional workflow with maintainability for a small development team.

