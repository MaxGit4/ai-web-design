const categories = [
  { name: "New In", bg: "bg-wahoo", text: "text-ivory-mist" },
  { name: "Tops", bg: "bg-coral-dust", text: "text-wahoo" },
  { name: "Bottoms", bg: "bg-silver-mauve", text: "text-wahoo" },
  { name: "Accessories", bg: "bg-cinnamon-ice", text: "text-wahoo" },
];

export default function CategoryGrid() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-wahoo mb-3">
          Shop by Category
        </p>
        <h2 className="text-[32px] lg:text-[48px] font-semibold text-fg-heading tracking-tight leading-tight mb-10 lg:mb-14">
          Find your fit
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          {categories.map((cat) => (
            <a
              key={cat.name}
              href="#"
              className={`group relative overflow-hidden aspect-[3/4] flex items-end p-5 lg:p-7 ${cat.bg} transition-transform duration-300 hover:-translate-y-1`}
            >
              <span
                className={`font-semibold text-lg lg:text-xl tracking-tight ${cat.text} group-hover:underline underline-offset-4`}
              >
                {cat.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
