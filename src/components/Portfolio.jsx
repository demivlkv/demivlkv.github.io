import React from 'react';
import Project from './Project';

const Portfolio = () => {
  return (
    <div id="projects" className="max-w-screen-lg m-auto md:pl-20 px-8 py-24 sm:py-32">
      <h2>Projects</h2>
      <p className="mb-8 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ad accusamus nobis tempore, optio possimus ratione sunt culpa, explicabo iusto labore dolorum impedit cum aliquid ex placeat error dolore rerum.
      </p>
      
      <Project />
    </div>
  );
};

export default Portfolio;