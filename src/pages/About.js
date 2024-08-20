import React from 'react';

//import images
import TestImg from '../img/about/image.JPG';

//import Link
import { Link } from 'react-router-dom';

//import motion
import { motion } from 'framer-motion';

//import transition
import { transition1 } from '../transitions';

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className='section bg-blue-100'>
      <div className='container mx-auto h-full relative'>
        {/* text and img wrapper */}
        <div className='xl:flex xl:flex-row h-full xl:pt-[150px] xl:items-center xl:justify-center gap-x-24 text-center lg:text-left lg:pt-16 overflow-scroll scrollbar-hide xl:overflow-hidden'>
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-80%' }}
            transition={transition1}
            className='flex-1 xl:pl-[100px] pt-36 pb-14 xl:pt-0 xl:w-auto flex flex-col justify-center items-center xl:items-start'>
            <h1 className='h1'>About Me</h1>
            <p className='mb-12 max-w-lg mx-2 lg:text-xl xl:text-base'>
            Hello! My name is Sambit Sarkar, a final year Computer Science student at RCC Institute of Information Technology. I have a deep passion for coding and a hobby in photography.
              <br />
              <br />
              I enjoy capturing wildlife, especially birds and animals, as well as the beauty of nature. I also love to photograph special moments in daily life, sports events, concerts, and other gatherings.
              <br />
              <br />
              For the past two years, I have been part of my college's Coverage team, and I have led the group for the past year. Together, we've documented cultural, technical, and sports festivals at RCCIIT.
              <br />
              <br />
              I invite you to explore my portfolio and experience the world through my eyes.
            </p>
            <Link to={'/portfolio'} className='btn mb-6'>View my Works</Link>
          </motion.div>
          {/* image */}
          <div className='flex-1 max-h-64 order-2 lg:max-w-[75%] lg:mx-auto xl:flex xl:items-center xl:max-w-[80%] xl:mx-auto xl:ml-[5%]'>
            <img src={TestImg} alt='' className='rounded-2xl border-blue-300 border-8 xl:max-w-[90%]'/>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
