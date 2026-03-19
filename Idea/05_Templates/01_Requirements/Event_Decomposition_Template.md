# Event Decomposition Template

Purpose: identify use cases through events that require a system response.

## Event Table

| Event type | Event / Trigger | Source / Actor / Time / State condition | System response | Candidate use case (Verb-Noun) | Notes |
|---|---|---|---|---|---|
| External |  |  |  |  |  |
| Temporal |  |  |  |  |  |
| State |  |  |  |  |  |

## Event types
- **External:** initiated outside the system, usually by an actor or another system.
- **Temporal:** initiated at a point in time or by schedule.
- **State:** initiated by an internal state change or threshold.

## Exclusions during initial identification
Ignore events related to:
- errors
- login / logout
- password change
- backup / restore
- other system-control concerns

(Perfect Technology assumption.)

## Review pass
- [ ] External events covered
- [ ] Temporal events covered
- [ ] State events covered
- [ ] Each response has a named use case
- [ ] Use case level is not too large and not too small
