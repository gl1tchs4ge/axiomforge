# AxiomForge System Overview

## Purpose

This document provides a high-level overview of the AxiomForge system architecture.

It explains:

- Main system components.
- How data flows through the platform.
- How frontend, backend, and infrastructure interact.
- Architectural boundaries.

For detailed technical decisions, see the Architecture Decision Records.

---

# High-Level Architecture

AxiomForge follows a **modular monolith architecture**.

The system is divided into independent business modules inside a single backend application.

High-level structure:

```text
                    Users

                      |

                      v

                Next.js Frontend

                      |

                      |

                 REST API

                      |

                      v

              NestJS Backend

                      |

        +-------------+-------------+

        |             |             |

        v             v             v

    Modules       TypeORM       Services

        |

        v

    PostgreSQL

        |

        v

       Data
```

---

# Main Components

## Frontend

Technology:

- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui

Responsibilities:

- User interface.
- Client-side interactions.
- Displaying learning content.
- Managing user sessions from the client perspective.
- Communicating with backend APIs.

The frontend should not contain business logic that belongs to the backend.

---

# Backend

Technology:

- NestJS
- TypeScript

Responsibilities:

- Business logic.
- Authentication.
- Authorization.
- Data validation.
- API handling.
- Learning system logic.

The backend is organized into domain modules.

Example:

```text
Backend

├── Auth

├── Users

├── Learning

├── Labs

├── Assessments

├── Progress

├── Reviews

└── Admin
```

---

# Database Layer

Technology:

- PostgreSQL
- TypeORM

Responsibilities:

- Persistent storage.
- Relationships between entities.
- Data integrity.
- Database migrations.

The database follows a balanced relational design.

Important relationships:

```text
LearningPath

        |

        |

     Courses

        |

        |

     Lessons

        |

        |

       Labs
```

Reusable content is supported through relational relationships instead of duplicated data.

---

# Session Management

Technology:

- Redis

Responsibilities:

- Store active sessions.
- Manage authentication state.
- Allow session invalidation.

Authentication flow:

```text
User

↓

Login

↓

NestJS validates credentials

↓

Session created

↓

Session stored in Redis

↓

Session identifier returned

↓

User authenticated
```

---

# Request Flow

Example:

A user opens a course page.

## Step 1

Frontend requests course data:

```http
GET /api/v1/courses/:id
```

---

## Step 2

NestJS receives the request.

The request passes through:

```text
Request

↓

Middleware

↓

Authentication

↓

Authorization

↓

Controller

↓

Service

↓

Repository

↓

Database
```

---

## Step 3

TypeORM retrieves the required data.

Example:

```text
Course

+

Lessons

+

Progress
```

---

## Step 4

The backend returns structured data.

Example:

```json
{
  "course": "Web Security Fundamentals",
  "progress": 45
}
```

---

# Security Boundaries

Security is implemented through multiple layers.

```text
User Input

↓

Validation

↓

Authorization

↓

Business Logic

↓

Database
```

Important security principles:

- Never trust client input.
- Validate all external data.
- Enforce permissions server-side.
- Keep modules responsible for their own data.
- Sanitize user-generated content.

---

# Module Communication

Modules communicate through defined interfaces.

Example:

```text
Courses Module

        |

        v

Progress Service

        |

        v

Progress Module
```

Modules should not directly access another module's internal database logic.

This maintains:

- Security boundaries.
- Maintainability.
- Clear ownership.

---

# Deployment Model

Initial deployment:

```text
Docker Compose

├── Frontend Container

├── Backend Container

├── PostgreSQL Container

└── Redis Container
```

The goal is a simple and reproducible deployment process.

Future infrastructure improvements should only be introduced when required.

---

# Development Environment

Developers should be able to run AxiomForge locally with minimal setup.

Expected workflow:

```text
Clone Repository

↓

Configure Environment

↓

Start Docker Services

↓

Install Dependencies

↓

Run Development Servers

↓

Begin Development
```

Detailed instructions are available in:

```text
docs/development/getting-started.md
```

---

# Future Expansion Areas

The architecture allows future additions without redesigning the entire platform.

Possible future systems:

## Lab Infrastructure

Potential additions:

- Isolated environments.
- Containerized challenges.
- Automated provisioning.

---

## Community System

Potential additions:

- Discussions.
- Comments.
- User contributions.

---

## Advanced Learning Features

Potential additions:

- Personalized recommendations.
- AI-assisted learning.
- Skill analysis.

---

# Architectural Goals

The system is designed to achieve:

## Maintainability

Clear boundaries and documented decisions.

## Security

Security-focused development practices.

## Scalability

Ability to expand features without rewriting the foundation.

## Learning Value

The project itself demonstrates professional engineering practices.

---

# Summary

AxiomForge is a TypeScript-based modular monolith consisting of:

- A Next.js frontend.
- A NestJS backend.
- PostgreSQL data storage.
- Redis session management.

The architecture prioritizes clear boundaries, security, maintainability, and controlled growth.
