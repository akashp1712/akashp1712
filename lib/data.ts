import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import evercallImg from "@/public/evercall.png";
import vibeframesImg from "@/public/vibeframes.png";
import oncecueImg from "@/public/oncecue.png";
import patternsImg from "@/public/api-sdk-patterns.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Work",
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
import { SiAmazon, SiMcafee, SiBroadcom } from "react-icons/si";
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
    title: "Content Studio",
    description:
      "Multi-turn agent workspace for Marketing Cloud. A marketer states a goal; the runtime produces campaign content and stops for approval on consequential steps.",
    hyperlink: "https://www.salesforce.com/marketing/",
    tags: ["Agent runtimes", "React", "FastAPI", "Mastra", "HITL"],
    kind: "Salesforce",
    cadence: "Day job",
    outcome: "Harness primitives: threads, observational memory, skills, tools, image generation, approvals.",
    cta: "Salesforce Marketing",
    imageUrl: null,
  },
  {
    title: "Evercall",
    description:
      "AI call handler for Australian emergency plumbers. Catches missed calls, triages the job, books the next step, SMSes the owner.",
    hyperlink: "https://evercall.app",
    tags: ["Voice AI", "LiveKit", "WebRTC", "Tool calling"],
    kind: "Independent",
    cadence: "Low-touch",
    outcome: "Production voice agent for the call that happens when no one can answer.",
    cta: "Open Evercall",
    imageUrl: evercallImg,
  },
  {
    title: "OneCue",
    description:
      "Decision layer for coding agents. Surfaces the prior decision a change could break, with the reason, then stays silent when nothing applies.",
    hyperlink: "https://onecue.sh",
    tags: ["Coding agents", "Decision memory", "CLI", "Agent skills"],
    kind: "Independent",
    cadence: "Low-touch",
    outcome: "Gives agents the decisions behind a codebase, not another blob of context.",
    cta: "Open OneCue",
    imageUrl: oncecueImg,
  },
  {
    title: "VibeFrames",
    description:
      "Agentic video workspace. A Mastra harness turns a brief into an editable Remotion composition with typed, inspectable tool calls.",
    hyperlink: "https://vibeframes.vercel.app",
    tags: ["Agent harness", "Mastra", "Remotion", "TypeScript"],
    kind: "Independent",
    cadence: "Low-touch",
    outcome: "An agent that changes a real artifact, not a chat transcript.",
    cta: "Open VibeFrames",
    imageUrl: vibeframesImg,
  },
  {
    title: "AI SDK Patterns",
    description:
      "Open-source TypeScript patterns for the AI SDK, a composer that turns a selection into a Next.js app, and a 16-chapter course on building agents from first principles.",
    hyperlink: "https://ai-sdk-patterns.dev",
    tags: ["AI SDK", "TypeScript", "Next.js", "Open source"],
    kind: "Open source",
    cadence: "Low-touch",
    outcome: "16 installable patterns plus a learn track. Still maintained.",
    cta: "Open site",
    imageUrl: patternsImg,
  },
] as const;

export const skillsData = [
  { name: "Voice AI (LiveKit)", icon: React.createElement(FaMicrophone) },
  { name: "Agents", icon: React.createElement(FaRobot) },
  { name: "Python", icon: React.createElement(FaPython) },
  { name: "TypeScript", icon: React.createElement(SiTypescript) },
  { name: "NextJS", icon: React.createElement(SiNextdotjs) },
  { name: "AWS", icon: React.createElement(FaAws) },
] as const;
