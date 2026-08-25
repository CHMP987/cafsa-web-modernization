import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MenuTeaser } from "@/components/MenuTeaser";
import { Visit } from "@/components/Visit";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MenuTeaser />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
