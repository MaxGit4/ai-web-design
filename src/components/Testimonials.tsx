const testimonials = [
  {
    quote:
      "The linen shirt is everything I hoped for — the weight, the drape, the detail. I've worn it almost every day this summer.",
    author: "Marie K.",
    location: "Berlin",
  },
  {
    quote:
      "Finally a brand that delivers on its sustainability claims. The merino knit has washed beautifully three seasons in.",
    author: "Tom A.",
    location: "Copenhagen",
  },
  {
    quote:
      "Impeccable quality. The wide-leg trousers are so well cut they look tailored. Worth every cent.",
    author: "Sophia R.",
    location: "Amsterdam",
  },
];

function StarRow() {
  return (
    <div className="flex gap-1 mb-4" aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M7 1l1.5 3 3.5.5-2.5 2.5.6 3.5L7 9 3.9 10.5l.6-3.5L2 4.5l3.5-.5L7 1z"
            fill="#ff7124"
          />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-white py-14 lg:py-20 border-t border-border-default">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-0 lg:divide-x lg:divide-border-default">
          {testimonials.map((t) => (
            <div key={t.author} className="lg:px-10 first:lg:pl-0 last:lg:pr-0">
              <StarRow />
              <p className="text-fg italic leading-relaxed mb-4">"{t.quote}"</p>
              <p className="text-fg-heading font-semibold text-sm">
                {t.author}
                <span className="font-normal text-fg"> · {t.location}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
