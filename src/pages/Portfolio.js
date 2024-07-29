import React from 'react';

//import image
import Image1 from '../img/portfolio/1.png';
import Image2 from '../img/portfolio/2.png';
import Image3 from '../img/portfolio/3.png';
import Image4 from '../img/portfolio/4.png';

//import Link
import { Link } from 'react-router-dom';

//import motion
import { motion } from 'framer-motion';

//import transition
import { transition1 } from '../transitions';

const Portfolio = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className='section'>
      <div className='container mx-auto h-full relative'>
        <div className='xl:flex xl:flex-row h-full xl:pt-[150px] xl:items-center xl:justify-center gap-x-24 text-center lg:text-left lg:pt-16 overflow-scroll xl:overflow-hidden'>
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-80%' }}
            transition={transition1}
            className='flex-1 xl:pl-[100px] pt-36 pb-14 xl:pt-0 xl:w-auto z-10 flex flex-col justify-center items-center xl:items-start'>
            <h1 className='h1'>Portfolio</h1>
            <p className='mb-12 max-w-lg mx-2 lg:text-xl xl:text-base'>
              Hello! I'm Sambit Sarkar, a passionate photographer. I specialize in capturing the beauty of wildlife, especially birds and animals, as well as the serene landscapes of nature. I also enjoy freezing special moments in daily life, from the excitement of sports events to the energy of concerts and cultural festivals.
              <br />
              <br />
              For the past two years, I've been part of my college's Coverage team, leading the group for the past year. Together, we've documented a variety of vibrant events, showcasing my diverse photography skills.
              <br />
              <br />
              Explore my portfolio and experience the world through my lens.
            </p>
            <Link to={'/contact'} className='btn mb-[30px]'>Contact me!</Link>
          </motion.div>
          {/* image grid */}
          <div className='grid grid-cols-2 gap-2'>
            {/* image */}
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img className='object-cover h-full lg:h=[220px] hover:scale-110 transition-all duration-500' src={Image1} alt='' />
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={Image2} alt='' />
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={Image3} alt='' />
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={Image4} alt='' />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
