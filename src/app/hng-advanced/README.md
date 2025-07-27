# HNG Advanced Landing Page

## Overview

This is a comprehensive landing page for HNG Advanced - a 4-week elite challenge program for HNG finalists. The page features modern design, interactive elements, and smooth animations.

## Features

- **Responsive Design** - Mobile-first approach with desktop optimization
- **Interactive Auto-scroll Sections** - Seamless infinite scrolling carousels
- **Modern UI Components** - Clean, professional interface with hover effects
- **Cloud Hero Background** - Sky gradient with rocket illustration
- **Section Navigation** - Numbered sections with clear descriptions
- **Modal Forms** - Application modal with form validation
- **FAQ Section** - Accordion-style questions and answers
- **Brand Support** - Visual brand representation grid

## Tech Stack

### Core Framework
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first styling

### Dependencies Used
- **React 18** - UI library with hooks
- **next/image** - Optimized image loading
- **lucide-react** - Icon library (if used in imports)

### Development Tools
- **pnpm** - Package manager
- **ESLint** - Code linting
- **TypeScript** - Type checking

## File Structure

```
app/(landing)/hng-advanced/
├── page.tsx                 # Main page component
├── layout-description.md    # Design specifications
├── README.md               # This file
├── moodboard/              # Design references
│   ├── brands.jpg
│   ├── faq.jpg
│   ├── hero.jpg
│   └── whatIsHNG.jpg
└── components/             # Page components
    ├── ApplicationModal.tsx
    ├── BrandSupportSection.tsx
    ├── EligibilitySection.tsx
    ├── FAQSection.tsx
    ├── FinalCTA.tsx
    ├── Footer.tsx
    ├── HeroSection.tsx
    ├── HowItWorks.tsx
    ├── MentorSection.tsx
    ├── ProjectFocus.tsx
    ├── TracksGrid.tsx
    ├── WhatIsHNG.tsx
    └── WhatYouGet.tsx
```

## Component Features

### HeroSection
- Cloud background with gradient transition
- Custom SVG rocket illustration
- Responsive typography
- CTA buttons with hover effects

### Auto-scroll Components
- **EligibilitySection** - HNG cohort showcase
- **HowItWorks** - Process steps carousel
- Features:
  - Seamless infinite scrolling
  - Drag interaction support
  - Hover to pause functionality
  - Fade gradients on edges

### Interactive Components
- **WhatYouGet** - List-style benefits with hover effects
- **FAQSection** - Accordion with smooth transitions
- **ApplicationModal** - Form with outside-click closing
- **BrandSupportSection** - Grid layout with hover animations

## Styling Approach

### Color Palette
- **Primary**: Various grays (#0B1120, #38BDF8, #3B82F6)
- **Backgrounds**: Sky blues, whites, light grays
- **Accents**: Electric blue (#38BDF8), yellows, greens

### Typography
- **Headings**: Bold, large sizes (4xl to 7xl)
- **Body**: Readable with good line height
- **Hierarchy**: Clear size and weight differentiation

### Animations
- **Hover Effects**: Scale, translate, color changes
- **Auto-scroll**: requestAnimationFrame-based smooth scrolling
- **Transitions**: 300ms duration for consistency
- **Micro-interactions**: Pulse effects, expanding lines

## Performance Considerations

- **Optimized Images** - Next.js Image component
- **Efficient Animations** - GPU-accelerated transforms
- **Proper Event Cleanup** - useEffect cleanup functions
- **Responsive Loading** - Progressive enhancement

## Browser Compatibility

- Modern browsers supporting:
  - CSS Grid and Flexbox
  - CSS Custom Properties
  - ES6+ JavaScript features
  - requestAnimationFrame

## Development Commands

```bash
# Development
pnpm dev                    # Start development server

# Type checking
pnpm type-check            # Run TypeScript compiler

# Linting
pnpm lint                  # Run ESLint

# Build
pnpm build                 # Production build
```

## Future Enhancements

Planned animation phases:
1. **Level 1**: Basic fade-ins and hover effects
2. **Level 2**: Scroll-triggered animations with stagger
3. **Level 3**: Advanced effects (parallax, glassmorphism)

## Notes

- All components use semantic HTML for accessibility
- Responsive design tested on mobile, tablet, and desktop
- Form validation ready for backend integration
- Section numbering system for easy navigation