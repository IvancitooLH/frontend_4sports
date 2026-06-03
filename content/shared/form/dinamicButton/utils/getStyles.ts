/* TYPES */
import { ButtonType } from "@/content/shared/form/dinamicButton/types/buttonType";

export function getNormalStyles(type: ButtonType) {
  switch (type) {
    case "filled":
      return {
        backgroundColor: "var(--primary)",
        color: "var(--primary-text)",
        border: "2px solid transparent",
      };

    case "ghost":
      return {
        backgroundColor: "var(--background)",
        color: "var(--primary)",
        border: "2px solid var(--primary)",
      };

    case "destructive":
      return {
        backgroundColor: "var(--secondary)",
        color: "var(--secondary-text)",
        border: "2px solid transparent",
      };

    case "unfilled":
      return {
        backgroundColor: "var(--surface)",
        color: "var(--ink)",
        border: "2px solid transparent",
      };

    case "disabled":
      return {
        backgroundColor: "var(--disabled)",
        color: "var(--disabled-text)",
        border: "2px solid var(--disabled-border)",
      };

    case "success":
      return {
        backgroundColor: "var(--success)",
        color: "#ffffff",
        border: "2px solid transparent",
      };
  }
}

export function getHoverStyles(type: ButtonType) {
  switch (type) {
    case "filled":
      return {
        backgroundColor: "var(--primary-hover)",
        color: "var(--primary-text)",
        border: "2px solid transparent",
      };

    case "ghost":
      return {
        backgroundColor: "var(--surface)",
        color: "var(--primary)",
        border: "2px solid var(--primary)",
      };

    case "destructive":
      return {
        backgroundColor: "var(--secondary-hover)",
        color: "var(--secondary-text)",
        border: "2px solid transparent",
      };

    case "unfilled":
      return {
        backgroundColor: "var(--surface-hover)",
        color: "var(--ink)",
        border: "2px solid transparent",
      };

    case "disabled":
      return {
        backgroundColor: "var(--disabled)",
        color: "var(--disabled-text)",
        border: "2px solid var(--disabled-border)",
      };

    case "success":
      return {
        backgroundColor: "var(--success-hover)",
        color: "#ffffff",
        border: "2px solid transparent",
      };
  }
}
