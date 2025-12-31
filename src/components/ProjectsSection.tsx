import { ExternalLink, Github, Newspaper, SmilePlus, Tv, FileQuestion } from 'lucide-react';
import { Button } from './ui/button';

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
      'Designed structured workflows for adding, updating, and organizing news content',
      'Focused on performance, scalability, and secure data handling',
    ],
    github: null,
    live: null,
  },
  {
    title: 'Emotion Detection in News Headlines',
    subtitle: 'Machine Learning Project',
    icon: SmilePlus,
    featured: true,
    tech: ['Python', 'TF-IDF', 'Naive Bayes', 'Flask'],
    description: [
      'Built a machine learning system to classify emotions in news headlines',
      'Applied text preprocessing and feature extraction techniques',
      'Trained and evaluated ML models for accurate emotion prediction',
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
      'Automatic result evaluation',
      'MVC-based backend structure',
    ],
    github: 'https://github.com/anushka-palewar/QuizApp',
    live: null,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-card">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A collection of projects showcasing my skills in full-stack development and machine learning
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
          </div>

          {/* Featured Projects */}
          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            {projects
              .filter((p) => p.featured)
              .map((project, index) => (
                <div
                  key={project.title}
                  className="group relative p-8 bg-background rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 card-hover"
                >
                  {/* Featured badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full">
                      Main Project
                    </span>
                  </div>

                  {/* Icon and Title */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <project.icon size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                      <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    {project.description.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-1.5">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Links */}
                  {(project.github || project.live) && (
                    <div className="flex gap-3 mt-6 pt-6 border-t border-border">
                      {project.github && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github size={16} />
                            Code
                          </a>
                        </Button>
                      )}
                      {project.live && (
                        <Button variant="default" size="sm" asChild>
                          <a href={project.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink size={16} />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              ))}
          </div>

          {/* Other Projects */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects
              .filter((p) => !p.featured)
              .map((project) => (
                <div
                  key={project.title}
                  className="group p-6 bg-background rounded-xl border border-border hover:border-primary/30 transition-all duration-300 card-hover"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                      <project.icon size={22} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                      <p className="text-xs text-muted-foreground">{project.subtitle}</p>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs font-medium bg-muted text-muted-foreground rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <ul className="space-y-1.5 text-muted-foreground text-sm mb-4">
                    {project.description.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Links */}
                  {project.github && (
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                        View on GitHub
                      </a>
                    </Button>
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
