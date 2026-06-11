interface AnnouncementBarProps {
  message: string
  linkText?: string
  linkHref?: string
  onDismiss: () => void
}

export default function AnnouncementBar({
  message,
  linkText,
  linkHref,
  onDismiss,
}: AnnouncementBarProps) {
  return (
    <div className="w-full bg-noble-black">
      <div className="flex items-center justify-between px-5 py-5 lg:px-6">
        <p className="font-sans text-base leading-[0.9] text-ivory-mist/90 whitespace-nowrap">
          {message}{' '}
          {linkText && (
            <a href={linkHref ?? '#'} className="text-accent">
              {linkText}
            </a>
          )}
        </p>
        <button
          type="button"
          onClick={onDismiss}
          aria-label="Dismiss announcement"
          className="relative ml-4 shrink-0 size-5 text-ivory-mist/90 hover:opacity-70 transition-opacity"
        >
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="absolute h-px w-[27px] bg-current rotate-45" />
            <span className="absolute h-px w-[27px] bg-current -rotate-45" />
          </span>
        </button>
      </div>
    </div>
  )
}
