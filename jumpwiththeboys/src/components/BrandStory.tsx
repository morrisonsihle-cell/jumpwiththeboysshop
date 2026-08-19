import { StorySection } from './StorySection';

export function BrandStory() {
  return (
    <section id="story" className="bg-[#0a0a0a]">
      <div className="px-4 sm:px-12 lg:px-16 pt-14 sm:pt-20 pb-5 sm:pb-6">
        <p className="font-mono text-xs uppercase tracking-[0.4em] text-[#b6ff3c] mb-3">
          The Story
        </p>
        <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl uppercase text-bone tracking-tightest">
          From The Ground Up
        </h2>
      </div>

      <StorySection
        eyebrow="Chapter I â€” Origins"
        title="Born in Empangeni"
        image="/images/empangeni-street.jpg"
        align="left"
        accent="#b6ff3c"
        paragraphs={[
          'jumpwiththeboysÂ® didnâ€™t start in a boardroom. It started on the streets of Empangeni â€” small town energy, big ambitions, and a group of boys who refused to wait for permission.',
          'Every stitch carries that beginning: raw, relatable, unapologetic. No trend-chasing. Just authentic South African street culture, worn on your back.',
        ]}
      />

      <StorySection
        eyebrow="Chapter II â€” Growth"
        title="Expansion to Durban"
        image="/images/durban-city.jpg"
        align="right"
        accent="#ff3b1f"
        paragraphs={[
          'As the cult following grew, so did the footprint. jumpwiththeboysÂ® planted its flag on Bram Fischer Road, Durban â€” KwaZulu-Natalâ€™s beating heart for fashion & retail.',
          'A rapidly growing South African streetwear brand, built brick by brick on bold apparel and stories people actually live.',
        ]}
      />

      <StorySection
        eyebrow="Chapter III â€” The Underground Arm"
        title="Home of DIRTY FROG."
        image="/images/dirtyfrog-hero.jpg"
        align="left"
        accent="#b6ff3c"
        paragraphs={[
          'DIRTY FROG. lives one level below the surface â€” luxury underground streetwear for those who move quiet and hit hard.',
          'This account is the home for DIRTY FROG. and stays connected to JUMP WITH THE BOYS for all production and business enquiries. Full catalogue and pricing, always available.',
        ]}
      />
    </section>
  );
}