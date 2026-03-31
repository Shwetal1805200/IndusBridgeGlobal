```markdown
# Design System Document: Professional Editorial for Global Trade

## 1. Overview & Creative North Star

### The Creative North Star: "The Sovereign Ledger"
This design system moves away from the generic "corporate blue" B2B templates to embrace a high-end editorial aesthetic. It is inspired by the precision of technical documentation and the prestige of sovereign trade. We treat the interface as a "Sovereign Ledger"—a digital space that feels as authoritative as a financial report and as expansive as a global shipping route. 

The design breaks the traditional grid through **intentional asymmetry** and **overlapping elements**. By placing high-quality logistics imagery behind floating, semi-transparent data containers, we create a sense of depth and motion. The recurrence of a professional world map graphic—rendered in a subtle, monochromatic treatment—acts as the foundational texture, reinforcing the brand's global reach without cluttering the UI.

---

## 2. Colors

The palette is designed to balance the deep, authoritative tones of global commerce with the warmth of the GCC market.

*   **Primary (#000000 & #1c1b22):** Used for core branding and high-contrast typography. It represents the "Ink" of the ledger.
*   **Secondary (#7f5600 & #fdbe57):** These Gold/Sand accents are used sparingly for CTAs and critical highlights, nodding to the premium nature of the GCC partnership.
*   **Tertiary (#001a41):** A deep navy used for "Global" elements, providing a sophisticated alternative to pure black in large sections.

### The "No-Line" Rule
To achieve a high-end editorial feel, **1px solid borders are prohibited for sectioning.** Boundaries must be defined solely through:
*   **Background Color Shifts:** Place a `surface-container-low` section against a `surface` background to define scope.
*   **Negative Space:** Use the Spacing Scale (specifically `16` and `24`) to create "invisible" boundaries.

### Surface Hierarchy & Nesting
Treat the UI as physical layers. Use `surface-container-lowest` for the base background, `surface-container-low` for secondary content areas, and `surface-container-highest` for high-priority interactive elements. This creates a "nested" depth that feels architectural rather than flat.

### The "Glass & Gradient" Rule
For floating navigation or modular cards, use **Glassmorphism**. Apply `surface` colors at 80% opacity with a `20px` backdrop-blur. For main CTAs, use a subtle linear gradient transitioning from `secondary` to `secondary_container` to provide a "metallic" gold sheen that flat colors cannot replicate.

---

## 3. Typography

The typography strategy leverages high-contrast pairings to convey both technical precision and market authority.

*   **Display & Headlines (Space Grotesk):** This font provides a modern, geometric authority. Use `display-lg` for hero statements with tight letter-spacing (-0.02em) to mimic high-end magazine headers.
*   **Technical Data (JetBrains Mono):** Inspired by the technical precision of trade, use this for all "data" points—shipping numbers, weights, dates, and logistics specs. It adds a layer of "Digital Trust."
*   **Body (Inter):** Used for long-form reading. It provides the necessary legibility for international business contracts and product descriptions.

**Hierarchy Note:** Always lead with a `headline-lg` in Space Grotesk, followed by a technical sub-header in JetBrains Mono (`label-md`) to immediately establish the "Editorial + Tech" identity.

---

## 4. Elevation & Depth

We eschew traditional shadows for a system of **Tonal Layering**.

*   **The Layering Principle:** Depth is achieved by "stacking." A card using `surface-container-lowest` placed on a `surface-container-low` background creates a natural lift.
*   **Ambient Shadows:** If a floating element (like a modal) requires a shadow, use a large blur (30px-60px) with only 4% opacity of the `on-surface` color. It should feel like a soft glow of light, not a "drop shadow."
*   **The "Ghost Border" Fallback:** If accessibility requires a border, use the `outline-variant` token at **15% opacity**. It should be felt, not seen.
*   **World Map Integration:** The world map graphic should be placed at the `surface-container-lowest` level, using a blend mode (like 'multiply' or 'overlay') to integrate it into the background color.

---

## 5. Components

### Buttons
*   **Primary:** Solid `primary` background, `on-primary` text, `none` or `sm` (0.125rem) roundedness. No gradients on buttons unless it's a "Hero" action (then use the Gold gradient).
*   **Secondary:** `surface-container-highest` background with `primary` text. No border.

### Input Fields
*   **Style:** Use a "Minimalist Ledger" style. Only a bottom stroke using `outline` at 40% opacity. When focused, the stroke becomes `secondary` (Gold) at 100% opacity.
*   **Labels:** Always use `label-sm` in JetBrains Mono above the field for a technical, precise look.

### Cards & Lists
*   **Forbid Divider Lines:** Use `12` (3rem) vertical spacing or a shift from `surface` to `surface-container-low` to separate items.
*   **Imagery:** Product imagery within cards should have `none` roundedness to maintain a sharp, professional edge.

### Global Route Indicator (Custom Component)
A custom component for this system: A progress-bar style element using JetBrains Mono text to show shipping status (e.g., *MUMBAI → DUBAI*). Use the `secondary` (Gold) color for the active path and `outline-variant` for the remaining route.

---

## 6. Do's and Don'ts

### Do:
*   **Do** use JetBrains Mono for all numerical values (quantities, prices, logistics IDs).
*   **Do** allow imagery to "break" the container. For example, a cargo ship image can bleed off the right edge of the screen.
*   **Do** use `surface-bright` for call-out sections to create a "paper-on-desk" feel.

### Don't:
*   **Don't** use `full` (9999px) roundedness on anything except perhaps a small notification badge. This system is about architectural structure, not "bubbly" consumer tech.
*   **Don't** use standard blue for links. Use `primary` with a `secondary` (Gold) underline.
*   **Don't** center-align long-form body text. Keep it left-aligned (Editorial Standard) to maintain the "Ledger" feel.
*   **Don't** use 100% opaque borders. They interrupt the eye and cheapen the "High-End" aesthetic.