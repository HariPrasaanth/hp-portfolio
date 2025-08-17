import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Experience from "@/components/sections/experience";
import Hero from "@/components/sections/hero";

import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";

export default function Home() {
  return (
    <div className="p-[5%] flex flex-col gap-6">
      <Hero />
      <About />
      <Skills />
      <Experience />
      {/* <Projects /> */}
      <Contact />
    </div>
  );
}
