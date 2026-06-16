/* ICONS */
import { Home, Trophy, UsersRound, Building2 } from "lucide-react";

/* TYPES */
import { LinkSidebar } from "@/content/shared/ui/sidebar/types/LinkSidebar";

export const organizerSidebarLinks: LinkSidebar[] = [
  {
    label: "Inicio",
    href: "/organizer/home",
    icon: Home,
  },
  {
    label: "Organizaciones",
    href: "/organizer/organizations",
    icon: Building2,
  },
  {
    label: "Torneos",
    href: "/organizer/tournaments",
    icon: Trophy,
  },
  {
    label: "Equipos",
    href: "/organizer/teams",
    icon: UsersRound,
  },
  /* {
    label: "Canchas",
    href: "/organizer/fields",
    icon: LandPlot,
  }, */
  /* {
    label: "Match",
    href: "/organizer/match",
    icon: Handshake,
  }, */
  /* {
    label: "Reportes",
    href: "/organizer/reports",
    icon: ClipboardList,
  }, */
  /* {
    label: "Pagos",
    href: "/organizer/payments",
    icon: CreditCard,
  }, */
];
