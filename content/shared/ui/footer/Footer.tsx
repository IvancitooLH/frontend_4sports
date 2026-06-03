"use client";

import { FacebookColorless } from "./icons/facebook/FacebookColorless";
import { InstagramColorless } from "./icons/instagram/InstagramColorless";
import { TwitterColorless } from "./icons/twitter/TwitterColorless";
import { FourSportsIcon } from "../../icons/fourSports/FourSportsIcon";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function Footer() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const changeTheme = () => {
      setMounted(true);
    };

    changeTheme();
  }, []);

  if (!mounted) return null;

  return (
    <footer className="bg-surface min-h-[50dvh] w-full flex flex-col">
      <div className="flex justify-between py-12 px-24 items-center flex-1">
        <div className="flex flex-col gap-6 w-fit">
          <div className="w-40">
            <FourSportsIcon />
          </div>

          <p className="text-body text-sm max-w-1/2">
            En 4Sports conectamos jugadores, organizadores y equipos para
            construir experiencias competitivas y comunitarias con seguridad,
            estilo y estadísticas en tiempo real.
          </p>
        </div>

        <div className="flex flex-col gap-4 items-center">
          <h2 className="font-bebas text-primary text-4xl font-bold">
            ¡Síguenos!
          </h2>

          <div className="flex gap-6">
            <div className="w-6 h-6 min-w-6 min-h-6 fill-muted transition-colors duration-300 hover:fill-primary cursor-pointer">
              <FacebookColorless />
            </div>
            <div className="w-6 h-6 min-w-6 min-h-6 fill-muted transition-colors duration-300 hover:fill-primary cursor-pointer">
              <InstagramColorless />
            </div>
            <div className="w-6 h-6 min-w-6 min-h-6 fill-muted transition-colors duration-300 hover:fill-primary cursor-pointer">
              <TwitterColorless />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-line py-8 text-center text-xs font-medium text-muted">
        <p>© 2026 4Sports. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
