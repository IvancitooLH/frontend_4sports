/* HOOKS */
import { Controller, useFormContext, FieldValues } from "react-hook-form";

/* TYPES */
import { DinamicInputTextProps } from "./types/dinamicInputTextProps";

export function DinamicInputText<T extends FieldValues>({
  name,
  label,
  placeholder,
  rules,
  type = "text",
}: DinamicInputTextProps<T>) {
  const {
    control,
    formState: { errors },
  } = useFormContext<T>();

  const error = errors[name];

  return (
    <div className="flex flex-col gap-2 lg:mb-4 mb-0">
      {label && <p>{label}</p>}

      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <input
            {...field}
            id={name}
            type={type}
            placeholder={placeholder}
            className="w-full text-sm h-fit px-4 py-2 bg-transparent outline-none border border-zinc-200 rounded-xl hover:bg-[#F2F9FF] transition-all duration-300 placeholder:text-zinc-500 focus:ring-2 focus:ring-zinc-200"
          />
        )}
      />

      {error?.message && (
        <p className="text-red-500 text-sm">{String(error.message)}</p>
      )}
    </div>
  );
}
