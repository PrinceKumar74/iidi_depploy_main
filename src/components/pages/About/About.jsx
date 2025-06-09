import React from 'react'
import AboutHeroSection from './Container1/AboutHeroSection'
import AboutIIDI from './Container2/AboutIIDI'
import AcknowledgementOfCountry from './Container3/AcknowledgementOfCountry'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
const About = () => {
  const { pathname } = useLocation();

  useEffect(() => {
      window.scrollTo(0, 0); // Scrolls to the top on route change
  }, [pathname]);
  return (
    <>
      <AboutHeroSection/>
      <AboutIIDI/>
      <AcknowledgementOfCountry/>
    </>
  )
}

export default About
