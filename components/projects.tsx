"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const [showAll, setShowAll] = useState(false);
  
  // Show only the first 2 projects initially
  const visibleProjects = showAll ? projectsData : projectsData.slice(0, 2);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {/* First two projects are always visible */}
        {projectsData.slice(0, 2).map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
        
        {/* Additional projects with animation */}
        <AnimatePresence>
          {showAll && (
            <>
              {projectsData.slice(2).map((project, index) => (
                <motion.div
                  key={index + 2}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.1, // Stagger the animations
                    ease: "easeOut" 
                  }}
                >
                  <Project {...project} />
                </motion.div>
              ))}
            </>
          )}
        </AnimatePresence>
      </div>
      
      {projectsData.length > 2 && (
        <motion.div 
          className="mt-8 flex justify-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-gray-900 text-white px-7 py-3 rounded-full focus:outline-none hover:bg-gray-800 transition dark:bg-white/10 dark:hover:bg-white/20 flex items-center gap-2"
          >
            <span>{showAll ? "Show Less" : "Show More"}</span>
            <motion.span
              animate={{ rotate: showAll ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {showAll ? "↑" : "↓"}
            </motion.span>
          </button>
        </motion.div>
      )}
    </section>
  );
}
