"use client"

/* COMPONENTS */
import { TitleWithDescription } from "@/content/shared/ui/titleWithDescription/TitleWithDescription";
import { ChoiceCard } from "@/content/auth/register/choice/components/ChoiceCard";

/* ICONS */
import { SportShoe, ClipboardList } from "lucide-react";

/* NAVIGATION */
import { useRouter } from "next/navigation";

export function ChoiceContent() {
  const router = useRouter();

  return (
    <div className="max-h-dvh h-dvh w-full flex items-center justify-center flex-col gap-4">
      <TitleWithDescription
        title="Elige tu rol"
        description="¿Para que deseas usar 4sports?"
      />

      <div className="w-full lg:w-2/4 h-fit flex gap-6 mt-6">
        <ChoiceCard
          icon={<SportShoe className="size-18" />}
          title="¡Seré un jugador!"
          dots={[
            "Me uniré a equipos",
            "Participaré en torneos",
            "Miraré mis estadísticas",
          ]}
          action={() => router.push("/register/choice/player")}
        />

        <ChoiceCard
          icon={<ClipboardList className="size-18" />}
          title="¡Seré un organizador!"
          dots={[
            "Organizaré ligas y torneos",
            "Gestionaré estadísticas",
            "Controlaré jugadores, equipos y pagos",
          ]}
          action={() => router.push("/register/choice/organizer")}
        />
      </div>
    </div>
  );
}
