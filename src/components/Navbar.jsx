import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import Logo from '../assets/logo.png';
import Menu from './Icons/Menu';
import X from './Icons/X';
import Sun from './Icons/Sun';
import Moon from './Icons/Moon';

function handleScroll() {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? 'down' : 'up';
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

const Navbar = ({ darkMode, toggleDarkMode }) => {
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
    <nav className={`sticky ${scrollDirection === 'down' ? '-top-[70px]' : 'top-0'} ${!top && `shadow-lg dark:shadow-slate-400 backdrop-blur-md`} h-[70px] transition-all duration-500 z-[99]`}>
      <div className="navbar w-full h-full flex justify-between items-center py-4 px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, delay: 3 }}
          viewport={{ once: true }}
        >
          <a href="/">
            <img src={Logo} alt="DH" className="h-10 hover:opacity-75 transition-all ease-in duration-300 cursor-pointer" />
          </a>
        </motion.div>
          {/* NAVBAR AT 768PX & ABOVE */}
          <div>
            <ul className="hidden md:flex md:items-center list-none">
              <motion.li initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 3 }} viewport={{ once: true }}>
                <a href="#about" className="mr-6">About</a>
              </motion.li>
              <motion.li initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 3.25 }} viewport={{ once: true }}>
                <a href="#work" className="mx-6">Experience</a>
              </motion.li>
              <motion.li initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 3.5 }} viewport={{ once: true }}>
                <a href="#projects" className="mx-6">Projects</a>
              </motion.li>
              <motion.li initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 3.75 }} viewport={{ once: true }}>
                <a href="#contact" className="mx-6">Contact</a>
              </motion.li>
              <motion.li initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 4 }} viewport={{ once: true }}>
                <a href="#resume" className="mx-6">Resume</a>
              </motion.li>
              <motion.li initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 4.25 }} viewport={{ once: true }} onClick={toggleDarkMode}>
                <div className="ml-6">
                  {darkMode ? <Sun /> : <Moon />}
                </div>
              </motion.li>
            </ul>
          </div>

          {/* HAMBURGER MENU AT 768PX & LOWER */}
          <div onClick={handleNav} className={`md:hidden transition-all ease-in duration-500 z-20`}>
            {!nav ? (
              <Menu />
            ) : (
              ''
            )}
            {nav ? (
              <motion.div
                className={`fixed ${scrollDirection === 'down' ? 'top-[70px]' : 'top-0'} right-0 w-1/2 h-screen shadow-lg bg-gray-50/90 dark:bg-neutral-800/90 backdrop-blur-md z-[1]`}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="w-full h-[70px] px-6 flex justify-end items-center">
                  <X />
                </div>
                <div className="h-full flex flex-col justify-center items-center font-medium">
                  <a href="#about" className="mobile-links">About</a>
                  <a href="#work" className="mobile-links">Experience</a>
                  <a href="#projects" className="mobile-links">Projects</a>
                  <a href="#contact" className="mobile-links">Contact</a>
                  <a href="#resume" className="mobile-links">Resume</a>
                  <button onClick={toggleDarkMode} className="w-1/2 m-2 p-3 flex justify-center items-center cursor-pointer">
                    {darkMode ? <Sun /> : <Moon />}
                  </button>
                </div>
              </motion.div>
          ) : (
            ''
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;