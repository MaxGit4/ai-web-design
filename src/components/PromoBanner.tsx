export default function PromoBanner() {
  return (
    <section className="bg-blue-estate py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ivory-mist mb-4">
              Limited Time
            </p>
            <h2 className="text-[40px] lg:text-[60px] font-bold text-ivory-mist tracking-tight leading-[1.05] mb-6">
              Up to 30% off the Summer Collection
            </h2>
            <p className="text-pale-cashmere text-lg leading-relaxed mb-8 max-w-md">
              Limited-time offers on selected styles. Free shipping on all orders over €80.
            </p>
            <a
              href="#"
              className="inline-block bg-burning-orange text-wahoo font-semibold px-8 py-4 rounded-lg hover:bg-wahoo hover:text-ivory-mist transition-colors"
            >
              Shop the sale
            </a>
          </div>

          <div className="hidden lg:flex items-center justify-center">
            <div className="relative size-[420px] rounded-full bg-wahoo/30 flex items-center justify-center overflow-hidden select-none">
              <span className="text-[180px] font-black leading-none text-ivory-mist/10 tracking-tighter">
                30%
              </span>
              <span className="absolute text-[32px] font-bold text-ivory-mist/60 tracking-widest uppercase">
                OFF
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
