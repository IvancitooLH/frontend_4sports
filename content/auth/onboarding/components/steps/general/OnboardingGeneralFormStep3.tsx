"use client";

/* COMPONENTS */
import { ChoiceCard } from "@/content/auth/onboarding/components/choiceCard/ChoiceCard";

/* HOOKS */
import { useFormContext } from "react-hook-form";

/* ICONS */
import { SportShoe, ClipboardList } from "lucide-react";

/* TYPES */
import { OnboardingForm } from "@/content/auth/onboarding/types/onboardingForm";

export function OnboardingGeneralFormStep3() {
  const { watch, setValue } = useFormContext<OnboardingForm>();

  const role = watch("role");

  return (
    <div className="w-full h-full flex md:flex-row flex-col gap-4 p-4">
      <ChoiceCard
        active={role === "player"}
        icon={<SportShoe className="size-6 min-w-6 min-h-6" />}
        title="¡Seré un jugador!"
        dots={[
          "Me uniré a equipos",
          "Participaré en torneos",
          "Miraré mis estadísticas",
          "Creceré como deportista"
        ]}
        action={() => {
          setValue("role", "player");
        }}
      />

      <ChoiceCard
        active={role === "organizer"}
        icon={<ClipboardList className="size-6 min-w-6 min-h-6" />}
        title="¡Seré un organizador!"
        dots={[
          "Organizaré ligas y torneos",
          "Gestionaré estadísticas",
          "Controlaré jugadores y equipos",
          "Proporcionaré pagos"
        ]}
        action={() => {
          setValue("role", "organizer");
        }}
      />
    </div>
  );
}
