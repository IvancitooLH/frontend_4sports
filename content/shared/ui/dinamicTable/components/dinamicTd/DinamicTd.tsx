export function DinamicTd({
  children,
  twClassName,
}: {
  children: React.ReactNode;
  twClassName: string;
}) {
  return <td className={`px-6 py-2 text-left ${twClassName}`}>{children}</td>;
}
