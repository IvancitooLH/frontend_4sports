/* COMPONENTS */
import Image from "next/image";

/* ICONS */
import { Clock, MapPin } from "lucide-react";

/* TYPES */
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export function MatchCard({
  team1Img,
  team1Name,
  team2Img,
  team2Name,
  hora,
  cancha,
}: {
  team1Img: StaticImport;
  team1Name: string;
  team2Img: StaticImport;
  team2Name: string;
  hora: string;
  cancha: string;
}) {
  return (
    <div className="border border-line p-6 rounded-lg flex flex-col items-center gap-4 w-full">
      <div className="flex gap-4 items-center w-full">
        <div className="flex flex-col gap-4 items-center w-full min-w-0">
          <Image
            alt="Equipo"
            src={team1Img}
            quality={70}
            className="w-24 h-24 min-w-24 min-h-24 rounded-full"
          />

          <p className="w-full truncate text-center font-bold text-lg">{team1Name}</p>
        </div>

        <p className="text-primary italic font-bebas text-2xl">vs</p>

        <div className="flex flex-col gap-4 items-center w-full min-w-0">
          <Image
            alt="Equipo"
            src={team2Img}
            quality={70}
            className="w-24 h-24 min-w-24 min-h-24 rounded-full"
          />

          <p className="w-full truncate text-center font-bold text-lg">{team2Name}</p>
        </div>
      </div>

      <div className="flex justify-center gap-4 min-w-0 w-full px-4">
        <div className="flex gap-2 items-center min-w-fit">
          <Clock className="size-4 min-w-4 min-h-4" />
          <p className="text-muted">{hora}</p>
        </div>

        <div className="flex gap-2 items-center min-w-0">
          <MapPin className="size-4 min-w-4 min-h-4" />
          <p className="text-muted truncate">{cancha}</p>
        </div>
      </div>
    </div>
  );
}
