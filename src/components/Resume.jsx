import React from 'react';
import { ChevronsRight, FastForward } from 'react-feather';

const Resume = () => {
  const icon = <FastForward className="inline-flex justify-center items-center pb-1 text-stone-300" size={15} />
  return (
    <div id="resume" className="max-w-screen-lg m-auto md:pl-20 px-8 py-32">
      <h1 className="mb-8 text-4xl font-medium text-center">Resume</h1>
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="">
          <a href="#">
            <button type="submit" className="group w-[178px] mx-auto mt-4 mb-8 flex items-center pl-6 py-2 border-2 border-gray-300 rounded hover:bg-[#a6ffdd1e] hover:border-[#a6ffdd]">
              Download CV
              <span className="group-hover:ml-1 duration-300">
                <ChevronsRight className="ml-2" />
              </span>
            </button>
          </a>
        </div>
      </div>

      <h1 className="mt-16 mb-8 text-4xl font-medium text-center">Technical Skills</h1>
      <div className="w-[90%] mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div>
          <h3 className="text-xl font-medium block text-[#ddd]">Front-end</h3>
          {icon} ReactJS<br />
          {icon} JavaScript<br />
          {icon} HTML5<br />
          {icon} CSS3<br />
          {icon} jQuery
        </div>
        <div>
          <h3 className="text-xl font-medium block text-[#ddd]">Back-end</h3>
          {icon} NodeJS<br />
          {icon} ExpressJS<br />
          {icon} PWAs<br />
          {icon} REST APIs<br />
          {icon} Sequelize<br />
          {icon} MVC
        </div>
        <div>
          <h3 className="text-xl font-medium block text-[#ddd]">Database</h3>
          {icon} MySQL<br />
          {icon} MongoDB
        </div>
        <div>
          <h3 className="text-xl font-medium block text-[#ddd]">Tools</h3>
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