# Ausführliche Technische Projektdokumentation

**Projekt:** KONTUR Studio — Website Relaunch & E-Commerce Migration  
**Architektur:** Next.js 15 (App Router) + TypeScript + Tailwind CSS + next-intl + Cloudflare  
**Datum:** November 2026  

---

## 1. Analyse des ursprünglichen Projekts

Die ursprüngliche Website basierte auf klassischem statischem HTML5, einer monolithischen CSS-Datei (`style.css`, 2.533 Zeilen) und einem Vanilla JavaScript Skript (`script.js`, 528 Zeilen).

### Festgestellte Stärken:
- Ausgezeichnetes, stimmiges Designkonzept (warmes Cashmere-Farbschema `#F4F1EA`, edles Charcoal `#1C1917`, Honiggold `#C58A18`).
- Hervorragende, authentische Produktbilder der 4 Teppiche (Berserk, Gengar, Banksy, Wasted) inklusive Makro-Aufnahmen der Schnitzdetails und Rückseite.
- Durchdachter 4-Stufen-Kalkulator für Custom Tufting mit realistischer Preisstaffelung.
- Vollständige Sicherung der Alt-Dateien im Verzeichnis `legacy_backup/` und im initialen Git-Commit.

### Identifizierte Defizite der Alt-Lösung:
1. **Keine Internationalisierung:** Nur auf Englisch verfasst, obwohl der Betreiber und das Atelier in Deutschland ansässig sind.
2. **Keine Einzelseiten:** Sämtliche Inhalte lagen auf einer einzigen Single-Page ohne indexierbare Produktunterseiten für Google.
3. **DSGVO-Verstöße:** Externe Einbindung von Google Fonts über CDN-Links ohne Einwilligung.
4. **Fehlende Rechtspflichten:** Kein Impressum nach § 5 DDG, keine Datenschutzerklärung nach DSGVO.
5. **Kein Framework:** Keine Skalierbarkeit, keine Typsicherheit, keine Build-Optimierung.

---

## 2. Neue Systemarchitektur

Das Projekt wurde vollständig auf **Next.js 15 mit App Router** migriert:

### A. Routing-Architektur (`src/app/[locale]/`)
- `/[locale]` → Startseite mit Hero, Kollektions-Vorschau, Handwerks-Pfeilern, Custom-Kalkulator, Über-mich und FAQ.
- `/[locale]/collection` → Vollständige Kollektionsübersicht.
- `/[locale]/collection/[slug]` → **Individuelle, suchmaschinenindexierbare Produktdetailseite** pro Teppich (`generateStaticParams`).
- `/[locale]/custom` → Dedizierte Custom-Tufting-Seite mit interaktivem Konfigurator.
- `/[locale]/about` → Vertrauensbildende Story des 18-jährigen Gründers und Atelier-Manifest.
- `/[locale]/faq` → Detaillierte Fragen zu Köperband, Fertigung, Pflege und EU-Versand.
- `/[locale]/contact` → Direkter Draht via Instagram DM und E-Mail.
- `/[locale]/legal/impressum` → Gesetzliches Impressum nach § 5 DDG.
- `/[locale]/legal/privacy` → Datenschutzerklärung nach DSGVO/TDDDG (100% lokal ohne Tracking-Cookies).
- `/[locale]/legal/terms` → AGB mit rechtlicher Einordnung (kein automatisierter Checkout, § 312g BGB bei Maßanfertigungen).

---

## 3. Datenverwaltung & Shop-Vorbereitung

Die Daten liegen in `src/data/products.ts` und basieren auf TypeScript-Typen aus `src/types/product.ts`.

### Datenstruktur eines Produkts:
```typescript
export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  formattedPrice: string;
  currency: string;
  category: { de: string; en: string };
  badge: { de: string; en: string };
  dimensions: string;
  description: { de: string; en: string };
  detailedDescription?: { de: string; en: string };
  specs: ProductSpecs;
  images: ProductImage[];
  featured: boolean;
}
```

**Vorbereitung für den späteren Shop:**
- Zur Anbindung von Prisma/PostgreSQL muss lediglich die Abfrage in `getAllProducts()` und `getProductBySlug()` von statischen Arrays auf Prisma Client Queries (`prisma.product.findMany()`) umgestellt werden.
- Die Call-to-Action-Buttons in `DetailActions.tsx` und `ProductCard.tsx` können modular um einen "In den Warenkorb"-Button ergänzt werden.

---

## 4. Internationalisierung (i18n)

Implementiert mit `next-intl`:
- **Routing:** Automatische Spracherkennung des Browsers beim Erstbesuch; manuelle Sprachumschaltung (`LanguageSwitcher.tsx`) speichert die Präferenz.
- **Routen:** Standardmäßig Deutsch auf `/`, Englisch auf `/en/...`.
- **Übersetzungsdateien:** `src/messages/de.json` und `src/messages/en.json`.

---

## 5. SEO- und Performance-Implementierung

1. **Metadaten:** Dynamisch generiert über `generateMetadata` in jedem Routen-Segment mit Titel, Beschreibung, OpenGraph und Canonicals.
2. **Mehrsprachiges SEO:** Korrekte `alternates.languages` (hreflang) Verlinkung für Deutsch und Englisch.
3. **Strukturierte Daten (JSON-LD):**
   - Auf der Startseite: Schema.org `ArtGallery` und `LocalBusiness`.
   - Auf jeder Produktdetailseite: Schema.org `Product` mit Angebot, Preis, Währung und Verfügbarkeit.
4. **Sitemap & Robots:**
   - `src/app/sitemap.ts` generiert automatisch alle statischen und dynamischen Produkt-URLs für beide Sprachen.
   - `src/app/robots.ts` erlaubt das Crawling aller öffentlichen Routen.
5. **Datenschutzkonforme Schriften:** Keine externen Google Fonts Server. Stattdessen werden performante System-Fonts bzw. standardisierte Tailwind-Schriftstapel geladen.

---

## 6. Rechtliche Analyse & Offene Angaben

### Bereits umgesetzt:
- **Impressum (§ 5 DDG):** Vollständig strukturiert mit Anbieterkennzeichnung, Kontakt, Haftungsausschluss und OS-Plattform.
- **Datenschutz (DSGVO):** Keine Drittanbieter-Tracker, keine Cookies, sichere Server-Logs via Cloudflare, Aufklärung über Instagram-Verlinkung.
- **AGB / Verbraucherrecht:** Klarstellung des aktuellen Anfrageprozesses (kein Shop), Vorbereitung auf das Widerrufsrecht und Ausnahme bei Maßanfertigungen gem. § 312g Abs. 2 Nr. 1 BGB.

### ⚠️ Offene Angaben, die vor dem Livegang eingetragen werden müssen:
1. `NEXT_PUBLIC_MERCHANT_FULL_NAME`: Vollständiger bürgerlicher Vor- und Zuname des 18-jährigen Betreibers.
2. `NEXT_PUBLIC_MERCHANT_STREET`: Genaue Anschrift des Ateliers / Wohnsitzes (Straße & Hausnummer).
3. `NEXT_PUBLIC_MERCHANT_PHONE`: Gültige geschäftliche Telefonnummer für das Impressum.
4. `NEXT_PUBLIC_TAX_ID`: Steuer-Identifikationsnummer bzw. USt-IdNr. (oder Hinweis auf Kleinunternehmerregelung § 19 UStG belassen).
5. **Verpackungsgesetz (LUCID):** Vor dem ersten Versand physischer Kartons an Endkunden in Deutschland muss eine kostenlose Registrierung bei der ZSVR (LUCID) und ein duales Entsorgungssystem gebucht werden.

---

## 7. Cloudflare Deployment-Anleitung

Die Plattform ist vollständig kompatibel mit **Cloudflare Workers / Pages** via `@opennextjs/cloudflare`.

### Schritt-für-Schritt-Anleitung:

1. **Git Repository auf GitHub pushen:**
   ```bash
   git remote add origin https://github.com/<user>/<repo>.git
   git push -u origin main
   ```

2. **Cloudflare Dashboard:**
   - Logge dich auf [dash.cloudflare.com](https://dash.cloudflare.com) ein.
   - Navigiere zu **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
   - Wähle dein GitHub-Repository aus.

3. **Build-Einstellungen konfigurieren:**
   - **Framework Preset:** None / Next.js
   - **Build Command:** `npx @opennextjs/cloudflare`
   - **Build output directory:** `.open-next/assets`
   - **Node.js Compatibility Flag:** `nodejs_compat` aktivieren.

4. **Umgebungsvariablen im Cloudflare Dashboard:**
   - `NEXT_PUBLIC_SITE_URL`: `https://deine-domain.de`
   - `NEXT_PUBLIC_MERCHANT_FULL_NAME`: Dein Name
   - `NEXT_PUBLIC_MERCHANT_STREET`: Deine Straße
   - `NEXT_PUBLIC_MERCHANT_PHONE`: Deine Telefonnummer
   - `NEXT_PUBLIC_CONTACT_EMAIL`: `Kontur.studio11@gmail.com`

5. **Eigene Domain verbinden:**
   - Unter **Custom Domains** deine Domain eintragen. Cloudflare richtet automatisch das kostenlose SSL-Zertifikat und weltweites Caching ein.
