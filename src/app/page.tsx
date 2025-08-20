"use client";
import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Experience from "@/components/sections/experience";
import Hero from "@/components/sections/hero";
import Skills from "@/components/sections/skills";
import Chatbot from "@/components/chatbot/chatbot";

import { useEffect, useState } from "react";
import Footer from "@/components/sections/footer";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const sections = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact Me" },
  ];

  // Scroll handler for active section detection
  useEffect(() => {
    const sectionIds = ["hero", "about", "skills", "experience", "contact"];

    const handleScroll = () => {
      const scrollPos = window.scrollY;

      // Check if we're in hero section
      if (scrollPos < 100) {
        if (activeSection !== "hero") {
          setActiveSection("hero");
        }
        return;
      }

      // Find current section
      const scrollPosWithOffset = scrollPos + 150;
      let current = "about"; // Default to about when not in hero

      // Check sections from bottom to top for accurate detection
      for (let i = sectionIds.length - 1; i >= 1; i--) {
        // Start from 1 to skip hero
        const el = document.getElementById(sectionIds[i]);
        if (el && scrollPosWithOffset >= el.offsetTop - 100) {
          current = sectionIds[i];
          break;
        }
      }

      if (activeSection !== current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Call once to set initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]); // Empty dependency array to prevent re-creation

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = id === "hero" ? 0 : element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });

      // Force update the active section after scrolling
      setTimeout(() => {
        setActiveSection(id);
      }, 100);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <div
        className={`hidden sm:flex sticky top-0 bg-white/95 backdrop-blur-sm z-50 shadow-sm transition-all duration-300 justify-between px-[5%] py-4`}
      >
        {/* Name/Logo - only show when not in hero section */}

        <div className="flex items-center">
          <h1
            className="text-lg font-bold text-gray-800 cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            Hari Prasaanth
          </h1>
        </div>

        {/* Navigation Links */}
        <div className={`flex items-center gap-4 mr-0`}>
          {sections.map(({ id, label }) => (
            <button
              key={id}
              className={`cursor-pointer px-4 py-2 rounded-full transition-all duration-200 ${
                activeSection === id
                  ? "bg-[#00BFA6] text-white font-semibold shadow-md transform scale-105"
                  : "bg-transparent text-gray-700 hover:bg-gray-100 hover:text-[#00BFA6]"
              }`}
              onClick={() => scrollToSection(id)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="sm:hidden sticky top-0 bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="flex justify-between items-center px-4 py-3">
          {/* Name/Logo - only show when not in hero section */}

          <h1
            className="text-base font-bold text-gray-800 cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            Hari Prasaanth
          </h1>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`relative w-8 h-8 flex flex-col justify-center items-center`}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-gray-800 transform transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-gray-800 my-1 transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-gray-800 transform transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu Dropdown with attractive design */}
        <div
          className={`absolute top-full left-0 w-full bg-gradient-to-br from-white via-gray-50 to-gray-100 shadow-2xl transform transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 -translate-y-4 invisible"
          }`}
        >
          <div className="relative">
            {/* Decorative gradient line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00BFA6] via-blue-500 to-purple-600"></div>

            <div className="px-4 py-6 space-y-2">
              {sections
                .filter((section) => section.id !== "hero") // Hide home in mobile menu
                .map(({ id, label }, index) => (
                  <button
                    key={id}
                    className={`w-full text-left px-6 py-4 rounded-xl transition-all duration-200 transform ${
                      activeSection === id
                        ? "bg-gradient-to-r from-[#00BFA6] to-[#00A693] text-white shadow-lg scale-102"
                        : "bg-white/70 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-md hover:scale-102 hover:text-[#00BFA6]"
                    } ${index === 0 ? "animate-fade-in-up" : ""}`}
                    style={{
                      animationDelay: `${index * 50}ms`,
                      boxShadow:
                        activeSection === id
                          ? "0 8px 25px rgba(0, 191, 166, 0.3)"
                          : "0 2px 10px rgba(0, 0, 0, 0.1)",
                    }}
                    onClick={() => scrollToSection(id)}
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-2 h-2 rounded-full transition-all duration-200 ${
                          activeSection === id ? "bg-white" : "bg-[#00BFA6]"
                        }`}
                      />
                      <span className="font-medium">{label}</span>
                    </div>
                  </button>
                ))}
            </div>

            {/* Decorative bottom section */}
            <div className="px-4 pb-4">
              <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
              <div className="text-center py-3">
                <p className="text-xs text-gray-500">
                  Portfolio • {new Date().getFullYear()}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu overlay */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm -z-10"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </div>

      {/* Main Content */}
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
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </div>

      <Chatbot />

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
