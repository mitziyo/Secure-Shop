---
name: Obsidian Cipher
colors:
  surface: '#111418'
  surface-dim: '#111418'
  surface-bright: '#36393e'
  surface-container-lowest: '#0b0e12'
  surface-container-low: '#191c20'
  surface-container: '#1d2024'
  surface-container-high: '#272a2f'
  surface-container-highest: '#32353a'
  on-surface: '#e1e2e8'
  on-surface-variant: '#b9cbbc'
  inverse-surface: '#e1e2e8'
  inverse-on-surface: '#2e3135'
  outline: '#849587'
  outline-variant: '#3b4a3f'
  surface-tint: '#00e38b'
  primary: '#f4fff3'
  on-primary: '#00391f'
  primary-container: '#00ff9d'
  on-primary-container: '#007143'
  inverse-primary: '#006d40'
  secondary: '#bdf4ff'
  on-secondary: '#00363d'
  secondary-container: '#00e3fd'
  on-secondary-container: '#00616d'
  tertiary: '#fffaff'
  on-tertiary: '#670020'
  tertiary-container: '#ffd5d8'
  on-tertiary-container: '#c50045'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#56ffa8'
  primary-fixed-dim: '#00e38b'
  on-primary-fixed: '#002110'
  on-primary-fixed-variant: '#00522f'
  secondary-fixed: '#9cf0ff'
  secondary-fixed-dim: '#00daf3'
  on-secondary-fixed: '#001f24'
  on-secondary-fixed-variant: '#004f58'
  tertiary-fixed: '#ffd9dc'
  tertiary-fixed-dim: '#ffb2ba'
  on-tertiary-fixed: '#400011'
  on-tertiary-fixed-variant: '#910030'
  background: '#111418'
  on-background: '#e1e2e8'
  surface-variant: '#32353a'
typography:
  display:
    fontFamily: Space Grotesk
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-mobile:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
    letterSpacing: 0em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0.01em
  label-mono-lg:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-mono-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.08em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
---

## Brand & Style

This design system targets an ultra-exclusive demographic: elite security researchers, principal systems architects, and high-net-worth cyber engineers acquiring ultra-rare hardware, bespoke cryptographic tools, and classified-grade engineering lifestyle instruments. The UI must feel like an encrypted air-gapped terminal merged with a high-end horological catalog.

The aesthetic philosophy is **Cyber-Minimalism with Tactile Glassmorphism**:
- **Obsidian Dark Architecture:** Deepest void blacks and structured slates establish focus, high focus fidelity, and total zero-light distraction.
- **Precision Engineering Accents:** Electric Emerald signals verified operational state and cryptographic integrity; Cyber Cyan governs navigational focal points and interactive states.
- **Micro-Grid Technical Texture:** A subtle 1px dot-matrix overlay (4% opacity) grounds all viewports, evoking microchip substrate and radar precision.
- **Cryptographic Rigor:** Visual hierarchy prioritizes provenance badges, cryptographic signatures, and hardware authentication states over generic consumer marketing tropes.

## Colors

The palette is engineered around ultra-high contrast against pure deep obsidian surfaces, prioritizing instant optical verification:

- **Primary (`#00FF9D` — Electric Emerald):** Applied strictly to cryptographic success badges, zero-trust validation indicators, verified provenance hashes, and finalized transaction states.
- **Secondary (`#00E5FF` — Cyber Cyan):** Governs interactive elements, cursor focus states, technical metrics, selected hardware configurations, and active link outlines.
- **Tertiary (`#FF3366` — Laser Hazard):** Reserved exclusively for cryptographic warnings, tamper-evident alerts, hardware key mismatch notices, and critical vault expirations.
- **Neutral Palette:**
  - Base Surface (`#080B0F`): Deep obsidian base layer.
  - Layer 1 Container (`#0F141C`): Slate structural panels and card backgrounds.
  - Layer 2 Glass Surface (`#151C27` at 70% opacity with 16px backdrop blur).
  - Borders & Gridlines (`#1E293B` at 60% opacity): 1px hair-thin division lines.
  - Text Primary (`#F1F5F9`): Laser-etched white for primary readouts.
  - Text Muted (`#64748B`): Technical specification metadata and hash signatures.

## Typography

The typographic hierarchy enforces tactical discipline. Space Grotesk anchors high-level catalog items and editorial tiers with geometric authority. Inter delivers neutral, hyper-legible descriptions for multi-thousand-dollar engineering specs. JetBrains Mono provides deterministic precision for serial numbers, cryptographic public keys, checksum readouts, and OWASP certification labels.

- **Numerics & Hex Identifiers:** Always set in `label-mono-*` with uppercase formatting to prevent character ambiguity (`0` vs `O`, `1` vs `l`).
- **Editorial Contrast:** Headings above 24px must maintain tight letter-spacing (`-0.02em` to `-0.03em`) to project architectural density.

## Layout & Spacing

The layout is built upon an uncompromising 12-column mathematical grid framed by a fixed max-width container of `1440px`.

- **Desktop (1280px+):** 12 columns, `1.5rem` (`24px`) gutters, `2rem` (`32px`) external margins.
- **Tablet (768px – 1279px):** 8 columns, `1rem` (`16px`) gutters, `1.5rem` (`24px`) margins.
- **Mobile (< 768px):** 4 columns, `0.75rem` (`12px`) gutters, `1rem` (`16px`) margins.

Spacing follows strict 4px/8px cadences. Data-dense technical panels compress with `space-xs` and `space-sm` internal padding, whereas hero presentations and physical hardware showpieces expand outward using `space-xl` and `space-2xl` breathing room to retain an ultra-luxury editorial presence.

## Elevation & Depth

Depth is constructed through physical surface layering, optical refraction, and selective laser luminescence rather than blurred drop shadows:

- **Surface Tier 0 (Canvas Base):** Solid `#080B0F` paired with an SVG micro-grid texture (24px interval, 1px lines at 3% opacity).
- **Surface Tier 1 (Structural Modules):** Solid `#0F141C` bounded by a 1px border of `#1E293B` at 40% opacity.
- **Surface Tier 2 (Tactile Glassmorphism Cards):** `#151C27` background at 65% opacity with `backdrop-filter: blur(20px)` and a directional 1px perimeter border (`rgba(255, 255, 255, 0.08)` on the top/left edge, fading to `rgba(255, 255, 255, 0.02)` on bottom/right).
- **Active / Verified Luminescence:** Elevated interactive cards cast a focused perimeter ambient glow using `0 0 24px -4px rgba(0, 255, 157, 0.15)` when validated, or `0 0 24px -4px rgba(0, 229, 255, 0.15)` upon operational focus.
- **Modals & Hardware Key Overlays:** Absolute elevation `#0F141C` with `backdrop-filter: blur(32px)`, framed with a dual border: inner 1px `#00FF9D` at 30% opacity, outer 1px `#000000`.

## Shapes

The design system employs a disciplined **Soft (`1`)** shape language. All corners are engineered with tight precision radii (`0.25rem` / `4px` baseline) reflecting precision-milled aerospace aluminum, chamfered silicon wafers, and CNC-machined hardware tokens.

- **Base Components (Inputs, Chips, Buttons):** `4px` corner radius.
- **Display Cards & Product Modules (`rounded-lg`):** `8px` corner radius.
- **Primary Vault Overlays & Security Modals (`rounded-xl`):** `12px` corner radius.
- **Chamfer Variant (Optional CSS Cut):** For provenance verification seals and security chip indicators, a 45-degree `3px` corner clip is permitted to echo military cryptoprocessor packages.

## Components

### Buttons
- **Primary Execution (Action):** Solid `#00FF9D` text on dark substrate with an intense `1px` border of `#00FF9D`. Hover triggers a filled transition to `#00FF9D` with `#080B0F` text and an electric emerald halo (`box-shadow: 0 0 16px rgba(0, 255, 157, 0.35)`). Label set in `JetBrains Mono` 13px all-caps.
- **Secondary (Inspect / Configure):** Translucent glass surface (`#151C27` at 80%), 1px `#00E5FF` muted border (`40%` opacity). Hover brings border to 100% opacity with cyan text highlight.
- **Destructive / Abort:** Border and text in `#FF3366`, zero background fill, sharp red illumination on hover.

### Cryptographic Badges & Provenance Chips
- Small-scale tags formatted in `label-mono-sm`.
- Contained within `#0F141C` background and flanked by a 1px dynamic border.
- **OWASP Level-3 Verified:** Prepended with an emerald pulsing micro-dot (`4px` diameter) and cryptographic lock icon.
- **Hardware-Key Status:** Displays physical key presence (`YubiKey 5 FIPS: CONNECTED`) with cyber cyan dot and hash digest (`SHA-256: 8f9b...e21a`).

### Cards & Product Display
- Structural glassmorphism with 20px blur, 1px gradient hairline border, and internal padding of `space-lg`.
- Top header showcases the hardware item's cryptographic serial, live inventory allocation count, and verifiable supply provenance.
- Imagery utilizes dark-field studio lighting with clean obsidian drop-shadows and no background blowout.

### Input Fields
- Dark recessed background (`#0B0E14`), inset border of `#1E293B`.
- Active focus transitions the border to `#00E5FF` with a zero-delay `0 0 0 1px #00E5FF` highlight.
- Monospaced typography for wallet addresses, API credentials, and cryptographic keys.

### Checkboxes & Segmented Selectors
- Checkboxes are 16x16px squares with a 2px radius. Unchecked: `#1E293B` border. Checked: `#00FF9D` fill with `#080B0F` check glyph.
- Segmented selectors (e.g., tier switches, architecture toggles: `x86_64` vs `ARM64` vs `RISC-V`) use dark pill containers with active states illuminated in cyber cyan.

### Verified Provenance Drawer / Modal
- Slide-over panel featuring ledger verification: Block height, Merkle root proof, physical factory seal inspection photos, and dual-custody multisig clearance signatures.