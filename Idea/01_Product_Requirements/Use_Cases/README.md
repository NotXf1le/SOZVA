# Use_Cases

Ovaj folder je rezervisan za buduce use cases.

## Pravila

- Naziv use case-a pisati u Verb-Noun formi.
- Use case treba da bude na nivou elementary business process, ne UI klik i ne prevelika epic funkcionalnost.
- Svaki use case mora imati primarnog aktora, trigger, kratak opis, preconditions i postconditions.
- Slozeni i kljucni use cases se kasnije razradjuju kroz fully dressed opis, activity diagram i SSD.

## Primjeri naziva

- `Pregledaj Aktivnosti`
- `Prijavi Studenta`
- `Objavi Aktivnost`
- `Evidentiraj Prisustvo`
- `Pripremi Izvjestaj`

## Mapping rule

Svaki novi use case treba mapirati na:
- izvorni stakeholder cilj iz `../../00_Project_Foundation/Stakeholder_Map.md`;
- jednu ili vise stories iz `../User_Stories/`;
- jedan application service ili handler u arhitekturi, ne na genericki "admin servis".
