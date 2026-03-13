import { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { scrollToSection } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'about', href: '#about' },
  { name: 'skills', href: '#skills' },
  { name: 'projects', href: '#projects' },
  { name: 'education', href: '#education' },
  { name: 'contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToSection(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-card/90 backdrop-blur-md border-b-2 border-foreground py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-12 md:h-16">
          {/* Logo */}
          <motion.a 
            whileHover={{ scale: 1.05 }}
            href="#" 
            className="flex items-center gap-2 text-lg font-bold hover:text-primary transition-colors font-mono"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <Terminal size={20} className="text-primary" />
            <span className="hidden sm:inline">anushka_palewar</span>
            <span className="sm:hidden">anushka.dev</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-mono hover:text-primary transition-colors relative group"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity absolute -left-4">{'>'}</span>
                {link.name}
              </a>
            ))}
            <motion.a 
              whileHover={{ y: -2, x: -2, boxShadow: "4px 4px 0px 0px rgba(0,0,0,1)" }}
              href="#contact" 
              className="brutalist-btn-primary text-xs py-2 px-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              hire_me()
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 border-2 border-foreground bg-card shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden absolute top-full left-0 right-0 bg-card border-b-2 border-foreground overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="py-3 px-4 font-mono hover:bg-primary hover:text-primary-foreground transition-all border-b border-muted-foreground/20 flex items-center gap-2"
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    <span className="text-primary group-hover:text-primary-foreground">{'>'}</span> {link.name}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="brutalist-btn-primary text-center mt-6 text-sm py-4"
                  onClick={(e) => handleNavClick(e, '#contact')}
                >
                  hire_me()
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;



