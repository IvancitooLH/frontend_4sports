import { Hero } from "./components/hero/Hero"
import { WhoWeAreSection } from "./components/whoWeAre/WhoWeAre";

export function IndexContent() {
  return (
    <div className="max-h-dvh h-dvh w-full">
      <Hero />
      <WhoWeAreSection />
    </div>
  );
}
