import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { Container } from './Container';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-bg-secondary border-t border-white/5 py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="font-display font-bold text-2xl tracking-tight mb-4 block">
              AHMAD<span className="text-accent">.</span>DEV
            </Link>
            <p className="text-text-secondary max-w-sm mb-4">
              Building scalable, high-performance web applications and decentralized solutions for the future of the web.
            </p>
            <p className="text-text-secondary text-sm">
              <span className="block">0316 4951498</span>
              <span className="block">realahmadrazakhan@gmail.com</span>
            </p>
          </div>
          
          <div>
            <h4 className="font-display font-bold text-white mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><Link to="/projects" className="text-text-secondary hover:text-accent transition-colors">Projects</Link></li>
              <li><Link to="/stack" className="text-text-secondary hover:text-accent transition-colors">Tech Stack</Link></li>
              <li><Link to="/experience" className="text-text-secondary hover:text-accent transition-colors">Experience</Link></li>
              <li><Link to="/blog" className="text-text-secondary hover:text-accent transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://github.com/AHmadKhan1111" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="mailto:realahmadrazakhan@gmail.com" className="text-text-secondary hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
          <p className="text-text-secondary text-sm">
            © {new Date().getFullYear()} Ahmad Raza Khan. All rights reserved.
          </p>
          <p className="text-text-secondary text-sm mt-2 md:mt-0">
            Designed & Built with React, Tailwind & Node.js
          </p>
        </div>
      </Container>
    </footer>
  );
};
