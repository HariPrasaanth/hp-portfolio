import React from "react";
import RoadMapComponent from "./roadMapComponent";

const ExperienceRoadMap: React.FC = () => {
  return (
    <div className="bg-[#e3e3e3] rounded">
      <div>
        <p className=" text-[#2D2D2D] font-medium text-lg sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-center my-8">
          Experience
        </p>
      </div>
      <div>
        <RoadMapComponent />
      </div>
    </div>
  );
};

export default ExperienceRoadMap;
