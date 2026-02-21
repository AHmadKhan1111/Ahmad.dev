import React from 'react';
import { motion } from 'motion/react';
import { Container } from './Container';
import { Section } from './Section';

const experience = [
  {
    role: 'Software Development Intern',
    company: 'Child Protection & Welfare Bureau, Lahore',
    period: '2024 – 2025',
    description: 'Contributed to development and maintenance of internal web-based systems.',
    achievements: [
      'Assisted in backend API development and database operations',
      'Improved application stability through debugging and performance fixes',
      'Collaborated with senior developers to implement new features',
    ],
  },
];

export const ExperienceTimeline: React.FC = () => {
  return (
    <Section className="bg-bg-primary">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-white mb-4">Experience</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            A proven track record of delivering high-impact solutions.
          </p>
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-8 space-y-12 pl-8 md:pl-12">
          {experience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              <span className="absolute -left-[41px] md:-left-[53px] top-1 h-5 w-5 rounded-full border-4 border-bg-primary bg-accent" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-display font-bold text-white">{job.role}</h3>
                <span className="text-sm font-mono text-accent bg-accent/10 px-2 py-1 rounded border border-accent/20 w-fit mt-2 md:mt-0">
                  {job.period}
                </span>
              </div>
              
              <h4 className="text-lg text-text-secondary mb-4 font-medium">{job.company}</h4>
              <p className="text-text-secondary mb-6 leading-relaxed max-w-3xl">
                {job.description}
              </p>
              
              <ul className="space-y-2">
                {job.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start text-sm text-text-secondary">
                    <span className="mr-2 text-accent">▹</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
