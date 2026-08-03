# AxiomForge Database Conventions

## Purpose

This document defines database design conventions used by AxiomForge.

The goal is to maintain:

* Consistent schemas.
* Clear relationships.
* Reliable migrations.
* Easier maintenance.

AxiomForge uses PostgreSQL with TypeORM.

---

# Database Philosophy

AxiomForge follows a balanced relational database approach.

The database should:

* Represent business relationships clearly.
* Protect data integrity.
* Avoid unnecessary complexity.
* Support future growth.

---

# Naming Conventions

## Tables

Tables use plural snake_case.

Examples:

```text id="m5x7o1"
users

courses

learning_paths

lesson_progress
```

---

## Columns

Columns use snake_case.

Examples:

```sql id="u3y4g8"
created_at

updated_at

user_id

course_id
```

---

## Primary Keys

All tables should use an `id` primary key.

Example:

```sql id="7k2f3q"
id UUID PRIMARY KEY
```

UUIDs are preferred because they:

* Avoid predictable identifiers.
* Work better with distributed systems in the future.

---

# Standard Columns

Most entities should include:

```sql id="p6v9s0"
id

created_at

updated_at
```

Example:

```sql id="q8n4c2"
CREATE TABLE courses (
    id UUID PRIMARY KEY,
    title TEXT NOT NULL,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);
```

---

# Entity Naming

TypeORM entities use PascalCase singular names.

Example:

Database:

```text id="0y7v1m"
courses
```

Entity:

```typescript id="8f4s2q"
Course
```

---

# Entity Structure

Example:

```typescript id="3k6h9a"
@Entity()
export class Course {

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

}
```

---

# Relationships

Relationships should represent actual business rules.

Supported relationships:

* One-to-one.
* One-to-many.
* Many-to-many.

---

# One-to-Many Example

A course contains multiple lessons.

```text id="y9m4k2"
Course

1

|

|

Many

Lessons
```

---

# Many-to-Many Example

Users can have multiple roles.

```text id="u1w5s8"
Users

Many

|

|

Many

Roles
```

Use join tables.

Example:

```text id="r7p3d9"
user_roles
```

---

# Foreign Keys

Foreign keys should always be explicit.

Example:

```sql id="8z4q1n"
course_id UUID REFERENCES courses(id)
```

This protects data integrity.

---

# Soft Deletes

Soft deletes should only be used when necessary.

Example:

```sql id="5m8x2k"
deleted_at TIMESTAMP NULL
```

Use cases:

* Content history.
* Important user data.
* Administrative recovery.

Do not use soft deletes everywhere.

---

# Timestamps

All major entities should track:

```text id="x0q7k9"
created_at

updated_at
```

Benefits:

* Auditing.
* Debugging.
* History tracking.

---

# Status Fields

Use explicit values.

Example:

```typescript id="g6m2s1"
enum ReviewStatus {
  DRAFT,
  PENDING,
  APPROVED,
  REJECTED
}
```

Avoid:

```text id="n4x9c7"
status = 1
status = 2
```

---

# Migrations

All schema changes must use migrations.

Never manually modify production databases.

Workflow:

```text id="a7f4v3"
Modify Entity

↓

Generate Migration

↓

Review Migration

↓

Run Migration
```

---

# Migration Rules

Migrations should:

* Be small.
* Have descriptive names.
* Be reversible when possible.

Example:

```text id="f9q2m6"
add-course-description-column
```

---

# Data Ownership

Each module owns its data.

Example:

Learning module owns:

```text id="z8k3p1"
courses

lessons

learning_paths
```

Progress module owns:

```text id="m2v6x9"
course_progress

lesson_progress
```

Modules should not directly modify another module's tables.

---

# Indexing

Indexes should be added based on real usage.

Good candidates:

* Foreign keys.
* Frequently searched columns.
* Unique identifiers.

Avoid adding indexes everywhere.

---

# Security Considerations

Database design should consider:

* Access control.
* Data ownership.
* Sensitive information.
* Input validation.

Never store:

* Plain text passwords.
* Unnecessary personal information.
* Secrets.

---

# Example Domain Structure

Learning domain:

```text id="w4n7p2"
learning_paths

courses

lessons

lesson_resources
```

Progress domain:

```text id="q1m8r6"
course_progress

lesson_progress

lab_progress
```

Authentication domain:

```text id="v6s3k0"
users

sessions

roles

permissions
```

---

# Summary

AxiomForge database design follows:

* PostgreSQL relational principles.
* TypeORM entities.
* Clear module ownership.
* Explicit relationships.
* Migration-based changes.

The database should remain understandable and reliable as the platform grows.

