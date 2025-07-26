import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import lessentextImg from "@/public/lessentext.jpeg";
import summarizeWebpageImg from "@/public/summarize-webpage.png"
import pythonCheatsheetImg from "@/public/python-for-java.png";
import callGptImg from "@/public/call-gpt.png";

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
import { SiAmazon, SiMcafee, SiBroadcom } from "react-icons/si";
import { FaAws, FaPython, FaJava, FaDatabase, FaCubes, FaMicrophone } from "react-icons/fa";
import { SiJavascript, SiPostgresql, SiRedis, SiNextdotjs } from "react-icons/si";

// Then in your experiencesData array, add logo property to each item:
// In your experiencesData array, add brandColor property to each item:
export const experiencesData = [
  {
    title: "Software Engineer - Senior Member of Technical Staff, Salesforce",
    location: "Bengaluru, Karnataka, India",
    description:
      "Building a platform for serving billions of SMS messages for Marketing Cloud customers.",
    icon: React.createElement(CgWorkAlt),
    logo: React.createElement(FaSalesforce),
    brandColor: "#00A1E0", // Salesforce blue
    date: "Feb 2024 - Present",
    achievements: [
      "Led onboarding of new SMS aggregator for LATM countries serving ~3 billion messages per annum.",
      "Architected BYO(Bring-your-own) feature for SMS aggregator, improving cost transparency and platform flexibility.",
      "Proposed and implemented SMS Aggregator onboarding playbook to automate paperwork, data collection and configuration generation for new platform, reducing ready to onboard from ~16 weeks to ~4 weeks.",
      "Led multiple initiatives for innovation including AI calling, conversational WhatsApp and campaign building.",
      "Developing a playbook solution for SMS aggregator onboarding, simplifying the process for nontechnical teams (support, product managers) while ensuring technical compliance.",
      "Onboarding new service for migrating existing customers from Private Data Center to Public Cloud (AWS) to provide service resiliency and reduced infra cost.",
      "Earned Star Performer of the Quarter (Q3 2024) for exceptional performance in work and innovation.",
      "Providing mentorship to Juniors for growing to the next level."
    ],
    technologies: ["Java", "AWS", "Microservices", "Kafka", "Redis", "Monitoring Tools"]
  },
  {
    title: "Software Development Engineer 2, Amazon",
    location: "Bengaluru, Karnataka, India",
    description:
      "Software Engineer in the Developer Experience team, solving app certification and publishing problems.",
    icon: React.createElement(CgWorkAlt),
    logo: React.createElement(SiAmazon),
    brandColor: "#FF9900", // Amazon orange
    date: "Oct 2021 - Aug 2023",
    achievements: [
      "Contributed to the design and Development of AutoFailure framework that is failure case agnostic to automate developer communication for App testing failures, helped to increase ZTP by ~6.5%.",
      "Successfully reduced False Negatives of static testing by up to 12%, significantly minimizing the manual efforts required for validating apps.",
      "Designed and implemented window manipulation for automatic testing of Android Apps on Windows, enabling efficient testing of approximately 200K apps using a unified framework.",
      "Improved the user experience (UX) for the promotion portal on the App Store retail page and Developer portal, enhancing engagement and visibility.",
      "Optimized queries and data retrieval time for App details by 50%, resulting in improved performance and response time.",
      "Mentored an intern, providing guidance and support, and actively contributing to project planning in an Agile environment."
    ],
    technologies: ["Java", "AWS", "React", "DynamoDB", "Lambda", "API Gateway"]
  },
  {
    title: "Backend Software Engineer - Secure Home Platform, McAfee",
    location: "Bengaluru, Karnataka, India",
    description:
      "Spearheaded the development of a custom home security solution for an ISP partner, leveraging a comprehensive tech stack including Python, Go, Cassandra, Redis, DynamoDB, Kafka, AWS, and Terraform.",
    icon: React.createElement(CgWorkAlt),
    logo: React.createElement(SiMcafee),
    brandColor: "#C01818", // McAfee red
    date: "Dec 2018 - Sep 2021",
    achievements: [
      "Streamlined partner-specific changes by 50% through the implementation of a core solution that generalized custom modifications.",
      "Resolved critical subscription failure cases, effectively mitigating DDOS-like attacks from routers and ensuring the security and stability of the system.",
      "Designed and implemented a scalable custom feature-set module to seamlessly support various router models and versions, enabling broader compatibility and ease of integration.",
      "Optimized the data flow design, resulting in a remarkable reduction of up to 40% in DB storage and network calls for the Router API, significantly improving efficiency and performance."
    ],
    technologies: ["Python", "Go", "Cassandra", "Redis", "DynamoDB", "Kafka", "AWS", "Terraform"]
  },
  {
    title: "Android Software Engineer - Safe Connect (VPN client), McAfee",
    location: "Bengaluru Area, India",
    description:
      "Played a key role as a Software Engineer in Android, specialising in mobile app development for McAfee's Safe Connect, a security app providing secure network access through a VPN service.",
    icon: React.createElement(CgWorkAlt),
    logo: React.createElement(SiMcafee),
    brandColor: "#C01818", // McAfee red
    date: "Oct 2017 - Dec 2018",
    achievements: [
      "Created robust VPN interfaces for the Android end-product, ensuring seamless integration and optimal user experience.",
      "Developed a custom network state-machine to support Auto-start VPN and Activity-log features, enhancing functionality and user convenience.",
      "Implemented support for Android 8 notification changes via SDK integration, ensuring compatibility with the latest platform updates."
    ],
    technologies: ["Android", "Java", "VPN Protocols", "Network Security"]
  },
  {
    title: "Backend Software Engineer - Apps scanner, McAfee",
    location: "Bengaluru Area, India",
    description:
      "Worked as a Software Engineer for the App Scanner team, utilizing technologies such as Python, Flask, XML, MySQL, and MongoDB.",
    icon: React.createElement(CgWorkAlt),
    logo: React.createElement(SiMcafee),
    brandColor: "#C01818", // McAfee red
    date: "Jun 2016 - Oct 2017",
    achievements: [
      "Implemented optimizations that significantly increased the throughput of the app scanners, reducing repeat scanning of Android apps by up to 5000 per day.",
      "Designed and implemented a robust pipe-filter service, employing pluggable codes, to efficiently process APK data.",
      "Helped MySQL fix trigger bug: https://bugs.mysql.com/bug.php?id=87371",
      "Collaborated with cross-functional teams to ensure seamless integration and optimal performance of the app scanning system."
    ],
    technologies: ["Python", "Flask", "XML", "MySQL", "MongoDB"]
  },
  {
    title: "Software Engineer Intern, Broadcom Limited",
    location: "Bengaluru Area, India",
    description:
      "Collaborated with the Bluetooth Software Development team, focusing on Bluetooth Stack for Android OS (AOSP).",
    icon: React.createElement(CgWorkAlt),
    logo: React.createElement(SiBroadcom),
    brandColor: "#F78F1E", // Broadcom orange (approximate)
    date: "Jun 2015 - May 2016",
    achievements: [
      "Implemented and enhanced Bluetooth profiles, including AVRCP, MAP, and HID.",
      "Successfully developed a service layer for AVRCP 1.6 CoverArt within a tight one-month development cycle.",
      "Engineered a utility code that allowed testing of BLE-only APIs through a mobile app via reverse engineering of AOSP code.",
      "Provided crucial support for the migration of the Bluetooth stack from Android N to Android M codebase."
    ],
    technologies: ["Android", "Bluetooth", "AOSP"]
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
    title: "Call GPT: Generative AI Phone Calling",
    description: "A toolkit for building agentic phone call experiences using Twilio Media Streams, LLMs, and real-time speech-to-text and text-to-speech. Enables voice and video support with AI.",
    hyperlink: "https://github.com/akashp1712/call-gpt",
    tags: ["Node.js", "Twilio", "OpenAI", "Voice AI", "Real-time"],
    imageUrl: callGptImg,
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
  { name: "AWS", icon: React.createElement(FaAws) },
  { name: "Python", icon: React.createElement(FaPython) },
  { name: "Java", icon: React.createElement(FaJava) },
  { name: "JavaScript", icon: React.createElement(SiJavascript) },
  { name: "PostgreSQL", icon: React.createElement(SiPostgresql) },
  { name: "DynamoDB", icon: React.createElement(FaDatabase) },
  { name: "Microservices", icon: React.createElement(FaCubes) },
  { name: "Redis", icon: React.createElement(SiRedis) },
  { name: "Voice AI", icon: React.createElement(FaMicrophone) },
  { name: "NextJS", icon: React.createElement(SiNextdotjs) },
] as const;
