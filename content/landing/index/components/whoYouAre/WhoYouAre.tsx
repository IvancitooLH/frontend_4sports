import { RoleCard } from "../shared/RoleCard";
import ball from "./images/field.jpg";
import { ClipboardList, SportShoe } from "lucide-react";

const roles = [
  {
    title: "Jugador",
    description:
      "Encuentra partidos, únete a equipos y compite con apoyo de estadísticas y comunidad.",
    image: (
      <SportShoe className="size-8 min-w-8 min-h-8 text-[#ff4b1f] transition-colors duration-300 group-hover:text-[#d4f233]" />
    ),
  },
  {
    title: "Organizador",
    description:
      "Planea torneos, gestiona equipos y ofrece a tu comunidad una experiencia profesional y amigable.",
    image: (
      <ClipboardList className="size-8 min-w-8 min-h-8 text-[#ff4b1f] transition-colors duration-300 group-hover:text-[#d4f233]" />
    ),
  },
];

export function WhoYouAre() {
  return (
    <div
      className="w-full min-h-dvh bg-cover bg-center bg-fixed relative py-48 flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${ball.src})`,
      }}
    >
      <div className="w-full h-full absolute top-0 left-0 z-0 bg-linear-to-b from-black/60 via-black/30 to-transparent" />

      <div>
        <div className="flex flex-col items-center mb-16 z-20 relative">
          <h1 className="rounded-full px-4 py-1 text-xs font-bold w-fit bg-[#ff4b1f] text-[#f7f6f2] mb-6">
            PERFILES 4SPORTS
          </h1>

          <h2 className="text-5xl text-[#f7f6f2] mb-2">Tu posición, tu rol,</h2>
          <h3 className="text-[#d4f233] text-8xl font-bebas font-bold">
            tu hogar
          </h3>

          <p className="max-w-2xl text-lg text-[#f0efe9] text-center">
            En 4Sports cada usuario importa: desde el jugador que compite hasta
            el organizador que mueve todo detrás del escenario.
          </p>
        </div>

        <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Grid de 2 Columnas */}
          <div className="grid gap-8 md:grid-cols-2 max-w-5xl">
            {roles.map((role) => (
              <RoleCard
                key={role.title}
                title={role.title}
                description={role.description}
                image={role.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
