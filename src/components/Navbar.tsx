import { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { scrollToSection } from '@/lib/utils';

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-card border-b-2 border-foreground'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a 
            href="#" 
            className="flex items-center gap-2 text-lg font-bold hover:text-primary transition-colors"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <Terminal size={20} />
            <span>anushka_palewar</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-mono hover:text-primary transition-colors"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {'>'} {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="brutalist-btn-primary text-xs"
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              hire_me()
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 border-2 border-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-card border-b-2 border-foreground">
            <div className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="py-3 px-4 font-mono hover:bg-muted transition-colors"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {'>'} {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="brutalist-btn-primary text-center mt-4 text-sm"
                onClick={(e) => handleNavClick(e, '#contact')}
              >
                hire_me()
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;


