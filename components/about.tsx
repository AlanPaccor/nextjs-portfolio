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
        I'm <span className="font-medium">Alan Paccor</span>, a bilingual developer with <span className="font-medium">5 years</span> of 
        experience in web and mobile development. I specialize in <span className="font-medium">React</span>, <span className="font-medium">React Native</span>, 
        <span className="font-medium"> Next.js</span>, and <span className="font-medium">Node.js</span>, creating responsive applications for multiple platforms.
      </p>
      
      <p>
        Currently pursuing a Computer Programming degree at <span className="font-medium">Southern Crescent</span> (2026) with plans 
        to complete a CS Bachelor's at <span className="font-medium">Mercer University</span>. Seeking a <span className="font-medium">full-time developer position</span> 
        where I can apply my cross-platform expertise while continuing my education.
      </p>
    </motion.section>
  );
}
