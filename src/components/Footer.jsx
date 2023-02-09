import React from 'react';
import { Heart, GitHub, Linkedin, Instagram, Mail } from 'react-feather';

const Footer = () => {
  return (
    <footer className="my-4">
      <div className="flex flex-col justify-center items-center">
      <p>Made with <Heart size={20} className="inline-flex" /> by Demi.</p>
      <p>&copy; 2023. All rights reserved.</p>
      </div>

      {/* DISPLAY SOCIAL MEDIA ICONS ON SIDE OVER 768PX SCRN RES */}
      <div className="hidden md:block fixed top-[35%] z-10">
        <div className="flex flex-col">
          <ul className="list-none">
              <li className="px-6 py-3 flex justify-between items-center ml-[5px] hover:ml-[10px] duration-300"><a className="text-gray-800 hover:text-slate-400" href="https://github.com/demivlkv" target="_blank"><GitHub size={30} /></a></li>
              <li className="px-6 py-3 flex justify-between items-center ml-[5px] hover:ml-[10px] duration-300"><a className="text-gray-800 hover:text-slate-400" href="https://www.linkedin.com/in/demihayashi/" target="_blank"><Linkedin size={30} /></a></li>
              <li className="px-6 py-3 flex justify-between items-center ml-[5px] hover:ml-[10px] duration-300"><a className="text-gray-800 hover:text-slate-400" href="https://www.instagram.com/hii.demii/" target="_blank"><Instagram size={30} /></a></li>
              <li className="px-6 py-3 flex justify-between items-center ml-[5px] hover:ml-[10px] duration-300"><a className="text-gray-800 hover:text-slate-400" href="mailto:hayashi.demi@gmail.com"><Mail size={30} /></a></li>
          </ul>
        </div>
      </div>

      {/* DISPLAY SOCIAL MEDIA ICONS ON BOTTOM UNDER 768PX SCRN RES */}
      <div>
        <ul className="md:hidden flex flex-row justify-center">
          <li className="p-3 inline-flex"><a className="text-[#8aa2a9] hover:text-[#79fcca] hover:border-0" href="https://github.com/demivlkv" target="_blank"><GitHub size={25} /></a></li>
          <li className="p-3 inline-flex"><a className="text-[#8aa2a9] hover:text-[#79fcca] hover:border-0" href="https://www.linkedin.com/in/demihayashi/" target="_blank"><Linkedin size={25} /></a></li>
          <li className="p-3 inline-flex"><a className="text-[#8aa2a9] hover:text-[#79fcca] hover:border-0" href="https://www.instagram.com/hii.demii/" target="_blank"><Instagram size={25} /></a></li>
          <li className="p-3 inline-flex"><a className="text-[#8aa2a9] hover:text-[#79fcca] hover:border-0" href="mailto:hayashi.demi@gmail.com"><Mail size={25} /></a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;