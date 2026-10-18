import { personalInfo } from '../data/portfolio';
import { Code, User, Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="text-center md:text-left">
          <a href="#" className="text-xl font-mono font-bold tracking-tight text-primary hover:text-accent transition-colors mb-2 inline-block">
            &lt;/&gt; {personalInfo.name}
          </a>
          <p className="text-secondary text-sm mb-1">{personalInfo.role}</p>
          <p className="text-muted text-xs italic">"I build real, working software — and I care about the details."</p>
        </div>

        <div className="flex items-center gap-6">
          <a href={personalInfo.contact.github} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-colors">
            <Code size={20} />
            <span className="sr-only">GitHub</span>
          </a>
          <a href={personalInfo.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-colors">
            <User size={20} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href={personalInfo.contact.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-muted hover:text-primary transition-colors">
            <FaWhatsapp size={20} />
            <span className="sr-only">WhatsApp</span>
          </a>
          <a href={`mailto:${personalInfo.contact.email}`} className="text-muted hover:text-primary transition-colors">
            <Mail size={20} />
            <span className="sr-only">Email</span>
          </a>
        </div>

        <div className="text-muted text-sm font-mono">
          © {currentYear} {personalInfo.fullName}
        </div>

      </div>
    </footer>
  );
}
