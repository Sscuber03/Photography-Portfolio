import React from 'react';

//import components
import Socials from './Socials';
import Logo from '../img/header/logo.png';
import MobileNav from './MobileNav';

//import Link
import { Link ,useLocation } from 'react-router-dom';

const Header = () => {
  let location = useLocation();
  const color = location.pathname === '/' ? 'bg-transparent' : 'bg-blue-100';
  // console.log(location.pathname);
  return (
    <header className='fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center {color}'>
      <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
        {/* Logo */}
        <Link to={'/'} className='max-w-[200px]'>
          <img src={Logo} alt='' />
        </Link>
        {/* Nav initially hidden, show on desktop mode */}
        <nav className='hidden xl:flex gap-x-12 font-semibold'>
          <Link to={'/'} className='text-[#696c6d] hover:text-primary transition'>
            Home
          </Link>
          <Link to={'/about'} className='text-[#696c6d] hover:text-primary transition'>
            About
          </Link>
          <Link to={'/portfolio'} className='text-[#696c6d] hover:text-primary transition'>
            Portfolio
          </Link>
          <Link to={'/contact'} className='text-[#696c6d] hover:text-primary transition'>
            Contact
          </Link>
        </nav>
      </div>
      {/* Socials */}
      <Socials />
      {/* Mobile Nav initially hidden, show on mobile mode */}
      <MobileNav />
    </header>
  );
};

export default Header;
