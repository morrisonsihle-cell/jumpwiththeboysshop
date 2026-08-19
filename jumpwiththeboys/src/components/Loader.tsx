import { motion, AnimatePresence } from 'framer-motion';

export function Loader() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0a0a]"
      >
        <motion.div
          initial={{ letterSpacing: '0.5em', opacity: 0 }}
          animate={{ letterSpacing: '0.02em', opacity: 1 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          className="font-display text-3xl sm:text-5xl text-bone text-3d uppercase"
        >
          JUMPWITHTHEBOYS
          <sup className="text-sm align-super">Â®</sup>
        </motion.div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '14rem' }}
          transition={{ duration: 1.6, ease: 'easeInOut' }}
          className="h-[2px] bg-[#b6ff3c] mt-6"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="font-mono text-[10px] tracking-[0.35em] text-[#8f8b7d] mt-5 uppercase"
        >
          Home of Dirty Frog â€” Durban, ZA
        </motion.p>
      </motion.div>
    </AnimatePresence>
  );
}