import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import pickPalWeb from "@/public/pick-pal-web.png";
import pickPalMobile from "@/public/pick-pal-app.png";
import studystar from "@/public/study-star.png";


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
      "Started my programming journey through self-study, mastering HTML, CSS, and JavaScript fundamentals. Built several small projects to apply my learning and developed a strong foundation in web development.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Junior Developer Internship",
    location: "Atlanta, GA",
    description:
      "Worked on front-end development for local businesses, implementing responsive designs and improving website performance. Gained practical experience with React and version control systems.",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
  {
    title: "Full-Stack Developer Bootcamp",
    location: "Orlando, FL",
    description:
      "Completed an intensive bootcamp focused on modern web technologies. Developed full-stack applications using the MERN stack and collaborated with peers on group projects that simulated real-world development environments.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Freelance Mobile Developer",
    location: "Remote",
    description:
      "Designed and developed mobile applications for small businesses using React Native and Expo. Implemented user authentication, payment processing, and real-time data synchronization features.",
    icon: React.createElement(FaReact),
    date: "2023",
  },
  {
    title: "Southern Crescent Student",
    location: "McDonough, GA",
    description:
      "Currently pursuing an Associate's degree in Computer Programming while applying academic concepts to real-world projects. Focusing on advanced programming concepts, database design, and software architecture.",
    icon: React.createElement(LuGraduationCap),
    date: "2024 - 2026",
  },
  {
    title: "Optima-Web Creations",
    location: "McDonough, GA",
    description:
      "Founded and operate a web development business creating custom solutions for clients. Manage the entire development lifecycle from requirements gathering to deployment and maintenance. Specialize in responsive, accessible websites with modern UI/UX.",
    icon: React.createElement(FaReact),
    date: "2024",
  },
  {
    title: "SAAS Project Manager",
    location: "Atlanta, GA",
    description:
      "Managed a team of developers and designers to deliver high-quality software solutions for clients. Coordinated with stakeholders to ensure project goals were met and delivered on time.",
    icon: React.createElement(FaReact),
    date: "Present",
  },
] as const;

export const projectsData = [
  {
    title: "PickPal AI",
    description: "A sophisticated web platform that leverages AI to help users make informed sports betting decisions with personalized recommendations.",
    tags: ["Next.js", "Server Actions", "Tailwind", "MySQL", "Vercel"],
    image: {
      src: pickPalWeb,
      width: 2940,
      height: 1494,
    },
    link: "https://pickpalai.com/",
  },
  {
    title: "PickPal AI Mobile App",
    description: "The mobile companion to PickPal AI, offering on-the-go sports betting assistance with real-time odds and AI-powered predictions.",
    tags: ["React Native", "Expo", "Firebase", "MongoDB", "OpenAI"],
    image: {
      src: pickPalMobile,
      width: 2940,
      height: 1912,
    },
    link: "https://github.com/AlanPaccor/PickPalAI-APP",
  },
  {
    title: "Article Bite",
    description: "An educational tool that transformed articles, files, and YouTube videos into digestible study note cards for enhanced learning.",
    tags: ["React", "Firebase", "Tailwind", "Stripe", "Resend"],
    image: {
      src: studystar,
      width: 2940,
      height: 1502,
    },
    link: "https://vercel.com/alan-paccors-projects/studystar/4oWnUXYaek16SJGDdzq3cbzZub64",
  },
  {
    title: "Optima-Web Creations",
    description: "A web development business that creates custom websites for clients, with each site built from scratch to meet specific requirements.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Responsive Design"],
    image: {
      src: wordanalyticsImg,
      width: 2940,
      height: 1500,
    },
    link: "https://optima-web-creations.vercel.app/",
  },
  {
    title: "Studious LMS",
    description: "A comprehensive learning management system that allows instructors to create courses and track student progress through interactive lessons.",
    tags: ["React", "Next.js", "Prisma", "MySQL", "Tailwind"],
    image: {
      src: rmtdevImg,
      width: 2940,
      height: 1494,
    },
    link: "https://studious-lms-proj.vercel.app/",
  },
  {
    title: "Easy Stop Shop",
    description: "An online marketplace with integrated AI chatbot support to assist customers with product inquiries and purchasing decisions.",
    tags: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
    image: {
      src: corpcommentImg,
      width: 2940,
      height: 1912,
    },
    link: "https://easystopshopforyou.vercel.app/",
  },
] as const;

export const skillsData = [
  // Frontend
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Next.js",
  "Redux",
  "Tailwind CSS",
  "Material UI",
  "Framer Motion",
  "Responsive Design",
  
  // Backend
  "Node.js",
  "Express",
  "REST API",
  "GraphQL",
  "Socket.io",
  "JWT Authentication",
  
  // Databases
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Prisma",
  "Supabase",
  "Firebase",
  
  // DevOps & Tools
  "Git",
  "GitHub Actions",
  "CI/CD",
  "Docker",
  "Vercel",
  "AWS",
  
  // Mobile
  "Expo",
  "Android Studio",
  "iOS Development",
  "Push Notifications",
  
  // Testing
  "Jest",
  "React Testing Library",
  "Cypress",
  
  // Other
  "Agile Methodology",
  "UI/UX Design",
  "Figma",
  "SEO",
  "Accessibility",
  "Performance Optimization"
] as const;
