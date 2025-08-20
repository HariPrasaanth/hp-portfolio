import { COLORS } from "@/constants/commonConstants";
import EduIcon from "@/icons/eduIcon";
import WorkIcon from "@/icons/workIcon";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

// Example data for jobs and education
const jobs = [
  {
    type: "work",
    title: "Senior Technical Consultant",
    subtitle: "Perficient India Pvt. Ltd., Chennai",
    description:
      "<b>Promoted to Senior Technical Consultant</b> in <b>July 2025</b>, in recognition of continued technical excellence, leadership, and impact across projects.",
    date: "Jul 2025 - Present",
    contentStyle: {
      borderTop: `4px solid ${COLORS.perficientBackground}`,
      color: `${COLORS.primary}`,
    },
    contentArrowStyle: { borderRight: "7px solid #fff" },
    iconStyle: { background: `${COLORS.perficientBackground}`, color: "#fff" },
    icon: <WorkIcon />,
  },
  {
    type: "work",
    title: "Technical Consultant",
    subtitle: "Perficient India Pvt. Ltd., Chennai",
    description:
      "Progressed from an individual contributor to <b>leading a team and POD of 10–15 members</b> for a project with <b>Johnson & Johnson</b> in the <b>healthcare domain.</b> <br/><br/>Recognized for consistent performance and leadership with the <b>“Extra Mile” award twice</b> across two consecutive quarters.",
    date: "Jun 2024 - Jun 2025",
    contentStyle: {
      borderTop: `4px solid ${COLORS.perficientBackground}`,
      color: `${COLORS.primary}`,
    },
    contentArrowStyle: { borderRight: "7px solid #fff" },
    iconStyle: { background: `${COLORS.perficientBackground}`, color: "#fff" },
    icon: <WorkIcon />,
  },
  {
    type: "work",
    title: "Associate Information Technology Analyst",
    subtitle: "VueData Technologies Pvt. Ltd., Chennai",
    description:
      "Contributed to <b>e-commerce</b> projects for clients such as <b>Relief Factor</b> and <b>Ruff Greens</b>, using the MERN stack and writing optimized MongoDB queries to support analytics and enhance application efficiency.",
    date: "Nov 2023 - Apr 2024",
    contentStyle: {
      borderTop: `4px solid ${COLORS.vuedataBackground}`,
      color: `${COLORS.primary}`,
    },
    contentArrowStyle: { borderRight: "7px solid #fff" },
    iconStyle: { background: `${COLORS.vuedataBackground}`, color: "#fff" },
    icon: <WorkIcon />,
  },
  {
    type: "work",
    title: "Junior Analyst - Development (UI)",
    subtitle: "Infoview Technologies Pvt. Ltd., Chennai",
    description:
      "Worked on several internal projects, including for clients like <b>Sundaram Finance</b>, which enhanced my skills in frontend technologies and deepened my understanding of the <b>finance domain</b>. <br /><br /> For my growth and contributions, I was honored with the <b>Most Improved Performer</b> award by the management.",
    date: "Jul 2021 - Oct 2023",
    contentStyle: {
      borderTop: `4px solid ${COLORS.infoviewBackground}`,
      color: `${COLORS.primary}`,
    },
    contentArrowStyle: { borderRight: "7px solid #fff" },
    iconStyle: { background: `${COLORS.infoviewBackground}`, color: "#fff" },
    icon: <WorkIcon />,
  },
  {
    type: "work",
    title: "Trainee Engineer - Development (UI)",
    subtitle: "Infoview Technologies Pvt. Ltd., Chennai",
    description:
      "Trained in modern frontend technologies including React, Material UI, and Redux through hands-on experience in an internal company project.",
    date: "Aug 2020 - Jul 2021",
    contentStyle: {
      borderTop: `4px solid ${COLORS.infoviewBackground}`,
      color: `${COLORS.primary}`,
    },
    contentArrowStyle: { borderRight: "7px solid #fff" },
    iconStyle: { background: `${COLORS.infoviewBackground}`, color: "#fff" },
    icon: <WorkIcon />,
  },
  {
    type: "work",
    title: "Junior Analyst - QA (Manual)",
    subtitle: "Infoview Technologies Pvt. Ltd., Chennai",
    description: "Tested software manually for quality assurance.",
    date: "Aug 2019 - Jul 2020",
    contentStyle: {
      borderTop: `4px solid ${COLORS.infoviewBackground}`,
      color: `${COLORS.primary}`,
    },
    contentArrowStyle: { borderRight: "7px solid #fff" },
    iconStyle: { background: `${COLORS.infoviewBackground}`, color: "#fff" },
    icon: <WorkIcon />,
  },
];

const education = [
  {
    type: "education",
    title: "Bachelor of Vocation",
    subtitle: "St. Joseph's College (Autonomous), Trichy",
    description:
      "Graduated with a Bachelor's degree in <b>Software Development</b> and <b>System Administration</b>, earning the <b>Gold Medal</b> for top academic perfomance.",
    date: "2016 - 2019",
    contentStyle: {
      borderTop: `4px solid ${COLORS.educationIconBackground}`,
      color: `${COLORS.primary}`,
    },
    contentArrowStyle: { borderRight: "7px solid #fff" },
    iconStyle: {
      background: `${COLORS.educationIconBackground}`,
      color: "#fff",
    },
    icon: <EduIcon />,
  },
];

const RoadMapComponent: React.FC = () => {
  return (
    <div>
      <VerticalTimeline>
        {[...jobs, ...education].map((item, idx) => (
          <VerticalTimelineElement
            key={idx}
            className={`vertical-timeline-element--${item.type}`}
            contentStyle={item.contentStyle}
            contentArrowStyle={item.contentArrowStyle}
            date={item.date}
            iconStyle={item.iconStyle}
            icon={item.icon}
          >
            <h3
              className={`text-[${COLORS.primary}] vertical-timeline-element-title font-bold`}
            >
              {item.title}
            </h3>
            <h4
              className={`text-[${COLORS.primary}] vertical-timeline-element-subtitle`}
            >
              {item.subtitle}
            </h4>
            <p
              className={`text-[${COLORS.primary}]`}
              dangerouslySetInnerHTML={{ __html: item.description }}
            ></p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default RoadMapComponent;
