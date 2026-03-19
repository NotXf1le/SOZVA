# User Story

## Story Header
- **Story ID:** US-001
- **Epic / Theme:** Activity Catalog
- **Priority:** High
- **Story Points (optional):** 3

## User Story
As a **student / clan organizacije** I want to **browse and filter published activities** so that **I can quickly find a relevant extracurricular opportunity and decide whether to join**.

## Acceptance Criteria
- [ ] AC1: Sistem prikazuje samo aktivnosti sa statusom `Published` ili `Closed`, sa nazivom, kategorijom, narednim terminom, lokacijom i trenutnim stanjem slobodnih mjesta.
- [ ] AC2: Student moze filtrirati katalog po kategoriji, tekstualnoj pretrazi i dostupnosti mjesta bez gubitka vec ucitanog konteksta.
- [ ] AC3: Student moze otvoriti detalje aktivnosti i vidjeti opis, rok za prijavu, termine, koordinatora i pravila prijave.
- [ ] AC4: Aktivnost bez slobodnih mjesta ili sa isteklim rokom za prijavu mora biti jasno oznacena kao nedostupna za novu prijavu.

## INVEST Check
- **Independent:** Da, story pokriva samo pronalazenje i pregled aktivnosti.
- **Negotiable:** Da, nacin filtriranja i prikaza moze se prilagoditi bez promjene cilja.
- **Valuable:** Da, direktno povecava vidljivost aktivnosti za studente.
- **Estimable:** Da, izlazi i granice su jasni.
- **Small:** Da, obuhvata jedan fokusirani korisnicki tok.
- **Testable:** Da, acceptance criteria su provjerljivi kroz UI i funkcionalne testove.

## Traceability
- **Primary stakeholder:** Student / clan organizacije
- **Business capability:** Katalog aktivnosti
- **Main domain objects:** Aktivnost, Termin aktivnosti
- **Related use cases:** `Pregledaj Aktivnosti`
- **Source artifacts:** `../Black_Box_System_Specification.md`, `../../00_Project_Foundation/System_Vision_Document.md`, `../../04_Architecture/Domain_Model.md`
- **Linked business benefit:** Veca ukljucenost studenata zahvaljujuci boljoj vidljivosti i dostupnosti informacija o aktivnostima.

## Notes
- Story je prvi ulaz u MVP tok `pregled -> detalji -> prijava`.
- Student pristupa katalogu kroz student panel nakon identifikacije aktivnog profila u aplikaciji.
- UI treba podrzati NFR da novi student moze doci do prijave u najvise 3 ekrana.
