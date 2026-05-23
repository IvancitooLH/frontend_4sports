"use client";

import { useState } from "react";
import Link from "next/link";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { ThemeToggle } from "@/components/theme/ThemeToogle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Inicio", href: "#inicio" },
    { label: "Sobre Nosotros", href: "#sobre-nosotros" },
    { label: "Planes", href: "#planes" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-green-200/40 bg-background/80 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-slate-950 md:grid md:grid-cols-3">
        {/* Columna Izquierda: Logo */}
        <div className="flex items-center justify-start">
          <Link href="/" className="group flex items-center gap-2">
            <div className="rounded-2xl border border-green-300/40 bg-gradient-to-tr from-green-600 to-emerald-500 px-4 py-2 text-lg font-bold text-white shadow-md shadow-green-600/20 transition group-hover:scale-105">
              4Sports
            </div>
          </Link>
        </div>

        {/* Columna Central: Navegación de Escritorio */}
        <nav className="hidden items-center justify-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-foreground transition-all hover:bg-green-50 hover:text-green-700"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Columna Derecha: Botones de Escritorio + Botón Hamburguesa Móvil */}
        <div className="flex items-center justify-end gap-3">
          {/* Botones (Ocultos en móvil, visibles en md+) */}
          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="#ingresar"
              className="rounded-full border border-green-600/20 bg-white px-5 py-2 text-sm font-medium text-green-700 transition hover:bg-green-50 hover:shadow-sm"
            >
              Ingresar
            </Link>
            <Link
              href="#registrarse"
              className="rounded-full bg-gradient-to-r from-green-600 to-emerald-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:from-green-700 hover:to-emerald-700 hover:shadow-md"
            >
              Registrarse
            </Link>
            <ThemeToggle />
          </div>

          {/* Botón de Menú Móvil */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-xl p-2 text-slate-700 hover:bg-slate-100 md:hidden focus:outline-none focus:ring-2 focus:ring-green-500/40"
            aria-label="Toggle Menu"
          >
            {isOpen ? <HiX size={26} /> : <HiMenuAlt3 size={26} />}
          </button>
        </div>
      </div>

      {/* Menú Desplegable Móvil (Overlay Lateral) */}
      <div
        className={`fixed inset-0 top-[73px] z-40 h-[calc(100vh-73px)] w-full bg-white/98 p-6 transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <div className="flex h-full flex-col justify-between pb-12">
          {/* Enlaces Móviles */}
          <nav className="flex flex-col gap-4">
            {navLinks.map((link, i) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block border-b border-slate-100 py-3 text-lg font-medium text-slate-800 transition active:text-green-600"
                style={{ transitionDelay: `${i * 50}ms` }} // Efecto de cascada sutil
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Botones de Acción Móviles */}
          <div className="flex flex-col gap-3">
            <Link
              href="#ingresar"
              onClick={() => setIsOpen(false)}
              className="w-full rounded-xl border border-green-600/30 py-3.5 text-center text-sm font-medium text-green-700 transition active:bg-green-50"
            >
              Ingresar
            </Link>
            <Link
              href="#registrarse"
              onClick={() => setIsOpen(false)}
              className="w-full rounded-xl bg-red-600 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-green-600/10 transition active:bg-green-700"
            >
              Registrarse
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
