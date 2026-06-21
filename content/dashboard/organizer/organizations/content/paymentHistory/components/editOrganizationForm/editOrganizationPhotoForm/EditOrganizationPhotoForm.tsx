"use client";

/* COMPONENTS */
import Image from "next/image";
import { DinamicButton } from "@/content/shared/form/dinamicButton/DinamicButton";

/* ICONS */
import { SquarePen } from "lucide-react";

/* IMAGES */
import organization1 from "./images/organization1.png";

export function EditOrganizationPhotoForm() {
  return (
    <div className="w-48 h-48 min-w-48 min-h-48 rounded-full border border-line relative">
      <Image
        alt="Organización"
        src={organization1}
        quality={70}
        fill
        className="rounded-full object-cover object-center"
      />

      <div className="absolute bottom-0 right-0 w-10 h-10 rounded-full bg-primary text-primary-text flex items-center justify-center border-4 border-background">
        <DinamicButton
          action={() => {}}
          type="filled"
          icon={<SquarePen className="size-4 min-w-4 min-h-4" />}
          twClassName="w-full h-full p-0 rounded-full"
        />
      </div>
    </div>
  );
}
