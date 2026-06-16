"use client";

/* COMPONENTS */
import Link from "next/link";

/* ICONS */
import { ChevronRight, Menu } from "lucide-react";

/* STORES */
import { useSidebarStore } from "@/content/shared/ui/sidebar/stores/SidebarStore";

export function RouteTitle({
  links,
}: {
  links: { label: string; href: string }[];
}) {
  const { toggleSidebar } = useSidebarStore();

  return (
    <header className="w-full p-4 border-b border-b-line bg-background">
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className={`p-1 hover:bg-surface rounded transition-all duration-300 lg:hidden cursor-pointer`}
        >
          <Menu className="size-4" />
        </button>

        {links.map((link, index) => (
          <div key={index} className="flex">
            <Link className="text-lg font-light" href={link.href}>
              {link.label}
            </Link>
            {index < links.length - 1 && (
              <ChevronRight className="size-3 text-primary hidden md:block" />
            )}
          </div>
        ))}
      </div>
    </header>
  );
}
