# LAUNCH_CHECKLIST.md — Checkliste für den Livegang

Verwende diese Checkliste vor dem offiziellen Rollout der Website auf deiner Hauptdomain.

---

## 🔴 Zwingende Aufgaben (Vor Veröffentlichung erforderlich)

### 1. Rechtliche Angaben im Impressum
- [ ] **Bürgerlicher Name:** In `.env.local` bzw. Cloudflare Environment Variables `NEXT_PUBLIC_MERCHANT_FULL_NAME` mit deinem echten Vor- und Zunamen belegen.
- [ ] **Ladungsfähige Anschrift:** `NEXT_PUBLIC_MERCHANT_STREET` (Straße und Hausnummer) eintragen (Postfächer sind nach § 5 DDG nicht ausreichend).
- [ ] **Telefonnummer:** `NEXT_PUBLIC_MERCHANT_PHONE` mit einer erreichbaren geschäftlichen Rufnummer hinterlegen.
- [ ] **Steuerstatus:** Prüfen, ob eine USt-IdNr. vorliegt oder die Kleinunternehmerregelung nach § 19 UStG greift.
- [ ] **Verpackungsgesetz (LUCID):** Bei der Stiftung Zentrale Stelle Verpackungsregister (LUCID) registrieren und Systembeteiligungsvertrag abschließen (Pflicht für den gewerblichen Warenversand in DE).

### 2. Social Links & Kontakt
- [ ] Testen, ob der Instagram-Link (`@kontur.studio5`) auf Desktop und Mobilgeräten direkt die Instagram-App öffnet.
- [ ] Testen der E-Mail-Adresse `Kontur.studio11@gmail.com` mit einer Test-Nachricht.

### 3. Cloudflare Deployment & DNS
- [ ] GitHub Repository mit Cloudflare verbinden.
- [ ] Umgebungsvariablen (`NEXT_PUBLIC_*`) im Cloudflare Dashboard hinterlegen.
- [ ] Domain aufschalten und DNS-Einträge (CNAME/A) überprüfen.
- [ ] SSL/TLS-Status auf "Full (strict)" in Cloudflare einstellen.

---

## 🟡 Technische & SEO-Prüfungen (Empfohlen)

### 4. Funktionale Tests
- [ ] **Sprachumschalter:** Funktioniert der Wechsel zwischen DE und EN auf der Startseite, Kollektion, Custom-Seite und Detailseiten reibungslos?
- [ ] **Custom-Kalkulator:** Lassen sich alle Stufen (60cm, 100cm, 140cm, 180cm) und Stile anklicken und wird der Preis korrekt berechnet?
- [ ] **Order Modal:** Funktioniert das Kopieren der Nachricht in die Zwischenablage und das Öffnen des Chats auf Smartphones?
- [ ] **Produktdetailseiten:** Werden alle 4 Teppiche (`/collection/berserk-brand-of-sacrifice`, `/collection/gengar-shadow-form`, etc.) fehlerfrei mit allen Detailfotos angezeigt?

### 5. SEO & Social Sharing
- [ ] Prüfen der `sitemap.xml` im Browser unter `https://deine-domain.com/sitemap.xml`.
- [ ] Prüfen der `robots.txt` unter `https://deine-domain.com/robots.txt`.
- [ ] Google Search Console einrichten und die Sitemap einreichen.
- [ ] Social Preview Testen (z. B. auf Facebook Sharing Debugger oder Twitter Card Validator).

### 6. Mobile & Performance
- [ ] Google PageSpeed Insights oder Lighthouse-Test durchführen (Ziel: Performance 95+, SEO 100).
- [ ] Layout auf kleineren Smartphones (z. B. iPhone SE, 375px Breite) auf Umbrüche prüfen.

---

## 🟢 Zukünftige Shop-Aktivierung (Roadmap)

Wenn aus der Preview-Plattform ein vollautomatisierter Onlineshop werden soll:
- [ ] Stripe-Account oder PayPal für Zahlungsabwicklung anbinden.
- [ ] PostgreSQL-Datenbank aufsetzen und Prisma einrichten.
- [ ] Automatisierte Bestellbestätigungs-Mails via Resend implementieren.
- [ ] Finale AGB mit vollständiger Widerrufsbelehrung anwaltlich gegenprüfen lassen.
