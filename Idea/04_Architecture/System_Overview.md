# System_Overview

Purpose: high-level arhitektura web aplikacije uskladjena sa vizijom sistema, stakeholder-ima i zahtjevom da buduca prosirenja ostanu jednostavna.

## 1. System purpose

Sistem je web aplikacija za studentsku organizaciju koja:
- objavljuje katalog vannastavnih aktivnosti;
- upravlja prijavama, kapacitetima i rasporedom;
- salje obavjestenja;
- evidentira prisustvo;
- priprema izvjestaje za operativne i upravljacke aktere.

Sistem postoji da zamijeni nepovezane komunikacione kanale i rucne evidencije jedinstvenim i preglednim procesom.

## 2. Stakeholders and concerns

| Stakeholder group | Main concern |
|---|---|
| Students / clanovi organizacije | Jednostavan pregled aktivnosti, brza prijava i tacne informacije |
| Koordinatori aktivnosti | Manje rucnog rada, kontrola kapaciteta, termina i prisustva |
| Uprava organizacije | Pouzdani izvjestaji, transparentan rad i pracenje ukljucenosti |
| Podrska i integracije | Jasne granice sistema, laka promjena pravila i upravljive integracije |

## 3. Chosen architecture pattern

- [x] 3-tier
- [x] MVC
- [x] Monolithic
- [x] Other: layered modular monolith with ports and adapters

**Justification:**

Problem domen ima vise poslovnih pravila, ali jos nema obim koji opravdava mikroservise. Modularni monolit omogucava da:
- web klijent ostane tanak i fokusiran na interakciju;
- application sloj mapira jedan use case na jednu odgovornost;
- domain sloj ostane stabilan kada se kasnije dodaju user stories i use cases;
- infrastruktura i eksterni servisi budu odvojeni preko adaptera.

## 4. Quality requirements driving architecture

| Quality requirement | Architectural impact |
|---|---|
| Usability | Responsive web interfejs, kratki tokovi za pregled i prijavu |
| Reliability | Dosljedne promjene statusa prijava i kapaciteta, kontrolisane tranzicije stanja |
| Performance | Posebne read operacije za katalog i izvjestaje, ograniceno presipanje podataka kroz slojeve |
| Security | Role-based access control i centralizovane autorizacione politike |
| Supportability | Izolacija domen pravila od framework-a, baze i komunikacionih kanala |

## 5. Environment and external systems

| External system / environment element | Interaction |
|---|---|
| Email / messaging gateway | Slanje obavjestenja o novim aktivnostima, izmjenama i statusima prijave |
| Identity source ili lokalna autentikacija | Upravljanje pristupom po ulozi i identitetu korisnika |
| Fakultetski kalendar / prostorije | Buduca integracija za uskladjivanje termina i prostora |
| Reporting export kanal | Izvoz izvjestaja za rukovodstvo, mentore ili partnere |

## 6. Main application parts / layers

| Part / layer | Responsibility |
|---|---|
| Web client / presentation | Prikaz kataloga, formulara, statusa prijava, evidencije prisustva i izvjestaja |
| API / controllers | Prima HTTP zahtjeve, validira ulaz i prosljedjuje ih use-case sloju |
| Application layer | Implementira po jedan application service ili handler po poslovnom use case-u |
| Domain layer | Cuva poslovna pravila, statuse, validacije i tranzicije entiteta |
| Infrastructure / adapters | Persistencija, slanje obavjestenja, izvoz izvjestaja i druge spoljne integracije |
| Database / storage | Cuvanje operativnih zapisa, audit trail-a i izvjestajnih podataka |

## 7. Data view

- Main data entities: Aktivnost, Termin aktivnosti, Prijava, Evidencija prisustva, Resurs, Obavjestenje.
- Main data flows:
  - koordinator planira i objavljuje aktivnost;
  - student pregledava katalog i salje prijavu;
  - sistem azurira kapacitet i status prijave;
  - sistem salje obavjestenja o promjenama;
  - koordinator evidentira prisustvo;
  - rukovodstvo pregledava izvjestaje.
- Main persistence concerns:
  - integritet kapaciteta i liste cekanja;
  - audit trag za kriticne promjene;
  - jasno odvojeni zapisi za operativne procese i izvjestavanje.

## 8. Rationale and trade-offs

- Why this architecture fits the problem:
  - podrzava vise uloga i jasan rast po poslovnim sposobnostima;
  - jednostavnija je za razvoj i odrzavanje od distribuirane arhitekture;
  - omogucava da se novi use cases dodaju kao nove cjeline bez destabilizacije ostatka sistema.
- What constraints it satisfies:
  - web pristup sa vise uredjaja;
  - potreba za audit tragom;
  - vise komunikacionih i izvjestajnih scenarija.
- Main trade-offs or risks:
  - modulni monolit trazi disciplinu da se ne pretvori u "god service" aplikaciju;
  - izvjestaji i notifikacije mogu rasti brze od ostatka sistema pa ih treba rano izolovati preko portova;
  - buduce integracije sa fakultetskim sistemima ne smiju probiti granice domen sloja.

## 9. Extension path for future stories and use cases

1. Nova user story se veze za jedan stakeholder cilj i jednu poslovnu sposobnost.
2. Iz story nastaje jedan ili vise use cases sa jasnim trigger-om i ishodom.
3. Svaki use case dobija poseban application service ili handler.
4. Ako use case uvodi novu integraciju, dodaje se novi port i adapter, a ne zavisnost direktno u domen.
5. Ako use case dira postojeci modul, mijenja se samo modul koji nosi odgovornost za tu poslovnu sposobnost.
