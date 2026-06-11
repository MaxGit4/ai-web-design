export default function CollectionHighlight() {
  return (
    <section className="bg-burning-orange py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-wahoo mb-6">
              New Collection
            </p>
            <h2 className="text-[56px] lg:text-[80px] font-black text-wahoo leading-[0.92] tracking-tight mb-8">
              Summer
              <br />
              Essentials
              <br />
              2025
            </h2>
            <p className="text-wahoo text-lg leading-relaxed mb-10 max-w-sm">
              Effortless pieces for sun-soaked days. Crafted from natural fibres,
              designed to last a lifetime.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-3 text-wahoo font-semibold text-lg border-b-2 border-wahoo/50 pb-1 hover:border-wahoo transition-colors"
            >
              Discover the collection
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          <div className="hidden lg:block">
            <div className="aspect-[4/5] bg-wahoo/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
