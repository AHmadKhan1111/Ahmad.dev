import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BlogSection } from '@/components/BlogSection';

export const Blog: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Blog | Full Stack Portfolio</title>
      </Helmet>
      <div className="pt-20">
        <BlogSection />
      </div>
    </>
  );
};
