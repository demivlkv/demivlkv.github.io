import React, { useState, useEffect } from 'react';
import { Menu, X, User, Briefcase, Grid, File, Send } from 'react-feather';

function handleScroll() {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener('scroll', updateScrollDirection);
    return () => {
      window.removeEventListener('scroll', updateScrollDirection);
    }
  }, [scrollDirection]);

  return scrollDirection;
};

const Header = () => {
  const scrollDirection = handleScroll();
  // toggle hamburger menu
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  // shadow effect on navbar on scroll
  const [top, setTop] = useState(true);
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  return (
    <div className={`sticky ${scrollDirection === "down" ? "-top-[70px]" : "top-0"} ${!top && `shadow-lg`} h-[70px] bg-slate-50 transition-all duration-500 z-[99]`}>
      <div className="w-full h-full flex justify-between items-center py-4 px-6">
        <div>
          <h1>DH</h1>
        </div>
          {/* NAVBAR AT 768PX & ABOVE */}
          <div className="md:flex hidden z-20">
            <a href="#about" className="pr-3 hover:text-slate-400 cursor-pointer">About</a>
            <a href="#work" className="px-3 hover:text-slate-400 cursor-pointer">Experience</a>
            <a href="#projects" className="px-3 hover:text-slate-400 cursor-pointer">Projects</a>
            <a href="#contact" className="px-3 hover:text-slate-400 cursor-pointer">Contact</a>
            <a href="#resume" className="pl-3 hover:text-slate-400 cursor-pointer">Resume</a>
          </div>

          {/* HAMBURGER MENU AT 768PX & LOWER */}
          <div onClick={handleNav} className="md:hidden cursor-pointer z-20">
          {!nav ? (
            <Menu size={30} />
          ) : (
            <X size={30} />
          )}
          {nav ? (
          <div className="fixed top-[70px] right-0 w-full h-screen bg-white/90 flex flex-col justify-center items-center z-[1]">
            <a href="#about" className="w-1/2 m-2 p-4 flex justify-center items-center bg-gray-100 rounded-full shadow-lg shadow-gray-400 cursor-pointer transition-all ease-in duration-300">
              <User size={20} />
              <span className="pl-4">About</span>
            </a>
            <a href="#work" className="w-1/2 m-2 p-4 flex justify-center items-center bg-gray-100 rounded-full shadow-lg shadow-gray-400 cursor-pointer transition-all ease-in duration-300">
              <Briefcase size={20} />
              <span className="pl-4">Experience</span>
            </a>
            <a href="#projects" className="w-1/2 m-2 p-4 flex justify-center items-center bg-gray-100 rounded-full shadow-lg shadow-gray-400 cursor-pointer transition-all ease-in duration-300">
              <Grid size={20} />
              <span className="pl-4">Projects</span>
            </a>
            <a href="#contact" className="w-1/2 m-2 p-4 flex justify-center items-center bg-gray-100 rounded-full shadow-lg shadow-gray-400 cursor-pointer transition-all ease-in duration-300">
              <Send size={20} />
              <span className="pl-4">Contact</span>
            </a>
            <a href="#resume" className="w-1/2 m-2 p-4 flex justify-center items-center bg-gray-100 rounded-full shadow-lg shadow-gray-400 cursor-pointer transition-all ease-in duration-300">
              <File size={20} />
              <span className="pl-4">Resume</span>
            </a>
          </div>
        ) : (
          ''
        )}
        </div>
      </div>
    </div>
  );
};

export default Header;