import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import callGptImg from "@/public/call-gpt.png";
import vibeframesImg from "@/public/vibeframes.png";
import paymintImg from "@/public/paymint.png";
import evercallImg from "@/public/evercall.png";

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
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Writing",
    hash: "#blog",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

// Icons used by experience logos + the focused skills list.
import { FaSalesforce } from "react-icons/fa";
import { SiAmazon, SiMcafee, SiBroadcom, SiChainlink } from "react-icons/si";
import { FaAws, FaPython, FaMicrophone, FaRobot } from "react-icons/fa";
import { SiNextdotjs, SiTypescript } from "react-icons/si";

// Then in your experiencesData array, add logo property to each item:
// In your experiencesData array, add brandColor property to each item:
export const experiencesData = [
  {
    title: "AI Software Engineer, Salesforce",
    location: "Bengaluru, Karnataka, India",
    description:
      "Leading the development of Agentic Content Studio - a multi-turn agent platform for Marketing Cloud.",
    icon: React.createElement(CgWorkAlt),
    logo: React.createElement(FaSalesforce),
    brandColor: "#00A1E0", // Salesforce blue
    date: "Jan 2026 - Present",
    achievements: [
      "Architecting the Agentic Content Studio built using React (frontend), FastAPI (python) and Mastra framework (node).",
      "Designed the core runtime on Mastra's Harness primitive: per-thread state, observational memory, skills, tools catalog and its APIs, image generation and Human-in-loop.",
      "Led multiple initiatives for innovation including AI calling, conversational WhatsApp and campaign building."
    ],
    technologies: ["React", "FastAPI", "Python", "Mastra AI", "LLMs", "Node.js"]
  },
  {
    title: "Senior Software Engineer - Marketing Cloud, Salesforce",
    location: "Bengaluru, Karnataka, India",
    description:
      "Led the modernization and integration of SMS platforms, serving billions of messages for Marketing Cloud customers.",
    icon: React.createElement(CgWorkAlt),
    logo: React.createElement(FaSalesforce),
    brandColor: "#00A1E0", // Salesforce blue
    date: "Feb 2024 - Dec 2025",
    achievements: [
      "Led integration of Marketing Cloud Engagement (MCE) SMS traffic with Unified SMS platform on the Falcon AWS platform — reducing aggregator onboarding time from months to weeks.",
      "Spearheaded integration of a competitive SMS aggregator across LATAM and East Asian traffic, yielding ~$10M in annual customer saving. (Q3 2024 Quarter Award)",
      "Architected BYO (Bring-your-own) feature for SMS aggregator, improving cost transparency and platform flexibility.",
      "Proposed and implemented SMS Aggregator onboarding playbook to automate paperwork, reducing ready-to-onboard from ~16 weeks to ~4 weeks.",
      "Onboarding new service for migrating existing customers from Private Data Center to Public Cloud (AWS) to provide service resiliency and reduced infra cost.",
      "Providing mentorship to Juniors for growing to the next level."
    ],
    technologies: ["Java", "AWS", "Microservices", "Kafka", "Redis"]
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
    title: "Evercall",
    description:
      "An after-hours AI receptionist for Australian emergency trades. Forward your line, and the AI answers instantly, triages emergencies (like burst hot water vs. dripping taps), books jobs, and sends SMS summaries to the business owner.",
    hyperlink: "https://evercall.app",
    tags: ["Voice AI", "Twilio", "LLMs", "Real-time", "SaaS"],
    imageUrl: evercallImg,
  },
  {
    title: "VibeFrames",
    description:
      "An agentic video composition engine built on a custom Mastra Harness. The agent orchestrates LLM tools and skills to mutate complex timeline state and streams real-time UI updates back through the Vercel AI SDK — a working answer to \"what does an agent that edits video actually look like?\"",
    hyperlink: "https://vibeframes.vercel.app",
    githubUrl: "https://github.com/akashp1712/vibeframes",
    tags: ["Mastra Harness", "Vercel AI SDK", "Agentic", "Next.js", "Streaming"],
    imageUrl: vibeframesImg,
  },
  {
    title: "Call GPT — Generative AI Phone Calling",
    description:
      "A toolkit for building agentic phone calls: Twilio Media Streams wired to an LLM with real-time speech-to-text and text-to-speech. This is where I learned the hard problems in voice — latency, barge-in, turn-taking — the ones no demo warns you about.",
    hyperlink: "https://github.com/akashp1712/call-gpt",
    tags: ["Voice AI", "Twilio", "Real-time", "Node.js", "LLMs"],
    imageUrl: callGptImg,
  },
  {
    title: "Paymint",
    description:
      "A drop-in Paddle payments integration for indie developers — turning days of billing-API wrangling into minutes. Handles checkout, webhooks, and subscription state so you can ship the product instead of the plumbing.",
    hyperlink: "https://paymint.dev",
    tags: ["Payments", "Paddle", "SaaS", "TypeScript", "DX"],
    imageUrl: paymintImg,
  },
] as const;

// Smaller shipped work — shown as a compact timeline under the flagship projects.
export const projectTimelineData = [
  {
    title: "AI SDK Patterns",
    description: "A reference library of production patterns for building with the Vercel AI SDK.",
    hyperlink: "https://ai-sdk-patterns.dev",
  },
] as const;

export const skillsData = [
  { name: "Agents", icon: React.createElement(FaRobot) },
  { name: "Mastra AI", icon: React.createElement(FaRobot) },
  { name: "LangChain", icon: React.createElement(SiChainlink) },
  { name: "Python", icon: React.createElement(FaPython) },
  { name: "TypeScript", icon: React.createElement(SiTypescript) },
  { name: "NextJS", icon: React.createElement(SiNextdotjs) },
  { name: "AWS", icon: React.createElement(FaAws) },
  { name: "Voice AI (LiveKit)", icon: React.createElement(FaMicrophone) },
] as const;
