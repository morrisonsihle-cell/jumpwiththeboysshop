import { Product } from '../types';

/**
 * =========================================================================
 * JUMPWITHTHEBOYS(R) PRODUCT CATALOGUE
 * =========================================================================
 *
 * HOW TO EDIT OR ADD PRODUCTS:
 * 1. Each product requires: id (unique number), name, brand, category, price, image_url, description
 * 2. Categories: "T-Shirts", "Hoodies", "Pants & Track Pants", "Shorts",
 *               "Jackets & Tracksuits", "Caps & Hats", "Beanies", "Accessories", "Collaborations"
 * 3. Brands: "JUMPWITHTHEBOYS", "DIRTY FROG", "$CARY HOURS 2", "DIRTY FROG x JUMP"
 * 4. Sales: Set `on_sale: true` and specify `original_price: <number>`
 * 5. Badges (optional): `badge: "Limited"` or `badge: "Drop 2"`
 * =========================================================================
 */

export const initialProducts: Product[] = [
  // --- JUMPWITHTHEBOYS (Signature Line) ---
  {
    id: 1,
    name: "jumpwiththeboys Signature T-Shirt",
    brand: "JUMPWITHTHEBOYS",
    category: "T-Shirts",
    price: 250,
    original_price: null,
    on_sale: false,
    image_url: "/images/tshirt.jpg",
    description: "The staple. Heavyweight cotton tee with the signature jumpwiththeboys mark."
  },
  {
    id: 2,
    name: "JUMP CITY Graphic T-Shirt",
    brand: "JUMPWITHTHEBOYS",
    category: "T-Shirts",
    price: 299.99,
    original_price: null,
    on_sale: false,
    image_url: "/images/tshirt.jpg",
    description: "Bold JUMP CITY graphic print, oversized city-born silhouette."
  },
  {
    id: 3,
    name: "JUMP WITH THE BOYS Jump City T-Shirt",
    brand: "JUMPWITHTHEBOYS",
    category: "T-Shirts",
    price: 199.99,
    original_price: null,
    on_sale: false,
    image_url: "/images/tshirt.jpg",
    description: "Classic fit Jump City tee, everyday streetwear essential."
  },
  {
    id: 4,
    name: 'jumpwiththeboys "Signature" Hoodie',
    brand: "JUMPWITHTHEBOYS",
    category: "Hoodies",
    price: 299.99,
    original_price: 379.99,
    on_sale: true,
    image_url: "/images/hoodie.jpg",
    description: "Heavyweight fleece hoodie carrying the original Signature branding."
  },
  {
    id: 5,
    name: 'jumpwiththeboys "MUD" Hoodie',
    brand: "JUMPWITHTHEBOYS",
    category: "Hoodies",
    price: 299.99,
    original_price: 379.99,
    on_sale: true,
    image_url: "/images/hoodie.jpg",
    description: "Earth-tone MUD colourway hoodie, brushed fleece interior."
  },
  {
    id: 6,
    name: "jumpwiththeboys SPEED Hoodie",
    brand: "JUMPWITHTHEBOYS",
    category: "Hoodies",
    price: 349.99,
    original_price: null,
    on_sale: false,
    image_url: "/images/hoodie.jpg",
    description: "SPEED graphic hoodie built for movement, premium heavyweight cotton."
  },
  {
    id: 7,
    name: 'JUMP WITH THE BOYS "REB..." Hoodie',
    brand: "JUMPWITHTHEBOYS",
    category: "Hoodies",
    price: 300,
    original_price: null,
    on_sale: false,
    image_url: "/images/hoodie.jpg",
    description: "Limited REB drop hoodie, raw rebellious energy on heavyweight fabric."
  },
  {
    id: 8,
    name: 'jumpwiththeboys "MUD" Shorts',
    brand: "JUMPWITHTHEBOYS",
    category: "Shorts",
    price: 250,
    original_price: null,
    on_sale: false,
    image_url: "/images/shorts.jpg",
    description: "MUD colourway shorts, relaxed fit with elastic drawstring waist."
  },
  {
    id: 9,
    name: "jumpwiththeboys Signature Leather-Look Cap",
    brand: "JUMPWITHTHEBOYS",
    category: "Caps & Hats",
    price: 200,
    original_price: null,
    on_sale: false,
    image_url: "/images/cap.jpg",
    description: "Faux-leather signature cap, structured six-panel build."
  },
  {
    id: 10,
    name: "jumpwiththeboys Signature Lightweight Cap",
    brand: "JUMPWITHTHEBOYS",
    category: "Caps & Hats",
    price: 149.99,
    original_price: 199.99,
    on_sale: true,
    image_url: "/images/cap.jpg",
    description: "Breathable lightweight cap for everyday wear, adjustable strap."
  },
  {
    id: 11,
    name: "JUMP WITH THE BOYS Brim/Crushed Nylon Cap",
    brand: "JUMPWITHTHEBOYS",
    category: "Caps & Hats",
    price: 200,
    original_price: 259.99,
    on_sale: true,
    image_url: "/images/cap.jpg",
    description: "Crushed nylon brim cap, streetwear staple with curved bill."
  },

  // --- DIRTY FROG. ---
  {
    id: 12,
    name: "DIRTY FROG. Lazy Boxy Tee",
    brand: "DIRTY FROG",
    category: "T-Shirts",
    price: 300,
    original_price: null,
    on_sale: false,
    image_url: "/images/tshirt.jpg",
    description: "Boxy fit tee from the Lazy collection, dropped shoulders, heavy cotton."
  },
  {
    id: 13,
    name: 'DIRTY FROG T-Shirts "Spa..."',
    brand: "DIRTY FROG",
    category: "T-Shirts",
    price: 399,
    original_price: null,
    on_sale: false,
    image_url: "/images/tshirt.jpg",
    description: "Premium graphic tee from the Spa capsule, underground print work."
  },
  {
    id: 14,
    name: "DIRTY FROG. Oversized T-Shirt",
    brand: "DIRTY FROG",
    category: "T-Shirts",
    price: 349.99,
    original_price: null,
    on_sale: false,
    image_url: "/images/tshirt.jpg",
    description: "Oversized silhouette tee, drop-shoulder cut, DIRTY FROG branding."
  },
  {
    id: 15,
    name: "DIRTY FROG. Lazy Hoodie",
    brand: "DIRTY FROG",
    category: "Hoodies",
    price: 400,
    original_price: null,
    on_sale: false,
    image_url: "/images/hoodie.jpg",
    description: "Lazy collection hoodie, oversized fit, plush fleece lining."
  },
  {
    id: 16,
    name: "DIRTY FROG. Lazy Track Pants",
    brand: "DIRTY FROG",
    category: "Pants & Track Pants",
    price: 350,
    original_price: null,
    on_sale: false,
    image_url: "/images/pants.jpg",
    description: "Lazy collection track pants, tapered leg with ribbed cuffs."
  },
  {
    id: 17,
    name: 'DIRTY FROG. Lazy "Dad" Cap',
    brand: "DIRTY FROG",
    category: "Caps & Hats",
    price: 200,
    original_price: null,
    on_sale: false,
    image_url: "/images/cap.jpg",
    description: "Unstructured dad cap from the Lazy collection, curved brim."
  },
  {
    id: 18,
    name: "DIRTY FROG. Lazy Beanie",
    brand: "DIRTY FROG",
    category: "Beanies",
    price: 150,
    original_price: null,
    on_sale: false,
    image_url: "/images/beanie.jpg",
    description: "Ribbed knit beanie, Lazy collection embroidery."
  },
  {
    id: 19,
    name: "DIRTY FROG. Glow Tracksuit",
    brand: "DIRTY FROG",
    category: "Jackets & Tracksuits",
    price: 849.99,
    original_price: 999.99,
    on_sale: true,
    image_url: "/images/jacket.jpg",
    description: "Full Glow tracksuit set, glow-in-the-dark detailing, matching set."
  },
  {
    id: 20,
    name: "DIRTY FROG. Glow Jacket",
    brand: "DIRTY FROG",
    category: "Jackets & Tracksuits",
    price: 600,
    original_price: null,
    on_sale: false,
    image_url: "/images/jacket.jpg",
    description: "Standalone Glow jacket, weatherproof shell with glow accents."
  },
  {
    id: 21,
    name: "DIRTY FROG. Mobile Pouch",
    brand: "DIRTY FROG",
    category: "Accessories",
    price: 100,
    original_price: null,
    on_sale: false,
    image_url: "/images/accessories.jpg",
    description: "Compact crossbody mobile pouch, DIRTY FROG hardware."
  },
  {
    id: 22,
    name: "DIRTY FROG. gotflu Hat",
    brand: "DIRTY FROG",
    category: "Accessories",
    price: 200,
    original_price: 259.99,
    on_sale: true,
    image_url: "/images/accessories.jpg",
    description: "gotflu capsule bucket hat, limited underground drop."
  },

  // --- $CARY HOURS 2 ---
  {
    id: 23,
    name: "$CARY HOURS 2 Reflective Shorts",
    brand: "$CARY HOURS 2",
    category: "Shorts",
    price: 300,
    original_price: null,
    on_sale: false,
    image_url: "/images/reflective.jpg",
    description: "Full reflective shorts from the $CARY HOURS 2 capsule, night-ready."
  },
  {
    id: 24,
    name: "$CARY HOURS 2 Reflective Pants",
    brand: "$CARY HOURS 2",
    category: "Pants & Track Pants",
    price: 500,
    original_price: 649.99,
    on_sale: true,
    image_url: "/images/reflective.jpg",
    description: "Reflective track pants, glows under flash and headlights."
  },
  {
    id: 25,
    name: "$CARY HOURS 2 Reflective Jacket",
    brand: "$CARY HOURS 2",
    category: "Jackets & Tracksuits",
    price: 800,
    original_price: null,
    on_sale: false,
    image_url: "/images/reflective.jpg",
    description: "Full reflective shell jacket, after-hours capsule centrepiece."
  },

  // --- DIRTY FROG x JUMP (Collaborations) ---
  {
    id: 26,
    name: "DIRTY FROG. x JUMP Heavyweight Hoodie",
    brand: "DIRTY FROG x JUMP",
    category: "Collaborations",
    price: 349.99,
    original_price: 449.99,
    on_sale: true,
    image_url: "/images/collab.jpg",
    description: "Heavyweight collaboration hoodie between DIRTY FROG. and JUMP WITH THE BOYS."
  },
  {
    id: 27,
    name: "DIRTY FROG. x JUMP UNIT Cropped Sleeveless Vest",
    brand: "DIRTY FROG x JUMP",
    category: "Collaborations",
    price: 199.99,
    original_price: null,
    on_sale: false,
    image_url: "/images/collab.jpg",
    description: "UNIT capsule cropped sleeveless vest, collaboration exclusive."
  },
  {
    id: 28,
    name: "DIRTY FROG. x JUMP Dirty Goggles",
    brand: "DIRTY FROG x JUMP",
    category: "Collaborations",
    price: 300,
    original_price: 389.99,
    on_sale: true,
    image_url: "/images/collab.jpg",
    description: "Dirty Goggles accessory, collaboration exclusive eyewear."
  }
];