import React from 'react';
import Navbar from '../components/Navbar';
import HeroImg2 from '../components/HeroImg2';

import Footer from '../components/Footer';

const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="ABOUT."
       text="Im a friendly Software Developer"/>
      <About/>
    </div>
  )
}

export default About