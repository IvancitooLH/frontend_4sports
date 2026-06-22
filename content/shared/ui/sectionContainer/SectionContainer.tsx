export function SectionContainer({ children }: { children: React.ReactNode }) {
  return (
    <section className="w-full h-full min-h-0 overflow-y-auto bg-background">{children}</section>
  );
}
