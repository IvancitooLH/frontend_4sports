import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-10 lg:py-14">
        <section
          id="inicio"
          className="overflow-hidden rounded-4xl border border-green-200/50 bg-white p-8 shadow-[0_30px_80px_rgba(34,197,94,0.12)]"
        >
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex rounded-full bg-green-100 px-4 py-1 text-sm font-semibold uppercase tracking-[0.3em] text-green-700">
                Universo deportivo
              </span>
              <h1 className="text-4xl font-black leading-tight text-slate-950 sm:text-5xl">
                Haz del deporte tu próximo gran logro.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-600">
                4Sports une jugadores, equipos y organizadores con torneos,
                estadísticas y planes pensados para hacer simple cada partido y
                cada evento.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="#planes"
                  className="inline-flex items-center justify-center rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
                >
                  Conoce los planes
                </a>
                <a
                  href="#sobre-nosotros"
                  className="inline-flex items-center justify-center rounded-full border border-green-200 px-6 py-3 text-sm text-green-800 transition hover:border-green-300 hover:bg-green-50"
                >
                  Comenzar ahora
                </a>
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-green-100 blur-3xl"></div>
              <div className="relative flex h-72 w-72 items-center justify-center rounded-full border border-green-200 bg-white shadow-[0_30px_60px_rgba(34,197,94,0.1)]">
                <div className="h-44 w-44 rounded-full bg-linear-to-br from-white via-green-100 to-green-200 shadow-[0_0_60px_rgba(34,197,94,0.22)]"></div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="sobre-nosotros"
          className="mt-12 rounded-4xl border border-green-200/50 bg-white p-8"
        >
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div className="space-y-4">
              <div className="rounded-3xl border border-green-100 bg-green-50 p-6 shadow-[0_0_30px_rgba(34,197,94,0.08)]">
                <div className="text-3xl font-bold text-green-800">4Sports</div>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Somos una plataforma pensada para quienes viven el deporte con
                  pasión: donde los equipos se organizan, los torneos se
                  gestionan y la comunidad crece junta.
                </p>
              </div>
            </div>
            <div className="relative flex justify-center">
              <div className="absolute left-8 top-6 h-16 w-16 rounded-full border border-green-200" />
              <div className="absolute right-10 bottom-4 h-10 w-10 rounded-full border border-green-100" />
              <div className="absolute left-1/2 top-20 h-20 w-20 -translate-x-1/2 rounded-full border border-green-200" />
              <div className="h-80 w-full rounded-4xl border border-green-100 bg-green-50" />
            </div>
          </div>
        </section>

        <section
          id="planes"
          className="mt-12 rounded-4xl border border-green-200/50 bg-white p-8"
        >
          <div className="space-y-6 text-center">
            <h2 className="text-4xl font-black tracking-tight text-slate-950">
              Enfocados en el éxito
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-7 text-slate-600">
              Planes claros, soporte constante y un entorno seguro para que tu
              club, tu equipo y tu torneo crezcan con confianza.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Organización rápida",
                description:
                  "Crea eventos y gestiona equipos con solo unos clics.",
              },
              {
                title: "Estadísticas inteligentes",
                description:
                  "Sigue resultados, desempeño y progreso en tiempo real.",
              },
              {
                title: "Comunidad activa",
                description:
                  "Conecta jugadores y organizadores en una plataforma única.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-green-100 bg-slate-50 p-6 text-center transition hover:border-green-300 hover:bg-green-50"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-3xl border border-green-200 bg-green-100 text-green-700">
                  ★
                </div>
                <h3 className="text-xl font-semibold text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="roles"
          className="mt-12 rounded-4xl border border-green-200/50 bg-white p-8"
        >
          <div className="space-y-6 text-center">
            <h2 className="text-4xl font-black tracking-tight text-slate-950">
              Tu posición, tu rol, tu hogar
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-7 text-slate-600">
              En 4Sports cada usuario importa: desde el jugador que compite
              hasta el organizador que mueve todo detrás del escenario.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-green-100 bg-green-50 p-6 text-center">
              <div className="mx-auto mb-6 flex h-44 w-44 items-center justify-center rounded-full bg-green-600/10 text-4xl text-green-700">
                ⚽
              </div>
              <h3 className="text-2xl font-semibold text-slate-950">Jugador</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Encuentra partidos, únete a equipos y compite con apoyo de
                estadísticas y comunidad.
              </p>
            </div>
            <div className="rounded-3xl border border-green-100 bg-green-50 p-6 text-center">
              <div className="mx-auto mb-6 flex h-44 w-44 items-center justify-center rounded-full bg-green-600/10 text-4xl text-green-700">
                🧑‍💼
              </div>
              <h3 className="text-2xl font-semibold text-slate-950">
                Organizador
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Planea torneos, gestiona equipos y ofrece a tu comunidad una
                experiencia profesional y amigable.
              </p>
            </div>
          </div>
        </section>

        <section
          id="torneos"
          className="mt-12 rounded-4xl border border-green-200/50 bg-white p-8"
        >
          <div className="space-y-6 text-center">
            <h2 className="text-4xl font-black tracking-tight text-slate-950">
              Torneos
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-7 text-slate-600">
              Vive torneos con reglas claras, resultados automáticos y momentos
              memorables para tu equipo.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Campeonatos rápidos",
                description:
                  "Organiza brackets y grupos con flujo simple y visual.",
              },
              {
                title: "Inscripciones fáciles",
                description:
                  "Acepta equipos y jugadores con un proceso cómodo y seguro.",
              },
              {
                title: "Resultados en vivo",
                description:
                  "Presenta puntajes, clasificaciones y resúmenes al momento.",
              },
              {
                title: "Premios y rankings",
                description:
                  "Mantén motivada a tu comunidad con logros claros y justos.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-green-100 bg-slate-50 p-6 transition hover:border-green-300 hover:bg-green-50"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-green-200 bg-green-100 text-green-700">
                  ■
                </div>
                <h3 className="text-xl font-semibold text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="mi-equipo"
          className="mt-12 rounded-4xl border border-green-200/50 bg-white p-8"
        >
          <div className="space-y-6 text-center">
            <h2 className="text-4xl font-black tracking-tight text-slate-950">
              Mi equipo, mis logros
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-7 text-slate-600">
              Gestiona equipos, revisa progresos y presenta estadísticas para
              tomar decisiones acertadas en cada etapa.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="rounded-4xl border border-green-100 bg-green-50 p-6">
              <div className="aspect-square rounded-3xl bg-linear-to-br from-white via-green-100 to-green-200 p-6">
                <div className="h-full w-full rounded-3xl border border-green-100 bg-white" />
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-3xl border border-green-100 bg-green-50 p-6">
                <h3 className="text-2xl font-semibold text-slate-950">
                  Equipos
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Crea equipos sólidos, administra miembros y mantén una visión
                  clara de tus agrupaciones.
                </p>
              </div>
              <div className="rounded-3xl border border-green-100 bg-green-50 p-6">
                <h3 className="text-2xl font-semibold text-slate-950">
                  Estadísticas
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Consulta logros, rendimiento y resultados con paneles claros
                  para todos los perfiles.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
