"use client";

/* COMPONENTS */
import { RouteTitle } from "@/content/shared/ui/routeTitle/RouteTitle";
import { SectionContainer } from "@/content/shared/ui/sectionContainer/SectionContainer";
import { OrganizationPlan } from "../components/plan/OrganizationPlan";
import { OrganizationPaymentHistory } from "../components/paymentHistory/OrganizationPaymentHistory";
import { DinamicButton } from "@/content/shared/form/dinamicButton/DinamicButton";
import { Plans } from "@/content/shared/ui/plans/Plans";

/* ICONS */
import { ArrowLeft } from "lucide-react";

/* LIBS */
import { AnimatePresence, motion } from "framer-motion";

/* NAVIGATION */
import { useRouter } from "next/navigation";

/* STORES */
import { usePositionStore } from "../stores/positionStore";

/* TYPES */
import { PlanCard } from "@/content/shared/ui/plans/types/planCard";

export function OrganizerPaymentHistoryContent({ slug }: { slug: string }) {
  const router = useRouter();
  const name = "Sede Deportes";

  const { position = "panel", setPosition } = usePositionStore();

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
        setPosition("panel");
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
        setPosition("panel");
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
        setPosition("panel");
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
        setPosition("panel");
      },
    },
  ];

  return (
    <>
      <RouteTitle
        links={[
          { label: "Organizaciones", href: "/organizer/organizations" },
          {
            label: name,
            href: `/organizer/organizations/payment-history/${slug}`,
          },
        ]}
      />
      <div className="overflow-y-auto flex-1">
        <SectionContainer>
          <AnimatePresence mode="wait">
            <motion.div
              key={position ? "panel" : "plans"}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
              }}
              className="p-6 h-full gap-6 flex flex-col relative"
            >
              {position === "panel" ? (
                <>
                  <DinamicButton
                    action={() => router.push("/organizer/organizations")}
                    type="unfilled"
                    label="Regresar"
                    twClassName="w-fit py-1 text-sm"
                    icon={
                      <ArrowLeft className="size-4 min-h-4 min-w-4 text-primary" />
                    }
                  />

                  <div className="flex gap-6 flex-1 min-h-0 flex-col md:flex-row">
                    <OrganizationPlan onSelect={() => setPosition("plans")} />
                    <OrganizationPaymentHistory />
                  </div>
                </>
              ) : (
                <>
                  <DinamicButton
                    action={() => setPosition("panel")}
                    type="unfilled"
                    label="Regresar"
                    twClassName="w-fit py-1 text-sm absolute top-6 left-6"
                    icon={
                      <ArrowLeft className="size-4 min-h-4 min-w-4 text-primary" />
                    }
                  />
                  <Plans plans={plans} wantWait={false} />
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </SectionContainer>
      </div>
    </>
  );
}
