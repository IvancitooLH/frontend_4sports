/* COMPONENTS */
import FeatureCardLittle from "../shared/FeatureCardLittle";

/* ICONS */
import { Trophy, UserPlus, Activity, Medal } from "lucide-react";

type TournamentItem = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const tournaments: TournamentItem[] = [
  {
    title: "Campeonatos rápidos",
    description: "Organiza brackets y grupos con flujo simple y visual.",
    icon: (
      <Trophy className="size-5 text-ink transition-all group-hover:text-primary group-hover:scale-110 duration-300" />
    ),
  },
  {
    title: "Inscripciones fáciles",
    description: "Acepta equipos y jugadores con un proceso cómodo y seguro.",
    icon: (
      <UserPlus className="size-5 text-ink transition-all group-hover:text-primary group-hover:scale-110 duration-300" />
    ),
  },
  {
    title: "Resultados en vivo",
    description: "Presenta puntajes, clasificaciones y resúmenes al momento.",
    icon: (
      <Activity className="size-5 text-ink transition-all group-hover:text-primary group-hover:scale-110 duration-300" />
    ),
  },
  {
    title: "Premios y rankings",
    description: "Mantén motivada a tu comunidad con logros claros y justos.",
    icon: (
      <Medal className="size-5 text-ink transition-all group-hover:text-primary group-hover:scale-110 duration-300" />
    ),
  },
];

export function Tournaments() {
  return (
    <div className="w-full bg-background py-48 min-h-dvh flex flex-col justify-center items-center">
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16">
          <h2 className="rounded-full px-4 py-1 text-xs font-bold w-fit bg-secondary text-secondary-text mb-6">
            COMPETENCIAS
          </h2>

          <h3 className="text-primary text-8xl font-bebas font-bold">
            Torneos
          </h3>

          <p className="max-w-2xl text-lg text-muted text-center">
            Vive torneos con reglas claras, resultados automáticos y momentos
            memorables para tu equipo.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          {tournaments.map((item) => (
            <FeatureCardLittle
              key={item.title}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
