import teams from "./images/teams.jpg";
import stats from "./images/stats.jpg";
import Image from "next/image";

export function Teams() {
  return (
    <div className="w-full bg-surface py-48 min-h-dvh flex flex-col justify-center items-center">
      <div className="flex flex-col items-center mb-16">
        <h2 className="rounded-full px-4 py-1 text-xs font-bold w-fit bg-secondary text-secondary-text mb-6">
          RENDIMIENTO COLECTIVO
        </h2>

        <h2 className="text-5xl text-ink mb-2">Mi equipo</h2>
        <h3 className="text-primary text-8xl font-bebas font-bold">
          Mis logros
        </h3>

        <p className="max-w-2xl text-lg text-muted text-center">
          Nuestra plataforma centraliza toda la información de tus torneos en un
          solo lugar, permitiendo administrar tus equipos y estadísticas
          fácilmente
        </p>
      </div>

      <div className="space-y-16 max-w-5xl mx-auto">
        <div className="flex flex-col gap-16">
          <div className="flex items-center gap-8">
            <div className="h-64 w-64 relative min-w-64 min-h-64">
              <Image
                src={teams}
                alt="Equipos"
                fill
                quality={70}
                loading="lazy"
                className="object-cover object-top rounded-2xl"
              />
            </div>

            <div className="flex flex-col gap-2 text-center">
              <h3 className="text-2xl font-bold text-ink">
                Equipos
              </h3>
              <p className="text-body">
                Crea equipos sólidos, administra miembros y mantén una visión
                clara de tus agrupaciones con herramientas optimizadas para
                coordinar a cada integrante.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <div className="flex flex-col gap-2 text-center">
              <h3 className="text-2xl text-ink font-bold">
                Estadísticas
              </h3>
              <p className="text-body">
                Consulta logros, rendimiento y resultados con paneles claros
                para todos los perfiles, haciendo que la toma de decisiones sea
                precisa y visual.
              </p>
            </div>

            <div className="h-64 w-64 relative min-w-64 min-h-64">
              <Image
                src={stats}
                alt="Estadísticas"
                fill
                quality={70}
                loading="lazy"
                className="object-cover object-top rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
