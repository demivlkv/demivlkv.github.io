import { motion } from 'framer-motion';

import ExternalLink from '../Icons/ExternalLink';
import GitHub from '../Icons/GitHub';
import TripTideImg from '../../assets/portfolio/trip-tide.png';
import SoundStreamImg from '../../assets/portfolio/soundstream.png';
import TokioImg from '../../assets/portfolio/tokio-ramen.png';
import BookNookv2Img from '../../assets/portfolio/book-nook-v2.png';
// import BookNookv1Img from '../../assets/portfolio/book-nook-v1.png';
// import TechBlogImg from '../../assets/portfolio/tech-blog.png';
import FindAStoryImg from '../../assets/portfolio/find-a-story.png';
import WeatherImg from '../../assets/portfolio/weather-dashboard.png';

const projects = [
  {
    title: 'Tokio Ramen',
    thumbnail: TokioImg,
    description: 'A freelance project to revamp the website of Tokio Ramen - a local ramen business in Boynton Beach, FL',
    technologies: 'GatsbyJS / Contentful / GraphQL / Tailwind CSS',
    url: 'https://tokio-ramen.netlify.app/',
    github: 'https://github.com/demivlkv/tokio-ramen'
  },
  {
    title: 'Trip Tide',
    thumbnail: TripTideImg,
    description: 'A MERN + GraphQL stack travel application intended to be a one-stop shop for travel enthusiasts. Users can discuss all-things travel.',
    technologies: 'MongoDB / ExpressJS / ReactJS / NodeJS',
    url: 'https://trip-tide.herokuapp.com/',
    github: 'https://github.com/demivlkv/trip-tide'
  },
  {
    title: 'Book Nook v2',
    thumbnail: BookNookv2Img,
    description: 'A collaborative project to build a MERN stack social media site based off the original Book Nook project',
    technologies: 'MongoDB / ExpressJS / ReactJS / NodeJS',
    url: 'https://book-nook-v2.herokuapp.com/',
    github: 'https://github.com/demivlkv/book-nook-v2'
  },
  {
    title: 'Weather Dashboard',
    thumbnail: WeatherImg,
    description: 'A weather dashboard application built with OpenWeather API',
    technologies: 'ReactJS / TypeScript / Tailwind CSS',
    url: 'https://creative-gaufre-7a5162.netlify.app/',
    github: 'https://github.com/demivlkv/weather-dashboard'
  },
  {
    title: 'Sound Stream',
    thumbnail: SoundStreamImg,
    description: 'A simple Spotify clone',
    technologies: 'ReactJS / ExpressJS / Tailwind CSS / Spotify API',
    url: 'https://soundstream.herokuapp.com/',
    github: 'https://github.com/demivlkv/soundstream'
  },
  // {
  //     title: 'Book Nook v1',
  //     thumbnail: BookNookv1Img,
  //     description: 'A collaborative effort to provide a platform for all parents to discuss books for their young readers',
  //     technologies: 'JavaScript / HandlebarsJS / NodeJS / MySQL',
  //     url: 'https://booknook-stars.herokuapp.com/',
  //     github: 'https://github.com/demivlkv/book-nook'
  // },
  // {
  //   title: 'Tech Blog',
  //   thumbnail: TechBlogImg,
  //   description: 'A full-stack CMS-style blog site where users can create an account, publish articles, blog posts, & thoughts',
  //   technologies: 'JavaScript / NodeJS / MySQL',
  //   url: 'https://frozen-sierra-30429.herokuapp.com/',
  //   github: 'https://github.com/demivlkv/tech-blog'
  // },
  {
    title: 'Find-A-Story',
    thumbnail: FindAStoryImg,
    description: 'A collaborative project to develop a media database application using the Open Movie Database API & Google Books API',
    technologies: 'JavaScript / jQuery /  HTML / CSS',
    url: 'https://demivlkv.github.io/Find-A-Story',
    github: 'https://github.com/demivlkv/Find-A-Story'
  }
];

const animateProject = {
  hidden: { opacity: 0, y: 50 },
  animate: {
      opacity: 1, 
      y: 0,
      transition: {
          delay: 0.75,
          duration: 0.4,
          type: 'tween',
          delayChildren: 0.5,
          staggerChildren: 0.4
      }
  }
};

const animateProjectItem = {
  hidden: { opacity: 0, y: 50 },
  animate: { 
      y: 0,
      opacity: 1,
      transition: {
          duration: 0.4,
          type: 'tween'
      }
  }
};

const Project = () => {
  return (
    <motion.div
      className="w-full flex justify-center items-center"
      variants={animateProject}
      initial="hidden"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <ul className="list-none flex flex-row flex-wrap justify-center gap-8">
        {projects.map((project) => (
          <motion.li
            key={project}
            className="group w-full md:max-w-xs"
            variants={animateProjectItem}
            viewport={{ once: true }}
          >
            <div className="w-full h-full flex flex-col items-stretch overflow-hidden bg-white dark:bg-neutral-900 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg dark:shadow-neutral-700 opacity-70 hover:opacity-100 transition-all duration-300 ease-in cursor-pointer">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover md:h-auto"
              />

              <div class="w-full h-full flex flex-col justify-between p-4">

                <div className="flex justify-between align-baseline">
                  <div>
                    <h3 className="mb-3 font-semibold text-emerald-300 dark:text-teal-200 text-xl uppercase tracking-tighter">
                      {project.title}
                    </h3>
                  </div>
                  <div>
                    <a href={project.url} target="_blank">
                      <button className="project-links"><ExternalLink /></button>
                    </a>
                    <a href={project.github} target="_blank">
                      <button className="project-links"><GitHub /></button>
                    </a>
                  </div>
                </div>
                <p className="mb-2 text-sm leading-snug">
                  {project.description}
                </p>
                <p className="mb-2 font-['Source_Code_Pro'] text-blue-900 dark:text-rose-200 text-xs text-center tracking-tight py-2">
                  {project.technologies}
                </p>
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Project;