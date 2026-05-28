"use client";

/* ICONS */
import { Loader } from "lucide-react";

/* LIBS */
import { motion } from "framer-motion";

/* TYPES */
import { ButtonType } from "@/content/shared/form/dinamicButton/types/buttonType";

/* UTILS */
import { getNormalStyles, getHoverStyles } from "@/content/shared/form/dinamicButton/utils/getStyles";

export function DinamicButton({
  action,
  type,
  twClassName,
  disabled,
  label,
  icon,
}: {
  action: () => void;
  type: ButtonType;
  twClassName: string;
  disabled: boolean;
  label: string;
  icon?: React.ReactNode;
}) {
  return (
    <motion.button
      className={`flex items-center justify-center gap-3 ${disabled ? "cursor-default" : "cursor-pointer"} ${twClassName}`}
      animate={getNormalStyles(type)}
      whileHover={getHoverStyles(type)}
      whileTap={disabled ? {} : { scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        backgroundColor: { duration: 0.3 },
        color: { duration: 0.3 },
      }}
      onClick={disabled ? () => {} : action}
      disabled={disabled}
    >
      {disabled ? (
        <>
          <span className="font-semibold text-transparent">E</span>
          <Loader className="size-4 animate-spin" />
          <span className="font-semibold text-transparent">E</span>
        </>
      ) : (
        <>
          {icon && icon}
          <span className="font-medium">{label}</span>
        </>
      )}
    </motion.button>
  );
}
