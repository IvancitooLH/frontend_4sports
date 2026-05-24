/* NAVIGATION */
import Link from "next/link";

export function RegisterContent() {
  return (
    <div className="max-h-dvh h-dvh w-full flex items-center justify-center flex-col gap-4">
      <h1>Registrarse</h1>
      <div className="flex gap-4">
        <Link href={"/player"}>Jugador</Link>
        <Link href={"/organizer"}>Organizador</Link>
      </div>
    </div>
  );
}
