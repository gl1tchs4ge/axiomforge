# ADR-006: Use Next.js as the Frontend Framework

## Status

Accepted

## Date

2026-08-02

## Context

AxiomForge requires a modern frontend capable of supporting both public-facing content and authenticated application features.

The platform will include:

* Landing pages
* Documentation
* Learning paths
* Course browsing
* User dashboards
* Interactive lessons
* Hands-on labs
* Progress tracking
* AI-assisted learning
* Administrative interfaces

The frontend should integrate well with the existing TypeScript backend, provide an excellent developer experience, and remain maintainable as the application grows.

## Decision

AxiomForge will use **Next.js** as its frontend framework.

Next.js provides a robust foundation for building both public and authenticated experiences. Its support for Server-Side Rendering (SSR), Static Site Generation (SSG), and modern React development aligns with the project's long-term goals while maintaining a consistent TypeScript ecosystem across the entire stack.

## Options Considered

### React + Vite

Advantages:

* Extremely fast development experience
* Simple project structure
* Excellent TypeScript support
* Lightweight setup
* Ideal for Single Page Applications (SPAs)

Disadvantages:

* Limited built-in support for SEO
* No native server-side rendering
* No static site generation
* Additional tooling required as application requirements grow

---

### Next.js

Advantages:

* Excellent TypeScript integration
* Server-Side Rendering (SSR)
* Static Site Generation (SSG)
* Incremental Static Regeneration (ISR)
* File-based routing
* Excellent React ecosystem support
* Suitable for both public and authenticated pages
* Strong community and documentation
* Scales well for long-term applications

Disadvantages:

* Steeper learning curve than a traditional React application
* Introduces concepts such as Server Components and Client Components
* More opinionated project structure

---

### Angular

Advantages:

* Highly structured architecture
* Excellent TypeScript support
* Built-in dependency injection
* Mature enterprise ecosystem

Disadvantages:

* Larger learning curve
* More verbose development experience
* Less aligned with the desired frontend ecosystem for AxiomForge

---

### Vue + Nuxt

Advantages:

* Clean developer experience
* Good TypeScript support
* Server-side rendering capabilities
* Easy to learn

Disadvantages:

* Smaller ecosystem compared to React
* Fewer community resources relevant to the project's long-term goals

## Consequences

### Positive Consequences

* A unified TypeScript ecosystem across the frontend and backend.
* Excellent support for both public and authenticated pages.
* Built-in rendering strategies suitable for different types of content.
* Strong scalability as the platform evolves.
* Modern React ecosystem with extensive community support.

### Negative Consequences

* Developers must learn Next.js-specific concepts.
* Additional framework complexity compared to a traditional React application.
* Some features introduce abstraction that requires deeper understanding.

## Relationship to Previous Decisions

This decision builds upon:

* ADR-001: Modular Monolith Architecture
* ADR-002: Backend Language – TypeScript
* ADR-003: Backend Framework – NestJS
* ADR-004: Primary Database – PostgreSQL
* ADR-005: Object Relational Mapper – TypeORM

Using Next.js maintains a consistent TypeScript ecosystem across the application while complementing the modular backend architecture.

## Summary

Next.js was selected because it best supports AxiomForge's requirements for a modern educational platform. Its rendering capabilities, routing system, scalability, and TypeScript integration make it well suited for an application that combines public educational content with rich authenticated user experiences.

