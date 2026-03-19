# User Story

## Story Header
- **Story ID:** US-002
- **Epic / Theme:** Registration Management
- **Priority:** High
- **Story Points (optional):** 5

## User Story
As a **student / clan organizacije** I want to **register for an activity** so that **I can reserve a place and immediately know my participation status**.

## Acceptance Criteria
- [ ] AC1: Student moze poslati prijavu samo za aktivnost sa vazecim rokom prijave i statusom koji dozvoljava prijavu.
- [ ] AC2: Ako aktivnost ima slobodnih mjesta, sistem kreira prijavu sa statusom `Confirmed` i azurira broj zauzetih mjesta.
- [ ] AC3: Ako je kapacitet popunjen, sistem kreira prijavu sa statusom `Waitlisted`, prikazuje redni broj na listi cekanja i ne dozvoljava negativan broj slobodnih mjesta.
- [ ] AC4: Ako student vec ima aktivnu prijavu za istu aktivnost, sistem odbija duplu prijavu i prikazuje razlog.

## INVEST Check
- **Independent:** Da, fokus je samo na kreiranju prijave.
- **Negotiable:** Da, kanal potvrde i detalji poruke se mogu kasnije prosiriti.
- **Valuable:** Da, pokriva kljucnu korisnicku vrijednost sistema.
- **Estimable:** Da, poslovna pravila su ogranicena i jasna.
- **Small:** Da, jedan use case sa kontrolisanim izuzecima.
- **Testable:** Da, ishodi `Confirmed`, `Waitlisted` i odbijanje duplikata su provjerljivi.

## Traceability
- **Primary stakeholder:** Student / clan organizacije
- **Business capability:** Upravljanje prijavama
- **Main domain objects:** Prijava, Aktivnost
- **Related use cases:** `Prijavi Studenta`
- **Source artifacts:** `../Black_Box_System_Specification.md`, `../../00_Project_Foundation/System_Vision_Document.md`, `../../04_Architecture/Domain_Model.md`
- **Linked business benefit:** Transparentnije upravljanje prijavama, kapacitetima, terminima i resursima.

## Notes
- U MVP verziji potvrda prijave se prikazuje u interfejsu i internom feed-u notifikacija.
- Pravila za kapacitet i rok prijave moraju biti odvojena od UI sloja.
