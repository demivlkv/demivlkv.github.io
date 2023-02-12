import React from 'react';
import { motion } from 'framer-motion';
import Project from './Project';

const Portfolio = () => {
  return (
    <div id="projects" className="max-w-screen-lg m-auto md:pl-20 px-8 py-24 sm:py-32">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>
      <motion.p
        className="mb-8 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.75 }}
        viewport={{ once: true }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ad accusamus nobis tempore, optio possimus ratione sunt culpa, explicabo iusto labore dolorum impedit cum aliquid ex placeat error dolore rerum.
      </motion.p>
      
      <Project />
    </div>
  );
};

export default Portfolio;