# KONTUR Studio — Hand-Tufted Art & Rug Platform

Willkommen im offiziellen Repository von **KONTUR Studio** – einem unabhängigen Atelier für handgefertigte Teppichkunst (Handmade in Germany).

Dieses Projekt ist eine moderne **Next.js (App Router)** Plattform mit vollständiger Mehrsprachigkeit (**Deutsch & Englisch** via `next-intl`), responsivem Galerie-Design, SEO-Architektur, Instagram-Verkaufsprozess und Vorbereitung auf einen modularen Onlineshop.

---

## 🛠 Tech Stack

- **Framework:** Next.js 15 (App Router, Server Components Standard)
- **Sprache:** TypeScript 5 (Strict Mode)
- **Styling:** Tailwind CSS 3 (Warmes Minimalistisches Atelier-Designsystem)
- **Internationalisierung (i18n):** `next-intl` (URL-basiertes Routing `/de` & `/en`)
- **Icons:** `lucide-react`
- **Deployment:** Cloudflare Workers via `@opennextjs/cloudflare` & Wrangler
- **CI/CD:** GitHub Actions (TypeScript-Check, Linting, Production Build)

---

## 📂 Projektstruktur

```
rug-website/
├── public/                 # Statische Assets & optimierte Produktbilder
│   └── images/             # Originale Galerien (Berserk, Gengar, Banksy, Wasted)
├── src/
│   ├── app/
│   │   ├── [locale]/       # Lokalisierte Routen (de & en)
│   │   │   ├── page.tsx    # Startseite (Hero, Collection, Craft, Custom, About, FAQ)
│   │   │   ├── collection/ # Übersicht aller Teppich-Unikate
│   │   │   │   └── [slug]/ # Indexierbare Produktdetailseite
│   │   │   ├── custom/     # Custom Commissions & Live-Preiskalkulator
│   │   │   ├── about/      # Über den 18-jährigen Künstler & Atelier-Manifest
│   │   │   ├── faq/        # FAQ Accordion (Köperband, EU-Versand, Pflege)
│   │   │   ├── contact/    # Kontaktkanäle (Instagram DM & E-Mail)
│   │   │   └── legal/      # Rechtliche Pflichtseiten (Impressum, Datenschutz, AGB)
│   │   ├── globals.css     # Tailwind Basisstile & Farbvariablen
│   │   ├── robots.ts       # Dynamische robots.txt
│   │   └── sitemap.ts      # Dynamische mehrsprachige XML-Sitemap
│   ├── components/         # Modulare React-Komponenten
│   │   ├── layout/         # Header, Footer, AnnouncementBar, LanguageSwitcher
│   │   ├── ui/             # Button, Badge, OrderModal (Instagram DM)
│   │   ├── collection/     # ProductCard mit Modal-Trigger
│   │   ├── custom/         # CustomCalculator mit Live-Preisen & Stufen
│   │   └── home/           # FaqAccordion
│   ├── data/
│   │   ├── products.ts     # Zentrale Produktdatenbank (TypeScript)
│   │   └── siteConfig.ts   # Globale Studio-Konfiguration & Social Links
│   ├── i18n/               # next-intl Routing- und Request-Konfiguration
│   ├── messages/           # Übersetzungsdateien (de.json & en.json)
│   └── types/              # TypeScript Interfaces (Product, CustomTier etc.)
├── .github/workflows/      # GitHub Actions CI Workflow
├── legacy_backup/          # Archivierte Original-HTML/CSS/JS-Dateien
├── wrangler.toml           # Cloudflare Worker Deployment-Konfiguration
├── AGENTS.md               # Richtlinien für zukünftige Entwickler & KI-Agenten
├── PROJECT_DOCUMENTATION.md# Ausführliche Architektur- & Rechtliche Dokumentation
└── LAUNCH_CHECKLIST.md     # Checkliste für den Livegang
```

---

## 🚀 Erste Schritte für Entwickler

### 1. Voraussetzungen

- **Node.js:** Version 20.x oder 22.x LTS (empfohlen: Node 22)
- **Paketmanager:** npm (ab v10) oder pnpm
- **Git:** Installiert und im PATH

### 2. Repository klonen & Abhängigkeiten installieren

```bash
git clone <repository-url>
cd rug-website
npm install
```

### 3. Umgebungsvariablen einrichten

Kopiere die `.env.example` Datei nach `.env.local`:

```bash
cp .env.example .env.local
```

Passe die Variablen in `.env.local` an:
- `NEXT_PUBLIC_MERCHANT_FULL_NAME` (Rechtlich zwingend für das Impressum)
- `NEXT_PUBLIC_MERCHANT_STREET`
- `NEXT_PUBLIC_MERCHANT_PHONE`
- `NEXT_PUBLIC_TAX_ID` (Sofern USt-IdNr. vorhanden)

### 4. Lokalen Entwicklungsserver starten

```bash
npm run dev
```

Die Website ist unter `http://localhost:3000` erreichbar.

---

## 📦 Build & Test-Befehle

| Befehl | Beschreibung |
|---|---|
| `npm run dev` | Startet den Next.js Entwicklungsserver mit Hot Reloading |
| `npm run type-check` | Führt die strikte TypeScript-Typprüfung ohne Emit aus (`tsc --noEmit`) |
| `npm run lint` | Prüft den Code mit ESLint |
| `npm run build` | Erstellt den optimierten Next.js Produktions-Build |
| `npm run start` | Startet den erstellten Produktions-Server lokal |
| `npm run build:worker` | Erstellt das Cloudflare Worker Bundle via OpenNext |

---

## 🌐 Mehrsprachigkeit (i18n)

Die Lokalisierung wird über `next-intl` gesteuert:
- **Standardsprache:** Deutsch (`/` oder `/de/...`)
- **Englisch:** `/en/...`
- **Übersetzungsdateien:** `src/messages/de.json` und `src/messages/en.json`

Texte dürfen niemals direkt in UI-Komponenten hardcodiert werden. Verwende immer die `useTranslations` Hooks.

---

## 🛍 E-Commerce & Instagram-Workflow

Aktuell besitzt die Website **keinen automatisierten Checkout**, um Vertrauen aufzubauen, individuelle Beratung zu ermöglichen und rechtliche Shop-Hürden modular vorzubereiten:

1. Besucher wählt ein Produkt aus oder konfiguriert einen Wunsch-Teppich.
2. Der Klick auf **"Über Instagram anfragen"** öffnet ein Modal mit einem vorausgefüllten Anfragetext.
3. Der Text wird mit einem Klick in die Zwischenablage kopiert und `@kontur.studio5` auf Instagram geöffnet.
4. Alle Produktdaten sind in `src/data/products.ts` strukturiert, sodass später eine PostgreSQL-Datenbank oder Stripe-Checkout nahtlos angebunden werden kann.

---

## ☁️ Cloudflare Deployment

Das Hosting erfolgt über **Cloudflare Workers / Pages** mit `@opennextjs/cloudflare`.

Detaillierte Schritte findest du in [PROJECT_DOCUMENTATION.md](file:///c:/Users/yazan/OneDrive/Desktop/rug-website/PROJECT_DOCUMENTATION.md).
Kurzform:
1. GitHub-Repository mit Cloudflare Pages/Workers verbinden.
2. Build Command: `npx @opennextjs/cloudflare`
3. Umgebungsvariablen im Cloudflare Dashboard hinterlegen.

---

## 📄 Lizenz & Urheberrecht

© KONTUR Studio. Alle Rechte vorbehalten. Handgefertigt in Deutschland.
