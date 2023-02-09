import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { GitHub, Instagram, Linkedin, AtSign } from 'react-feather';

const Home = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover"
        src="https://images.unsplash.com/photo-1604845152150-79d128ac8817?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt=""
      />
      <div className="w-full h-screen absolute top-[70px] left-0 bg-white/50">
        <div className="max-w-[700px] w-full h-full m-auto flex flex-col justify-center items-center lg:items-start">
          <h2 className="text-gray-800 text-2xl sm:text-3xl">Hello there,</h2>
          <h1 className="pt-4 text-4xl sm:text-5xl font-semibold text-gray-800">I'm Demi Hayashi</h1>
          <h2 className="flex pt-4 text-gray-800 text-2xl sm:text-3xl">A
            <TypeAnimation
              sequence={[
                'software engineer',
                2000, // Waits 1s
                'graphic designer',
                2000, // Waits 2s
                'visual artist',
                2000
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: '1em', paddingLeft: '5px' }}
            />
          </h2>
          <div className="max-w-[200px] w-full pt-6 flex justify-between">
            <a href="#" className="py-3 px-5 rounded-md border-2">Download CV</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;