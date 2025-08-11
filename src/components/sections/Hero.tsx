import React from "react";

const Hero = () => {
  return (
    <div className="rounded-lg bg-gradient-to-r from-[#00BFA6] to-[#6C63FF]">
      <div className="rounded-lg p-12 flex flex-col lg:flex-row items-center sm:justify-center md:justify-center lg:justify-between">
        <div className="p-8 order-1 lg:order-2">
          <img
            src="/images/profile.png"
            alt="Profile Photo"
            className="sm:w-60 md:w-65 lg:w-70 xl:w-75 sm:h-60 md:h-65 lg:h-70 xl:h-75 rounded-full object-cover shadow-lg border-4 border-white p-2"
          />
        </div>
        <div className="order-2 lg:order-1 sm:self-start md:self-start lg:self-center w-[100%] lg:w-[60%]">
          <div className="flex flex-col gap-4">
            <p className="font-bold sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
              Hi, I'm Hari Prasaanth!
            </p>
            <p className="text-lg md:text-xl lg:text-2xl">
              a MERN stack developer who crafts clean, scalable, and efficient
              web applications.
            </p>
            <div className="flex gap-4">
              <div>
                <button className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded-lg cursor-pointer">
                  View Projects
                </button>
              </div>
              <div>
                <button className="bg-[#EF476F] hover:bg-blue-700 text-white font-bold py-4 px-4 rounded-lg cursor-pointer">
                  Contact Me
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
