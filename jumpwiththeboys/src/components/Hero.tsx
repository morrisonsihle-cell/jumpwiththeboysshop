import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function useTypewriter(
  phrases: string[],
  options: { typingSpeed?: number; deletingSpeed?: number; pauseTime?: number } = {}
) {
  const { typingSpeed = 55, deletingSpeed = 28, pauseTime = 1600 } = options;
  const [text, setText] = useState('');
  const shuffledRef = useRef(shuffle(phrases));
  const phraseIndexRef = useRef(0);
  const charIndexRef = useRef(0);
  const modeRef = useRef<'typing' | 'pausing' | 'deleting'>('typing');

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const tick = () => {
      const phrasesList = shuffledRef.current;
      if (phraseIndexRef.current >= phrasesList.length) {
        shuffledRef.current = shuffle(phrases);
        phraseIndexRef.current = 0;
      }
      const currentPhrase = phrasesList[phraseIndexRef.current] || '';

      if (modeRef.current === 'typing') {
        charIndexRef.current += 1;
        setText(currentPhrase.slice(0, charIndexRef.current));

        if (charIndexRef.current >= currentPhrase.length) {
          modeRef.current = 'pausing';
          timer = setTimeout(tick, pauseTime);
          return;
        }
        timer = setTimeout(tick, typingSpeed + Math.random() * 40);
        return;
      }

      if (modeRef.current === 'pausing') {
        modeRef.current = 'deleting';
        timer = setTimeout(tick, deletingSpeed);
        return;
      }

      if (modeRef.current === 'deleting') {
        charIndexRef.current -= 1;
        setText(currentPhrase.slice(0, charIndexRef.current));

        if (charIndexRef.current <= 0) {
          modeRef.current = 'typing';
          phraseIndexRef.current += 1;
          timer = setTimeout(tick, 300);
          return;
        }
        timer = setTimeout(tick, deletingSpeed);
      }
    };

    timer = setTimeout(tick, 400);
    return () => clearTimeout(timer);
  }, [phrases, typingSpeed, deletingSpeed, pauseTime]);

  return text;
}

const HERO_SLOGANS = [
  'LUXURY UNDERGROUND STREETWEAR',
  'HOME OF DIRTY FROG.',
  'EMPANGENI â†’ DURBAN',
  'FULL CATALOGUE. NO COMPROMISE.',
  'JUMP WITH THE BOYSÂ®',
  'RAW STORIES. BOLD APPAREL.',
  'BUILT FOR THE CULT FOLLOWING',
];

export function Hero() {
  const currentSlogan = useTypewriter(HERO_SLOGANS);
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 900], [0, 280]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  const handlePointer = (clientX: number, clientY: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const normX = (clientX - rect.left) / rect.width - 0.5;
    const normY = (clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: normY * -14, y: normX * 18 });
  };

  return (
    <section
      id="hero"
      className="relative h-screen min-h-[560px] sm:min-h-[680px] w-full overflow-hidden bg-[#0a0a0a]"
    >
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <img
          src="/images/hero-bg-upload-v3.png"
          alt="jumpwiththeboys hooded crew, luxury underground streetwear"
          className="w-full h-[130%] object-cover object-[center_28%] opacity-55 sm:opacity-65"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/45 to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/70 via-transparent to-[#0a0a0a]/50" />
        <div className="absolute inset-0 bg-noise-radial" />
      </motion.div>

      <motion.div
        style={{ opacity: heroOpacity }}
        className="relative z-10 h-full w-full flex flex-col"
      >
        <div className="px-5 sm:px-10 lg:px-20 pt-24 sm:pt-28">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="font-mono text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] uppercase text-[#b6ff3c]"
          >
            Durban, KwaZulu-Natal â€” Est. Empangeni
          </motion.p>
        </div>

        <div
          ref={containerRef}
          onMouseMove={(e) => handlePointer(e.clientX, e.clientY)}
          onMouseLeave={() => setTilt({ x: 0, y: 0 })}
          onTouchMove={(e) => {
            const touch = e.touches[0];
            if (touch) handlePointer(touch.clientX, touch.clientY);
          }}
          onTouchEnd={() => setTilt({ x: 0, y: 0 })}
          style={{ perspective: '1200px' }}
          className="flex-1 flex items-center justify-center px-5 sm:px-10 lg:px-20"
        >
          <motion.h1
            animate={{ rotateX: tilt.x, rotateY: tilt.y }}
            transition={{ type: 'spring', stiffness: 80, damping: 12 }}
            className="font-display text-3d leading-[0.92] tracking-tightest uppercase text-[clamp(2.6rem,14vw,6.5rem)] text-center"
          >
            JUMPWITH
            <br className="sm:hidden" />
            THEBOYS
            <span className="text-[0.4em] align-top">Â®</span>
          </motion.h1>
        </div>

        <div className="px-5 sm:px-10 lg:px-20 pb-16 sm:pb-20 max-w-4xl w-full">
          <div className="flex items-center gap-2 sm:gap-3 font-mono text-sm sm:text-xl text-[#f3efe4] min-h-[1.8rem] sm:min-h-[2rem]">
            <span className="text-[#ff3b1f]">&gt;</span>
            <span className="break-words">{currentSlogan}</span>
            <span className="caret text-[#b6ff3c]">_</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.7 }}
            className="mt-8 sm:mt-10 flex flex-wrap gap-3 sm:gap-4 w-full"
          >
            <motion.button
              whileTap={{ scale: 0.94 }}
              onClick={() => document.querySelector('#shop')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex-1 sm:flex-none px-6 sm:px-7 py-3.5 sm:py-3 bg-[#b6ff3c] text-[#0a0a0a] font-mono text-xs uppercase tracking-[0.2em] active:bg-[#f3efe4] sm:hover:bg-[#f3efe4] transition-colors text-center cursor-pointer"
            >
              Enter the Shop
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.94 }}
              onClick={() => document.querySelector('#story')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex-1 sm:flex-none px-6 sm:px-7 py-3.5 sm:py-3 border border-[#f3efe4]/40 text-[#f3efe4] font-mono text-xs uppercase tracking-[0.2em] active:border-[#b6ff3c] active:text-[#b6ff3c] sm:hover:border-[#b6ff3c] sm:hover:text-[#b6ff3c] transition-colors text-center cursor-pointer"
            >
              Our Story
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 text-[#8f8b7d] z-10"
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
}