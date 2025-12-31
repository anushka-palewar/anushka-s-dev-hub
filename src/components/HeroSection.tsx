import { Github, Mail, ArrowDown, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-slide-up opacity-0">
            <Sparkles size={16} />
            <span>Open to Opportunities</span>
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-slide-up opacity-0 animation-delay-100">
            Hi, I'm{' '}
            <span className="text-gradient">Anushka Palewar</span>
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 animate-slide-up opacity-0 animation-delay-200">
            Java Spring Boot Full-Stack Developer | Machine Learning Enthusiast | Problem Solver
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-muted-foreground/80 max-w-xl mx-auto mb-10 animate-slide-up opacity-0 animation-delay-300">
            I build scalable web applications and enjoy solving algorithmic problems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up opacity-0 animation-delay-400">
            <Button variant="hero" size="lg" asChild>
              <a href="#projects">
                View Projects
                <ArrowDown size={18} />
              </a>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <a href="https://github.com/anushka-palewar" target="_blank" rel="noopener noreferrer">
                <Github size={18} />
                GitHub
              </a>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <a href="#contact">
                <Mail size={18} />
                Contact Me
              </a>
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="animate-float">
            <a
              href="#about"
              className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
              <ArrowDown size={20} className="animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
