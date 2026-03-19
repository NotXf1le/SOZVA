# Fully Dressed Use Case

## Use Case Identification
- **Use case name:** Prijavi Studenta
- **Scenario:** Success scenario
- **Triggering event:** Student klikne akciju za prijavu na izabranu aktivnost.
- **Brief description:** Student podnosi prijavu za aktivnost. Sistem provjerava da li prijava jos traje, da li je student vec prijavljen i da li postoji slobodan kapacitet, zatim kreira odgovarajuci status prijave.
- **Actors:** Student / clan organizacije
- **Related use cases:** Pregledaj Aktivnosti, Odjavi Studenta
- **Stakeholders:** Student, Koordinator aktivnosti
- **Preconditions:** Aktivnost je objavljena; student je identifikovan u aplikaciji; rok prijave nije istekao.
- **Postconditions:** Kreirana je nova prijava sa statusom `Confirmed` ili `Waitlisted`, ili je korisniku prikazan razlog odbijanja.

## Flow of activities

| Step | Actor | System |
|---|---|---|
| 1 | Otvara detalje aktivnosti. | Prikazuje status aktivnosti, kapacitet i dostupne akcije. |
| 2 | Pokrece prijavu. | Provjerava da li student vec ima aktivnu prijavu za tu aktivnost. |
| 3 | Ceka ishod provjere. | Provjerava rok prijave i preostali kapacitet aktivnosti. |
| 4 | Potvrdjuje slanje prijave. | Kreira prijavu sa statusom `Confirmed` ako postoji mjesto, inace sa statusom `Waitlisted`. |
| 5 | Pregleda rezultat. | Prikazuje novi status prijave i azuriran broj slobodnih mjesta ili redni broj na listi cekanja. |

## Exception conditions
- E1: Student vec ima aktivnu prijavu; sistem odbija duplu prijavu.
- E2: Rok prijave je istekao ili je aktivnost zatvorena; sistem ne dozvoljava prijavu.
- E3: Doslo je do promjene kapaciteta u medjuvremenu; sistem vraca novi status prijave prema trenutno vazecem stanju.
