"use client";

import { FourSportsIcon } from "@/content/shared/icons/fourSports/FourSportsIcon";
import { TitleWithDescription } from "@/content/shared/ui/titleWithDescription/TitleWithDescription";
import { ParticlesShapes } from "../../../shared/ParticlesShapes";
import { useTheme } from "next-themes";

export function WhoWeAre() {
  const { resolvedTheme } = useTheme();

  return (
    <div className="w-full bg-background h-dvh flex items-center relative">
      <div className="absolute top-0 left-0 z-0 w-full h-full">
        <ParticlesShapes
          backColor="#00000"
          idContainer="particulasFiguras1"
          shapeColor={resolvedTheme === "dark" ? "#141610" : "#ecebe4"}
          opacity={{ min: 0.2, max: 0.8 }}
          opacityAnimation={{
            enable: true,
            speed: 0.5,
          }}
        />
      </div>

      <div className="relative flex h-3/4 w-full items-center justify-center overflow-hidden">
        <div className="z-10 max-w-1/2 flex flex-col items-center gap-6 bg-background p-4 rounded-full">
          <div className={`pointer-events-none w-36`}>
            <FourSportsIcon />
          </div>

          <TitleWithDescription
            title="¿Quiénes somos?"
            center
            description="4Sports nace de la pasión por el deporte y la idea de conectar a jugadores, equipos y organizadores en un solo lugar. Este espacio simplifica la gestión de torneos, estadísticas y competencias, permitiendo que cada partido, resultado y logro cobre vida. "
          />
        </div>
      </div>
    </div>
  );
}
