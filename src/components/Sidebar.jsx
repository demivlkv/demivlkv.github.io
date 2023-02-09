import React, { useState } from 'react';
import { Menu, Home, User, Briefcase, Grid, File, Send } from 'react-feather';

const Sidebar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <Menu onClick={handleNav} className="absolute top-4 right-4 z-[99] md:hidden" />
      {
        nav ? (
          <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
            <a href="#main" className="w-3/4 m-2 p-4 flex justify-center items-center bg-gray-100 rounded-full shadow-lg shadow-gray-400 cursor-pointer transition-all ease-in duration-300">
              <Home size={20} />
              <span className="pl-4">Home</span>
            </a>
            <a href="#about" className="w-3/4 m-2 p-4 flex justify-center items-center bg-gray-100 rounded-full shadow-lg shadow-gray-400 cursor-pointer transition-all ease-in duration-300">
              <User size={20} />
              <span className="pl-4">About</span>
            </a>
            <a href="#work" className="w-3/4 m-2 p-4 flex justify-center items-center bg-gray-100 rounded-full shadow-lg shadow-gray-400 cursor-pointer transition-all ease-in duration-300">
              <Briefcase size={20} />
              <span className="pl-4">Work</span>
            </a>
            <a href="#projects" className="w-3/4 m-2 p-4 flex justify-center items-center bg-gray-100 rounded-full shadow-lg shadow-gray-400 cursor-pointer transition-all ease-in duration-300">
              <Grid size={20} />
              <span className="pl-4">Projects</span>
            </a>
            <a href="#main" className="w-3/4 m-2 p-4 flex justify-center items-center bg-gray-100 rounded-full shadow-lg shadow-gray-400 cursor-pointer transition-all ease-in duration-300">
              <File size={20} />
              <span className="pl-4">Resume</span>
            </a>
            <a href="#contact" className="w-3/4 m-2 p-4 flex justify-center items-center bg-gray-100 rounded-full shadow-lg shadow-gray-400 cursor-pointer transition-all ease-in duration-300">
              <Send size={20} />
              <span className="pl-4">Contact</span>
            </a>
          </div>
        ) : (
          ''
        )
      }
      <div className="hidden md:block fixed top-1/4 z-10">
        <div className="flex flex-col">
          <a href="#main" className="rounded-full shadow-lg hover:text-white bg-gray-100 hover:bg-slate-400 shadow-gray-400 ml-4 my-2 p-4 cursor-pointer transition-all ease-in duration-300">
            <Home size={16} />
          </a>
          <a href="#about" className="rounded-full shadow-lg hover:text-white bg-gray-100 hover:bg-slate-400 shadow-gray-400 ml-4 my-2 p-4 cursor-pointer transition-all ease-in duration-300">
            <User size={16} />
          </a>
          <a href="#work" className="rounded-full shadow-lg hover:text-white bg-gray-100 hover:bg-slate-400 shadow-gray-400 ml-4 my-2 p-4 cursor-pointer transition-all ease-in duration-300">
            <Briefcase size={16} />
          </a>
          <a href="#projects" className="rounded-full shadow-lg hover:text-white bg-gray-100 hover:bg-slate-400 shadow-gray-400 ml-4 my-2 p-4 cursor-pointer transition-all ease-in duration-300">
            <Grid size={16} />
          </a>
          <a href="#main" className="rounded-full shadow-lg hover:text-white bg-gray-100 hover:bg-slate-400 shadow-gray-400 ml-4 my-2 p-4 cursor-pointer transition-all ease-in duration-300">
            <File size={16} />
          </a>
          <a href="#contact" className="rounded-full shadow-lg hover:text-white bg-gray-100 hover:bg-slate-400 shadow-gray-400 ml-4 my-2 p-4 cursor-pointer transition-all ease-in duration-300">
            <Send size={16} />
          </a>
        </div>
      </div>
    </>
  )
}

export default Sidebar;