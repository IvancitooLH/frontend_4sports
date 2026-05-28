"use client";

/* ICONS */
import { FourSports } from "@/content/shared/icons/fourSports/FourSports";

/* HOOKS */
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function FourSportsIcon() {
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
    <FourSports
      primaryColor={resolvedTheme === "dark" ? "#d4f233" : "#5a8a00"}
      secondaryColor={resolvedTheme === "dark" ? "#ff4b1f" : "#c93a12"}
    />
  );
}
