# 🚀 Abhay Korat - Portfolio Website

> **Lead Software Engineer | Mobile Architecture Specialist**  
> A premium, SEO-optimized portfolio showcasing 11+ years of expertise in Flutter, iOS, and Android development

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge)](http://localhost:5173)
[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Architecture](#-architecture)
- [SEO & Lead Generation](#-seo--lead-generation)
- [Features](#-features)
- [Professional Journey](#-professional-journey)
- [Technology Stack](#-technology-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Performance Optimizations](#-performance-optimizations)
- [Contact & Social](#-contact--social)

---

## 🎯 Overview

This portfolio website is a **premium, production-ready** single-page application built with modern web technologies. It showcases my 11+ years of professional experience as a Lead Software Engineer specializing in mobile architecture, Flutter development, and native iOS/Android applications.

### Key Highlights

- ✨ **Premium Design**: Glassmorphism, custom cursor, particle effects, and holographic UI elements
- 🎨 **Interactive Animations**: Smooth transitions, micro-interactions, and dynamic visual effects
- 📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile viewports
- 🔍 **SEO Optimized**: Comprehensive meta tags, semantic HTML, and structured data
- 📧 **Lead Generation**: Integrated contact form with real email delivery via FormSubmit
- ⚡ **High Performance**: Lightning-fast load times with Vite and optimized assets
- 🌐 **Modern Stack**: React 19, TypeScript, Vite 7 with HMR

---

## 🏗️ Architecture

### Application Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     Single Page Application                  │
│                    (React 19 + TypeScript)                   │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                      App Component                           │
│  • State Management (useState)                               │
│  • Page Routing (Client-side)                                │
│  • Global UI Elements (Cursor, Background)                   │
└─────────────────────────────────────────────────────────────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        ▼                     ▼                     ▼
┌──────────────┐    ┌──────────────┐      ┌──────────────┐
│  Navigation  │    │  Page Router │      │ UI Components│
│  Component   │    │              │      │              │
└──────────────┘    └──────────────┘      └──────────────┘
                            │
        ┌───────────────────┼───────────────────┐
        ▼                   ▼                   ▼
┌──────────────┐  ┌──────────────┐   ┌──────────────┐
│  Home Page   │  │ About Page   │   │ Contact Page │
│  • Hero      │  │ • Skills     │   │ • Form       │
│  • Stats     │  │ • Expertise  │   │ • Info       │
└──────────────┘  └──────────────┘   └──────────────┘
        ▼                   ▼                   ▼
┌──────────────┐  ┌──────────────┐   ┌──────────────┐
│ Experience   │  │  Projects    │   │ FormSubmit   │
│  • Timeline  │  │  • Portfolio │   │  Integration │
└──────────────┘  └──────────────┘   └──────────────┘
```

### Component Architecture

#### **Core Components**

1. **`App`** - Main application container
   - Manages global state (current page, mobile menu)
   - Renders navigation and page router
   - Provides animated background and custom cursor

2. **`CustomCursor`** - Interactive cursor component
   - Smooth animation with requestAnimationFrame
   - Hover state detection for interactive elements
   - Easing algorithm for fluid motion

3. **`Navigation`** - Responsive navigation bar
   - Mobile-first design with hamburger menu
   - Active page highlighting
   - Smooth page transitions

4. **`GlassCard`** - Reusable glassmorphism container
   - Backdrop blur effects
   - Hover animations (optional)
   - Consistent design system

#### **Page Components**

- **`HomePage`**: Hero section with profile, stats, and CTAs
- **`AboutPage`**: Professional summary, skills matrix, domain expertise
- **`ExperiencePage`**: Timeline of 6 companies with achievements
- **`ProjectsPage`**: 9 featured projects with detailed descriptions
- **`ContactPage`**: Interactive form with particle effects and neural network visualization

### State Management

```typescript
// Global Application State
const [currentPage, setCurrentPage] = useState('home');
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

// Contact Form State
const [formData, setFormData] = useState({
  name: '', email: '', mobile: '', message: ''
});
const [status, setStatus] = useState({ type: '', message: '' });
const [loading, setLoading] = useState(false);
```

### Design Patterns

- **Component Composition**: Reusable UI components (GlassCard, Tag, StatCard)
- **Props Drilling**: Controlled component pattern for state management
- **Conditional Rendering**: Dynamic page rendering based on route state
- **Event Handling**: Centralized form submission and navigation handlers

---

## 🔍 SEO & Lead Generation

### SEO Optimization Strategy

#### **1. Meta Tags & Structured Data**

```html
<!-- Primary Meta Tags -->
<title>Abhay Korat | Lead Mobile Engineer</title>
<meta name="description" content="Portfolio of Abhay Korat, Lead Software Engineer and Mobile Architecture Specialist expert in Flutter, Dart, iOS, and Android." />
<meta name="keywords" content="flutter, mobile apps, mobile engineer, dart, iOS, Android, scalable app, lead engineer, abhay korat" />

<!-- Viewport & Character Set -->
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

#### **2. Semantic HTML Structure**

- Proper heading hierarchy (`h1` → `h2` → `h3`)
- Semantic elements: `<nav>`, `<main>`, `<footer>`, `<section>`
- Accessible form labels and ARIA attributes
- Descriptive alt text for images

#### **3. Performance Optimization**

- **Vite Build System**: Lightning-fast HMR and optimized production builds
- **Code Splitting**: Dynamic imports for better initial load
- **Asset Optimization**: Compressed images and lazy loading
- **Minimal Dependencies**: Only essential libraries (React, Lucide icons)

#### **4. Content Strategy**

- **Keyword-Rich Content**: Strategic placement of industry keywords
- **Unique Value Proposition**: Clear differentiation (11+ years, 50+ apps, 12+ team members)
- **Call-to-Actions**: Multiple CTAs ("View Projects", "Get In Touch")
- **Social Proof**: Featured projects with links and achievements

### Lead Generation Features

#### **1. Contact Form Integration**

```typescript
// FormSubmit.co Integration
const response = await fetch('https://formsubmit.co/koratabhaym@gmail.com', {
  method: 'POST',
  body: new FormData(form),
  headers: { 'Accept': 'application/json' }
});
```

**Features:**
- ✅ Real email delivery (no backend required)
- ✅ Form validation (required fields)
- ✅ Success/error feedback
- ✅ Loading states with animations
- ✅ Mobile-optimized input fields
- ✅ CAPTCHA protection disabled for UX

#### **2. Multiple Contact Channels**

- 📧 **Email**: koratabhaym@gmail.com
- 📱 **Phone**: +91 9998529350
- 💼 **LinkedIn**: [linkedin.com/in/abhaykorat](https://linkedin.com/in/abhaykorat)
- 🐙 **GitHub**: [github.com/abhuzz](https://github.com/abhuzz)
- 📍 **Location**: Surat, Gujarat, India

#### **3. Conversion Optimization**

- **Clear CTAs**: Prominent "Get In Touch" and "View Projects" buttons
- **Trust Signals**: Years of experience, team size, app count
- **Visual Hierarchy**: Glassmorphism design draws attention to key elements
- **Mobile-First**: Responsive design ensures accessibility on all devices
- **Fast Load Times**: Vite ensures sub-second initial load

---

## ✨ Features

### 🎨 Visual Design

- **Glassmorphism UI**: Modern glass-card design with backdrop blur
- **Custom Cursor**: Smooth, animated cursor with hover effects
- **Particle System**: Animated particles on contact page
- **Neural Network Visualization**: SVG-based neural network on contact form
- **Holographic Inputs**: Futuristic input fields with scan-line effects
- **Cyber Orbits**: Animated orbital rings around profile image
- **Gradient Backgrounds**: Dynamic, animated background gradients

### 🚀 Interactive Elements

- **Smooth Page Transitions**: Client-side routing with fade effects
- **Hover Animations**: Cards, buttons, and links with micro-interactions
- **Loading States**: Orbital spinner for form submission
- **Mobile Menu**: Hamburger menu with slide-in animation
- **Responsive Stats**: Animated stat cards with icons
- **Tag System**: Categorized skills and technologies

### 📱 Responsive Design

- **Mobile-First**: Optimized for 320px+ viewports
- **Tablet Support**: Adaptive layouts for medium screens
- **Desktop Experience**: Full-featured desktop interface
- **Touch-Friendly**: Large tap targets for mobile users

### 🔧 Developer Experience

- **TypeScript**: Full type safety and IntelliSense
- **Vite HMR**: Instant hot module replacement
- **ESLint**: Code quality and consistency
- **Component-Based**: Modular, reusable architecture

---

## 👨‍💻 Professional Journey

### Career Timeline (11+ Years)

```
2024 - Present  │ Lead Software Engineer @ Finoux Solutions
                │ • White-label Flutter architecture
                │ • Leading 12+ engineers
                │ • 40% faster release cycles
                │
2022 - 2024     │ Senior Flutter Developer @ Sunflower Lab
                │ • 25% app size reduction
                │ • 35% faster startup times
                │ • CI/CD pipeline implementation
                │
2020 - 2022     │ Founding Engineer @ Knackit
                │ • Built core product from scratch
                │ • Reduced app size by 50+ MB
                │ • Established architecture patterns
                │
2019 - 2020     │ Team Lead @ CoderKube Technologies
                │ • Led multiple client projects
                │ • 60% code reduction with Flutter
                │
2017 - 2019     │ Mobile Developer @ BlueBell Apps
                │ • Contract-based iOS development
                │ • Bank verification integration
                │
2014 - 2017     │ Senior iOS Developer @ IBL Infotech
                │ • Delivered 15+ production apps
                │ • VOIP, video streaming, push notifications
```

### Core Expertise

#### **Mobile Development**
- Flutter, Dart, Swift, Objective-C, Kotlin, Java
- iOS SDK, Android SDK, Cross-platform development

#### **Architecture & Patterns**
- Clean Architecture, MVVM, BLoC/Cubit, Provider
- Modular Architecture, Dependency Injection

#### **State Management**
- BLoC, Cubit, Provider, Riverpod, GetX

#### **CI/CD & DevOps**
- GitLab CI/CD, Fastlane, GitHub Actions
- CodeMagic, Firebase App Distribution

#### **Backend & Cloud**
- Firebase, REST APIs, GraphQL, Socket.io
- Payment Gateways, Local Storage

#### **Domain Expertise**
- **Fintech**: KYC/AML, Payment workflows, Trading platforms
- **Enterprise**: Multi-tenancy, White-label apps, RBAC
- **Healthcare**: Real-time data, Appointments, Inventory
- **High-Performance**: Socket integration, Market streaming

### Featured Projects (9 Major Apps)

1. **XTSApp** - Enterprise trading platform with real-time market feeds
2. **BullForce** - Comprehensive fintech with KYC/AML onboarding
3. **Spark - IRISH** - Dynamic page rendering with Microsoft Auth
4. **AlleyData** - Universal health and fitness application
5. **Knackit** - Wallet and rewards platform ($1.5M funding)
6. **Agrimedia** - Award-winning agriculture app (2019)
7. **Legacy Vault** - Location-based service with real-time tracking
8. **Benefact4** - Social donation platform
9. **Baby Led Weaning** - Multi-language nutrition guide

### Education

- **Bachelor of Engineering** - Computer Science & Engineering  
  Dr. Subhash University, Junagadh (2012 – 2014)

- **Diploma** - Computer Engineering  
  R.N.G. Patel Institute of Technology, Bardoli (2008 – 2011)

---

## 🛠️ Technology Stack

### Frontend

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 19.2.0 | UI framework with latest features |
| **TypeScript** | 5.9.3 | Type-safe development |
| **Vite** | 7.2.4 | Build tool with HMR |
| **Lucide React** | 0.561.0 | Icon library (lightweight) |

### Development Tools

| Tool | Version | Purpose |
|------|---------|---------|
| **ESLint** | 9.39.1 | Code linting and quality |
| **TypeScript ESLint** | 8.46.4 | TypeScript-specific linting |
| **Vite Plugin React** | 5.1.1 | React Fast Refresh |

### External Services

- **FormSubmit.co** - Contact form email delivery
- **Google Fonts** - Typography (loaded via CSS)

### Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: 18.x or higher
- **npm**: 9.x or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/abhuzz/portfolio-demo.git

# Navigate to project directory
cd portfolio-demo

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev

# Server will start at http://localhost:5173
```

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

### Linting

```bash
# Run ESLint
npm run lint
```

---

## 📁 Project Structure

```
portfolio-demo/
├── public/                      # Static assets
│   ├── profile.png             # Favicon
│   ├── spaceprofile.png        # Hero profile image
│   ├── nav-logo.png            # Navigation logo
│   └── contact_us.png          # Contact page visual
│
├── src/
│   ├── App.tsx                 # Main application component (2089 lines)
│   │   ├── CustomCursor        # Custom cursor component
│   │   ├── GlassCard           # Glassmorphism card component
│   │   ├── Tag                 # Skill tag component
│   │   ├── StatCard            # Statistics card component
│   │   ├── Navigation          # Navigation bar
│   │   ├── HomePage            # Hero section
│   │   ├── AboutPage           # Skills & expertise
│   │   ├── ExperiencePage      # Career timeline
│   │   ├── ProjectsPage        # Portfolio projects
│   │   └── ContactPage         # Contact form
│   │
│   ├── App.css                 # Component-specific styles
│   ├── index.css               # Global styles & animations
│   ├── main.tsx                # Application entry point
│   └── assets/                 # Additional assets
│
├── index.html                  # HTML template with SEO meta tags
├── package.json                # Dependencies and scripts
├── tsconfig.json               # TypeScript configuration
├── tsconfig.app.json           # App-specific TS config
├── tsconfig.node.json          # Node-specific TS config
├── vite.config.ts              # Vite configuration
├── eslint.config.js            # ESLint configuration
└── README.md                   # This file
```

### Component Breakdown

#### **App.tsx** (Main Application)

- **Lines 1-59**: CustomCursor component with smooth animation
- **Lines 61-66**: GlassCard reusable component
- **Lines 68-74**: Tag component for skills
- **Lines 76-83**: StatCard component for metrics
- **Lines 85-118**: Navigation with mobile menu
- **Lines 120-169**: HomePage with hero section
- **Lines 171-266**: AboutPage with skills matrix
- **Lines 268-372**: ExperiencePage with timeline
- **Lines 374-532**: ProjectsPage with portfolio
- **Lines 534-762**: ContactPage with form integration
- **Lines 764-2089**: Main App component with routing and styles

---

## ⚡ Performance Optimizations

### Build Optimizations

- **Tree Shaking**: Vite automatically removes unused code
- **Code Splitting**: Dynamic imports for route-based splitting
- **Minification**: Production builds are minified and compressed
- **Asset Optimization**: Images and fonts are optimized

### Runtime Optimizations

- **React 19**: Latest React with automatic batching and transitions
- **requestAnimationFrame**: Smooth cursor animation without jank
- **CSS Animations**: Hardware-accelerated transforms and opacity
- **Lazy Loading**: Images load on-demand

### Lighthouse Scores (Target)

- 🟢 **Performance**: 90+
- 🟢 **Accessibility**: 95+
- 🟢 **Best Practices**: 95+
- 🟢 **SEO**: 100

---

## 📧 Contact & Social

### Get In Touch

I'm always open to discussing new opportunities, collaborations, or just connecting with fellow developers!

- 📧 **Email**: [koratabhaym@gmail.com](mailto:koratabhaym@gmail.com)
- 📱 **Phone**: [+91 9998529350](tel:+919998529350)
- 💼 **LinkedIn**: [linkedin.com/in/abhaykorat](https://linkedin.com/in/abhaykorat)
- 🐙 **GitHub**: [github.com/abhuzz](https://github.com/abhuzz)
- 📍 **Location**: Surat, Gujarat, India

### What I'm Looking For

- 🚀 **Lead/Principal Engineer** roles in mobile architecture
- 🏢 **Fintech/Enterprise** projects with complex requirements
- 👥 **Team Leadership** opportunities with mentorship focus
- 🌍 **Remote/Hybrid** positions with global teams

---

## 📄 License

This project is open source and available for reference. Feel free to draw inspiration, but please don't copy the content directly as it represents my personal journey and achievements.

---

## 🙏 Acknowledgments

- **React Team** - For the amazing framework
- **Vite Team** - For the blazing-fast build tool
- **Lucide** - For the beautiful icon library
- **FormSubmit** - For the simple email integration

---

<div align="center">

**Built with ❤️ by Abhay Korat**

*Lead Software Engineer | Mobile Architecture Specialist*

[View Live Demo](http://localhost:5173) • [Contact Me](mailto:koratabhaym@gmail.com)

</div>
