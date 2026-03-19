# Course_Conventions.md

Назначение: краткие правила курса для создания и обновления артефактов в `/Idea`.

## 1. Главный принцип

Сначала analysis, потом design.

- Analysis отвечает на вопрос: **что система должна делать**.
- Design отвечает на вопрос: **как система будет это делать**.

Не переходить к UI, architecture и technology choices, пока не зафиксированы базовые requirements.

---

## 2. Порядок работы по курсу

Работать в таком порядке:

1. Vision / Problem / Goals / Scope
2. Stakeholders and actors
3. Functional and non-functional requirements
4. User stories + acceptance criteria
5. Use case identification
6. Use case briefs
7. UML use case diagrams
8. Detailed use case specs for key use cases
9. Activity diagrams and SSD for key use cases
10. Data/domain model
11. High-level architecture, UI, technology choices

Не перепрыгивать через шаги без причины.

---

## 3. User stories

User story писать в формате:

As a `<user/role>` I want to `<task>` so that `<benefit>`.

Правила:
- story должна быть простой, точной и краткой;
- story должна описывать пользовательскую ценность;
- story должна иметь адекватную гранулярность;
- epics использовать для крупных блоков;
- normal stories использовать для конкретной функциональности.

Каждая story должна иметь acceptance criteria.

---

## 4. Acceptance criteria

Acceptance criteria:
- описывают, когда story считается выполненной;
- должны быть проверяемыми;
- могут использоваться как основа для тестов.

Не писать расплывчатые критерии вроде:
- "система должна быть удобной";
- "должно работать хорошо".

Писать так, чтобы можно было проверить результат.

---

## 5. Functional requirements

Functional requirements фиксируют, какие функции должна поддерживать система.

Основные формы представления:
- user stories;
- use cases;
- textual descriptions;
- UML models where needed.

Use cases именовать в формате **Verb-Noun**:
- `Create Sketch`
- `Extrude Profile`
- `Insert Template`

Не использовать расплывчатые названия.

---

## 6. Use case identification

Использовать две техники:

### User Goal Technique
Шаги:
1. Identify users/roles.
2. Classify by functional role and organizational level.
3. Identify user goals/tasks.
4. Build preliminary use case list.
5. Remove duplicates and resolve inconsistencies.
6. Review and refine.

### Event Decomposition
Проверять use cases по типам событий:
- external events;
- temporal events;
- state events.

Правило:
- use case должен отражать реакцию системы на значимое событие.

Игнорировать на этом этапе:
- login/logout;
- password change;
- backup/restore;
- technical error handling;
- ограничения "неидеальной" технологии.

Использовать perfect technology assumption на этапе анализа.

---

## 7. Use case level

Use case должен быть на уровне **elementary business process**.

То есть:
- это осмысленный законченный процесс;
- выполняется в ответ на событие;
- не слишком крупный и не слишком мелкий.

Плохие use cases:
- слишком общие;
- слишком технические;
- слишком мелкие шаги интерфейса.

---

## 8. Use case documentation depth

Для всех use cases сначала достаточно:
- actor;
- use case name;
- brief description.

Brief use case:
- 1–2 sentences;
- кто что делает;
- как система отвечает.

Fully dressed use case делать:
- только для ключевых и более сложных use cases;
- один detailed table на один use case.

---

## 9. Detailed use case content

Для fully dressed use case использовать минимум такие поля:
- Use case name
- Scenario
- Triggering event
- Brief description
- Actors
- Related use cases
- Stakeholders
- Preconditions
- Postconditions
- Flow of activities (Actor | System)
- Exception conditions

Не расписывать fully dressed для каждого use case без необходимости.

---

## 10. UML models

### Use Case Diagram
Использовать для обзора use cases и actors.

Правила:
- actors outside system boundary;
- use cases inside system boundary;
- use case names in Verb-Noun form;
- draw by actor and/or by subsystem;
- use `<<include>>` only when justified.

### Activity Diagram
Использовать для key/complex use cases:
- one per UC if needed;
- show activity flow;
- use swimlanes Actor | System;
- use decisions and loops only where they add clarity.

### SSD
Использовать для key use cases:
- one SSD per UC;
- show actor and one system object;
- show input/output messages;
- message names in Verb-Noun form;
- include parameters, return values, loop/opt/alt only when needed.

Не делать диаграммы ради формальности.

---

## 11. Non-functional requirements

NFR должны быть:
- measurable;
- testable where possible;
- stated as system characteristics or constraints.

Плохой NFR:
- "system should be fast"

Хороший NFR:
- "system shall update linked projections within X ms for a model of size Y"

---

## 12. Models in general

Модели нужны чтобы:
- упростить сложность;
- зафиксировать детали;
- улучшить коммуникацию;
- документировать решения.

Не все модели обязательны всегда.
Для меньших и более понятных проектов достаточно меньшего числа моделей.

Предпочтение:
- сначала минимально достаточная модель;
- потом уточнение итерациями.

---

## 13. Что делать на текущем этапе курса

На текущем этапе приоритетны:
1. Vision / Problem / Goals / Scope
2. User stories + acceptance criteria
3. Use case identification
4. Use case briefs
5. UML use case diagram
6. For selected key use cases:
   - fully dressed description
   - activity diagram
   - SSD
7. Domain/data model
8. Then architecture and UI

---

## 14. Practical rule

Перед добавлением новой функции в `/Project` проверить, есть ли в `/Idea`:

- user story
- acceptance criteria
- use case or brief
- requirement trace to product goal

Если этого нет, сначала доработать analysis artifacts.

---

## 15. Default quality bar

Каждый артефакт должен быть:
- concise;
- unambiguous;
- consistent with neighboring artifacts;
- easy to review;
- useful for next project step.
