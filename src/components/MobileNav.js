import React, {useState} from 'react';

//import icons
import { IoMdClose } from 'react-icons/io';
import { CgMenuRight } from 'react-icons/cg';

//import Link
import { Link , useLocation } from 'react-router-dom';

//import motion
import { motion } from 'framer-motion';

//menu variants
const menuVariants = {
  hidden: {
    x: '100%',
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
};

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  let location = useLocation();
  const color = location.pathname === '/' ? 'bg-transparent' : 'bg-blue-100';
  return (
    <nav className='text-primary xl:hidden my-auto'>
    {/* nav open button */}
      <div onClick={() => setOpenMenu(true)} className='text-3xl cursor-pointer'>
        <CgMenuRight />
      </div>
      {/* menu */}
      <motion.div variants={menuVariants} initial='hidden' animate={openMenu ? 'show' : ''} className='bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20'>
        {/* icon */}
        <div onClick={() => setOpenMenu(false)} className='text-4xl absolute z-30 left-4 top-14 text-primary cursor-pointer'>
          <IoMdClose />
        </div>
        {/* menu list */}
        <ul className='h-full flex flex-col justify-center items-center gap-y-8 text-primary font-primary font-bold text-3xl'>
          <li>
            <Link to={'/'} onClick={() => setOpenMenu(false)}>Home</Link>
          </li>
          <li>
            <Link to={'/about'} onClick={() => setOpenMenu(false)}>About</Link>
          </li>
          <li>
            <Link to={'/portfolio'} onClick={() => setOpenMenu(false)}>Portfolio</Link>
          </li>
          <li>
            <Link to={'/contact'} onClick={() => setOpenMenu(false)}>Contact</Link>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default MobileNav;
