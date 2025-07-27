# HNG Advanced Website Layout Description

*Based on Moodboard Analysis & Content Specifications*

## **Route**: `/hng-advanced`

This document describes the layout and design approach for the new HNG Advanced page, inspired by the moodboard patterns analyzed with specific copy and content requirements.

## **Page Layout Constraints** ✅ IMPLEMENTED GLOBALLY

### Global Container Specifications
- **Max Width**: 1440px centered container applied at root layout level
- **Overflow Control**: `overflow-x-hidden` applied globally to prevent horizontal wiggling
- **Responsive**: Content stays centered even on ultra-wide screens across entire project
- **Padding**: Appropriate left/right padding maintained within container
- **Fixed Elements**: All absolute positioned elements constrained within bounds

### Global Implementation
```jsx
// app/layout.tsx - Root level
<body className="overflow-x-hidden">
  <div className="max-w-[1440px] mx-auto">
    <TopNav />
    {children}
    <FloatingDevNav />
  </div>
</body>

// components/navigation/top-nav.tsx
<div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

// app/globals.css
html {
  overflow-x: hidden;
}
.absolute {
  max-width: 100vw;
}
```

### Project-Wide Fix
This constraint now applies to:
- **All Landing Pages**: Including HNG Advanced, main site, etc.
- **Dashboard Pages**: Client, Agent, Inspector, Admin dashboards  
- **Authentication Pages**: Login, register, verification pages
- **API Documentation**: Swagger UI pages
- **All Components**: TopNav, modals, floating elements

---

## **1. Hero Section**

*Inspired by FYLLA creative studio layout*
**Goal**: Immediate attention + quick understanding + apply CTA

### Layout Structure

- **Container**: Full-width with asymmetric two-column layout
- **Left Column (60% width)**:
  - Large, bold typography for "🔹 **HNG Advanced**"
  - Secondary text: "**Taking a Product to Market**"
  - Subtitle: "Build real-world tools, gain equity, and work with top engineers from Google, Amazon, and more — all in 4 weeks."
  - Two CTAs horizontally aligned: "🔘 **Apply Now**" (primary) + "🔍 **View Tracks**" (secondary)
- **Right Column (40% width)**:
  - Large hero illustration with subtle background gradient
  - Floating visual elements or geometric shapes as accents

### Design Specifications

- **Background**: Deep navy (#0B1120) with subtle gradient overlay
- **Typography**: Extra large heading (72px+), clean sans-serif (Manrope/Space Grotesk)
- **CTAs**: Rounded, filled buttons with hover glow effects
- **Animations**: Light fade-in, smooth scroll, floating iconography
- **Spacing**: Generous padding and margins

---

## **2. What is HNG Advanced Section**

*Inspired by Sonos explanation section*
**Goal**: Explain purpose briefly

### Layout Structure

- **Container**: Centered single-column with generous white space
- **Content**:
  - **Main Text**: "HNG Advanced is a 4-week elite challenge designed to take participants from idea to market. Finalists from HNGi11 get to work on Telex, collaborate across tracks, and build real, usable plugins for launch."
  - **Bold Tagline**: "🌐 **Real code. Real team experience. Real impact.**"

### Design Specifications

- **Background**: Light section to contrast with dark hero
- **Typography**: Medium-sized body text with excellent line height
- **Highlight**: Tagline centered and highlighted in electric blue (#38BDF8)

---

## **3. What You Get Section** ✅ MODIFIED

*Based on whatYouGet.jpg moodboard - Clean 2-column layout*
**Goal**: Realistic expectations with detailed explanations

### Layout Structure

- **Container**: Less than half-width, right-aligned section
- **Header**: Realistic introduction text ("We're not promising you the world, but here's what we can deliver:")
- **Content**: Two-column grid within the right-aligned container
- **Items**: 6 benefits with titles and detailed descriptions

### Benefits List

1. **Top-notch Mentorship** - From Google, Amazon, and top-tier engineering companies
2. **Endorsement Letter & Certification** - Unlike regular finalists, HNG Advanced provides formal endorsement + completion certification  
3. **Portfolio-Ready Projects** - Live projects that remain active for years, not just demo projects
4. **Priority Job Placement** - Finalists considered top talent, prioritized for HNG employment opportunities
5. **Mentorship Opportunities** - Priority to mentor future HNG cohorts
6. **Technical Endorsement/Recommendation** - Professional recommendations for career advancement

### Design Specifications

- **Layout**: Right-aligned, less than 50% width container
- **No Emojis**: Clean text-based design following moodboard
- **Color Highlights**: Core benefits use accent colors for emphasis
- **Typography**: Clear hierarchy with detailed subtext explanations
- **Background**: Clean, minimal styling

---

## **4. Our Mentors Section**

*Inspired by testimonial + team grid layouts*
**Goal**: Highlight prestige; optional image carousel or cards

### Layout Structure

- **Top**: Centered intro text about mentor prestige
- **Grid**: 2x2 or 3-column layout of mentor cards
- **CTA**: "🔍 **Meet the Mentors**" button below the grid

### Mentor Card Design

- Circular profile image (100px)
- Name + Title + Company
- Clean, minimal cards with subtle shadows

### Design Specifications

- **Content**: "Industry experts from Google, Amazon, Meta, and other top tech firms will mentor, host code reviews, and lead masterclasses."
- **Images**: Circular profile photos (mentor1.jpg, mentor2.png, mentor3.png)
- **Layout**: Responsive grid with proper spacing
- **CTA**: Opens modal or scrolls down to mentor grid

---

## **5. Who Can Apply Section** ✅ MODIFIED

*Based on "Who Can Apply" moodboards - Text highlighting + auto-scroll cohorts*
**Goal**: Filter expectations clearly with comprehensive cohort display

### Layout Structure

- **Container**: Single centered column with decorative elements
- **Header**: Large highlighted text ("We're looking for challengers at heart and builders by nature")
- **Cohorts**: Auto-scrolling horizontal list of all HNG cohorts
- **Important Notice**: Reduced width notification box

### Content Specifications

- **Heading**: Text with selective highlighting (like "challengers" and "builders")
- **Cohorts List**: HNG i1 through i11 (all eligible), HNG i12 (not eligible - red styling)
- **Auto-scroll**: Horizontal scrolling cohort cards with pause on hover
- **Years**: i11(2024), i10(2023), i9(2022), i8(2021), i7(2020), i6(2019), i5(2018), i4(2017), i3(2016), i2(2015), i1(2014)
- **Capacity**: "10–15 per track" in reduced-width notice box
- **Remove**: "Check eligibility" button (deleted)

### Design Specifications

- **Typography**: Large impact text with selective color highlighting
- **Decorative Elements**: Badge, circular backgrounds, star icons (constrained within 1440px)
- **Auto-scroll**: Smooth horizontal movement, pause on hover, drag interaction
- **Colors**: Green for eligible, red for i12 not eligible
- **Background**: Clean white section with contained decorative elements

---

## **6. Available Tracks Section**

*Inspired by portfolio category filters*
**Goal**: Inform about team roles

### Layout Structure

- **Mobile**: Horizontal scrollable chips
- **Desktop**: Responsive grid layout (4-5 columns)
- **Tracks**: 13 different specializations

### Track List

1. **UI Design**
2. **Graphics Design**
3. **Frontend Development**
4. **Backend Development**
5. **QA Testing**
6. **Product Management**
7. **Sales & Marketing**
8. **Video Editing**
9. **DevOps**
10. **Data Analysis**
11. **Context Engineering**
12. **Growth Marketing**
13. **Admin Roles**

### Track Card Design

- Rounded card/chip design
- Track name + small relevant icon
- Short description (1-line)
- "Apply Now" micro-CTA that preselects track in modal
- Active states and hover effects

### Design Specifications

- **Organization**: Responsive grid pattern
- **Interaction**: Hover effects and selection states
- **CTAs**: Individual apply buttons per track

---

## **7. How It Works Section** ✅ MODIFIED

*Based on how.jpg moodboard - Individual card tilt + auto-scroll*
**Goal**: Show competitive process with dynamic presentation

### Layout Structure

- **Format**: Auto-scrolling horizontal card carousel
- **Container**: Individual cards tilted 1-2 degrees each
- **Steps**: 5 cards with different colors (dark, light, blue, dark, yellow)
- **Auto-scroll**: Continuous movement with pause on hover, drag interaction

### Step Content

1. **Apply and select your track** (Dark card)
2. **Join a cross-functional team** (Light gray card)
3. **Begin work on real plugin projects** (Blue accent card)
4. **Evictions happen weekly — top contributors stay** (Dark card)
5. **Finalists earn equity, endorsement, and visibility** (Yellow card)

### Card Design

- **Individual Tilt**: Each card rotated 1-2 degrees independently
- **Number Circles**: Top-left corner with "01", "02" format
- **Arrow Icons**: Top-right corner progression indicators
- **Color Variety**: Following moodboard pattern

### Auto-scroll Specifications

- **Movement**: Smooth horizontal auto-scroll
- **Pause on Hover**: Stop auto-scroll when user hovers
- **Drag Interaction**: Allow manual dragging/scrolling
- **Seamless Loop**: Duplicate cards for infinite scroll effect
- **Responsive**: Works on desktop and mobile

### Design Specifications

- **Background**: Clean light section
- **Warning Card**: 30% elimination as separate tilted metric card
- **Typography**: Clear hierarchy within each card
- **Performance**: 60fps smooth scrolling with requestAnimationFrame

---

## **8. Themes & Project Focus Section**

*Inspired by product feature section*
**Goal**: Define what they'll build

### Layout Structure

- **Layout**: Two-column asymmetric layout
- **Left (60%)**: Text content about Telex and plugin development
- **Right (40%)**: Large illustration showing plugin concepts

### Content Specifications

- **Main Text**: "Each team will work on **Telex**, building plugins and features that will ship to real users. Plugin ideas range from **Calendars, Zoom Integrations, Form Builders, to Admin Tools**."

### Design Specifications

- **Visual**: Clean separation between text and visual elements
- **Examples**: Specific plugin types highlighted
- **Illustration**: plugin-illustration.png showing interconnected tools

---

## **9. Call-to-Action Section**

*Inspired by portfolio final CTA*
**Goal**: Final push for application (Sticky or Final)

### Layout Structure

- **Container**: Centered, full-width section
- **Content Structure**:
  - **Heading**: "**Ready to build?**"
  - **Subheading**: "Let's take your skills to the market."
  - **Primary CTA**: "🔘 **Apply Now**"
  - **Secondary Link**: "🔗 **Join Slack for updates**" (disabled with tooltip)

### Design Specifications

- **Background**: Deep navy with subtle pattern or gradient
- **Button**: Prominent with hover glow effect
- **Typography**: Bold, compelling copy
- **Links**: Slack link for ongoing updates (disabled with tooltip)

---

## **10. Application Modal**

*Clean, minimal form design*
**Goal**: Capture applications with validation

### Layout Structure

- **Format**: Centered overlay modal
- **Form Fields**:
  - **Full Name** (required)
  - **Email** (required)
  - **HNGi11 ID** (required, validate if possible)
  - **Choose Track** (dropdown with 13 options)
  - **Short motivation** (optional textarea)

### Form Design

- Vertical form layout with proper spacing
- Clear field labels and real-time validation
- **Submit Button**: "**Join HNG Advanced**"
- Close option in top corner

### Design Specifications

- **Styling**: Clean, generous padding, subtle shadow
- **Interaction**: Smooth animations and transitions
- **Validation**: Real-time field validation with error states
- **Track Pre-selection**: When coming from track cards

---

## **11. Footer**

*Minimal, informational*

### Layout Structure

- **Content**: Brand and contact information
- **Layout**: Simple centered layout with organized sections

### Content Specifications

- **Logo**: HNG logo (hng-logo.png)
- **Route**: hng.tech/advanced-hng
- **Contact**: +234-91-3413-5226
- **Socials**: @hnginternship
- **Legal**: Privacy Policy | Terms

### Design Specifications

- **Background**: Dark background with light text
- **Typography**: Clean, minimal styling
- **Links**: Hover states for all interactive elements

---

## **Global Design Principles**

### Color Palette

- **Primary**: Deep navy blue (#0B1120)
- **Accent**: Electric blue (#38BDF8), Light indigo (#3B82F6)
- **Background**: Gradients, glows, soft neon effects

### Typography

- **Fonts**: Manrope or Space Grotesk
- **Hierarchy**: Clear size and weight differentiation
- **Spacing**: Excellent line height and letter spacing

### Layout Principles

1. **Generous White Space**: All sections have breathing room
2. **Clear Typography Hierarchy**: Bold headings, readable body text
3. **Asymmetric Layouts**: Not everything is perfectly centered
4. **Card-based Components**: Clean, bordered sections for features
5. **Dark/Light Section Alternation**: Creates visual rhythm
6. **Subtle Gradients**: Background interest without distraction
7. **Minimal Color Palette**: Primary colors used sparingly for impact
8. **Clean, Modern Aesthetics**: No unnecessary decorative elements

### Responsive Behavior

- **Mobile First**: Design scales down gracefully
- **Breakpoints**: Standard responsive breakpoints
- **Touch Targets**: Adequate size for mobile interaction
- **Performance**: Optimized images and smooth animations

---

## **Technical Implementation Notes**

### Components to Build

- `HeroSection.tsx`
- `WhatIsHNG.tsx`
- `WhatYouGet.tsx`
- `MentorSection.tsx`
- `EligibilitySection.tsx`
- `TracksGrid.tsx`
- `HowItWorks.tsx`
- `ProjectFocus.tsx`
- `FinalCTA.tsx`
- `ApplicationModal.tsx`

### Assets Needed

- Hero illustration
- Mentor profile images
- Track icons
- Plugin illustration
- HNG logo
- Background patterns/gradients

### Animations

- Fade-in on scroll
- Hover effects on cards and buttons
- Smooth modal transitions
- Floating iconography
- Button glow effects

---

## **TERTIARY NEEDS - Advanced Interaction & Animation Specifications**
*To be implemented AFTER basic layout is complete and verified*

### **Phase 1: Basic Animations (Level 1)**
- **Simple fade-ins**: Elements appear on scroll entry
- **Basic hover effects**: Button scaling, color transitions
- **Form interactions**: Input focus states, validation feedback
- **Modal transitions**: Smooth open/close with backdrop blur

### **Phase 2: Scroll-Triggered Animations (Level 2)**
- **Staggered reveals**: Cards appear sequentially with 100ms delays
- **Text animations**: Words/lines reveal on scroll with typewriter effect
- **Progress indicators**: Section completion tracking
- **Intersection Observer**: Performance-optimized scroll triggers

### **Phase 3: Advanced Effects (Level 3)**
- **Parallax scrolling**: Subtle background movement in hero section
- **Glassmorphism**: Frosted glass effects on cards and modal
- **Particle systems**: Floating geometric shapes in hero background
- **Cursor interactions**: Custom cursor states for different UI elements
- **Gradient animations**: Subtle background color transitions

### **Technical Implementation Requirements**

#### **Animation Libraries to Install**
```bash
# Framer Motion for React animations
pnpm add framer-motion

# Intersection Observer utilities
pnpm add react-intersection-observer

# Additional animation utilities
pnpm add @react-spring/web
```

#### **Performance Specifications**
- **GPU Acceleration**: Use `transform` and `opacity` for animations
- **60fps Target**: All animations must maintain smooth performance
- **Reduced Motion**: Respect `prefers-reduced-motion` accessibility setting
- **Progressive Enhancement**: Graceful degradation for older browsers

#### **Accessibility Considerations**
- **Motion Controls**: Toggle for users sensitive to motion
- **Focus Management**: Proper tab order during animations
- **Screen Reader**: Announce important state changes
- **Color Accessibility**: Maintain contrast ratios during transitions

#### **Animation Timing & Easing**
- **Fast Interactions**: 150-250ms for hovers and clicks
- **Content Reveals**: 400-600ms for scroll-triggered animations
- **Modal Transitions**: 300ms open, 200ms close
- **Easing Functions**: `cubic-bezier(0.4, 0, 0.2, 1)` for natural feel

---

*This layout combines the clean minimalism of creative studio designs with structured information presentation, perfect for HNG Advanced's professional yet innovative positioning.*
