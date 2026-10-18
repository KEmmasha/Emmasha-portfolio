import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 md:px-12 bg-surface">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="font-mono text-sm tracking-widest text-secondary mb-6">03 — TECHNICAL SKILLS</div>
          <h2 className="text-4xl md:text-6xl font-bold">
            Tools I <span className="font-serif italic text-accent font-normal">actually use.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).filter(([, items]) => items.length > 0).map(([category, items], index) => (
            <motion.div 
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-surface-secondary border border-border rounded-2xl p-8 hover:border-accent/30 transition-colors group"
            >
              <h3 className="font-mono text-sm tracking-widest text-primary mb-6 group-hover:text-accent transition-colors">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {items.map(item => (
                  <span key={item} className="px-4 py-2 bg-background border border-border rounded-lg text-sm font-medium text-secondary hover:text-primary hover:border-primary/50 transition-colors cursor-default">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
