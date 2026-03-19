# NFR_Web_Application

Purpose: mjerljivi i testabilni nefunkcionalni zahtjevi za web aplikaciju studentske organizacije.

## NFR Rewrite Table

| # | Initial / weak NFR | Category | Measurable and testable NFR | Verification method |
|---|---|---|---|---|
| 1 | Sistem mora biti brz | Performance | 95% zahtjeva za listu aktivnosti, filtriranje i otvaranje detalja aktivnosti mora zavrsiti za najvise 2 sekunde pri 200 istovremenih korisnika i katalogu od 500 aktivnih ili arhiviranih aktivnosti. | Load test |
| 2 | Prijava mora odmah da radi | Performance / Reliability | 95% operacija prijave i odjave mora zavrsiti za najvise 3 sekunde, bez kreiranja duplih potvrda ili negativnog broja slobodnih mjesta. | Integration test i load test |
| 3 | Aplikacija mora biti sigurna | Security | Sistem mora primjenjivati role-based access control tako da student moze upravljati samo svojim prijavama, koordinator samo aktivnostima kojima upravlja, a rukovodstvo samo agregiranim izvjestajima. | Authorization tests |
| 4 | Promjene moraju biti pratljive | Security / Auditability | Svaka promjena termina, kapaciteta, statusa prijave i evidencije prisustva mora biti sacuvana sa korisnikom, vremenom i starom vrijednoscu najmanje 12 mjeseci. | Audit trail test i log review |
| 5 | Sistem mora biti dostupan | Availability | Web aplikacija mora biti dostupna 99.5% vremena na mjesecnom nivou, izuzimajuci planirano odrzavanje najavljeno najmanje 24 sata unaprijed. | Monitoring |
| 6 | Interfejs mora biti jednostavan | Usability | Korisnik koji prvi put koristi sistem mora moci pronaci aktivnost i poslati prijavu u najvise 3 ekrana i bez dodatnog uputstva. | Moderated usability test |
| 7 | Mora raditi na uredjajima studenata | Compatibility | Interfejs mora biti upotrebljiv na sirinama ekrana od 360 px navise i podrzan u aktuelnim verzijama Chrome, Edge, Firefox i Safari pregledaca. | Responsive i cross-browser test |
| 8 | Sistem mora da raste | Scalability | Sistem mora podrzati najmanje 5000 studentskih naloga, 1000 aktivnosti godisnje i 50000 zapisa prisustva bez degradacije vece od 20% u odnosu na referentno opterecenje iz NFR-01. | Load test |
| 9 | Izvjestaji moraju biti spremni brzo | Performance | Generisanje standardnog mjesecnog izvjestaja za do 1000 aktivnosti i 50000 zapisa prisustva mora zavrsiti za najvise 30 sekundi. | Performance test |
| 10 | Poslovna pravila moraju biti laka za promjenu | Supportability | Najmanje 80% pravila za kapacitet, rok prijave, status prijave i prisustvo mora biti pokriveno automatizovanim testovima koji se izvrsavaju bez HTTP servera i bez direktnog pristupa bazi. | Unit test suite i coverage review |

## Notes

- Ovi NFR-ovi podrzavaju izbor modularne web arhitekture sa odvojenim domen pravilima.
- NFR-10 direktno podrzava buduce dodavanje user stories i use cases bez velikog refaktora.
