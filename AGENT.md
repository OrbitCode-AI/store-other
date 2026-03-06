# Store Other - Agent Guide

## Architecture

Entry point `App.tsx` composes a vertical page layout inside `<div className="store-other">`:
Navbar -> Hero -> Products -> Cart -> Footer. The Cart is rendered outside `<main>` as a slide-over overlay.

- **Navbar.tsx** — Top navigation with store logo, nav links, and cart toggle button. Reads `cartItems` (CartItem array) via `useVar` to display item count badge. Toggles `cartOpen` boolean.
- **Hero.tsx** — Stateless promotional banner with configurable title/subtitle and a single "Shop Now" CTA.
- **Products.tsx** — Product grid with inline `ProductCard` component. Each card's "Add to Cart" writes to the shared `cartItems` (CartItem array) via `useVar`, handling both new items and quantity increments for existing items.
- **Cart.tsx** — Slide-over cart panel controlled by `cartOpen` boolean via `useVar`. Reads/writes `cartItems` for quantity adjustment (+/-), item removal, and total calculation. Renders as overlay with backdrop click-to-close.
- **Footer.tsx** — Stateless compact footer with brand, inline links, and copyright.

Key data type — `CartItem`: `{ id, name, price, quantity }`. This interface is defined independently in Navbar, Products, and Cart (keep them in sync).

Shared state keys: `cartItems`, `cartOpen`.

## Styling

- One `.css` file per component (e.g., `Products.css`, `Cart.css`) plus `App.css` for layout/globals.
- Plain class names: `.product-card`, `.cart-overlay`, `.cart-panel`, `.store-navbar`.
- Product placeholder images use inline `style={{ background: product.color }}` with hex values.
- Cart overlay uses fixed/absolute positioning with backdrop click handling.

## Extension Points

- Add product categories or filtering by extending the `Product` interface and adding filter UI to Products.tsx.
- Add checkout flow by replacing the placeholder "Checkout" button in Cart.tsx with form or navigation logic.
- Extract the `CartItem` interface into a shared types file to keep Navbar, Products, and Cart in sync.

## Constraints

- The `cartItems` key is shared across three components (Navbar, Products, Cart) — changes in one are reflected everywhere.
