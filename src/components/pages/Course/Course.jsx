import React from 'react'
import HeroSection from './Container1/HeroSection'
import StatsSection from './Container2/StatsSection'
import CoursesSection from '../Home/Container2/CoursesSection'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Course = () => {
  const { pathname } = useLocation();

  useEffect(() => {
      window.scrollTo(0, 0); // Scrolls to the top on route change
  }, [pathname]);
  return (
    <div>
      <HeroSection/>
      <StatsSection/>
      <CoursesSection/>
    </div>
  )
}

export default Course
