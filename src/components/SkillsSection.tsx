import { Server, Layout, Database, Brain, Settings } from 'lucide-react';

const skillCategories = [
  {
    title: 'backend',
    icon: Server,
    skills: ['Java (Core & Advanced)', 'Spring Boot', 'Spring Security', 'REST APIs', 'JDBC', 'Servlets & JSP'],
  },
  {
    title: 'frontend',
    icon: Layout,
    skills: ['HTML', 'CSS', 'JavaScript', 'React (Basics)'],
  },
  {
    title: 'database',
    icon: Database,
    skills: ['SQL', 'MySQL'],
  },
  {
    title: 'ml',
    icon: Brain,
    skills: ['ML Fundamentals', 'Text Preprocessing', 'TF-IDF', 'Naive Bayes', 'Flask Deployment'],
  },
  {
    title: 'tools',
    icon: Settings,
    skills: ['Data Structures & Algorithms', 'OOPs', 'DBMS', 'GitHub', 'VS Code'],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-primary text-sm mb-2">{'// SECTION'}</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            tech_stack<span className="text-primary">()</span>
          </h2>
          <p className="text-muted-foreground mt-2">Technologies and tools I work with</p>
          <div className="w-24 h-1 bg-foreground mt-4"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="terminal-box group hover:translate-x-1 hover:-translate-y-1 transition-transform"
            >
              {/* Icon and Title */}
              <div className="flex items-center gap-3 mb-5 pb-3 border-b border-border">
                <div className="p-2 border-2 border-foreground">
                  <category.icon size={20} />
                </div>
                <h3 className="font-bold uppercase tracking-wider">{category.title}</h3>
              </div>

              {/* Skills */}
              <div className="space-y-2">
                {category.skills.map((skill, i) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 text-sm"
                  >
                    <span className="text-primary">{'>'}</span>
                    <span className="text-muted-foreground hover:text-foreground transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
