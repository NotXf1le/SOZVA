# User_Stories

Ovaj folder je rezervisan za buduce user stories.

## Format

Pisati u formatu:

`As a <role> I want to <task> so that <benefit>.`

## Minimalna pravila

- Svaka story mora biti vezana za barem jednu poslovnu sposobnost iz `Black_Box_System_Specification.md`.
- Svaka story mora navesti primarnog stakeholdera iz `../../00_Project_Foundation/Stakeholder_Map.md`.
- Svaka story mora imati acceptance criteria.
- Svaka story treba da referencira glavni domen objekat iz `../../04_Architecture/Domain_Model.md`.
- Ako story uvodi novu eksternu integraciju, u arhitekturi se dodaje novi port i adapter, a ne direktna zavisnost iz domen logike.

## Naming

Preporuceni naziv fajla:

`US_001_Browse_Activities.md`

## Mapping rule

Jedna story moze dovesti do jednog ili vise use cases, ali svaki key use case mora imati jasno naveden izvor u odgovarajucoj story.
