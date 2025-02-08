import ProjectsList from "@/components/ProjectsList";
import { TorchHero } from "@/components/TorchBackground";

export default function Home() {
  return (
    <div>
      <TorchHero text="Manoj Kumar" />
      <ProjectsList />
    </div>
  );
}
