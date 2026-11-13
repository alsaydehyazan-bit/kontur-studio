# AGENTS.md — Verbindliche Leitlinien für Entwickler & KI-Agenten

> **Status:** Verbindlich für alle Mitwirkenden, zukünftigen Entwickler und KI-Assistenten.  
> **Projekt:** KONTUR Studio (Hand-Tufted Art & Rug Platform)  
> **Letzte Aktualisierung:** November 2026  

---

## 1. Projektziel & Geschäftsmodell

- **Inhaber & Künstler:** 18-jähriger unabhängiger Textilkünstler mit Atelier in Deutschland (Berlin, Mitte 13357).
- **Produkte:** Handgetuftete Teppiche als 1-of-1-Unikate (Anime, Dark Fantasy, Streetwear, Urban Art) sowie maßgefertigte Auftragsarbeiten (Custom Tufting).
- **Kernmerkmale:**
  - 100% Handarbeit in Deutschland.
  - Tiefes 3D V-Groove Relief-Carving mit Spezialscheren.
  - Hochwertiges 40mm schwarzes Baumwoll-Fischgrät-Köperband (Deutsche Spitzenverarbeitung).
  - Versicherter Versand per DHL Express in die gesamte Europäische Union.
- **Aktueller Vertriebsweg:**
  - **Kein direkter Warenkorb / Checkout.**
  - Verkäufe und Anfragen werden direkt und transparent über **Instagram Direct Message** (`@kontur.studio5`) oder E-Mail abgewickelt.
- **Zukünftiger Onlineshop:**
  - Die Architektur ist strikt modular aufgebaut, sodass später Warenkorb, Checkout (Stripe), Bestandsverwaltung und Datenbank ohne Refactoring ergänzt werden können.

---

## 2. Technologischer Stack & Architektur

| Schicht | Technologie | Prinzip |
|---|---|---|
| **Framework** | Next.js 15 (App Router) | Server Components als Standard, Client Components nur bei Interaktivität (`'use client'`) |
| **Sprache** | TypeScript 5 (Strict Mode) | Konsequente Typisierung in `src/types/`, kein `any` |
| **Styling** | Tailwind CSS 3 | Warmes Cashmere-/Atelier-Designsystem (`#F4F1EA`, `#1C1917`, `#C58A18`) |
| **Lokalisierung** | `next-intl` | URL-Prefix-Routing (`/de` Standard, `/en`), zentrale JSON-Dictionaries |
| **Assets** | Next/Image | Cloudflare-kompatible unoptimized/responsive Konfiguration |
| **Hosting** | Cloudflare Workers / Pages | Kompatibilität via `@opennextjs/cloudflare` |
| **CI/CD** | GitHub Actions | Automatische Prüfung von Types, Linting und Build bei Pull Requests |

---

## 3. Verbindliche Entwicklungsregeln

### A. Produktdaten & Geschäftslogik
1. **Keine Hardcodierung in Komponenten:** Produktdaten (Preise, Maße, Bilder, Beschreibungen) dürfen **niemals** direkt in UI-Komponenten geschrieben werden. Sie gehören ausschließlich in `src/data/products.ts`.
2. **Datenbank-Bereitschaft:** Neue Produktfelder müssen über das Interface `Product` in `src/types/product.ts` definiert werden, um eine spätere PostgreSQL/Prisma-Anbindung zu gewährleisten.
3. **Keine Schein-Funktionen:** Niemals Fake-Warenkörbe oder tote Buttons anlegen. Alle Call-to-Actions leiten sauber auf das Instagram-Anfragesystem weiter.

### B. Internationalisierung (i18n)
1. Alle sichtbaren Texte müssen in `src/messages/de.json` und `src/messages/en.json` gepflegt werden.
2. Deutsch ist die primäre Standardsprache des Geschäfts.
3. Die Sprachumschaltung muss URLs und Kontext nahtlos beibehalten.

### C. Design & User Experience (UX)
1. **Marken-Ästhetik:** Warm, minimalistisch, haptisch, galerieartig. Keine generischen KI-Templates oder grelle Neonfarben.
2. **Echte Assets:** Es werden ausschließlich die realen Atelier-Produktbilder aus `public/images/` verwendet. Keine beliebigen Stockfotos erfinden.
3. **Responsivität:** Mobile First. Jedes Element muss auf Smartphones (360px+), Tablets und großen Desktops einwandfrei bedienbar sein.
4. **Keine erfundenen Bewertungen:** Keine Fake-Sterne (`★★★★★`) ohne nachweisbare Bewertungen einbauen. Vertrauen entsteht durch Transparenz, echte Detailaufnahmen und Einblicke in den Fertigungsprozess.

### D. SEO & E-E-A-T
1. Jedes Produkt besitzt eine eigene statisch generierte Detailseite (`/collection/[slug]`).
2. Strukturierte Daten nach Schema.org (`Product`, `ArtGallery`, `LocalBusiness`) müssen stets valide sein.
3. Metadaten (Title, Description, OpenGraph, Canonical, Alternates) müssen sprachspezifisch gepflegt werden.
4. Externe Fonts (Google Fonts CDN) sind aus DSGVO-Gründen verboten; System-Fonts oder lokale Font-Dateien verwenden.

### E. Sicherheit & Datenschutz
1. **Keine Secrets im Repository:** Umgebungsvariablen wie API-Keys gehören in `.env.local` und niemals in Git.
2. **Datenschutz:** Keine Tracking-Cookies oder fremde Pixel ohne vorgeschaltetes Consent-Management.

---

## 4. Git-Workflow & Qualitätskontrolle

1. **Hauptbranch:** `main`. Direktes Pushen auf `main` ist für größere Features untersagt.
2. **Feature-Branches:** Nach dem Schema `feature/<name>`, `fix/<name>` oder `docs/<name>`.
3. **Vor jedem Commit ausführen:**
   ```bash
   npm run type-check   # Muss ohne Fehler durchlaufen
   npm run build        # Produktionsbuild muss erfolgreich abschließen
   ```
4. **Aussagekräftige Commit-Nachrichten:** Conventional Commits (`feat:`, `fix:`, `refactor:`, `docs:`, `chore:`).

---

## 5. Vorbereitung des zukünftigen Onlineshops

Wenn der Shop scharf geschaltet werden soll:
1. `src/data/products.ts` durch eine Anbindung an Prisma / PostgreSQL ersetzen.
2. Das `OrderModal` durch einen Checkout-Flow (z. B. Stripe Checkout Session oder Medusa.js) austauschen.
3. Die rechtlichen Seiten (AGB, Widerrufsbelehrung, Versandkosten) um die finalen Händler- und Rückgabebestimmungen ergänzen.
4. Bestellbestätigungen via Resend / SendGrid einbinden.
