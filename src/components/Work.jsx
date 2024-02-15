import { motion } from 'framer-motion';
import WorkItem from './WorkItem';

import FastForward from './Icons/FastForward';

const icon = <FastForward />;

const data = [
  {
    year: 2024,
    title: 'Junior Software Engineer',
    company: 'Nexalure Technologies',
    company_url: 'https://nexalure.com/',
    duration: 'Jan 2024 - Present',
    details: () => (
      <ul>
        <li>{icon} Drive the development of efficient and maintainable code, leveraging expertise in TypeScript, React, Redux, NextJS, Node, MongoDB, and SCSS within a meticulously crafted component-based architecture tailored for contemporary web browsers</li>
        <li>{icon} Demonstrate proficiency in troubleshooting, debugging, and optimizing existing software applications by executing rigorous testing protocols to identify and resolve bugs and performance issues</li>
        <li>{icon} Collaborate within a team of 10 in Agile environment and provided help to other team members when needed; handled version control and resolved merge conflicts in Git</li>
        <li>{icon} Proactively participate in collaborative code reviews, cultivating a culture of excellence in code quality and knowledge sharing; actively contributed in stand-ups, estimations, sprint planning, and retrospectives</li>
      </ul>
    )
  },
  {
    year: 2020,
    title: 'Freelance Web Developer, Graphic Designer',
    company: 'Tokio Ramen',
    company_url: 'https://tokio-ramen.netlify.app/',
    duration: 'Mar 2020 - Jan 2024',
    details: () => (
      <ul>
        <li>{icon} Developed and redesigned a responsive front-end web application for a local ramen shop using JavaScript, Gatsby.js, GraphQL, Tailwind CSS, and Contentful CMS to attract more traffic and enhance user experience</li>
        <li>{icon} Worked closely with the client to create a cohesive and visually appealing brand identity by designing a new company logo, menus, and digital content</li>
        <li>{icon} Successfully built and maintained relationships with English-speaking and Japanese-speaking customers through bilingual communication skills</li>
        <li>{icon} Identified areas for improvement and implemented solutions to optimize website functionality and usability</li>
      </ul>
    )
  }
];

const Work = () => {
  return (
    <div id="work" className="max-w-screen-lg m-auto md:pl-20 px-8 py-24 sm:py-32">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h2>
      {data.map((item, i) => (
        <WorkItem
          key={i}
          year={item.year}
          title={item.title}
          company={item.company}
          company_url={item.company_url}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;