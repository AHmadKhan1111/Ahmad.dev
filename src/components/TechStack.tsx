import React from 'react';
import { motion } from 'motion/react';
import { Container } from './Container';
import { Section } from './Section';

const stack = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React.js / Next.js', level: 90 },
      { name: 'TypeScript / JavaScript', level: 90 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'HTML5 / CSS3', level: 95 },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 85 },
      { name: 'REST APIs', level: 90 },
      { name: 'Firebase', level: 80 },
    ],
  },
  {
    category: 'Databases',
    skills: [
      { name: 'MongoDB', level: 85 },
      { name: 'MySQL', level: 80 },
      { name: 'PostgreSQL', level: 80 },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git / GitHub', level: 90 },
      { name: 'VS Code', level: 95 },
    ],
  },
];

export const TechStack: React.FC = () => {
  return (
    <Section className="bg-bg-secondary border-y border-white/5">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-white mb-4">Technical Stack</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            A comprehensive toolset for building scalable, high-performance applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stack.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-display font-bold text-white border-b border-white/10 pb-2">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-text-secondary">{skill.name}</span>
                      <span className="text-xs font-mono text-text-secondary">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                        className="h-full bg-accent rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
