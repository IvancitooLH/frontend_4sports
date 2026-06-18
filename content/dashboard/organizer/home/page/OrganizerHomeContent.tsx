/* COMPONENTS */
import { SectionContainer } from "@/content/shared/ui/sectionContainer/SectionContainer";
import Image from "next/image";

/* ICONS */
import { Clock, MapPin } from "lucide-react";

/* IMAGES */
import team4 from "./images/team4.jpg";
import team5 from "./images/team5.jpg";
import team6 from "./images/team6.jpg";

/* TYPES */
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const matches: {
  team1Img: StaticImport;
  team1Name: string;
  team2Img: StaticImport;
  team2Name: string;
  hora: string;
  cancha: string;
}[] = [
  {
    team1Img: team4,
    team1Name: "Los X",
    team2Img: team5,
    team2Name: "Bellotas",
    hora: "6:00 PM",
    cancha: "La Vista",
  },
  {
    team1Img: team5,
    team1Name: "Bellotas",
    team2Img: team6,
    team2Name: "Toros Negros",
    hora: "7:00 PM",
    cancha: "La Vista",
  },
  {
    team1Img: team6,
    team1Name: "Toros Negros",
    team2Img: team4,
    team2Name: "Los X",
    hora: "8:00 PM",
    cancha: "La Vista",
  },
];

export function OrganizerHomeContent() {
  return (
    <SectionContainer>
      <div className="p-6 flex flex-col">
        <h1 className="text-5xl font-extralight font-bebas mb-2">
          Hola <span className="text-primary font-normal">Pirita</span>
        </h1>

        <div className="flex flex-col">
          <p className="text-xl font-extralight mb-4">
            <span className="text-primary">3</span> Partidos para hoy
          </p>

          <div className="flex gap-4">
            {matches.map((m, i) => (
              <div
                key={i}
                className="border border-line p-6 rounded-lg flex flex-col items-center gap-4 max-w-72 w-72"
              >
                <div className="flex gap-4 items-center">
                  <div className="flex flex-col gap-2 items-center w-24">
                    <Image
                      alt="Equipo"
                      src={m.team1Img}
                      quality={70}
                      className="w-16 h-16 min-w-16 min-h-16 rounded-full"
                    />

                    <p className="w-full truncate text-center font-bold">
                      {m.team1Name}
                    </p>
                  </div>
                  <p className="text-primary italic font-bebas text-2xl">vs</p>
                  <div className="flex flex-col gap-2 items-center w-24">
                    <Image
                      alt="Equipo"
                      src={m.team2Img}
                      quality={70}
                      className="w-16 h-16 min-w-16 min-h-16 rounded-full"
                    />

                    <p className="w-full truncate text-center font-bold">
                      {m.team2Name}
                    </p>
                  </div>
                </div>

                <div className="flex justify-center gap-2 min-w-0 w-full px-4">
                  <div className="flex gap-1 items-center min-w-fit">
                    <Clock className="size-3 min-w-3 min-h-3" />
                    <p className="text-muted text-sm">{m.hora}</p>
                  </div>

                  <div className="flex gap-1 items-center min-w-0">
                    <MapPin className="size-3 min-w-3 min-h-3" />
                    <p className="text-muted text-sm truncate">{m.cancha}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
