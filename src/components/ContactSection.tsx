import { Mail, Github, Linkedin, Code2, Send, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/anushka-palewar',
    handle: '@anushka-palewar',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/anushka-palewar/',
    handle: '@anushka-palewar',
  },
  {
    name: 'LeetCode',
    icon: Code2,
    href: 'https://leetcode.com/u/Anushka_Palewar/',
    handle: '@Anushka_Palewar',
  },
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:anushkapalewar@gmail.com',
    handle: 'anushkapalewar@gmail.com',
  },
  {
    name: 'Phone',
    icon: Phone,
    href: 'tel:+918888945190',
    handle: '+91 8888945190',
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-card border-y-2 border-foreground overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-primary text-sm mb-2">{'// SECTION'}</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            contact<span className="text-primary">()</span>
          </h2>
          <div className="w-24 h-1 bg-foreground mt-4"></div>
        </motion.div>

        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="terminal-box mb-8 bg-background shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
          >
            <p className="text-xs text-muted-foreground mb-4 font-mono">{'/* message.txt */'}</p>
            <p className="text-lg mb-6 font-mono">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <a href="mailto:anushkapalewar@gmail.com" className="brutalist-btn-primary inline-flex items-center gap-2 group">
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              send_message()
            </a>
          </motion.div>

          {/* Social Links */}
          <p className="text-xs text-muted-foreground mb-4 font-mono">{'// CONNECT WITH ME'}</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="terminal-box-sm bg-background group hover:translate-x-1 hover:-translate-y-1 transition-transform flex items-center gap-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
              >
                <div className="p-2 border-2 border-foreground bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <link.icon size={20} />
                </div>
                <div>
                  <p className="font-bold text-sm font-mono">{link.name}</p>
                  <p className="text-xs text-muted-foreground font-mono">{link.handle}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

