"use client";

/* COMPONENTS */
import { DinamicButton } from "@/content/shared/form/dinamicButton/DinamicButton";
import Image from "next/image";

/* ICONS */
import { SquarePen } from "lucide-react";

/* TYPES */
import { TournamentCardType } from "./types/TournamentCardType";

export function TournamentCard({
  image,
  name,
  description,
}: TournamentCardType) {
  return (
    <div
      className={`flex flex-col gap-4 relative p-6 rounded-xl border border-line justify-between`}
    >
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 items-center">
          <Image
            alt="Equipo"
            src={image}
            quality={70}
            className="w-12 h-12 min-h-12 rounded-full object-cover object-center"
          />
          <p>{name}</p>
        </div>

        <p className="text-sm">{description}</p>
      </div>

      <div className="flex gap-4">
        <DinamicButton
          action={() => {}}
          twClassName="w-fit h-fit py-1 px-4 rounded-xl text-sm"
          disabled={false}
          disabledSpinner={false}
          type={"unfilled"}
          label="Gestionar"
          spinFromText
          icon={<SquarePen className="size-4 min-h-4 min-w-4" />}
        />
      </div>
    </div>
  );
}
