# AxiomForge Project Structure

## Purpose

This document explains the organization of the AxiomForge repository.

The structure is designed to support:

* Clear ownership of code.
* Easier navigation.
* Future contributors.
* Long-term maintainability.

---

# Repository Overview

The high-level structure:

```text id="x8r9dc"
axiomforge/

├── apps/

├── packages/

├── docs/

├── infrastructure/

├── scripts/

├── .github/

├── README.md

├── CONTRIBUTING.md

├── SECURITY.md

└── LICENSE
```

---

# apps/

## Purpose

Contains deployable applications.

AxiomForge uses an application-based structure.

Example:

```text id="9l7l7v"
apps/

├── frontend/

└── backend/
```

---

# apps/frontend/

## Purpose

Contains the Next.js frontend application.

Responsibilities:

* User interface.
* Client-side logic.
* API communication.
* UI components.

Example:

```text id="h0z4n4"
frontend/

├── app/

├── components/

├── hooks/

├── lib/

└── styles/
```

---

# apps/backend/

## Purpose

Contains the NestJS backend application.

Responsibilities:

* API endpoints.
* Business logic.
* Authentication.
* Database interaction.

Example:

```text id="0h3x3g"
backend/

├── src/

│   ├── auth/

│   ├── users/

│   ├── learning/

│   ├── labs/

│   ├── progress/

│   └── reviews/

└── test/
```

---

# packages/

## Purpose

Contains reusable code shared between applications.

Examples:

```text id="s3n0qj"
packages/

├── shared-types/

├── validation/

└── configuration/
```

---

## Shared Types

Contains common TypeScript definitions.

Example:

```typescript id="2q4k0b"
UserRole

CourseStatus

ApiResponse
```

---

## Validation

Contains reusable validation logic.

Example:

```text id="h8g0iu"
Email validation

Schema definitions

Common rules
```

---

# docs/

## Purpose

Contains project documentation.

Structure:

```text id="9w5v8a"
docs/

├── architecture/

├── decisions/

├── development/

├── api/

├── releases/

├── reference/

└── assets/
```

---

# infrastructure/

## Purpose

Contains deployment and infrastructure configuration.

Example:

```text id="2qk8a9"
infrastructure/

├── docker/

├── database/

└── deployment/
```

---

# scripts/

## Purpose

Contains developer utilities.

Examples:

```text id="t4g0t1"
scripts/

├── setup.sh

├── database-reset.sh

└── maintenance.sh
```

---

# .github/

## Purpose

Contains GitHub-specific configuration.

Example:

```text id="x8n4y7"
.github/

├── workflows/

├── ISSUE_TEMPLATE/

└── PULL_REQUEST_TEMPLATE.md
```

---

# Backend Module Structure

Backend modules should follow domain organization.

Example:

```text id="u7q4e9"
learning/

├── learning.module.ts

├── learning.controller.ts

├── learning.service.ts

├── entities/

├── dto/

└── repositories/
```

---

# Frontend Component Structure

Frontend should be organized by purpose.

Example:

```text id="s4w2x5"
components/

├── ui/

├── courses/

├── dashboard/

└── forms/
```

---

# Where Things Belong

## New Backend Feature

Example:

"Add course reviews"

Location:

```text id="p0z9wv"
apps/backend/src/reviews/
```

---

## New UI Component

Example:

"Course card"

Location:

```text id="px6v8r"
apps/frontend/components/courses/
```

---

## New Documentation

Location:

```text id="fz7d3s"
docs/
```

---

## New Shared Utility

Location:

```text id="8h4v1n"
packages/
```

---

# Organization Rules

## Keep Related Things Together

Avoid:

```text id="s1d7q8"
controllers/

services/

entities/
```

globally separated.

Prefer:

```text id="b6w0m8"
auth/

├── controller

├── service

└── entities
```

---

## Avoid Random Utility Folders

Avoid creating:

```text id="k9w3m4"
misc/

helpers/

stuff/
```

without a clear purpose.

---

## Prefer Domain Ownership

Code should live near the domain that owns it.

---

# Future Expansion

Possible future additions:

```text id="q8s3x1"
apps/

├── lab-runner/

├── worker/

└── admin-dashboard/
```

Only add applications when they represent a real deployment boundary.

---

# Summary

AxiomForge uses a structured repository layout:

```text id="7r6n5a"
Applications

+

Reusable Packages

+

Documentation

+

Infrastructure
```

The structure is designed to remain understandable from the first commit through future growth.

