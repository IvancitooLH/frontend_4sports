"use client";

/* HOOKS */
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

/* ICONS */
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
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
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full border border-line fixed left-6 bottom-6 bg-surface text-body cursor-pointer z-10"
    >
      {resolvedTheme === "dark" ? (
        <Sun className="size-4" />
      ) : (
        <Moon className="size-4" />
      )}
    </button>
  );
}
