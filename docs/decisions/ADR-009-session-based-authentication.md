# ADR-009: Session-Based Authentication

## Status

Accepted

## Date

2026-08-02

## Context

AxiomForge requires a secure authentication system for users accessing educational content, hands-on labs, progress tracking, and future platform features.

The platform will initially operate as a web application with a small user base and a focus on security, maintainability, and learning professional software engineering practices.

Authentication must support:

* User accounts
* Secure password storage
* Login sessions
* Account recovery
* Future expansion

## Decision

AxiomForge will use session-based authentication with secure cookie storage.

The authentication system will use:

* Email and password authentication
* Argon2id password hashing
* Server-managed sessions
* Secure HttpOnly cookies
* SameSite cookie protection
* PostgreSQL-backed session storage for the initial version

Password changes will invalidate all active sessions to prevent unauthorized continued access.

## Options Considered

### Session-Based Authentication

Advantages:

* Strong security defaults for web applications
* Easy session invalidation
* HttpOnly cookies reduce token exposure risk
* Simple mental model
* Well suited for browser-based applications

Disadvantages:

* Requires server-side session storage
* More difficult to scale across many servers without shared storage

---

### JWT Authentication

Advantages:

* Stateless authentication
* Good support for distributed systems
* Common for APIs and mobile applications

Disadvantages:

* More complex security considerations
* Difficult token revocation
* Easy to implement incorrectly
* Requires careful refresh token management

---

## Session Storage Decision

PostgreSQL will be used for session storage initially.

Redis was considered due to its performance and common usage in large-scale systems. However, introducing Redis before a demonstrated need would add unnecessary infrastructure complexity.

A future migration to Redis can occur if:

* Session queries impact database performance.
* Authentication latency increases significantly.
* Database resources become constrained.
* Horizontal scaling requires distributed session storage.

## Password Security

Passwords will never be stored directly.

AxiomForge will use Argon2id for password hashing because it is designed to resist modern password cracking techniques.

## Session Security

Sessions will use secure cookie configurations:

* HttpOnly
* Secure
* SameSite protection

These settings reduce risks from attacks such as session theft and cross-site request forgery.

## Password Change Behavior

When a user changes their password:

1. The current password is verified.
2. The new password is securely hashed.
3. The password is updated.
4. All active sessions are invalidated.
5. The user must authenticate again.

This prevents stolen sessions from remaining active after an account recovery event.

## Consequences

### Positive Consequences

* Strong security model for a web application.
* Simple implementation and maintenance.
* Easy account recovery process.
* Clear session management behavior.

### Negative Consequences

* Requires session storage management.
* Future large-scale deployments may require migration to Redis or another distributed session store.

## Relationship to Previous Decisions

This decision builds upon:

* ADR-001: Modular Monolith Architecture
* ADR-002: Backend Language – TypeScript
* ADR-003: Backend Framework – NestJS
* ADR-004: Primary Database – PostgreSQL
* ADR-005: Object Relational Mapper – TypeORM

The authentication system follows the project's philosophy of selecting secure, maintainable solutions without introducing unnecessary complexity.

## Summary

AxiomForge will use session-based authentication because it provides a secure, maintainable, and appropriate solution for the project's current requirements while allowing future evolution when real scaling requirements appear.

