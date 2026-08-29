import type { ReactNode } from "react";
import { content } from "@/lib/content";

type IconProps = { className?: string };

function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

function PhoneIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function MenuIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className={className}
      aria-hidden
    >
      <path d="M4 6h16M4 12h16M4 18h10" />
    </svg>
  );
}

function TripAdvisorIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm4 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm4.5-7H18c-1.1-1.78-3.08-3-5.5-3h-1c-2.42 0-4.4 1.22-5.5 3H5.5C4.67 10 4 10.67 4 11.5S4.67 13 5.5 13 7 12.33 7 11.5c0-.06 0-.12-.01-.18C7.87 9.92 9.34 9 11 9h2c1.66 0 3.13.92 4.01 2.32-.01.06-.01.12-.01.18 0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5S19.33 10 18.5 10z" />
    </svg>
  );
}

const links: { label: string; href: string; icon: ReactNode }[] = [
  {
    label: "WhatsApp",
    href: content.whatsappHref,
    icon: <WhatsAppIcon className="h-4 w-4" />,
  },
  { label: "Llamar", href: content.phoneHref, icon: <PhoneIcon className="h-4 w-4" /> },
  {
    label: "Facebook",
    href: content.facebookUrl,
    icon: <FacebookIcon className="h-4 w-4" />,
  },
  {
    label: "Instagram",
    href: content.instagramUrl,
    icon: <InstagramIcon className="h-4 w-4" />,
  },
  { label: "Carta", href: content.oddmenuUrl, icon: <MenuIcon className="h-4 w-4" /> },
  {
    label: "TripAdvisor",
    href: content.tripadvisorUrl,
    icon: <TripAdvisorIcon className="h-4 w-4" />,
  },
];

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-paper px-4 py-10 pb-16 text-sm text-ink/70 md:pb-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p>{content.name}</p>
        <nav aria-label="Redes y contacto" className="flex flex-wrap items-center gap-x-4 gap-y-2">
          {links.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              className="inline-flex items-center gap-1.5 hover:text-lubnan"
            >
              <span aria-hidden>{icon}</span>
              {label}
            </a>
          ))}
        </nav>
      </div>
      <p className="mx-auto mt-6 max-w-5xl text-xs">{content.proposalBanner}</p>
    </footer>
  );
}
