"use client";
import { Skill } from "@/constants/skills";
import React, { useEffect, useRef, useState } from "react";

interface SkillSectionProps {
  category: string;
  skillList: Skill[];
  isOpen: boolean;
  onToggle: () => void;
}

const SkillSection = (props: SkillSectionProps) => {
  const { category, skillList, isOpen, onToggle } = props;
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [isOpen]);

  return (
    <div className="border-b">
      <button
        className="w-full text-left py-4 flex justify-between items-center"
        onClick={onToggle}
      >
        <span className="text-sm sm:text-xl font-medium text-[#022B3A] capitalize">
          {category}
        </span>
        <span className="text-2xl">{isOpen ? "−" : "+"}</span>
      </button>

      <div
        ref={contentRef}
        className="transition-all duration-500 ease-in-out overflow-hidden"
        style={{ maxHeight: height }}
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-4 pt-2">
          {skillList.map((skill, index) => (
            <div
              key={index}
              className="bg-[rgba(0,191,166,0.1)] p-4 flex flex-col items-center justify-center rounded"
            >
              <div className="w-[60px] h-[60px] mb-2">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="font-medium text-xs sm:text-base">
                {skill.name}
              </div>
              <div className="text-[10px] sm:text-sm text-gray-600">
                {skill.level}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
