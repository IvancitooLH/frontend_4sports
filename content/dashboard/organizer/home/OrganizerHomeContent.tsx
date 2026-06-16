/* COMPONENTS */
import { SectionContainer } from "@/content/shared/ui/sectionContainer/SectionContainer";
import Image from "next/image";
import team1 from "./images/team1.jpg";
import team2 from "./images/team2.jpg";
import team3 from "./images/team3.webp";
import team4 from "./images/team4.jpg";
import team5 from "./images/team5.jpg";
import team6 from "./images/team6.jpg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Clock, MapPin } from "lucide-react";

const training: {
  image: StaticImport;
  name: string;
  hora: string;
  cancha: string;
}[] = [
  {
    image: team1,
    name: "Los Grandes",
    hora: "12:00 PM",
    cancha: "La vista",
  },
  {
    image: team2,
    name: "Super Team",
    hora: "1:00 PM",
    cancha: "La vista",
  },
  {
    image: team3,
    name: "Osos",
    hora: "2:00 PM",
    cancha: "La vista",
  },
];

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
      <div className="p-6 flex flex-col gap-6">
        <h1 className="text-5xl font-extralight">
          Hola <span className="text-primary font-normal">Pirita</span>
        </h1>
        <p>Para el día de hoy</p>

        <div className="flex flex-col gap-6">
          <p className="text-xl">
            Entrenamientos:{" "}
            <span className="text-primary font-semibold">5</span>
          </p>

          <div className="flex gap-4">
            {training.map((t, i) => (
              <div
                key={i}
                className="flex flex-col rounded-lg bg-surface items-center max-w-72 w-72"
              >
                <Image
                  alt="Equipo"
                  src={t.image}
                  quality={70}
                  className="w-full h-24 min-h-24 rounded-t-lg object-cover object-center"
                />
                <div className="w-full flex flex-col gap-2 p-4">
                  <p className="font-bold text-center text-lg">{t.name}</p>
                  <div className="flex justify-center gap-4">
                    <div className="flex gap-2 items-center">
                      <Clock className="size-4 min-w-4 min-h-4" />
                      <p className="text-muted">{t.hora}</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <MapPin className="size-4 min-w-4 min-h-4" />
                      <p className="text-muted">{t.cancha}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <p className="text-xl">
            Partidos: <span className="text-primary font-semibold">3</span>
          </p>

          <div className="flex gap-4">
            {matches.map((m, i) => (
              <div
                key={i}
                className="bg-surface p-6 rounded-lg flex flex-col items-center gap-2 max-w-72 w-72"
              >
                <div className="flex gap-4 items-center">
                  <div className="flex flex-col gap-4 items-center w-24">
                    <Image
                      alt="Equipo"
                      src={m.team1Img}
                      quality={70}
                      className="w-16 h-16 min-w-16 min-h-16 rounded-full"
                    />

                    <p className="w-full truncate text-center">{m.team1Name}</p>
                  </div>
                  <p className="text-muted">vs</p>
                  <div className="flex flex-col gap-4 items-center w-24">
                    <Image
                      alt="Equipo"
                      src={m.team2Img}
                      quality={70}
                      className="w-16 h-16 min-w-16 min-h-16 rounded-full"
                    />

                    <p className="w-full truncate text-center">{m.team2Name}</p>
                  </div>
                </div>

                <div className="flex justify-center gap-4">
                  <div className="flex gap-2 items-center">
                    <Clock className="size-4 min-w-4 min-h-4" />
                    <p className="text-muted">{m.hora}</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <MapPin className="size-4 min-w-4 min-h-4" />
                    <p className="text-muted">{m.cancha}</p>
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
