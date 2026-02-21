import React from 'react';
import { Helmet } from 'react-helmet-async';
import { HeroSection } from '@/components/HeroSection';
import { ValueProposition } from '@/components/ValueProposition';
import { FeaturedProjects } from '@/components/FeaturedProjects';
import { TechStack } from '@/components/TechStack';
import { ExperienceTimeline } from '@/components/ExperienceTimeline';
import { BlogSection } from '@/components/BlogSection';
import { EducationAndCertifications } from '@/components/EducationAndCertifications';

export const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Ahmad Raza Khan | Full Stack Engineer</title>
        <meta name="description" content="Portfolio of Ahmad Raza Khan, a Full Stack Engineer specializing in scalable systems, high-performance web apps, and modern web technologies." />
      </Helmet>
      
      <HeroSection />
      <ValueProposition />
      <FeaturedProjects />
      <TechStack />
      <ExperienceTimeline />
      <EducationAndCertifications />
      <BlogSection />
    </>
  );
};
