import React from 'react';

//import images
import TestImg from '../img/home/test2.jpg';

//import Link
import { Link } from 'react-router-dom';

//import motion
import { motion } from 'framer-motion'

//import transition
import { transition1 } from '../transitions'

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className='section bg-blue-100'>
      <div className='mx-auto h-full lg:w-full relative'>
        {/* text and image wrapper */}
        <div className='flex flex-col justify-center'>
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: '-50%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-50%' }}
            transition={transition1}
            className='w-full pt-36 pb-14  z-10 flex flex-col justify-center items-center xl:pt-0 xl:pl-[150px] xl:pb-0 xl:w-auto xl:absolute'>
            <h1 className='h1'>
              Photographer <br /> & Traveller
            </h1>
            <p className='text-[20px] md:text-[28px] lg:text-[36px] font-primary mb-4 lg:mb-12'>
              Kolkata, India
            </p>
            <Link to={'/contact'} className='btn mb-[30px]'>Contact me!</Link>
          </motion.div>
          {/* image */}
          <div className='max-h-96 lg:max-h-max lg:min-h-screen'>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={transition1}
              className='relative h-full object-cover'>{/* lg:-right-40 overflow-hidden */}
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={transition1} 
                src={TestImg}
                alt='' 
                className='w-full h-full'/>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
