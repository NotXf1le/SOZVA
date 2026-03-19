# ADR 001: Browser-Only MVP Stack

- **Status:** Accepted
- **Date:** 2026-03-19

## Context
- Repozitorijum jos nema `/Project` implementaciju.
- U `Idea` postoji dovoljan high-level arhitekturni okvir, ali prvi inkrement treba da bude izvediv bez dodatne infrastrukture i bez spoljne instalacije paketa.
- Lokalno okruzenje trenutno nema `node`, `npm` ni `pnpm`, dok je `python` dostupan.

## Decision
- Prvi inkrement `/Project` bice isporucen kao browser-only web aplikacija zasnovana na:
  - `HTML` za shell i semanticki raspored;
  - `CSS` za responsive vizuelni sloj;
  - `JavaScript ES modules` za presentation, application, domain i infrastructure slojeve;
  - `localStorage` i mock repository adapterima za lokalnu persistenciju MVP stanja;
  - opcionom lokalnom pokretanju preko `python -m http.server`.

## Rationale
- Ova odluka omogucava da se odmah napravi izvrsiv prototip bez blokade na toolchain i package manager.
- Modularna podjela po slojevima ostaje uskladjena sa `System_Overview.md` i `Architectural_Principles.md`.
- Buduci backend, baza i pravi notification adapter mogu se kasnije dodati iza istih application i domain granica.

## Consequences
- Prednosti:
  - brz pocetak rada u postojecem okruzenju;
  - nema spoljne zavisnosti za prvi inkrement;
  - jasna demonstracija poslovnih pravila za katalog i prijave.
- Ogranicenja:
  - nema server-side autentikacije niti stvarnog audit trail-a;
  - podaci su lokalni za browser i nijesu namijenjeni produkciji;
  - napredni izvjestaji i integracije ostaju za naredne inkremente.

## Follow-up
- Kada okruzenje dozvoli backend stack, infrastructure adaptere zamijeniti HTTP/API i persistent storage implementacijama bez mijenjanja osnovnih use-case pravila.
