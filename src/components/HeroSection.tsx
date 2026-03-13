import { Github, Mail, ArrowDown, ChevronRight } from 'lucide-react';
import { scrollToSection } from '@/lib/utils';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToSection(href);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-background pt-20">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          {/* Terminal Header */}
          <div className="terminal-box mb-8">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b-2 border-foreground">
              <div className="w-3 h-3 bg-red-500 border border-foreground rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 border border-foreground rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 border border-foreground rounded-full"></div>
              <span className="ml-4 text-xs text-muted-foreground font-mono">~/portfolio</span>
            </div>

            {/* Content */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-primary font-bold">$</span>
                <span className="text-muted-foreground text-sm font-mono">whoami</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Anushka<br />
                <span className="text-primary underline decoration-foreground decoration-4 underline-offset-8">Palewar</span>
                <span className="animate-blink">_</span>
              </h1>

              <div className="flex items-center gap-2 mt-4">
                <span className="text-primary font-bold">$</span>
                <span className="text-muted-foreground text-sm font-mono">cat roles.txt</span>
              </div>

              <div className="text-lg md:text-xl text-foreground font-mono min-h-[60px]">
                <Typewriter
                  options={{
                    strings: [
                      'Java Spring Boot Full-Stack Developer',
                      'Machine Learning Enthusiast',
                      'Problem Solver'
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    deleteSpeed: 30,
                    wrapperClassName: "typewriter-wrapper",
                    cursorClassName: "typewriter-cursor text-primary"
                  }}
                />
              </div>

              <div className="flex items-center gap-2 mt-4">
                <span className="text-primary font-bold">$</span>
                <span className="text-muted-foreground text-sm font-mono">cat mission.txt</span>
              </div>

              <p className="text-muted-foreground leading-relaxed font-mono">
                I build scalable web applications and enjoy solving algorithmic problems.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#projects" 
              className="brutalist-btn-primary flex items-center justify-center gap-2 group"
              onClick={(e) => handleCtaClick(e, '#projects')}
            >
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              view_projects
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://github.com/anushka-palewar"
              target="_blank"
              rel="noopener noreferrer"
              className="brutalist-btn flex items-center justify-center gap-2"
            >
              <Github size={18} />
              github
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#contact" 
              className="brutalist-btn flex items-center justify-center gap-2"
              onClick={(e) => handleCtaClick(e, '#contact')}
            >
              <Mail size={18} />
              contact_me
            </motion.a>
          </div>

          {/* Scroll indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-16 flex items-center gap-2 text-muted-foreground cursor-pointer"
            onClick={() => scrollToSection('#about')}
          >
            <ArrowDown size={16} className="animate-bounce" />
            <span className="text-xs uppercase tracking-widest font-mono">scroll_down</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;


