import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolio';
import { ArrowRight, Code } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 px-6 md:px-12 relative overflow-hidden">
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#21262D 1px, transparent 1px), linear-gradient(90deg, #21262D 1px, transparent 1px)', backgroundSize: '4rem 4rem' }}>
      </div>
      
      <div className="max-w-7xl mx-auto w-full z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <div className="font-mono text-sm tracking-widest text-secondary mb-6">01 — OVERVIEW</div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 text-balance">
            I build software <br className="hidden md:block"/>
            that <span className="font-serif italic text-accent font-normal">actually ships.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-secondary max-w-2xl mb-12 leading-relaxed text-balance">
            {personalInfo.longBio}
          </p>
          
          <div className="flex flex-wrap gap-4 mb-16">
            <a href="#projects" className="inline-flex items-center gap-2 bg-primary text-background px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-colors">
              View Projects <ArrowRight size={20} />
            </a>
            <a href={personalInfo.contact.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-surface-secondary border border-border text-primary px-8 py-4 rounded-lg font-medium hover:bg-border transition-colors">
              Code <Code size={20} />
            </a>
          </div>
          
          <div className="border-t border-border pt-8 flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="flex flex-col gap-2">
              <span className="font-mono text-accent text-sm">— Engineering Focus</span>
              <span className="text-secondary">Frontend to backend</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-mono text-accent text-sm">— Deliverables</span>
              <span className="text-secondary">Real applications, not mockups</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-mono text-accent text-sm">— Quality</span>
              <span className="text-secondary">Deployment and debugging</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
