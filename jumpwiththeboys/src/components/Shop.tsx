import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownUp, LoaderCircle, TriangleAlert, Search, X } from 'lucide-react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';

export const CATEGORIES = [
  'All Products',
  'T-Shirts',
  'Hoodies',
  'Pants & Track Pants',
  'Shorts',
  'Jackets & Tracksuits',
  'Caps & Hats',
  'Beanies',
  'Accessories',
  'Collaborations',
  'Sale',
];

interface ShopProps {
  products: Product[];
  loading: boolean;
  error: string;
}

export function Shop({ products, loading, error }: ShopProps) {
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('default');

  useEffect(() => {
    const handleFilterBrand = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      setSelectedBrand(customEvent.detail);
      setSelectedCategory('All Products');
    };
    window.addEventListener('filter-brand', handleFilterBrand);
    return () => window.removeEventListener('filter-brand', handleFilterBrand);
  }, []);

  const filteredProducts = useMemo(() => {
    let list = products;

    // Brand filter
    if (selectedBrand) {
      list = list.filter((p) => p.brand === selectedBrand);
    }

    // Category filter
    if (selectedCategory === 'Sale') {
      list = list.filter((p) => p.on_sale);
    } else if (selectedCategory !== 'All Products') {
      list = list.filter((p) => p.category === selectedCategory);
    }

    // Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    // Sort order
    if (sortBy === 'price-asc') {
      list = [...list].sort((a, b) => Number(a.price) - Number(b.price));
    } else if (sortBy === 'price-desc') {
      list = [...list].sort((a, b) => Number(b.price) - Number(a.price));
    }

    return list;
  }, [products, selectedCategory, selectedBrand, searchQuery, sortBy]);

  const handleCategoryClick = (cat: string) => {
    setSelectedCategory(cat);
    setSelectedBrand(null);
  };

  return (
    <section id="shop" className="bg-[#0a0a0a] py-16 sm:py-20 px-4 sm:px-10 lg:px-16">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 sm:mb-10 gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-[#b6ff3c] mb-3">
            Full Catalogue
          </p>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl uppercase text-bone tracking-tightest">
            {selectedBrand || 'The Shop'}
          </h2>
        </div>

        {selectedBrand && (
          <motion.button
            whileTap={{ scale: 0.94 }}
            onClick={() => setSelectedBrand(null)}
            className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8f8b7d] active:text-[#ff3b1f] sm:hover:text-[#ff3b1f] border border-white/20 px-3 py-2.5 self-start cursor-pointer"
          >
            Clear Brand Filter Ã—
          </motion.button>
        )}
      </div>

      {/* Search & Sort Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-6">
        <div className="relative flex-1 max-w-md">
          <Search
            size={16}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8f8b7d] pointer-events-none"
          />
          <input
            type="text"
            placeholder="Search drops, items, hoodies, capsâ€¦"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#111109] border border-white/15 text-bone font-mono text-xs pl-10 pr-9 py-2.5 placeholder:text-[#6f6a5c] focus:border-[#b6ff3c] outline-none transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8f8b7d] hover:text-bone p-1"
              aria-label="Clear search"
            >
              <X size={14} />
            </button>
          )}
        </div>

        <div className="flex items-center justify-between sm:justify-end gap-3">
          <span className="font-mono text-[11px] text-[#6f6a5c] uppercase tracking-wider">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'Piece' : 'Pieces'}
          </span>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-[#111109] border border-white/15 text-[#c8c3b3] font-mono text-[11px] uppercase tracking-[0.15em] pl-3 pr-8 py-2.5 focus:border-[#b6ff3c] outline-none cursor-pointer"
            >
              <option value="default" className="bg-[#0a0a0a]">
                Sort: Featured
              </option>
              <option value="price-asc" className="bg-[#0a0a0a]">
                Price: Low to High
              </option>
              <option value="price-desc" className="bg-[#0a0a0a]">
                Price: High to Low
              </option>
            </select>
            <ArrowDownUp
              size={13}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#8f8b7d] pointer-events-none"
            />
          </div>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-3 mb-8">
        <div className="relative flex-1 overflow-hidden">
          <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-hide snap-x-mobile">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryClick(cat)}
                className={`snap-start whitespace-nowrap px-4 py-2 font-mono text-xs uppercase tracking-[0.15em] border transition-all flex-shrink-0 cursor-pointer ${
                  selectedCategory === cat && !selectedBrand
                    ? 'bg-[#b6ff3c] text-[#0a0a0a] border-[#b6ff3c] font-bold shadow-md shadow-[#b6ff3c]/15'
                    : 'border-white/15 text-[#c8c3b3] active:border-[#b6ff3c]/60 sm:hover:border-[#b6ff3c]/50 bg-[#0a0a0a]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="pointer-events-none absolute right-0 top-0 bottom-2 w-8 bg-gradient-to-l from-[#0a0a0a] to-transparent sm:hidden" />
        </div>
      </div>

      {loading && (
        <div className="flex flex-col items-center justify-center py-24 text-[#8f8b7d] gap-3">
          <LoaderCircle className="animate-spin text-[#b6ff3c]" size={28} />
          <p className="font-mono text-xs uppercase tracking-widest">Loading the catalogueâ€¦</p>
        </div>
      )}

      {!loading && error && (
        <div className="flex flex-col items-center justify-center py-24 text-[#ff3b1f] gap-3">
          <TriangleAlert size={28} />
          <p className="font-mono text-xs uppercase tracking-widest text-center px-4">{error}</p>
        </div>
      )}

      {!loading && !error && filteredProducts.length === 0 && (
        <div className="flex flex-col items-center justify-center py-24 text-[#8f8b7d] gap-3">
          <p className="font-mono text-sm text-center px-4">No matching pieces found.</p>
          {(searchQuery || selectedCategory !== 'All Products' || selectedBrand) && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All Products');
                setSelectedBrand(null);
              }}
              className="mt-2 px-4 py-2 border border-white/20 text-[#b6ff3c] font-mono text-xs uppercase tracking-widest hover:border-[#b6ff3c]"
            >
              Reset Filters
            </button>
          )}
        </div>
      )}

      {!loading && !error && filteredProducts.length > 0 && (
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
          {filteredProducts.map((product, idx) => (
            <ProductCard key={product.id} product={product} index={idx} />
          ))}
        </motion.div>
      )}

      <p className="mt-12 font-mono text-[10px] sm:text-[11px] text-[#6f6a5c] text-center px-4">
        Prices in South African Rand (ZAR). Full catalogue & custom order enquiries via WhatsApp.
      </p>
    </section>
  );
}