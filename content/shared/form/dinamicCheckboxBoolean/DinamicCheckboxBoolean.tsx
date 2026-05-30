"use client"

/* COMPONENTS */
import { Checkbox } from "@/components/ui/checkbox";

/* HOOKS */
import { Controller, FieldValues, useFormContext } from "react-hook-form";

/* TYPES */
import { DinamicCheckboxBooleanProps } from "./types/dinamicCheckboxBooleanProps";

export function DinamicCheckboxBoolean<T extends FieldValues>({
  name,
  label,
  description,
  rules,
}: DinamicCheckboxBooleanProps<T>) {
  const {
    control,
    formState: { errors },
  } = useFormContext<T>();

  const error = errors[name];

  return (
    <div className="flex flex-col gap-2 lg:mb-4 mb-0 justify-center">
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field: { value, onChange } }) => (
          <label className="flex items-center gap-3 cursor-pointer">
            <Checkbox
              checked={value}
              onCheckedChange={(checked) => onChange(Boolean(checked))}
            />

            <div className="flex flex-col justify-center items-center select-none">
              {label && <span className="text-sm">{label}</span>}

              {description && (
                <span className="text-sm text-muted">{description}</span>
              )}
            </div>
          </label>
        )}
      />

      {error?.message && (
        <p className="text-danger text-sm">{String(error.message)}</p>
      )}
    </div>
  );
}
