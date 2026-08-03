# AxiomForge Module Overview

## Purpose

This document describes the main business modules that make up the AxiomForge backend.

AxiomForge follows a modular monolith architecture where each module represents a specific business domain.

Each module:

* Owns its business logic.
* Controls its own data.
* Exposes controlled interfaces to other modules.
* Avoids direct access to another module's internal implementation.

---

# Module Structure

The backend is organized around these domains:

```text id="8x8qka"
src/

├── auth/

├── users/

├── learning/

├── labs/

├── assessments/

├── progress/

├── reviews/

└── admin/
```

---

# Auth Module

## Purpose

Handles user authentication and session management.

## Responsibilities

* User login.
* User logout.
* Session creation.
* Session invalidation.
* Password management.
* Authentication guards.

## Owns

```text id="rv7x9k"
Sessions

Authentication state

Credentials
```

## Does Not Own

* User profiles.
* Roles and permissions.
* Learning data.

Those belong to other modules.

---

# Users Module

## Purpose

Manages user identity and access control.

## Responsibilities

* User profiles.
* Roles.
* Permissions.
* Account information.

## Owns

```text id="8ozj90"
User

Role

Permission
```

## Relationships

```text id="h0p7s5"
User

many-to-many

Role

many-to-many

Permission
```

---

# Learning Module

## Purpose

Manages the educational structure of AxiomForge.

This is the core learning ecosystem.

## Responsibilities

* Learning paths.
* Courses.
* Lessons.
* Content organization.

## Owns

```text id="m2sm9q"
LearningPath

Course

Lesson
```

## Relationships

```text id="p2w5rm"
LearningPath

        |

        |

     Courses

        |

        |

     Lessons
```

---

## Important Design Rule

Courses and lessons are reusable.

A course is not permanently attached to one learning path.

Example:

```text id="c5u1nq"
Linux Fundamentals

used by:

Cybersecurity Path

Programming Path

Homelab Path
```

---

# Labs Module

## Purpose

Provides practical learning experiences.

## Responsibilities

* Lab creation.
* Lab organization.
* Lab attempts.
* Future isolated environments.

## Owns

```text id="7cq0bi"
Lab

LabAttempt
```

## Relationships

```text id="m0n4wq"
Lesson

        |

        |

       Lab
```

---

# Assessments Module

## Purpose

Handles knowledge evaluation and readiness checks.

Assessments are used for:

* Lesson completion.
* Course completion.
* Path readiness.
* Skipping content already mastered.

## Responsibilities

* Creating assessments.
* Managing questions.
* Evaluating attempts.
* Calculating scores.

## Owns

```text id="w8uf5c"
Assessment

Question

Answer

AssessmentAttempt
```

---

# Progress Module

## Purpose

Tracks user advancement through the platform.

## Responsibilities

* Course progress.
* Lesson completion.
* Lab progress.
* Assessment history.

## Owns

```text id="o8o7bz"
CourseProgress

LessonProgress

LabAttemptHistory

AssessmentAttemptHistory
```

---

## Important Design Rule

Progress is separated by resource type.

A lesson, lab, and assessment have different behaviors and therefore require different tracking.

---

# Reviews Module

## Purpose

Controls content quality through review workflows.

This module enables community contributions while maintaining developer-controlled publishing.

## Responsibilities

* Submission workflow.
* Review assignments.
* Approval process.
* Feedback.

## Owns

```text id="l8q3gu"
ReviewRequest

ReviewStatus

ReviewComment
```

---

## Workflow

```text id="m8j3e5"
Draft

↓

Submitted

↓

Under Review

↓

Approved / Rejected

↓

Published
```

---

# Admin Module

## Purpose

Provides administrative capabilities.

## Responsibilities

* User management.
* Platform configuration.
* Moderation tools.
* Administrative actions.

## Owns

Future administrative functionality.

---

# Module Communication

Modules communicate through public interfaces.

Example:

A course completion event:

```text id="n3v1qf"
Learning Module

↓

Progress Module

↓

Updates User Progress
```

The Learning module does not directly modify progress data.

---

# Module Boundaries

## Allowed

A module can:

* Use another module's public services.
* Request information through defined interfaces.
* Emit events in future versions.

---

## Not Allowed

A module cannot:

* Modify another module's database tables directly.
* Access private implementation details.
* Bypass another module's business rules.

---

# Future Modules

The architecture allows future additions.

Possible modules:

## Community

Could handle:

* Discussions.
* Comments.
* User interactions.

---

## Notifications

Could handle:

* Emails.
* Alerts.
* Platform messages.

---

## Recommendations

Could handle:

* Learning suggestions.
* Personalized paths.

---

# Summary

AxiomForge is divided into focused business modules:

| Module      | Responsibility               |
| ----------- | ---------------------------- |
| Auth        | Authentication and sessions  |
| Users       | Profiles, roles, permissions |
| Learning    | Paths, courses, lessons      |
| Labs        | Practical challenges         |
| Assessments | Knowledge validation         |
| Progress    | Learning advancement         |
| Reviews     | Content quality control      |
| Admin       | Platform management          |

This structure keeps AxiomForge maintainable, secure, and ready for future growth.

