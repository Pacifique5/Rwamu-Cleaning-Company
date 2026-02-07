# Deployment Guide - Rwamu Cleaning Soap Products

## Quick Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications and offers free hosting for personal projects.

### Steps:

1. **Create a Vercel Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub, GitLab, or Bitbucket

2. **Push to Git Repository**
   ```bash
   cd rwamu-cleaning-soap
   git init
   git add .
   git commit -m "Initial commit - Rwamu Cleaning website"
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

3. **Import to Vercel**
   - Click "New Project" in Vercel dashboard
   - Import your Git repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

4. **Done!**
   - Your site will be live at `your-project.vercel.app`
   - You can add a custom domain later

## Deploy to Netlify

1. **Build the Project**
   ```bash
   npm run build
   ```

2. **Create netlify.toml**
   ```toml
   [build]
     command = "npm run build"
     publish = ".next"

   [[plugins]]
     package = "@netlify/plugin-nextjs"
   ```

3. **Deploy**
   - Connect your Git repository to Netlify
   - Or drag and drop the `.next` folder

## Deploy to Traditional Hosting

### Requirements:
- Node.js 18+ installed on server
- PM2 or similar process manager

### Steps:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload files to server**
   - Upload entire project folder
   - Or use Git to clone on server

3. **Install dependencies on server**
   ```bash
   npm install --production
   ```

4. **Start with PM2**
   ```bash
   npm install -g pm2
   pm2 start npm --name "rwamu-website" -- start
   pm2 save
   pm2 startup
   ```

5. **Configure Nginx (if using)**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

## Environment Variables (Optional)

If you add backend functionality later, create a `.env.local` file:

```env
# Example environment variables
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_WHATSAPP_NUMBER=250787676675

# If you add email functionality
EMAIL_SERVER=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-password

# If you add database
DATABASE_URL=your-database-url
```

## Custom Domain Setup

### For Vercel:
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

### DNS Records Example:
```
Type: A
Name: @
Value: 76.76.21.21 (Vercel IP)

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## SSL Certificate

- **Vercel/Netlify:** Automatic SSL (Let's Encrypt)
- **Traditional Hosting:** Use Certbot
  ```bash
  sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
  ```

## Performance Optimization

The site is already optimized, but for production:

1. **Enable Image Optimization**
   - Add product images to `/public` folder
   - Use Next.js `<Image>` component

2. **Add Analytics** (Optional)
   ```bash
   npm install @vercel/analytics
   ```
   
   In `app/layout.tsx`:
   ```tsx
   import { Analytics } from '@vercel/analytics/react';
   
   export default function RootLayout({ children }) {
     return (
       <html>
         <body>
           {children}
           <Analytics />
         </body>
       </html>
     );
   }
   ```

3. **Add SEO Enhancements**
   - Create `robots.txt` in `/public`
   - Create `sitemap.xml`
   - Add Google Search Console

## Monitoring

### Vercel Analytics (Free)
- Automatic performance monitoring
- Real-time visitor analytics
- Core Web Vitals tracking

### Google Analytics (Free)
```bash
npm install @next/third-parties
```

## Backup Strategy

1. **Code:** Keep in Git repository
2. **Database:** Regular backups if you add one later
3. **Images:** Store in cloud storage (Cloudinary, AWS S3)

## Cost Estimates

### Free Options:
- **Vercel Free Tier:** Perfect for this site
  - 100GB bandwidth/month
  - Unlimited sites
  - Automatic SSL
  - Global CDN

- **Netlify Free Tier:**
  - 100GB bandwidth/month
  - 300 build minutes/month

### Paid Options (if needed later):
- **Vercel Pro:** $20/month
- **Netlify Pro:** $19/month
- **VPS (DigitalOcean):** $5-10/month
- **Custom Domain:** $10-15/year

## Post-Deployment Checklist

- [ ] Test all pages on mobile and desktop
- [ ] Verify all phone numbers are clickable
- [ ] Test WhatsApp links
- [ ] Check contact form (when backend added)
- [ ] Test navigation on all pages
- [ ] Verify images load correctly
- [ ] Check page load speed (use PageSpeed Insights)
- [ ] Test on different browsers
- [ ] Add to Google Search Console
- [ ] Set up Google Analytics (optional)
- [ ] Share on social media

## Support & Maintenance

### Regular Updates:
```bash
# Update dependencies monthly
npm update

# Check for security issues
npm audit

# Fix security issues
npm audit fix
```

### Monitoring:
- Check Vercel/Netlify dashboard for errors
- Monitor site speed with Google PageSpeed Insights
- Check mobile responsiveness regularly

## Need Help?

- Next.js Docs: https://nextjs.org/docs
- Vercel Support: https://vercel.com/support
- Netlify Docs: https://docs.netlify.com

---

**Ready to go live!** 🚀

Choose Vercel for the easiest deployment experience with Next.js.
