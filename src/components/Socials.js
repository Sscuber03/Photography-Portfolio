import React from 'react';

//import icons
import {
  ImFacebook,
  ImTwitter,
  ImInstagram,
} from 'react-icons/im';

const Socials = () => {
  return <div className='hidden xl:flex ml-24'>
    <ul className='flex gap-x-4'>
      <li><a href='https://www.instagram.com/ss_cuber2/' target='_blank' rel='noreferrer'><ImInstagram /></a></li>
      <li><a href='https://www.facebook.com/sambit.sarkar2003/' target='_blank' rel='noreferrer'><ImFacebook /></a></li>
      <li><a href='https://x.com/Sambits28225539' target='_blank' rel='noreferrer'><ImTwitter /></a></li>
    </ul>
  </div>;
};

export default Socials;
