/* NAVIGATION */
import Link from "next/link";

export function LoginContent() {
  return (
    <div className="max-h-dvh h-dvh w-full flex items-center justify-center flex-col gap-4">
      <h1>Ingresar</h1>
      <div className="flex gap-4">
        <Link href={"/player/home"}>Jugador</Link>
        <Link href={"/organizer/home"}>Organizador</Link>
      </div>
    </div>
  );
}
