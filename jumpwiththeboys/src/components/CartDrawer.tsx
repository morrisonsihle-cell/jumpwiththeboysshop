import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { X, Trash2, Plus, Minus, MessageCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PHONE_NUMBER } from './Navbar';

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQty, totalPrice, clearCart } = useCart();

  const handleCheckout = () => {
    if (items.length === 0) return;
    const lines = [
      "Hi jumpwiththeboysÂ®! I'd like to place an order from the web store:",
      '',
      ...items.map(
        (item) => `â€¢ ${item.name} (${item.brand})\n  Size: ${item.size} | Qty: ${item.qty} | R${(item.price * item.qty).toFixed(2)}`
      ),
      '',
      `Total: R${totalPrice.toFixed(2)}`,
      '',
      'Please confirm availability & delivery details. Thank you!'
    ];
    const text = lines.join('\n');
    const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const handleDragEnd = (_: any, info: PanInfo) => {
    if (info.offset.x > 120 || info.velocity.x > 500) {
      closeCart();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/75 z-[80] backdrop-blur-xs"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={{ left: 0, right: 0.5 }}
            onDragEnd={handleDragEnd}
            className="fixed top-0 right-0 h-full w-full sm:w-[440px] bg-[#0a0a0a] border-l border-white/10 z-[90] flex flex-col safe-bottom shadow-2xl"
          >
            {/* Mobile drag bar indicator */}
            <div className="w-12 h-1 bg-white/20 rounded-full mx-auto mt-2 sm:hidden" />

            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-white/10">
              <div>
                <h3 className="font-display text-xl uppercase text-bone">Your Bag</h3>
                <p className="font-mono text-[9px] uppercase tracking-widest text-[#6f6a5c] sm:hidden">
                  Swipe right to close
                </p>
              </div>
              <button
                onClick={closeCart}
                className="text-bone active:text-[#b6ff3c] sm:hover:text-[#b6ff3c] p-2 -m-2 cursor-pointer transition-colors"
                aria-label="Close bag"
              >
                <X size={22} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 sm:p-5">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <p className="font-mono text-sm text-[#8f8b7d]">Your bag is empty.</p>
                  <p className="font-mono text-xs text-[#6f6a5c] mt-2">
                    Add some heat from the catalogue.
                  </p>
                  <button
                    onClick={closeCart}
                    className="mt-6 px-6 py-2.5 border border-white/20 text-bone font-mono text-xs uppercase tracking-[0.2em] active:border-[#b6ff3c] sm:hover:border-[#b6ff3c] cursor-pointer transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div
                      key={`${item.id}-${item.size}`}
                      className="flex gap-3 bg-[#111109] border border-white/10 p-3"
                    >
                      <img
                        src={item.image_url}
                        alt={item.name}
                        className="w-20 h-20 object-cover flex-shrink-0 bg-[#181812]"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-mono text-[9px] uppercase tracking-widest text-[#b6ff3c]">
                          {item.brand}
                        </p>
                        <p className="font-display text-sm uppercase text-bone leading-tight mt-1 truncate">
                          {item.name}
                        </p>
                        <p className="font-mono text-[10px] text-[#8f8b7d] mt-1">
                          Size: <span className="text-bone font-bold">{item.size}</span>
                        </p>
                        <div className="flex items-center justify-between mt-2.5">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateQty(item.id, item.size, item.qty - 1)}
                              className="w-7 h-7 flex items-center justify-center border border-white/20 text-bone active:border-[#b6ff3c] sm:hover:border-[#b6ff3c] cursor-pointer"
                              aria-label="Decrease quantity"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="font-mono text-xs text-bone w-4 text-center">
                              {item.qty}
                            </span>
                            <button
                              onClick={() => updateQty(item.id, item.size, item.qty + 1)}
                              className="w-7 h-7 flex items-center justify-center border border-white/20 text-bone active:border-[#b6ff3c] sm:hover:border-[#b6ff3c] cursor-pointer"
                              aria-label="Increase quantity"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                          <span className="font-mono text-sm text-bone font-bold">
                            R{(item.price * item.qty).toFixed(2)}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.size)}
                        className="text-[#6f6a5c] active:text-[#ff3b1f] sm:hover:text-[#ff3b1f] self-start p-1.5 transition-colors cursor-pointer"
                        aria-label="Remove item"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="p-4 sm:p-5 border-t border-white/10 bg-[#0a0a0a]">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#8f8b7d]">
                    Subtotal
                  </span>
                  <span className="font-display text-2xl text-bone">
                    R{totalPrice.toFixed(2)}
                  </span>
                </div>
                <motion.button
                  whileTap={{ scale: 0.96 }}
                  onClick={handleCheckout}
                  className="w-full py-3.5 bg-[#b6ff3c] text-[#0a0a0a] font-mono text-xs uppercase tracking-[0.25em] font-bold active:bg-[#f3efe4] sm:hover:bg-[#f3efe4] transition-colors mb-2 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#b6ff3c]/20"
                >
                  <MessageCircle size={15} /> Checkout via WhatsApp
                </motion.button>
                <button
                  onClick={clearCart}
                  className="w-full py-2 text-[#8f8b7d] font-mono text-[10px] uppercase tracking-[0.2em] active:text-[#ff3b1f] sm:hover:text-[#ff3b1f] transition-colors cursor-pointer"
                >
                  Clear Bag
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}