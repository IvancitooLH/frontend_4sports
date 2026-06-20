"use client";

/* COMPONENTS */
import { DinamicButton } from "@/content/shared/form/dinamicButton/DinamicButton";
import Image from "next/image";

/* ICONS */
import { SquarePen, Trash2, UsersRound } from "lucide-react";

/* LIBS */
import { motion } from "framer-motion";

/* NAVIGATION */
import { useRouter } from "next/navigation";

/* TYPES */
import { OrganizationCardType } from "./types/OrganizationCardType";

export function OrganizationCard({
  isSelected,
  image,
  name,
  description,
  slug,
}: OrganizationCardType) {
  const router = useRouter();

  return (
    <motion.div
      onClick={
        !isSelected
          ? () => {
              alert("Seleccionada");
            }
          : undefined
      }
      className="flex relative rounded-xl border justify-between w-full h-fit items-center p-8 gap-4"
      style={
        isSelected
          ? {
              backgroundColor: "var(--primary-background)",
              borderColor: "var(--primary)",
            }
          : {
              backgroundColor: "var(--background)",
              borderColor: "var(--line)",
              cursor: "pointer",
            }
      }
      whileHover={
        isSelected
          ? {}
          : {
              scale: 1.03,
              backgroundColor: "var(--surface)",
              borderColor: "var(--primary)",
            }
      }
      whileTap={isSelected ? {} : { scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        scale: { duration: 0.3 },
        backgroundColor: { duration: 0.3 },
        borderColor: { duration: 0.3 },
      }}
    >
      {isSelected && (
        <div className="w-fit h-fit py-1 px-4 rounded-xl text-sm absolute top-0 right-4 -translate-y-1/2 flex items-center bg-primary text-primary-text">
          <p className="font-bold">Seleccionada</p>
        </div>
      )}

      <div className="flex gap-6 items-center min-w-0">
        <Image
          alt="Organización"
          src={image}
          quality={70}
          className="w-12 h-12 min-w-12 min-h-12 rounded-full object-cover object-center"
        />

        <div className="min-w-0">
          <p className="font-bold text-lg text-left">{name}</p>
          <p className="text-sm truncate">{description}</p>
        </div>
      </div>

      <div className="flex gap-2">
        <DinamicButton
          action={(e) => {
            e.stopPropagation();
            router.push(`/organizer/organizations/${slug}`);
          }}
          type="unfilled"
          twClassName="w-fit p-2 rounded-full border border-line hover:border-primary"
          icon={<SquarePen className="size-4 min-h-4 min-w-4" />}
        />
        <DinamicButton
          action={(e) => {
            e.stopPropagation();
            alert("Miembros");
          }}
          type="unfilled"
          twClassName="w-fit p-2 rounded-full border border-line hover:border-primary"
          icon={<UsersRound className="size-4 min-h-4 min-w-4" />}
        />
        <DinamicButton
          action={(e) => {
            e.stopPropagation();
            alert("Eliminar");
          }}
          type="destructive"
          twClassName="w-fit p-2 rounded-full border border-line hover:border-primary hover:bg-secondary"
          icon={<Trash2 className="size-4 min-h-4 min-w-4" />}
        />
      </div>
    </motion.div>
  );
}
