"use client";

/* HOOKS */
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

/* ICONS */
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const changeTheme = () => {
      setMounted(true);
    };

    changeTheme();
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="px-4 py-2 rounded-lg border bg-red-300 absolute left-0 bottom-0"
    >
      {theme === "dark" ? <Sun /> : <Moon />}
    </button>
  );
}
