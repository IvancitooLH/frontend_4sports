type FeatureCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="group relative rounded-2xl bg-card p-8 shadow-xs transition-all duration-300 hover:scale-105 flex flex-col items-center">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-card-2">
        {icon}
      </div>

      <div className="space-y-2">
        <h3 className="text-xl font-bold text-ink group-hover:text-primary transition-colors duration-200 text-center">
          {title}
        </h3>
        <p className="text-sm text-center text-muted">{description}</p>
      </div>

      <div className="absolute bottom-0 left-8 right-8 h-0.5 scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100 rounded-full" />
    </div>
  );
}
