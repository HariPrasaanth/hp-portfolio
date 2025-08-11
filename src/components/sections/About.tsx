import React from "react";

const About = () => {
  return (
    <div className="rounded-lg shadow-md p-12 flex flex-col gap-4">
      <div>
        <p className="text-[#022B3A] font-bold sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
          About Me
        </p>
      </div>
      <div>
        <p className="text-[#5B6B79] text-xl/8">
          <b> a passionate Full Stack Developer</b> specializing in building
          <b> scalable</b> and <b>efficient</b> web applications. With strong
          expertise in the
          <b> MERN stack (MongoDB, Express.js, React, Node.js)</b>, I bring
          <b> creative solutions</b> that blend <b>seamless user experience</b>{" "}
          with <b>robust backend functionality</b>. Over the years, I’ve
          contributed to <b>multiple projects</b> ranging from{" "}
          <b>dynamic single-page applications</b> to{" "}
          <b>complex enterprise-level platforms.</b> I’m driven by a love for{" "}
          <b>clean code, performance optimization,</b> and{" "}
          <b>continuous learning.</b> <br />
        </p>
      </div>
      <div>
        <p className="text-[#5B6B79] text-2xl">
          Let’s build something amazing together 🍻
        </p>
      </div>
    </div>
  );
};

export default About;
