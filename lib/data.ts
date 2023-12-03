import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "Self Learning",
    location: "McDonough, GA",
    description:
      "I started teaching myself the basics when I was in senior year in High School.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Full-Stack Developer Bootcamp",
    location: "Orlando, FL",
    description:
      "I joined a bootcamp so I could learn at a faster pace since I wanted to know how to do more and more things.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Full-Stack Developer",
    location: "McDonough, GA",
    description:
      "I'm now working on my own projects while looking for opportunities to advance in my career.",
    icon: React.createElement(FaReact),
    date: "present",
  },
] as const;

export const projectsData = [
  {
    title: "Alan's Ecommerce",
    description:
      "I worked on this project for a week to know the fundamentals of building a working ecommerce website.",
    tags: ["React", "Next.js", "Mongo", "Tailwind", "Styled Components"],
    image: {
      src: corpcommentImg,
      width: 100, // Provide the actual width of your image,
      height: 100, // Provide the actual height of your image,
    },
    link: "https://easystopshopforyou.vercel.app/",
  },
  {
    title: "Example",
    description: "Example Fill In...",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    image: {
      src: rmtdevImg,
      width: 100, // Provide the actual width of your image,
      height: 100, // Provide the actual height of your image,
    },
    link: "https://example.com",
  },
  {
    title: "Example",
    description: "Example Fill In...",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    image: {
      src: wordanalyticsImg,
      width: 100, // Provide the actual width of your image,
      height: 100, // Provide the actual height of your image,
    },
    link: "https://example.com",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
