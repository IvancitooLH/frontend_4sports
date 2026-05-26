"use client";

/* NAVIGATION */
import Link from "next/link";
import { useRouter } from "next/navigation";

/* STORES */
import { useAnnouncement } from "@/content/shared/ui/annoucement/stores/announcementStore";

export function LoginContent() {
  const router = useRouter();
  const { setAnnouncement } = useAnnouncement();

  return (
    <div className="max-h-dvh h-dvh w-full flex items-center justify-center flex-col gap-4">
      <h1>Ingresar</h1>
      <div className="flex gap-4">
        <Link href={"/player/home"}>Jugador</Link>
        <button
          onClick={() => {
            setAnnouncement({
              isActivated: true,
              announceType: "ok",
              message: "Sesión iniciada correctamente",
            });
            router.push("/organizer/home");
          }}
        >
          Organizador
        </button>
      </div>
    </div>
  );
}
