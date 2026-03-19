# Use Case Brief Table

| Use Case | Actor | Brief description |
|---|---|---|
| Pregledaj Aktivnosti | Student / clan organizacije | Student pretrazuje i filtrira katalog objavljenih aktivnosti, a sistem prikazuje relevantne stavke i detalje bez promjene domen stanja. |
| Prijavi Studenta | Student / clan organizacije | Student bira aktivnost i salje prijavu, a sistem provjerava rok i kapacitet, zatim vraca status `Confirmed` ili `Waitlisted`. |
| Odjavi Studenta | Student / clan organizacije | Student otkazuje postojecu prijavu, a sistem mijenja status u `Cancelled`, oslobadja mjesto i po potrebi pomjera listu cekanja. |

## Mapping
- `Pregledaj Aktivnosti` potice iz `US-001`.
- `Prijavi Studenta` potice iz `US-002`.
- `Odjavi Studenta` potice iz `US-003`.
