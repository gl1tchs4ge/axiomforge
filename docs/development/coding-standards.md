# AxiomForge Coding Standards

## Purpose

This document defines the practical coding standards used when developing AxiomForge.

These standards exist to maintain:

- Readable code.
- Consistent structure.
- Easier reviews.
- Better contributor onboarding.
- Long-term maintainability.

For the reasoning behind these standards, see:

```text
docs/decisions/ADR-019-coding-standards-and-development-conventions.md
```

---

# General Principles

Developers should prioritize:

- Clear solutions over clever solutions.
- Maintainability over short-term speed.
- Explicit behavior over hidden behavior.
- Simplicity over unnecessary abstraction.

Code should be understandable by another developer who has never seen the implementation before.

---

# TypeScript Standards

## Type Safety

Avoid using `any` unless there is a strong reason.

Avoid:

```typescript
const user: any = getUser();
```

Prefer:

```typescript
const user: User = getUser();
```

Types should communicate intent.

---

## Interfaces and Types

Use interfaces for defining contracts.

Example:

```typescript
interface UserRepository {
  findById(id: string): Promise<User | null>;
}
```

Use types when creating compositions or unions.

Example:

```typescript
type UserRole = 'student' | 'reviewer' | 'admin';
```

---

# Naming Rules

## Classes

Use PascalCase.

Examples:

```typescript
UserService;

CourseController;

ProgressRepository;
```

---

## Functions

Use camelCase.

Examples:

```typescript
createUser();

findCourseById();

completeLesson();
```

---

## Variables

Names should describe their purpose.

Avoid:

```typescript
const x = getData();
```

Prefer:

```typescript
const courseProgress = getCourseProgress();
```

---

# NestJS Structure

Each feature should follow NestJS module conventions.

Example:

```text
courses/

├── courses.module.ts

├── courses.controller.ts

├── courses.service.ts

├── courses.entity.ts

└── dto/
```

---

# Controllers

Controllers handle:

- HTTP requests.
- Input validation.
- Calling services.

Controllers should not contain business logic.

Avoid:

```typescript
@Post()
createCourse() {
  // Database logic here
}
```

Prefer:

```typescript
@Post()
createCourse() {
  return this.courseService.createCourse();
}
```

---

# Services

Services contain business logic.

Example responsibilities:

- Processing rules.
- Coordinating operations.
- Managing domain behavior.

---

# Database Access

Database logic should not exist directly inside controllers.

Use:

```text
Controller

↓

Service

↓

Repository

↓

Database
```

This keeps responsibilities separated.

---

# DTO Usage

External input should always use DTOs.

Avoid:

```typescript
createUser(user: User)
```

Prefer:

```typescript
createUser(dto: CreateUserDto)
```

Benefits:

- Validation.
- Clear contracts.
- Security boundaries.

---

# Validation

All external input should be validated.

Examples:

- API requests.
- User content.
- Configuration values.

Never assume client data is trustworthy.

---

# Error Handling

Do not silently ignore errors.

Avoid:

```typescript
try {
} catch {}
```

Prefer:

```typescript
catch(error) {
  this.logger.error(error);
  throw error;
}
```

Errors should provide useful information without exposing sensitive data.

---

# Logging

Use the project logging system.

Prefer:

```typescript
this.logger.log('User created');
```

Avoid:

```typescript
console.log('User created');
```

---

# Comments

Comments should explain:

- Why something exists.
- Important assumptions.
- Non-obvious decisions.

Avoid comments that only describe the code.

Bad:

```typescript
// Add user
users.push(user);
```

Good:

```typescript
// Prevent duplicate enrollments by checking existing progress records.
```

---

# File Organization

Files should have one clear responsibility.

Avoid large files containing unrelated logic.

Prefer:

```text
auth/

├── auth.controller.ts

├── auth.service.ts

├── session.service.ts

└── guards/
```

---

# Import Organization

Imports should be grouped:

Example:

```typescript
// External packages

import { Injectable } from '@nestjs/common';

// Internal modules

import { UserService } from '../users/user.service';

// Local files

import { LoginDto } from './dto/login.dto';
```

---

# Frontend Standards

## Components

Components should:

- Have a clear purpose.
- Avoid unnecessary complexity.
- Reuse existing components.

---

## UI Components

Before creating a new component:

Check whether an existing component can be reused.

The project uses:

- Tailwind CSS.
- shadcn/ui.

---

# Git Standards

Follow Conventional Commits.

Examples:

```text
feat(auth): add session login

fix(progress): resolve completion bug

docs(api): update endpoint documentation

refactor(users): simplify permissions
```

---

# Pull Request Expectations

Pull requests should include:

## Description

Explain:

- What changed.
- Why it changed.
- Any important considerations.

---

## Testing

Include:

- Tests added.
- Tests updated.
- Verification steps.

---

## Documentation

Update documentation when necessary.

Examples:

- New architecture decisions.
- New environment variables.
- New API behavior.

---

# Security Rules

Developers should always consider:

- Input validation.
- Authentication.
- Authorization.
- Data ownership.
- Sensitive information exposure.

Security-related changes require extra review.

---

# Summary

AxiomForge code should be:

- Readable.
- Secure.
- Consistent.
- Documented.
- Easy to maintain.

The goal is not only producing working software, but building software that can continue improving over time.
