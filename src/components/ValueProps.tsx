const props = [
  {
    title: "Free Shipping",
    desc: "On all orders over €80. Delivered in 2–4 business days.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M2 9h16v12H2V9z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M18 13h4l4 4v4h-8V13z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <circle cx="7" cy="22" r="2" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="22" cy="22" r="2" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: "Natural Materials",
    desc: "Linen, merino, organic cotton — chosen for feel and longevity.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 3C14 3 6 8 6 16a8 8 0 0016 0C22 8 14 3 14 3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M14 25V14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M14 18l-4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M14 15l3-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Easy Returns",
    desc: "30-day hassle-free returns. No questions asked.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M5 14a9 9 0 109-9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <polyline points="2,8 5,14 11,11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Premium Quality",
    desc: "Each piece is made to outlast trends — and fast fashion.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 3l2.8 5.6 6.2.9-4.5 4.4 1.1 6.2L14 17l-5.6 3.1 1.1-6.2L5 9.5l6.2-.9L14 3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function ValueProps() {
  return (
    <section className="bg-wahoo py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {props.map((vp) => (
            <div key={vp.title} className="flex flex-col gap-4">
              <div className="text-ivory-mist/70">{vp.icon}</div>
              <div>
                <p className="text-ivory-mist font-semibold mb-1">{vp.title}</p>
                <p className="text-silver-mauve text-sm leading-relaxed">{vp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
