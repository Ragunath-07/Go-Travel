import '../App.css'
import "remixicon/fonts/remixicon.css";

import black_logo from '../assets/images/logo-black.svg'
import menu from '../assets/images/menu.png'

import { useState } from 'react';

function NavBar() {

  const links = [
    { name: "Home", href: "#home" },
    { name: "Destination", href: "#destination" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  const [menuopen, setMenuopen] = useState(false)

  const handleMenu = () => {
    setMenuopen(!menuopen)
  }

  return (
      <section className='relative bg-white text-black h-[60px] flex justify-between items-center px-5 shadow-md sticky top-0 z-50 transition-all duration-500'>

        <div className='font-bold flex items-center gap-1'>

          <img src={black_logo} alt="logo" className='logo-6' />
          <span className='text-lg'>GoTravel</span>

        </div>

        {/* Menu in Small Screen */}

        <div className={`absolute w-full bg-white text-black left-0 rounded-b-[30px] shadow-lg transition-all duration-700 ${menuopen ? 'top-0' : '-top-96'} lg:hidden`}>

          <ul className='py-16 flex flex-col gap-5 font-semibold items-center'>
            {links.map(function (link) {
              return (
                <li key={link.href} className='relative'>
                  <a
                    href={link.href}
                    className='after:block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-500 hover:after:w-[70%]'
                    onClick={handleMenu}
                  > {link.name} </a>
                </li>
              );
            })}
          </ul>

          <div className='absolute top-4 right-6 text-lg font-semibold lg:hidden' onClick={handleMenu}>

            <button><i className="ri-close-large-line"></i></button>

          </div>
        </div>

        <div className='lg:hidden' onClick={handleMenu}>

          <button><img src={menu} alt="menu-icon" className='w-6' /></button>

        </div>

        {/* Menu in Large screen */}
        <div className='hidden lg:block'>

          <ul className='flex gap-12 font-semibold'>
            {links.map(function (link) {
              return (
                <li key={link.href} className='relative'>
                  <a href={link.href}
                    className='after:block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-black after:transition-all after:duration-500 hover:after:w-[70%]'
                  > {link.name} </a>
                </li>
              )
            })}
          </ul>

        </div>

      </section>
  )
}

export default NavBar