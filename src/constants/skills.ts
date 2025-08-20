import jsIcon from "../../public/icons/js.png";
import reactIcon from "../../public/icons/react.png";
import nextIcon from "../../public/icons/nextjs.png";
import vueIcon from "../../public/icons/vue.png";
import angularIcon from "../../public/icons/angular.png";
import materialuiIcon from "../../public/icons/materialui.png";
import bootstrapIcon from "../../public/icons/bootstrap.png";
import tailwindIcon from "../../public/icons/tailwind.png";
import codeigniterIcon from "../../public/icons/codeigniter.png";
import nodeIcon from "../../public/icons/nodejs.png";
import expressIcon from "../../public/icons/express.png";
import mysqlIcon from "../../public/icons/mysql.png";
import mongoIcon from "../../public/icons/mongo.png";
import githubIcon from "../../public/icons/github.png";
import postmanIcon from "../../public/icons/postman.png";
import { StaticImageData } from "next/image";

const skillCategoryLabel = {
  frontendLabel: "Frontend",
  cssLabel: "CSS Libraries",
  backendLabel: "Backend",
  databaseLabel: "Database",
  othersLabel: "Other Tools",
} as const;
export interface Skill {
  name: string;
  icon: string | StaticImageData;
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
      name: "JavaScript(ES6+)",
      icon: jsIcon,
      level: "Advanced",
    },
    { name: "React 18", icon: reactIcon, level: "Advanced" },
    { name: "Next 15", icon: nextIcon, level: "Intermediate" },
    { name: "Vue 3", icon: vueIcon, level: "Beginner" },
    {
      name: "Angular 18",
      icon: angularIcon,
      level: "Beginner",
    },
  ],
  [skillCategoryLabel.cssLabel]: [
    { name: "Material UI", icon: materialuiIcon, level: "Advanced" },
    { name: "Bootstrap", icon: bootstrapIcon, level: "Advanced" },
    {
      name: "Tailwind CSS",
      icon: tailwindIcon,
      level: "Intermediate",
    },
  ],
  [skillCategoryLabel.backendLabel]: [
    { name: "Codeigniter", icon: codeigniterIcon, level: "Advanced" },
    { name: "Node.js", icon: nodeIcon, level: "Intermediate" },
    { name: "Express.js", icon: expressIcon, level: "Intermediate" },
  ],
  [skillCategoryLabel.databaseLabel]: [
    { name: "MySQL", icon: mysqlIcon, level: "Intermediate" },
    { name: "MongoDB", icon: mongoIcon, level: "Beginner" },
  ],
  [skillCategoryLabel.othersLabel]: [
    { name: "Git & GitHub", icon: githubIcon, level: "Advanced" },
    { name: "Postman", icon: postmanIcon, level: "Advanced" },
  ],
};

export const SkillConstants = {
  knownSkills,
};
