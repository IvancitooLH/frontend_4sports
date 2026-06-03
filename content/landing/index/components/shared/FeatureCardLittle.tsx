export default function FeatureCardLittle({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="group relative flex items-center gap-5 rounded-2xl bg-surface p-5 transition-all duration-300 hover:scale-105 hover:border-green-300">
      {/* Icono Estilizado en Rombo / Diamante según tu dibujo */}
      <div className="flex h-12 w-12 shrink-0 rotate-45 items-center justify-center rounded-xl border border-line bg-card transition-colors duration-300 group-hover:bg-card-2">
        {/* Des-rotamos el icono interno para que quede derecho */}
        <div className="-rotate-45">{icon}</div>
      </div>

      {/* Contenido de texto compacto al lado derecho */}
      <div className="space-y-1">
        <h3 className="text-base font-bold text-ink transition-colors duration-200 group-hover:text-primary">
          {title}
        </h3>
        <p className="text-xs text-muted">{description}</p>
      </div>
    </div>
  );
}
