import { useState, useEffect } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { personalInfo } from '../data/portfolio';
import { Code, ArrowRight } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Journey', href: '#journey' },
  { name: 'Contact', href: '#contact' },
];

const EASE = [0.22, 1, 0.36, 1];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState(null);
  const reduceMotion = useReducedMotion();

  // Transparent at the top, solid with a border once scrolled
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track which section is currently on screen (hero leaves nothing active)
  useEffect(() => {
    const ids = navLinks.map((link) => link.href.slice(1));
    const visible = new Set();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        });
        setActiveId(ids.find((id) => visible.has(id)) ?? null);
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );

    ids.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isOpen]);

  // Escape closes the menu, and resizing up to desktop closes it too
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('keydown', handleKey);
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  const scrollToTop = (event) => {
    event.preventDefault();
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  };

  const itemVariants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 8 },
    visible: { opacity: 1, y: 0 },
  };
  const itemTransition = { duration: reduceMotion ? 0 : 0.25, ease: EASE };
  const rowTap = reduceMotion ? undefined : { scale: 0.98 };
  const linkTap = reduceMotion ? undefined : { scale: 0.96 };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-200 ${
        scrolled ? 'bg-surface/90 backdrop-blur-md border-b border-border py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="relative z-50 max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a
          href="#"
          onClick={scrollToTop}
          className="logo flex items-center gap-1.5 text-xl font-mono font-bold tracking-tight text-primary rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <span className="logo-mark">&lt;/&gt;</span>
          <span>{personalInfo.name}</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              whileTap={linkTap}
              className={`nav-link text-sm font-medium text-secondary rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                activeId === link.href.slice(1) ? 'is-active' : ''
              }`}
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href={personalInfo.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            whileTap={rowTap}
            className="gh-pill flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-sm font-medium text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <Code size={18} />
            <span>GitHub</span>
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          className="-mr-2 flex h-11 w-11 items-center justify-center rounded-lg text-primary md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 top-0 h-0.5 w-6 rounded bg-current transition-all duration-200 motion-reduce:transition-none ${
                isOpen ? 'translate-y-[7px] rotate-45' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-6 rounded bg-current transition-all duration-200 motion-reduce:transition-none ${
                isOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-0.5 w-6 rounded bg-current transition-all duration-200 motion-reduce:transition-none ${
                isOpen ? '-translate-y-[7px] -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              key="backdrop"
              aria-hidden="true"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.25 }}
              className="fixed inset-0 z-40 bg-background/60 md:hidden"
            />

            <motion.div
              key="panel"
              id="mobile-menu"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: reduceMotion ? 0 : 0.25, ease: EASE }}
              className="absolute top-full left-0 z-50 w-full rounded-b-2xl border-b border-border bg-surface px-6 pb-6 shadow-xl md:hidden"
            >
              <motion.div
                className="flex flex-col divide-y divide-border"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.04 } },
                }}
              >
                {navLinks.map((link) => {
                  const isActive = activeId === link.href.slice(1);
                  return (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      variants={itemVariants}
                      transition={itemTransition}
                      whileTap={rowTap}
                      onClick={() => setIsOpen(false)}
                      className={`relative flex min-h-[52px] w-full items-center justify-between pl-4 pr-2 text-[1.0625rem] font-medium transition-colors active:bg-surface-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                        isActive ? 'text-accent' : 'text-secondary'
                      }`}
                    >
                      {isActive && (
                        <span
                          aria-hidden="true"
                          className="absolute left-0 top-0 h-full w-[3px] bg-accent"
                        />
                      )}
                      <span>{link.name}</span>
                      <ArrowRight size={18} aria-hidden="true" className="text-muted" />
                    </motion.a>
                  );
                })}
              </motion.div>

              <motion.a
                href={personalInfo.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                initial={{ opacity: 0, y: reduceMotion ? 0 : 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...itemTransition, delay: reduceMotion ? 0 : navLinks.length * 0.04 }}
                whileTap={rowTap}
                onClick={() => setIsOpen(false)}
                className="gh-pill mt-5 flex w-full items-center justify-center gap-2 rounded-full border border-border py-3 text-base font-medium text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <Code size={20} />
                <span>GitHub</span>
              </motion.a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
