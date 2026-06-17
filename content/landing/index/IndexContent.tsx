/* COMPONENTS */
import { Features } from "./components/features/Features";
import { Hero } from "./components/hero/Hero";
import { Teams } from "./components/teams/Teams";
import { Tournaments } from "./components/tournaments/Tournaments";
import { WhoWeAre } from "./components/whoWeAre/WhoWeAre";
import { WhoYouAre } from "./components/whoYouAre/WhoYouAre";
import Image from "next/image";

/* IMAGES */
import imagen from "./image.jpg";

export function IndexContent() {
  return (
    <div>
      <Hero />
      <WhoWeAre />
      <Features />
      <WhoYouAre />
      <Tournaments />
      <Teams />
      <div className="w-full h-[calc(50dvh)] relative py-4 flex justify-center items-center">
        <div className="w-full h-full absolute top-0 left-0 z-10 bg-lime-900/50" />

        <Image
          src={imagen}
          alt="Fondo deportivo"
          fill
          quality={70}
          priority
          className="object-cover object-center"
        />

        <h2 className="font-bebas text-8xl font-bold relative text-white z-20">
          ¡Esperamos verte pronto!
        </h2>
      </div>
    </div>
  );
}
