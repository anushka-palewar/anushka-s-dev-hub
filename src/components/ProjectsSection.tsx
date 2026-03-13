import { Github, Newspaper, Tv, Folder, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Sankalp AI',
    subtitle: 'Dream Visualization Platform',
    icon: Folder,
    tech: ['Spring Boot', 'React.js', 'PostgreSQL', 'REST APIs', 'JWT Authentication'],
    description: [
      'Built a full-stack platform to help users define, visualize, and track personal goals',
      'Developed a dashboard with milestone tracking, life analytics, and deadline risk indicators',
      'Implemented secure authentication and vision board features',
    ],
    github: 'https://github.com/anushka-palewar/Lakshya',
  },
  {
    title: 'NewsBuddy',
    subtitle: 'Role-Based News Management System',
    icon: Newspaper,
    tech: ['Java', 'Spring Boot', 'React.js', 'MySQL', 'Spring Security', 'REST APIs'],
    description: [
      'Developed a role-based news management platform for digital newspapers and TV channels',
      'Implemented secure admin access for efficient content management',
      'Focused on performance, scalability, and secure data handling',
    ],
    github: 'https://github.com/anushka-palewar/NewsBuddy',
  },
  {
    title: 'ODOP Marketplace',
    subtitle: 'Seller Portal for Artisans',
    icon: ShoppingBag,
    tech: ['React.js', 'Bootstrap', 'Node.js', 'Express.js', 'MySQL'],
    description: [
      'Full-stack platform supporting Government of MP’s One District One Product initiative',
      'Enables artisans to upload products and manage inventory via a responsive dashboard',
      'Built with secure authentication and efficient back-end management',
    ],
    github: 'https://github.com/Vaishvik-Jaiswal/Hack-Make',
  },
  {
    title: 'Netflix UI Clone',
    subtitle: 'Frontend Project',
    icon: Tv,
    tech: ['HTML', 'CSS', 'JavaScript'],
    description: [
      'Developed a responsive Netflix homepage clone with modern UI',
      'Improved digital design skills and advanced CSS layout techniques',
      'Implemented mobile-first responsive transitions and hover effects',
    ],
    github: 'https://github.com/anushka-palewar/NetflixClone',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-card border-y-2 border-foreground overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-primary text-sm mb-2 font-mono">{'// SECTION'}</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            projects<span className="text-primary">()</span>
          </h2>
          <p className="text-muted-foreground mt-2 font-mono">A collection of my work</p>
          <div className="w-24 h-1 bg-foreground mt-4"></div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
              className="terminal-box group bg-background flex flex-col h-full hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] border-2 border-foreground"
            >
              {/* Header */}
              <div className="flex items-center gap-2 mb-4 pb-3 border-b-2 border-foreground">
                <project.icon size={20} className="text-primary" />
                <span className="font-bold font-mono text-lg">{project.title}</span>
                <div className="ml-auto flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-foreground/20"></div>
                  <div className="w-2 h-2 rounded-full bg-foreground/20"></div>
                </div>
              </div>

              <p className="text-xs text-muted-foreground mb-4 font-mono italic">{project.subtitle}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span key={tech} className="code-tag text-[10px] md:text-xs font-mono">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Description */}
              <ul className="space-y-3 text-sm text-muted-foreground flex-grow mb-6 font-mono">
                {project.description.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary font-bold">{'>'}</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Links */}
              <div className="flex gap-4 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold hover:text-primary transition-colors border-2 border-foreground p-2 bg-background shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-mono"
                >
                  <Github size={16} />
                  view_code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

