# AGENT.md

Scope: весь каталог `/Idea` и все вложенные папки, если более глубокий `AGENT.md` не переопределяет часть правил.

## Цель

`/Idea` — source of truth для продуктовых решений по CAD-приложению.

Агент работает здесь с:
- vision;
- requirements;
- UX/UI;
- architecture;
- document templates.

Агент не использует `/Idea` для production code.

---

## Обязательный нормативный файл

Для любых изменений внутри `/Idea` агент обязан соблюдать правила из
`/Idea/00_Project_Foundation/Course_Conventions.md`.

Это означает:
- сначала сверяться с `Course_Conventions.md` перед созданием или обновлением артефактов;
- не перескакивать к UI, architecture и technology choices, пока не зафиксированы базовые analysis artifacts;
- соблюдать порядок работы курса: vision/problem/goals/scope -> stakeholders/actors -> requirements -> user stories + acceptance criteria -> use cases -> UML/models -> domain model -> architecture/UI;
- перед изменениями в `/Project` проверять, что в `/Idea` уже есть обязательные analysis artifacts, перечисленные в `Course_Conventions.md`;
- при конфликте локальных привычек агента с course conventions следовать `Course_Conventions.md`.

Если задача затрагивает user stories, acceptance criteria, use cases, UML-модели, NFR или порядок проработки артефактов, `Course_Conventions.md` считается обязательным источником правил.

---

## Структура

```text
/Idea
├── README.md
├── AGENT.md
├── 00_Project_Foundation
├── 01_Product_Requirements
├── 03_UX_UI
├── 04_Architecture
└── 10_Templates
```

---

## Ответственность папок

### `00_Project_Foundation`
Использовать для:
- vision;
- problem statement;
- product goals;
- scope;
- target users;
- MVP и high-level planning.

Не использовать для:
- screen specs;
- FR/NFR;
- module design.

### `01_Product_Requirements`
Использовать для:
- user stories;
- story map;
- use cases;
- FR;
- NFR;
- acceptance criteria.

Не использовать для:
- visual design;
- low-level architecture decisions.

### `03_UX_UI`
Использовать для:
- UX principles;
- interaction flows;
- layouts;
- screens;
- components;
- design system;
- wireframes.

Не использовать для:
- product goals;
- FR/NFR;
- технических модулей реализации.

### `04_Architecture`
Использовать для:
- domain model;
- module specs;
- data flows;
- persistence/integration model;
- ADR;
- technical risks.

Не использовать для:
- user stories;
- acceptance criteria;
- screen-level UI specs.

### `10_Templates`
Использовать только для шаблонов документов.

---

## Порядок чтения

### Если нужно понять продукт
Читать в порядке:
1. `00_Project_Foundation/Vision.md`
2. `00_Project_Foundation/Problem_Statement.md`
3. `00_Project_Foundation/Product_Goals.md`
4. `00_Project_Foundation/Scope_In_Out.md`
5. `00_Project_Foundation/Planning/MVP_Definition.md`

### Если нужно понять фичу
Читать в порядке:
1. relevant user story
2. relevant use case
3. relevant `FR_*`
4. relevant `AC_*`
5. relevant UX/UI spec
6. relevant architecture module
7. relevant `ADR_*`

### Если нужно менять фичу
Проверять и обновлять:
1. user story
2. use case
3. FR
4. acceptance criteria
5. UX/UI spec
6. architecture spec
7. ADR, если решение изменилось архитектурно

---

## Обязательная цепочка

Каждая значимая фича должна проходить по цепочке:

```text
Vision
→ User Story
→ Use Case
→ Functional Requirement
→ Acceptance Criteria
→ UX/UI Spec
→ Architecture Spec / ADR
→ Implementation in /Project
```

Если звено отсутствует, агент должен:
- либо добавить недостающий артефакт;
- либо явно отметить gap.

---

## Правила редактирования

1. Не смешивать разные уровни абстракции в одном файле без причины.
2. Один файл = одна основная роль.
3. Не дублировать одно и то же решение в нескольких местах.
4. При изменении поведения сначала обновлять `/Idea`, затем `/Project`.
5. Все спорные технические решения фиксировать через `ADR_*`.
6. Устаревшие документы помечать `Deprecated`, а не оставлять конфликтовать с актуальными.
7. Предпочитать короткие точные документы длинным описательным текстам.

---

## Куда добавлять новые материалы

### Новая возможность продукта
Добавлять в:
- `01_Product_Requirements/User_Stories/`
- `01_Product_Requirements/Use_Cases/`
- `01_Product_Requirements/Functional_Requirements/`
- `01_Product_Requirements/Acceptance_Criteria/`

### Новый экран или новый interaction pattern
Добавлять в:
- `03_UX_UI/Layouts/`
- `03_UX_UI/Screens/`
- `03_UX_UI/Components/`

### Новый технический модуль или интеграция
Добавлять в:
- `04_Architecture/Modules/`
- `04_Architecture/Data_Flows/`
- `04_Architecture/Decisions/`

### Новый тип документа
Сначала добавить template в:
- `10_Templates/`

---

## Минимальный обязательный набор документов

### Foundation
- `Vision.md`
- `Problem_Statement.md`
- `Product_Goals.md`
- `Scope_In_Out.md`
- `Planning/MVP_Definition.md`

### Requirements
- `User_Stories/Story_Map.md`
- ключевые epic files
- ключевые use cases
- `Functional_Requirements/FR_Projection_System.md`
- `Functional_Requirements/FR_Sketching.md`
- `Functional_Requirements/FR_Templates_and_Modifiers.md`
- `Functional_Requirements/FR_History_and_Versioning.md`

### UX/UI
- `UX_Principles.md`
- `Interaction_Model.md`
- `Layouts/Projection_3D_Layout.md`
- `Screens/Main_Window.md`
- `Screens/Sketch_Workspace.md`

### Architecture
- `System_Overview.md`
- `Architectural_Principles.md`
- `Domain_Model.md`
- `Modules/Projection_Engine.md`
- `Modules/Revision_System.md`
- ключевые `ADR_*`

---

## Naming

Использовать предсказуемые имена:
- `UC_001_Extrude_Profile.md`
- `UC_002_Create_Angled_Plane.md`
- `FR_Projection_System.md`
- `FR_Sketching.md`
- `NFR_Performance.md`
- `AC_MVP.md`
- `ADR_001_Desktop_Stack.md`

Не использовать:
- случайные suffix/prefix;
- vague names вроде `notes2.md`, `new_doc.md`, `final_final.md`.

---

## Поведение агента

Агент должен:
- читать минимально необходимый набор файлов до редактирования;
- сохранять трассируемость между vision, requirements, UX и architecture;
- вносить локальные и согласованные изменения;
- явно отмечать contradictions, gaps и missing artifacts.

Агент не должен:
- придумывать фичи без связи с product goals;
- менять architecture без отражения в ADR;
- менять поведение функции без обновления FR/AC;
- создавать длинные абстрактные документы без операционной пользы.

---

## Definition of Done

Изменение в `/Idea` считается завершённым, когда:
- нужный файл создан или обновлён;
- файл лежит в правильной папке;
- название соответствует naming rules;
- нет конфликта с соседними артефактами;
- сохранена traceability по цепочке проектирования.
