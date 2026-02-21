import React from 'react';
import { cn } from '@/utils/cn';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ children, className, ...props }) => {
  return (
    <section className={cn('py-16 md:py-24 lg:py-32', className)} {...props}>
      {children}
    </section>
  );
};
