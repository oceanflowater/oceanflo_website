# 🌊 Oceanflo - Company Website (Not Publicly Deployed)

# NOTE: This is not publicly deployed. and any instructions in this README are for internal use only. also this is not the final version of the website. the final version is in the development branch. and will be updated here after 2-3 days of development.

> **Elevate how you hydrate with Oceanflo** 💧

A modern, responsive website for Oceanflo (ओशनफ्लो), a manufacturing company that produces packaged mineral drinking water and supplies it to local dealers across India.

## 📋 Table of Contents

- [🚀 Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📁 Project Structure](#-project-structure)
- [⚡ Quick Start](#-quick-start)
- [🔧 Development](#-development)
- [📱 Pages & Components](#-pages--components)
- [🔒 Legal Compliance](#-legal-compliance)
- [📊 Data Collection & Privacy](#-data-collection--privacy)
- [🎨 Styling & Design](#-styling--design)
- [🚀 Deployment](#-deployment)
- [📞 Contact & Support](#-contact--support)
- [📄 License](#-license)

## 🚀 Features

### ✨ Core Features

- **Responsive Design** 📱 - Optimized for all devices and screen sizes
- **Modern UI/UX** 🎨 - Clean, professional design with smooth animations
- **Contact Management** 📧 - Integrated email collection and Slack notifications
- **SEO Optimized** 🔍 - Built-in SEO features and meta tags
- **Cookie Consent** 🍪 - Privacy-focused cookie management
- **Accessibility** ♿ - WCAG 2.0 compliant design
- **Performance** ⚡ - Optimized loading and smooth scrolling
- **Privacy-First** 🔒 - No tracking, analytics, or data collection

### 🏢 Business Features

- **Dealer Inquiries** 🤝 - Dedicated contact forms for business partnerships
- **Product Information** 📦 - Showcase of packaged drinking water products
- **Company Information** 🏭 - About us, terms, and privacy policies
- **Lead Generation** 📈 - Email collection for product launches and updates
- **Privacy-First** 🔒 - No tracking or analytics, user privacy respected

## 🛠️ Tech Stack

### Frontend

- **Next.js 15.4.6** ⚛️ - React framework with App Router
- **React 19.1.0** 🎯 - Modern React with latest features
- **TypeScript 5** 📝 - Type-safe development
- **CSS Modules** 🎨 - Scoped styling

### Animation & UX

- **GSAP 3.13.0** ✨ - Professional animations
- **Lenis 1.3.9** 📜 - Smooth scrolling
- **Lucide React 0.468.0** 🎯 - Beautiful icons

### Development Tools

- **ESLint** 🔍 - Code quality and consistency
- **Next.js Lint** 🛠️ - Built-in linting rules

## 📁 Project Structure

```
oceanflo_website/
├── 📁 public/                 # Static assets
│   ├── 🖼️ Images & Icons     # ⚠️ Brand assets NOT licensed
│   ├── 📄 SEO files (sitemap, robots.txt)
│   └── 📋 Manifest & config files
├── 📁 src/
│   ├── 📁 app/               # Next.js App Router
│   │   ├── 📄 page.tsx       # Homepage
│   │   ├── 📁 about/         # About page
│   │   ├── 📁 contact/       # Contact page
│   │   ├── 📁 products/      # Products page
│   │   ├── 📁 privacy/       # Privacy policy
│   │   ├── 📁 terms/         # Terms & conditions
│   │   ├── 📁 api/           # API routes
│   │   └── 📁 styles/        # Global styles
│   ├── 📁 components/        # Reusable components
│   └── 📁 contexts/          # React contexts
├── 📄 package.json           # Dependencies & scripts
├── 📄 next.config.ts         # Next.js configuration
└── 📄 tsconfig.json          # TypeScript configuration
```

> **⚠️ Important:** The `public/` directory contains Oceanflo brand assets (logos, icons) that are **NOT** licensed under the MIT License. These must be removed or replaced before using this codebase.

## ⚡ Quick Start

### ⚠️ Important Notice

Before using this codebase, you **MUST** remove or replace all Oceanflo brand assets:
- Remove all files from `public/` directory (logos, icons, brand images)
- Replace company-specific content in pages and components
- Update metadata and SEO information
- Replace contact information and business details

### Prerequisites

- **Node.js** 18+ 📦
- **npm** or **yarn** 📋

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd oceanflo_website
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   # Create .env.local file
   SLACK_WEBHOOK_URL=your_slack_webhook_url
   ```

4. **Run development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   ```
   http://localhost:3000
   ```

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Environment Variables

| Variable            | Description                             | Required |
| ------------------- | --------------------------------------- | -------- |
| `SLACK_WEBHOOK_URL` | Slack webhook for contact notifications | Yes      |

### Code Style

- **TypeScript** for type safety
- **ESLint** for code quality
- **Prettier** for code formatting
- **Conventional commits** for version control

## 📱 Pages & Components

### 🏠 Homepage (`/`)

- **Hero Section** - Company branding and tagline
- **Email Collection** - Lead generation form
- **Announcement Banner** - Company updates
- **Smooth Animations** - GSAP-powered interactions

### 📄 Static Pages

- **About** (`/about`) - Company information and mission
- **Products** (`/products`) - Product showcase
- **Contact** (`/contact`) - Business inquiry form
- **Privacy Policy** (`/privacy`) - Data protection information
- **Terms & Conditions** (`/terms`) - Legal terms

### 🧩 Components

#### Core Components

- **Header** - Navigation and branding
- **AnnouncementBanner** - Company announcements
- **CookieConsent** - GDPR-compliant cookie management
- **BackToTop** - Smooth scroll to top
- **Preloader** - Loading screen
- **SmoothScroll** - Enhanced scrolling experience

#### Form Components

- **Email Collection** - Homepage lead generation
- **Contact Form** - Business inquiries with validation
- **API Integration** - Slack notifications for leads

## 🔒 Legal Compliance

### 📋 Privacy & Data Protection

This website is designed to comply with international data protection regulations:

#### 🛡️ Privacy Compliance

- **Cookie Consent** - User choice for essential cookies only
- **Data Minimization** - Only collect necessary information
- **User Rights** - Right to access, rectify, and delete data
- **Transparency** - Clear privacy policy and data practices
- **No Tracking** - No analytics, tracking, or data collection

#### 🇮🇳 Indian Legal Requirements

- **FSSAI Compliance** - Food safety standards for water products
- **Consumer Protection** - Adherence to consumer rights
- **Business Registration** - Proper company documentation

### 📄 Legal Pages

#### Privacy Policy

- **Data Collection** - What information we collect
- **Data Usage** - How we use your information
- **Data Sharing** - Third-party sharing policies
- **User Rights** - Your rights under data protection laws
- **Contact Information** - How to exercise your rights

#### Terms & Conditions

- **Acceptance** - Terms of website usage
- **Company Information** - Business details and operations
- **Product Quality** - Safety and quality commitments
- **Dealer Relationships** - Business partnership terms
- **Intellectual Property** - Copyright and trademark protection

## 📊 Data Collection & Privacy

### 🔍 Information We Collect

#### Direct Information

- **Name** - For business inquiries and personalization
- **Email Address** - For communications and updates
- **Phone Number** - For business inquiries (optional)

#### Automated Information

- **Cookies** - Website functionality and user experience
- **Device Information** - Browser type and device details for compatibility

### 🎯 How We Use Your Information

1. **Business Communications** 📞

   - Respond to dealer inquiries
   - Provide product information
   - Send business updates

2. **Website Functionality** 🔧

   - Improve user experience
   - Fix technical issues
   - Maintain website performance

3. **Legal Compliance** ⚖️
   - Meet regulatory requirements
   - Maintain business records
   - Respond to legal requests

### 🔐 Data Security

- **Encryption** - Secure data transmission (HTTPS)
- **Access Controls** - Limited access to personal data
- **Regular Updates** - Security patches and updates
- **Employee Training** - Data protection awareness

### 🍪 Cookie Policy

#### Essential Cookies

- **Functionality** - Website operation
- **Security** - Protection against attacks
- **Performance** - Loading optimization

#### Optional Cookies

- **Functionality** - Enhanced user experience features
- **Personalization** - User experience enhancement

## 🎨 Styling & Design

### 🎯 Design Principles

- **Minimalist & Professional** - Clean, modern aesthetic reflecting company credibility
- **Performance-First** - Optimized animations and smooth interactions
- **Accessibility** - WCAG 2.0 compliance with reduced motion support
- **Mobile-First** - Responsive design approach with touch-friendly interfaces

### 🎨 Color Palette

- **Primary Background** - `#f5f3f0` (Warm off-white)
- **Text Color** - `#080808` (Near black)
- **Accent Colors** - `#333333` (Dark gray)
- **Success States** - `#22c55e` (Green)
- **Error States** - `#ef4444` (Red)
- **Transparent Overlays** - `rgba(8, 8, 8, 0.1)` (Subtle shadows)

### 🔤 Typography System

#### Font Stack

- **System Fonts** - Uses native system fonts for optimal performance and privacy
- **Fallback Stack** - system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
- **Privacy-First** - No custom fonts to prevent tracking or identification

#### Font Hierarchy

- **Hero Text** - 15rem (System font, 400 weight)
- **Subtitles** - 2.2rem (System font, 400 weight)
- **Body Text** - 1.1rem (System font, 300 weight)
- **UI Elements** - 16px (System font, 400 weight)

### 🎭 Visual Effects

#### Animations & Transitions

- **GSAP Integration** - Professional animation library
- **Smooth Scrolling** - Lenis-powered enhanced scrolling
- **Hover Effects** - Subtle transforms and shadow effects
- **Loading States** - Progressive loading with preloader
- **Reduced Motion** - Respects user accessibility preferences

#### Interactive Elements

- **Form Inputs** - Clean borders with focus states
- **Buttons** - Hover animations with shadow effects
- **Navigation** - Smooth underline animations
- **Back to Top** - Floating action button with fade effects

### 📱 Responsive Design

#### Breakpoints

- **Desktop** - 1200px+ (Full-featured experience)
- **Tablet** - 768px-1199px (Optimized layout)
- **Mobile** - 480px-767px (Touch-friendly interface)
- **Small Mobile** - <480px (Compact layout)

#### Mobile Optimizations

- **Touch Targets** - Minimum 44px for interactive elements
- **Font Scaling** - Responsive typography with clamp()
- **Spacing** - Adjusted padding and margins
- **Navigation** - Hamburger menu for mobile devices

### 🎨 Component Styling

#### Form Elements

- **Input Fields** - Clean borders with focus states
- **Submit Buttons** - Dark background with hover effects
- **Validation** - Color-coded success/error messages
- **Loading States** - Disabled states with visual feedback

#### Navigation

- **Header** - Fixed position with backdrop blur
- **Announcement Banner** - Moving text animation
- **Mobile Menu** - Full-screen overlay with smooth transitions
- **Footer Links** - Clean typography with hover effects

#### Special Features

- **Cookie Consent** - Privacy-focused notification
- **Page Loader** - Branded loading experience
- **404 Page** - Custom error page with water drop animations
- **Custom Scrollbar** - Styled scrollbars for webkit browsers

### 🔧 CSS Architecture

#### Performance Optimizations

- **Hardware Acceleration** - `transform: translateZ(0)` for animations
- **Will-change** - Optimized animation performance
- **Font Display** - `font-display: swap` for faster loading
- **Reduced Motion** - Respects user accessibility preferences

#### CSS Features

- **CSS Custom Properties** - Consistent design tokens
- **Flexbox & Grid** - Modern layout techniques
- **Backdrop Filter** - Glass morphism effects
- **CSS Animations** - Keyframe animations for special effects

### 🎯 Accessibility Features

- **Color Contrast** - WCAG AA compliant color ratios
- **Focus Indicators** - Clear focus states for keyboard navigation
- **Screen Reader Support** - Semantic HTML structure
- **Reduced Motion** - Respects `prefers-reduced-motion`
- **Touch Targets** - Adequate size for mobile interaction

## 🚀 Deployment

### 📦 Production Build

```bash
# Build the application
npm run build

# Start production server
npm run start
```

### 🌐 Deployment Options

#### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

#### Other Platforms

- **Netlify** - Static site hosting
- **AWS Amplify** - Full-stack deployment
- **DigitalOcean App Platform** - Container deployment

### 🔧 Environment Setup

1. **Production Environment Variables**

   ```bash
   SLACK_WEBHOOK_URL=production_webhook_url
   NODE_ENV=production
   ```

2. **Domain Configuration**

   - Configure custom domain
   - Set up SSL certificates
   - Configure DNS records

3. **Monitoring & Performance**
   - Set up error tracking
   - Monitor website performance
   - Track user experience metrics

## 📞 Contact & Support

### 🏢 Business Inquiries

- **Email**: work@oceanflo.xyz
- **Purpose**: Dealer partnerships, product inquiries, business opportunities

### 🛠️ Technical Support

- **Repository**: [GitHub Repository]
- **Issues**: [GitHub Issues]
- **Documentation**: This README

### 📍 Company Information

- **Company**: Oceanflo (ओशनफ्लो)
- **Industry**: Packaged Drinking Water Manufacturing
- **Market**: India (Local Dealer Network)
- **Products**: Mineral Drinking Water

## 📄 License

### 📜 MIT License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### 📋 Usage Rights

- **Open Source** - Free to use, modify, and distribute
- **Attribution** - Copyright notice must be preserved
- **Commercial Use** - Allowed for commercial purposes
- **Modification** - Allowed with license preservation

### ⚠️ Trademark Notice

- **Logos & Branding** - Oceanflo logos, brand assets, and visual identity are **NOT** licensed under the MIT License
- **Restricted Use** - Brand assets may not be used, modified, or distributed without explicit permission
- **Trademark Protection** - Oceanflo name, logos, and brand elements are protected trademarks
- **Removal Required** - Users must remove or replace Oceanflo branding before using this codebase

### 🛡️ Legal Protection

- **Copyright** - Copyright (c) 2025 Oceanflo
- **License** - MIT License for code, proprietary for content
- **Trademarks** - Oceanflo brand protection
- **Content** - Business content remains proprietary
- **Logos & Branding** - Oceanflo logos and brand assets are NOT licensed under MIT License

---

## 🎯 Quick Reference

### 🚀 Development Commands

```bash
npm run dev          # Start development
npm run build        # Build production
npm run start        # Start production
npm run lint         # Check code quality
```

### 📁 Key Files

- `src/app/page.tsx` - Homepage
- `src/app/layout.tsx` - Root layout
- `src/components/` - Reusable components
- `src/app/api/submit-email/route.ts` - Contact API

### 🔧 Configuration

- `next.config.ts` - Next.js settings
- `tsconfig.json` - TypeScript configuration
- `package.json` - Dependencies and scripts

---

## 🔄 Open Source Migration Guide

### 🗑️ **Removed for Open Sourcing**

#### **📊 Analytics & Tracking**
- **Google Analytics** - All tracking code and gtag implementations
- **Structured Data** - Schema.org markup for SEO optimization
- **Analytics Consent** - Google Analytics-specific cookie consent
- **Tracking Scripts** - All third-party tracking implementations

#### **🏢 Business-Specific Content**
- **Company Logos** - Oceanflo brand assets and visual identity
- **Product Images** - Packaged drinking water product photos
- **Company Information** - Specific business details and contact info
- **Brand Colors** - Oceanflo-specific color schemes
- **Custom Fonts** - All custom fonts removed for privacy (now uses system fonts)

#### **🔒 Privacy & Legal**
- **Analytics Cookies** - Google Analytics cookie management
- **Tracking Consent** - Analytics-specific user consent
- **Business Data** - Company-specific privacy policy content
- **Legal References** - FSSAI compliance and Indian regulations

#### **📧 Integrations**
- **Slack Webhook** - Contact form notification system
- **Business Email** - Company-specific email addresses
- **Contact Information** - Oceanflo business contact details

### ➕ **Required Additions for Functionality**

#### **🎨 Brand Assets**
```bash
# Replace in public/ directory
- logo.png                    # Your company logo
- favicon.ico                 # Website favicon
- hero-image.jpg             # Hero section background
- product-images/            # Your product photos
- brand-assets/              # Additional brand elements
```

#### **📧 Contact Integration**
```bash
# Environment Variables (.env.local)
SLACK_WEBHOOK_URL=your_slack_webhook_url    # For contact notifications
CONTACT_EMAIL=your@company.com              # Business contact email
```

#### **🏢 Business Content**
```typescript
// Update in src/app/layout.tsx
export const metadata: Metadata = {
  title: "Your Company Name",
  description: "Your company description",
};

// Update in src/app/page.tsx
const companyName = "Your Company Name";
const tagline = "Your company tagline";
```

#### **📄 Legal Pages**
```bash
# Update content in:
src/app/about/page.tsx       # Company information
src/app/privacy/page.tsx     # Privacy policy
src/app/terms/page.tsx       # Terms & conditions
src/app/contact/page.tsx     # Contact information
```

#### **🎨 Styling Customization**
```css
/* Update in src/app/styles/globals.css */
:root {
  --primary-bg: #your-color;        /* Your brand background */
  --text-color: #your-color;        /* Your text color */
  --accent-color: #your-color;      /* Your accent color */
}

/* Font families already use system fonts for privacy */
body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
```

#### **🔧 Configuration Updates**
```typescript
// Update in next.config.ts
const nextConfig = {
  // Your custom configuration
};

// Update in package.json
{
  "name": "your-company-website",
  "description": "Your company description"
}
```

### 🚀 **Quick Setup Checklist**

#### **Phase 1: Brand Replacement**
- [ ] Replace all logos and brand assets in `public/`
- [ ] Update company name and tagline throughout the codebase
- [ ] Customize color scheme in CSS files
- [ ] Update favicon and meta images

#### **Phase 2: Content Updates**
- [ ] Rewrite About page with your company information
- [ ] Update Privacy Policy for your business
- [ ] Modify Terms & Conditions for your operations
- [ ] Replace contact information and forms

#### **Phase 3: Integration Setup**
- [ ] Set up Slack webhook for contact notifications
- [ ] Configure environment variables
- [ ] Test contact form functionality
- [ ] Verify email delivery system

#### **Phase 4: Legal Compliance**
- [ ] Review and update privacy policy
- [ ] Ensure GDPR/CCPA compliance
- [ ] Update cookie consent for your needs
- [ ] Verify legal page accuracy

#### **Phase 5: Testing & Deployment**
- [ ] Test all forms and functionality
- [ ] Verify responsive design
- [ ] Check accessibility compliance
- [ ] Deploy to your hosting platform

### ⚠️ **Important Notes**

#### **🔒 Privacy Compliance**
- Ensure your privacy policy matches your data collection practices
- Update cookie consent for your specific needs
- Verify compliance with local data protection laws

#### **🎨 Design Considerations**
- Maintain accessibility standards (WCAG 2.0)
- Test responsive design across devices
- Ensure brand consistency throughout

#### **🔧 Technical Requirements**
- Node.js 18+ required for development
- Environment variables must be configured
- SSL certificate recommended for production

#### **📱 Mobile Optimization**
- Test touch interactions on mobile devices
- Verify form usability on small screens
- Check loading performance on mobile networks

---

**Built with ❤️ for Oceanflo** 🌊

_This README is maintained by the Oceanflo development team. For questions or updates, please contact the technical team._

---

**Copyright (c) 2025 Oceanflo. Licensed under the MIT License. See LICENSE.**
