const products = [
  {
    id: 1,
    name: "Linen Overshirt",
    price: "€149",
    bg: "bg-pale-cashmere",
  },
  {
    id: 2,
    name: "Merino Knit Vest",
    price: "€129",
    bg: "bg-cinnamon-ice",
  },
  {
    id: 3,
    name: "Wide-Leg Trousers",
    price: "€179",
    bg: "bg-silver-mauve",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="bg-gradient-to-b from-ivory-mist via-coral-dust to-silver-mauve py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-12 lg:mb-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-wahoo mb-3">
              Featured
            </p>
            <h2 className="text-[32px] lg:text-[48px] font-semibold text-wahoo tracking-tight leading-tight">
              New Arrivals
            </h2>
          </div>
          <a
            href="#"
            className="text-wahoo font-semibold text-sm underline underline-offset-4 hover:text-noble-black transition-colors self-start lg:self-auto"
          >
            View all →
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">
          {products.map((product) => (
            <a key={product.id} href="#" className="group flex flex-col">
              <div
                className={`${product.bg} aspect-[3/4] w-full mb-4 overflow-hidden`}
              />
              <div className="flex items-start justify-between gap-2 px-1">
                <p className="font-medium text-wahoo group-hover:text-noble-black transition-colors">
                  {product.name}
                </p>
                <p className="font-medium text-wahoo shrink-0">{product.price}</p>
              </div>
              <button
                type="button"
                className="mt-3 mx-1 border border-wahoo/40 text-wahoo text-sm font-medium py-2.5 px-4 rounded-lg hover:bg-wahoo hover:text-ivory-mist transition-colors"
              >
                Add to bag
              </button>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
