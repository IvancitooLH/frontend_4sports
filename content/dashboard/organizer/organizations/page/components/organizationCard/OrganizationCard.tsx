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
      className={`flex relative rounded-xl border border-line justify-between h-52 ${isSelected ? "bg-primary-background" : "bg-transparent"}`}
    >
      <Image
        alt="Equipo"
        src={image}
        quality={70}
        className="w-52 min-w-52 h-full rounded-l-xl object-cover object-center"
      />

      <div className="p-6 flex flex-col gap-4 w-full min-w-0">
        <div className="flex justify-between items-center">
          <p className="font-bold text-lg">{name}</p>

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

        <p className="text-sm line-clamp-2 h-fit min-h-fit">{description}</p>

        <div className="flex gap-2 h-full justify-end items-end">
          <DinamicButton
            action={() => {}}
            twClassName="w-fit h-fit p-2 rounded-full text-sm"
            disabled={false}
            disabledSpinner={false}
            type={"unfilled"}
            label=""
            spinFromText
            icon={<SquarePen className="size-4 min-h-4 min-w-4" />}
          />
          <DinamicButton
            action={() => {}}
            twClassName="w-fit h-fit p-2 rounded-full text-sm"
            disabled={false}
            disabledSpinner={false}
            type={"unfilled"}
            label=""
            spinFromText
            icon={<UsersRound className="size-4 min-h-4 min-w-4" />}
          />
          <DinamicButton
            action={() => {}}
            twClassName="w-fit h-fit p-2 rounded-full text-sm"
            disabled={false}
            disabledSpinner={false}
            type={"destructive"}
            label=""
            spinFromText
            icon={<Trash2 className="size-4 min-h-4 min-w-4" />}
          />
        </div>
      </div>
    </div>
  );
}
