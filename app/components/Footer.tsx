export default function Footer() {
  return (
    <footer className="border-t border-green-200/60 bg-white text-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div className="space-y-3">
            <div className="text-2xl font-bold text-green-800">4Sports</div>
            <p className="max-w-xl text-sm leading-6 text-slate-600">
              En 4Sports conectamos jugadores, organizadores y equipos para
              construir experiencias competitivas y comunitarias con seguridad y
              estilo.
            </p>
          </div>
          <div className="space-y-2 text-right">
            <div className="text-sm font-semibold text-green-800">
              ¡Síguenos!
            </div>
            <div className="flex justify-end gap-3">
              <span className="h-9 w-9 rounded-full border border-green-200/80 bg-green-50"></span>
              <span className="h-9 w-9 rounded-full border border-green-200/80 bg-green-50"></span>
              <span className="h-9 w-9 rounded-full border border-green-200/80 bg-green-50"></span>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-green-100/90 pt-6 text-center text-xs text-slate-500">
          © 2026 Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
