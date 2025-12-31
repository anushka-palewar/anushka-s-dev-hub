import { Server, Layout, Database, Brain, Settings } from 'lucide-react';

const skillCategories = [
  {
    title: 'Backend Development',
    icon: Server,
    color: 'from-cyan-500 to-blue-500',
    skills: ['Java (Core & Advanced)', 'Spring Boot', 'Spring Security', 'REST APIs', 'JDBC', 'Servlets & JSP'],
  },
  {
    title: 'Frontend Development',
    icon: Layout,
    color: 'from-violet-500 to-purple-500',
    skills: ['HTML', 'CSS', 'JavaScript', 'React (Basics)'],
  },
  {
    title: 'Database',
    icon: Database,
    color: 'from-emerald-500 to-teal-500',
    skills: ['SQL', 'MySQL'],
  },
  {
    title: 'Machine Learning',
    icon: Brain,
    color: 'from-rose-500 to-pink-500',
    skills: ['ML Fundamentals', 'Text Preprocessing', 'TF-IDF', 'Naive Bayes', 'Flask Deployment'],
  },
  {
    title: 'Core CS & Tools',
    icon: Settings,
    color: 'from-amber-500 to-orange-500',
    skills: ['Data Structures & Algorithms', 'OOPs', 'DBMS', 'GitHub', 'VS Code'],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-background">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technical <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I work with to bring ideas to life
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="group relative p-6 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 card-hover overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  {/* Icon and Title */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} text-white shadow-lg`}>
                      <category.icon size={22} />
                    </div>
                    <h3 className="text-lg font-semibold">{category.title}</h3>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-sm bg-muted text-muted-foreground rounded-lg font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
