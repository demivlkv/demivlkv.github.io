import React from 'react';
import WorkItem from './WorkItem';

const data = [
  {
    year: 2022,
    title: 'Full-Stack Developer',
    company: 'Company',
    duration: 'Feb 2022 - Present',
    details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque perspiciatis, iste ipsa aliquid sequi magnam iusto quos sed a exercitationem earum. Tenetur itaque officiis molestiae eveniet, dicta eos vel cumque.'
  },
  {
    year: 2015,
    title: 'Frontend Developer',
    company: 'Company',
    duration: 'Mar 2015 - Present',
    details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque perspiciatis, iste ipsa aliquid sequi magnam iusto quos sed a exercitationem earum. Tenetur itaque officiis molestiae eveniet, dicta eos vel cumque.'
  }
];

const Work = () => {
  return (
    <div id="work" className="max-w-screen-md m-auto md:pl-20 px-8 py-32">
      <h1 className="pb-8 text-4xl font-medium text-center">Experience</h1>
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