const values = [
  {
    title: "Craft",
    body: "Each garment is cut, sewn and finished by a small family-run atelier in Porto. We visit twice a year.",
  },
  {
    title: "Material",
    body: "Linen from Belgian mills, merino from New Zealand, organic cotton certified to GOTS standards.",
  },
  {
    title: "Origin",
    body: "Founded in 2019 in Copenhagen. We sell direct — no middlemen, no markups, no compromises.",
  },
];

export default function BrandStory() {
  return (
    <section className="bg-gradient-to-b from-ivory-mist via-coral-dust to-silver-mauve py-28 lg:py-44">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 space-y-24 lg:space-y-40">

        {/* Intro */}
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-wahoo mb-5">
            Our Story
          </p>
          <h2 className="text-[40px] lg:text-[64px] font-bold text-wahoo tracking-tight leading-[1.05] mb-8">
            Made with intention,
            <br />
            worn with purpose.
          </h2>
          <p className="text-wahoo/75 text-lg leading-relaxed max-w-xl">
            We started with a simple belief: that clothing should feel as good as it looks —
            on your body, on your conscience, and on the planet. Every piece we make is a
            commitment to that belief.
          </p>
        </div>

        {/* Pull quote + image */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="aspect-[4/5] bg-wahoo/15 lg:order-none order-last" />
          <blockquote className="text-[28px] lg:text-[40px] font-light text-wahoo leading-snug tracking-tight">
            "We don't follow trends.
            <br />
            We craft timeless pieces
            <br />
            that outlive them."
          </blockquote>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 pt-12 border-t border-wahoo/20">
          {values.map((v) => (
            <div key={v.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-wahoo mb-3">
                {v.title}
              </p>
              <p className="text-wahoo leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
