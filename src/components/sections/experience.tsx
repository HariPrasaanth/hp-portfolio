"use client";
import dynamic from "next/dynamic";

const ExperienceSection = dynamic(() => import("../common/experienceRoadmap"), {
  ssr: false,
});

export default function Experience() {
  return <ExperienceSection />;
}
