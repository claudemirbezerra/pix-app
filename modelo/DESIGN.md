---
name: Pix Clear Vault
colors:
  surface: '#0a122a'
  surface-dim: '#0a122a'
  surface-bright: '#313852'
  surface-container-lowest: '#050d25'
  surface-container-low: '#131a33'
  surface-container: '#171e37'
  surface-container-high: '#212942'
  surface-container-highest: '#2c344d'
  on-surface: '#dbe1ff'
  on-surface-variant: '#b9cbbd'
  inverse-surface: '#dbe1ff'
  inverse-on-surface: '#282f49'
  outline: '#849588'
  outline-variant: '#3b4a3f'
  surface-tint: '#00e38f'
  primary: '#cdffdc'
  on-primary: '#003920'
  primary-container: '#00f59b'
  on-primary-container: '#006b41'
  inverse-primary: '#006d42'
  secondary: '#4edea3'
  on-secondary: '#003824'
  secondary-container: '#00a572'
  on-secondary-container: '#00311f'
  tertiary: '#e8f5ff'
  on-tertiary: '#00354a'
  tertiary-container: '#a8deff'
  on-tertiary-container: '#006488'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#53ffab'
  primary-fixed-dim: '#00e38f'
  on-primary-fixed: '#002111'
  on-primary-fixed-variant: '#005231'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#c4e7ff'
  tertiary-fixed-dim: '#7bd0ff'
  on-tertiary-fixed: '#001e2c'
  on-tertiary-fixed-variant: '#004c69'
  background: '#0a122a'
  on-background: '#dbe1ff'
  surface-variant: '#2c344d'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.03em
  display-sm:
    fontFamily: Hanken Grotesk
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  title-md:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  body-sm:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0.01em
  code-md:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: -0.01em
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0em
  label-md:
    fontFamily: Hanken Grotesk
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.04em
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.06em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  margin: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system establishes an ultra-precise, high-trust fintech atmosphere tailored for instant payments (Pix) and financial verification workflows. It pairs the architectural gravitas of traditional institutional banking with the swift, digital-first immediacy of modern payment rails.

### Core Character & Mood
- **Unwavering Trust:** Deep slate navy surfaces project institutional safety, data permanence, and clarity under high-stakes financial operations.
- **Immediate Confirmation:** Crisp neon emerald highlights cut through the dark baseline, providing unmistakable visual signals of completed transfers, authentication, and cryptographic validity.
- **Restrained Precision:** Zero visual noise, unnecessary embellishments, or hyperactive gradients. Surfaces are planar, matte, and deliberate.

### Design Movement
- **Modern Minimalist Fintech with Subtle Luminescence:** The aesthetic relies on strict geometric alignment, subdued structural boundaries, and luminous green accents reserved strictly for confirmation states, transaction totals, and active affordances.

## Colors

The palette is engineered around dark slate-blue field tiers to prevent eye fatigue while amplifying crisp neon functional cues.

### Surface Hierarchy & Contrast Rules
- **Base Canvas (`#070D1E` / `#0B132B`):** The default screen background. Deep, silent dark navy providing maximum contrast for text and receipt cards.
- **Surface Elevation 1 (`#111C3D`):** Primary container for the transfer receipt card, modal dialogs, and parent wrappers.
- **Surface Elevation 2 (`#16234B`):** Inset containers, data detail panels, recipient/sender comparison blocks, and copy-action wrappers.
- **Primary Accent (`#00F59B`):** The primary signal of success and finalized transactions. Applied to transfer amount displays, verified badges, primary action triggers, and completion iconography.
- **Secondary Accent (`#10B981`):** Subdued green for borders, progress steps, and supporting positive delta metrics.
- **Informational Tertiary (`#38BDF8`):** Restrained cyan for secondary transaction metadata, protocol keys (End-to-End IDs), and technical ledger notes.
- **Text & Metadata:**
  - High Emphasis: `#F8FAFC` (98% white-blue tint) for transfer values and names.
  - Medium Emphasis: `#94A3B8` (Slate 400) for transaction timestamps, labels, and bank IDs.
  - Low Emphasis / Disabled: `#475569` (Slate 600) for field dividers, guide keys, and static structural lines.

## Typography

The typographic hierarchy balances instant readability with cryptographic technical rigor:

- **Hanken Grotesk:** Drives primary identity, monetary figures, recipient titles, and narrative confirmation headlines. Its clean geometric rhythm maintains legibility on dark surfaces without optical distortion.
- **JetBrains Mono:** Selected strictly for verification artifacts—Pix End-to-End IDs (E2E ID), authentication hashes, transaction keys, branch codes, and CPF/CNPJ masked numbers. Monospacing ensures character-by-character validation and visual auditability.

### Application Rules
- **Monetary Quantities:** The transferred amount uses `display-lg` with tabular figures enabled (`tnum`) to maintain structural balance. Currency symbols (`R$`) sit at `title-md` vertically aligned to the baseline cap-height.
- **Field Labels:** Labels use `label-sm` transformed to uppercase with positive tracking (+0.06em) and slate coloration (`#94A3B8`) for clear separation from dynamic data values.

## Layout & Spacing

A centralized, focused layout designed for rapid inspection and verification on desktop displays.

### Layout Mechanics
- **Receipt Canvas Width:** The primary receipt container is fixed at a centered max-width of `640px` on desktop displays to emulate an authentic digital document slip without stretching lines of metadata.
- **Auxiliary Desktop Layout:** On wider screens (>1200px), a 12-column layout can place the receipt slip across columns 4–9, with optional export/share toolbars and balance impact insights flanking in adjacent columns.
- **Rhythm & Grid Alignment:** Spacing strictly adheres to an 8px grid baseline (`space-xs` = 4px, `space-sm` = 8px, `space-md` = 16px, `space-lg` = 24px, `space-xl` = 40px). Vertical gap between receipt data items is standardized at `space-md`.

## Elevation & Depth

Visual hierarchy on dark surfaces relies on tonal layering combined with low-intensity, wide-radius ambient shadows and hairline borders.

### Depth Stratification
- **Background Layer (Level 0):** `#070D1E`—Solid, non-reflective base plane.
- **Receipt Slab (Level 1):** `#111C3D` paired with an ambient shadow: `0 24px 48px -12px rgba(3, 7, 18, 0.65)`, complemented by a diffused emerald undertone `0 0 80px -20px rgba(0, 245, 155, 0.08)` centered behind the confirmation badge.
- **Inset Value Panels (Level 2):** `#16234B` rendered flat with an inner border of `1px solid rgba(255, 255, 255, 0.05)`.

### Border & Outline Architecture
- Never use heavy drop-shadows or stark 100% white borders.
- Boundaries are defined by a delicate 1px border: `rgba(255, 255, 255, 0.08)`.
- Interactive surfaces in focus or hover transition their border to `rgba(0, 245, 155, 0.40)` with a subtle outer glow: `0 0 16px rgba(0, 245, 155, 0.15)`.

## Shapes

The design uses balanced, modern curves (`roundedness: 2`) that soften the precision of numerical data while maintaining an architectural silhouette.

### Geometry Token Allocation
- **Receipt Container:** `rounded-xl` (1.5rem / 24px) for the main modal/canvas wrapper to create a distinct document feel.
- **Inner Data Cards & Info Wells:** `rounded-lg` (1rem / 16px) to nest cleanly within the primary container.
- **Buttons & Action Triggers:** `rounded-md` (0.5rem / 8px) for crisp interactive edges.
- **Badges, Tags, and E2E Key Pills:** Full pill format (`9999px`) to immediately indicate state and non-card interactive utility.

## Components

### Transfer Status Banner & Badges
- **Status Header:** Features an animated or fixed circular emerald badge (`48px` diameter) with a centered checkmark icon, finished with a subtle radial ring (`ring-4 ring-[#00F59B]/15`).
- **Pix Confirmation Chip:** Pill badge using `#00F59B/10` background, `#00F59B` text, and a `1px solid #00F59B/30` border. Text formatted in `label-sm` uppercase.

### Primary Receipt Card
- **Structure:** Encased in `#111C3D` with a top status highlight bar (a 2px gradient accent spanning `#00F59B` to `#10B981`).
- **Dividers:** Perforated or dashed styling using `border-t border-dashed border-white/10` to visually separate monetary confirmation from granular routing metadata.

### Buttons & Interactive Affordances
- **Primary Action (e.g., "Compartilhar Comprovante" / Share Receipt):**
  - Background: Solid `#00F59B`
  - Text: `#070D1E` (Dark navy, bold weight for peak contrast)
  - Hover: `#10B981` with transition `200ms ease-out`
  - Shadow: `0 8px 20px -4px rgba(0, 245, 155, 0.35)`
- **Secondary Action (e.g., "Salvar em PDF" / New Transfer):**
  - Background: `rgba(255, 255, 255, 0.05)`
  - Border: `1px solid rgba(255, 255, 255, 0.10)`
  - Text: `#F8FAFC`
  - Hover: Background `rgba(255, 255, 255, 0.08)`, border `rgba(255, 255, 255, 0.20)`

### Metadata Lists (Sender, Recipient, Banking Entities)
- **Key-Value Layout:** Horizontal row alignment where the left label uses `body-md` in `#94A3B8`, and the right value uses `body-md` (medium weight) in `#F8FAFC`.
- **E2E ID & Transaction Hash Row:** Monospaced block (`code-md`) nested in a `#16234B` container, accompanied by an inline 1-click copy button that provides immediate visual feedback (`Copiado!` tooltip in `#00F59B`).

### Inputs & Action Controls
- **Ghost Input / Search / Notes:** Where message fields or transaction annotations appear, use `#0B132B` filled inputs with a 1px border in `rgba(255, 255, 255, 0.12)`. On focus, transition border color to `#00F59B` with an ambient glow.