/* HOOKS */
import { Controller, FieldValues, useFormContext } from "react-hook-form";
import { useState, useRef, useEffect } from "react";

/* ICONS */
import { Check, ChevronDown } from "lucide-react";

/* TYPES */
import { DinamicComboboxProps } from "./types/dinamicComboboxProps";
import { DinamicComboboxInternalProps } from "./types/dinamicComboboxInternalProps";

export function DinamicCombobox<T extends FieldValues>({
  name,
  items,
  label,
  placeholder,
  rules,
}: DinamicComboboxProps<T>) {
  const {
    control,
    formState: { errors },
  } = useFormContext<T>();

  const error = errors[name];

  return (
    <div className="flex flex-col gap-2 lg:mb-4 mb-2">
      {label && <p>{label}</p>}

      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <ComboboxInternal
            items={items}
            value={field.value}
            onChange={field.onChange}
            placeholder={placeholder}
          />
        )}
      />

      {error?.message && (
        <p className="text-danger text-sm">{String(error.message)}</p>
      )}
    </div>
  );
}

function ComboboxInternal({
  items,
  value,
  onChange,
  placeholder,
}: DinamicComboboxInternalProps) {
  const [open, setOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);

  const ref = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const selectedIndex = items.findIndex((item) => item === value);

  const selectItem = (item: string) => {
    onChange(item);
    setOpen(false);
  };

  const toggleOpen = () => {
    const next = !open;
    setOpen(next);

    if (next) {
      setHighlightedIndex(selectedIndex >= 0 ? selectedIndex : 0);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!open) {
      if (e.key === "ArrowDown" || e.key === "Enter") {
        setOpen(true);
        e.preventDefault();
      }
      return;
    }

    if (e.key === "ArrowDown") {
      setHighlightedIndex((prev) => (prev + 1) % items.length);
      e.preventDefault();
    }

    if (e.key === "ArrowUp") {
      setHighlightedIndex((prev) => (prev <= 0 ? items.length - 1 : prev - 1));
      e.preventDefault();
    }

    if (e.key === "Enter") {
      if (highlightedIndex >= 0) {
        selectItem(items[highlightedIndex]);
      }
      e.preventDefault();
    }

    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  // Cerrar al hacer click fuera
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Hacer scroll automático al ingresar
  useEffect(() => {
    if (open && selectedIndex >= 0 && listRef.current) {
      const element = listRef.current.children[selectedIndex] as HTMLElement;
      element?.scrollIntoView({ block: "nearest" });
    }
  }, [open, selectedIndex]);

  // Mover con las flechas
  useEffect(() => {
    if (!listRef.current || highlightedIndex < 0) return;

    const element = listRef.current.children[highlightedIndex] as HTMLElement;

    element?.scrollIntoView({
      block: "nearest",
      behavior: "smooth",
    });
  }, [highlightedIndex]);

  return (
    <div ref={ref} className="relative w-full">
      <div
        tabIndex={0}
        onClick={toggleOpen}
        onKeyDown={handleKeyDown}
        className="w-full py-2 pl-4 pr-1 border border-line rounded-xl cursor-pointer flex items-center justify-between outline-none focus:ring-2 focus:ring-lucide text-sm transition-all duration-300"
      >
        <span className={`truncate ${value ? "text-ink" : "text-faint"}`}>
          {value || placeholder || "Seleccionar"}
        </span>

        <div className="px-1 rounded-md hover:bg-surface">
          <ChevronDown className="size-4 text-faint" />
        </div>
      </div>

      {open && (
        <div
          ref={listRef}
          className="absolute top-full left-0 p-2 mt-1 w-full bg-surface border border-line rounded-lg shadow-lg max-h-30 overflow-y-auto scrollbar-none z-10"
        >
          {items.map((item, index) => {
            const isSelected = item === value;
            const isHighlighted = index === highlightedIndex;

            return (
              <div
                key={item}
                onClick={() => selectItem(item)}
                onMouseEnter={() => setHighlightedIndex(index)}
                className={`px-4 py-2 flex rounded-lg items-center truncate justify-between cursor-pointer text-sm transition-colors
                  ${isHighlighted ? "bg-lucide" : ""}
                  ${isSelected ? "" : ""}
                `}
              >
                {item}
                {isSelected && <Check className="size-3" />}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
