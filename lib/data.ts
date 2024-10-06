import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiAmazon,
  SiFirebase,
  SiGit,
  SiMui,
  SiTailwindcss,
  SiLinkedin,
  SiInstagram,
  SiDotnet,
  SiCsharp,
  SiSpring,
  SiSelenium,
} from "react-icons/si";
import { FaAngular, FaJava, FaDatabase } from "react-icons/fa";
import { GrDocumentPdf } from "react-icons/gr";
import { AiFillApi } from "react-icons/ai";
import { TbBrandCpp } from "react-icons/tb";
import { IconType } from "react-icons";
import {
  Briefcase,
  Mail,
  Presentation,
  GraduationCap,
  LucideIcon,
} from "lucide-react";

export interface NavBarMap {
  route: string;
  Icon: LucideIcon;
  label: string;
}

export const navMapping: NavBarMap[] = [
  {
    route: "/#work",
    Icon: Briefcase,
    label: "Work",
  },
  {
    route: "/#education",
    Icon: GraduationCap,
    label: "Education",
  },
  {
    route: "/#projects",
    Icon: Presentation,
    label: "Projects",
  },
  {
    route: "/#contact",
    Icon: Mail,
    label: "Contact",
  },
];

export const skills: IconPelet[] = [
  {
    Icon: SiTypescript,
    label: "TypeScript",
  },
  {
    Icon: SiJavascript,
    label: "JavaScript",
  },
  {
    Icon: SiReact,
    label: "React",
  },
  {
    Icon: SiNextdotjs,
    label: "Next",
  },
  {
    Icon: SiTailwindcss,
    label: "Tailwind",
  },
  {
    Icon: FaAngular,
    label: "Angular",
  },
  {
    Icon: SiMui,
    label: "MUI",
  },
  {
    Icon: SiNodedotjs,
    label: "Node",
  },
  {
    Icon: SiExpress,
    label: "Express",
  },
  {
    Icon: SiHtml5,
    label: "HTML",
  },
  {
    Icon: SiCss3,
    label: "CSS3",
  },
  {
    Icon: SiPython,
    label: "Python",
  },
  {
    Icon: SiCsharp,
    label: "C#",
  },
  {
    Icon: SiDotnet,
    label: ".NET",
  },
  {
    Icon: FaJava,
    label: "Java",
  },
  {
    Icon: SiSpring,
    label: "Springboot",
  },
  {
    Icon: SiSelenium,
    label: "Selenium",
  },
  {
    Icon: AiFillApi,
    label: "APIs",
  },
  {
    Icon: FaDatabase,
    label: "SQL Server",
  },
  {
    Icon: SiMongodb,
    label: "MongoDB",
  },
  {
    Icon: SiAmazon,
    label: "AWS",
  },
  {
    Icon: SiFirebase,
    label: "Firebase",
  },
  {
    Icon: SiGit,
    label: "Git",
  },
  {
    Icon: TbBrandCpp,
    label: "C++",
  },
];

export interface Project {
  title: string;
  description: string | string[];
  link: string;
}

export const projects: Project[] = [
  {
    title: "Project 1",
    description: ['Point 1' , 'Point 2' ,'Point 3'],
    link: '',
  },
  {
    title: "Project 2",
    description: '',
    link: '',
  },
  {
    title: "Project 1",
    description: ['Point 1' , 'Point 2' ,'Point 3'],
    link: '',
  },
];

export interface Experience {
  company: string;
  logo: string;
  position: string;
  description: string | string[];
  years: string;
}

export const workExperiences: Experience[] = [
  {
    company: "Company1",
    logo: "/company-logo.png",
    position: "Position1",
    description: ['Point 1' , 'Point 2' ,'Point 3'],
    years: "Time1 - Time2",
  },
  {
    company: "Company2",
    logo: "/company-logo.png",
    position: "Position2",
    description: ['Point 1' , 'Point 2' ,'Point 3'],
    years: "Time1 - Time2",
  },
  {
    company: "Company3",
    logo: "/company-logo.png",
    position: "Position3",
    description: ['Point 1' , 'Point 2' ,'Point 3'],
    years: "Time1 - Time2",
  },
];

export const aboutYou = {
  name: "Your Name",
  description: `About You`,
  yearsOfExperience: `${new Date().getFullYear() - 2021} years`,
  location: "Location",
  email: "mail@test.com",
  actionText: "Hire Me",
  emailSubject: "Sample Subject",
  emailBody: `Sample Body`,
  gitHubLink: ''
};

export const logoText = "@yourname";

export const marketingHeadlines = {
  mainHeadline: "Cool Headline",
  subHeadline: "Cool Sub Headline",
};

export const websiteMetadata = {
  title: "title",
  description: "description",
};

export const educations: Experience[] = [
  {
    company: "College1",
    logo: "/company-logo.png",
    position: "Degree",
    description: "Thing, Grade: 1000 SGPA",
    years: "Year1 - Year2",
  },
];

export interface IconPelet {
  Icon: IconType;
  label: string;
  url?: string;
}

export const sidebarLinks: IconPelet[] = [
  {
    Icon: SiLinkedin,
    label: "LinkedIn",
    url: "",
  },
  {
    Icon: GrDocumentPdf,
    label: "Resume",
    url: "",
  },
  {
    Icon: SiInstagram,
    label: "Instagram",
    url: "",
  },
];
