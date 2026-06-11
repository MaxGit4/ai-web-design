export default function Newsletter() {
  return (
    <section className="bg-cinnamon-ice py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-sm">
            <h2 className="text-[26px] lg:text-[32px] font-semibold text-wahoo tracking-tight leading-tight mb-2">
              Stay in the loop
            </h2>
            <p className="text-wahoo leading-relaxed">
              New arrivals, exclusive offers and stories — straight to your inbox.
            </p>
          </div>

          <form
            className="flex flex-col sm:flex-row gap-3 w-full lg:max-w-[440px]"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your email address"
              aria-label="Email address"
              className="flex-1 bg-white px-4 py-3 rounded-lg border border-wahoo/25 text-wahoo placeholder-wahoo/40 outline-none focus:border-wahoo transition-colors text-sm"
            />
            <button
              type="submit"
              className="bg-wahoo text-ivory-mist px-6 py-3 font-semibold text-sm rounded-lg whitespace-nowrap hover:bg-noble-black transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
