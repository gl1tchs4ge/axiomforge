# AxiomForge Security Policy

## Purpose

This document describes how security vulnerabilities in AxiomForge should be reported and handled.

AxiomForge takes security seriously because the platform is designed around technical learning, including cybersecurity and secure software development.

---

# Reporting Security Issues

If you discover a potential security vulnerability, please report it privately.

Do not publicly disclose the vulnerability before it has been reviewed and addressed.

Private disclosure allows the project to:

* Investigate the issue.
* Protect users.
* Develop a fix.
* Release updates responsibly.

---

# What Should Be Reported

Examples of security issues include:

## Authentication Problems

Examples:

* Account takeover vulnerabilities.
* Session management issues.
* Password security problems.

---

## Authorization Problems

Examples:

* Accessing resources without permission.
* Privilege escalation.
* Role bypasses.

---

## Data Exposure

Examples:

* Sensitive information leaks.
* Unauthorized access to user data.
* Incorrect API responses exposing private information.

---

## Application Vulnerabilities

Examples:

* Injection vulnerabilities.
* Cross-site scripting.
* Unsafe file handling.
* Security configuration issues.

---

## Infrastructure Issues

Examples:

* Unsafe deployment configuration.
* Exposed services.
* Insecure defaults.

---

# What Is Not a Security Vulnerability

The following are generally not security issues:

* Normal bugs without security impact.
* Feature requests.
* Performance improvements.
* Documentation errors.

These should be reported through normal issue channels.

---

# Security Report Information

A useful report should include:

## Description

Explain:

* What the vulnerability is.
* Why it is a security concern.

---

## Reproduction Steps

Include:

* Required conditions.
* Steps to reproduce.
* Example requests or demonstrations.

Only include proof necessary to demonstrate the issue.

---

## Impact

Explain:

* What could happen if exploited.
* Which users or systems are affected.

---

## Suggested Fix

If possible, include ideas for mitigation.

---

# Security Review Process

After receiving a report:

1. The issue will be reviewed.
2. The vulnerability will be investigated.
3. The impact will be evaluated.
4. A fix will be developed.
5. The change will be tested.
6. A release may be published.

---

# Responsible Disclosure

Security researchers and contributors are expected to:

* Avoid accessing unnecessary data.
* Avoid disrupting services.
* Avoid testing against systems they do not own.
* Keep vulnerability details private until resolution.

---

# Development Security Practices

AxiomForge follows security practices including:

* Input validation.
* Session security.
* Authorization checks.
* Secure dependency management.
* Code review.
* Automated security checks.

More details:

```text id="r8q3y6"
docs/reference/security-model.md
```

---

# Supported Versions

Security fixes are prioritized for:

```text id="n6t4x2"
Current stable release
```

Older versions may not receive security updates.

---

# Security Improvements

Future improvements may include:

* Automated vulnerability scanning.
* Security testing pipelines.
* Audit logging.
* Advanced monitoring.

---

# Thank You

Responsible security research helps make AxiomForge safer.

Thank you to everyone who reports issues responsibly and helps improve the project.

