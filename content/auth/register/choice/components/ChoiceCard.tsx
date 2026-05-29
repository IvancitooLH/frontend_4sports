"use client";

/* ICONS */
import { Check } from "lucide-react";

/* LIBS */
import { motion } from "framer-motion";

export function ChoiceCard({
  icon,
  title,
  dots,
  action
}: {
  icon: React.ReactNode;
  title: string;
  dots: string[];
  action: () => void
}) {
  return (
    <motion.button
      className="w-full h-full rounded-2xl flex flex-col gap-6 items-center p-8 border-2"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--ink)",
        borderColor: "var(--lucide)"
      }}
      whileHover={{
        backgroundColor: "var(--primary-background)",
        color: "var(--primary)",
        cursor: "pointer",
        scale: 1.02,
        borderColor: "var(--primary)"
      }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "tween",
        stiffness: 300,
        damping: 20,
        backgroundColor: { duration: 0.3 },
        color: { duration: 0.3 },
        borderColor: { duration: 0.3 },
      }}
      onClick={action}
    >
      {icon}

      <div className="flex gap-4 flex-col items-center">
        <p className="text-2xl font-semibold">{title}</p>

        <div className="flex flex-col gap-1">
          {dots.map((dot, index) => (
            <div key={index} className="flex gap-3 items-center">
              <Check className="size-4" />
              <p className="text-start">{dot}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.button>
  );
}
