"use client";

/* HOOKS */
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

/* ICONS */
import { Sun, Moon } from "lucide-react";

export function ThemeToggleButtons() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const changeTheme = () => {
      setMounted(true);
    };

    changeTheme();
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`flex w-full h-fit p-4 transition-all duration-300 flex-col`}
    >
      <button
        onClick={resolvedTheme === "dark" ? () => setTheme("light") : () => {}}
        className={`p-2 border-x border-t border-line text-body cursor-pointer w-full flex justify-center rounded-t-xl ${resolvedTheme === "light" && "bg-surface text-primary"}`}
      >
        <Sun className="size-4" />
      </button>
      <button
        onClick={resolvedTheme === "light" ? () => setTheme("dark") : () => {}}
        className={`p-2 border border-line text-body cursor-pointer w-full flex justify-center rounded-b-xl ${resolvedTheme === "dark" && "bg-surface text-primary"}`}
      >
        <Moon className="size-4" />
      </button>
    </div>
  );
}
