import { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolio';
import { Code, User, Mail, Send } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT;
const EMPTY_FORM = { name: '', email: '', message: '', _gotcha: '' };

export default function Contact() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const hasForm = Boolean(FORM_ENDPOINT);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => (prev[name] ? { ...prev, [name]: '' } : prev));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Please enter your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) next.email = 'Please enter a valid email address.';
    if (form.message.trim().length < 10) next.message = 'Please write at least 10 characters.';
    return next;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    if (form._gotcha) return; // Honeypot filled: silently drop the submission
    setStatus('sending');
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const resetForm = () => {
    setForm(EMPTY_FORM);
    setErrors({});
    setStatus('idle');
  };

  const inputClass = 'w-full bg-surface-secondary border border-border rounded-lg px-4 py-3 text-primary focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all';

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

        <div className={hasForm ? 'grid lg:grid-cols-2 gap-16 lg:gap-24' : ''}>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-xl text-secondary mb-12 max-w-lg leading-relaxed">
              I'm always interested in hearing about new projects, opportunities, or just talking about software engineering.
            </p>
            
            <div className={hasForm ? 'space-y-6' : 'flex flex-wrap gap-6'}>
              <a href={`mailto:${personalInfo.contact.email}`} className="flex items-center gap-4 text-secondary hover:text-primary transition-colors group w-fit">
                <div className="w-12 h-12 rounded-full bg-surface-secondary border border-border flex items-center justify-center group-hover:border-accent/50 transition-colors">
                  <Mail size={20} className="group-hover:text-accent transition-colors" />
                </div>
                <span className="text-lg font-medium">{personalInfo.contact.email}</span>
              </a>
              
              <a href={personalInfo.contact.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex items-center gap-4 text-secondary hover:text-primary transition-colors group w-fit">
                <div className="w-12 h-12 rounded-full bg-surface-secondary border border-border flex items-center justify-center group-hover:border-accent/50 transition-colors">
                  <FaWhatsapp size={20} className="group-hover:text-accent transition-colors" />
                </div>
                <span className="text-lg font-medium">WhatsApp</span>
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
            </div>
          </motion.div>

          {hasForm && (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {status === 'success' ? (
                <div className="bg-background border border-border rounded-2xl p-8 shadow-xl">
                  <p className="text-lg text-primary mb-6">
                    Thanks — your message has been sent. I'll get back to you soon.
                  </p>
                  <button 
                    type="button"
                    onClick={resetForm}
                    className="w-full flex items-center justify-center gap-2 bg-primary text-background px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="bg-background border border-border rounded-2xl p-8 shadow-xl">
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-mono text-secondary mb-2">NAME</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="Your name"
                      />
                      {errors.name && <p className="mt-2 text-sm text-red-400">{errors.name}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-mono text-secondary mb-2">EMAIL</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="your.email@example.com"
                      />
                      {errors.email && <p className="mt-2 text-sm text-red-400">{errors.email}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-mono text-secondary mb-2">MESSAGE</label>
                      <textarea 
                        id="message" 
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows="5"
                        className={`${inputClass} resize-none`}
                        placeholder="How can I help you?"
                      ></textarea>
                      {errors.message && <p className="mt-2 text-sm text-red-400">{errors.message}</p>}
                    </div>

                    <input 
                      type="text" 
                      name="_gotcha" 
                      value={form._gotcha}
                      onChange={handleChange}
                      tabIndex={-1} 
                      autoComplete="off" 
                      aria-hidden="true"
                      className="hidden"
                    />

                    {status === 'error' && (
                      <p className="text-sm text-red-400">
                        Something went wrong sending your message. Please try again, or email me at{' '}
                        <a href={`mailto:${personalInfo.contact.email}`} className="underline hover:text-primary transition-colors">
                          {personalInfo.contact.email}
                        </a>.
                      </p>
                    )}
                    
                    <button 
                      type="submit"
                      disabled={status === 'sending'}
                      className="w-full flex items-center justify-center gap-2 bg-primary text-background px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === 'sending' ? 'Sending...' : (<>Send message <Send size={18} /></>)}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
