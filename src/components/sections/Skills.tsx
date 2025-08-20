"use client";

import React, { useState } from "react";
import { SkillConstants } from "@/constants/skills";
import SkillSection from "../common/SkillSection";

const Skills = () => {
  const firstCategory = Object.keys(SkillConstants.knownSkills)[0];
  const [openCategory, setOpenCategory] = useState<string | null>(
    firstCategory
  );

  const handleToggle = (category: string) => {
    setOpenCategory((prev) => (prev === category ? null : category));
  };

  return (
    <div className="flex flex-col gap-4">
      <div>
        <p className="text-[#2D2D2D] font-medium text-lg sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
          Skills & Technologies
        </p>
      </div>
      {Object.entries(SkillConstants.knownSkills).map(
        ([category, skillList]) => (
          <SkillSection
            category={category}
            skillList={skillList}
            key={category}
            isOpen={openCategory === category}
            onToggle={() => handleToggle(category)}
          />
        )
      )}
    </div>
  );
};

export default Skills;
