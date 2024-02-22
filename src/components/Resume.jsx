import { motion } from 'framer-motion';

import Button from './Button';
import FastForward from './Icons/FastForward';

const Resume = () => {
  const icon = <FastForward />

  return (
    <section id="resume" className="container">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        viewport={{ once: true }}
      >
        Resume
      </motion.h2>
      <motion.article
        className="mb-12 flex flex-col justify-center items-center w-full h-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.75 }}
        viewport={{ once: true }}
      >
        <a href="/Demi-Hayashi-CV.pdf" aria-label="View my resume">
          <Button>Download CV</Button>
        </a>
      </motion.article>

      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 1 }}
        viewport={{ once: true }}
      >
        Technical Skills
      </motion.h2>
      <motion.article
        className="w-full sm:w-3/4 mx-auto grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 1.25 }}
        viewport={{ once: true }}
       >
        <div className="leading-loose">
          <h3 className="font-['Source_Code_Pro'] font-semibold text-lg md:text-xl tracking-tighter">Languages</h3>
          <p>{icon} JavaScript (ES6)</p>
          <p>{icon} TypeScript</p>
          <p>{icon} HTML5</p>
          <p>{icon} CSS3</p>
        </div>
        <div className="leading-loose">
          <h3 className="block font-['Source_Code_Pro'] font-semibold text-lg md:text-xl tracking-tighter">Technologies</h3>
          <p>{icon} ReactJS</p>
          <p>{icon} NextJS</p>
          <p>{icon} Redux</p>
          <p>{icon} NodeJS</p>
          <p>{icon} GraphQL</p>
          <p>{icon} REST APIs</p>
          <p>{icon} Tailwind CSS</p>
          <p>{icon} Bootstrap</p>
          <p>{icon} jQuery</p>
        </div>
        <div className="leading-loose">
          <h3 className="block font-['Source_Code_Pro'] font-semibold text-lg md:text-xl tracking-tighter">Database</h3>
          <p>{icon} MySQL</p>
          <p>{icon} MongoDB</p>
        </div>
        <div className="leading-loose">
          <h3 className="block font-['Source_Code_Pro'] font-semibold text-lg md:text-xl tracking-tighter">Tools</h3>
          <p>{icon} Git + GitHub</p>
          <p>{icon} Heroku</p>
          <p>{icon} Chrome Dev Tools</p>
          <p>{icon} Photoshop</p>
        </div>
      </motion.article>
    </section>
  );
};

export default Resume;