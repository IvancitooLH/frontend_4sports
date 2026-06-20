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
    <div className="w-48 h-48 min-w-48 min-h-48 rounded-full border border-line relative m-auto mb-6">
      <Image
        alt="Organización"
        src={organization1}
        quality={70}
        fill
        className="rounded-full object-cover object-center"
      />

      <div className="absolute bottom-1 right-1 w-14 h-14 rounded-full bg-primary text-primary-text flex items-center justify-center border-6 border-background">
        <DinamicButton
          action={() => {}}
          type="filled"
          icon={<SquarePen className="size-5 min-w-5 min-h-5" />}
          twClassName="w-full h-full p-0 rounded-full"
        />
      </div>
    </div>
  );
}
