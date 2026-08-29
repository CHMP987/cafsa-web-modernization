"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { content } from "@/lib/content";

const sections = ["inicio", "experiencia", "carta", "visitanos"] as const;

export function Header() {
  const [active, setActive] = useState<string>("inicio");

  useEffect(() => {
    const els = sections
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (els.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-20 border-b border-ink/10 bg-paper/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3">
        <Link href="/" className="text-sm font-semibold tracking-wide">
          {content.shortName}
          <span className="ml-2 font-normal text-ink/60">{content.locationLabel}</span>
        </Link>
        <nav className="flex items-center gap-5 text-sm">
          <a
            href={content.oddmenuUrl}
            className={`transition-colors hover:text-lubnan ${active === "carta" ? "text-lubnan" : ""}`}
            aria-current={active === "carta" ? "true" : undefined}
          >
            Carta
          </a>
          <Link
            href="/#visitanos"
            className={`transition-colors hover:text-lubnan ${active === "visitanos" ? "text-lubnan" : ""}`}
            aria-current={active === "visitanos" ? "true" : undefined}
          >
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
