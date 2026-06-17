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
    <header className="w-full p-4 border-b border-b-line bg-background">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={toggleSidebar}
            className={`p-1 hover:bg-surface rounded transition-all duration-300 lg:hidden cursor-pointer`}
          >
            <Menu className="size-4" />
          </button>

          {links.map((link, index) => (
            <div key={index} className="flex">
              <Link className="font-light" href={link.href}>
                {link.label}
              </Link>
              {index < links.length - 1 && (
                <ChevronRight className="size-3 text-primary hidden md:block" />
              )}
            </div>
          ))}
        </div>

        <button
          onClick={toggleNotificationsSidebar}
          className={`p-1 hover:bg-surface rounded transition-all duration-300 cursor-pointer relative`}
        >
          <Bell className="size-6 text-primary" />
          <div className="absolute top-0 right-0 w-5 h-5 rounded-full bg-secondary translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
            <p className="text-[8px] text-white">2</p>
          </div>
        </button>
      </div>
    </header>
  );
}
