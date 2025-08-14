const skillCategoryLabel = {
  frontendLabel: "Frontend",
  cssLabel: "CSS Libraries",
  backendLabel: "Backend",
  databaseLabel: "Database",
  othersLabel: "Other Tools",
} as const;
export interface Skill {
  name: string;
  icon: string;
  level: "Beginner" | "Intermediate" | "Advanced";
}

interface Skills {
  [skillCategoryLabel.frontendLabel]: Skill[];
  [skillCategoryLabel.cssLabel]: Skill[];
  [skillCategoryLabel.backendLabel]: Skill[];
  [skillCategoryLabel.databaseLabel]: Skill[];
  [skillCategoryLabel.othersLabel]: Skill[];
}

const knownSkills: Skills = {
  [skillCategoryLabel.frontendLabel]: [
    {
      name: "JavaScript (ES6+)",
      icon: "/icons/js.png",
      level: "Advanced",
    },
    { name: "React 18", icon: "/icons/react.png", level: "Advanced" },
    { name: "Next 15", icon: "/icons/nextjs.png", level: "Intermediate" },
    { name: "Vue 3", icon: "/icons/vue.png", level: "Beginner" },
    {
      name: "Angular 18",
      icon: "/icons/angular.png",
      level: "Beginner",
    },
  ],
  [skillCategoryLabel.cssLabel]: [
    { name: "Material UI", icon: "/icons/materialui.png", level: "Advanced" },
    { name: "Bootstrap", icon: "/icons/bootstrap.png", level: "Advanced" },
    {
      name: "Tailwind CSS",
      icon: "/icons/tailwind.png",
      level: "Intermediate",
    },
  ],
  [skillCategoryLabel.backendLabel]: [
    { name: "Codeigniter", icon: "/icons/codeigniter.png", level: "Advanced" },
    { name: "Node.js", icon: "/icons/nodejs.png", level: "Intermediate" },
    { name: "Express.js", icon: "/icons/express.png", level: "Intermediate" },
  ],
  [skillCategoryLabel.databaseLabel]: [
    { name: "MySQL", icon: "/icons/mysql.png", level: "Intermediate" },
    { name: "MongoDB", icon: "/icons/mongo.png", level: "Beginner" },
  ],
  [skillCategoryLabel.othersLabel]: [
    { name: "Git & GitHub", icon: "/icons/github.png", level: "Advanced" },
    { name: "Postman", icon: "/icons/postman.png", level: "Advanced" },
  ],
};

export const SkillConstants = {
  knownSkills,
};
