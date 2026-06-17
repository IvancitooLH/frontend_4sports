/* COMPONENTS */
import { DinamicButton } from "@/content/shared/form/dinamicButton/DinamicButton";
import Image from "next/image";

/* ICONS */
import { SquarePen, Trash2, UsersRound } from "lucide-react";

/* TYPES */
import { OrganizationCardType } from "./types/OrganizationCardType";

export function OrganizationCard({
  isSelected,
  image,
  name,
  description,
}: OrganizationCardType) {
  return (
    <div
      className={`flex flex-col gap-4 relative p-6 rounded-xl border border-line justify-between ${isSelected ? "bg-primary-background" : "bg-transparent"}`}
    >
      <div className="flex justify-between">
        <div className="flex gap-4 items-center">
          <Image
            alt="Equipo"
            src={image}
            quality={70}
            className="w-12 h-12 min-h-12 rounded-full object-cover object-center"
          />
          <p>{name}</p>
        </div>

        <DinamicButton
          action={() => {}}
          twClassName="w-fit h-fit py-1 px-4 rounded-xl text-sm"
          disabled={false}
          disabledSpinner={false}
          type={isSelected ? "filled" : "ghost"}
          label={isSelected ? "Seleccionada" : "Seleccionar"}
          spinFromText
        />
      </div>

      <p className="text-sm">{description}</p>

      <div className="flex gap-4">
        <DinamicButton
          action={() => {}}
          twClassName="w-fit h-fit py-1 px-4 rounded-xl text-sm"
          disabled={false}
          disabledSpinner={false}
          type={"unfilled"}
          label="Editar"
          spinFromText
          icon={<SquarePen className="size-4 min-h-4 min-w-4" />}
        />
        <DinamicButton
          action={() => {}}
          twClassName="w-fit h-fit py-1 px-4 rounded-xl text-sm"
          disabled={false}
          disabledSpinner={false}
          type={"unfilled"}
          label="Ver miembros"
          spinFromText
          icon={<UsersRound className="size-4 min-h-4 min-w-4" />}
        />
        <DinamicButton
          action={() => {}}
          twClassName="w-fit h-fit py-1 px-4 rounded-xl text-sm"
          disabled={false}
          disabledSpinner={false}
          type={"destructive"}
          label="Eliminar"
          spinFromText
          icon={<Trash2 className="size-4 min-h-4 min-w-4" />}
        />
      </div>
    </div>
  );
}
