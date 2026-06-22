"use client";

/* COMPONENTS */
import { DinamicButton } from "@/content/shared/form/dinamicButton/DinamicButton";
import Image from "next/image";
import { ModalBodyUpdateOrganizationPhotoForm } from "../modalBodyUpdateOrganizationPhoto/ModalBodyUpdateOrganizationPhotoForm";
import { ModalBodyUpdateOrganizationInfoForm } from "../modalBodyUpdateOrganizationInfo/ModalBodyUpdateOrganizationInfoForm";

/* ICONS */
import { Camera, SquarePen, Trash2, UsersRound, Wallet } from "lucide-react";

/* LIBS */
import { motion } from "framer-motion";

/* NAVIGATION */
import { useRouter } from "next/navigation";

/* STORES */
import { useModal } from "@/content/shared/ui/modal/stores/modalStore";

/* TYPES */
import { OrganizationCardType } from "./types/OrganizationCardType";

export function OrganizationCard({
  isSelected,
  image,
  name,
  description,
  slug,
}: OrganizationCardType) {
  const router = useRouter();

  const { setModal } = useModal();

  return (
    <motion.div
      onClick={
        !isSelected
          ? () => {
              alert("Seleccionada");
            }
          : undefined
      }
      className="flex relative rounded-xl border justify-between w-full h-fit items-center p-8 gap-4"
      style={
        isSelected
          ? {
              backgroundColor: "var(--primary-background)",
              borderColor: "var(--primary)",
            }
          : {
              backgroundColor: "var(--background)",
              borderColor: "var(--line)",
              cursor: "pointer",
            }
      }
      whileHover={
        isSelected
          ? {}
          : {
              scale: 1.03,
              backgroundColor: "var(--surface)",
              borderColor: "var(--primary)",
            }
      }
      whileTap={isSelected ? {} : { scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        scale: { duration: 0.3 },
        backgroundColor: { duration: 0.3 },
        borderColor: { duration: 0.3 },
      }}
    >
      {isSelected && (
        <div className="w-fit h-fit py-1 px-4 rounded-xl text-sm absolute top-0 right-4 -translate-y-1/2 flex items-center bg-primary text-primary-text">
          <p className="font-bold">Seleccionada</p>
        </div>
      )}

      <div className="flex gap-6 items-center min-w-0">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setModal({
              isActivated: true,
              title: "Cambiar foto",
              body: <ModalBodyUpdateOrganizationPhotoForm slug={slug} />,
            });
          }}
          className="w-24 h-24 min-w-24 min-h-24 rounded-full border border-line relative cursor-pointer"
        >
          <Image
            alt="Organización"
            src={image}
            quality={70}
            fill
            className="rounded-full object-cover object-center"
          />

          <div className="w-fit h-fit p-2 rounded-full absolute right-0 bottom-0 border-4 border-background bg-primary">
            <Camera className="size-4 min-w-4 min-h-4 text-primary-text" />
          </div>
        </button>

        <div className="min-w-0">
          <p className="font-bold text-lg text-left">{name}</p>
          <p className="text-sm line-clamp-2">{description}</p>
        </div>
      </div>

      <div className="flex gap-2">
        <DinamicButton
          action={(e) => {
            e.stopPropagation();
            setModal({
              isActivated: true,
              title: "Actualizar datos",
              body: <ModalBodyUpdateOrganizationInfoForm slug={slug} />,
            });
          }}
          type="unfilled"
          twClassName="w-fit p-2 rounded-full border border-line hover:border-primary"
          icon={<SquarePen className="size-4 min-h-4 min-w-4" />}
        />
        <DinamicButton
          action={(e) => {
            e.stopPropagation();
            router.push(`/organizer/organizations/payment-history/${slug}`);
          }}
          type="unfilled"
          twClassName="w-fit p-2 rounded-full border border-line hover:border-primary"
          icon={<Wallet className="size-4 min-h-4 min-w-4" />}
        />
        <DinamicButton
          action={(e) => {
            e.stopPropagation();
            router.push(`/organizer/organizations/members/${slug}`);
          }}
          type="unfilled"
          twClassName="w-fit p-2 rounded-full border border-line hover:border-primary"
          icon={<UsersRound className="size-4 min-h-4 min-w-4" />}
        />
        <DinamicButton
          action={(e) => {
            e.stopPropagation();
          }}
          type="destructive"
          twClassName="w-fit p-2 rounded-full border border-line hover:border-primary hover:bg-secondary"
          icon={<Trash2 className="size-4 min-h-4 min-w-4" />}
        />
      </div>
    </motion.div>
  );
}
