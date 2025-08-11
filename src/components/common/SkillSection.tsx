import React from "react";

const SkillSection = () => {
  return (
    <>
      <div>
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
      </div>
    </>
  );
};

export default SkillSection;
