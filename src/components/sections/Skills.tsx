import React from "react";
import SkillPill from "../common/DomainPill";
import { SkillConstants } from "@/constants/skills";
import SkillSection from "../common/SkillSection";

const Skills = () => {
  return (
    <div className="rounded-lg p-12 flex flex-col gap-4">
      <div>
        <p className="text-[#022B3A] font-bold sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
          Skills & Technologies
        </p>
      </div>
      {/* <div>
        <div>
          <p className="text-[#022B3A] font-bold sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
            Frontend
          </p>
        </div>
        <div className="flex justify-between">
          <div className="bg-[rgba(0,191,166,0.1)] w-1/4">
            <div className="w-1/2">
              <img src={"icons/react.png"} />
            </div>
            <div>React.js</div>
            <div>Advanced</div>
          </div>
          <div className="bg-[rgba(0,191,166,0.1)] w-1/4">
            <div className="w-1/2">
              <img src={"icons/nextjs.png"} />
            </div>
            <div>Next JS</div>
            <div>Advanced</div>
          </div>
        </div>
      </div> */}
      <SkillSection />
    </div>
  );
};

export default Skills;

// export default function Skills() {
//   const skills = {
//     frontend: [
//       { name: "React", icon: "/icons/react.svg", level: "Advanced" },
//       { name: "Next.js", icon: "/icons/nextjs.svg", level: "Advanced" },
//       { name: "Tailwind CSS", icon: "/icons/tailwind.svg", level: "Advanced" },
//       { name: "JavaScript (ES6+)", icon: "/icons/javascript.svg", level: "Advanced" },
//     ],
//     backend: [
//       { name: "Node.js", icon: "/icons/nodejs.svg", level: "Advanced" },
//       { name: "Express.js", icon: "/icons/express.svg", level: "Advanced" },
//       { name: "REST APIs", icon: "/icons/api.svg", level: "Advanced" },
//     ],
//     database: [
//       { name: "MongoDB", icon: "/icons/mongodb.svg", level: "Advanced" },
//       { name: "MySQL", icon: "/icons/mysql.svg", level: "Intermediate" },
//     ],
//     tools: [
//       { name: "Git & GitHub", icon: "/icons/git.svg", level: "Advanced" },
//       { name: "Docker", icon: "/icons/docker.svg", level: "Intermediate" },
//       { name: "Postman", icon: "/icons/postman.svg", level: "Advanced" },
//     ]
//   };

//   return (
//     <section className="py-16 bg-gray-50 dark:bg-gray-900">
//       <div className="max-w-6xl mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">
//           Skills & Technologies
//         </h2>

//         {Object.entries(skills).map(([category, skillList]) => (
//           <div key={category} className="mb-10">
//             <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 capitalize mb-4">
//               {category}
//             </h3>

//             {/* Mobile: Horizontal Scroll | Desktop: Grid */}
//             <div className="flex md:grid md:grid-cols-4 gap-4 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
//               {skillList.map((skill) => (
//                 <div
//                   key={skill.name}
//                   className="flex-shrink-0 w-36 md:w-auto flex flex-col items-center p-4 rounded-xl bg-white dark:bg-gray-800 shadow hover:shadow-lg transition"
//                 >
//                   <img
//                     src={skill.icon}
//                     alt={skill.name}
//                     className="w-12 h-12 mb-3"
//                   />
//                   <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
//                     {skill.name}
//                   </p>
//                   <span className="text-sm text-gray-500 dark:text-gray-400">
//                     {skill.level}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
