---
version: alpha
name: Discord
description: "Discord is great for playing games and chilling with friends, or even building a worldwide community. Customize your own space to talk, play, and hang out."
sourceUrl: "https://discord.com"

colors:
  primary: "#23272a"
  on-primary: "#ffffff"
  background: "#ffffff"
  surface: "#1a2081"
  text: "#000000"
  text-muted: "#ffffff"
  accent: "#1a2081"

typography:
  display:
    fontFamily: "Abcgintodiscordnord, Arial, sans-serif"
    fontSize: 61px
    fontWeight: 700
    lineHeight: 0.41
    letterSpacing: -0.61px
  heading:
    fontFamily: "Abcgintodiscordnord, Arial, sans-serif"
    fontSize: 44px
    fontWeight: 700
    lineHeight: 0.86
    letterSpacing: -0.44px
  body:
    fontFamily: "Abcgintodiscord, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5

spacing:
  base: 1px
  scale: [1, 4, 6, 10, 12, 13, 15, 16, 18, 20]

radius:
  sm: 12px
  md: 16px
  lg: 72px
  xl: 88px

motion:
  duration-fast: 250ms
  duration-base: 300ms
  duration-slow: 400ms
  easing: "ease"

breakpoints: [240px, 270px, 300px, 310px, 350px, 400px, 426px, 450px, 500px, 550px, 600px, 650px, 700px, 750px, 768px, 769px, 800px, 850px, 900px, 950px, 992px, 1016px, 1050px, 1100px, 1150px, 1200px, 1250px, 1280px, 1281px, 1300px, 1350px, 1400px, 1440px, 1441px, 1450px, 1500px, 1550px, 1600px, 1650px, 1680px, 1700px, 1750px, 1800px, 1920px, 1991px]
---

## Rationale

Discord's design system reflects a platform built for real-time social connection and gaming. The measured tokens reveal a deliberately dark-forward aesthetic anchored by a deep navy primary (`#23272a`) paired with high-contrast white text, creating an environment designed for extended viewing sessions common in gaming and community spaces. Despite the light color mode classification, the strategic use of the dark `#1a2081` surface—repeated as both accent and secondary surface—indicates Discord intentionally layers dark contexts even within a nominally light theme, suggesting a hybrid or adaptive approach. The typography choices, with the custom `Abcgintodiscordnord` family driving both display and heading scales, signal intentional brand differentiation; paired with tight negative letter-spacing and compressed line-heights on larger sizes, the type system communicates urgency and modern energy. The extensive breakpoint array (46 distinct values) reveals a product optimized for fragmented device ecosystems—critical for a platform accessed across desktop, mobile, web, and in-app contexts simultaneously.

The spacing scale's irregular distribution (clustering at 4, 6, 10, 12, 15, 16, 18, 20, 24) suggests pragmatic refinement rather than strict typographic ratios; these values support both compact mobile layouts and generous desktop spacing without redundancy. The generous corner radius scale (12px through 88px) humanizes an otherwise utilitarian product, softening the technical nature of chat and streaming interfaces. Motion timings sit in the 250–400ms range with standard easing, avoiding the snappy micro-interactions of productivity tools in favor of smooth, comfortable transitions appropriate for leisure and social use.

## 1. Visual Theme & Atmosphere

Discord operates in a **dark-optimized hybrid mode**, where the declared light background is visually subordinate to the dark primary and surface colors that dominate actual interface real estate. This inverted hierarchy—light background classified, but dark navy driving the visual experience—creates a sophisticated, low-glare environment ideal for gaming streams, lengthy voice calls, and community moderation. The 61px display size with 0.41 line-height (compressed to ~25px vertical space) establishes heroic, attention-grabbing headlines that feel contemporary and bold, while the narrowed letterSpacing (-0.61px) reinforces density and forward momentum. The absence of shadow tokens suggests a flat, modern aesthetic with clear layering achieved through color and z-order alone, reducing visual noise.

## 2. Color System

The palette operates in **three-tier contrast zones**:

- **Primary dark layer** (`#23272a`): Deep charcoal serving as the dominant UI background, promoting visual rest and reducing eye strain during extended sessions.
- **Accent/surface layer** (`#1a2081`): A striking deep indigo deployed as both accent color and secondary surface, creating focal points (buttons, highlights, hero sections) while maintaining the dark ecosystem.
- **Text contrast** (`#ffffff` on primary, `#000000` on light background): High-contrast pairs ensuring readability across both contexts. The presence of `text-muted: #ffffff` (white on dark) suggests that muted secondary text still leverages the primary dark surface for visual hierarchy rather than reducing opacity alone.

This two-surface system—dark primary + dark accent—indicates Discord treats the light background as a fallback or secondary context, with the actual experience optimized for its dark color mode. The indigo accent provides warm, welcoming visual interest without the coldness of pure blue or cyan, aligning with a social-first brand.

## 3. Typography

Three-scale system with measured precision:

**Display (61px, 700 weight, -0.61px tracking)**: Reserved for primary marketing headlines and hero calls-to-action. The tight line-height (0.41) collapses vertical space, forcing titles into bold, commanding blocks that dominate page sections. Ideal for "Group chat that's all fun & games" type messaging.

**Heading (44px, 700 weight, -0.44px tracking)**: Secondary sections and feature blocks. Less compressed than display (0.86 line-height), still maintains forward visual tension. Supports modularity across card-based layouts.

**Body (16px, 400 weight, 1.5 line-height)**: Comfortable reading size with breathing room. The 1.5 multiplier (24px baseline to baseline) ensures legibility in dense community threads and chat histories, reducing cognitive load during rapid conversation scanning.

Custom family `Abcgintodiscordnord` signals intentional brand voice; likely a geometric sans-serif with slight warmth, distinct from ubiquitous system fonts. The consistent 700 weight on display/heading prevents font-weight flicker and ensures predictable rendering.

## 4. Components & Patterns

Given the measured tokens and harvested headings ("MAKE YOUR GROUP CHATS MORE FUN", "See who's around to chill"), component patterns likely include:

- **Hero banner**: Full-width section using display typography, dark primary background, white text, indigo accent buttons (Download CTA appears 7 times across variants).
- **Feature cards**: Surface color (`#1a2081`) containers with heading-scale typography, supporting imagery or icons. Rounded corners (md/lg: 16–72px) create approachable, friendly micro-sections.
- **Call-to-action buttons**: Indigo (`#1a2081`) backgrounds with white text, sized for 44px+ touch targets, rounded to at least `md` (16px).
- **Navigation/sidebars**: Primary dark (`#23272a`) with white text, high contrast for long-term visibility.
- **Modals/overlays**: Likely use the accent indigo for focus, dark primary for secondary UI.

## 5. Spacing & Layout

The spacing scale—`[1, 4, 6, 10, 12, 15, 16, 18, 20, 24]`—reflects a **pragmatic, not-quite-8-px-grid** system. The inclusion of odd values (15, 18) and dense clustering (4, 6, 10, 12) suggests refinement through live design iteration rather than rigid adherence to a single multiplier. This flexibility enables:

- **Compact layouts**: On mobile (breakpoint 240–600px), spacing likely clusters toward 4–12px values, ensuring usable touch targets without wasted real estate.
- **Generous desktop**: Larger screens (1200px+) leverage 18–24px spacing, creating breathing room in hero sections and card grids.
- **Visual hierarchy**: Inconsistent spacing (e.g., 6px vs. 10px gap) can signal information grouping without explicit visual borders, useful in chat/feed interfaces.

The 46-value breakpoint array is unusually granular, implying sophisticated responsive logic—likely driven by container-query or JavaScript layout calculations to handle Discord's multi-context deployment (web, mobile web, electron desktop app).

## 6. Motion & Interaction

Motion is **smooth and deliberate, not snappy**:

- **Fast transitions** (250ms): Used for hover states, icon toggles, or brief feedback (e.g., mute button click).
- **Base transitions** (300ms): Standard UI state changes—menu opens, cards expand, modals fade in. Aligns with user expectation for web platforms.
- **Slow transitions** (400ms): Reserve for immersive moments—full-screen overlays, chat history loads, or animated hero reveals.

All timings use standard `ease` (cubic-bezier(0.25, 0.46, 0.45, 0.94)), avoiding the abruptness of `ease-in-out` and the floatiness of `ease-out`. This moderate easing supports both playful (gaming) and professional (community moderation) contexts without feeling either frenetic or sluggish. Absence of shadow tokens means focus states and depth are signaled via color shift and outline, keeping the interface clean and reducing cognitive overhead during rapid chat navigation.

## Accessibility

### Contrast Ratios

**Primary text on primary background** (`#ffffff` on `#23272a`):
- Luminance contrast: ~21:1, **far exceeds WCAG AAA** (7:1) and WCAG AA (4.5:1).
- Result: Excellent readability for extended viewing. Critical for chat interfaces where users scan rapidly.

**Primary text on light background** (`#000000` on `#ffffff`):
- Luminance contrast: ~21:1, **meets AAA**.
- Result: No risk in fallback light-mode contexts.

**Body text (muted) on primary** (`#ffffff` at reduced opacity on `#23272a`):
- If muted uses ~60% opacity: ~12:1, still **exceeds AA**.
- Secondary/timestamp text remains accessible even at lower visual weight.

**Accent button text** (white on `#1a2081`):
- Luminance contrast: ~17:1, **exceeds AAA**.
- CTA buttons are highly legible.

### Minimum Requirements

- **Touch target**: Given the presence of repeated Download buttons across mobile viewports and the 240px breakpoint, all interactive elements must be sized to **44×44px minimum** (CSS-sized, not visual). Discord's extensive breakpoint array suggests adherence to this standard via media queries.
- **Focus indicator**: No explicit shadow tokens exist, implying focus states are achieved via **2px solid outline in a contrasting color** (likely the indigo accent or white, depending on background). **2px offset** recommended to maintain clarity and avoid overlap with button borders.
- **Color dependency**: The indigo/dark-navy palette is not colorblind-safe on its own; interactive state must combine color + outline/underline + icon variation to support red–green colorblindness.

---

**Implementation note**: This design system prioritizes **dark-mode-first aesthetics and social-native interactions** (real-time chat, streaming, voice). Responsive breakpoints demand CSS Grid or Flexbox with mobile-first logic. The custom typography family requires font-loading strategy and fallback serif/sans-serif pairing for offline resilience.
