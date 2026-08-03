# Release Process

## Purpose

This document defines the release process used by AxiomForge.

The goal is to create predictable and documented releases that allow contributors and users to understand:

* What changed.
* Why it changed.
* Whether changes are compatible.
* How the project evolved over time.

---

# Versioning Strategy

AxiomForge follows Semantic Versioning.

Format:

```text id="v9n3x5"
MAJOR.MINOR.PATCH
```

Example:

```text id="r5k8q2"
1.0.0
```

---

# Version Numbers

## Major Version

Example:

```text id="a4m7t9"
2.0.0
```

Used for:

* Breaking API changes.
* Major architectural changes.
* Significant redesigns.

---

## Minor Version

Example:

```text id="c6p2w8"
1.1.0
```

Used for:

* New features.
* New modules.
* Backwards-compatible improvements.

---

## Patch Version

Example:

```text id="h8q4m1"
1.0.1
```

Used for:

* Bug fixes.
* Security fixes.
* Documentation updates.
* Small improvements.

---

# Release Lifecycle

A release follows this process:

```text id="y7s2k9"
Feature Development

↓

Testing

↓

Documentation Update

↓

Version Update

↓

Release Notes

↓

Git Tag

↓

Release Published
```

---

# Pre-Release Checklist

Before creating a release:

## Code Quality

Verify:

* Tests pass.
* Build succeeds.
* Linting passes.
* No known critical issues exist.

---

## Documentation

Update:

* README if necessary.
* API documentation.
* Architecture documentation.
* Release notes.

---

## Security Review

Review changes involving:

* Authentication.
* Authorization.
* User data.
* Dependencies.
* Infrastructure.

---

# Release Notes

Every release should include:

* Version number.
* Release date.
* Added features.
* Changed behavior.
* Fixed issues.
* Breaking changes.

Example:

```text id="z5m8q3"
## v1.1.0

Added:
- Course progress dashboard

Changed:
- Updated progress calculation system

Fixed:
- Lesson completion bug
```

---

# Git Tags

Stable releases should be tagged.

Example:

```bash id="q3v7n1"
git tag v1.0.0
```

Tags provide a permanent reference to a specific project state.

---

# Release Documentation

Each version should have documentation stored in:

```text id="m8s4k2"
docs/releases/
```

Example:

```text id="p1x6w9"
docs/releases/

├── v1.0.0.md
├── v1.1.0.md
└── v2.0.0.md
```

---

# Breaking Changes

Breaking changes require additional documentation.

Examples:

* API changes.
* Database migrations.
* Removed features.
* Authentication changes.

Documentation should explain:

* What changed.
* Why it changed.
* How users migrate.

---

# Security Releases

Security fixes should prioritize user protection.

A security release should include:

* Vulnerability description.
* Affected versions.
* Fixed version.
* Required user actions.

Detailed vulnerability information should follow:

```text id="e4t9q6"
SECURITY.md
```

---

# Rollback Strategy

If a release causes critical problems:

Possible actions:

* Revert deployment.
* Publish a patch release.
* Restore previous stable version.

Rollback procedures should prioritize data integrity.

---

# Development Versions

Before stable releases, versions may use pre-release identifiers.

Examples:

```text id="n7c2m5"
1.0.0-alpha

1.0.0-beta

1.0.0-rc
```

These versions may contain incomplete features.

---

# Future Improvements

As the project grows, release automation may include:

* Automated changelog generation.
* CI/CD deployment.
* Automated version management.
* Release approval workflows.

---

# Summary

AxiomForge uses documented and predictable releases.

Every version should preserve project history by recording:

* Technical changes.
* Feature evolution.
* Architectural decisions.
* Migration requirements.

This allows contributors and users to understand how the platform grows over time.

