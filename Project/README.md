# SOZVA Web MVP

Prvi izvrsivi inkrement web aplikacije za upravljanje vannastavnim aktivnostima studentske organizacije.

## Sta pokriva
- student panel login kroz izbor studentskog profila;
- pregled i filtriranje kataloga aktivnosti;
- otvaranje detalja aktivnosti;
- prijavu sa potvrdom ili listom cekanja;
- odjavu sa automatskim pomjeranjem liste cekanja;
- lokalni feed sistemskih poruka.

## Arhitektura
Struktura prati dokumente iz `Idea/04_Architecture`:
- `src/domain` sadrzi poslovna pravila za kapacitet, rokove i statuse prijava;
- `src/application` orkestrira use cases;
- `src/infrastructure` sadrzi mock podatke i browser storage adaptere;
- `src/presentation` renderuje UI i upravlja interakcijom.

## Pokretanje
Iz foldera `Project`:

```powershell
python -m http.server 8000
```

Zatim otvoriti:

`http://localhost:8000`

## Napomene
- Aplikacija koristi `localStorage`, pa akcije ostaju sacuvane dok ne obrisete podatke browsera.
- Dugme `Reset demo data` vraca pocetno stanje registracija i feed-a.
