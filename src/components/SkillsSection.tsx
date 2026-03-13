import { Server, Layout, Database, Brain, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

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
    <section id="skills" className="section-padding bg-background overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-primary text-sm mb-2">{'// SECTION'}</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            tech_stack<span className="text-primary">()</span>
          </h2>
          <p className="text-muted-foreground mt-2 font-mono">Technologies and tools I work with</p>
          <div className="w-24 h-1 bg-foreground mt-4"></div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="terminal-box group hover:translate-x-1 hover:-translate-y-1 transition-transform bg-card shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              {/* Icon and Title */}
              <div className="flex items-center gap-3 mb-5 pb-3 border-b border-border">
                <div className="p-2 border-2 border-foreground bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <category.icon size={20} />
                </div>
                <h3 className="font-bold uppercase tracking-wider font-mono">{category.title}</h3>
              </div>

              {/* Skills */}
              <div className="space-y-2">
                {category.skills.map((skill, i) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 text-sm font-mono"
                  >
                    <span className="text-primary font-bold">{'>'}</span>
                    <span className="text-muted-foreground hover:text-foreground transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

