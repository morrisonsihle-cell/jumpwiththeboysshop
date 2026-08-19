import { motion } from 'framer-motion';

const SUB_BRANDS = [
  {
    name: 'JUMPWITHTHEBOYS',
    brandKey: 'JUMPWITHTHEBOYS',
    tagline: 'The Signature Line',
    desc: 'Where it all began. Bold graphics, premium fabric, city-born energy.',
    image: '/images/hero-street.jpg',
    accent: '#ff3b1f',
  },
  {
    name: 'DIRTY FROG.',
    brandKey: 'DIRTY FROG',
    tagline: 'Luxury Underground',
    desc: 'Lazy fits, glow tracksuits, and gear that lives after dark.',
    image: '/images/dirtyfrog-hero.jpg',
    accent: '#b6ff3c',
  },
  {
    name: '$CARY HOURS 2',
    brandKey: '$CARY HOURS 2',
    tagline: 'Reflective Capsule',
    desc: 'Night-ready reflective pieces built for the after-hours crowd.',
    image: '/images/scaryhours-hero.jpg',
    accent: '#4be3ff',
  },
  {
    name: 'DIRTY FROG Ã— JUMP',
    brandKey: 'DIRTY FROG x JUMP',
    tagline: 'The Collaboration',
    desc: 'Two houses, one drop. Limited collaboration pieces.',
    image: '/images/collab.jpg',
    accent: '#d4af37',
  },
];

export function SubBrands() {
  const handleSelect = (brandKey: string) => {
    document.querySelector('#shop')?.scrollIntoView({ behavior: 'smooth' });
    if (brandKey) {
      window.dispatchEvent(new CustomEvent('filter-brand', { detail: brandKey }));
    }
  };

  return (
    <section id="sub-brands" className="bg-[#0a0a0a] py-16 sm:py-20 px-4 sm:px-12 lg:px-16">
      <p className="font-mono text-xs uppercase tracking-[0.4em] text-[#b6ff3c] mb-3 px-2 sm:px-0">
        The Houses
      </p>
      <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl uppercase text-bone tracking-tightest mb-4 sm:mb-12 px-2 sm:px-0">
        Under One Roof
      </h2>
      <p className="font-mono text-[11px] text-[#6f6a5c] mb-6 sm:hidden px-2">
        Swipe to explore â†’
      </p>

      <div className="flex sm:grid sm:grid-cols-2 gap-4 sm:gap-5 overflow-x-auto sm:overflow-visible snap-x snap-mandatory sm:snap-none scrollbar-hide px-2 sm:px-0 -mx-2 sm:mx-0">
        {SUB_BRANDS.map((item, idx) => (
          <motion.button
            key={item.name}
            onClick={() => handleSelect(item.brandKey)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.015 }}
            className="group relative h-64 sm:h-80 min-w-[82%] sm:min-w-0 snap-center overflow-hidden text-left border border-white/10 flex-shrink-0 cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-active:scale-105 sm:group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-[#0a0a0a]/55 group-active:bg-[#0a0a0a]/40 sm:group-hover:bg-[#0a0a0a]/40 transition-colors duration-500" />
            <div
              className="absolute inset-0"
              style={{ boxShadow: `inset 0 -90px 60px -20px ${item.accent}33` }}
            />

            <div className="relative z-10 h-full flex flex-col justify-end p-5 sm:p-6">
              <p
                className="font-mono text-[10px] uppercase tracking-[0.3em] mb-2"
                style={{ color: item.accent }}
              >
                {item.tagline}
              </p>
              <h3 className="font-display text-xl sm:text-3xl uppercase text-bone mb-2">
                {item.name}
              </h3>
              <p className="font-mono text-xs text-[#c8c3b3] max-w-xs">{item.desc}</p>
              <span className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-bone flex items-center gap-2">
                Shop the range{' '}
                <span className="transition-transform group-active:translate-x-1 sm:group-hover:translate-x-1">
                  â†’
                </span>
              </span>
            </div>
          </motion.button>
        ))}
      </div>

      <div className="flex justify-center gap-1.5 mt-4 sm:hidden">
        {SUB_BRANDS.map((item) => (
          <span key={item.name} className="w-1.5 h-1.5 rounded-full bg-white/20" />
        ))}
      </div>
    </section>
  );
}