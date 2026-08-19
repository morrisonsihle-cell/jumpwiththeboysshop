import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Menu, X, Instagram, Facebook } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const SOCIAL_LINKS = {
  tiktok: 'https://www.tiktok.com/@jumpwiththeboys?_r=1&_t=ZS-98kF7sAhgls',
  facebook: 'https://www.facebook.com/JumpWithTheBoys',
  instagram: 'https://www.instagram.com/jumpwiththeboys?igsh=czQ1Ymdrc2d0ajN5',
  whatsapp: 'https://wa.me/c/27692895576',
};

export const PHONE_NUMBER = '27692895576';
export const STORE_ADDRESS = '27 Bram Fischer Road, Durban, KwaZulu-Natal, 4001, South Africa';

export function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.5 14.4c-.3-.15-1.7-.85-2-.95-.25-.1-.45-.15-.65.15-.2.3-.75.95-.95 1.15-.15.15-.35.2-.6.05-1.4-.7-2.3-1.25-3.25-2.85-.25-.4.25-.4.7-1.3.1-.2.05-.35-.05-.5-.1-.15-.6-1.45-.85-2-.2-.5-.4-.45-.65-.45-.2 0-.5 0-.75.05-.25.05-.65.2-.9.65-.25.45-.95 1.35-.95 2.9s1 3.15 1.2 3.4c.2.25 2.05 3.35 5.15 4.4 2.65.9 2.65.6 3.15.55.5-.05 1.7-.7 1.95-1.4.25-.7.25-1.3.15-1.4-.05-.1-.25-.15-.5-.3zM12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.25L2 22l4.9-1.45A9.9 9.9 0 0 0 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2z" />
    </svg>
  );
}

const NAV_LINKS = [
  { label: 'Story', href: '#story' },
  { label: 'Sub-Brands', href: '#sub-brands' },
  { label: 'Shop', href: '#shop' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#hero');
  const { totalCount, openCart } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ['#hero', ...NAV_LINKS.map((l) => l.href)];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection('#' + entry.target.id);
          }
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.querySelector(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10 py-2.5 sm:py-3'
            : 'bg-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          <button
            onClick={() => scrollTo('#hero')}
            className="font-display text-base sm:text-xl text-bone tracking-tight active:opacity-70"
          >
            jumpwiththeboys
            <sup className="text-[8px] sm:text-[9px]">Â®</sup>
          </button>

          <nav className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-[0.2em] text-[#cfcabb]">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`relative transition-colors group ${
                  activeSection === link.href ? 'text-[#b6ff3c]' : 'hover:text-[#b6ff3c]'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-[1px] bg-[#b6ff3c] transition-all duration-300 ${
                    activeSection === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3 sm:gap-4">
            <motion.button
              whileTap={{ scale: 0.88 }}
              onClick={openCart}
              className="relative text-bone active:text-[#b6ff3c] sm:hover:text-[#b6ff3c] transition-colors p-2 -m-2"
              aria-label="Open cart"
            >
              <ShoppingBag size={20} strokeWidth={1.6} />
              {totalCount > 0 && (
                <motion.span
                  key={totalCount}
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-0.5 -right-0.5 bg-[#b6ff3c] text-[#0a0a0a] text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center"
                >
                  {totalCount}
                </motion.span>
              )}
            </motion.button>

            <button
              className="md:hidden text-bone p-2 -m-2"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="fixed inset-0 z-[70] bg-[#0a0a0a] flex flex-col safe-bottom"
          >
            <div className="flex justify-between items-center p-5 border-b border-white/10">
              <span className="font-display text-lg text-bone">
                jumpwiththeboys<sup className="text-[8px]">Â®</sup>
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-bone p-2 -m-2"
                aria-label="Close menu"
              >
                <X size={26} />
              </button>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center gap-7 px-6">
              {NAV_LINKS.map((link, idx) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.08 }}
                  whileTap={{ scale: 0.92 }}
                  onClick={() => scrollTo(link.href)}
                  className={`font-display text-4xl uppercase transition-colors ${
                    activeSection === link.href ? 'text-[#b6ff3c]' : 'text-bone'
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                whileTap={{ scale: 0.94 }}
                onClick={() => scrollTo('#shop')}
                className="mt-4 px-8 py-3.5 bg-[#b6ff3c] text-[#0a0a0a] font-mono text-xs uppercase tracking-[0.2em]"
              >
                Shop Now
              </motion.button>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center gap-6 py-6 border-t border-white/10"
            >
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noreferrer"
                className="text-[#c8c3b3] p-2"
                aria-label="Instagram"
              >
                <Instagram size={22} strokeWidth={1.6} />
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noreferrer"
                className="text-[#c8c3b3] p-2"
                aria-label="Facebook"
              >
                <Facebook size={22} strokeWidth={1.6} />
              </a>
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="text-[#c8c3b3] p-2"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon size={22} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}