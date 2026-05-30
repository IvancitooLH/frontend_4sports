/* TYPES */
import { FieldValues, Path, RegisterOptions } from "react-hook-form";
import { ComboboxItem } from '@/content/shared/form/dinamicComboBox/types/comboboxItem'

export type DinamicComboboxProps<T extends FieldValues> = {
  name: Path<T>;
  items: ComboboxItem[];
  label?: string;
  placeholder?: string;
  rules?: RegisterOptions<T, Path<T>>;
};
