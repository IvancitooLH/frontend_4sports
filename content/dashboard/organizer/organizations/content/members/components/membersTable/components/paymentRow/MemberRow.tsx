/* COMPONENTS */
import { DinamicRow } from "@/content/shared/ui/dinamicTable/components/dinamicRow/DinamicRow";
import { DinamicTd } from "@/content/shared/ui/dinamicTable/components/dinamicTd/DinamicTd";

/* TYPES */
import { MemberType } from "../../types/memberType";

export function MemberRow({
  member,
  twBgColor,
}: {
  member: MemberType;
  twBgColor: string;
}) {
  const getRole = (role: "owner" | "admin" | "viewer") => {
    switch (role) {
      case "owner":
        return "Dueño";

      case "admin":
        return "Administrador";

      case "viewer":
        return "Solo ver";
    }
  };

  return (
    <DinamicRow twBgColor={twBgColor}>
      <DinamicTd twClassName="text-nowrap">
        <p>{member.id}</p>
      </DinamicTd>

      <DinamicTd twClassName="text-nowrap">
        <p>{member.slug}</p>
      </DinamicTd>

      <DinamicTd twClassName="text-nowrap">
        <p>
          {member.name} {member.lastname}
        </p>
      </DinamicTd>

      <DinamicTd twClassName="text-nowrap">
        <p>{getRole(member.role)}</p>
      </DinamicTd>

      <DinamicTd twClassName="text-nowrap">
        <p>{member.email}</p>
      </DinamicTd>

      <DinamicTd twClassName="text-nowrap">
        <p>{member.phone}</p>
      </DinamicTd>
    </DinamicRow>
  );
}
