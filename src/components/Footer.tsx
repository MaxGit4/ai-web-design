const navGroups = [
  {
    title: "Shop",
    links: [
      { label: "New In", href: "#" },
      { label: "Tops", href: "#" },
      { label: "Bottoms", href: "#" },
      { label: "Accessories", href: "#" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Shipping & Returns", href: "#" },
      { label: "Size Guide", href: "#" },
      { label: "Care Instructions", href: "#" },
      { label: "Contact Us", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", href: "#" },
      { label: "Sustainability", href: "#" },
      { label: "Press", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
];

function InstagramIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true">
      <rect
        x="2"
        y="2"
        width="16"
        height="16"
        rx="4.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="10" cy="10" r="3.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="14.5" cy="5.5" r="1" fill="currentColor" />
    </svg>
  );
}

function PinterestIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true">
      <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M7.5 17c.5-2 1.3-5 1.3-5s-.3-.7-.3-1.7c0-1.6.9-2.8 2-2.8.9 0 1.4.7 1.4 1.6 0 1-.6 2.4-.9 3.7-.3 1.1.5 2 1.6 2 1.9 0 3.2-2.4 3.2-5.3 0-2.2-1.5-3.8-3.8-3.8-2.6 0-4.2 2-4.2 4 0 .8.3 1.6.7 2.1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true">
      <path
        d="M13 2c.2 1.4 1 2.5 2.5 3v2.5c-1 0-2.2-.4-3-.9V13a4.5 4.5 0 11-4.5-4.5h.5V11a2 2 0 100 4 2 2 0 002-2V2h2.5z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-noble-black pt-16 lg:pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 pb-14 border-b border-ivory-mist/10">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-1">
            <p className="font-black text-[26px] text-ivory-mist tracking-tighter mb-2 leading-none">
              Brand
            </p>
            <p className="text-silver-mauve text-sm mb-6 leading-relaxed">
              Crafted with intention.
              <br />
              Worn with purpose.
            </p>
            <div className="flex gap-4 text-silver-mauve">
              <a
                href="#"
                className="hover:text-ivory-mist transition-colors"
                aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a
                href="#"
                className="hover:text-ivory-mist transition-colors"
                aria-label="Pinterest">
                <PinterestIcon />
              </a>
              <a
                href="#"
                className="hover:text-ivory-mist transition-colors"
                aria-label="TikTok">
                <TikTokIcon />
              </a>
            </div>
          </div>

          {/* Nav columns */}
          {navGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-ivory-mist font-semibold text-xs uppercase tracking-[0.18em] mb-5">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-silver-mauve text-sm hover:text-burning-orange transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <p className="text-silver-mauve text-sm">
            © 2025 Brand. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-5">
            {["Privacy Policy", "Terms of Service", "Cookie Settings"].map(
              (label) => (
                <a
                  key={label}
                  href="#"
                  className="text-silver-mauve text-sm hover:text-ivory-mist transition-colors">
                  {label}
                </a>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
