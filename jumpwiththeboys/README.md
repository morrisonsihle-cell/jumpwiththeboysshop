# jumpwiththeboysÂ® - Luxury Underground Streetwear

Official web application for **jumpwiththeboysÂ®** â€” Home of DIRTY FROG., $CARY HOURS 2, and exclusive streetwear collections from Durban & Empangeni, South Africa.

Built originally on Design Arena and transformed into a high-performance **React 19 + TypeScript + Vite + Tailwind CSS** application.

---

## âš¡ Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

---

## ðŸš€ How to Deploy on Netlify

### Method A: Automated GitHub Continuous Deployment (Recommended)
1. Commit and push your latest code to GitHub:
   ```bash
   git add .
   git commit -m "feat: enhance mobile UX, search, and Netlify configuration"
   git push origin main
   ```
2. Log in to [Netlify](https://app.netlify.com/).
3. Click **"Add new site"** â†’ **"Import an existing project"**.
4. Choose **GitHub** and authorize access to your repository `jumpwiththeboys`.
5. Netlify will automatically detect the settings from `netlify.toml`:
   * **Build command**: `npm run build`
   * **Publish directory**: `dist`
6. Click **"Deploy jumpwiththeboys"**! Every time you `git push`, Netlify will automatically rebuild and deploy your site.

### Method B: Deploy via Netlify CLI
```bash
npx netlify deploy --prod
```

---

## ðŸ›ï¸ How to Update Products

All product data is stored in [`src/data/products.ts`](./src/data/products.ts).

### Adding a New Item
Add a new object to the `initialProducts` array:
```typescript
{
  id: 29,
  name: "DIRTY FROG. Acid Wash Tee",
  brand: "DIRTY FROG",
  category: "T-Shirts",
  price: 350,
  original_price: null,
  on_sale: false,
  image_url: "/images/tshirt.jpg",
  description: "Limited acid wash finish with dirty frog rubber badge."
}
```

### Putting an Item on Sale
```typescript
{
  ...
  price: 299.99,
  original_price: 399.99,
  on_sale: true
}
```

---

## âœ¨ Features & Enhancements

* **Mobile Quick Bar**: Sleek floating bottom bar on mobile with quick shortcuts to **Shop**, **Bag** (with live count badge), and **WhatsApp Order Chat**.
* **Instant Live Search**: Search across 28 products by item name, brand, category, or keyword with item count indicators.
* **3D Parallax Hero**: Interactive mouse and touch perspective with dynamic typewriter slogan rotater.
* **Animated Brand Story**: 3 chapters with smooth scroll parallax imagery (Empangeni â†’ Durban â†’ DIRTY FROG).
* **The Houses (Sub-Brands)**: One-touch filtering for *JUMPWITHTHEBOYS*, *DIRTY FROG.*, *$CARY HOURS 2*, and *DIRTY FROG x JUMP*.
* **WhatsApp Shopping Bag**: Add-to-cart drawer with itemized WhatsApp order message formatted directly for Durban store sales at `+27 69 289 5576`.
* **Store Operating Hours**: Real-time "Open Now" / "Currently Closed" indicator based on Durban opening hours.
* **Netlify SPA Routing**: Pre-configured `netlify.toml` for zero-configuration deployments.

---

## ðŸŽ¨ Identity & Attribution
* **Brand**: jumpwiththeboysÂ®
* **Location**: 27 Bram Fischer Road, Durban, KwaZulu-Natal, 4001, South Africa
* **WhatsApp**: +27 69 289 5576
* **Built by**: Khula Digital Solutions