import React from 'react';
import { ChevronsRight, FastForward } from 'react-feather';

const Resume = () => {
  const icon = <FastForward className="inline-flex justify-center items-center pb-1 text-slate-400" size={15} />

  return (
    <div id="resume" className="max-w-screen-lg m-auto md:pl-20 px-8 py-24 sm:py-32">
      <h2>Resume</h2>
      <div className="mb-12 flex flex-col justify-center items-center w-full h-full">
        <a href="#">
          <button type="submit" className="group w-[160px]">
            Download CV
            <span className="group-hover:ml-1 duration-300">
              <ChevronsRight size={15} className="ml-2" />
            </span>
          </button>
        </a>
      </div>

      <h2>Technical Skills</h2>
      <div className="w-[90%] mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="leading-loose">
          <h3 className="block font-['Source_Code_Pro'] font-medium text-xl text-stone-400 tracking-tight">Front-end</h3>
          {icon} ReactJS<br />
          {icon} JavaScript<br />
          {icon} HTML5<br />
          {icon} CSS3<br />
          {icon} jQuery
        </div>
        <div className="leading-loose">
          <h3 className="block font-['Source_Code_Pro'] font-medium text-xl text-stone-400 tracking-tight">Back-end</h3>
          {icon} NodeJS<br />
          {icon} ExpressJS<br />
          {icon} PWAs<br />
          {icon} REST APIs<br />
          {icon} Sequelize<br />
          {icon} MVC
        </div>
        <div className="leading-loose">
          <h3 className="block font-['Source_Code_Pro'] font-medium text-xl text-stone-400 tracking-tight">Database</h3>
          {icon} MySQL<br />
          {icon} MongoDB
        </div>
        <div className="leading-loose">
          <h3 className="block font-['Source_Code_Pro'] font-medium text-xl text-stone-400 tracking-tight">Tools</h3>
          {icon} Git + GitHub<br />
          {icon} Heroku<br />
          {icon} Chrome Dev Tools<br />
          {icon} Photoshop
        </div>
      </div>
    </div>
  );
};

export default Resume;