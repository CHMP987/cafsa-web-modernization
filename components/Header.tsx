import Link from "next/link";
import { content } from "@/lib/content";

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-ink/10 bg-paper/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3">
        <Link href="/" className="text-sm font-semibold tracking-wide">
          {content.shortName}
          <span className="ml-2 font-normal text-ink/60">{content.locationLabel}</span>
        </Link>
        <nav className="flex items-center gap-5 text-sm">
          <a href={content.oddmenuUrl} className="hover:text-lubnan">
            Carta
          </a>
          <Link href="/#visitanos" className="hover:text-lubnan">
            Visítanos
          </Link>
          <a
            href={content.whatsappHref}
            className="btn-primary hidden px-4 py-2 text-xs sm:inline-flex"
          >
            Reservar mesa
          </a>
        </nav>
      </div>
    </header>
  );
}
