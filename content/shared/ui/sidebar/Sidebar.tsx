"use client";

/* COMPONENTS */
import { ThemeToggleButtons } from "@/content/shared/ui/sidebar/components/theme/ThemeToogleButtons";

/* HOOKS */
import { useState, useEffect } from "react";

/* ICONS */
import {
  LogOut,
  ChevronsLeft,
  ChevronsRight,
  UserRound,
  ChevronsUpDown,
  User,
  Settings,
} from "lucide-react";
import { FourSportsLogo } from "@/content/shared/icons/FourSportsLogo";

/* NAVIGATION */
import Link from "next/link";
import { usePathname } from "next/navigation";

/* STORES */
import { useSidebarStore } from "@/content/shared/ui/sidebar/stores/SidebarStore";
import { useAnnouncement } from "@/content/shared/ui/annoucement/stores/announcementStore";

/* TYPES */
import { LinkSidebar } from "@/content/shared/ui/sidebar/types/LinkSidebar";

/* LIBS */
import { motion } from "framer-motion";
import * as Tooltip from "@radix-ui/react-tooltip";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export function Sidebar({ links }: { links: LinkSidebar[] }) {
  const { expanded, toggleSidebar } = useSidebarStore();
  const { setAnnouncement } = useAnnouncement();

  const [mounted, setMounted] = useState(false);
  const [openTooltip, setOpenTooltip] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const [user] = useState({
    name: "Pirita Dreemurr",
    email: "pirita@gmail.com",
  });

  const pathname = usePathname();

  const linkClasses = (path: string) => {
    const isActive = pathname === path || pathname?.startsWith(`${path}/`);

    return `${isActive ? "text-primary bg-surface border border-line" : "hover:bg-surface/70 border border-transparent text-ink"}`;
  };

  const handleSignOut = async () => {
    try {
      setAnnouncement({
        isActivated: true,
        isOk: true,
        message: "Sesión cerrada correctamente",
      });
    } catch (error) {
      console.log("Error: ", error);

      setAnnouncement({
        isActivated: true,
        isOk: false,
        message:
          "Ocurrió un error al cerrar sesión, intente nuevamente más tarde",
      });
    }
  };

  useEffect(() => {
    const changeTheme = () => {
      setMounted(true);
    };

    changeTheme();
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");

    const update = () => setIsMobile(media.matches);

    update();

    media.addEventListener("change", update);

    return () => media.removeEventListener("change", update);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <aside
        className={`flex flex-col z-60 transition-all bg-background duration-300 justify-between h-dvh border-r border-r-line absolute lg:static ${expanded ? "w-64 left-0" : "lg:w-18 w-64 -left-64"}`}
      >
        <div className="w-full h-full flex flex-col p-4">
          <div
            className={`flex items-center mb-16 relative ${expanded ? "justify-end" : "lg:justify-center justify-end"}`}
          >
            <div
              className={`transition-all duration-300 pointer-events-none absolute ${expanded ? "w-24 lg:opacity-100 left-0" : "left-0 w-24 lg:w-0 lg:opacity-0 lg:-left-64"}`}
            >
              <FourSportsLogo />
            </div>
            <button
              onClick={toggleSidebar}
              className={`p-1 hover:bg-surface hover:border-line border-transparent border rounded transition-all duration-300 cursor-pointer`}
            >
              {expanded ? (
                <ChevronsLeft className="size-4" />
              ) : (
                <ChevronsRight className="size-4" />
              )}
            </button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="h-full overflow-y-auto flex flex-col gap-2 items-center w-full overflow-x-hidden max-h-full"
          >
            <Tooltip.Provider delayDuration={100}>
              {links.map((link) => (
                <Tooltip.Root
                  key={link.href}
                  open={!expanded ? openTooltip === link.href : false}
                  onOpenChange={(open) => {
                    if (!expanded) {
                      setOpenTooltip(open ? link.href : null);
                    }
                  }}
                >
                  <Tooltip.Trigger asChild>
                    <Link
                      href={link.href}
                      className={`px-[0.70rem] py-2 rounded-xl flex relative group transition-all items-center duration-300 w-full ${expanded ? "gap-6" : "lg:gap-0 gap-6"} ${linkClasses(
                        link.href,
                      )}`}
                    >
                      <link.icon className="size-4 min-w-4 min-h-4" />

                      <span
                        className={`transition-all duration-300 text-sm ${
                          expanded
                            ? "w-full opacity-100"
                            : "lg:w-0 w-fit lg:opacity-0 opacity-100 pointer-events-none"
                        }`}
                      >
                        {link.label}
                      </span>
                    </Link>
                  </Tooltip.Trigger>

                  {!expanded && (
                    <Tooltip.Portal>
                      <Tooltip.Content
                        side="right"
                        sideOffset={25}
                        className="z-70 rounded-full bg-surface px-3 py-1 text-sm font-medium text-ink border border-line"
                      >
                        {link.label}
                      </Tooltip.Content>
                    </Tooltip.Portal>
                  )}
                </Tooltip.Root>
              ))}
            </Tooltip.Provider>
          </motion.div>
        </div>

        <div className="">
          <ThemeToggleButtons />
          <div className="p-2.5 overflow-hidden w-full border-t border-t-line">
            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild>
                <button
                  className="
          flex items-center
          p-1.5
          overflow-hidden
          w-full
          gap-4
          border border-transparent
          hover:bg-surface
          transition-all
          duration-300
          rounded-xl
          hover:border-line
          cursor-pointer
          outline-none
        "
                >
                  <div className="rounded-full w-10 h-10 min-w-10 min-h-10 flex justify-center items-center bg-surface border border-line">
                    <UserRound className="size-4" />
                  </div>

                  <div className="flex-1 min-w-0 flex flex-col text-left">
                    <span className="font-semibold truncate text-sm">
                      {user.name}
                    </span>

                    <span className="text-xs text-neutral-400 truncate">
                      {user.email}
                    </span>
                  </div>

                  <div className="shrink-0">
                    <ChevronsUpDown className="size-4 min-w-4 min-h-4" />
                  </div>
                </button>
              </DropdownMenu.Trigger>

              <DropdownMenu.Portal>
                <DropdownMenu.Content
                  sideOffset={12}
                  align="end"
                  avoidCollisions
                  side={isMobile ? "bottom" : "right"}
                  className="
          z-100
          min-w-56
          rounded-2xl
          border
          border-line
          bg-background
          p-2
          shadow-xl
          animate-in
          fade-in-0
          zoom-in-95

          md:data-[side=right]:slide-in-from-left-2
          data-[side=top]:slide-in-from-bottom-2
        "
                >
                  <DropdownMenu.Item
                    className="
            flex items-center gap-3
            rounded-xl
            px-3 py-2
            text-sm
            outline-none
            cursor-pointer
            hover:bg-surface
          "
                  >
                    <User className="size-4" />
                    Ver perfil
                  </DropdownMenu.Item>

                  <DropdownMenu.Item
                    className="
            flex items-center gap-3
            rounded-xl
            px-3 py-2
            text-sm
            outline-none
            cursor-pointer
            hover:bg-surface
          "
                  >
                    <Settings className="size-4" />
                    Configuración
                  </DropdownMenu.Item>

                  <DropdownMenu.Separator className="my-2 h-px bg-line" />

                  <DropdownMenu.Item
                    onClick={handleSignOut}
                    className="
            flex items-center gap-3
            rounded-xl
            px-3 py-2
            text-sm
            text-red-500
            outline-none
            cursor-pointer
            hover:bg-red-500/10
          "
                  >
                    <LogOut className="size-4" />
                    Cerrar sesión
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>
          </div>
          {/* <div className="p-2.5 overflow-hidden w-full border-t border-t-line">
            <div className="flex items-center p-1.5 overflow-hidden w-full gap-4 border border-transparent hover:bg-surface cursor-pointer transition-all duration-300 rounded-xl hover:border-line">
              <div className="rounded-full w-10 h-10 min-w-10 min-h-10 flex justify-center items-center bg-surface border border-line">
                <UserRound className="size-4" />
              </div>

              <div className="flex-1 min-w-0 flex flex-col">
                <span className="font-semibold truncate text-sm">
                  {user.name}
                </span>

                <span className="text-xs text-neutral-400 truncate">
                  {user.email}
                </span>
              </div>

              <div className="shrink-0">
                <ChevronsUpDown className="size-4 min-w-4 min-h-4" />
              </div>
            </div>
          </div> */}
        </div>
      </aside>
      <div
        onClick={toggleSidebar}
        className={`absolute w-full top-0 left-0 bg-black/50 h-screen transition-all duration-300 z-50 lg:hidden lg:pointer-events-none ${
          expanded ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      ></div>
    </>
  );
}
