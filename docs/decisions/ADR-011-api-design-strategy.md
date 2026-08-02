# ADR-011: API Design Strategy

## Status

Accepted

## Date

2026-08-02

## Context

AxiomForge requires communication between the Next.js frontend and NestJS backend.

The API must support:

* User authentication
* Courses
* Lessons
* Labs
* Progress tracking
* User management
* Future platform features

The API design should prioritize:

* Maintainability
* Security
* Clear contracts
* Developer experience
* Future extensibility

## Decision

AxiomForge will use a **REST-first API architecture** with a design that allows future GraphQL adoption if requirements justify it.

REST will be the primary API approach for V1.

GraphQL may be introduced later for specific use cases where flexible data querying provides significant value.

## REST API Structure

The API will follow resource-based design.

Example:

```text
/api/v1/users
/api/v1/courses
/api/v1/lessons
/api/v1/labs
/api/v1/progress
```

HTTP methods will represent operations:

```text
GET       Retrieve resources
POST      Create resources
PATCH     Update resources
DELETE    Remove resources
```

## API Versioning

All API endpoints will use versioning.

Example:

```http
/api/v1/courses
```

Future breaking changes can introduce:

```http
/api/v2/courses
```

This prevents existing clients from breaking when the API evolves.

## GraphQL Future Compatibility

The backend architecture will avoid coupling business logic directly to REST controllers.

The structure will follow:

```text
Controller / Resolver

        ↓

Service Layer

        ↓

Repository Layer

        ↓

Database
```

This allows future GraphQL resolvers to reuse existing business logic without rewriting the application.

## Options Considered

### REST Only

Advantages:

* Simple
* Mature ecosystem
* Easy to secure
* Excellent NestJS support
* Easier for a single developer

Disadvantages:

* More endpoints may be required
* Complex frontend queries may require specialized endpoints

---

### GraphQL Only

Advantages:

* Flexible data querying
* Client controls response structure
* Useful for complex applications

Disadvantages:

* Increased complexity
* More difficult caching strategy
* Additional security considerations
* More infrastructure decisions

---

### REST + GraphQL Hybrid From Beginning

Advantages:

* Maximum flexibility
* Supports different frontend requirements

Disadvantages:

* Two API systems to maintain
* Increased development complexity
* More testing requirements
* Unnecessary for current requirements

---

## API Documentation

AxiomForge will use OpenAPI/Swagger for API documentation.

Swagger provides:

* Interactive API documentation
* Easier frontend/backend communication
* Automatic documentation generation
* Easier API testing

## Error Handling

The API will use a consistent error response format.

Example:

```json
{
  "statusCode": 400,
  "code": "INVALID_INPUT",
  "message": "The provided data is invalid",
  "timestamp": "2026-08-02T12:00:00Z",
  "path": "/api/v1/users"
}
```

Benefits:

* Easier frontend handling
* Better debugging
* Consistent client experience

## Consequences

### Positive Consequences

* Simple and maintainable API design
* Strong NestJS compatibility
* Clear frontend/backend contract
* Easy documentation
* Future GraphQL adoption remains possible

### Negative Consequences

* Some complex frontend views may require additional endpoints
* Future GraphQL adoption will require additional infrastructure

## Relationship to Previous Decisions

This decision builds upon:

* ADR-001: Modular Monolith Architecture
* ADR-003: Backend Framework – NestJS
* ADR-006: Frontend Framework – Next.js

The API architecture follows the same principle of keeping the system flexible without unnecessary complexity.

## Summary

AxiomForge will use a REST-first API architecture with versioned endpoints and OpenAPI documentation. The backend will remain structured so GraphQL can be introduced later if real requirements justify its complexity.

