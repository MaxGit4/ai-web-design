const posts = [
  "bg-pale-cashmere",
  "bg-cinnamon-ice",
  "bg-silver-mauve",
  "bg-coral-dust",
  "bg-pale-cashmere",
  "bg-cinnamon-ice",
];

export default function InstagramFeed() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex items-baseline justify-between mb-8 lg:mb-10">
          <h2 className="text-[28px] lg:text-[36px] font-semibold text-fg-heading tracking-tight">
            Follow our world
          </h2>
          <a
            href="#"
            className="text-wahoo font-semibold text-sm underline underline-offset-4 hover:text-noble-black transition-colors"
          >
            @brandname →
          </a>
        </div>

        <div className="grid grid-cols-3 lg:grid-cols-6 gap-2 lg:gap-3">
          {posts.map((bg, i) => (
            <a
              key={i}
              href="#"
              className={`group aspect-square overflow-hidden ${bg} block`}
              aria-label={`Instagram post ${i + 1}`}
            >
              <div className="size-full bg-black/0 group-hover:bg-black/10 transition-colors duration-200" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
