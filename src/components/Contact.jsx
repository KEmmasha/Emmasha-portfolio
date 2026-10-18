import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolio';
import { Code, User, Mail, Send } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Frontend only for now as requested
    alert("This is a frontend-only form. Backend integration is required to send messages.");
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="font-mono text-sm tracking-widest text-secondary mb-6">05 — CONTACT</div>
          <h2 className="text-4xl md:text-6xl font-bold">
            Let's build <span className="font-serif italic text-accent font-normal">something useful.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-xl text-secondary mb-12 max-w-lg leading-relaxed">
              I'm always interested in hearing about new projects, opportunities, or just talking about software engineering.
            </p>
            
            <div className="space-y-6">
              <a href={`mailto:${personalInfo.contact.email}`} className="flex items-center gap-4 text-secondary hover:text-primary transition-colors group w-fit">
                <div className="w-12 h-12 rounded-full bg-surface-secondary border border-border flex items-center justify-center group-hover:border-accent/50 transition-colors">
                  <Mail size={20} className="group-hover:text-accent transition-colors" />
                </div>
                <span className="text-lg font-medium">{personalInfo.contact.email}</span>
              </a>
              
              <a href={personalInfo.contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-secondary hover:text-primary transition-colors group w-fit">
                <div className="w-12 h-12 rounded-full bg-surface-secondary border border-border flex items-center justify-center group-hover:border-accent/50 transition-colors">
                  <Code size={20} className="group-hover:text-accent transition-colors" />
                </div>
                <span className="text-lg font-medium">GitHub</span>
              </a>

              <a href={personalInfo.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-secondary hover:text-primary transition-colors group w-fit">
                <div className="w-12 h-12 rounded-full bg-surface-secondary border border-border flex items-center justify-center group-hover:border-accent/50 transition-colors">
                  <User size={20} className="group-hover:text-accent transition-colors" />
                </div>
                <span className="text-lg font-medium">LinkedIn</span>
              </a>

              <a href={personalInfo.contact.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex items-center gap-4 text-secondary hover:text-primary transition-colors group w-fit">
                <div className="w-12 h-12 rounded-full bg-surface-secondary border border-border flex items-center justify-center group-hover:border-accent/50 transition-colors">
                  <FaWhatsapp size={20} className="group-hover:text-accent transition-colors" />
                </div>
                <span className="text-lg font-medium">WhatsApp</span>
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="bg-background border border-border rounded-2xl p-8 shadow-xl">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-mono text-secondary mb-2">NAME</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="w-full bg-surface-secondary border border-border rounded-lg px-4 py-3 text-primary focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-mono text-secondary mb-2">EMAIL</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="w-full bg-surface-secondary border border-border rounded-lg px-4 py-3 text-primary focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-mono text-secondary mb-2">MESSAGE</label>
                  <textarea 
                    id="message" 
                    required
                    rows="5"
                    className="w-full bg-surface-secondary border border-border rounded-lg px-4 py-3 text-primary focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all resize-none"
                    placeholder="How can I help you?"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-primary text-background px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-colors"
                >
                  Send message <Send size={18} />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
