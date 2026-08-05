# ADR-008: Use shadcn/ui as the UI Component Library

## Status

Accepted

## Date

2026-08-02

## Context

AxiomForge requires a collection of reusable user interface components such as:

- Buttons
- Forms
- Dialogs
- Navigation
- Tables
- Tabs
- Dropdowns
- Toast notifications
- Cards
- Input controls

These components should be accessible, customizable, and integrate naturally with the project's Next.js and Tailwind CSS stack.

The project also prioritizes learning and understanding over relying on opaque abstractions.

## Decision

AxiomForge will use **shadcn/ui** as its primary UI component library.

Unlike traditional component libraries, shadcn/ui provides source code that becomes part of the project, allowing components to be fully customized and understood while still benefiting from professionally designed and accessible foundations.

## Options Considered

### shadcn/ui

Advantages:

- Full ownership of component source code
- Excellent Tailwind CSS integration
- Accessible components built on Radix UI primitives
- Highly customizable
- Strong TypeScript support
- Modern development workflow
- Large and active community

Disadvantages:

- Components become part of the project and require maintenance
- Updates are not automatic
- Developers are responsible for modifications

---

### Material UI

Advantages:

- Large ecosystem
- Extensive component library
- Mature documentation

Disadvantages:

- More opinionated visual design
- Customization can become complex
- Larger dependency footprint

---

### Chakra UI

Advantages:

- Excellent developer experience
- Accessible by default
- Good documentation

Disadvantages:

- Less flexibility than owning component source
- Additional abstraction layer

---

### Building Every Component Internally

Advantages:

- Complete control
- Maximum learning opportunity
- No external UI dependencies

Disadvantages:

- Significant development time
- Higher maintenance burden
- Increased risk of accessibility issues
- Reinvents well-established UI patterns

## Consequences

### Positive Consequences

- Reusable and consistent UI components.
- Strong accessibility foundation.
- Full control over component implementation.
- Easier customization to match AxiomForge's design language.
- Better alignment with the project's educational philosophy.

### Negative Consequences

- Project is responsible for maintaining customized components.
- Component updates require manual review and integration.

## Relationship to Previous Decisions

This decision builds upon:

- ADR-006: Frontend Framework – Next.js
- ADR-007: Frontend Styling – Tailwind CSS

shadcn/ui complements the selected frontend stack by providing customizable, accessible components while allowing the project to retain full ownership of its UI implementation.

## Summary

shadcn/ui was selected because it provides a balance between development productivity, accessibility, customization, and learning. It allows AxiomForge to build on proven UI patterns without sacrificing understanding or long-term maintainability.
