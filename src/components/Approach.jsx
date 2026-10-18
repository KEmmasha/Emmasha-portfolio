import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolio';
import { Terminal } from 'lucide-react';

export default function Approach() {
  return (
    <section id="about" className="py-32 px-6 md:px-12 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="font-mono text-sm tracking-widest text-secondary mb-6">THE APPROACH</div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              I learn by building <br />
              <span className="font-serif italic text-accent font-normal">real things.</span>
            </h2>
            
            <ul className="space-y-6">
              {personalInfo.approach.map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-secondary text-lg">
                  <Terminal className="text-accent shrink-0 mt-1" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[500px] rounded-2xl bg-surface-secondary border border-border overflow-hidden group flex flex-col"
          >
             <div className="bg-border h-10 w-full flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                <div className="ml-4 font-mono text-xs text-muted">emmasha@workspace:~</div>
             </div>
             <div className="p-6 font-mono text-sm text-secondary flex-1 overflow-hidden flex flex-col gap-2">
                <p><span className="text-accent">~</span> $ npm run dev</p>
                <p><span className="text-accent">~</span> $ tail -f server.log</p>
                <p className="text-accent animate-pulse mt-4">_</p>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
