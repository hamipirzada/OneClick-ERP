# OneClick ERP Marketing Website

A production-ready marketing website built with Next.js 14, TypeScript, and Tailwind CSS, designed to pixel-perfectly match the provided design specifications.

## 🚀 Features

- **Next.js 14** with App Router and React Server Components
- **TypeScript** for type safety
- **Tailwind CSS** with custom design system
- **React Hook Form + Zod** for form validation
- **SEO Optimized** with metadata, Open Graph, and JSON-LD
- **Accessible** with WCAG AA compliance
- **Responsive** design for all devices
- **Performance Optimized** for Lighthouse scores 90+

## 🎨 Design System

### Colors (CSS Variables)
- `--brand: #FF5A3D` - Primary orange for buttons and accents
- `--brand-600: #FF6A50` - Hover state for primary color
- `--ink: #0F172A` - Dark text and headings
- `--muted: #64748B` - Secondary text
- `--bg: #F7FAFD` - Light section backgrounds
- `--card: #FFFFFF` - Card and form backgrounds
- `--border: #E5E7EB` - Card and form borders
- `--success: #22C55E` - Check bullets and success states
- `--info: #3B82F6` - Info icons and stats

### Typography
- **Font**: Inter with system fallbacks
- **H1**: 44px/52px, semibold, tight letter-spacing
- **H2**: 32px/40px, semibold
- **H3**: 20px/28px, semibold
- **Body**: 16px/26px

### Spacing & Layout
- **Container**: max-width 1280px, centered
- **Section spacing**: py-16 md:py-24
- **Card radius**: 12px
- **Button radius**: 10px
- **Shadow**: Custom card shadow for depth

## 📁 Project Structure

```
src/
├── app/
│   ├── (site)/          # Main website routes
│   │   ├── about/
│   │   ├── contact/
│   │   └── services/
│   ├── api/
│   │   └── contact/     # Contact form API
│   ├── globals.css      # Global styles and CSS variables
│   ├── layout.tsx       # Root layout with SEO
│   ├── page.tsx         # Home page
│   ├── robots.txt       # SEO robots file
│   └── sitemap.ts       # Dynamic sitemap
├── components/          # Reusable UI components
├── content/            # Content files (ready for CMS)
├── lib/                # Utilities and schemas
└── public/             # Static assets
```

## 🧩 Key Components

### Layout Components
- `Header` - Sticky navigation with dropdown menus
- `Footer` - Four-column footer with links and contact info
- `Breadcrumbs` - Navigation breadcrumbs for inner pages

### Content Components
- `SectionHeader` - Eyebrow, title, and description
- `Card` - Feature cards with icons and bullet lists
- `StatsRow` - Metric display grid
- `PillList` - Tag-style list for categories
- `PricingCards` - Pricing plans with "Most Popular" highlights
- `FAQAccordion` - Expandable FAQ sections
- `ContactTiles` - Contact method cards
- `CTASection` - Full-width call-to-action bands

### Forms
- `ContactForm` - Multi-field contact form with validation
- Success states and error handling
- Checkbox groups for service selection

## 📄 Pages

### Home (`/`)
- Hero with main value proposition
- Odoo Business Applications grid (6 cards)
- Why Choose Odoo pills
- Partnership benefits with stats card
- 5-step methodology timeline
- Pricing packages (4 plans)
- Success stories preview
- FAQ accordion
- CTA section

### Services
- **Odoo ERP** (`/services/odoo`) - Implementation services
- **Digital Marketing** (`/services/digital-marketing`) - Marketing solutions
- **Accounting** (`/services/accounting`) - Financial services
- **Support** (`/services/support`) - Maintenance and support

### About (`/about`)
- Mission & Vision cards
- Track record stats
- Why Choose us pills
- Core values (4 cards)
- Expertise areas with certification highlight

### Contact (`/contact`)
- Contact form with service checkboxes
- Contact method tiles (email, phone, location, hours)
- Success state handling

## 🛠️ Setup Instructions

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   npm start
   ```

## ⚙️ Configuration

### Editing Design Tokens

All design tokens are defined in `src/app/globals.css`:

```css
:root {
  --brand: #FF5A3D;
  --brand-600: #FF6A50;
  --ink: #0F172A;
  /* ... more variables */
}
```

### Editing Content

Content is structured for easy CMS integration:

1. **Static content**: Edit page files directly
2. **Reusable data**: Stored in component files as constants
3. **Forms**: Schema validation in `src/lib/schemas.ts`
4. **Contact data**: Configured in `src/components/ContactTiles.tsx`

### Adding New Pages

1. Create new page in `src/app/(site)/`
2. Add route to `src/app/sitemap.ts`
3. Update navigation in `src/components/Header.tsx`

## 📊 SEO & Analytics

### Built-in SEO Features
- Metadata API for all pages
- Open Graph and Twitter Card tags
- JSON-LD structured data (Organization, Service, FAQ)
- Automatic sitemap generation
- Robots.txt configuration

### Analytics Ready
- Data attributes added for tracking
- Form submission tracking
- Page view tracking setup
- Conversion tracking preparation

## 🎯 Performance

### Optimization Features
- Next.js Image optimization
- Server-side rendering
- Static generation where possible
- Lazy loading for non-critical content
- Optimized fonts and assets

### Lighthouse Targets
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+

## 📝 Form Handling

Contact form submissions are:
1. Validated with Zod schemas
2. Stored locally in JSON files (`data/leads.json`)
3. Ready for database/CRM integration
4. Include success/error state handling

## 🔧 Development

### Key Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Environment Setup
No environment variables required for basic functionality. For production:
- Update `metadataBase` in layout.tsx
- Configure contact form endpoint
- Add analytics tracking codes

## 🤝 Contributing

1. Follow the established design system
2. Maintain TypeScript strict mode
3. Ensure accessibility compliance
4. Test on multiple devices and browsers
5. Optimize for performance

## 📞 Support

For questions about implementation or customization, contact the development team or refer to the Next.js and Tailwind CSS documentation.

---

Built with ❤️ using Next.js 14, TypeScript, and Tailwind CSS.