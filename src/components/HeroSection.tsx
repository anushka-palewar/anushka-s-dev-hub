import { Github, Mail, ArrowDown, ChevronRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background pt-20">
      <div className="container-custom">
        <div className="max-w-4xl">
          {/* Terminal Header */}
          <div className="terminal-box mb-8">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b-2 border-foreground">
              <div className="w-3 h-3 bg-accent border border-foreground"></div>
              <div className="w-3 h-3 bg-primary border border-foreground"></div>
              <div className="w-3 h-3 bg-muted border border-foreground"></div>
              <span className="ml-4 text-xs text-muted-foreground font-mono">~/portfolio</span>
            </div>

            {/* Content */}
            <div className="space-y-4">
              <p className="text-muted-foreground text-sm">
                <span className="text-primary">$</span> whoami
              </p>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Anushka<br />
                <span className="text-primary">Palewar</span>
                <span className="animate-blink">_</span>
              </h1>

              <p className="text-muted-foreground text-sm mt-4">
                <span className="text-primary">$</span> cat role.txt
              </p>

              <p className="text-lg md:text-xl text-foreground font-mono">
                Java Spring Boot Full-Stack Developer<br />
                Machine Learning Enthusiast<br />
                Problem Solver
              </p>

              <p className="text-muted-foreground text-sm mt-4">
                <span className="text-primary">$</span> cat mission.txt
              </p>

              <p className="text-muted-foreground leading-relaxed">
                I build scalable web applications and enjoy solving algorithmic problems.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#projects" className="brutalist-btn-primary flex items-center justify-center gap-2">
              <ChevronRight size={18} />
              view_projects
            </a>
            <a
              href="https://github.com/anushka-palewar"
              target="_blank"
              rel="noopener noreferrer"
              className="brutalist-btn flex items-center justify-center gap-2"
            >
              <Github size={18} />
              github
            </a>
            <a href="#contact" className="brutalist-btn flex items-center justify-center gap-2">
              <Mail size={18} />
              contact_me
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="mt-16 flex items-center gap-2 text-muted-foreground">
            <ArrowDown size={16} className="animate-bounce" />
            <span className="text-xs uppercase tracking-widest">scroll_down</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
