import { FeatureCard } from "../shared/FeatureCard";
import { Calendar, BarChart3, UsersRound } from "lucide-react";

type PlanItem = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const plans: PlanItem[] = [
  {
    title: "Organización rápida",
    description: "Crea eventos y gestiona equipos con solo unos clics",
    icon: <Calendar className="size-6 text-secondary transition-colors duration-300 group-hover:text-primary" />,
  },
  {
    title: "Estadísticas inteligentes",
    description: "Sigue resultados, desempeño y progreso en tiempo real",
    icon: <BarChart3 className="size-6 text-secondary transition-colors duration-300 group-hover:text-primary" />,
  },
  {
    title: "Comunidad activa",
    description: "Conecta jugadores y organizadores en una plataforma única",
    icon: <UsersRound className="size-6 text-secondary transition-colors duration-300 group-hover:text-primary" />,
  },
];

export function Features() {
  return (
    <div className="w-full bg-surface py-16 sm:py-24 min-h-dvh flex items-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16">
          <h2 className="rounded-full px-4 py-1 text-xs font-bold w-fit bg-secondary text-secondary-text mb-6">
            BENEFICIOS CLAVE
          </h2>

          <h2 className="text-5xl text-ink mb-2">Enfocados en el</h2>
          <h3 className="text-primary text-8xl font-bebas font-bold">
            éxito deportivo
          </h3>

          <p className="max-w-2xl text-lg text-muted text-center">
            Planes claros, soporte constante y un entorno seguro para que tu
            club, tu equipo y tu torneo crezcan con confianza.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((item) => (
            <FeatureCard
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
