import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <div className="p-[5%] flex flex-col gap-6">
      <Hero />
      <About />
      <Skills />
    </div>
  );
}
