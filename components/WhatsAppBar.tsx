"use client";

import { useEffect, useState } from "react";
import { content } from "@/lib/content";

export function WhatsAppBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("inicio");
    if (!hero) {
      // No hero section on the page — always show the bar.
      const raf = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(raf);
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0.35 },
    );

    io.observe(hero);
    return () => io.disconnect();
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-ink/10 bg-lubnan md:hidden">
      <a
        href={content.whatsappHref}
        className="block px-4 py-3 text-center text-sm font-medium text-paper"
      >
        Reservar por WhatsApp
      </a>
    </div>
  );
}
