"use client";

/* COMPONENTS */
import Image from "next/image";

/* HOOKS */
import { ChangeEvent, useState } from "react";
import { Controller, FieldValues, useFormContext } from "react-hook-form";

/* ICONS */
import { UserRound, Image as Imagen } from "lucide-react";

/* TYPES */
import { DinamicInputFileProps } from "@/content/shared/form/dinamicInputFile/types/dinamicInputFileProps";

export function DinamicInputFile<T extends FieldValues>({
  label,
  variant = "default",
  accept = "image/*",
  name,
  rules,
  placeholder,
}: DinamicInputFileProps<T>) {
  const {
    control,
    formState: { errors },
  } = useFormContext<T>();

  const error = errors[name];

  const [preview, setPreview] = useState<string | null>(null);

  if (variant === "avatar") {
    return (
      <div className="flex flex-col items-center gap-2 mb-6">
        {label && <label className="text-sm text-faint">{label}</label>}

        <Controller
          name={name}
          control={control}
          rules={rules}
          render={({ field: { onChange, ref } }) => (
            <label className="relative group cursor-pointer">
              <input
                ref={ref}
                id={name}
                type="file"
                accept={accept}
                className="hidden"
                placeholder={placeholder}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  const file = e.target.files?.[0];

                  onChange(file);

                  if (file) {
                    const url = URL.createObjectURL(file);
                    setPreview(url);
                  }
                }}
              />

              <div className="w-52 h-52 rounded-full overflow-hidden border border-line bg-background hover:bg-surface flex items-center justify-center relative transition-all duration-300 group-hover:scale-[1.02]">
                {preview ? (
                  <Image
                    src={preview}
                    alt="Preview"
                    fill
                    className="object-cover"
                  />
                ) : (
                  <UserRound className="text-lucide size-24" />
                )}
              </div>

              <div className="absolute bottom-1 right-1 w-12 h-12 rounded-full bg-primary text-primary-text flex items-center justify-center border-4 border-background">
                <Imagen className="size-5" />
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

  return (
    <div className="flex flex-col gap-2 w-full">
      {label && <label className="text-sm text-faint">{label}</label>}

      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field: { onChange, ref } }) => (
          <input
            ref={ref}
            id={name}
            type="file"
            accept={accept}
            placeholder={placeholder}
            className="w-full text-sm h-fit px-4 py-2 bg-background outline-none border border-line rounded-xl hover:bg-surface transition-all duration-300 placeholder:text-faint focus:ring-2 focus:ring-lucide"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              const file = e.target.files?.[0];

              onChange(file);

              if (file) {
                const url = URL.createObjectURL(file);
                setPreview(url);
              }
            }}
          />
        )}
      />

      {error?.message && (
        <p className="text-danger text-sm">{String(error.message)}</p>
      )}
    </div>
  );
}
