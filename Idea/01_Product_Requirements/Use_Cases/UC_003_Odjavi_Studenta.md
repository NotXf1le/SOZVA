# Fully Dressed Use Case

## Use Case Identification
- **Use case name:** Odjavi Studenta
- **Scenario:** Success scenario
- **Triggering event:** Student pokrene akciju za otkazivanje postojece prijave.
- **Brief description:** Student otkazuje sopstvenu prijavu. Sistem mijenja status prijave, oslobadja kapacitet i po potrebi unapredjuje prvog studenta sa liste cekanja.
- **Actors:** Student / clan organizacije
- **Related use cases:** Pregledaj Aktivnosti, Prijavi Studenta
- **Stakeholders:** Student, Koordinator aktivnosti
- **Preconditions:** Postoji aktivna prijava studenta za izabranu aktivnost; stanje aktivnosti dozvoljava otkazivanje.
- **Postconditions:** Status prijave je `Cancelled`; kapacitet i lista cekanja su dosljedno azurirani.

## Flow of activities

| Step | Actor | System |
|---|---|---|
| 1 | Otvara detalje aktivnosti sa postojecom prijavom. | Prikazuje trenutni status prijave i mogucnost otkazivanja. |
| 2 | Pokrece odjavu. | Provjerava da li prijava pripada aktivnom studentu i da li je status otkaziv. |
| 3 | Ceka potvrdu sistema. | Mijenja status prijave u `Cancelled` i upisuje vrijeme promjene. |
| 4 | Pregleda rezultat odjave. | Ako je oslobodjeno mjesto, promovise prvog studenta sa liste cekanja u `Confirmed`. |
| 5 | Pregleda konacno stanje aktivnosti. | Prikazuje azurirane statuse i broj slobodnih mjesta. |

## Exception conditions
- E1: Student nema aktivnu prijavu za izabranu aktivnost; sistem odbija zahtjev.
- E2: Aktivnost vise ne dozvoljava odjavu; sistem prikazuje razlog odbijanja.
- E3: Ne postoji lista cekanja; sistem samo oslobadja mjesto bez daljih promjena.
