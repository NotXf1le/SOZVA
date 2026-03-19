# User Story

## Story Header
- **Story ID:** US-003
- **Epic / Theme:** Registration Management
- **Priority:** High
- **Story Points (optional):** 5

## User Story
As a **student / clan organizacije** I want to **cancel my registration before the deadline** so that **I can free the spot for another participant and keep my schedule accurate**.

## Acceptance Criteria
- [ ] AC1: Student moze otkazati samo sopstvenu prijavu sa statusom `Confirmed` ili `Waitlisted`.
- [ ] AC2: Nakon otkazivanja sistem mijenja status prijave u `Cancelled` i prikazuje potvrdu promjene.
- [ ] AC3: Ako je otkazana potvrdena prijava, sistem oslobadja mjesto i automatski promovise prvog studenta sa liste cekanja u `Confirmed`.
- [ ] AC4: Ako prijava vise nije otkaziva zbog stanja aktivnosti ili ne postoji aktivna prijava, sistem odbija zahtjev i prikazuje razlog.

## INVEST Check
- **Independent:** Da, story se odnosi samo na odjavu i posljedice po kapacitet.
- **Negotiable:** Da, pravila o krajnjem roku odjave mogu se kasnije prosiriti.
- **Valuable:** Da, smanjuje rucni rad koordinatora i odrzava tacan kapacitet.
- **Estimable:** Da, pravila tranzicije statusa su jasno definisana.
- **Small:** Da, jedan poslovni tok sa ogranicenim brojem stanja.
- **Testable:** Da, moze se testirati promjena statusa i promocija sa liste cekanja.

## Traceability
- **Primary stakeholder:** Student / clan organizacije
- **Business capability:** Upravljanje prijavama
- **Main domain objects:** Prijava, Aktivnost
- **Related use cases:** `Odjavi Studenta`
- **Source artifacts:** `../Black_Box_System_Specification.md`, `../../00_Project_Foundation/System_Vision_Document.md`, `../../04_Architecture/Domain_Model.md`
- **Linked business benefit:** Manje administrativnog i rucnog posla za koordinatore i upravu organizacije.

## Notes
- Otkazivanje i promocija sa liste cekanja moraju ostaviti jasan audit trag u narednim inkrementima.
- MVP koristi lokalni feed dogadjaja kao zamjenu za puni notification adapter.
