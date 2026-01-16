# Lucky Link LLC - Digital Advertising & Promotional Services

A production-ready Next.js website for Lucky Link LLC, a Wyoming-based digital advertising and promotional services company.

## 🌟 Features

- **Modern Tech Stack**: Next.js 14 (App Router), TypeScript, TailwindCSS, shadcn/ui
- **Responsive Design**: Mobile-first approach with excellent accessibility
- **SEO Optimized**: Meta tags, OpenGraph, sitemap, robots.txt
- **Analytics Ready**: GA4 and Meta Pixel placeholders configured
- **Legal Pages**: Complete Terms of Service, Privacy Policy, and Official Rules
- **Contact Form**: Working contact form with validation
- **Blog**: Dynamic blog with 5 articles
- **Compliance-First**: All content adheres to promotional marketing regulations

## 📋 Prerequisites

- Node.js 18+ (Note: Next.js 16 requires Node.js 20+, but this project works with 18+)
- npm, yarn, or pnpm

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2. Set Up Environment Variables

Create a `.env.local` file:

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your configuration:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://luckylink.com

# Analytics (Optional)
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
NEXT_PUBLIC_META_PIXEL_ID=

# Email Service (Choose one for production)
# Option 1: Resend
RESEND_API_KEY=re_xxxxxxxxxxxxx

# Option 2: SendGrid
SENDGRID_API_KEY=SG.xxxxxxxxxxxxx

# Contact Email
CONTACT_EMAIL=business@luckylink.com
```

### 3. Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

### Start Production Server

```bash
npm start
# or
yarn start
# or
pnpm start
```

## 🏗️ Project Structure

```
luckyland/
├── app/
│   ├── about/              # About page
│   ├── api/
│   │   └── contact/        # Contact form API route
│   ├── blog/
│   │   ├── [slug]/         # Dynamic blog post pages
│   │   └── page.tsx        # Blog listing page
│   ├── contact/            # Contact page
│   ├── privacy/            # Privacy policy page
│   ├── programs/           # Programs page
│   ├── rules/              # Official rules page
│   ├── services/           # Services page
│   ├── terms/              # Terms of service page
│   ├── layout.tsx          # Root layout with analytics
│   ├── page.tsx            # Home page
│   ├── sitemap.ts          # Dynamic sitemap
│   └── robots.ts           # Robots.txt
├── components/
│   ├── forms/
│   │   └── contact-form.tsx    # Contact form component
│   ├── layout/
│   │   ├── footer.tsx          # Footer component
│   │   ├── navbar.tsx          # Navigation component
│   │   ├── page-wrapper.tsx    # Page wrapper component
│   │   └── cookie-banner.tsx   # Cookie consent banner
│   ├── legal/
│   │   └── cookie-banner.tsx   # Cookie consent component
│   └── ui/                    # shadcn/ui components
├── lib/
│   ├── constants/
│   │   ├── site.ts            # Site-wide constants
│   │   └── legal.ts           # Legal disclosures and constants
│   ├── data/
│   │   └── blog-posts.ts      # Blog post data
│   ├── analytics.ts           # Analytics configuration
│   ├── hooks/                 # Custom React hooks
│   ├── i18n.ts                # Internationalization
│   ├── types.ts               # TypeScript types
│   └── utils.ts               # Utility functions
├── public/                    # Static assets
├── .env.example               # Environment variables template
├── next.config.js             # Next.js configuration
├── tailwind.config.js         # TailwindCSS configuration
├── tsconfig.json              # TypeScript configuration
└── package.json               # Dependencies and scripts
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

This Next.js app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Digital Ocean App Platform
- Self-hosted with Docker

## 📧 Email Configuration

To enable email sending for the contact form, choose one of the following:

### Option 1: Resend (Recommended)

1. Install Resend:
```bash
npm install resend
```

2. Add to `.env.local`:
```env
RESEND_API_KEY=re_xxxxxxxxxxxxx
```

3. Uncomment the Resend section in `app/api/contact/route.ts`

### Option 2: SendGrid

1. Install SendGrid:
```bash
npm install @sendgrid/mail
```

2. Add to `.env.local`:
```env
SENDGRID_API_KEY=SG.xxxxxxxxxxxxx
```

3. Uncomment the SendGrid section in `app/api/contact/route.ts`

## 📊 Analytics

### Google Analytics 4

Add your GA4 Measurement ID to `.env.local`:
```env
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
```

### Meta Pixel

Add your Meta Pixel ID to `.env.local`:
```env
NEXT_PUBLIC_META_PIXEL_ID=your-pixel-id
```

## 🌍 Internationalization (i18n)

The project includes i18n structure for English (EN) and Ukrainian (UA). Currently implemented:

- Translation file: `lib/i18n.ts`
- Language switcher in navbar (UI only)
- Locale constants: `lib/constants/site.ts`

To fully implement i18n:
1. Install next-intl or similar package
2. Create translation files for all content
3. Add locale parameter to routes
4. Update components to use translations

## ✅ Compliance Checklist

This website has been built with compliance in mind:

- [x] No gambling/betting terminology
- [x] "No purchase necessary" statements present throughout
- [x] Alternative Method of Entry (AMOE) information
- [x] Clear Official Rules page
- [x] Terms of Service page
- [x] Privacy Policy page
- [x] Contact information easily accessible
- [x] Void where prohibited disclaimers
- [x] Clear business description (advertising/promotional services)
- [x] Proper age and eligibility disclosures
- [x] Winner selection process transparency
- [x] Data protection and privacy compliance

## 🎨 Design System

The site uses shadcn/ui components with TailwindCSS:

- **Colors**: Neutral with primary accent
- **Typography**: Inter font family
- **Components**: Pre-built accessible components
- **Dark Mode**: Supported (can be enabled)

## 🛠️ Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📝 License

This project is proprietary software for Lucky Link LLC.

## 🤝 Support

For questions or issues:
- Email: support@luckylink.com
- Website: https://lucky1ink.com

---


