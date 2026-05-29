/* TYPES */
import { FieldValues, Path, RegisterOptions } from "react-hook-form";

export type DinamicInputFileProps<T extends FieldValues> = {
  label?: string;
  variant?: "avatar" | "default";
  accept?: string;
  rules?: RegisterOptions<T, Path<T>>;
  name: Path<T>;
  placeholder?: string;
};
