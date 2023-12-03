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
    title: "Studious LMS",
    description: "A Learning Managment System that allows you to either sell of purchase courses depending on permissions",
    tags: ["React", "Server Actions", "Prisma", "Stripe", "Tailwind", "MySQL"],
    image: {
      src: rmtdevImg,
      width: 2940, // Provide the actual width of your image,
      height: 1494, // Provide the actual height of your image,
    },
    link: "https://studious-lms-proj.vercel.app/",
  },
  {
    title: "Better Trello",
    description: "A project managment tool that works for any type of project, workflow, or team",
    tags: ["Next 13", "React", "Stripe", "Mux", "Prisma", "Tailwind", "MySQL"],
    image: {
      src: wordanalyticsImg,
      width: 2940, // Provide the actual width of your image,
      height: 1502, // Provide the actual height of your image,
    },
    link: "https://new-better-trello.vercel.app/",
  },
  {
    title: "Alan's Ecommerce",
    description:
      "An ecommerce website that has all the basic functions and necessities and could be made into much more",
    tags: ["React", "Next.js", "Mongo", "Tailwind", "Styled Components"],
    image: {
      src: corpcommentImg,
      width: 2940, // Provide the actual width of your image,
      height: 1912, // Provide the actual height of your image,
    },
    link: "https://easystopshopforyou.vercel.app/",
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
  "Python",,
] as const;
