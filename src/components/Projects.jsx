import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/portfolio';
import { Code, ExternalLink, Plus } from 'lucide-react';

function ProjectCard({ project, index }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-32 last:mb-0"
    >
      <div className={`order-2 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
        <div className="font-mono text-sm text-accent mb-4">{project.category}</div>
        <h3 className="text-3xl md:text-4xl font-bold mb-6">{project.title}</h3>
        <p className="text-lg text-secondary mb-8 leading-relaxed">
          {project.description}
        </p>
        
        <div className="mb-8">
          <h4 className="font-mono text-sm tracking-widest text-primary mb-4">TECHNOLOGIES</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map(tech => (
              <span key={tech} className="px-3 py-1 bg-surface-secondary border border-border rounded-full text-xs font-medium text-secondary">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="border border-border rounded-xl bg-surface overflow-hidden mb-8">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-between p-6 text-left hover:bg-surface-secondary transition-colors"
          >
            <span className="font-mono text-sm tracking-widest text-primary">WHAT WAS HARD</span>
            <Plus className={`text-accent transition-transform duration-300 ${isExpanded ? 'rotate-45' : ''}`} size={20} />
          </button>
          
          <AnimatePresence>
            {isExpanded && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="p-6 pt-0 border-t border-border">
                  {project.challenges.map((c, i) => (
                    <div key={i} className="mb-6 last:mb-0">
                      <h5 className="text-primary font-medium mb-2">{c.title}</h5>
                      <p className="text-secondary text-sm leading-relaxed">{c.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex gap-4">
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-primary text-background px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors">
            Live Demo <ExternalLink size={18} />
          </a>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-surface-secondary border border-border text-primary px-6 py-3 rounded-lg font-medium hover:bg-border transition-colors">
            Code <Code size={18} />
          </a>
        </div>
      </div>

      <div className={`order-1 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
        <div className="relative rounded-2xl overflow-hidden border border-border group">
          <div className="absolute inset-0 bg-accent/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <img 
            src={project.image} 
            alt={`${project.title} screenshot`} 
            className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-700"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="font-mono text-sm tracking-widest text-secondary mb-6">02 — SELECTED WORK</div>
          <h2 className="text-4xl md:text-6xl font-bold">
            Real products, <span className="font-serif italic text-accent font-normal">not mockups.</span>
          </h2>
        </motion.div>

        <div>
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
