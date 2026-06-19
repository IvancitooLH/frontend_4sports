"use client";

/* COMPONENTS */
import { SectionContainer } from "@/content/shared/ui/sectionContainer/SectionContainer";
import { AddOrganizationForm } from "../components/addOrganizationForm/AddOrganizationForm";

/* HOOKS */
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

/* STORES */
import { useAnnouncement } from "@/content/shared/ui/annoucement/stores/announcementStore";

/* TYPES */
import { AddOrganizationFormType } from "../types/addOrganizationFormType";
import { AnimatePresence, motion } from "framer-motion";
import { Plans } from "@/content/shared/ui/plans/Plans";
import { useRouter } from "next/navigation";
import { PlanCard } from "@/content/shared/ui/plans/types/planCard";

export function OrganizerAddOrganizationContent() {
  const router = useRouter();

  const { setAnnouncement } = useAnnouncement();
  const [saving, setSaving] = useState(false);
  const [finished, setFinished] = useState(false);

  const methods = useForm<AddOrganizationFormType>({
    defaultValues: {
      orgName: "",
      orgDescription: "",
    },
  });

  const onSubmit = async (data: AddOrganizationFormType) => {
    try {
      setSaving(true);

      console.log(data);

      setTimeout(() => {
        setAnnouncement({
          isActivated: true,
          announceType: "ok",
          message: "Organización guardada correctamente, seleccione un plan",
        });
        setFinished(true);
      }, 1000);
    } catch (error) {
      setSaving(false);
      console.log("Error", error);
    }
  };

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
        router.push("/organizer/organizations");
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
        router.push("/organizer/organizations");
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
        router.push("/organizer/organizations");
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
        router.push("/organizer/organizations");
      },
    },
  ];

  return (
    <SectionContainer>
      <div className="p-6 flex flex-col h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={finished ? "plans" : "form"}
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
            className="w-full h-full flex items-center"
          >
            {!finished ? (
              <FormProvider {...methods}>
                <AddOrganizationForm
                  action={methods.handleSubmit(onSubmit)}
                  saving={saving}
                />
              </FormProvider>
            ) : (
              <Plans plans={plans} wantWait={false} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </SectionContainer>
  );
}
