"use client";

/* COMPONENTS */
import { Plans } from "@/content/shared/ui/plans/Plans";

/* NAVIGATION */
import { useRouter } from "next/navigation";

/* STORES */
import { useAnnouncement } from "@/content/shared/ui/annoucement/stores/announcementStore";

/* TYPES */
import { PlanCard } from "@/content/shared/ui/plans/types/planCard";

export function OrganizerPlansContent() {
  const router = useRouter();
  const { setAnnouncement } = useAnnouncement();

  const plans: PlanCard[] = [
    {
      name: "Free",
      description: "Todo lo necesario para comenzar",
      price: "GRATIS",
      period: "/siempre",
      features: [
        "1 torneo",
        "8 equipos por torneo",
        "Modo Express de los marcadores",
      ],
      onSelect: () => {
        setAnnouncement({
          isActivated: true,
          announceType: "ok",
          message: "Pago guardado correctamente",
        });
        router.push("/organizer/home");
      },
    },
    {
      name: "Starter",
      description: "¿Deseas alcanzar tu potencial?",
      price: "$299 MXN",
      period: "/mes",
      features: ["3 torneos simultáneos", "Hasta 24 equipos por torneo"],
      unlocks: ["Nuevos formatos", "Finanzas"],
      onSelect: () => {
        setAnnouncement({
          isActivated: true,
          announceType: "ok",
          message: "Pago guardado correctamente",
        });
        router.push("/organizer/home");
      },
    },
    {
      name: "Pro",
      description: "Para veteranos y amantes del deporte",
      price: "$599 MXN",
      period: "/mes",
      isPopular: true,
      features: ["Torneos e inscripciones ilimitadas"],
      unlocks: [
        "Nuevos formatos",
        "Archivo histórico",
        "Motor de validación",
        "Pagos dentro de la app",
      ],
      onSelect: () => {
        setAnnouncement({
          isActivated: true,
          announceType: "ok",
          message: "Pago guardado correctamente",
        });
        router.push("/organizer/home");
      },
    },
    {
      name: "Elite",
      description: "Para empresas grandes",
      price: "$999 MXN",
      period: "/mes",
      features: ["Todas las funcionalidades del plan Pro"],
      unlocks: ["Modo scout (stats de rendimiento)", "Soporte dedicado"],
      onSelect: () => {
        setAnnouncement({
          isActivated: true,
          announceType: "ok",
          message: "Pago guardado correctamente",
        });
        router.push("/organizer/home");
      },
    },
  ];

  return <Plans plans={plans} wantWait />;
}
