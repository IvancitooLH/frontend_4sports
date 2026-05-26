/* ICONS */
import { Home, Trophy } from "lucide-react";

/* TYPES */
import { LinkSidebar } from "@/content/shared/ui/sidebar/types/LinkSidebar";

export const organizerSidebarLinks: LinkSidebar[] = [
  {
    label: "Inicio",
    href: "/organizer/home",
    icon: Home,
  },
  {
    label: "Torneos",
    href: "/organizer/tournaments",
    icon: Trophy,
  },
];
