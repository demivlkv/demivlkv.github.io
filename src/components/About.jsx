import { motion } from 'framer-motion';
import AboutImg from '../assets/me.webp';

const About = () => {
  return (
    <section id="about" className="container">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        viewport={{ once: true }}
      >
        About
      </motion.h2>
      <motion.div
        className="w-full flex flex-col md:flex-row justify-center items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.75 }}
        viewport={{ once: true }}
      >
        <div className="flex justify-center w-1/2 md:w-full pb-8 md:pr-12 md:pb-0 opacity-60 hover:opacity-100  transition-all ease-in duration-300">
          <img
            src={AboutImg}
            className="shadow-lg rounded-full"
            alt="Hi, I'm Demi!"
          />
        </div>
        <div>
          <p className="mb-5">
            My interest in coding began back in the early 2000s, when Geocities and MySpace were popular. I never thought that customizing a MySpace page would lead to teaching myself HTML, CSS, JavaScript, PHP, and b2/Greymatter/WordPress just to put together a blog. This inspired me to major in Fine Arts at the University of Florida, where I expanded my knowledge in graphic design, typography, color theory, digital imaging, and technology in art.
          </p>
          <p>
            When I'm not on my computer, I'm most likely traveling the world, playing video games, hiking, watching true-crime documentaries, or learning new languages like Java and Russian. :3
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;