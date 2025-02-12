import { HomeProjectsList } from "@/components/HomeProjectsList";
import StickyDemo from "@/components/StickyDemo";
import { TorchHero } from "@/components/TorchBackground";

export default function Home() {
  return (
    <div>
      <TorchHero text="Manoj Kumar" />
      <HomeProjectsList />
      <StickyDemo />
    </div>
  );
}
