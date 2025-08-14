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
    description: "Worked on frontend and backend development.",
    date: "Jul 2025 - Present",
    contentStyle: { background: "#00BFA6", color: "#fff" },
    contentArrowStyle: { borderRight: "7px solid #00BFA6" },
    iconStyle: { background: "#00BFA6", color: "#fff" },
    // icon: <YourIconComponent />
  },
  {
    type: "work",
    title: "Technical Consultant",
    subtitle: "Perficient India Pvt. Ltd., Chennai",
    description: "Worked on frontend and backend development.",
    date: "Jun 2024 - Jun 2025",
    contentStyle: { background: "#00BFA6", color: "#fff" },
    contentArrowStyle: { borderRight: "7px solid #00BFA6" },
    iconStyle: { background: "#00BFA6", color: "#fff" },
    // icon: <YourIconComponent />
  },
  {
    type: "work",
    title: "Associate Information Technology Analyst",
    subtitle: "VueData Technologies Pvt. Ltd., Chennai",
    description: "Worked on frontend and backend development.",
    date: "Nov 2023 - Apr 2024",
    contentStyle: { background: "#00BFA6", color: "#fff" },
    contentArrowStyle: { borderRight: "7px solid #00BFA6" },
    iconStyle: { background: "#00BFA6", color: "#fff" },
    // icon: <YourIconComponent />
  },
  {
    type: "work",
    title: "Junior Analyst - Development (UI)",
    subtitle: "Infoview Technologies Pvt. Ltd., Chennai",
    description: "Worked on frontend and backend development.",
    date: "Jul 2021 - Oct 2023",
    contentStyle: { background: "#00BFA6", color: "#fff" },
    contentArrowStyle: { borderRight: "7px solid #00BFA6" },
    iconStyle: { background: "#00BFA6", color: "#fff" },
    // icon: <YourIconComponent />
  },
  {
    type: "work",
    title: "Trainee Engineer - Development (UI)",
    subtitle: "Infoview Technologies Pvt. Ltd., Chennai",
    description: "Worked on frontend and backend development.",
    date: "Aug 2020 - Jul 2021",
    contentStyle: { background: "#00BFA6", color: "#fff" },
    contentArrowStyle: { borderRight: "7px solid #00BFA6" },
    iconStyle: { background: "#00BFA6", color: "#fff" },
    // icon: <YourIconComponent />
  },
  {
    type: "work",
    title: "Junior Analyst - QA (Manual)",
    subtitle: "Infoview Technologies Pvt. Ltd., Chennai",
    description: "Tested software manually for quality assurance.",
    date: "Aug 2019 - Jul 2020",
    contentStyle: { background: "#00BFA6", color: "#fff" },
    contentArrowStyle: { borderRight: "7px solid #00BFA6" },
    iconStyle: { background: "#00BFA6", color: "#fff" },
    // icon: <YourIconComponent />
  },
];

const education = [
  {
    type: "education",
    title: "Bachelor of Vocation",
    subtitle: "St. Joseph's College (Autonomous), Trichy",
    description: "Software Development and System Administration",
    date: "2016 - 2019",
    contentStyle: { background: "#2196F3", color: "#fff" },
    contentArrowStyle: { borderRight: "7px solid #2196F3" },
    iconStyle: { background: "#2196F3", color: "#fff" },
    // icon: <YourIconComponent />
  },
];

const RoadMapComponent: React.FC = () => {
  return (
    <div>
      <VerticalTimeline lineColor={"#00BFA6"}>
        {[...jobs, ...education].map((item, idx) => (
          <VerticalTimelineElement
            key={idx}
            className={`vertical-timeline-element--${item.type}`}
            contentStyle={item.contentStyle}
            contentArrowStyle={item.contentArrowStyle}
            date={item.date}
            iconStyle={item.iconStyle}
            // icon={item.icon}
          >
            <h3 className="vertical-timeline-element-title">{item.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">
              {item.subtitle}
            </h4>
            <p>{item.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default RoadMapComponent;
