# AxiomForge Environment Configuration

## Purpose

This document explains how environment configuration is managed in AxiomForge.

Environment variables are used to separate:

- Application configuration.
- Development settings.
- Production secrets.
- Deployment-specific values.

Secrets should never be committed to the repository.

---

# Configuration Philosophy

AxiomForge follows these principles:

- Configuration belongs outside source code.
- Secrets must never be stored in Git.
- Development environments should be reproducible.
- Required variables should always be documented.

---

# Environment Files

The project uses environment files:

```text id="3g6a6d"
.env.example

.env
```

---

## .env.example

Purpose:

- Documents required variables.
- Provides a template for contributors.
- Contains no sensitive information.

This file should always be committed.

Example:

```env id="qz83yi"
DATABASE_HOST=
DATABASE_PORT=

REDIS_HOST=
REDIS_PORT=

SESSION_SECRET=
```

---

## .env

Purpose:

- Local development configuration.

This file should:

- Never be committed.
- Be listed in `.gitignore`.
- Contain developer-specific values.

---

# Backend Environment Variables

The backend requires configuration for:

- Database access.
- Authentication.
- Sessions.
- Application behavior.

Example:

```env id="m1q4f0"
NODE_ENV=development

PORT=3000

DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USERNAME=axiomforge
DATABASE_PASSWORD=password
DATABASE_NAME=axiomforge_dev

REDIS_HOST=localhost
REDIS_PORT=6379

SESSION_SECRET=replace_this_value
```

---

# Frontend Environment Variables

Frontend variables should only contain values safe to expose to the browser.

Example:

```env id="9hql7k"
NEXT_PUBLIC_API_URL=http://localhost:3000/api/v1
```

Sensitive information should never be placed in frontend environment variables.

---

# Database Configuration

Development uses PostgreSQL through Docker Compose.

Expected configuration:

```text id="k1l7uk"
Application

↓

TypeORM

↓

PostgreSQL Container
```

Database credentials should be different between:

- Development.
- Testing.
- Production.

---

# Redis Configuration

Redis is used for session management.

Development:

```text id="v3n5j5"
Application

↓

Redis Container

↓

Session Storage
```

Redis should not store permanent user data.

---

# Secret Management

Sensitive values include:

- Session secrets.
- Database passwords.
- API keys.
- Encryption keys.

These should be managed through:

Development:

```text id="w6y84a"
.env
```

Production:

```text id="f1f9re"
Secret management system
```

Possible future solutions:

- Cloud provider secret managers.
- Dedicated secret management tools.

---

# Local Development Setup

A contributor should:

## Step 1

Copy the example configuration:

```bash id="ppx8ag"
cp .env.example .env
```

---

## Step 2

Update values for the local environment.

---

## Step 3

Start required services:

```bash id="0clv1h"
docker compose up -d
```

---

## Step 4

Start application services.

---

# Development vs Production

## Development

Characteristics:

- Local containers.
- Debug logging.
- Local database.
- Test accounts.

---

## Production

Characteristics:

- Secure secrets.
- Restricted access.
- Production database.
- Monitoring enabled.
- Strong logging practices.

---

# Security Rules

Never:

- Commit `.env` files.
- Share production secrets.
- Hardcode credentials.
- Store passwords in source code.

Always:

- Use environment variables.
- Rotate secrets when needed.
- Document required configuration.

---

# Adding New Environment Variables

When adding a new variable:

1. Add it to `.env.example`.
2. Document it here.
3. Explain its purpose.
4. Ensure it does not expose secrets.

Example:

```text id="4g43fd"
DATABASE_URL

Purpose:
Connection string for database access.

Required:
Yes.

Sensitive:
Yes.
```

---

# Summary

AxiomForge uses environment-based configuration to keep the project secure, portable, and easy to set up.

The configuration system supports:

- Local development.
- Automated testing.
- Future production deployments.

Clear configuration management is part of maintaining a secure software system.
