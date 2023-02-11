import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { ChevronsRight } from 'react-feather';
import DragonImg from '../assets/dragon.png';

const Home = () => {
  return (
    <div id="main" className="w-full h-screen">
      <img
        className="w-full h-screen hidden md:flex md:object-cover md:object-right"
        src={DragonImg}
        alt=""
      />
      <div className="w-full h-screen absolute top-[70px] left-0 bg-stone-100/50">
        <div className="max-w-screen-md w-full h-full m-auto md:ml-20 lg:ml-48 px-8 flex flex-col justify-center items-start">
          <h3 className="font-medium text-gray-500 md:text-gray-100 text-lg sm:text-2xl tracking-tight md:mix-blend-exclusion">Hello there,</h3>
          <h1 className="pt-1 font-semibold text-4xl sm:text-5xl text-gray-800 md:text-gray-300 tracking-tighter md:mix-blend-exclusion">I'm Demi Hayashi</h1>
          <h3 className="font-['Source_Code_Pro'] flex pt-4 text-gray-800 md:text-gray-300 text-2xl sm:text-3xl md:mix-blend-exclusion">A
            <TypeAnimation
              sequence={[
                'software engineer',
                2000, // waits 2s
                'graphic designer',
                2000,
                'visual artist',
                2000
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: '1em', paddingLeft: '14px' }}
            />
          </h3>
          <p className="py-4 max-w-[500px] md:text-gray-300 md:mix-blend-exclusion">
            I am a full-stack software engineer living in Los Angeles with a passion for technologies. I love to build and design things like web applications, <a href="https://www.tokio-ramen.com/" target="_blank" className="home">branding for local businesses</a>, and even <a href="https://cargocollective.com/demihayashi/Propagation" target="_blank" className="home">sculptures</a>.
          </p>
          <div className="w-full flex items-center justify-between">
          <a href="#">
            <button type="submit" className="group w-[160px]">
              Download CV
              <span className="group-hover:ml-1 duration-300">
                <ChevronsRight size={15} className="ml-2" />
              </span>
            </button>
          </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;