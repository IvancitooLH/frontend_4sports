"use client";

/* COMPONENTS */
import Link from "next/link";
import Image from "next/image";

/* IMAGES */
import organization1 from "./images/organization1.png";

/* NAVIGATION */
import { usePathname } from "next/navigation";
import { useParams } from "next/navigation";

export function InternalNavbar() {
  const pathname = usePathname();

  const params = useParams();

  const slug = params.slug as string;

  const links = [
    {
      label: "Gestionar",
      href: `/organizer/organizations/${slug}`,
    },
    {
      label: "Pagos",
      href: `/organizer/organizations/${slug}/payment-history`,
    },
    {
      label: "Miembros",
      href: `/organizer/organizations/${slug}/members`,
    },
  ];

  return (
    <div className="border-b border-line px-10 pt-6 flex justify-between items-end">
      <div className="flex items-center gap-4 pb-6">
        <Image
          alt="Organización"
          src={organization1}
          quality={70}
          className="w-12 h-12 min-w-12 min-h-12 rounded-xl object-cover object-center border border-line"
        />
        <div>
          <p className="font-bold text-lg text-left text-ink">Sede Deportes</p>
          <p className="text-sm font-semibold text-primary">Dueño</p>
        </div>
      </div>
      <nav className="flex justify-end gap-2 h-fit">
        {links.map((link) => {
          const active = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`relative px-4 py-2 rounded-t-xl border text-sm transition-all duration-300 border-b-0 border-line ${active ? "border-line border-b-0 text-primary" : "border-transparent border-b-0 hover:bg-surface/70 text-ink"}`}
            >
              {link.label}

              {active && (
                <span className="absolute bottom-0 left-0 right-0 h-1 bg-background translate-y-full" />
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
