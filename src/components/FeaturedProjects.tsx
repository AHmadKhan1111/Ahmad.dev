import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Container } from './Container';
import { Section } from './Section';
import { Link } from 'react-router-dom';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  metric: string;
  image: string;
  github: string;
  demo: string;
  category: 'SaaS' | 'Web3' | 'System' | 'Freelance';
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Hazalis ',
    description: 'Architected and deployed full-stack production web application. Engineered RESTful APIs for frontend-backend integration. Implemented secure authentication and optimized database queries.',
    tech: ['React', 'Node.js', 'REST API', 'Database'],
    metric: 'Production Deployment',
    image: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*Y3JUV0gQ32b9JQwMaKkYbQ.png',
    github: 'https://github.com/AHmadKhan1111',
    demo: 'https://hazalis.com',
    category: 'SaaS',
  },
  {
    id: 2,
    title: 'Full Stack E-Commerce ',
    description: 'Built complete e-commerce solution using React and Node.js. Developed JWT authentication and protected routes. Designed optimized MongoDB data models.',
    tech: ['React', 'Node.js', 'MongoDB', 'JWT'],
    metric: 'Full Stack Solution',
    image: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*VNoETQG1aBwujmj9qMBbLQ.png',
    github: 'https://github.com/AHmadKhan1111',
    demo: 'https://e-commerce-lake-mu-17.vercel.app/',
    category: 'SaaS',
  },
  {
    id: 3,
    title: 'Tax S Consultancy ',
    description: 'Built complete e-commerce solution using React and Node.js. Developed JWT authentication and protected routes. Designed optimized MongoDB data models.',
    tech: ['React', 'Node.js', 'MongoDB', 'JWT'],
    metric: 'Full Stack Solution',
    image: 'https://cdn.dribbble.com/userupload/24036706/file/original-d2d315539785b5c62c2bfc8b43659182.jpg?resize=752x&vertical=center',
    github: 'https://github.com/AHmadKhan1111',
    demo: 'https://tax-s-consultancy.vercel.app',
    category: 'SaaS',
  },
];

export const FeaturedProjects: React.FC = () => {
  const [apiProjects, setApiProjects] = useState<any[]>([]);

  useEffect(() => {
    // Fetch projects from our Express backend to demonstrate full-stack integration
    fetch('/api/projects')
      .then((res) => res.json())
      .then((data) => setApiProjects(data))
      .catch((err) => console.error('Failed to fetch projects:', err));
  }, []);

  return (
    <Section className="bg-bg-primary">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-display font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-text-secondary max-w-xl">
              A selection of production-ready applications solving real-world business problems.
            </p>
          </div>
          <Link to="/projects" className="hidden md:flex items-center text-accent hover:text-white transition-colors group">
            View All Projects <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-bg-secondary rounded-2xl overflow-hidden border border-white/5 hover:border-accent/50 transition-all hover:-translate-y-1"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary via-transparent to-transparent opacity-80" />
              </div>
              
              <div className="p-6 relative">
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-mono border border-accent/20">
                    {project.category}
                  </span>
                  <div className="flex space-x-3">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-white transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-white transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-text-secondary text-sm mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs text-text-secondary bg-white/5 px-2 py-1 rounded border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs font-mono text-text-secondary">Impact</span>
                  <span className="text-sm font-bold text-white">{project.metric}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
           <Link to="/projects" className="inline-flex items-center text-accent hover:text-white transition-colors group">
            View All Projects <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </Container>
    </Section>
  );
};
