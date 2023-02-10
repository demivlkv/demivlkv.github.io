import React from 'react';
import AboutPic from '../assets/avatar.png';

const About = () => {
  return (
    <div id="about" className="max-w-screen-lg m-auto md:pl-20 px-8 py-24 sm:py-32">
      <h2>About</h2>
      <div className="mx-auto w-full max-w-screen-md flex flex-col md:flex-row justify-center items-center">
        <div className="flex justify-center w-full pb-8 pr-0 md:pr-12 md:pb-0">
          <img src={AboutPic} className="shadow-lg rounded-full" alt="Hi, I'm Demi!" />
        </div>
        <div>
          <p className="pb-8">My interest in coding began back in the early 2000s, when Geocities and MySpace were popular. I never thought that customizing a MySpace page would lead to teaching myself HTML, CSS, JavaScript, PHP, and b2/WordPress/Greymatter just to put together a blog.</p>
          <p>When I'm not coding, I'm most likely traveling the world with my current job as a flight attendant, taking care of my house plants, hiking, watching true-crime documentaries, or learning new languages like Java and Russian. :3</p>
        </div>
      </div>
    </div>
  );
};

export default About;