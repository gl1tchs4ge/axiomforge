# ADR-013: Testing Strategy

## Status

Accepted

## Date

2026-08-02

## Context

AxiomForge is a cybersecurity learning platform where reliability and security are important.

The project must balance:

- Software quality
- Development speed
- Maintainability
- Learning goals
- Team size

As a solo developer initially, the testing strategy must provide confidence without creating unnecessary development overhead.

## Decision

AxiomForge will use a balanced professional testing strategy.

The project will implement:

- Unit testing
- Integration testing
- Critical end-to-end testing
- Security-focused testing

Testing effort will be prioritized based on risk.

## Testing Layers

### Unit Testing

Used for:

- Business logic
- Services
- Utility functions
- Data transformations

Purpose:

- Verify isolated behavior
- Encourage maintainable code
- Detect logic errors early

---

### Integration Testing

Used for:

- API endpoints
- Database interactions
- Authentication flows
- Authorization rules

Purpose:

- Verify system components work together.

---

### End-to-End Testing

Used selectively for critical user workflows.

Examples:

- User registration
- Login
- Learning path progression
- Content review workflow

Purpose:

- Verify complete user experiences.

---

## Security Testing

Security testing is a required part of the testing strategy.

Important areas include:

- Authentication security
- Authorization enforcement
- Input validation
- Markdown sanitization
- API security controls

The platform must verify that security boundaries cannot be bypassed.

## CI Integration

Automated checks will run before changes are merged.

The CI pipeline will verify:

- Code formatting
- Linting
- Type checking
- Automated tests
- Application build

Automated checks complement human code review.

## Options Considered

### Minimal Testing

Advantages:

- Faster development
- Lower maintenance

Disadvantages:

- Lower confidence
- Increased regression risk
- Poor demonstration of engineering maturity

Rejected.

---

### Balanced Professional Testing

Advantages:

- Good confidence
- Appropriate for project size
- Industry-aligned
- Sustainable for a solo developer

Chosen approach.

---

### Maximum Testing

Advantages:

- Maximum confidence

Disadvantages:

- Excessive complexity
- Slower development
- Unrealistic for current team size

Rejected for initial versions.

## Consequences

### Positive Consequences

- Higher reliability
- Safer changes
- Better maintainability
- Stronger portfolio demonstration
- Improved security confidence

### Negative Consequences

- Additional development time
- Tests require maintenance
- Requires discipline during development

## Relationship to Previous Decisions

This decision supports:

- ADR-001: Modular Monolith Architecture
- ADR-010: Authorization Model
- ADR-012: Validation and Data Integrity Strategy

Testing reinforces the separation of responsibilities and security boundaries established by previous decisions.

## Summary

AxiomForge will use a balanced professional testing strategy with automated checks, security testing, and risk-based test prioritization. This provides a maintainable approach suitable for a growing cybersecurity education platform.
