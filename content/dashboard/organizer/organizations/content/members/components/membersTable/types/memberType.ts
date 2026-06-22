export type MemberType = {
  id: number;
  slug: string;
  name: string;
  lastname: string;
  role: "owner" | "admin" | "viewer";
  email: string;
  phone: string;
};
