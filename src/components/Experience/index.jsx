import { motion } from 'framer-motion';
import WorkItem from './WorkItem';

import FastForward from '../Icons/FastForward';

const icon = <FastForward />;

const data = [
  {
    year: 2024,
    title: 'Software Engineer',
    company: 'Nexalure Technologies',
    company_url: 'https://nexalure.com/',
    duration: 'Jan 2024 - Present',
    details: () => (
      <ul>
        <li>{icon} Lead the development of front-end and full-stack solutions using TypeScript, React, Redux, NextJS, Node, MongoDB, and SCSS, creating dynamic, responsive user interfaces optimized for contemporary web browsers</li>
        <li>{icon} Collaborate in a 9-member in Agile team, participating in stand-ups, sprint planning, estimation, and retrospectives, resulting in a 15% increase through continuous process improvement and effective teamwork</li>
        <li>{icon} Manage Git for version control, resolving complex merge conflicts to ensure smooth and efficient team collaboration in a fast-paced development environment</li>
        <li>{icon} Actively contribute in code reviews and conduct pair programming, fostering a collaboration, providing constructive feedback, and improving code quality and maintainability</li>
      </ul>
    )
  },
  {
    year: 2020,
    title: 'Freelance Web Developer',
    company: 'Tokio Ramen',
    company_url: 'https://tokio-ramen.netlify.app/',
    duration: 'Mar 2020 - Dec 2023',
    details: () => (
      <ul>
        <li>{icon} Engineered and revamped a dynamic front-end web application for a local ramen shop using JavaScript, Gatsby.js, GraphQL, Tailwind CSS, and Contentful, increasing website traffic by 40% and enhancing user engagement by 50%</li>
        <li>{icon} Revamped company's visual identity with a new logo, menus, and digital content, resulting in a 20% increase in brand recognition</li>
        <li>{icon} Improved website functionality by 25% through key solutions, enhancing user experience and increasing customer satisfaction</li>
        <li>{icon} Build and maintain relationships with English-speaking and Japanese-speaking customers through bilingual communication skills</li>
      </ul>
    )
  }
];

const Experience = () => {
  return (
    <section id="experience" className="container">
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
          {...item}
        />
      ))}
    </section>
  );
};

export default Experience;