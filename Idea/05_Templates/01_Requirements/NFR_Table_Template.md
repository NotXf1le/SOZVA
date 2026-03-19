# NFR Table Template

Purpose: rewrite non-functional requirements so they are measurable and testable.

## NFR Rewrite Table

| # | Initial / weak NFR | Category | Measurable and testable NFR | Verification method |
|---|---|---|---|---|
| 1 | System must be fast | Performance | 95% of search requests shall complete within 2 seconds under 500 concurrent users. | Load test |
| 2 | Application must be secure | Security |  |  |
| 3 | System must work without interruption | Availability / Reliability |  |  |
| 4 | Interface must be user-friendly | Usability |  |  |
| 5 | Must work on all devices | Compatibility |  |  |

## Supported categories
Core course categories:
- Usability
- Reliability
- Performance
- Security
- Availability
- Scalability
- Compatibility

Extended book-based categories (use if relevant):
- Design constraint
- Implementation
- Interface
- Physical
- Supportability

## Rule
Never leave an NFR as a vague adjective such as:
- fast
- secure
- easy
- reliable
- scalable

Convert it into something that can be measured and tested.
