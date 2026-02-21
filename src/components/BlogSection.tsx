import React from 'react';
import { motion } from 'motion/react';
import { Container } from './Container';
import { Section } from './Section';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const articles = [
  {
    title: 'Scaling Node.js Microservices',
    excerpt: 'Strategies for handling high concurrency and ensuring fault tolerance in distributed systems.',
    date: 'Oct 24, 2023',
    readTime: '8 min read',
    tags: ['Backend', 'System Design'],
  },
  {
    title: 'Optimizing React Performance',
    excerpt: 'Advanced techniques for minimizing re-renders and improving Core Web Vitals.',
    date: 'Nov 12, 2023',
    readTime: '6 min read',
    tags: ['Frontend', 'React'],
  },
  {
    title: 'Secure Smart Contract Patterns',
    excerpt: 'Common vulnerabilities in Solidity and how to prevent them with established design patterns.',
    date: 'Dec 05, 2023',
    readTime: '10 min read',
    tags: ['Web3', 'Security'],
  },
];

export const BlogSection: React.FC = () => {
  return (
    <Section className="bg-bg-primary">
      <Container>
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-display font-bold text-white mb-4">Latest Insights</h2>
            <p className="text-text-secondary max-w-xl">
              Thoughts on software architecture, performance, and the future of web development.
            </p>
          </div>
          <Link to="/blog" className="hidden md:flex items-center text-accent hover:text-white transition-colors group">
            Read All Articles <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="mb-4 text-xs font-mono text-text-secondary flex items-center space-x-2">
                <span>{article.date}</span>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>
              
              <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-accent transition-colors">
                {article.title}
              </h3>
              
              <p className="text-text-secondary text-sm mb-4 line-clamp-3 leading-relaxed">
                {article.excerpt}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span key={tag} className="text-xs text-text-secondary bg-white/5 px-2 py-1 rounded border border-white/5 group-hover:border-accent/20 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
           <Link to="/blog" className="inline-flex items-center text-accent hover:text-white transition-colors group">
            Read All Articles <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </Container>
    </Section>
  );
};
