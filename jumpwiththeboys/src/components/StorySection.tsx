import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface StorySectionProps {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  image: string;
  align?: 'left' | 'right';
  accent?: string;
}

export function StorySection({
  eyebrow,
  title,
  paragraphs,
  image,
  align = 'left',
  accent = '#b6ff3c',
}: StorySectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  const imageEl = (
    <div className="relative overflow-hidden w-full lg:w-1/2 h-[38vh] sm:h-[45vh] lg:h-[70vh]">
      <motion.img
        style={{ y }}
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-[130%] object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ background: `linear-gradient(180deg, transparent 40%, ${accent}22 100%)` }}
      />
      <div className="absolute inset-0 border border-white/10" />
    </div>
  );

  const textEl = (
    <div className="w-full lg:w-1/2 flex flex-col justify-center px-5 sm:px-12 lg:px-16 py-10 sm:py-14">
      <motion.p
        initial={{ opacity: 0, x: align === 'left' ? -20 : 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="font-mono text-xs uppercase tracking-[0.35em] mb-4"
        style={{ color: accent }}
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase leading-[0.95] text-bone mb-6"
      >
        {title}
      </motion.h2>
      {paragraphs.map((p, idx) => (
        <motion.p
          key={idx}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
          className="font-mono text-sm sm:text-base text-[#c8c3b3] leading-relaxed mb-4 max-w-lg"
        >
          {p}
        </motion.p>
      ))}
    </div>
  );

  return (
    <div ref={ref} className="flex flex-col lg:flex-row items-stretch border-b border-white/10">
      {align === 'left' ? (
        <>
          {imageEl}
          {textEl}
        </>
      ) : (
        <>
          <div className="order-2 lg:order-1">{textEl}</div>
          <div className="order-1 lg:order-2">{imageEl}</div>
        </>
      )}
    </div>
  );
}