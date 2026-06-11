import { useRef, useState, useEffect } from "react";

interface HeroBannerProps {
  heading: string;
  subheading: string;
  imageSrc: string;
  ctaHref?: string;
}

export default function HeroBanner({
  heading,
  subheading,
  imageSrc,
  ctaHref = "#",
}: HeroBannerProps) {
  return (
    <section className="relative flex flex-col min-h-screen w-full overflow-hidden">
      <img
        src={imageSrc}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 size-full object-cover pointer-events-none"
      />

      <div className="relative flex flex-1 overflow-hidden px-5 py-10 lg:px-6 lg:py-[60px]">
        <div className="relative flex flex-1 flex-col items-start justify-end min-w-0 pb-[160px] lg:pb-0">
          <p className="font-sans font-black uppercase leading-[0.9] text-[90px] lg:text-[220px] text-[rgba(242,237,233,0.9)] w-min min-w-full">
            {heading}
          </p>
          <p className="font-sans font-black uppercase leading-[0.9] text-[90px] lg:text-[220px] text-[rgba(242,237,233,0.4)] w-min min-w-full">
            {subheading}
          </p>

          {/* Desktop CTA: bottom-right */}
          <div className="absolute bottom-0 right-0 hidden lg:flex drop-shadow-[0px_4px_2px_rgba(0,0,0,0.12)]">
            <RotatingCTA href={ctaHref} size={160} />
          </div>

          {/* Mobile CTA: centered bottom */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex lg:hidden drop-shadow-[0px_3.3px_1.65px_rgba(0,0,0,0.12)]">
            <RotatingCTA href={ctaHref} size={132} />
          </div>
        </div>
      </div>
    </section>
  );
}

interface RotatingCTAProps {
  href: string;
  size: number;
}

function RotatingCTA({ href, size }: RotatingCTAProps) {
  const cx = size / 2;
  const cy = size / 2;
  const r = size / 2 - 16;
  const pathId = `cta-circle-${size}`;
  const text = " EXPLORE  ·  EXPLORE  ·  EXPLORE  · ";

  const textPathRef = useRef<SVGTextPathElement>(null);
  const [letterSpacing, setLetterSpacing] = useState(0);

  useEffect(() => {
    if (!textPathRef.current) return;
    const naturalLength = textPathRef.current.getComputedTextLength();
    const circumference = 2 * Math.PI * r;
    setLetterSpacing((circumference - naturalLength) / text.length);
  }, [r, text.length]);

  return (
    <a
      href={href}
      className="relative flex items-center justify-center rounded-full bg-accent"
      style={{ width: size, height: size }}
      aria-label="Explore">
      {/* Rotating text ring */}
      <svg
        className="absolute inset-0 animate-spin"
        style={{ animationDuration: "8s" }}
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        aria-hidden="true">
        <defs>
          <path
            id={pathId}
            d={`M ${cx},${cy} m -${r},0 a ${r},${r} 0 1,1 ${r * 2},0 a ${r},${r} 0 1,1 -${r * 2},0`}
          />
        </defs>
        <text
          fill="white"
          fontSize={size * 0.09}
          fontFamily="'Mona-Sans', sans-serif"
          fontWeight="700"
          letterSpacing={letterSpacing}>
          <textPath ref={textPathRef} href={`#${pathId}`}>
            {text}
          </textPath>
        </text>
      </svg>

      {/* Down arrow */}
      <svg
        width={size * 0.5}
        height={size * 0.5}
        viewBox="0 0 79 79"
        fill="none"
        className="relative z-10"
        aria-hidden="true">
        <line
          x1="39.5"
          y1="12"
          x2="39.5"
          y2="62"
          stroke="white"
          strokeWidth="4.5"
          strokeLinecap="round"
        />
        <polyline
          points="19,48 39.5,67 60,48"
          stroke="white"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </a>
  );
}
