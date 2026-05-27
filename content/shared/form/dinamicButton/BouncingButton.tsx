"use client";

import { motion } from "framer-motion";

export function DinamicButton({
  children,
  action,
  backgroundColor,
  backgroundColorHover,
  textColor,
  textColorHover,
  twClassName,
  disabled,
}: {
  children: React.ReactNode;
  action: () => void;
  backgroundColor: string;
  backgroundColorHover: string;
  textColor: string;
  textColorHover: string;
  twClassName: string;
  disabled: boolean;
}) {
  return (
    <motion.button
      className={`flex items-center justify-center gap-2 ${ disabled ? "cursor-default" : "cursor-pointer" } ${twClassName}`}
      animate={
        disabled
          ? {
              backgroundColor: "#e5e5e5",
              color: "#a3a3a3",
            }
          : {
              backgroundColor: backgroundColor,
              color: textColor,
            }
      }
      whileHover={
        disabled
          ? {}
          : {
              backgroundColor: backgroundColorHover,
              color: textColorHover,
            }
      }
      whileTap={disabled ? {} : { scale: 0.9 }}
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
      {children}
    </motion.button>
  );
}
