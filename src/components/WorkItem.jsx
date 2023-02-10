import React from 'react';

const WorkItem = ({ year, title, company, duration, details }) => {
  return (
    <ol className="flex flex-col md:flex-row relative border-l border-stone-300">
      <li className="mb-10 ml-4">
        <div className="absolute mt-1.5 -left-1.5 w-3 h-3 bg-stone-300 rounded-full" />

        <p className="flex flex-wrap flex-row justify-start items-center text-xs md:text-sm">
          <span className="inline-block py-1 px-2 mr-4 font-medium text-white bg-slate-600 rounded-md">{year}</span>
          <span className="mr-1 text-base md:text-lg font-medium text-indigo-800">{title}</span>
          @ <span className="ml-1 text-base md:text-lg font-medium text-slate-600">{company}</span>
        </p>

        <p className="mt-3 text-xs sm:text-sm font-normal text-stone-400">{duration}</p>

        <p className="my-2 font-normal">{details}</p>
      </li>
    </ol>
  );
};

export default WorkItem;