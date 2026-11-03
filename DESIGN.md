---
name: Warm Afternoon Diary
colors:
  surface: '#fff8f4'
  surface-dim: '#e0d9d3'
  surface-bright: '#fff8f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#faf2ec'
  surface-container: '#f4ece6'
  surface-container-high: '#efe7e1'
  surface-container-highest: '#e9e1db'
  on-surface: '#1e1b18'
  on-surface-variant: '#434841'
  inverse-surface: '#33302c'
  inverse-on-surface: '#f7efe9'
  outline: '#747970'
  outline-variant: '#c3c8be'
  surface-tint: '#4d644a'
  primary: '#4d644a'
  on-primary: '#ffffff'
  primary-container: '#8fa88a'
  on-primary-container: '#273d26'
  inverse-primary: '#b4ceae'
  secondary: '#934a28'
  on-secondary: '#ffffff'
  secondary-container: '#ffa178'
  on-secondary-container: '#783615'
  tertiary: '#635e53'
  on-tertiary: '#ffffff'
  tertiary-container: '#a8a094'
  on-tertiary-container: '#3c372e'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cfeac9'
  primary-fixed-dim: '#b4ceae'
  on-primary-fixed: '#0b200c'
  on-primary-fixed-variant: '#364c34'
  secondary-fixed: '#ffdbcd'
  secondary-fixed-dim: '#ffb596'
  on-secondary-fixed: '#360f00'
  on-secondary-fixed-variant: '#753313'
  tertiary-fixed: '#eae1d3'
  tertiary-fixed-dim: '#cec5b8'
  on-tertiary-fixed: '#1f1b13'
  on-tertiary-fixed-variant: '#4b463c'
  background: '#fff8f4'
  on-background: '#1e1b18'
  surface-variant: '#e9e1db'
typography:
  headline-xl:
    fontFamily: Noto Serif
    fontSize: 40px
    fontWeight: '400'
    lineHeight: 56px
    letterSpacing: -0.01em
  headline-xl-mobile:
    fontFamily: Noto Serif
    fontSize: 30px
    fontWeight: '400'
    lineHeight: 42px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Noto Serif
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 46px
  headline-lg-mobile:
    fontFamily: Noto Serif
    fontSize: 24px
    fontWeight: '400'
    lineHeight: 34px
  headline-md:
    fontFamily: Noto Serif
    fontSize: 22px
    fontWeight: '500'
    lineHeight: 32px
  headline-sm:
    fontFamily: Noto Serif
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 28px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 17px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.25rem
  gutter-desktop: 2rem
  margin: 1.25rem
  margin-tablet: 2rem
  margin-desktop: 3.5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style
This design system crafts an affectionate, gentle sanctuary for mothers and children journeying, lingering, and resting side-by-side. The emotional ambiance mirrors a sun-drenched late afternoon—pages of a linen-bound travel diary turned slowly beside an open nursery window. 

The aesthetic is anchored in warm minimalism intertwined with tactile, pastoral softness. It rejects harsh technical edges, loud alerts, and high-frequency friction. Instead, interactions move at an unhurried, reassuring pace. Visual storytelling relies on generous breathing room, organic arched viewports for photography, natural textures, and delicate hand-drawn accents that evoke hand-stitched memories, pressed botanical leaves, and child-like wonder.

## Colors
The color architecture relies entirely on low-arousal, nature-derived pigments and paper-like warmth:

- **Primary (`#8FA88A` - Sage Green):** Evokes healing, fresh botanical air, forest walks, and emotional calm. Used for primary reassuring focal points, quiet confirmation states, and grounded navigation accents.
- **Secondary (`#D9825B` - Terracotta):** Emulates sun-baked clay, evening warmth, child-like laughter, and affectionate calls to action. Used purposefully to highlight treasured milestones and heartfelt interactive moments.
- **Tertiary / Secondary Surface (`#F1E8DA` - Sand Beige):** Represents natural linen, soft sand, and tactile card fills, separating content layers without rigid divider lines.
- **Base Surface (`#FBF7F0` - Cream Ivory):** The atmospheric canvas across all views, mimicking unbleached cotton sketchbooks and soft ambient daylight.
- **Primary Text (`#3E3A36` - Warm Charcoal):** A deep, soot-softened ink value that prevents harsh contrast fatigue against ivory surfaces.
- **Secondary Text (`#7A726A` - Muted Clay Umber):** Subdued narrative text, supporting metadata, timestamps, and serene secondary guidance.

## Typography
The typography marries literary intimacy with modern ergonomics.

- **Headlines (`Noto Serif` / Fallback: `Gowun Batang`, serif):** Expresses reflective diary entries, chapter markers, and restful titles. Generous line-heights are mandated to preserve an airy, meditative reading cadence.
- **Body & Labels (`Plus Jakarta Sans` / Fallback: `Pretendard`, sans-serif):** Provides a rounded, soft-cornered modernist sans-serif baseline that guarantees immediate clarity for travel logistics, safety notes, and booking details while sustaining warmth.

## Layout & Spacing
A fluid 12-column layout model (collapsing to 6 columns on tablet and 4 columns on mobile) balances functional usability with open, unhurried space. 

- **Breathing Rhythm:** Sections must avoid dense stacking. Vertical margins between sections employ generous intervals (`space-xl` or larger) to evoke scrapbook photo margins.
- **Safe Margins & Flow:** Mobile containers rely on `1.25rem` outer gutters, expanding gracefully up to `3.5rem` on wide desktop environments, ensuring interactive components remain effortlessly reachable for mothers holding infants or navigating single-handedly on the move.

## Elevation & Depth
Depth avoids artificial, cold drop shadows and stark grey elevation rings. Visual hierarchy is established via **tinted ambient shadows** and **organic tonal layering**:

- **Tonal Layering:** The primary canvas `#FBF7F0` serves as ground zero. Embedded cards and panels rest in `#F1E8DA` or elevated `#FFFFFF` with feathered boundaries.
- **Warm Diffuse Shadows:** Floating sheets and elevated cards utilize multi-layered, amber-tinted ambient drops:
  - *Resting card:* `0 8px 24px -4px rgba(122, 114, 106, 0.08)`
  - *Floating modal / Popover:* `0 20px 48px -12px rgba(62, 58, 54, 0.12), 0 4px 12px rgba(217, 130, 91, 0.04)`
- **Soft Boundaries:** Borders are used sparingly. When structure requires separation, use a low-contrast wash of `rgba(62, 58, 54, 0.06)` instead of solid outline strokes.

## Shapes
Shapes express gentleness and protection. Sharp corners are forbidden across all surfaces.

- **Buttons & Chips:** Pill-shaped (`rounded-full` / `9999px`), ensuring tactile comfort and safe, baby-proof visual cues.
- **Cards & Content Surfaces:** Fixed at `20px` corner radii (`1.25rem`), striking a balance between structured legibility and natural softness.
- **Image Arches:** Destination visual frames, resting guides, and journal cover images introduce an asymmetrical or symmetrical top-arch curvature (`border-radius: 9999px 9999px 20px 20px` or `rounded-t-full rounded-b-[20px]`), evoking peaceful cathedral windows, sunshades, and diary vignettes.

## Components

### Buttons
- **Primary:** Fully rounded pill (`rounded-full`), Terracotta `#D9825B` background with `#FBF7F0` text, padded with `1rem` horizontal and `0.75rem` vertical spacing. Active tap scales subtly to `0.98` with a warm amber halo.
- **Secondary / Rest:** Sage Green `#8FA88A` background with `#FBF7F0` text, delivering a calm and non-urgent action cue.
- **Subtle / Ghost:** Sand Beige `#F1E8DA` background with Warm Charcoal `#3E3A36` text.

### Chips & Tags
- Tiny pill capsules (`rounded-full`), padded with `0.75rem` horizontal and `0.375rem` vertical spacing.
- Filter chips toggle between unselected `#F1E8DA` (text: `#7A726A`) and active `#8FA88A` (text: `#FBF7F0`). Accented with micro hand-drawn leaf or star icon indicators.

### Cards
- Radius fixed to `20px`. Background `#FFFFFF` or `#F1E8DA` with ambient warm shadow (`0 8px 24px -4px rgba(122, 114, 106, 0.08)`).
- Generous internal padding of `1.5rem`.
- Internal imagery frequently takes the form of an arch viewport or full bleed top card cut with smooth, continuous curves.

### Form Inputs
- Rounded pill containers (`rounded-full`) or soft containers (`20px`), filled with `#FFFFFF` against `#FBF7F0` ground.
- Placeholder text in `#7A726A`. Focus ring transitions softly to a muted 2px glow of `#8FA88A` without harsh browser outlines.

### Checkboxes & Radios
- Checkboxes feature rounded corners (`6px`), filled with `#8FA88A` upon check, displaying a cream-ivory checkmark.
- Radio buttons feature concentric pill rings transitioning from `#F1E8DA` outward to an inner terracotta `#D9825B` dot.

### Specialized Components
- **Journal Scrapbook Memory Tile:** A card featuring a top arched photo frame, caption set in `Noto Serif`, and a low-opacity hand-drawn botanical stamp in the corner.
- **Nap & Rest Timeline:** A continuous vertical dotted stem in `#8FA88A` anchored by soft, rounded circular milestone badges indicating quiet times, stroller walks, and maternal feeding breaks.