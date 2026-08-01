# AxiomForge Domain Model

## Core Entities

### User

Represents a person using the platform.

Users can:

* Follow learning paths
* Complete lessons
* Attempt labs
* Take assessments
* Track progress

---

### Learning Path

A structured progression designed around a specific goal.

Examples:

* Cybersecurity Fundamentals
* Web Security
* Python Programming

A user can have multiple active learning paths.

---

### Course

A collection of related lessons that teaches a specific topic.

Example:

```
Learning Path:
Cybersecurity Fundamentals

Course:
Networking Basics
```

---

### Lesson

A unit of educational content.

Lessons may include:

* Explanations
* Examples
* Exercises
* Optional assessments

Lessons should be reusable across different paths.

---

### Lab

A practical environment where users apply knowledge.

Labs are independent learning objects because:

* Multiple paths may use the same lab
* Users may repeat labs for practice
* Labs represent practical skill validation

---

### Assessment

A method of evaluating understanding.

Assessments are independent from lessons.

They can be used for:

* Checking knowledge before skipping content
* Validating readiness for advanced paths
* Measuring progress

Assessment types may include:

* Knowledge tests
* Practical challenges
* Future project evaluations

---

### Progress

Tracks user development.

Examples:

* Completed lessons
* Lab attempts
* Assessment scores
* Skill progression

---

### Content Management

Controls creation and publication of educational content.

Workflow:

```
Draft
 ↓
Review
 ↓
Approval
 ↓
Published
```

Content review depends on risk level.

High-risk content such as security labs requires stronger review.

---

# Entity Relationships

```
User

 |
 |
Learning Path

 |
 |
Course

 |
 |
Lesson

 |          \
 |           \
Lab       Assessment

 |
 |
Progress
```

