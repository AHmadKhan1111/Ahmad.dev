import React from 'react';
import { motion } from 'motion/react';
import { Layers, Zap, ShieldCheck } from 'lucide-react';
import { Container } from './Container';
import { Section } from './Section';

const features = [
  {
    icon: Layers,
    title: 'Scalable Architecture',
    description: 'Designing systems that grow with your business. Microservices, serverless, and event-driven patterns.',
    metric: '10x Scalability',
  },
  {
    icon: Zap,
    title: 'High-Performance Frontend',
    description: 'Pixel-perfect, responsive UIs with optimized core web vitals. React, Next.js, and Tailwind CSS.',
    metric: '95+ Lighthouse',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Backend Systems',
    description: 'Robust APIs with JWT auth, rate limiting, and data encryption. Node.js, PostgreSQL, and Redis.',
    metric: 'OWASP Top 10',
  },
];

export const ValueProposition: React.FC = () => {
  return (
    <Section className="bg-bg-secondary border-y border-white/5">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-accent/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-text-secondary mb-6 leading-relaxed">{feature.description}</p>
              <div className="inline-block px-3 py-1 rounded-full bg-white/5 text-xs font-mono text-accent border border-accent/20">
                {feature.metric}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
