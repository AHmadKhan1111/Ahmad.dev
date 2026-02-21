import React from 'react';
import { motion } from 'motion/react';
import { Container } from './Container';
import { Section } from './Section';
import { GraduationCap, Award } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor of Science in Computer Science (BSCS)',
    institution: 'National College of Business Administration & Economics, Lahore',
    period: '2020 – 2024',
  },
  {
    degree: 'Intermediate in Computer Science',
    institution: 'Punjab Colleges, Lahore',
    period: '2017 – 2019',
  },
];

const certifications = [
  {
    name: 'IT Specialist - JavaScript',
    issuer: 'Certiport (Partner: Pearson)',
    date: 'December 2025',
  },
  {
    name: 'JavaScript Full Stack (MEAN/MERN)',
    issuer: 'Corvit Systems',
    date: 'Sep 2025 – Nov 2025',
  },
];

export const EducationAndCertifications: React.FC = () => {
  return (
    <Section className="bg-bg-secondary border-y border-white/5">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <div className="flex items-center mb-8">
              <div className="p-2 rounded-lg bg-accent/10 text-accent mr-4">
                <GraduationCap size={24} />
              </div>
              <h2 className="text-3xl font-display font-bold text-white">Education</h2>
            </div>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="pl-4 border-l-2 border-white/10"
                >
                  <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                  <p className="text-text-secondary mb-2">{edu.institution}</p>
                  <span className="text-xs font-mono text-accent bg-accent/10 px-2 py-1 rounded border border-accent/20">
                    {edu.period}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center mb-8">
              <div className="p-2 rounded-lg bg-accent/10 text-accent mr-4">
                <Award size={24} />
              </div>
              <h2 className="text-3xl font-display font-bold text-white">Certifications</h2>
            </div>
            
            <div className="space-y-8">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 p-6 rounded-xl border border-white/5 hover:border-accent/30 transition-colors"
                >
                  <h3 className="text-lg font-bold text-white mb-2">{cert.name}</h3>
                  <div className="flex justify-between items-center text-sm text-text-secondary">
                    <span>{cert.issuer}</span>
                    <span className="font-mono text-accent">{cert.date}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
