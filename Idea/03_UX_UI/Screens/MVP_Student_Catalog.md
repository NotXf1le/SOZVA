# MVP Student Catalog Screen

Purpose: ekran za prvi inkrement web aplikacije koji pokriva tok `pregled aktivnosti -> detalji -> prijava / odjava`.

## Supported artifacts
- `../../01_Product_Requirements/User_Stories/US_001_Browse_Activities.md`
- `../../01_Product_Requirements/User_Stories/US_002_Register_For_Activity.md`
- `../../01_Product_Requirements/User_Stories/US_003_Cancel_Registration.md`
- `../../01_Product_Requirements/Use_Cases/UC_001_Pregledaj_Aktivnosti.md`
- `../../01_Product_Requirements/Use_Cases/UC_002_Prijavi_Studenta.md`
- `../../01_Product_Requirements/Use_Cases/UC_003_Odjavi_Studenta.md`

## Primary actor
- Student / clan organizacije

## Screen intent
- Ulaz u MVP pocinje sa student panel login karticom u kojoj student bira svoj profil i ulazi u panel.
- Omoguciti da novi student pronadje aktivnost i posalje prijavu u okviru najvise 3 ekrana.
- Na desktopu je pozeljan jedan glavni ekran sa listom i panelom detalja.
- Na mobilnom prikazu detalji mogu da se otvore ispod liste ili u zasebnom segmentu iste stranice.

## Main zones

| Zone | Content | Why it exists |
|---|---|---|
| Student login panel | Izbor studentskog profila i ulaz u panel | Cini korisnicki kontekst eksplicitnim prije prijave na aktivnosti |
| Header / overview | Naziv sistema, kratki status programa i izbor aktivnog studenta | Daje kontekst i simulira personalizovani pristup |
| Filter bar | Tekstualna pretraga, kategorija, dostupnost | Podrzava `Pregledaj Aktivnosti` bez dodatnog ekrana |
| Activity catalog | Kartice aktivnosti sa kljucnim metapodacima i statusom mjesta | Podrzava brzo skeniranje ponude |
| Activity detail panel | Opis, termini, lokacija, rok prijave, status korisnika i CTA dugme | Omogucava odluku i akciju iz istog toka |
| Notification / state feed | Posljednje sistemske poruke i promjene statusa | Cini ishod prijave i odjave vidljivim u MVP-u |

## Key interaction rules
- Student ne vidi interaktivni katalog dok ne udje u panel preko login kartice.
- Kartica aktivnosti mora jasno prikazati da li je prijava otvorena, puna ili zatvorena.
- Primarna akcija u detaljima mora biti jedna od: `Prijavi se`, `Na listi cekanja`, `Otkazi prijavu`, `Prijava zatvorena`.
- Promjena statusa mora odmah azurirati katalog, detalje i feed sistemskih poruka.
- Ako student vec ima prijavu, interfejs ne smije nuditi drugu aktivnu prijavu za istu aktivnost.

## Responsive notes
- Minimalna sirina: 360 px.
- Na sirinama ispod 920 px katalog i detalji prelaze iz dvije kolone u jednu.
- Filteri se grupisu u vertikalni stack bez gubitka funkcionalnosti.

## Visual direction
- Ton interfejsa treba da djeluje organizovano, studentski i energicno, ne kao administrativni formular.
- Naglasiti kombinaciju toplih akcenata za akcije i hladnih tonova za status i preglednost.
