import { motion } from 'framer-motion';
import WorkItem from './WorkItem';

import FastForward from './Icons/FastForward';

const icon = <FastForward />;

const data = [
  {
    year: 2020,
    title: 'Freelance Web Developer, Graphic Designer',
    company: 'Tokio Ramen',
    duration: 'Mar 2020 - Present',
    details: () => (
      <ul>
        <li>{icon} Developed and redesigned a responsive front-end web application for a local ramen shop using JavaScript, Gatsby.js, GraphQL, Tailwind CSS, and Contentful CMS to attract more traffic and enhance user experience</li>
        <li>{icon} Worked closely with the client to create a cohesive and visually appealing brand identity by designing a new company logo, menus, and digital content</li>
        <li>{icon} Successfully built and maintained relationships with English-speaking and Japanese-speaking customers through bilingual communication skills</li>
        <li>{icon} Identified areas for improvement and implemented solutions to optimize website functionality and usability</li>
      </ul>
    )
  },
  {
    year: 2015,
    title: 'Flight Attendant',
    company: 'Delta Air Lines',
    duration: 'Mar 2015 - Present',
    details: () => (
      <ul>
        <li>{icon} Rapidly responded to various medical and aircraft emergencies, utilizing strong problem-solving skills to resolve issues quickly and effectively</li>
        <li>{icon} Identified and resolved safety non-compliance issues in accordance with company policies and procedures, maintaining a safe environment for all crew and passengers</li>
        <li>{icon} Effectively communicated with customers and cabin crew in a professional and personable manner. Creating a positive and enjoyable flight experience for all passengers</li>
      </ul>
    )
  }
];

const Work = () => {
  return (
    <div id="work" className="max-w-screen-md m-auto md:pl-20 px-8 py-24 sm:py-32">
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
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;