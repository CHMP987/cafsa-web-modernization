"use client";

import { useEffect, useState } from "react";
import { content } from "@/lib/content";

export function WhatsAppBar() {
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("inicio");
    if (!hero) {
      const raf = requestAnimationFrame(() => setPastHero(true));
      return () => cancelAnimationFrame(raf);
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        setPastHero(!entry.isIntersecting);
      },
      { threshold: 0.35 },
    );

    io.observe(hero);
    return () => io.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-30 border-t border-ink/10 bg-lubnan md:hidden ${
        pastHero ? "whatsapp-bar-visible" : "whatsapp-bar-enter"
      }`}
      aria-hidden={!pastHero}
    >
      <a
        href={content.whatsappHref}
        className="block px-4 py-3 text-center text-sm font-medium text-paper"
        tabIndex={pastHero ? 0 : -1}
      >
        Reservar por WhatsApp
      </a>
    </div>
  );
}
