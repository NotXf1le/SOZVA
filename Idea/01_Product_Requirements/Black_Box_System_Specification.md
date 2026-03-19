# Black-Box System Specification

Purpose: opis web aplikacije iz perspektive korisnika i poslovnog procesa, bez implementacionih detalja.

## 1. System purpose
Sistem za upravljanje vannastavnim aktivnostima studentske organizacije centralizuje katalog aktivnosti, prijave, raspored, komunikaciju, evidenciju prisustva i izvjestavanje.

Primarni cilj sistema je da:
- student brzo pronadje relevantnu aktivnost i prijavi se;
- koordinator planira i vodi aktivnost sa manje rucnog rada;
- rukovodstvo i partneri dobiju pouzdane podatke za planiranje i evaluaciju programa.

## 2. Actors / Roles

| Actor / Role | Why this role uses the system | Main goals |
|---|---|---|
| Student / clan organizacije | Zeli pregled aktivnosti i jednostavnu prijavu | Pronaci aktivnost, prijaviti se, pratiti status i obavjestenja |
| Koordinator aktivnosti | Vodi operativnu realizaciju aktivnosti | Kreirati aktivnost, upravljati kapacitetom, terminima, resursima i ucesnicima |
| Predsjednik organizacije / upravni odbor | Prate rezultate i uskladjenost sa ciljevima organizacije | Pregledati izvjestaje, donositi odluke i prioritizovati program |
| Finansijski koordinator / blagajnik | Prati troskove i opravdanost aktivnosti | Vidjeti planirane i stvarne troskove po aktivnosti |
| Marketing / PR tim | Promovise aktivnosti i salje informacije studentima | Objaviti tacne informacije i reagovati na izmjene rasporeda |
| Mentor / profesor saradnik / fakultetska administracija | Obezbjedjuju saglasnosti i institucionalnu podrsku | Pratiti plan, termine i kvalitet realizacije |

## 3. Functional specifications

| Actor / Role | Scenario / Use case | Short description |
|---|---|---|
| Student / clan organizacije | Pregledaj aktivnosti | Student pretrazuje i filtrira katalog aktivnosti po kategoriji, terminu i dostupnosti mjesta. |
| Student / clan organizacije | Prijavi se na aktivnost | Student salje prijavu, dobija status prijave i vidi da li je potvrda odmah ili preko liste cekanja. |
| Student / clan organizacije | Odjavi se sa aktivnosti | Student povlaci prijavu prije isteka roka, a sistem oslobadja mjesto ili pomjera listu cekanja. |
| Koordinator aktivnosti | Objavi aktivnost | Koordinator definise naziv, opis, kapacitet, termine, lokaciju, resurse i rok za prijavu. |
| Koordinator aktivnosti | Upravljaj prijavama | Koordinator prati potvrdene prijave, listu cekanja, odustajanja i promjene kapaciteta. |
| Koordinator aktivnosti | Evidentiraj prisustvo | Koordinator ili ovlascena osoba biljezi prisustvo po terminu aktivnosti. |
| Marketing / PR tim | Posalji obavjestenje | Tim objavljuje nova desavanja i salje izmjene termina, lokacije ili rokova. |
| Predsjednik organizacije / upravni odbor | Pregledaj izvjestaj | Rukovodstvo analizira prijave, prisustvo, angazman i opste rezultate programa. |
| Finansijski koordinator / blagajnik | Pregledaj troskove aktivnosti | Finansijski koordinator prati planirane i realizovane troskove po aktivnosti ili programu. |
| Mentor / profesor saradnik / fakultetska administracija | Pregledaj plan realizacije | Eksterni autoriteti pregledaju termine, lokacije i osnovne informacije prije odobrenja ili podrske. |

## 4. Non-Functional Specifications

| ID | Category | Measurable requirement |
|---|---|---|
| NFR-01 | Performance | 95% otvaranja kataloga aktivnosti i detalja aktivnosti mora zavrsiti za najvise 2 sekunde pri referentnom opterecenju. |
| NFR-02 | Security | Pristup akcijama mora biti ogranicen po ulozi tako da korisnik moze upravljati samo podacima za koje je ovlascen. |
| NFR-03 | Availability | Web aplikacija mora biti dostupna 99.5% vremena na mjesecnom nivou, osim planiranog odrzavanja. |
| NFR-04 | Usability | Novi student mora moci pronaci aktivnost i poslati prijavu u najvise 3 ekrana. |
| NFR-05 | Supportability | Poslovna pravila moraju biti odvojena od interfejsa i infrastrukture tako da se mogu testirati izolovano. |

Detaljnija razrada nalazi se u `NFR_Web_Application.md`.

## 5. Data / Entities

| Entity | Why it is needed | Main attributes |
|---|---|---|
| Student | Evidencija prijava i ucesca | studentId, ime, email, status |
| Aktivnost | Centralni zapis o radionici, dogadjaju, sekciji ili akciji | activityId, naziv, opis, kategorija, status, kapacitet |
| Termin aktivnosti | Precizno planiranje vremena i lokacije | sessionId, pocetak, kraj, lokacija, status |
| Prijava | Veza izmedju studenta i aktivnosti | registrationId, status, vrijeme prijave, napomena |
| Evidencija prisustva | Pracenje realizacije i angazmana | attendanceId, presenceStatus, recordedAt |
| Resurs | Planiranje prostora, opreme ili drugih potreba | resourceId, tip, naziv, dostupnost |
| Obavjestenje | Komunikacija prema studentima i internim akterima | notificationId, kanal, naslov, status slanja |
| Izvjestaj | Agregirani prikaz za rukovodstvo i partnere | reportId, period, tip, generatedAt |

## 6. Scope guardrails

In scope:
- katalog vannastavnih aktivnosti;
- prijava, odjava i pracenje kapaciteta;
- planiranje termina, lokacije i osnovnih resursa;
- slanje obavjestenja o aktivnostima i izmjenama;
- evidencija prisustva;
- operativni i upravljacki izvjestaji.

Out of scope za pocetnu verziju:
- finansijsko knjigovodstvo i puna obrada budzeta;
- automatizovano rezervisanje prostorija u eksternim sistemima;
- LMS funkcionalnosti i nastavni sadrzaji;
- naplata clanarina i payment gateway integracije.

## 7. Traceability seeds

| Business capability | Primary stakeholders | Candidate domain objects | Candidate future artifacts |
|---|---|---|---|
| Katalog aktivnosti | Student, Marketing / PR tim | Aktivnost, Termin aktivnosti | User story za pregled i pretragu, use case `Pregledaj Aktivnosti` |
| Upravljanje prijavama | Student, Koordinator aktivnosti | Prijava, Aktivnost | User story za prijavu i odjavu, use case `Prijavi Studenta` |
| Planiranje realizacije | Koordinator aktivnosti, Fakultetska administracija | Aktivnost, Termin aktivnosti, Resurs | User story za planiranje, use case `Objavi Aktivnost` |
| Evidencija angazmana | Koordinator aktivnosti, Predsjednik organizacije | Evidencija prisustva, Prijava | User story za prisustvo, use case `Evidentiraj Prisustvo` |
| Izvjestavanje | Predsjednik organizacije, Partneri, Mentori | Aktivnost, Prijava, Evidencija prisustva | User story za pregled rezultata, use case `Pripremi Izvjestaj` |
