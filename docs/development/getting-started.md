# AxiomForge Development Getting Started Guide

## Purpose

This guide explains how to set up a local AxiomForge development environment.

The goal is to make development reproducible and consistent across different machines.

---

# Prerequisites

Before starting, install the following tools.

## Required

### Git

Used for:

* Repository management.
* Version control.
* Collaboration.

---

### Node.js

Used for:

* Backend development.
* Frontend development.
* Package management.

The project uses the current supported LTS version of Node.js.

---

### Package Manager

The project requires a Node.js package manager.

Supported options:

* npm
* pnpm

The recommended package manager will be documented in the project root.

---

### Docker

Used for:

* Local services.
* Database containers.
* Development consistency.

---

### Docker Compose

Used to run required infrastructure services.

Expected services:

```text id="g5y08c"
Frontend

Backend

PostgreSQL

Redis
```

---

# Repository Setup

Clone the repository:

```bash
git clone <repository-url>

cd axiomforge
```

---

# Install Dependencies

Install backend dependencies:

```bash
cd backend

npm install
```

Install frontend dependencies:

```bash
cd ../frontend

npm install
```

---

# Environment Configuration

AxiomForge uses environment variables for configuration.

Environment files should never contain production secrets.

Example:

```text id="j9t3bp"
.env.example

↓

.env
```

---

# Backend Environment

Example:

```env id="1kjjwi"
DATABASE_HOST=localhost
DATABASE_PORT=5432

REDIS_HOST=localhost
REDIS_PORT=6379

SESSION_SECRET=change_me
```

The complete environment reference will be maintained in:

```text id="1xqv2q"
docs/development/environment.md
```

---

# Start Infrastructure

Start required services:

```bash
docker compose up -d
```

This starts:

```text id="m4r6pt"
PostgreSQL

Redis
```

---

# Database Setup

Run migrations:

```bash
npm run migration:run
```

Create initial development data if available:

```bash
npm run seed
```

---

# Running the Backend

Navigate to:

```bash
cd backend
```

Development mode:

```bash
npm run start:dev
```

Expected result:

```text id="9g4j7a"
NestJS application running
```

---

# Running the Frontend

Navigate to:

```bash
cd frontend
```

Development mode:

```bash
npm run dev
```

Expected result:

```text id="2k9q9a"
Next.js development server running
```

---

# Development Workflow

A typical workflow:

```text id="3z7m6d"
Create Branch

↓

Implement Feature

↓

Run Tests

↓

Run Linting

↓

Create Pull Request

↓

Review

↓

Merge
```

---

# Before Opening a Pull Request

Verify:

## Code Quality

```text id="3gh6l9"
Lint passes

Type checking passes

Build succeeds
```

---

## Testing

Run:

```bash
npm test
```

Ensure:

* Existing tests pass.
* New functionality has appropriate tests.

---

## Documentation

Check whether the change requires updates to:

* README.
* ADRs.
* API documentation.
* Environment documentation.
* Release notes.

---

# Common Development Commands

These commands may vary as the project evolves.

## Backend

```bash
npm run start:dev

npm run test

npm run lint
```

---

## Frontend

```bash
npm run dev

npm run build

npm run lint
```

---

## Docker

Start services:

```bash
docker compose up -d
```

Stop services:

```bash
docker compose down
```

View logs:

```bash
docker compose logs
```

---

# Troubleshooting

## Database Connection Issues

Check:

* Docker containers are running.
* Environment variables are correct.
* PostgreSQL port is available.

---

## Redis Connection Issues

Check:

* Redis container is running.
* Host and port configuration.

---

## Dependency Issues

Try:

```bash
npm install
```

If problems continue:

* Remove `node_modules`.
* Remove lock files only when necessary.
* Reinstall dependencies.

---

# Development Philosophy

Contributors should prioritize:

* Understanding existing architecture.
* Following established conventions.
* Writing maintainable code.
* Documenting important changes.

The goal is not only to make features work, but to maintain a healthy project over time.
# AxiomForge Development Getting Started Guide

## Purpose

This guide explains how to set up a local AxiomForge development environment.

The goal is to make development reproducible and consistent across different machines.

---

# Prerequisites

Before starting, install the following tools.

## Required

### Git

Used for:

* Repository management.
* Version control.
* Collaboration.

---

### Node.js

Used for:

* Backend development.
* Frontend development.
* Package management.

The project uses the current supported LTS version of Node.js.

---

### Package Manager

The project requires a Node.js package manager.

Supported options:

* npm
* pnpm

The recommended package manager will be documented in the project root.

---

### Docker

Used for:

* Local services.
* Database containers.
* Development consistency.

---

### Docker Compose

Used to run required infrastructure services.

Expected services:

```text id="g5y08c"
Frontend

Backend

PostgreSQL

Redis
```

---

# Repository Setup

Clone the repository:

```bash
git clone <repository-url>

cd axiomforge
```

---

# Install Dependencies

Install backend dependencies:

```bash
cd backend

npm install
```

Install frontend dependencies:

```bash
cd ../frontend

npm install
```

---

# Environment Configuration

AxiomForge uses environment variables for configuration.

Environment files should never contain production secrets.

Example:

```text id="j9t3bp"
.env.example

↓

.env
```

---

# Backend Environment

Example:

```env id="1kjjwi"
DATABASE_HOST=localhost
DATABASE_PORT=5432

REDIS_HOST=localhost
REDIS_PORT=6379

SESSION_SECRET=change_me
```

The complete environment reference will be maintained in:

```text id="1xqv2q"
docs/development/environment.md
```

---

# Start Infrastructure

Start required services:

```bash
docker compose up -d
```

This starts:

```text id="m4r6pt"
PostgreSQL

Redis
```

---

# Database Setup

Run migrations:

```bash
npm run migration:run
```

Create initial development data if available:

```bash
npm run seed
```

---

# Running the Backend

Navigate to:

```bash
cd backend
```

Development mode:

```bash
npm run start:dev
```

Expected result:

```text id="9g4j7a"
NestJS application running
```

---

# Running the Frontend

Navigate to:

```bash
cd frontend
```

Development mode:

```bash
npm run dev
```

Expected result:

```text id="2k9q9a"
Next.js development server running
```

---

# Development Workflow

A typical workflow:

```text id="3z7m6d"
Create Branch

↓

Implement Feature

↓

Run Tests

↓

Run Linting

↓

Create Pull Request

↓

Review

↓

Merge
```

---

# Before Opening a Pull Request

Verify:

## Code Quality

```text id="3gh6l9"
Lint passes

Type checking passes

Build succeeds
```

---

## Testing

Run:

```bash
npm test
```

Ensure:

* Existing tests pass.
* New functionality has appropriate tests.

---

## Documentation

Check whether the change requires updates to:

* README.
* ADRs.
* API documentation.
* Environment documentation.
* Release notes.

---

# Common Development Commands

These commands may vary as the project evolves.

## Backend

```bash
npm run start:dev

npm run test

npm run lint
```

---

## Frontend

```bash
npm run dev

npm run build

npm run lint
```

---

## Docker

Start services:

```bash
docker compose up -d
```

Stop services:

```bash
docker compose down
```

View logs:

```bash
docker compose logs
```

---

# Troubleshooting

## Database Connection Issues

Check:

* Docker containers are running.
* Environment variables are correct.
* PostgreSQL port is available.

---

## Redis Connection Issues

Check:

* Redis container is running.
* Host and port configuration.

---

## Dependency Issues

Try:

```bash
npm install
```

If problems continue:

* Remove `node_modules`.
* Remove lock files only when necessary.
* Reinstall dependencies.

---

# Development Philosophy

Contributors should prioritize:

* Understanding existing architecture.
* Following established conventions.
* Writing maintainable code.
* Documenting important changes.

The goal is not only to make features work, but to maintain a healthy project over time.

