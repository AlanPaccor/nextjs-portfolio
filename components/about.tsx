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
  Hi, I'm <strong style={{ fontStyle: 'italic' }}>Alan Paccor</strong>. I was born in 
  <strong style={{ fontStyle: 'italic' }}>Miami, Florida</strong>, and am fluent in both 
  <strong style={{ fontStyle: 'italic' }}>Spanish</strong> and <strong style={{ fontStyle: 'italic' }}>English</strong>. 
  Raised in <strong style={{ fontStyle: 'italic' }}>Kissimmee, Florida</strong>, I later moved to 
  <strong style={{ fontStyle: 'italic' }}>Georgia</strong>. My journey into programming began after 
  completing a <strong style={{ fontStyle: 'italic' }}>Full-Stack Developer bootcamp</strong>. I have been coding for 
  3 years and have worked with clients, loving every moment of my journey so far. I have a passion for 
  <em>problem-solving</em> and am proficient in <strong style={{ fontStyle: 'italic' }}>React, Next.js, Node.js, and MongoDB</strong>. 
  Additionally, I am familiar with <strong style={{ fontStyle: 'italic' }}>TypeScript</strong> and 
  <strong style={{ fontStyle: 'italic' }}>Tailwind</strong>. I am eager to learn new technologies and am 
  currently seeking a <strong style={{ fontStyle: 'italic' }}>full-time software developer position</strong>.
</p>

<p>
  Outside of coding, I enjoy <em>gaming</em>, watching movies, playing with my dog, and <em>soccer</em>. 
  I am passionate about <strong style={{ fontStyle: 'italic' }}>continuous learning</strong>.
</p>





    </motion.section>
  );
}
