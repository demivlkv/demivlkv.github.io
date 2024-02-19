import { motion } from 'framer-motion';
import Button from './Button';
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
            I am a full-stack software engineer living in Los Angeles with a passion for technologies.
            I enjoy creating and designing various projects, such as web applications, <a href="https://tokio-ramen.netlify.app/" target="_blank" className="home">branding for local businesses</a>, and even <a href="https://cargocollective.com/demihayashi/Propagation" target="_blank" className="home">sculptures</a>.
            At present, I provide top-tier web and software solutions at <a href="https://nexalure.com/"  target="_blank" className="home">Nexalure Technologies</a>.
          </motion.p>
          <motion.div
            className="w-full flex items-center justify-between"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            viewport={{ once: true }}
          >
            <a href="/Demi-Hayashi-CV.pdf">
              <Button>Download CV</Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;