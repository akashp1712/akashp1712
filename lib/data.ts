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

export const experiencesData = [
  {
    title: "SDE I - Apps Scanner, IntelSecurity (McAfee)",
    location: "Bangalore, India",
    description:
      "I worked as a backend developer for Mobile Apps scanner services.",
    icon: React.createElement(CgWorkAlt),
    date: "June 2016 – Sep 2017",
  },
  {
    title: "SDE I - VPN client App, McAfee",
    location: "Bangalore, India",
    description:
      "I worked as an Android developer for 1 year.",
    icon: React.createElement(CgWorkAlt),
    date: "Oct 2017 – Dec 2018",
  },
  {
    title: "SDE II - Secure Home Platform, McAfee",
    location: "Bangalore, India",
    description:
      "I worked as a Software Engineer in Cloud and Android for the Secure Home Platform for the customer.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2019 – Sep 2021",
  },
  {
    title: "SDE II - Dev experience, Appstore, Amazon",
    location: "Bangalore, India",
    description:
      "Worked as a Software Engineer in Appstore, improving certification process for devlopers and increasing visibility through promotion portal.",
    icon: React.createElement(CgWorkAlt),
    date: "Oct 2021 - Aug 2023",
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
  "HTML",
  "CSS",
  "JavaScript",
  // "TypeScript",
  "ReactJS",
  "NextJS",
  "Git",
  // "Tailwind",
  //"Prisma",
  "PostgreSQL",
  "Python",
  "FastAPI",
  //"Framer Motion",
  "Java",
  "AWS"
] as const;
