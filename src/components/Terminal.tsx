import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { scrollToSection } from '@/lib/utils';

interface CommandOutput {
  command: string;
  output: React.ReactNode;
}

const Terminal = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([]);
  const [isOpen, setIsOpen] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let output: React.ReactNode;

    switch (cmd) {
      case 'help':
        output = (
          <ul className="list-none space-y-1 text-primary">
            <li><span className="text-foreground font-bold">about</span> - Learn about me</li>
            <li><span className="text-foreground font-bold">skills</span> - View my tech stack</li>
            <li><span className="text-foreground font-bold">projects</span> - See what I've built</li>
            <li><span className="text-foreground font-bold">contact</span> - Find my contact info</li>
            <li><span className="text-foreground font-bold">resume</span> - Download my resume</li>
            <li><span className="text-foreground font-bold">clear</span> - Clear terminal history</li>
          </ul>
        );
        break;
      case 'about':
        output = "Hi! I'm Anushka Palewar, a CSE student at RCOEM and an aspiring Full-Stack Developer specializing in Java Spring Boot and React.";
        scrollToSection('#about');
        break;
      case 'skills':
        output = "Languages: Java, Python, C. Backend: Spring Boot, Node.js, Express. Frontend: React.js, HTML5, CSS3, JS. Databases: MySQL, PostgreSQL, MongoDB.";
        scrollToSection('#skills');
        break;
      case 'projects':
        output = "Key Projects: Sankalp AI (Dream Visualization), ODOP Marketplace (Seller Portal), NewsBuddy (News Portal).";
        scrollToSection('#projects');
        break;
      case 'contact':
        output = "Reach me at: anushkapalewar@gmail.com | LinkedIn: @anushka-palewar";
        scrollToSection('#contact');
        break;
      case 'resume':
        output = (
          <div className="flex flex-col gap-2">
            <span>[SYSTEM] Preparing resume download...</span>
            <a 
              href="/resume.pdf" 
              download="Anushka_Palewar_Resume.pdf"
              className="text-primary underline font-bold"
            >
              Click here if download doesn't start automatically
            </a>
          </div>
        );
        // Note: Actual download depends on file existence in public folder
        const link = document.createElement('a');
        link.href = '/resume.pdf'; // Make sure to put your resume.pdf in the public folder
        link.download = 'Anushka_Palewar_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      case 'whoami':
        output = "guest@anushka-dev-hub";
        break;
      default:
        output = `Command not found: ${cmd}. Type 'help' for available commands.`;
    }


    setHistory([...history, { command: cmd, output }]);
    setInput('');
  };

  if (!isOpen) return (
    <button 
      onClick={() => setIsOpen(true)}
      className="fixed bottom-4 right-4 bg-primary text-primary-foreground p-3 border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all z-40"
    >
      <TerminalIcon size={24} />
    </button>
  );

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="section-padding bg-background"
      id="terminal-section"
    >
      <div className="container-custom">
        <div className="mb-12">
          <p className="text-primary text-sm mb-2">{'// INTERACTIVE'}</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            interactive_terminal<span className="text-primary">()</span>
          </h2>
          <div className="w-24 h-1 bg-foreground mt-4"></div>
        </div>

        <div className="terminal-box bg-black text-green-500 font-mono p-0 overflow-hidden min-h-[400px] flex flex-col shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          {/* Terminal Title Bar */}
          <div className="bg-card border-b-2 border-foreground p-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 border border-foreground rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 border border-foreground rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 border border-foreground rounded-full"></div>
              <span className="text-xs text-foreground font-bold ml-2">guest@anushka-portfolio: ~</span>
            </div>
            <div className="flex gap-2">
              <Maximize2 size={14} className="text-foreground cursor-pointer" />
              <X 
                size={14} 
                className="text-foreground cursor-pointer" 
                onClick={() => setIsOpen(false)}
              />
            </div>
          </div>

          {/* Terminal Body */}
          <div 
            ref={scrollRef}
            className="p-4 flex-1 overflow-y-auto max-h-[400px] bg-black/95 scrollbar-thin scrollbar-thumb-foreground"
            onClick={() => inputRef.current?.focus()}
          >
            <div className="mb-4">
              <p className="text-white">Welcome to Anushka's CLI. Type <span className="text-primary font-bold">'help'</span> to see available commands.</p>
            </div>

            {history.map((item, index) => (
              <div key={index} className="mb-2">
                <div className="flex gap-2">
                  <span className="text-primary font-bold">$</span>
                  <span className="text-white">{item.command}</span>
                </div>
                <div className="text-green-400 pl-4 mt-1">
                  {item.output}
                </div>
              </div>
            ))}

            <form onSubmit={handleCommand} className="flex gap-2">
              <span className="text-primary font-bold">$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="bg-transparent border-none outline-none flex-1 text-white caret-primary"
                autoFocus
              />
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Terminal;
