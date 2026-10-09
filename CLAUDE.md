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
Inspirert av hognekleiberg.com, men ikke en kopi. Hold siden veldig enkel. Følg disse reglene konsekvent:
- Fargepalett: camel (#b8915c), kremhvit (#f1eadb) og oliven (#6b7244), med mørk olivensort (#2c301f) som tekstfarge
- Fonter: Young Serif (titler) og Bitter (brødtekst), fra Google Fonts
- Camel-felt øverst på forsiden og pianosiden, med stor tittel og et innfelt bilde som går over i kremhvit bakgrunn
- Bilder vises i gråtoner. Hero-bildene har en svak oliventone
- Oliven brukes som aksent (lenker, nummerering) og som bakgrunn på CTA-seksjonen
- Ingen tradisjonelle CTA-knapper: alle lenker er ren tekst
- Fixed transparent navbar som blir kremhvit/opak ved scroll
- Footer: navn til venstre, sosiale medier i midten, e-post til høyre
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
