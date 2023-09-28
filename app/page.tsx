import Image from "next/image";

import Hero from "@/components/Hero";
import Discover from "@/components/Discover";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Discover />
    </main>
  );
}
