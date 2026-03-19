# /Idea

`/Idea` — папка продуктового проектирования CAD-приложения.

Здесь хранятся:
- vision и scope;
- product requirements;
- UX/UI спецификации;
- архитектурные решения;
- шаблоны документов.

`/Idea` не хранит:
- production code;
- runtime assets;
- build/test/config infrastructure.

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

## Разделы

### `00_Project_Foundation`
Базовые документы проекта:
- vision;
- problem statement;
- product goals;
- scope;
- MVP.

### `01_Product_Requirements`
Требования к продукту:
- user stories;
- use cases;
- FR/NFR;
- acceptance criteria.

### `03_UX_UI`
Проектирование взаимодействия и интерфейса:
- UX principles;
- interaction model;
- layouts;
- screens;
- components;
- design system.

### `04_Architecture`
Техническое проектирование:
- system overview;
- domain model;
- modules;
- data flows;
- ADR.

### `10_Templates`
Шаблоны документов.

## Правило границы

### `/Idea`
Хранит:
- why;
- what;
- expected behavior;
- UX/UI;
- architecture decisions.

### `/Project`
Хранит:
- implementation;
- code;
- assets;
- tests;
- configs;
- integrations.

Подробные правила работы с `/Idea` находятся в `AGENT.md`.
