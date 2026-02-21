import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ExperienceTimeline } from '@/components/ExperienceTimeline';

export const Experience: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Experience | Full Stack Portfolio</title>
      </Helmet>
      <div className="pt-20">
        <ExperienceTimeline />
      </div>
    </>
  );
};
