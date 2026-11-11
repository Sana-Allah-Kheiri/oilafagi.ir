# Afagi Super Service — oilafagi.ir 🛠️

Minimal home page for Afagi Super Service, Urmia (est. 1360) — auto servicing, automatic gearbox oil changes by machine, engine oil and a major oil-products shop in West Azerbaijan.

**Stack:** React 18 + Vite 5 + TypeScript + Tailwind CSS 3 + Persian RTL

## Project workflow

1. **Collect business information** from the employer, including services, products, contact channels, location, brand identity, and business propositions.
2. **Analyze requirements** and prioritize user needs, business goals, SEO, conversion, accessibility, security, maintainability, and mobile usability.
3. **Research competitors and keywords** with a SWOT-based analysis. Identify high-traffic opportunities alongside lower-difficulty local terms, especially searches combining Urmia, equipment-based service, and free-zone vehicles.
4. **Plan the content and SEO structure:** nine website pages, page-specific SEO titles and meta tags, and ten frequently asked questions.
5. **Generate the initial project structure and homepage prototype in Figma Make** using the brief below.
6. **Export the project to a local machine**, then review and refine it in VS Code with Copilot.
7. **Install, run, and verify the project** using the npm commands in the Run section.

## Features
- Sticky smart header (hides on scroll down; shows on scroll up)
- Hero with general inquiries: `09144413979` and service booking: `04433821430`
- Floating Call, WhatsApp, Instagram, Telegram, and Rubika buttons
- Dark / light themes using `dark_oilafagi_theme.json` and `light_oilafagi_theme.json`
- PWA install prompt (`vite-plugin-pwa`)
- RTL Persian interface using the Yekan Farsi font
- Design inspiration: [Macchina Home 3](https://frontdesign.ir/macchina/home-3/), [Home](https://frontdesign.ir/macchina/), and [Home 2](https://frontdesign.ir/macchina/home-2/)

## Business information

**Brand:** سوپر سرویس آفاقی — Afagi Super Service  
**Location:** ارومیه؛ تقاطع مدرس، ۵۰۰ متری خیابان استاد شهریار، جنب کوی ۱۶  
[Open location in Balad](https://balad.ir/p/%D8%B3%D9%88%D9%BE%D8%B1-%D8%B3%D8%B1%D9%88%DB%8C%D8%B3-%D8%A2%D9%81%D8%A7%D9%82%DB%8C-uromia_car-servicing-5k29DGccAyMJzN#15/37.56043/45.04746)

### Services and propositions
- Periodic maintenance for Iranian, international, and free-zone vehicles
- Automatic transmission oil changes using modern equipment
- Engine oil and filter changes
- Smart mileage reminders and a service-history file for each vehicle
- A major regional retailer of Iranian and international motor oils and lubricants

### Contact and social channels
- General inquiries: [09144413979](tel:+989144413979)
- Service booking: [04433821430](tel:+984433821430)
- Email: [oilafagi@gmail.com](mailto:oilafagi@gmail.com)
- [WhatsApp](https://wa.me/+989394413979)
- [Telegram](https://t.me/oilafaghi)
- [Rubika chat](https://rubika.ir/oilafagi)
- [Instagram](https://instagram.com/oilafagi)
- [Rubika channel](https://rubika.ir/page/oilafagi)

## SEO and content architecture

The content plan includes nine SEO-focused pages, page-specific metadata, and ten FAQs. The core page plan is:

1. **Best super service in Urmia | Afagi since 1360** — highlight the smart vehicle-mileage system.
2. **Periodic service for Iranian, international, and free-zone vehicles.**
3. **Automatic gearbox oil change by machine in Urmia** — AT, CVT, and DCT.
4. **Engine oil and filter replacement** — include pricing information for 1405.
5. **A major motor-oil sales center in West Azerbaijan.**
6–9. **Four supporting, locally targeted service and educational pages.**

Supporting blog topics include automatic gearbox repair guidance, Chinese-car and AL4 gearbox issues, and CVT fault symptoms. Use locally relevant terms such as “in Urmia” where appropriate, and direct informational articles to the relevant service pages.

### Keyword research

| Keyword / topic | Opportunity and page direction |
|---|---|
| تعمیر گیربکس اتوماتیک | Informational guide with a referral to the relevant service; avoid presenting it as a repair service if it is not offered. |
| سرویس دوره‌ای خودرو | Pillar page; review competition from [Hamrah Mechanic](https://www.hamrah-mechanic.com/mag/periodic-car-service/), [Pedal](https://www.pedal.ir/training/612412-car-maintenance-schedules/), and [Karnameh](https://karnameh.com/blog/full-car-service/). |
| سرویس دوره‌ای گیربکس اتوماتیک | Dedicated periodic-service page. |
| تعویض روغن گیربکس اتوماتیک با دستگاه | Priority service page; compare [Mr Automat](https://mrautomat.com/automatic-gearbox-oil-change) and [Gearbox Reza](https://gearbox-reza.ir/fluid-change/). |
| تعویض روغن موتور، هزینه تعویض روغن 1405 | Service and pricing page; review [Achareh](https://achareh.co/landing/periodic-services) and Digikala Service. |
| بهترین اتوسرویس / بهترین سوپرسرویس | Local homepage opportunity; review [Behtarino](https://behtarino.com/r/%D8%AA%D8%B9%D9%88%DB%8C%D8%B6-%D8%B1%D9%88%D8%BA%D9%86%DB%8C/%D8%A7%D8%B1%D9%88%D9%85%DB%8C%D9%87), [Meidane](https://meidane.com/%D8%A7%D8%B1%D9%88%D9%85%DB%8C%D9%87/%D8%A7%D8%AA%D9%88%D8%B3%D8%B1%D9%88%DB%8C%D8%B3), and [Neshan](https://neshan.org/maps/places/urmia/oil-change-services). |
| تعمیر گیربکس چینی، تعمیر گیربکس AL4، علائم خرابی CVT | Supporting educational articles with relevant service referrals. |

Keyword traffic and difficulty should be validated with SEO research tools before making performance claims.

## Figma Make prompt

Use the following prompt to generate the initial project structure and homepage prototype:

```txt
You are a senior Iranian web developer proficient in designing single-page websites in Farsi for automobile checkup services and engine oil products. Build a prototype homepage for “oilafagi.ir” using conventional website templates, industry design conventions, competitor research in Tehran, SEO keywords, contact options, services, products, and the brand design tokens below.

Prioritize best practices in this order:
1. Security
2. Conversion rate optimization (CRO)
3. SEO
4. User-friendly UI/UX and user journeys

Also consider content quality, information architecture, Persian localization (i18n/l10n), structured data and rich results, code quality and maintainability, reliability, scalability, browser and device compatibility, sustainable infrastructure, usability, trust and credibility, privacy and data protection, applicable legal and regulatory requirements, ethical design and dark-pattern prevention, observability, third-party dependency resilience, and hosting, bandwidth, and CDN costs relative to traffic.

Conventional templates:
- https://frontdesign.ir/macchina/home-3/
- https://frontdesign.ir/macchina/
- https://frontdesign.ir/macchina/home-2/

Brand:
- Persian name: سوپر سرویس آفاقی
- English name: Afagi Super Service

Services:
- Periodic vehicle services
- Automotive services
- Engine oil changes
- Periodic service for Iranian, international, and free-zone vehicles
- Automatic gearbox oil changes using modern equipment

Business propositions:
- Smart vehicle-mileage reminders and an individual service-history file for each vehicle
- A major center for Iranian and international motor oils and lubricants in West Azerbaijan

Contact options, in priority order:
- General inquiries: ۰۹۱۴۴۴۱۳۹۷۹
- Service booking: ۰۴۴۳۳۸۲۱۴۳۰
- Address: ارومیه، تقاطع مدرس، ۵۰۰ متری خیابان استاد شهریار، جنب کوی ۱۶
- Map: https://balad.ir/p/%D8%B3%D9%88%Dپر-%D8سرویس-%Dآفاقی-uromia_car-servicing-5k29DGccAyMJzN#15/37.56043/45.04746
- Email: oilafagi@gmail.com
- Telegram: https://t.me/oilafaghi
- Rubika chat: https://rubika.ir/oilafagi
- WhatsApp: https://wa.me/+989394413979

Social channels:
- Rubika: https://rubika.ir/page/oilafagi
- Instagram: https://instagram.com/oilafagi

Keyword research and content direction:
- تعمیر گیربکس اتوماتیک — create an informational guide and refer users to available services; do not imply that gearbox repairs are offered unless confirmed.
- سرویس دوره‌ای خودرو — pillar page; consider competitors Hamrah Mechanic, Pedal, and Karnameh.
- سرویس دوره‌ای گیربکس اتوماتیک — dedicated service page.
- تعویض روغن گیربکس اتوماتیک با دستگاه — priority service page; consider Mr Automat and Gearbox Reza.
- تعویض روغن موتور، هزینه تعویض روغن 1405 — service and pricing page.
- بهترین اتوسرویس / بهترین سوپرسرویس — local homepage opportunity; consider Behtarino, Meidane, and Neshan.
- تعمیر گیربکس چینی، تعمیر گیربکس AL4، علائم خرابی CVT — supporting blog topics.

Create a nine-page SEO content architecture, page-specific SEO titles and meta tags, and ten relevant FAQs. Suggested core pages:
1. Best super service in Urmia | Afagi since 1360; feature the smart mileage system.
2. Periodic service for Iranian, international, and free-zone vehicles.
3. Automatic gearbox oil change by machine in Urmia — AT, CVT, and DCT.
4. Engine oil and filter replacement, with pricing information for 1405.
5. Motor-oil sales center in West Azerbaijan.
6–9. Supporting service and educational pages, locally targeted where relevant.

Design tokens:
- Primary: #e00000
- Secondary: #703800
- Accent: #383838
- Background/surface: #ffffff
- Main text: #1a1a1a
- Success/warning: #a08e00
- Use Yekan Farsi for headings and body text instead of Inter.
- Typography: Display 36px/800/1.15; H1 28px/700/1.25; H2 22px/600/1.35; body 16px/400/1.65; small 14px/400/1.55; caption 12px/500/1.4.
- Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64px.
- Corner radii: 4, 8, 16, and 24px; full radius for pills.
- Use subtle shadows, rounded components, a corporate mood, normal density, muted colors, and strong text contrast.
- Support Persian RTL layout and responsive mobile, tablet, and desktop screens.

Keep content accurate, accessible, trustworthy, and easy to maintain. Use clear calls to action for calling, booking, messaging, and getting directions. Do not invent prices, certifications, guarantees, or services.
```

npm install
npm run dev
npm run build
npm run preview

To deploy on DirectAdmin, upload the contents of dist/ to public_html.
