# AxiomForge Security Architecture

## Purpose

This document describes how security is integrated into the AxiomForge architecture.

Rather than treating security as a single feature, AxiomForge applies security controls throughout the entire request lifecycle.

This document complements:

- `docs/reference/security-model.md`
- `SECURITY.md`
- ADR-009 (Session-Based Authentication)
- ADR-010 (Authorization and Content Review)
- ADR-012 (Validation and Data Integrity)

---

# Security Philosophy

AxiomForge follows a defense-in-depth strategy.

Security is implemented in multiple layers so that no single failure results in complete system compromise.

Every request should pass through multiple security controls before reaching business logic.

---

# Security Layers

```text
Client
    │
    ▼
HTTPS
    │
    ▼
Frontend
    │
    ▼
Authentication
    │
    ▼
Authorization
    │
    ▼
Validation
    │
    ▼
Business Logic
    │
    ▼
Database
```

Each layer has a specific responsibility.

---

# Layer 1 — Transport Security

All communication between clients and the application should use HTTPS.

Goals:

- Encrypt traffic.
- Protect session cookies.
- Prevent eavesdropping.
- Reduce man-in-the-middle attacks.

---

# Layer 2 — Frontend

The frontend should never be trusted.

Its responsibilities are:

- Collect user input.
- Perform basic client-side validation.
- Display server responses.

Security decisions must always be enforced by the backend.

---

# Layer 3 — Authentication

Authentication verifies user identity.

Current approach:

- Session-based authentication.
- Secure HTTP-only cookies.
- Redis-backed session storage.

Sessions should:

- Expire appropriately.
- Be invalidated after password changes.
- Be removed during logout.

---

# Layer 4 — Authorization

Authentication answers:

> Who is the user?

Authorization answers:

> What is the user allowed to do?

AxiomForge uses:

- Role-Based Access Control (RBAC).
- Permission-based authorization.

Every protected endpoint should verify permissions before executing business logic.

---

# Layer 5 — Input Validation

Every request entering the backend must be considered untrusted.

Validation should occur before:

- Database operations.
- Business logic execution.
- File processing.
- External service communication.

Invalid requests should be rejected immediately.

---

# Layer 6 — Business Logic

Business services enforce application rules.

Examples:

- Course enrollment requirements.
- Review approval workflow.
- Progress completion rules.
- Assessment evaluation.

Business logic should never rely solely on frontend validation.

---

# Layer 7 — Database

PostgreSQL is the primary source of truth.

Database security includes:

- Parameterized queries through the ORM.
- Explicit relationships.
- Data ownership.
- Principle of least privilege.

Sensitive information should never be stored in plaintext.

---

# Session Security

```text
User Login

↓

Credentials Verified

↓

Session Created

↓

Stored in Redis

↓

Session Cookie Returned

↓

Authenticated Requests
```

Sessions are invalidated when:

- The user logs out.
- The password changes.
- Administrative action requires re-authentication.

---

# Permission Flow

```text
Request

↓

Authenticated User

↓

Role Lookup

↓

Permission Check

↓

Business Logic

↓

Response
```

Unauthorized requests should receive an appropriate HTTP response without exposing internal details.

---

# Content Security

User-generated content requires additional protection.

Examples include:

- Markdown.
- Course descriptions.
- Lesson content.

Content should be sanitized before rendering to prevent client-side attacks.

---

# Error Handling

Error responses should:

- Be consistent.
- Avoid exposing implementation details.
- Avoid revealing stack traces in production.

Detailed information should be written to logs rather than returned to clients.

---

# Logging

Logs should assist with debugging and incident investigation.

Logs must not contain:

- Passwords.
- Session identifiers.
- Authentication secrets.
- Sensitive personal information.

---

# Dependency Security

Third-party dependencies should be:

- Maintained.
- Reviewed before adoption.
- Updated regularly.
- Removed when no longer needed.

Every dependency increases the application's attack surface.

---

# Future Security Enhancements

As AxiomForge evolves, the architecture may include:

- Multi-factor authentication.
- Rate limiting.
- Audit logging.
- Security event monitoring.
- Background security scanning.
- Container isolation for lab environments.

These additions should extend the existing architecture rather than replace it.

---

# Security Principles

The architecture is guided by these principles:

- Defense in depth.
- Least privilege.
- Secure defaults.
- Explicit authorization.
- Validated input.
- Clear ownership of data.
- Continuous improvement.

---

# Summary

Security in AxiomForge is not implemented in a single module.

Instead, security is enforced throughout the application lifecycle, from the moment a request is received until a response is returned.

This layered approach improves resilience, maintainability, and long-term security as the platform grows.
