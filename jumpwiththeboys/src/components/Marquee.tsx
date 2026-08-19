const MARQUEE_TEXT =
  'DIRTY FROG Ã— JUMP WITH THE BOYS â€” LUXURY UNDERGROUND STREETWEAR â€” DURBAN, SOUTH AFRICA â€” FULL CATALOGUE AVAILABLE â€” ';

export function Marquee() {
  return (
    <div className="relative bg-[#b6ff3c] text-[#0a0a0a] py-3 overflow-hidden border-y-2 border-[#0a0a0a] -rotate-1 my-[-4px] z-10">
      <div className="marquee-track">
        {[0, 1].map((idx) => (
          <span
            key={idx}
            className="font-display text-sm sm:text-base tracking-wide whitespace-nowrap px-4"
          >
            {MARQUEE_TEXT.repeat(3)}
          </span>
        ))}
      </div>
    </div>
  );
}