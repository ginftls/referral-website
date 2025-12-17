# 🧪 Live Website Testing Checklist

## Visual Elements
- [ ] Canadian flag appears in header
- [ ] Wealthsimple logo displays correctly  
- [ ] Page loads without broken images
- [ ] Responsive design works on mobile/tablet/desktop

## Functionality Testing
- [ ] Language switch (EN/FR) works properly
- [ ] Referral code EYP3LM displays correctly
- [ ] "Copy Code" button functions
- [ ] All links open correctly (especially Wealthsimple signup)
- [ ] Smooth scrolling to sections works
- [ ] Form submissions work (if any)

## Content Verification  
- [ ] All text displays in both languages
- [ ] Referral code is correct: EYP3LM
- [ ] Wealthsimple signup link: https://www.wealthsimple.com/invite/EYP3LM
- [ ] Bonus amounts are accurate ($25 minimum, up to $3,000)
- [ ] Contact info/footer links work

## Performance & SEO
- [ ] Page loads quickly (< 3 seconds)
- [ ] SEO meta tags are present
- [ ] Mobile-friendly test passes
- [ ] No console errors in browser DevTools
- [ ] Images optimize and load properly

## Cross-Browser Testing
- [ ] Chrome/Chromium
- [ ] Firefox  
- [ ] Safari
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)

## Conversion Testing
- [ ] Referral link tracking works
- [ ] Analytics tracking (if implemented)
- [ ] Affiliate disclosure is visible
- [ ] Call-to-action buttons are prominent

## Security & Privacy
- [ ] HTTPS enabled (SSL certificate)
- [ ] No sensitive data exposed
- [ ] External links open in new tabs
- [ ] Privacy policy accessible (if required)

---

## Quick Deployment Commands

### Netlify (Fastest)
1. Go to netlify.com
2. Drag & drop the `/docs` folder
3. Get instant live URL

### Vercel (Next.js)
```bash
npm install -g vercel
vercel --prod
```

### GitHub Pages
1. Push to GitHub
2. Settings → Pages → Source: /docs
3. Live at username.github.io/repo-name

---

## Testing URLs to Check

Once live, test these specific pages:
- `/` - Homepage
- `/en` - English homepage  
- `/fr` - French homepage
- `/en/banking` - Banking page
- Direct Wealthsimple link functionality

## Mobile Testing
Use Chrome DevTools device emulation to test:
- iPhone 12/13/14
- Samsung Galaxy S21
- iPad
- Small desktop (1024px)