/* ICONS */
import { Loader } from "lucide-react";

/* TYPES */
import { ButtonType } from "@/content/shared/form/dinamicButton/types/buttonType";

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
  const getBackground = (type: ButtonType) => {
    switch (type) {
      case "filled":
        return "bg-primary text-primary-text border-transparent hover:bg-primary-hover";

      case "ghost":
        return "bg-background text-primary border-primary hover:bg-surface";

      case "unfilled":
        return "bg-surface text-ink border-transparent hover:bg-surface-hover";

      case "destructive":
        return "bg-secondary text-secondary-text border-transparent hover:bg-secondary-hover";

      case "success":
        return "bg-success text-white border-transparent hover:bg-success-hover";
    }
  };

  return (
    <button
      className={`flex items-center justify-center border-2 transition-all duration-300 ${disabled ? "cursor-default" : "cursor-pointer"} ${twClassName} ${label === "" ? "gap-0" : "gap-2"} ${getBackground(type)}`}
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
    </button>
  );
}
