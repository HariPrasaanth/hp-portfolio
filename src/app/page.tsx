"use client";
import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Experience from "@/components/sections/experience";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import Chatbot from "@/components/chatbot/chatbot";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center p-[3%] gap-4">
        <button
          className="cursor-pointer"
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          About
        </button>
        <button
          className="cursor-pointer"
          onClick={() =>
            document
              .getElementById("skills")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Skills
        </button>
        <button
          className="cursor-pointer"
          onClick={() =>
            document
              .getElementById("experience")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Experience
        </button>
        <button
          className="cursor-pointer"
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Contact Me
        </button>
      </div>
      <div className="px-[5%] flex flex-col gap-6">
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="experience">
          <Experience />
        </section>
        {/* <section id="projects">
        <Projects />
      </section> */}
        <section id="contact">
          <Contact />
        </section>
      </div>
      {/* Move to top floating icon */}
      {/* <button
        className="fixed bottom-6 right-6 bg-blue-600 text-white rounded-full p-3 shadow-lg hover:bg-blue-700 transition cursor-pointer"
        aria-label="Move to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button> */}
      <Chatbot />
    </>
  );
}
