import { Terminal, Github, Linkedin, Code2, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-background border-t-2 border-foreground">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-4">
            <Terminal size={20} className="text-primary" />
            <p className="text-sm text-muted-foreground">
              <span className="text-primary">$</span> echo "Designed & Developed by{' '}
              <span className="text-foreground font-bold">Anushka Palewar</span>"
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/anushka-palewar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border-2 border-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border-2 border-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="https://leetcode.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border-2 border-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="LeetCode"
            >
              <Code2 size={16} />
            </a>
            <a
              href="mailto:anushka@example.com"
              className="p-2 border-2 border-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
          </div>

          {/* Year */}
          <p className="text-xs text-muted-foreground font-mono">
            © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
