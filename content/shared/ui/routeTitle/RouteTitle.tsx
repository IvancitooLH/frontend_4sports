"use client";

/* COMPONENTS */
import Link from "next/link";

/* ICONS */
import { ChevronRight, Menu, Bell } from "lucide-react";

/* STORES */
import { useSidebarStore } from "@/content/shared/ui/sidebar/stores/SidebarStore";
import { useNotificationsSidebarStore } from "@/content/shared/ui/notificationsSidebar/stores/notificationsSidebarStore";

export function RouteTitle({
  links,
}: {
  links: { label: string; href: string }[];
}) {
  const { toggleSidebar } = useSidebarStore();
  const { toggleNotificationsSidebar } = useNotificationsSidebarStore();

  return (
    <header className="w-full py-4 px-6 border-b border-b-line bg-background">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button
            onClick={toggleSidebar}
            className={`p-1 hover:bg-surface rounded transition-all duration-300 lg:hidden cursor-pointer`}
          >
            <Menu className="size-4" />
          </button>

          {links.map((link, index) => (
            <div key={index} className="flex items-center gap-2">
              <Link className="font-light" href={link.href}>
                {link.label}
              </Link>
              {index < links.length - 1 && (
                <ChevronRight className="size-3 text-primary" />
              )}
            </div>
          ))}
        </div>

        <button
          onClick={toggleNotificationsSidebar}
          className={`p-2 bg-surface rounded-full transition-all duration-300 cursor-pointer relative border border-line hover:border-primary`}
        >
          <Bell className="size-6 text-primary" />
          <div className="absolute py-0.5 px-1.5 top-0 right-0 rounded-full bg-secondary translate-x-1/2 -translate-y-1/2">
            <p className="text-xs text-white font-bold">2</p>
          </div>
        </button>
      </div>
    </header>
  );
}
