# ADR-012: Validation and Data Integrity Strategy

## Status

Accepted

## Date

2026-08-02

## Context

AxiomForge will receive data from multiple sources:

- User registration
- Authentication requests
- Course creation
- Lesson content
- Labs
- Progress tracking
- Community contributions

All external input must be considered untrusted.

The platform requires a validation strategy that provides:

- Secure input handling
- Consistent API behavior
- Data integrity
- Maintainable backend architecture
- Protection against malicious input

Since AxiomForge allows contributors to create educational content, the system must balance flexibility with security.

## Decision

AxiomForge will use a multi-layer validation strategy.

Validation will occur at multiple boundaries:

```text
User Input

↓

Frontend Validation

↓

API DTO Validation

↓

Business Rule Validation

↓

Database Constraints
```

Each layer serves a different purpose.

---

## Frontend Validation

Frontend validation will primarily exist for user experience.

Responsibilities:

- Provide immediate feedback
- Reduce unnecessary API requests
- Improve usability

Frontend validation will not be considered a security mechanism.

All security-sensitive validation will be performed on the backend.

---

## Backend Validation

NestJS DTO validation will be used as the primary API validation layer.

Technology choice:

```text
class-validator
+
class-transformer
```

DTOs will define expected request structures.

Examples:

- Required fields
- Data types
- String length limits
- Email formats
- Allowed values

The backend will reject invalid requests before they reach application logic.

---

## Business Rule Validation

Application-level validation will handle rules that depend on system state.

Examples:

- A user cannot create a course without instructor permissions.
- A lesson cannot be published before approval.
- A user cannot submit progress for a nonexistent lab.

Business validation will remain separate from DTO validation.

DTOs validate data shape.

Business logic validates application rules.

---

## Database Integrity

The database will enforce important data constraints.

Examples:

- Required fields
- Unique values
- Foreign key relationships
- Data consistency rules

The database acts as the final protection layer against invalid states.

---

# User-Generated Content Strategy

AxiomForge will allow contributors to create educational content.

Content will use Markdown instead of raw HTML.

The chosen approach:

```text
Markdown Input

↓

Sanitization

↓

Safe Rendering

↓

User Display
```

Markdown will be treated as untrusted input.

Dangerous content will be removed before rendering.

---

## Options Considered

### Raw HTML / Markdown

Advantages:

- Maximum flexibility
- Rich content support

Disadvantages:

- High XSS risk
- Dangerous HTML execution
- Difficult security management

Rejected because contributor content cannot be fully trusted.

---

### Plain Text Only

Advantages:

- Very secure
- Simple implementation

Disadvantages:

- Poor educational experience
- No code blocks
- No formatting
- Limited documentation capabilities

Rejected because technical education requires richer content.

---

### Sanitized Markdown

Advantages:

- Supports technical documentation
- Supports code examples
- Easy version control integration
- Reduces XSS risk
- Good contributor experience

Disadvantages:

- Requires sanitization
- Some formatting limitations

Chosen approach.

---

## Security Considerations

The system must assume:

- Users can modify requests.
- Frontend validation can be bypassed.
- Contributors may accidentally or intentionally submit malicious content.

Security controls include:

- Backend validation
- Input sanitization
- Database constraints
- Authorization checks
- Output encoding

---

## Consequences

### Positive Consequences

- Stronger security boundaries
- Consistent API behavior
- Better data quality
- Maintainable backend design
- Safe rich educational content

### Negative Consequences

- Multiple validation layers require additional implementation
- Markdown sanitization requires maintenance
- Some advanced formatting may be restricted

---

## Relationship to Previous Decisions

This decision builds upon:

- ADR-003: Backend Framework – NestJS
- ADR-004: Primary Database – PostgreSQL
- ADR-010: Authorization Model and Content Review Workflow
- ADR-011: API Design Strategy

Validation supports the security and maintainability goals established in previous architectural decisions.

## Summary

AxiomForge will implement layered validation using NestJS DTO validation, business rule validation, database constraints, and sanitized Markdown content. This provides a secure and maintainable foundation while preserving the flexibility required for technical education.
