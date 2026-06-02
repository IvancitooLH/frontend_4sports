import { FeatureCard } from "../cards/FeatureCard";
import { Calendar, BarChart3, Users } from "lucide-react"; // Importamos iconos deportivos/gestión

type PlanItem = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const plans: PlanItem[] = [
  {
    title: "Organización rápida",
    description: "Crea eventos y gestiona equipos con solo unos clics.",
    icon: <Calendar className="h-6 w-6 text-green-600" />,
  },
  {
    title: "Estadísticas inteligentes",
    description: "Sigue resultados, desempeño y progreso en tiempo real.",
    icon: <BarChart3 className="h-6 w-6 text-green-600" />,
  },
  {
    title: "Comunidad activa",
    description: "Conecta jugadores y organizadores en una plataforma única.",
    icon: <Users className="h-6 w-6 text-green-600" />,
  },
];

export function FeaturesSection() {
  return (
    <section id="plans" className="w-full bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 text-center mb-16">
          <span className="inline-flex items-center rounded-full bg-green-100 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-green-700">
            Beneficios clave
          </span>
          <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            Enfocados en el{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
              éxito deportivo
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
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
    </section>
  );
}
