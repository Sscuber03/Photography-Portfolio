import React from 'react';

//import images
import WomanImg from '../img/about/woman.png';

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
        <div className='flex flex-col xl:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16'>
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-80%' }}
            transition={transition1}
            className='flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center :items-start'>
            <h1 className='h1'>About Me</h1>
            <p className='mb-12 max-w-sm'>
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              pellentesque nunc non elementum scelerisque. Donec id ligula
              lacinia, ultricies dui eu, dapibus ligula. Sed ut odio nec purus
              tincidunt vestibulum. Sed nec odio in odio posuere ultrices. Sed
              <br />
              <br />
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              pellentesque nunc non elementum scelerisque. Donec id ligula
              lacinia, ultricies dui eu, dapibus ligula. Sed ut odio nec purus
              tincidunt vestibulum. Sed nec odio in odio posuere ultrices. Sed
            </p>
            <Link to={'/portfolio'} className='btn'>View my Works</Link>
          </motion.div>
          {/* image */}
          <div className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden'>
            <img src={WomanImg} alt='' />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
