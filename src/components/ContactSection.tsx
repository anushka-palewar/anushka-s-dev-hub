import { Mail, Github, Linkedin, Code2, Send } from 'lucide-react';
import { Button } from './ui/button';

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/anushka-palewar',
    color: 'hover:bg-gray-900 hover:text-white',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://linkedin.com',
    color: 'hover:bg-blue-600 hover:text-white',
  },
  {
    name: 'LeetCode',
    icon: Code2,
    href: 'https://leetcode.com',
    color: 'hover:bg-amber-500 hover:text-white',
  },
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:anushka@example.com',
    color: 'hover:bg-primary hover:text-white',
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
          </div>

          {/* CTA */}
          <div className="mb-12">
            <Button variant="hero" size="xl" asChild>
              <a href="mailto:anushka@example.com">
                <Send size={20} />
                Get In Touch
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-3 px-6 py-4 bg-background rounded-xl border border-border transition-all duration-300 hover:border-transparent hover:shadow-lg ${link.color}`}
              >
                <link.icon size={22} className="transition-transform group-hover:scale-110" />
                <span className="font-medium">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
