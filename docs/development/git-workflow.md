# AxiomForge Git Workflow

## Purpose

This document defines the Git workflow used for developing and contributing to AxiomForge.

The workflow is designed to provide:

- Clear development history.
- Safe collaboration.
- Easier reviews.
- Controlled changes to the main codebase.

For the architectural reasoning behind this workflow, see:

```text
docs/decisions/ADR-015-ci-cd-and-development-workflow.md
```

---

# Branch Strategy

AxiomForge uses a lightweight feature branch workflow.

The main branches are:

```text
main

develop (optional when team size requires it)
```

---

# Main Branch

The `main` branch represents stable project code.

Rules:

- Code should compile successfully.
- Tests should pass.
- Documentation should be updated.
- Changes should be reviewed before merging.

The main branch should always represent a usable version of AxiomForge.

---

# Feature Branches

New work should be performed in dedicated branches.

Naming format:

```text
type/description
```

Examples:

```text
feature/session-auth

feature/course-progress

fix/login-error

docs/update-api-guide

refactor/user-module
```

---

# Branch Types

## Feature

Used for new functionality.

Example:

```text
feature/lab-system
```

---

## Fix

Used for bug fixes.

Example:

```text
fix/password-reset-error
```

---

## Documentation

Used for documentation-only changes.

Example:

```text
docs/add-security-guide
```

---

## Refactor

Used for improving existing code without changing behavior.

Example:

```text
refactor/auth-service
```

---

# Development Flow

The standard workflow:

```text
Create Issue / Task

↓

Create Branch

↓

Implement Changes

↓

Run Tests

↓

Run Quality Checks

↓

Create Pull Request

↓

Review

↓

Merge
```

---

# Pull Requests

All significant changes should be submitted through Pull Requests.

A Pull Request should explain:

## What Changed

Example:

```text
Implemented session-based authentication.
```

---

## Why It Changed

Example:

```text
Users need secure account access before learning progress can be tracked.
```

---

## How It Was Tested

Example:

```text
Verified login, logout, and session invalidation.
```

---

# Pull Request Requirements

Before merging:

- Code follows project standards.
- Tests pass.
- Documentation is updated if necessary.
- No unresolved review discussions remain.

---

# Review Process

Reviews exist to improve quality, not block contributors.

Reviewers should focus on:

- Correctness.
- Security.
- Maintainability.
- Consistency.
- Documentation.

---

# Commit Standards

AxiomForge uses Conventional Commits.

Format:

```text
type(scope): description
```

Examples:

```text
feat(auth): add session authentication

fix(progress): correct lesson completion state

docs(adr): add database decision record

refactor(api): simplify course endpoints

test(users): add permission tests
```

---

# Commit Guidelines

Good commits:

- Describe one logical change.
- Have clear messages.
- Are easy to understand.

Avoid:

```text
update stuff

changes

fix
```

---

# Keeping Branches Updated

Before opening a Pull Request:

Update your branch with the latest changes from main.

Example:

```bash
git fetch origin

git rebase origin/main
```

Resolve conflicts before requesting review.

---

# Merge Strategy

The preferred merge strategy is:

## Squash Merge

Benefits:

- Cleaner history.
- Easier rollback.
- Keeps main branch understandable.

Example:

Instead of:

```text
commit 1
commit 2
commit 3
commit 4
```

Main receives:

```text
feat(auth): implement authentication system
```

---

# Releases

Releases should be created from stable main code.

Each release should include:

- Version number.
- Release notes.
- Major changes.
- Migration notes if needed.

Release documentation is stored in:

```text
docs/releases/
```

---

# Versioning

AxiomForge follows semantic versioning.

Format:

```text
MAJOR.MINOR.PATCH
```

Example:

```text
1.0.0
```

Meaning:

## Major

Breaking changes.

Example:

```text
2.0.0
```

---

## Minor

New backward-compatible features.

Example:

```text
1.1.0
```

---

## Patch

Bug fixes.

Example:

```text
1.0.1
```

---

# Open Source Contribution Flow

Future contributors should:

1. Read project documentation.
2. Understand relevant ADRs.
3. Create a branch.
4. Implement changes.
5. Submit a Pull Request.
6. Address review feedback.

---

# Summary

AxiomForge uses a simple but professional Git workflow:

```text
Feature Branches

↓

Pull Requests

↓

Review

↓

Quality Checks

↓

Main Branch
```

The workflow supports both a single developer environment and future open-source collaboration.
