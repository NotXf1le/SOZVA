# Architectural_Principles

Purpose: skup pravila za razvoj web aplikacije tako da ostane uskladjena sa SOLID principima i spremna za kasnije dodavanje user stories i use cases.

## 1. Dependency rule

Dozvoljeni smjer zavisnosti:

`Presentation -> Application -> Domain <- Infrastructure implementations`

Pravila:
- presentation sloj ne sadrzi poslovna pravila;
- application sloj orkestrira use case, ali ne zna detalje infrastrukture;
- domain sloj ne zavisi od framework-a, HTTP-a ili baze;
- infrastructure implementira portove definisane prema potrebama application i domain sloja.

## 2. SOLID principles in this system

| Principle | Rule in this system | Example in this product | Benefit for future growth |
|---|---|---|---|
| SRP | Svaki modul i servis ima jednu poslovnu odgovornost | Posebni moduli za katalog, prijave, raspored, obavjestenja, prisustvo i izvjestaje | Nova prica mijenja samo jedan fokusirani dio sistema |
| OCP | Novo ponasanje se dodaje kroz nove handlere, politike i adaptere | Novi kanal obavjestenja se dodaje kao novi adapter, bez izmjene jezgra prijava | Lakse dodavanje novih use cases i integracija |
| LSP | Implementacije istog porta moraju biti zamjenljive bez promjene poslovne logike | Email gateway i push gateway moraju zadovoljiti isti ugovor slanja obavjestenja | Sigurna zamjena provajdera i tehnickih rjesenja |
| ISP | Interfejsi ostaju mali i orijentisani na konkretan slucaj upotrebe | Odvojeni portovi za citanje kataloga, upis prijave i izvoz izvjestaja | Izbjegava se "fat service" i nepotrebne zavisnosti |
| DIP | Application i domain zavise od apstrakcija, ne od konkretnih klasa | `ActivityRepository`, `NotificationGateway`, `AttendancePolicy`, `ReportExporter` | Tehnicke promjene ne razbijaju poslovna pravila |

## 3. Suggested business modules

| Module | Responsibility | Main domain objects |
|---|---|---|
| Activity Catalog | Objavljivanje i pregled aktivnosti | Aktivnost, Termin aktivnosti |
| Registration Management | Prijava, odjava, lista cekanja i kapacitet | Prijava, Aktivnost |
| Scheduling and Resources | Planiranje termina, lokacija i resursa | Termin aktivnosti, Resurs, Zahtjev za resursom |
| Notifications | Slanje obavjestenja i pracenje statusa slanja | Obavjestenje |
| Attendance Tracking | Evidencija prisustva i osnovnog angazmana | Evidencija prisustva |
| Reporting | Agregacija podataka i priprema izvjestaja | Izvjestaj, Aktivnost, Prijava, Evidencija prisustva |

## 4. Rules for adding new capability

- Jedan use case = jedan application service ili handler.
- Kontroleri i UI komponente samo prevode ulaz i izlaz, bez poslovnih odluka.
- Poslovne validacije se nalaze u domen entitetima, policy objektima ili domain servisima.
- Autorizacija se provodi centralno kroz pravila po ulozi, ne samo kroz skrivanje dugmadi u UI-ju.
- Spoljne integracije se uvode iskljucivo preko portova i adaptera.
- Audit log se tretira kao cross-cutting concern i ne smije zagadjivati osnovnu domen logiku.
- Zajednicka apstrakcija se uvodi tek kada postoje najmanje dva stvarna slucaja koji je opravdavaju.

## 5. Suggested ports

| Port | Responsibility | Typical adapter examples |
|---|---|---|
| ActivityRepository | Cuvanje i ucitavanje aktivnosti i termina | SQL repository, ORM adapter |
| RegistrationRepository | Persistencija prijava i provjera kapaciteta | SQL repository |
| NotificationGateway | Slanje obavjestenja prema korisnicima | Email adapter, SMS adapter, push adapter |
| AttendanceRepository | Upis i citanje evidencije prisustva | SQL repository |
| ReportExporter | Izvoz izvjestaja u trazeni format | PDF adapter, CSV adapter |
| AuditLogWriter | Upis tragova kriticnih promjena | Database audit adapter, log stream adapter |

## 6. Flow for future user stories and use cases

1. Dodati user story u `../01_Product_Requirements/User_Stories/`.
2. Dodati ili azurirati use case u `../01_Product_Requirements/Use_Cases/`.
3. Odrediti primarni domen objekat i odgovarajuci business modul.
4. Dodati novi application service ili prosiriti postojeci samo ako je odgovornost ista.
5. Ako je potrebna spoljna integracija, definisati novi port i njegov adapter.
6. Potvrditi acceptance criteria kroz testove iznad domen i application sloja.

## 7. Anti-patterns to avoid

- jedan veliki `AdminService` koji mijesa katalog, prijave, resurse i izvjestaje;
- business pravila unutar kontrolera ili JavaScript komponenti;
- direktan pristup bazi iz UI ili presentation sloja;
- uslovna logika po roli razbacana kroz vise modula bez centralne politike;
- uvodjenje generickih apstrakcija prije nego sto postoje stvarni use cases koji ih traze.
