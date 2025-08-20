import Image from "next/image";
import React from "react";
import profileImage from "../../../public/images/profile.png";

const Hero = () => {
  return (
    <div className="rounded-lg bg-gradient-to-r from-[#00BFA6] to-[#6C63FF]">
      <div className="rounded-lg p-6 sm:p-12 flex flex-col lg:flex-row items-center sm:justify-center md:justify-center lg:justify-between">
        <div className="p-2 sm:p-8 order-1 lg:order-2">
          {/* <img
            src="/images/profile.png"
            alt="Profile Photo"
            className="w-30 h-30 sm:w-60 md:w-65 lg:w-70 xl:w-75 sm:h-60 md:h-65 lg:h-70 xl:h-75 rounded-full object-cover shadow-lg border-4 border-white p-1"
          /> */}
          <Image
            src={profileImage}
            alt="Profile Photo"
            className="w-30 h-30 sm:w-60 md:w-65 lg:w-70 xl:w-75 sm:h-60 md:h-65 lg:h-70 xl:h-75 rounded-full object-cover shadow-lg border-4 border-white p-1"
          />
        </div>
        <div className="order-2 lg:order-1 sm:self-start md:self-start lg:self-center w-[100%] lg:w-[60%]">
          <div className="flex flex-col gap-2 sm:gap-4">
            <p className="font-bold text-xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-[#2D2D2D]">
              Hi, I&apos;m Hari Prasaanth!
            </p>
            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-[#2D2D2D]">
              a MERN stack developer who crafts clean, scalable, and efficient
              web applications.
            </p>
            <div className="flex gap-4">
              <div>
                <button
                  className="bg-[#FFFFFF] hover:bg-blue-700 text-white sm:font-bold px-2 py-2 sm:py-3 sm:px-3 rounded-lg cursor-pointer text-sm"
                  onClick={() => {
                    const experienceSection =
                      document.getElementById("experience");
                    if (experienceSection) {
                      experienceSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  <p className="text-[#00BFA6] text-xs sm:text-sm">
                    View Experience
                  </p>
                </button>
              </div>
              <div>
                <button
                  className="bg-[#2D2D2D] hover:bg-blue-700 text-white sm:font-bold px-2 py-2 sm:py-3 sm:px-3 rounded-lg cursor-pointer text-sm"
                  onClick={() => {
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  <p className="text-[#FFFFFF] text-xs sm:text-sm">
                    Contact Me
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
