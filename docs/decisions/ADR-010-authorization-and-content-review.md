# ADR-010: Authorization Model and Content Review Workflow

## Status

Accepted

## Date

2026-08-02

## Context

AxiomForge requires an authorization system that supports different types of users with different responsibilities.

The platform includes:

* Students learning content
* Instructors creating educational resources
* Reviewers validating content quality and security
* Administrators managing the platform

Since AxiomForge focuses on cybersecurity education, incorrect or unsafe content could negatively impact users. The platform requires a system that balances community contribution with quality control.

The authorization model must support:

* Fine-grained access control
* Future platform growth
* Secure content management
* Separation of responsibilities

## Decision

AxiomForge will use a hybrid **Role-Based Access Control (RBAC) with Permissions** authorization model.

Roles will provide groups of default permissions, while individual permissions will allow more granular control as the platform grows.

The initial roles are:

### Student

Responsibilities:

* Consume educational content
* Complete lessons
* Execute labs
* Submit quizzes
* Track learning progress

---

### Instructor

Responsibilities:

* Create courses
* Create lessons
* Create labs
* Submit content for review

Instructors cannot directly publish their own content.

---

### Reviewer

Responsibilities:

* Review submitted content
* Validate educational quality
* Verify technical accuracy
* Approve or reject submissions

---

### Administrator

Responsibilities:

* Manage users
* Manage roles and permissions
* Manage platform configuration
* Handle exceptional cases

## Content Review Workflow

All educational content must go through review before becoming publicly available.

The workflow is:

```
Contributor

↓

Draft

↓

Submit for Review

↓

Reviewer Evaluation

↓

Approved

↓

Published
```

Creators cannot approve their own content.

This enforces separation of duties and reduces the risk of inaccurate or unsafe educational resources reaching users.

## Options Considered

### Pure Role-Based Access Control

Advantages:

* Simple implementation
* Easy to understand
* Suitable for small applications

Disadvantages:

* Becomes difficult to manage as roles increase
* Limited flexibility
* Can create excessive numbers of roles

Example problem:

```
InstructorReviewerAdmin
```

would become difficult to maintain.

---

### Permission-Based Access Control Only

Advantages:

* Maximum flexibility
* Very fine-grained control

Disadvantages:

* More complex management
* Difficult to maintain manually
* Requires more administration

---

### RBAC + Permissions

Advantages:

* Simple default role management
* Fine-grained permissions when needed
* Scales better as the platform grows
* Supports future contributor trust systems

Disadvantages:

* More complex than basic RBAC
* Requires careful permission design

## Future Evolution

AxiomForge may introduce trust-based contributor permissions in future versions.

Example:

```
New Contributor

↓

Mandatory Review


Trusted Contributor

↓

Reduced Review Requirements


Security Maintainer

↓

Can Approve Security Labs
```

Trust levels will be earned through demonstrated reliability and contribution history.

## Security Considerations

Authorization decisions must always be enforced on the backend.

Frontend checks only improve user experience and must never be considered security controls.

Example:

A hidden button does not prevent unauthorized API requests.

The backend must verify:

* User identity
* Roles
* Permissions
* Resource ownership

## Consequences

### Positive Consequences

* Strong separation of responsibilities
* Better content quality control
* Reduced security risk
* Flexible permission management
* Supports future community growth

### Negative Consequences

* Slower content publishing
* Requires reviewer availability
* More complex authorization implementation

## Relationship to Previous Decisions

This decision builds upon:

* ADR-001: Modular Monolith Architecture
* ADR-009: Session-Based Authentication

Authentication determines who the user is.

Authorization determines what the authenticated user can do.

## Summary

AxiomForge will use RBAC combined with permissions and require independent content review before publication. This approach provides a secure foundation for community contribution while maintaining educational quality and platform trust.

