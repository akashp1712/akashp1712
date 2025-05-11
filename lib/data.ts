import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import lessentextImg from "@/public/lessentext.jpeg";
import summarizeWebpageImg from "@/public/summarize-webpage.png"
import pythonCheatsheetImg from "@/public/python-for-java.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

// Add these imports at the top of your file
import { FaSalesforce } from "react-icons/fa";
import { SiAmazon, SiMcafee } from "react-icons/si";

// Then in your experiencesData array, add logo property to each item:
// In your experiencesData array, add brandColor property to each item:
export const experiencesData = [
  {
    title: "SMTS, Salesforce Marketing Cloud",
    location: "Bangalore, India",
    description:
      "Part of SMS Last Mile Team, building SMS platform for serving billions of messages for Marketing Cloud customers",
    icon: React.createElement(CgWorkAlt),
    logo: React.createElement(FaSalesforce),
    brandColor: "#00A1E0", // Salesforce blue
    date: "Feb 2024 - Current",
    achievements: [
      "Optimizing SMS delivery infrastructure to handle peak loads of billions of messages",
      "Implementing real-time monitoring and alerting systems for service reliability",
      "Collaborating with cross-functional teams to enhance platform scalability"
    ],
    technologies: ["Java", "AWS", "Microservices", "Kafka", "Redis", "Monitoring Tools"]
  },
  {
    title: "SDE II - Dev experience, Appstore, Amazon",
    location: "Bangalore, India",
    description:
      "Part of Appstore Org, improving certification process for devlopers and increasing visibility through promotion portal.",
    icon: React.createElement(CgWorkAlt),
    logo: React.createElement(SiAmazon),
    brandColor: "#FF9900", // Amazon orange
    date: "Oct 2021 - Aug 2023",
    achievements: [
      "Reduced app certification time by 40% through process automation",
      "Designed and implemented a promotion portal increasing developer visibility by 35%",
      "Led a team of 3 engineers to revamp the developer dashboard with improved analytics",
      "Implemented CI/CD pipelines reducing deployment time by 60%"
    ],
    technologies: ["Java", "AWS", "React", "DynamoDB", "Lambda", "API Gateway"]
  },
  {
    title: "SDE II - Secure Home Platform, McAfee",
    location: "Bangalore, India",
    description:
      "OEM Partner Team: Cloud and Android development for the Secure Home Platform for the customer.",
    icon: React.createElement(CgWorkAlt),
    logo: React.createElement(SiMcafee),
    brandColor: "#C01818", // McAfee red
    date: "Jan 2019 – Sep 2021",
    achievements: [
      "Architected and developed key components of the Secure Home Platform",
      "Optimized cloud infrastructure reducing operational costs by 25%",
      "Implemented security enhancements that improved threat detection by 30%",
      "Collaborated with OEM partners to integrate solutions across diverse hardware platforms"
    ],
    technologies: ["Android", "Java", "Cloud Services", "RESTful APIs", "Security Protocols"]
  },
  {
    title: "SDE I - VPN client App, McAfee",
    location: "Bangalore, India",
    description:
      "Android development for VPN SDK and Mobile App",
    icon: React.createElement(CgWorkAlt),
    logo: React.createElement(SiMcafee),
    brandColor: "#C01818", // McAfee red
    date: "Oct 2017 – Dec 2018",
    achievements: [
      "Developed core VPN SDK components used across multiple McAfee products",
      "Improved VPN connection stability by 45% through protocol optimizations",
      "Reduced app size by 20% while maintaining full functionality",
      "Implemented battery optimization techniques reducing power consumption by 15%"
    ],
    technologies: ["Android", "Java", "VPN Protocols", "Network Security"]
  },
  {
    title: "SDE I - Apps Scanner, IntelSecurity (McAfee)",
    location: "Bangalore, India",
    description:
      "Backend development for Mobile Apps scanner services.",
    icon: React.createElement(CgWorkAlt),
    logo: React.createElement(SiMcafee),
    brandColor: "#C01818", // McAfee red
    date: "June 2016 – Sep 2017",
    achievements: [
      "Built scalable backend services for scanning and analyzing mobile applications",
      "Implemented machine learning algorithms to improve malware detection accuracy by 25%",
      "Developed APIs consumed by multiple client applications with 99.9% uptime",
      "Optimized database queries reducing response time by 40%"
    ],
    technologies: ["Python", "Java", "RESTful APIs", "PostgreSQL", "Machine Learning", "App Analysis"]
  },
] as const;

export const projectsData = [
  {
    title: "LessenText",
    description:
      "LessenText is an advanced text summarization app that utilizes natural language processing techniques to generate concise and coherent summaries of lengthy texts.",
    hyperlink: "https://lessentext.com",
    tags: ["ReactJS", "NextJS", "Vercel", "Supabase", "FastAPI"],
    imageUrl: lessentextImg,
  },
  {
    title: "Summarize webapge - Python Flask Application",
    description: "A Flask application that extract and summarize webpage using Natural Language Processing",
    hyperlink: "https://github.com/akashp1712/summarize-webpage",
    tags: ["Python", "Flask", "NLTK"],
    imageUrl: summarizeWebpageImg,
  },
  {
    title: "Awesome Python CheatSheets",
    description: "Python cheatsheets for developers that help them in study and in work.",
    hyperlink: "https://github.com/akashp1712/awesome-python-cheatsheets",
    tags: ["Python3", "Java", "DSA", "Problem Solving"],
    imageUrl: pythonCheatsheetImg,
  },
] as const;

export const skillsData = [
  "Dive deep",
  "System Design",
  "AWS",
  "Python",
  "Java",
  "JavaScript",
  "PostgreSQL",
  "DynamoDB",
  "ReactJS"
] as const;
