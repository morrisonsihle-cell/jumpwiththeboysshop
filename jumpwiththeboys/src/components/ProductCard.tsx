import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Check } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

const ACCESSORY_CATEGORIES = ['Caps & Hats', 'Beanies', 'Accessories'];

function getSizes(category: string) {
  return ACCESSORY_CATEGORIES.includes(category)
    ? ['One Size']
    : ['S', 'M', 'L', 'XL', 'XXL'];
}

export function ProductCard({ product, index }: { product: Product; index: number }) {
  const sizes = getSizes(product.category);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      brand: product.brand,
      price: Number(product.price),
      image_url: product.image_url,
      size: selectedSize,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 8) * 0.05 }}
      className="group relative flex flex-col bg-[#111109] border border-white/10 active:border-[#b6ff3c]/40 sm:hover:border-[#b6ff3c]/40 transition-colors"
    >
      <div className="relative h-44 sm:h-64 overflow-hidden bg-[#181812]">
        <img
          src={product.image_url}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-active:scale-105 sm:group-hover:scale-110"
        />
        {product.on_sale && (
          <span className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-[#ff3b1f] text-[#0a0a0a] text-[9px] sm:text-[10px] font-mono uppercase tracking-widest px-1.5 sm:px-2 py-0.5 sm:py-1 font-bold shadow">
            Sale
          </span>
        )}
        {product.badge && (
          <span className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-[#b6ff3c] text-[#0a0a0a] text-[9px] sm:text-[10px] font-mono uppercase tracking-widest px-1.5 sm:px-2 py-0.5 sm:py-1 font-bold shadow">
            {product.badge}
          </span>
        )}
        <span className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-[#0a0a0a]/85 text-[#b6ff3c] text-[8px] sm:text-[9px] font-mono uppercase tracking-widest px-1.5 sm:px-2 py-0.5 sm:py-1 border border-[#b6ff3c]/30 backdrop-blur-sm">
          {product.brand}
        </span>
      </div>

      <div className="flex flex-col flex-1 p-3 sm:p-4">
        <p className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#8f8b7d] mb-1">
          {product.category}
        </p>
        <h3 className="font-display text-sm sm:text-lg uppercase text-bone leading-tight mb-1.5 sm:mb-2 line-clamp-2">
          {product.name}
        </h3>
        <p className="hidden sm:block font-mono text-xs text-[#9a9584] mb-4 line-clamp-2 flex-1">
          {product.description}
        </p>

        <div className="flex items-baseline gap-1.5 sm:gap-2 mb-3 sm:mb-4">
          {product.on_sale && product.original_price && (
            <span className="font-mono text-[10px] sm:text-xs text-[#6f6a5c] line-through">
              R{Number(product.original_price).toFixed(2)}
            </span>
          )}
          <span className={`font-display text-base sm:text-xl ${product.on_sale ? 'text-[#ff3b1f]' : 'text-bone'}`}>
            R{Number(product.price).toFixed(2)}
          </span>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4 flex-wrap">
          {sizes.map((s) => (
            <motion.button
              key={s}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedSize(s)}
              className={`min-w-[30px] sm:min-w-0 px-2 sm:px-2.5 py-1.5 sm:py-1 text-[9px] sm:text-[10px] font-mono border transition-colors cursor-pointer ${
                selectedSize === s
                  ? 'bg-[#b6ff3c] text-[#0a0a0a] border-[#b6ff3c] font-bold'
                  : 'border-white/20 text-[#c8c3b3] active:border-[#b6ff3c]/60 sm:hover:border-[#b6ff3c]/50'
              }`}
            >
              {s}
            </motion.button>
          ))}
        </div>

        <motion.button
          whileTap={{ scale: 0.96 }}
          onClick={handleAddToCart}
          className={`w-full py-2.5 sm:py-2.5 font-mono text-[11px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] flex items-center justify-center gap-2 transition-all cursor-pointer ${
            added
              ? 'bg-[#4be3ff] text-[#0a0a0a] font-bold shadow-md shadow-[#4be3ff]/20'
              : 'bg-bone text-[#0a0a0a] active:bg-[#b6ff3c] sm:hover:bg-[#b6ff3c] font-medium'
          }`}
        >
          {added ? (
            <>
              <Check size={14} strokeWidth={2.5} /> Added to Bag
            </>
          ) : (
            <>
              <Plus size={14} /> Add to Cart
            </>
          )}
        </motion.button>
      </div>
    </motion.div>
  );
}