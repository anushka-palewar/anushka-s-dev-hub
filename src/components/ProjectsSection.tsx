import { ExternalLink, Github, Newspaper, SmilePlus, Tv, FileQuestion, Folder } from 'lucide-react';

const projects = [
  {
    title: 'NewsBuddy',
    subtitle: 'Role-Based News Management System',
    icon: Newspaper,
    featured: true,
    tech: ['Java', 'Spring Boot', 'React.js', 'MySQL', 'Spring Security', 'REST APIs'],
    description: [
      'Developed a role-based news management platform for publishing digital newspapers, live TV channels, and weekly news summaries',
      'Implemented secure admin access for efficient content management',
      'Focused on performance, scalability, and secure data handling',
    ],
    github: null,
    live: null,
  },
  {
    title: 'Emotion Detection',
    subtitle: 'Machine Learning Project',
    icon: SmilePlus,
    featured: true,
    tech: ['Python', 'TF-IDF', 'Naive Bayes', 'Flask'],
    description: [
      'Built a machine learning system to classify emotions in news headlines',
      'Applied text preprocessing and feature extraction techniques',
      'Deployed the model using a REST API for real-time inference',
    ],
    github: null,
    live: null,
  },
  {
    title: 'Netflix UI Clone',
    subtitle: 'Frontend Project',
    icon: Tv,
    featured: false,
    tech: ['HTML', 'CSS'],
    description: [
      'Developed a responsive Netflix homepage clone',
      'Improved UI design and CSS layout skills',
    ],
    github: 'https://github.com/anushka-palewar/NetflixClone',
    live: null,
  },
  {
    title: 'Quiz Management System',
    subtitle: 'Full-Stack Web Application',
    icon: FileQuestion,
    featured: false,
    tech: ['Java', 'Servlet', 'JSP', 'JDBC', 'SQL'],
    description: [
      'User authentication and quiz management',
      'Automatic result evaluation with MVC structure',
    ],
    github: 'https://github.com/anushka-palewar/QuizApp',
    live: null,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-card border-y-2 border-foreground">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-primary text-sm mb-2">{'// SECTION'}</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            projects<span className="text-primary">()</span>
          </h2>
          <p className="text-muted-foreground mt-2">A collection of my work</p>
          <div className="w-24 h-1 bg-foreground mt-4"></div>
        </div>

        {/* Featured Projects */}
        <div className="mb-8">
          <p className="text-xs text-muted-foreground mb-4 flex items-center gap-2">
            <Folder size={14} />
            {'// MAIN PROJECTS'}
          </p>
          <div className="grid lg:grid-cols-2 gap-6">
            {projects
              .filter((p) => p.featured)
              .map((project) => (
                <div
                  key={project.title}
                  className="terminal-box group hover:translate-x-1 hover:-translate-y-1 transition-transform"
                >
                  {/* Header */}
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b-2 border-foreground">
                    <project.icon size={20} />
                    <span className="font-bold">{project.title}</span>
                    <span className="ml-auto text-xs bg-primary text-primary-foreground px-2 py-1 border border-foreground">
                      MAIN
                    </span>
                  </div>

                  <p className="text-xs text-muted-foreground mb-4">{project.subtitle}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="code-tag text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {project.description.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">{'>'}</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <p className="text-xs text-muted-foreground mb-4 flex items-center gap-2">
            <Folder size={14} />
            {'// OTHER PROJECTS'}
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {projects
              .filter((p) => !p.featured)
              .map((project) => (
                <div
                  key={project.title}
                  className="terminal-box-sm group hover:translate-x-1 hover:-translate-y-1 transition-transform"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <project.icon size={18} />
                    <div>
                      <h3 className="font-bold text-sm">{project.title}</h3>
                      <p className="text-xs text-muted-foreground">{project.subtitle}</p>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tech.map((tech) => (
                      <span key={tech} className="code-tag text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <ul className="space-y-1 text-xs text-muted-foreground mb-4">
                    {project.description.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary">{'>'}</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Links */}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold hover:text-primary transition-colors"
                    >
                      <Github size={14} />
                      view_code
                    </a>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
