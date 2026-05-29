import { FieldValues, Path, RegisterOptions } from "react-hook-form";

export type DinamicComboboxProps<T extends FieldValues> = {
  name: Path<T>;
  items: string[];
  label?: string;
  placeholder?: string;
  rules?: RegisterOptions<T, Path<T>>;
};
