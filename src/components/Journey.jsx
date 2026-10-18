import { motion } from 'framer-motion';
import { journey } from '../data/portfolio';

export default function Journey() {
  return (
    <section id="journey" className="py-32 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-24 text-center md:text-left"
        >
          <div className="font-mono text-sm tracking-widest text-secondary mb-6">04 — THE JOURNEY</div>
          <h2 className="text-4xl md:text-6xl font-bold">
            Still learning. <span className="font-serif italic text-accent font-normal">Always shipping.</span>
          </h2>
        </motion.div>

        <div className="relative border-l-2 border-border ml-4 md:ml-0">
          {journey.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-16 last:mb-0 relative pl-8 md:pl-12"
            >
              {/* Timeline dot */}
              <div className="absolute w-4 h-4 bg-background border-2 border-accent rounded-full -left-[9px] top-1"></div>
              
              <div className="font-mono text-xs text-accent mb-2 tracking-widest">{item.period}</div>
              <h3 className="text-2xl font-bold mb-4 text-primary">{item.title}</h3>
              <p className="text-secondary text-lg leading-relaxed max-w-2xl">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
