import React from 'react';
import { Helmet } from 'react-helmet-async';
import { TechStack } from '@/components/TechStack';

export const Stack: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Tech Stack | Full Stack Portfolio</title>
      </Helmet>
      <div className="pt-20">
        <TechStack />
      </div>
    </>
  );
};
