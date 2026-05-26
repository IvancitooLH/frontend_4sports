"use client";

/* COMPONENTS */
import Link from "next/link";

/* ICONS */
import { ChevronRight, Menu } from "lucide-react";

/* NAVIGATION */
import { usePathname } from "next/navigation";

/* STORES */
import { useSidebarStore } from "@/content/shared/ui/sidebar/stores/SidebarStore";

/* TYPES */
import { LinkSidebar } from "@/content/shared/ui/sidebar/types/LinkSidebar";

export function RouteTitle({ links }: { links: LinkSidebar[] }) {
  const { toggleSidebar } = useSidebarStore();

  const pathname = usePathname();

  const segments = pathname !== null ? pathname.split("/").filter(Boolean) : [];

  const mainRoute = links.find((link) => link.href === `/${segments[0]}/${segments[1]}`);

  const addSegment =
    mainRoute && segments.length > 2
      ? segments.find((sub) => sub === `add`)
      : mainRoute && segments.length > 1
        ? segments.find((sub) => sub === `add`)
        : null;

  const updateSegment =
    mainRoute && segments.length > 2
      ? segments.find((sub) => sub === `update`)
      : null;

  return (
    <header className="w-full p-4 border-b border-b-line bg-background">
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className={`p-1 hover:bg-surface rounded transition-all duration-300 lg:hidden cursor-pointer`}
        >
          <Menu className="size-4" />
        </button>

        <Link
          className="text-lg font-light"
          href={`${mainRoute?.href}`}
        >
          {mainRoute?.label}
        </Link>

        {addSegment && (
          <>
            <ChevronRight className="size-3 text-primary hidden md:block" />
            <Link className="text-xl font-light hidden md:block" href={""}>
              Agregar
            </Link>
          </>
        )}

        {updateSegment && (
          <>
            <ChevronRight className="size-3 text-primary hidden md:block" />
            <Link className="text-xl font-light hidden md:block" href={""}>
              Actualizar
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
