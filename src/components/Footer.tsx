import { Heart, Github, Linkedin, Code2, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <span>Designed & Developed with</span>
              <Heart size={14} className="text-accent fill-accent" />
              <span>by</span>
              <span className="font-semibold text-foreground">Anushka Palewar</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/anushka-palewar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://leetcode.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
                aria-label="LeetCode"
              >
                <Code2 size={20} />
              </a>
              <a
                href="mailto:anushka@example.com"
                className="p-2 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>

            {/* Year */}
            <p className="text-sm text-muted-foreground">
              © {currentYear} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
