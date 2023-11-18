"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        My name is <span className="font-medium">Alan Paccor</span>. I was born in{" "}
        <span className="font-medium">Miami, Florida</span>. I am Argentine and fluent in{" "}
        <span className="font-medium">Spanish</span> and <span className="font-medium">English</span>. I spent most of my childhood in{" "}
        <span className="font-medium">Kissimmee, Florida</span> after moving there in 2nd grade,
        but later relocated to <span className="font-medium">Georgia</span> at the end of 8th grade.
      </p>

      <p className="mb-3">
        Throughout my life, I've never liked the idea of spending time on something I found boring.
        I always had hobbies that I could spend hours on. Three things that have stuck with me
        my whole life are playing soccer, playing video games.
      </p>

      {/* Add your coding journey and tech stack information here */}
      <p>
        After  finishing my bootcamp for{" "}
        <span className="font-medium">Full-Stack Developers</span>, I decided to pursue my
        passion for programming. I started to work on my own projects and learned{" "}
        <span className="font-medium">more than what I did in class and got comfortable</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Tailwind. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog or soccer. I also enjoy{" "}
        <span className="font-medium">learning new things</span>.
      </p>
    </motion.section>
  );
}
