# RefCodes Canada 🇨🇦

A bilingual (English/French) referral code website targeting Quebec and Canadian users. Features referral programs for Canadian financial and telecom services.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000 in your browser
```

## 📋 Features

### ✅ Completed
- **Bilingual Support**: Full English/French localization with next-intl
- **Responsive Design**: Mobile-first Tailwind CSS with custom grey color palette
- **SEO Optimized**: Structured data (JSON-LD), sitemap.xml, meta tags
- **Referral Programs**: 
  - Wealthsimple (Code: EYP3LM) - Full implementation
  - Fizz (Coming Soon) - Placeholder ready for code
- **Content Management**: JSON-based content for easy updates
- **Modern Stack**: Next.js 14, TypeScript, Tailwind CSS

### 🎯 Current Referral Codes
- **Wealthsimple**: `EYP3LM` (Active)
- **Fizz**: `COMING_SOON` (Placeholder - update when available)

## 📁 Project Structure

```
├── app/
│   ├── [locale]/              # Bilingual routes (en/fr)
│   │   ├── page.tsx           # Homepage
│   │   ├── banking/           # Banking category
│   │   ├── telecom/           # Telecom category  
│   │   ├── referral/[slug]/   # Individual referral pages
│   │   └── ...
│   ├── sitemap.ts             # Dynamic sitemap generation
│   └── robots.ts              # SEO robots.txt
├── components/
│   ├── ui/                    # Reusable UI components
│   ├── layout/                # Layout components
│   ├── referral/              # Referral-specific components
│   └── seo/                   # SEO components
├── content/
│   ├── referrals/
│   │   ├── en/                # English referral data
│   │   └── fr/                # French referral data
├── lib/                       # Utility functions
├── messages/                  # UI translations
└── types/                     # TypeScript definitions
```

## 🔧 Configuration

### Environment Variables
Currently using placeholder domain `refcodes.ca` in `lib/constants.ts`. Update when domain is available.

### Adding New Referrals
1. Add referral code to `REFERRAL_CODES` in `lib/constants.ts`
2. Create JSON files in `content/referrals/en/` and `content/referrals/fr/`
3. Update category pages if needed

### Language Switching
The language switcher preserves the current page context when switching between English and French.

## 🎨 Design System

### Colors
- **Primary**: Grey scale (#374151, #1f2937, #111827)
- **Secondary**: Medium grey (#6b7280, #9ca3af)
- **Background**: White (#ffffff, #f9fafb)
- **Accent**: Blue (#2563eb) for CTAs, Emerald (#059669) for success

### Typography
- **Font**: Inter (Google Fonts)
- **Scale**: Responsive from 14px to 40px+

## 🚀 Deployment

### Vercel (Recommended)
1. Connect repository to Vercel
2. Auto-deployment on git push
3. Environment variables handled in dashboard

### Manual Build
```bash
npm run build
npm start
```

## 📱 Mobile Responsive
- Mobile-first design approach
- Responsive grid layouts
- Touch-friendly buttons and interactions
- Optimized for Core Web Vitals

## 🔍 SEO Features
- Dynamic meta tags per page
- Structured data (JSON-LD) for search engines
- Automatic sitemap.xml generation
- Robots.txt configuration
- OpenGraph and Twitter Card support

## 📄 Content Updates

### Updating Referral Codes
1. Edit JSON files in `content/referrals/`
2. Update `REFERRAL_CODES` in `lib/constants.ts`
3. Deploy - changes take effect immediately

### Adding Blog Posts
- Ready for MDX blog posts in `content/blog/`
- Bilingual blog support included

## 🔒 Privacy & Legal
- Comprehensive privacy policy and affiliate disclosure
- GDPR-compliant (no personal data collection)
- Clear referral relationship disclosure

## 🛠️ Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Internationalization**: next-intl
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## 📞 Support
- All referral codes personally tested and verified
- Regular updates to ensure accuracy
- Bilingual customer support ready

---

**Ready to launch!** 🚀 Update the Fizz referral code when available and deploy to Vercel.