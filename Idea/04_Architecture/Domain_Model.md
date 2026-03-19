# Domain_Model

Purpose: model glavnih entiteta problema i njihovih odnosa, bez implementacionih detalja.

## Candidate Domain Classes / Entities

| Domain class / Entity | Short description | Key attributes | Notes |
|---|---|---|---|
| Student | Korisnik koji pregleda aktivnosti i salje prijave | studentId, ime, email, status | Moze imati vise prijava kroz vrijeme |
| Koordinator | Korisnik koji planira i vodi aktivnosti | coordinatorId, ime, kontakt, odgovornost | Moze upravljati vise aktivnosti |
| Aktivnost | Krovni zapis o radionici, sekciji, dogadjaju ili akciji | activityId, naziv, opis, kategorija, status, capacityLimit, prijavaDeadline | Kandidat za glavni agregat sistema |
| Termin aktivnosti | Konkretan termin i lokacija realizacije aktivnosti | sessionId, startAt, endAt, location, sessionStatus | Aktivnost moze imati jedan ili vise termina |
| Prijava | Veza izmedju studenta i aktivnosti sa statusom | registrationId, createdAt, status, waitlistOrder, cancelReason | Kapacitet i rok prijave uticu na status |
| Evidencija prisustva | Zapis o prisustvu studenta na terminu | attendanceId, presenceStatus, recordedAt, note | Biljezi se po studentu i terminu |
| Resurs | Prostor, oprema ili drugi planirani resurs | resourceId, type, name, availabilityStatus | Moze biti fizicki ili organizacioni resurs |
| Zahtjev za resursom | Potreba jedne aktivnosti za konkretnim resursom | requestId, requestedQuantity, approvedQuantity, status | Veza izmedju aktivnosti i resursa |
| Obavjestenje | Poruka vezana za aktivnost, termin ili prijavu | notificationId, channel, subject, message, sendStatus, scheduledAt | Podrzava vise komunikacionih kanala |
| Izvjestaj | Agregirani poslovni izlaz za rukovodstvo i partnere | reportId, period, type, generatedAt | Analiticki pogled, ne glavni operativni entitet |

## Relationships / Associations

| From | Relationship | To | Multiplicity | Notes |
|---|---|---|---|---|
| Koordinator | upravlja | Aktivnost | 1:N | Jedan koordinator moze voditi vise aktivnosti |
| Aktivnost | ima | Termin aktivnosti | 1:N | Jedna aktivnost moze imati vise termina |
| Student | podnosi | Prijava | 1:N | Student se moze prijaviti na vise aktivnosti |
| Prijava | odnosi se na | Aktivnost | N:1 | Svaka prijava je vezana za jednu aktivnost |
| Student | ima | Evidencija prisustva | 1:N | Prisustvo se vodi kroz vise termina ili aktivnosti |
| Evidencija prisustva | biljezi prisustvo na | Termin aktivnosti | N:1 | Svaki zapis prisustva pripada jednom terminu |
| Aktivnost | zahtijeva | Zahtjev za resursom | 1:N | Aktivnost moze traziti vise resursa |
| Zahtjev za resursom | referencira | Resurs | N:1 | Vise zahtjeva moze ciljati isti resurs |
| Obavjestenje | referencira | Aktivnost | N:1 | Obavjestenje je najcesce vezano za aktivnost |
| Obavjestenje | referencira | Prijava | 0..N:1 | Dio obavjestenja je vezan za status prijave |

## State / lifecycle notes

| Class / Entity | Important states or lifecycle notes |
|---|---|
| Aktivnost | Draft -> Planned -> Published -> Closed -> Archived |
| Termin aktivnosti | Planned -> Confirmed -> Completed -> Cancelled |
| Prijava | Pending -> Confirmed -> Waitlisted -> Cancelled |
| Obavjestenje | Draft -> Scheduled -> Sent -> Failed |
| Zahtjev za resursom | Requested -> Approved -> Fulfilled -> Rejected |

## Domain notes

- `Aktivnost` je prirodni kandidat za aggregate root jer okuplja kapacitet, rok prijave, termine i osnovna pravila realizacije.
- `Prijava` i `Termin aktivnosti` nose najvaznija poslovna pravila za buduce use cases kao sto su prijava, odjava, promjena kapaciteta i evidencija prisustva.
- `Obavjestenje` i `Izvjestaj` treba drzati odvojeno od jezgra domen pravila, uz granice koje omogucavaju zamjenu kanala slanja i nacina izvoza.
