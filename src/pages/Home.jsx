import React from 'react';
import Hero from '../components/Hero';
import TechMarquee from '../components/sections/TechMarquee';
import FeaturedProjects from '../components/sections/FeaturedProjects';
import TechStackShowcase from '../components/sections/TechStackShowcase';
import WhatIBuild from '../components/sections/WhatIBuild';
import QuickStats from '../components/sections/QuickStats';
import FeaturedAchievements from '../components/sections/FeaturedAchievements';
import DeveloperPrinciples from '../components/sections/DeveloperPrinciples';
import MiniAbout from '../components/sections/MiniAbout';
import ContactCTA from '../components/sections/ContactCTA';
import Footer from '../components/sections/Footer';

const Home = () => {
  return (
    <>
      <Hero />
      <TechMarquee />
      <FeaturedProjects />
      <TechStackShowcase />
      <WhatIBuild />
      <QuickStats />
      <FeaturedAchievements />
      <DeveloperPrinciples />
      <MiniAbout />
      <ContactCTA />
      <Footer />
    </>
  );
};

export default Home;
