import Link from "next/link";
import { content } from "@/lib/content";

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-ink/10 bg-paper/95">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3">
        <Link href="/" className="text-sm font-semibold tracking-wide">
          {content.shortName}
          <span className="ml-2 font-normal text-ink/60">{content.locationLabel}</span>
        </Link>
        <nav className="hidden items-center gap-5 text-sm sm:flex">
          <a href={content.oddmenuUrl} className="hover:text-lubnan">
            Carta
          </a>
          <Link href="/#visitanos" className="hover:text-lubnan">
            Visítanos
          </Link>
          <a
            href={content.whatsappHref}
            className="bg-lubnan px-3 py-1.5 text-paper"
          >
            Reservar
          </a>
        </nav>
        <a
          href={content.whatsappHref}
          className="bg-lubnan px-3 py-1.5 text-sm text-paper sm:hidden"
        >
          Reservar
        </a>
      </div>
    </header>
  );
}
