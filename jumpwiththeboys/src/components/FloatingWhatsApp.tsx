import { motion } from 'framer-motion';
import { SOCIAL_LINKS, WhatsAppIcon } from './Navbar';

export function FloatingWhatsApp() {
  return (
    <motion.a
      href={SOCIAL_LINKS.whatsapp}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2.2, type: 'spring', stiffness: 200, damping: 14 }}
      whileTap={{ scale: 0.88 }}
      whileHover={{ scale: 1.06 }}
      className="group fixed bottom-36 right-4 sm:bottom-44 sm:right-6 z-40 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg pulse-ring"
      aria-label="Chat on WhatsApp"
    >
      <span className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-[#0a0a0a] text-[#f3efe4] font-mono text-[10px] uppercase tracking-[0.15em] px-3 py-1.5 opacity-0 translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 hidden sm:block border border-white/10">
        Chat with us
      </span>
      <WhatsAppIcon size={24} />
    </motion.a>
  );
}