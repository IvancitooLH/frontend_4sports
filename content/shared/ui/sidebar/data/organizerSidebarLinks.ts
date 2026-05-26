/* ICONS */
import {
  Home,
  Trophy,
  UserRound,
  Bell,
  UsersRound,
  SportShoe,
  LandPlot,
  Handshake,
  ClipboardList,
  CreditCard,
  Sparkles,
} from "lucide-react";

/* TYPES */
import { LinkSidebar } from "@/content/shared/ui/sidebar/types/LinkSidebar";

export const organizerSidebarLinks: LinkSidebar[] = [
  {
    label: "Inicio",
    href: "/organizer/home",
    icon: Home,
  },
  {
    label: "Notificaciones",
    href: "/organizer/notifications",
    icon: Bell,
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
  {
    label: "Entrenamientos",
    href: "/organizer/training",
    icon: SportShoe,
  },
  {
    label: "Canchas",
    href: "/organizer/fields",
    icon: LandPlot,
  },
  {
    label: "Match",
    href: "/organizer/match",
    icon: Handshake,
  },
  {
    label: "Reportes",
    href: "/organizer/reports",
    icon: ClipboardList,
  },
  {
    label: "Planes",
    href: "/organizer/plans",
    icon: Sparkles,
  },
  {
    label: "Pagos",
    href: "/organizer/payments",
    icon: CreditCard,
  },
  {
    label: "Perfil",
    href: "/organizer/profile",
    icon: UserRound,
  },
];
