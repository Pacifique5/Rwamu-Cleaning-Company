# Getting Started - Rwamu Cleaning Soap Products Website

## 🎉 Welcome!

You now have a complete, production-ready portfolio website for Rwamu Cleaning Soap Products!

## 📋 What You Have

### ✅ Complete Website with 4 Pages:
1. **Home** - Hero, featured products, benefits, mission
2. **About** - Company story, mission, vision, values
3. **Products** - All 6 products with details and features
4. **Contact** - Contact info, form, WhatsApp integration

### ✅ Professional Features:
- Fully responsive (mobile, tablet, desktop)
- Smooth animations
- Modern design
- SEO optimized
- Fast performance
- Production tested

## 🚀 Quick Start (3 Steps)

### Step 1: Open Terminal
Navigate to the project folder:
```bash
cd rwamu-cleaning-soap
```

### Step 2: Install Dependencies (First Time Only)
```bash
npm install
```

### Step 3: Start Development Server
```bash
npm run dev
```

**That's it!** Open http://localhost:3000 in your browser.

## 🌐 View Your Website

Once the server starts, you'll see:
```
✓ Ready in 2s
- Local:   http://localhost:3000
```

Click the link or open your browser to:
- **Home:** http://localhost:3000
- **About:** http://localhost:3000/about
- **Products:** http://localhost:3000/products
- **Contact:** http://localhost:3000/contact

## 📱 Test on Mobile

1. Find your computer's IP address:
   - Windows: `ipconfig` (look for IPv4)
   - Mac/Linux: `ifconfig` (look for inet)

2. On your phone's browser, visit:
   ```
   http://YOUR_IP_ADDRESS:3000
   ```
   Example: `http://192.168.1.100:3000`

## 🎨 Customization Guide

### Change Colors

Edit `app/globals.css` or component files. Current colors:
- **Primary Blue:** `blue-600` (#2563eb)
- **Accent Green:** `green-600` (#16a34a)
- **Background:** White with blue/green gradients

### Add/Edit Products

Edit `lib/products.ts`:
```typescript
{
  id: "new-product",
  name: "New Product Name",
  description: "Product description...",
  usage: "What it's used for",
  sizes: ["1L", "5L", "25L"],
  features: ["Feature 1", "Feature 2"],
  icon: "droplets" // or sparkles, utensils, etc.
}
```

### Change Contact Information

Edit these files:
- `components/Footer.tsx` - Footer contact info
- `app/contact/page.tsx` - Contact page details
- `components/CTASection.tsx` - CTA phone numbers

### Add Product Images

1. Add images to `public/` folder:
   ```
   public/
   ├── products/
   │   ├── floor-cleaner.jpg
   │   ├── toilet-cleaner.jpg
   │   └── ...
   ```

2. Update `components/ProductCard.tsx` to use images:
   ```tsx
   import Image from "next/image";
   
   <Image 
     src={`/products/${product.id}.jpg`}
     alt={product.name}
     width={400}
     height={300}
   />
   ```

## 🛠️ Common Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Check for errors
npm run lint

# Update dependencies
npm update
```

## 📂 Project Structure

```
rwamu-cleaning-soap/
├── app/                    # Pages
│   ├── page.tsx           # Home page
│   ├── about/page.tsx     # About page
│   ├── products/page.tsx  # Products page
│   ├── contact/page.tsx   # Contact page
│   ├── layout.tsx         # Main layout
│   └── globals.css        # Global styles
│
├── components/            # Reusable components
│   ├── Navbar.tsx        # Navigation bar
│   ├── Footer.tsx        # Footer
│   ├── HeroSection.tsx   # Hero section
│   ├── ProductCard.tsx   # Product card
│   └── CTASection.tsx    # Call-to-action
│
├── lib/                   # Data and utilities
│   ├── products.ts       # Product data
│   └── utils.ts          # Helper functions
│
├── public/               # Static files
│   └── (add images here)
│
└── Documentation files
    ├── README.md
    ├── DEPLOYMENT.md
    ├── PROJECT_SUMMARY.md
    └── GETTING_STARTED.md (this file)
```

## 🐛 Troubleshooting

### Port Already in Use
If you see "Port 3000 is in use":
```bash
# Use a different port
npm run dev -- -p 3001
```

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Module Not Found
```bash
# Reinstall dependencies
rm -rf node_modules
npm install
```

## 📝 Making Changes

### Edit Text Content
All text is in the component files. No dummy text - everything is real content!

### Change Animations
Edit Framer Motion settings in component files:
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
```

### Modify Layout
- **Navbar:** `components/Navbar.tsx`
- **Footer:** `components/Footer.tsx`
- **Page Layout:** `app/layout.tsx`

## 🚀 Ready to Deploy?

See `DEPLOYMENT.md` for detailed deployment instructions.

**Quick Deploy to Vercel (Easiest):**
1. Push code to GitHub
2. Go to vercel.com
3. Import repository
4. Click Deploy
5. Done! 🎉

## 📞 Contact Information in Website

The website displays:
- **Phone:** +250 787 676 675 | +250 725 482 196
- **Location:** Kigali – Gasabo, Rwanda
- **WhatsApp:** Integrated with click-to-chat
- **Mission:** "Let's keep our environment clean"

## 🎯 Next Steps

1. ✅ Test the website locally
2. ✅ Review all pages
3. ✅ Test on mobile devices
4. ✅ Add product images (optional)
5. ✅ Deploy to Vercel
6. ✅ Add custom domain
7. ✅ Share with customers!

## 💡 Tips

- **Development:** Changes auto-reload in browser
- **Production:** Always test with `npm run build` first
- **Images:** Use WebP format for best performance
- **SEO:** Update metadata in `app/layout.tsx`
- **Analytics:** Add Google Analytics after deployment

## 📚 Learn More

- **Next.js:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Framer Motion:** https://www.framer.com/motion
- **React:** https://react.dev

## ✨ Features Checklist

- [x] Responsive design
- [x] 4 complete pages
- [x] 6 products with details
- [x] Contact form UI
- [x] WhatsApp integration
- [x] Phone click-to-call
- [x] Smooth animations
- [x] Professional design
- [x] SEO optimized
- [x] Production build tested
- [x] Fast performance
- [x] Mobile friendly

## 🎊 You're All Set!

Your website is ready to use. Start the dev server and explore!

```bash
npm run dev
```

Then visit: http://localhost:3000

---

**Questions?** Check the other documentation files:
- `README.md` - Project overview
- `PROJECT_SUMMARY.md` - What was built
- `DEPLOYMENT.md` - How to deploy

**Happy building!** 🚀🇷🇼
