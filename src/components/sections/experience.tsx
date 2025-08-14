"use client";
import dynamic from "next/dynamic";

const ExperienceSection = dynamic(() => import("../common/ExperienceRoadMap"), {
  ssr: false,
});

export default function Experience() {
  return <ExperienceSection />;
}
