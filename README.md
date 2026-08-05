# AxiomForge

AxiomForge is an open-source technical learning platform designed to help people develop practical skills in areas such as:

- Cybersecurity.
- Programming.
- IT.
- Systems administration.
- Software engineering.

The goal is to create a structured learning ecosystem that combines educational content with practical experience.

---

# Project Status

Current phase:

```text
Architecture and Foundation Development
```

AxiomForge is currently being designed and built from the ground up.

The project focuses on:

- Professional software engineering practices.
- Secure development.
- Maintainable architecture.
- Open-source collaboration.

---

# Vision

AxiomForge aims to become a platform where learners can:

- Follow structured learning paths.
- Complete courses.
- Practice through hands-on labs.
- Track their progress.
- Contribute educational content.
- Improve their technical skills.

---

# Core Principles

AxiomForge follows these principles:

## Learn Through Practice

Technical skills require application.

The platform focuses on:

- Practical exercises.
- Labs.
- Real-world scenarios.

---

## Security First

Security is considered throughout development.

Important areas:

- Authentication.
- Authorization.
- Input validation.
- Secure software design.

---

## Quality Over Speed

The project prioritizes:

- Maintainable code.
- Documentation.
- Testing.
- Thoughtful architecture.

---

## Open Source With Controlled Contributions

AxiomForge is open source.

Contributions are welcome, but changes follow a review process to maintain quality.

The contribution workflow includes:

- Feature branches.
- Pull requests.
- Code review.
- Automated checks.

---

# Architecture

AxiomForge uses a modular monolith architecture.

High-level structure:

```text
Frontend
    |
    |
Backend API
    |
    |
Application Modules
    |
    |
PostgreSQL + Redis
```

Main backend modules:

```text
Auth

Users

Learning

Labs

Assessments

Progress

Reviews

Admin
```

---

# Technology Stack

## Frontend

- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui

## Backend

- NestJS
- TypeScript

## Database

- PostgreSQL
- TypeORM

## Infrastructure

- Docker Compose

## Authentication

- Session-based authentication.
- Redis session storage.

## API

- REST API.
- OpenAPI / Swagger documentation.

More details:

```text
docs/architecture/tech-stack.md
```

---

# Documentation

Project documentation is organized into:

```text
docs/

├── architecture/

├── decisions/

├── development/

├── api/

├── releases/

└── reference/
```

Important documents:

Architecture:

```text
docs/architecture/
```

Architecture decisions:

```text
docs/decisions/
```

Development guide:

```text
docs/development/getting-started.md
```

Security model:

```text
docs/reference/security-model.md
```

---

# Development

Requirements:

- Node.js
- Docker
- Docker Compose
- Git

Setup instructions:

```text
docs/development/getting-started.md
```

---

# Contributing

Contributions are welcome.

Before contributing:

1. Read the contribution guidelines.
2. Understand the project architecture.
3. Review relevant ADRs.
4. Create a feature branch.
5. Submit a pull request.

See:

```text
CONTRIBUTING.md
```

---

# Security

Security issues should be reported privately.

See:

```text
SECURITY.md
```

---

# License

AxiomForge is licensed under:

```text
LICENSE
```

---

# Roadmap

Current roadmap:

```text
V0

Architecture + Documentation

↓

V1

Core Learning Platform

↓

V2

Community + Platform Improvements

↓

V3

Advanced Learning Ecosystem
```

Full roadmap:

```text
docs/architecture/roadmap.md
```

---

# Contributing to the Future

AxiomForge is built with the goal of becoming a long-term open-source project.

The project values contributors who care about:

- Learning.
- Quality.
- Security.
- Collaboration.
- Building useful software.

Welcome to AxiomForge.
