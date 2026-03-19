# Fully Dressed Use Case

## Use Case Identification
- **Use case name:** Pregledaj Aktivnosti
- **Scenario:** Success scenario
- **Triggering event:** Student otvara katalog aktivnosti ili promijeni filter pretrage.
- **Brief description:** Student zeli pronaci relevantnu vannastavnu aktivnost. Sistem prikazuje katalog, filtrira rezultate i omogucava pregled detalja pojedinacne aktivnosti.
- **Actors:** Student / clan organizacije
- **Related use cases:** Prijavi Studenta
- **Stakeholders:** Student, Koordinator aktivnosti, Marketing / PR tim
- **Preconditions:** Najmanje jedna aktivnost je objavljena u sistemu.
- **Postconditions:** Student vidi azuran katalog ili detalje aktivnosti; domen podaci ostaju nepromijenjeni.

## Flow of activities

| Step | Actor | System |
|---|---|---|
| 1 | Otvara katalog aktivnosti. | Ucitava objavljene aktivnosti i prikazuje podrazumijevani pregled. |
| 2 | Unosi tekst pretrage ili bira filter kategorije i dostupnosti. | Primjenjuje filtere i azurira listu rezultata. |
| 3 | Pregleda kartice aktivnosti. | Za svaku aktivnost prikazuje naziv, kategoriju, termin, lokaciju i dostupnost mjesta. |
| 4 | Bira jednu aktivnost za detaljniji pregled. | Otvara detalje aktivnosti sa opisom, rokovima, terminima i statusom prijave. |
| 5 | Procjenjuje da li zeli da nastavi ka prijavi. | Ostavlja detalje otvorene i prikazuje dozvoljene naredne akcije. |

## Exception conditions
- E1: Nema aktivnosti koje odgovaraju izabranim filterima; sistem prikazuje prazno stanje sa jasnom porukom.
- E2: Aktivnost vise nije dostupna za novu prijavu; sistem to naglasava u detaljima aktivnosti.
- E3: Podaci o terminu nijesu dostupni; sistem i dalje prikazuje osnovne informacije o aktivnosti.
