# ADR-007: Use Tailwind CSS as the Frontend Styling Solution

## Status

Accepted

## Date

2026-08-02

## Context

AxiomForge requires a frontend styling solution that supports a modern, responsive, and maintainable user interface.

The application will include:

* Landing pages
* Dashboards
* Learning paths
* Courses
* Lessons
* Hands-on labs
* Administrative interfaces
* Dark mode
* Mobile responsiveness
* Accessibility

The styling solution should integrate well with Next.js and TypeScript while remaining scalable as the application grows.

## Decision

AxiomForge will use **Tailwind CSS** as its primary styling solution.

Tailwind CSS provides a utility-first approach that encourages consistent design, rapid UI development, responsive layouts, and maintainable styling without relying on large global stylesheets.

## Options Considered

### Tailwind CSS

Advantages:

* Excellent Next.js integration
* Utility-first workflow
* Consistent design system
* Responsive design utilities
* Built-in dark mode support
* Large community and ecosystem
* Excellent documentation
* Minimal CSS maintenance

Disadvantages:

* Utility classes can make JSX verbose
* Requires learning Tailwind's utility conventions
* Styling logic is contained within component markup

---

### CSS Modules

Advantages:

* Uses standard CSS
* Scoped component styles
* Familiar development model
* No global naming conflicts

Disadvantages:

* Additional CSS files for each component
* More maintenance as the project grows
* Less consistent design system by default

---

### Styled Components

Advantages:

* Component-scoped styling
* Flexible styling model
* Good developer experience

Disadvantages:

* Additional runtime overhead
* Less aligned with modern Next.js recommendations
* Increased abstraction compared to utility-first CSS

---

### Plain CSS

Advantages:

* No dependencies
* Direct use of CSS
* Complete flexibility

Disadvantages:

* Difficult to maintain in large applications
* Global style conflicts
* Lack of built-in design consistency

## Consequences

### Positive Consequences

* Consistent visual design.
* Excellent responsive design support.
* Simplified dark mode implementation.
* Reduced CSS maintenance.
* Strong ecosystem and community support.

### Negative Consequences

* Components may contain long utility class lists.
* Developers must learn Tailwind conventions.
* Utility-first styling differs from traditional CSS workflows.

## Relationship to Previous Decisions

This decision builds upon:

* ADR-001: Modular Monolith Architecture
* ADR-002: Backend Language – TypeScript
* ADR-003: Backend Framework – NestJS
* ADR-004: Primary Database – PostgreSQL
* ADR-005: Object Relational Mapper – TypeORM
* ADR-006: Frontend Framework – Next.js

Tailwind CSS complements the selected frontend architecture by providing a scalable and maintainable styling approach.

## Summary

Tailwind CSS was selected because it enables rapid development, encourages a consistent design system, integrates seamlessly with Next.js, and supports the long-term maintainability goals of AxiomForge.

