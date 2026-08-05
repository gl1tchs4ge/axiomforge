# ADR-015: CI/CD Pipeline and Development Workflow

## Status

Accepted

## Date

2026-08-02

## Context

AxiomForge is intended to support professional software development practices and future open-source collaboration.

The project requires a workflow that provides:

- Code quality control
- Safe collaboration
- Automated verification
- Maintainable development processes

The workflow must support both the current solo developer environment and future contributors.

## Decision

AxiomForge will use a feature branch workflow with pull requests.

Changes will not be made directly on the main branch.

The workflow will be:

```text
Developer

↓

Feature Branch

↓

Pull Request

↓

Automated Checks

↓

Code Review

↓

Merge
```

## Branch Strategy

The project will use feature branches.

Example:

```text
main

feature/user-authentication

feature/course-management

feature/progress-tracking
```

Each feature branch should represent a focused change.

## Pull Requests

Pull requests will be used for:

- Code review
- Discussion of changes
- Automated validation
- Maintaining project history

Even as a solo developer, pull requests encourage professional development habits.

## Continuous Integration

GitHub Actions will run automated checks for pull requests.

Required checks:

### Code Quality

- Linting
- Formatting verification

### Type Safety

- TypeScript type checking

### Testing

- Unit tests
- Integration tests

### Build Verification

- Application build process

### Security Checks

Security checks will include:

- Dependency vulnerability scanning
- Secret scanning
- Static analysis

Security tools may initially report issues without blocking all merges until false-positive handling is established.

## Deployment Strategy

AxiomForge will use a phased deployment approach.

### Initial Version

Deployment will be manual.

The developer will understand:

- Server configuration
- Docker deployment
- Environment management
- Database migrations
- Application verification

before automating deployment.

### Future Versions

Deployment automation may be introduced.

Future workflow:

```text
Merge to main

↓

CI passes

↓

Automated deployment

↓

Production update
```

## Options Considered

### Direct Main Development

Advantages:

- Simple
- Fast

Disadvantages:

- No review process
- Higher chance of breaking main
- Poor collaboration workflow

Rejected.

---

### Feature Branches + Pull Requests

Advantages:

- Professional workflow
- Supports collaboration
- Maintains stable main branch
- Appropriate complexity

Chosen.

---

### Git Flow

Advantages:

- Useful for some release-based projects

Disadvantages:

- More complex
- More maintenance
- Unnecessary for current project size

Rejected.

---

### Fully Automated Deployment From V1

Advantages:

- Faster releases
- Modern workflow

Disadvantages:

- Hides deployment complexity
- Requires additional infrastructure
- Reduces learning opportunity

Rejected initially.

## Consequences

### Positive Consequences

- Better code quality
- Safer collaboration
- Professional Git workflow
- Easier future open-source contribution
- Reliable changes

### Negative Consequences

- Additional process overhead
- CI maintenance required
- Manual deployment initially requires discipline

## Relationship to Previous Decisions

This decision supports:

- ADR-013: Testing Strategy
- ADR-014: Development Environment and Infrastructure
- Open-source contribution workflow

## Summary

AxiomForge will use feature branches, pull requests, automated CI checks, and a phased deployment strategy. The project will prioritize understanding and reliability before introducing advanced automation.
