import { ThemeToggle } from "@/components/theme/ThemeToogle";

export default function Home() {
  return (
    <div className="max-h-dvh h-dvh w-full">
      <div className="w-full h-full p-4 flex items-center justify-center flex-col gap-2">
        <h1 className="text-7xl font-bold text-primary italic">
          Paleta de colores
        </h1>
        <p className="text-muted">
          Cambia el tema con el botón en la esquina inferior izquierda
        </p>
      </div>

      <ThemeToggle />
    </div>
  );
}
