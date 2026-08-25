import { content } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-paper px-4 py-10 pb-24 text-sm text-ink/70 md:pb-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p>{content.name}</p>
        <nav className="flex flex-wrap gap-x-4 gap-y-2">
          <a href={content.whatsappHref}>WhatsApp</a>
          <a href={content.phoneHref}>Llamar</a>
          <a href={content.facebookUrl}>Facebook</a>
          <a href={content.instagramUrl}>Instagram</a>
          <a href={content.oddmenuUrl}>Carta</a>
          <a href={content.tripadvisorUrl}>TripAdvisor</a>
        </nav>
      </div>
      <p className="mx-auto mt-6 max-w-5xl text-xs">{content.proposalBanner}</p>
    </footer>
  );
}
