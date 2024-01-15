import { motion } from 'framer-motion';

import ChevronsRight from './Icons/ChevronsRight';
import FastForward from './Icons/FastForward';

const Resume = ({ darkMode }) => {
  const icon = <FastForward />

  return (
    <section id="resume" className="relative w-full h-screen">
      <div className="w-full h-screen absolute top-0 left-0 bg-stone-100/60 dark:bg-slate-800/30">
        <div className="max-w-screen-lg m-auto md:pl-20 px-8 py-24 sm:py-32">
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
            <a href="/Demi-Hayashi-CV.pdf">
              <button type="submit" className="group w-[160px]">
                Download CV
                <span className="group-hover:text-slate-400 group-hover:ml-1 duration-300">
                  <ChevronsRight />
                </span>
              </button>
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
              <p>{icon} jQuery</p>
              <p>{icon} NodeJS</p>
              <p>{icon} GraphQL</p>
              <p>{icon} REST APIs</p>
              <p>{icon} Tailwind CSS</p>
              <p>{icon} Bootstrap</p>
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
        </div>
      </div>
    </section>
  );
};

export default Resume;