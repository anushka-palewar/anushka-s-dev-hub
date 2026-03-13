import { Code2, Brain, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const highlights = [
  {
    icon: Code2,
    title: 'full_stack_dev',
    description: 'Building end-to-end web applications with modern technologies',
  },
  {
    icon: Brain,
    title: 'machine_learning',
    description: 'Applying ML concepts to solve real-world problems',
  },
  {
    icon: Trophy,
    title: 'problem_solver',
    description: 'Active LeetCode practitioner improving DSA skills daily',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-card border-y-2 border-foreground overflow-hidden">
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
            about_me<span className="text-primary">()</span>
          </h2>
          <div className="w-24 h-1 bg-foreground mt-4"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="terminal-box bg-background"
          >
            <p className="text-xs text-muted-foreground mb-4 font-mono">{'/* bio.md */'}</p>
            <div className="space-y-4 text-muted-foreground leading-relaxed font-mono">
              <p>
                Hi, I'm <span className="text-foreground font-bold">Anushka Palewar</span>, a Computer Science Engineering student at RCOEM, Nagpur and an aspiring Java Spring Boot Full-Stack Developer.
              </p>
              <p>
                I enjoy building scalable web applications and solving algorithmic problems. I have hands-on experience in <span className="text-primary">Java, Spring Boot, REST APIs, SQL</span>, and front-end technologies like <span className="text-primary">HTML, CSS, JavaScript, and React</span>.
              </p>
              <p>
                Along with full-stack development, I have worked on <span className="text-primary">Machine Learning projects</span>, applying concepts such as text preprocessing, feature extraction, and model deployment.
              </p>
              <p>
               I actively practice <span className="text-primary">Data Structures & Algorithms</span> on LeetCode and continuously work on improving my problem-solving skills.
              </p>
            </div>
          </motion.div>

          {/* Highlight Cards */}
          <div className="space-y-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="terminal-box-sm bg-background group hover:translate-x-1 hover:-translate-y-1 transition-transform"
                style={{ 
                  boxShadow: `${4 + index}px ${4 + index}px 0 hsl(var(--foreground))` 
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 border-2 border-foreground bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm font-mono">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

