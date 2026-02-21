import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FeaturedProjects } from '@/components/FeaturedProjects';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';

export const Projects: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Projects | Full Stack Portfolio</title>
        <meta name="description" content="Case studies of scalable web applications and decentralized solutions." />
      </Helmet>
      
      <div className="pt-20">
        <Section className="bg-bg-primary pb-0">
          <Container>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 text-center">
              Selected Work
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto text-center mb-12">
              A deep dive into the technical challenges and solutions behind my recent projects.
            </p>
          </Container>
        </Section>
        
        {/* Reusing the component for now, but in a real app this would be a more detailed list */}
        <FeaturedProjects />
      </div>
    </>
  );
};
