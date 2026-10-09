# CLAUDE.md — hermangautefall.com

## Om prosjektet
Personlig nettside for Herman Gautefall Olsson — utøvende jazzpianist,
musikklærer og daglig leder av Løkken Musikkskole AS i Oslo.

Nettsiden har to formål:
1. Personlig merkevare og karriereportfolio
2. Tiltrekke elever til pianoundervisning i Oslo (SEO)

## Teknisk stack
- Ren statisk HTML/CSS/JS — ingen rammeverk, ingen byggeprosess
- Tospråklig: Norsk (rotnivå) og engelsk (en/-mappen)
- Hosting: Cloudflare Pages via GitHub
- Domene: hermangautefall.com (registrert hos Hostinger)

## Mappestruktur
hermangautefall/
├── index.html              (norsk forside)
├── om-meg.html
├── musikk.html
├── pianoundervisning.html
├── kontakt.html
├── en/                     (engelske sider)
│   ├── index.html
│   ├── about.html
│   ├── music.html
│   ├── piano-lessons.html
│   └── contact.html
├── css/
│   ├── style.css           (CSS-variabler og global styling)
│   ├── typography.css
│   └── animations.css
├── js/
│   ├── main.js
│   └── translations.js     (alle tekster samlet her)
├── images/
│   ├── hero/
│   ├── konserter/
│   └── portrett/
└── fonts/

## Designprinsipper
Inspirert av haniarani.com. Følg disse reglene konsekvent:
- Monokrom fargepalett: sort, hvit og grånyanser
- Ingen tradisjonelle CTA-knapper — alle lenker er ren tekst med klassen .text-link
- Fixed transparent navbar som blir hvit/opak ved scroll
- Fullskjerm hero-bilde (100vh) med tekst direkte på bildet
- Quote-seksjon på sort bakgrunn etter hero på forsiden
- Sosiale medier som rene tekstlenker, ikke ikoner
- Ingen underline på lenker, hover-effekt: opacity 0.6

## CSS-variabler (oppdateres etter designanalyse)
Alle farger og fonter styres via :root-variabler i style.css.
Ikke hardkod farger eller fonter andre steder enn i style.css.

## Språk og hreflang
- Alle norske sider har lang="no" og hreflang-tagger som peker til en/-motparten
- Alle engelske sider har lang="en" og hreflang-tagger som peker til norsk motpart
- x-default peker alltid til norsk versjon
- Norsk navbar: språkvelger viser "EN"
- Engelsk navbar: språkvelger viser "NO"

## SEO-regler
- Én H1 per side — inneholder primærsøkeord
- Unike title-tags og meta descriptions på alle sider
- Alt-tekst på alle bilder
- Ekstern lenke til lokkenmusikkskole.com fra pianoundervisning.html og om-meg.html
- Alle eksterne lenker: target="_blank" rel="noopener noreferrer"

## Tekst og tone
- Ingen em-dashes (—) i løpende tekst
- Varm, personlig og naturlig tone — ikke promoterende
- Norsk tekst skrives på bokmål
- Engelske tekster er oversettelser av de norske

## Viktige eksterne lenker
- Løkken Musikkskole: https://lokkenmusikkskole.com
  Ankertekst norsk: "Løkken Musikkskole"
  Ankertekst engelsk: "Løkken Music School"

## Deploy-rutine
Etter hver arbeidsøkt:
1. git add .
2. git commit -m "Kort beskrivelse av hva som ble endret"
3. git push
Cloudflare Pages publiserer automatisk innen 1–2 minutter.

## Det som gjenstår
- CSS-variabler fylles ut etter designanalyse i Claude in Chrome
- Bilder legges i images/-mappene når de er klare
- Sosiale medier-lenker oppdateres med riktige URL-er
- Kontaktskjema kobles til en tjeneste (f.eks. Formspree eller Netlify Forms)
- Google Search Console registreres etter lansering
