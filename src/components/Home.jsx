import { motion } from 'framer-motion';
import ChevronsRight from './Icons/ChevronsRight';
import Greeting from './Greeting';

const Home = () => {
  return (
    <section id="main" className="w-full h-screen flex justify-center">
      <div className="w-full h-screen absolute top-[70px] left-0">
        <div className="max-w-screen-md w-full h-full m-auto px-8 flex flex-col justify-center items-start">
          <div className="intro">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Greeting />, I'm {" "}
              <span className="gradient">
                Demi
              </span>
              .
            </motion.h1>
            <motion.h1
              className="pt-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.75 }}
              viewport={{ once: true }}
            >
              I'm a {" "}
              <span className="gradient">
                software engineer
              </span>
              .
            </motion.h1>
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