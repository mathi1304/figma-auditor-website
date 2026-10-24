# Figma Auditor Marketing Website

Production-ready marketing website for **Figma Auditor**, a Figma plugin that audits design files and displays component usage (unused components, duplicate masters, malformed variants, and detached instances). Built for freelance designers and design agencies in the US and EU.

Built with **Next.js 14 (App Router)**, **Tailwind CSS**, and **TypeScript**. Fully static-optimized and ready for immediate deployment to **Vercel**.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Locally in Development Mode
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Contact Form
The contact form opens the visitor's default email app with `figmaauditor@gmail.com` as the recipient and the entered message as the email body. The visitor must send the email from that app.

### 3. Production Build & Test
```bash
npm run build
npm run start
```

---

## ⚙️ Configuration & Placeholders

All customizable placeholders (support email, Figma community URL, legal entity name, and pricing details) are consolidated in **a single configuration file**:

📁 [`src/config/site.ts`](src/config/site.ts)

### Placeholders to replace before launch:

| Constant / Property | Default Value | Description |
| :--- | :--- | :--- |
| `SUPPORT_EMAIL` | `figmaauditor@gmail.com` | Your customer support inbox |
| `COMPANY_LEGAL_NAME` | `[YOUR_LEGAL_ENTITY_NAME_OR_YOUR_NAME]` | Your registered LLC, Ltd, or personal legal name |
| `COMPANY_COUNTRY` | `[YOUR_COUNTRY_OR_STATE]` | Country/state jurisdiction for legal governing law |
| `COMPANY_ADDRESS` | `[YOUR_REGISTERED_BUSINESS_ADDRESS]` | Registered mailing address shown in Terms & Privacy |
| `SITE_URL` | `https://figmaauditor.com` | Production website domain (used for SEO & canonical URLs) |

---

## 📄 Site Structure & Pages

| Route | Page | Description |
| :--- | :--- | :--- |
| `/` | **Home** | Hero, interactive plugin audit mockup, 6 core feature cards, 3-step workflow, 6-item FAQ accordion, final conversion CTA |
| `/pricing` | **Pricing** | 4 plans (Free $0, Pay-as-you-go Scan $9, Pro $29/mo, Agency $69/mo), billing disclosures, detailed comparison matrix |
| `/terms` | **Terms of Service** | Comprehensive terms in plain English covering licensing, Figma API disclaimer, billing, and limitations |
| `/privacy` | **Privacy Policy** | Explains metadata-only inspection, Supabase backend storage, Merchant of Record billing, no-selling guarantee, and GDPR rights |
| `/refund` | **Refund Policy** | Clear 7-day money-back guarantee for subscriptions, one-time scan terms, and email request walkthrough |
| `/contact` | **Contact** | Support email, response time (24–48 hours), interactive contact form with instant validation feedback |
| `/sitemap.xml` | **XML Sitemap** | Dynamic sitemap generated at build time with priority indexing |
| `/robots.txt` | **Robots.txt** | Crawler directives pointing to sitemap |
| `/icon.svg` | **Favicon & Icon** | Sharp vector branded icon for modern browsers and mobile home screens |

---

## ☁️ Deploy to Vercel

### Option A: Via GitHub (Recommended)
1. Push this repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete Figma Auditor marketing site"
   git push origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **"Add New..."** &rarr; **"Project"**.
4. Import your `figma-auditor` GitHub repository.
5. Keep default settings (`Framework Preset: Next.js`, `Root Directory: ./`).
6. Click **Deploy**. Vercel will automatically build the static pages and deploy to global edge CDN in under 1 minute.

### Option B: Via Vercel CLI
```bash
npm install -g vercel
vercel
```
Follow the interactive CLI prompts to deploy directly from your local terminal.
