# 🌐 Custom Domain Setup Guide

## Option 1: Buy Domain & Connect to Vercel (Recommended)

### Step 1: Buy a Domain
Choose a domain that's SEO-friendly for your referral business:

**Suggested Domain Names:**
- `wealthsimple-codes.com` 
- `canadian-referrals.com`
- `refcodes-canada.com` 
- `eyp3lm.com` (short & memorable)
- `canada-bonuses.com`

**Where to Buy:**
- **Namecheap** (cheapest, ~$10/year)
- **GoDaddy** (popular, ~$12/year) 
- **Google Domains** (reliable, ~$12/year)

### Step 2: Connect Domain to Vercel

1. **In Vercel Dashboard:**
   - Go to your project: `referral-website`
   - Click "Settings" tab
   - Click "Domains" in sidebar
   - Click "Add Domain"
   - Enter your domain (e.g., `wealthsimple-codes.com`)

2. **Configure DNS:**
   - Vercel will show you DNS records to add
   - Go to your domain provider (Namecheap/GoDaddy)
   - Add these DNS records:
     ```
     Type: A Record
     Name: @
     Value: 76.76.19.61
     
     Type: CNAME  
     Name: www
     Value: cname.vercel-dns.com
     ```

3. **Wait for Verification:**
   - Takes 24-48 hours to propagate
   - Vercel will auto-verify and enable HTTPS

---

## Option 2: Free Subdomain (Instant)

### Use a Free Service:
- **Freenom**: Get `.tk`, `.ml`, `.ga` domains free
- **Subdomain providers**: 
  - `yoursite.netlify.app`
  - `yoursite.github.io`

---

## Option 3: Vercel Custom URL (Free)

In your Vercel project settings, you can:
1. Change project name to get cleaner URL
2. Current: `referral-website-osg5.vercel.app`
3. New: `canadian-referrals.vercel.app`

**Steps:**
1. Go to Vercel Dashboard
2. Project Settings → General
3. Change "Project Name" to: `canadian-referrals`
4. Your URL becomes: `canadian-referrals.vercel.app`

---

## Recommended Domain Names for SEO:

1. **wealthsimple-referral.com** - Direct keyword match
2. **canadian-bonus-codes.com** - Broader appeal  
3. **eyp3lm-bonus.com** - Your specific code
4. **refcodes-ca.com** - Short & Canadian
5. **invest-bonuses.com** - Investment focused

---

## Cost Breakdown:
- **Domain**: $10-15/year
- **Vercel hosting**: FREE
- **SSL certificate**: FREE (auto-included)
- **Total**: ~$12/year

---

## SEO Benefits of Custom Domain:
✅ Professional appearance
✅ Better Google rankings  
✅ Easier to remember & share
✅ Brand recognition
✅ Custom email addresses