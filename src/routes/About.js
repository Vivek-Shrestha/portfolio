import React from 'react';
import Navbar from '../components/Navbar';
import HeroImg2 from '../components/HeroImg2';

import Footer from '../components/Footer';
import AboutContent from '../components/AboutContent';

const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="ABOUT."
       text="Im a friendly Software Developer"/>
       <AboutContent/>
      <About/>
    </div>
  )
}

export default About