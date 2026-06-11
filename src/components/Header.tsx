export default function Header() {
  return (
    <header className="w-full bg-white/10 backdrop-blur-[10px]">
      {/* Desktop nav */}
      <div className="hidden lg:flex items-center justify-between px-6 py-7">
        <nav className="flex items-center gap-5">
          <a href="#" className="font-sans font-bold text-base leading-[0.9] text-accent">
            Item 1
          </a>
          <a href="#" className="font-sans text-base leading-[0.9] text-ivory-mist">
            Item 2
          </a>
          <a href="#" className="font-sans text-base leading-[0.9] text-ivory-mist">
            Item 3
          </a>
          <a href="#" className="font-sans text-base leading-[0.9] text-ivory-mist">
            Item 4
          </a>
        </nav>
        <SearchButton />
      </div>

      {/* Mobile nav */}
      <div className="flex lg:hidden items-center justify-between px-5 py-6">
        <MenuButton />
        <SearchButton />
      </div>
    </header>
  )
}

function SearchButton() {
  return (
    <button
      type="button"
      aria-label="Search"
      className="text-ivory-mist hover:opacity-70 transition-opacity"
    >
      <svg
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="8.5" cy="9" r="6" stroke="currentColor" strokeWidth="1.5" />
        <line
          x1="13.3"
          y1="14"
          x2="18.5"
          y2="19.2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </button>
  )
}

function MenuButton() {
  return (
    <button
      type="button"
      aria-label="Open menu"
      className="text-ivory-mist hover:opacity-70 transition-opacity"
    >
      <div className="relative size-5">
        <span className="absolute top-[2px] left-0 h-0.5 w-5 bg-current" />
        <span className="absolute top-[9px] left-0 h-0.5 w-5 bg-current" />
        <span className="absolute top-[16px] left-0 h-0.5 w-5 bg-current" />
      </div>
    </button>
  )
}
