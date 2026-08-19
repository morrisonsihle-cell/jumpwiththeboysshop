import { motion } from 'framer-motion';
import { ShoppingBag, Grid, MessageCircle, ArrowUp } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { SOCIAL_LINKS } from './Navbar';

export function MobileQuickBar() {
  const { totalCount, openCart } = useCart();

  const scrollToShop = () => {
    document.querySelector('#shop')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.aside
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.5, ease: 'easeOut' }}
      aria-label="Mobile quick actions"
      className="md:hidden fixed bottom-3 left-3 right-3 z-40 bg-[#0a0a0a]/90 backdrop-blur-lg border border-white/15 px-3 py-2 flex items-center justify-around rounded-full shadow-2xl safe-bottom"
    >
      <button
        onClick={scrollToShop}
        className="flex flex-col items-center gap-1 text-[#c8c3b3] active:text-[#b6ff3c] p-1.5 transition-colors cursor-pointer"
        aria-label="Shop catalog"
      >
        <Grid size={18} />
        <span className="font-mono text-[9px] uppercase tracking-wider">Shop</span>
      </button>

      <button
        onClick={openCart}
        className="relative flex flex-col items-center gap-1 text-[#c8c3b3] active:text-[#b6ff3c] p-1.5 transition-colors cursor-pointer"
        aria-label="Open cart"
      >
        <ShoppingBag size={18} />
        <span className="font-mono text-[9px] uppercase tracking-wider">Bag</span>
        {totalCount > 0 && (
          <motion.span
            key={totalCount}
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            className="absolute 0 top-0.5 right-1 bg-[#b6ff3c] text-[#0a0a0a] text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center"
          >
            {totalCount}
          </motion.span>
        )}
      </button>

      <a
        href={SOCIAL_LINKS.whatsapp}
        target="_blank"
        rel="noreferrer"
        className="flex flex-col items-center gap-1 text-[#25D366] active:opacity-80 p-1.5 transition-opacity"
        aria-label="WhatsApp order line"
      >
        <MessageCircle size={18} />
        <span className="font-mono text-[9px] uppercase tracking-wider">Chat</span>
      </a>

      <button
        onClick={scrollToTop}
        className="flex flex-col items-center gap-1 text-[#8f8b7d] active:text-[#f3efe4] p-1.5 transition-colors cursor-pointer"
        aria-label="Back to top"
      >
        <ArrowUp size={18} />
        <span className="font-mono text-[9px] uppercase tracking-wider">Top</span>
      </button>
    </motion.aside>
  );
}