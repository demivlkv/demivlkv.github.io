import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

import ChevronsRight from './Icons/ChevronsRight';

const Home = ({ darkMode }) => {
  return (
    <section id="main" className="w-full h-screen flex justify-center">
      <div className="w-full h-screen absolute top-[70px] left-0 dark:bg-slate-800/30">
        <div className="max-w-screen-md w-full h-full m-auto px-8 flex flex-col justify-center items-start">
          <div className="intro">
          <motion.h3
            className=""
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Hi, I'm Demi.
          </motion.h3>
          <motion.h1
            className="pt-1"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            viewport={{ once: true }}
          >
            I am a {" "}
            <span className="bg-gradient-to-r from-rose-200 to-teal-200 inline-block text-transparent bg-clip-text dark:text-slate-100">
              software engineer
            </span>
            .
          </motion.h1>
          {/* <motion.h3
            className="font-['Source_Code_Pro'] flex pt-4 dark:text-slate-100 text-2xl sm:text-3xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            viewport={{ once: true }}
          >
            A
            <TypeAnimation
              sequence={[
                'software engineer',
                2000, // waits 2s
                'graphic designer',
                2000,
                'visual artist',
                2000
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: '1em', paddingLeft: '14px' }}
            /> 
          </motion.h3>
            */}
          </div>
          <motion.p
            className="py-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.25 }}
            viewport={{ once: true }}
          >
            I am a full-stack software engineer living in Los Angeles with a passion for technologies. I love to build and design things like web applications, <a href="https://www.tokio-ramen.com/" target="_blank" className="home">branding for local businesses</a>, and even <a href="https://cargocollective.com/demihayashi/Propagation" target="_blank" className="home">sculptures</a>.
          </motion.p>
          <motion.div
            className="w-full flex items-center justify-between"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            viewport={{ once: true }}
          >
            <a href="/Demi-Hayashi-CV.pdf">
              <button type="submit" className="group w-[160px]">
                Download CV
                <span className="group-hover:text-slate-400 group-hover:ml-1 duration-300">
                  <ChevronsRight size={15} className="ml-2" />
                </span>
              </button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;