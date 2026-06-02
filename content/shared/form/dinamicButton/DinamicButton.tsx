"use client";

/* ICONS */
import { Loader } from "lucide-react";

/* LIBS */
import { motion } from "framer-motion";

/* TYPES */
import { ButtonType } from "@/content/shared/form/dinamicButton/types/buttonType";

/* UTILS */
import {
  getNormalStyles,
  getHoverStyles,
} from "@/content/shared/form/dinamicButton/utils/getStyles";

export function DinamicButton({
  action,
  type,
  twClassName,
  disabled,
  disabledSpinner,
  label,
  icon,
  spinFromText,
}: {
  action: () => void;
  type: ButtonType;
  twClassName: string;
  disabled: boolean;
  disabledSpinner: boolean;
  label: string;
  icon?: React.ReactNode;
  spinFromText: boolean;
}) {
  return (
    <motion.button
      className={`flex items-center justify-center ${disabled ? "cursor-default" : "cursor-pointer"} ${twClassName} ${label === "" ? "gap-0" : "gap-3"}`}
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
        disabledSpinner ? (
          <>
            {spinFromText && (
              <span className="font-semibold text-transparent">E</span>
            )}

            <Loader className="size-4 animate-spin" />

            {spinFromText && (
              <span className="font-semibold text-transparent">E</span>
            )}
          </>
        ) : (
          <>
            {icon && icon}
            <span className="font-semibold">{label}</span>
          </>
        )
      ) : (
        <>
          {icon && icon}
          <span className="font-semibold">{label}</span>
        </>
      )}
    </motion.button>
  );
}
