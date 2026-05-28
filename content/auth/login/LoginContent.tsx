"use client";

/* COMPONENTS */
import Image from "next/image";
import { LoginUI } from "@/content/auth/login/components/LoginUI";

/* ICONS */
import { FourSportsIcon } from "@/content/shared/icons/fourSports/FourSportsIcon";
import { GoogleIcon } from "@/content/shared/icons/google/GoogleIcon";
import { FacebookIcon } from "@/content/shared/icons/facebook/FacebookIcon";

/* HOOKS */
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

/* IMAGES */
import cancha from "@/content/auth/login/images/loginBackground.png";

/* NAVIGATION */
import { useRouter } from "next/navigation";

/* STORES */
import { useAnnouncement } from "@/content/shared/ui/annoucement/stores/announcementStore";

/* TYPES */
import { LoginForm } from "@/content/auth/login/types/LoginForm";
import { DinamicInputText } from "@/content/shared/form/dinamicInputText/DinamicInputText";
import Link from "next/link";
import { DinamicButton } from "@/content/shared/form/dinamicButton/DinamicButton";

export function LoginContent() {
  const router = useRouter();

  const { setAnnouncement } = useAnnouncement();
  const [saving, setSaving] = useState(false);

  const methods = useForm<LoginForm>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginForm) => {
    try {
      setSaving(true);

      router.push("/organizer/home");
      /* router.push("/player/home"); */

      setAnnouncement({
        isActivated: true,
        announceType: "ok",
        message: "Sesión iniciada correctamente",
      });

      setSaving(false);
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <LoginUI
      title="Ingresa a tu cuenta"
      icon={<FourSportsIcon />}
      image={
        <Image
          src={cancha}
          alt="Cancha de fútbol"
          quality={70}
          preload
          className="object-cover object-left w-full h-full"
        />
      }
      body={
        <FormProvider {...methods}>
          <DinamicInputText<LoginForm>
            name="email"
            label="Correo"
            type="text"
            placeholder="tucorreo@email.com"
            rules={{}}
          />

          <DinamicInputText<LoginForm>
            name="password"
            label="Contraseña"
            type="password"
            placeholder="********"
            rules={{}}
          />

          <div className="w-full h-fit mb-4">
            <Link
              href={"/password/recover"}
              className="text-primary underline text-sm"
            >
              Olvidé mi contraseña
            </Link>
          </div>

          <DinamicButton
            action={methods.handleSubmit(onSubmit)}
            twClassName="w-full h-fit py-2 px-4 rounded-xl mb-4"
            disabled={saving}
            type={saving ? "disabled" : "filled"}
            label="Ingresar"
          />

          <div className="w-full h-fit flex gap-2 mb-4 justify-center items-center">
            <div className="w-24 h-px rounded-full bg-line" />
            <p className="text-sm text-muted">O también</p>
            <div className="w-24 h-px rounded-full bg-line" />
          </div>

          <div className="flex gap-4">
            <DinamicButton
              action={methods.handleSubmit(onSubmit)}
              twClassName="w-full h-fit py-2 px-4 rounded-xl mb-4"
              disabled={saving}
              type={saving ? "disabled" : "unfilled"}
              label="Google"
              icon={
                <div className="w-4 h-4">
                  <GoogleIcon />
                </div>
              }
            />

            <DinamicButton
              action={methods.handleSubmit(onSubmit)}
              twClassName="w-full h-fit py-2 px-4 rounded-xl mb-4"
              disabled={saving}
              type={saving ? "disabled" : "unfilled"}
              label="Ingresar"
              icon={
                <div className="w-4 h-4">
                  <FacebookIcon />
                </div>
              }
            />
          </div>
        </FormProvider>
      }
    />
  );
}
