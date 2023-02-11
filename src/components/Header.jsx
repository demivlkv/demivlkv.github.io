import React, { useState, useEffect } from 'react';
import { Menu, X } from 'react-feather';

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
    <div className={`sticky ${scrollDirection === "down" ? "-top-[70px]" : "top-0"} ${!top && `shadow-lg bg-stone-100/80 backdrop-blur-md`} h-[70px] bg-stone-100 transition-all duration-500 z-[99]`}>
      <div className="header w-full h-full flex justify-between items-center py-4 px-6">
        <div>
          <h1>DH</h1>
        </div>
          {/* NAVBAR AT 768PX & ABOVE */}
          <div className="md:flex hidden z-20">
            <a href="#about" className="links mr-6">About</a>
            <a href="#work" className="links mx-6">Experience</a>
            <a href="#projects" className="links mx-6">Projects</a>
            <a href="#contact" className="links mx-6">Contact</a>
            <a href="#resume" className="links ml-6">Resume</a>
          </div>

          {/* HAMBURGER MENU AT 768PX & LOWER */}
          <div onClick={handleNav} className="md:hidden transition-all ease-in duration-500 z-20">
          {!nav ? (
            <Menu size={30} className="hover:text-slate-400 transition-all ease-in duration-300 cursor-pointer" />
          ) : (
            ''
          )}
          {nav ? (
            <div className={`fixed ${scrollDirection === "down" ? "top-[70px]" : "top-0"} right-0 w-1/2 h-screen shadow-lg bg-stone-100/90 z-[1]`}>
              <div className="w-full h-[70px] px-6 flex justify-end items-center">
                <X size={30} className="hover:text-slate-400 transition-all ease-in duration-300 cursor-pointer" />
              </div>
              <div className="h-full flex flex-col justify-center items-center">
                <a href="#about" className="mobile-links">About</a>
                <a href="#work" className="mobile-links">Experience</a>
                <a href="#projects" className="mobile-links">Projects</a>
                <a href="#contact" className="mobile-links">Contact</a>
                <a href="#resume" className="mobile-links">Resume</a>
              </div>
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