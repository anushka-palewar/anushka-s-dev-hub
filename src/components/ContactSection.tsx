import { Mail, Github, Linkedin, Code2, Send } from 'lucide-react';

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
    href: 'https://linkedin.com',
    handle: '/in/anushka',
  },
  {
    name: 'LeetCode',
    icon: Code2,
    href: 'https://leetcode.com',
    handle: '@anushka',
  },
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:anushka@example.com',
    handle: 'anushka@example.com',
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-card border-y-2 border-foreground">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-primary text-sm mb-2">{'// SECTION'}</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            contact<span className="text-primary">()</span>
          </h2>
          <div className="w-24 h-1 bg-foreground mt-4"></div>
        </div>

        <div className="max-w-3xl">
          <div className="terminal-box mb-8">
            <p className="text-xs text-muted-foreground mb-4">{'/* message.txt */'}</p>
            <p className="text-lg mb-6">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <a href="mailto:anushka@example.com" className="brutalist-btn-primary inline-flex items-center gap-2">
              <Send size={18} />
              send_message()
            </a>
          </div>

          {/* Social Links */}
          <p className="text-xs text-muted-foreground mb-4">{'// CONNECT WITH ME'}</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="terminal-box-sm group hover:translate-x-1 hover:-translate-y-1 transition-transform flex items-center gap-4"
              >
                <div className="p-2 border-2 border-foreground bg-background group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <link.icon size={20} />
                </div>
                <div>
                  <p className="font-bold text-sm">{link.name}</p>
                  <p className="text-xs text-muted-foreground">{link.handle}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
