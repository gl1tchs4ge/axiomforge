# Contributing to AxiomForge

Thank you for your interest in contributing to AxiomForge.

AxiomForge is an open-source project built around learning, collaboration, and creating high-quality software.

Contributions are welcome in areas such as:

* Code.
* Documentation.
* Testing.
* Security improvements.
* Bug reports.
* Feature suggestions.

---

# Before Contributing

Before making changes, contributors should:

1. Read this document.
2. Understand the project structure.
3. Review relevant architecture decisions.
4. Check existing issues and discussions.

Important documentation:

```text id="8m3tq7"
docs/

├── architecture/

├── decisions/

├── development/

└── reference/
```

---

# Ways to Contribute

## Report Bugs

When reporting a bug, include:

* Clear description.
* Steps to reproduce.
* Expected behavior.
* Actual behavior.
* Environment information.

Good bug reports help maintain project quality.

---

## Suggest Features

Feature requests should explain:

* The problem being solved.
* Why the feature is useful.
* Possible implementation considerations.

Not every feature suggestion will immediately become part of the project.

Features are evaluated based on:

* Project goals.
* Complexity.
* Maintenance cost.
* User impact.

---

## Submit Code

Code contributions should:

* Follow project standards.
* Include appropriate tests.
* Update documentation when needed.
* Pass automated checks.

---

# Development Workflow

AxiomForge uses a feature branch workflow.

The general process:

```text id="2tq7j5"
Create Issue

↓

Create Branch

↓

Develop Feature

↓

Run Tests

↓

Open Pull Request

↓

Review

↓

Merge
```

---

# Branch Naming

Branches should follow:

```text id="r8m2qx"
type/description
```

Examples:

```text id="f3h9k1"
feature/course-progress

fix/authentication-error

docs/update-guide

refactor/database-layer
```

---

# Pull Requests

All significant changes should go through Pull Requests.

A Pull Request should include:

## Description

Explain:

* What changed.
* Why it changed.
* How it works.

---

## Testing Information

Include:

* Tests performed.
* Commands used.
* Any limitations.

Example:

```text id="x7p2k8"
npm test

npm run lint

npm run build
```

---

## Documentation

Update documentation when changes affect:

* Architecture.
* API behavior.
* Configuration.
* Development workflow.

---

# Review Process

Reviews exist to improve the project.

Reviewers evaluate:

* Correctness.
* Security.
* Maintainability.
* Code quality.
* Documentation.

Review feedback should be:

* Respectful.
* Specific.
* Focused on improving the contribution.

---

# Commit Messages

AxiomForge uses Conventional Commits.

Format:

```text id="q3k8v1"
type(scope): description
```

Examples:

```text id="m9w5p4"
feat(auth): add session expiration

fix(api): handle invalid course request

docs(readme): update setup instructions

test(users): add permission tests
```

---

# Code Requirements

Before submitting a Pull Request:

Ensure:

* Code follows coding standards.
* Types are properly defined.
* Tests pass.
* No unnecessary dependencies are added.
* Documentation is updated.

See:

```text id="m6z1c9"
docs/development/coding-standards.md
```

---

# Security-Sensitive Changes

Additional care is required for changes involving:

* Authentication.
* Authorization.
* Sessions.
* User data.
* File handling.
* External integrations.
* Infrastructure.

Security-related changes may require additional review before merging.

---

# Adding Dependencies

Before adding a dependency:

Consider:

* Is it necessary?
* Is it actively maintained?
* Does it introduce security concerns?
* Could existing tools solve the problem?

Avoid unnecessary dependencies.

---

# Contributor Expectations

Contributors should:

* Communicate clearly.
* Respect other contributors.
* Accept constructive feedback.
* Follow project standards.

AxiomForge is designed to be a welcoming environment focused on building quality software.

---

# License Agreement

By contributing to AxiomForge, contributors agree that their contributions will be licensed under the project's license.

---

# Thank You

Every contribution helps improve AxiomForge.

Whether you submit code, documentation, feedback, or ideas, your participation helps build a better learning ecosystem.

