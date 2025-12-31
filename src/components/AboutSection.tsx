import { Code2, Brain, Trophy } from 'lucide-react';

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
    <section id="about" className="section-padding bg-card border-y-2 border-foreground">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-primary text-sm mb-2">{'// SECTION'}</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            about_me<span className="text-primary">()</span>
          </h2>
          <div className="w-24 h-1 bg-foreground mt-4"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Text Content */}
          <div className="terminal-box">
            <p className="text-xs text-muted-foreground mb-4">{'/* bio.md */'}</p>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
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
          </div>

          {/* Highlight Cards */}
          <div className="space-y-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="terminal-box-sm group hover:translate-x-1 hover:-translate-y-1 transition-transform"
                style={{ 
                  boxShadow: `${4 + index}px ${4 + index}px 0 hsl(var(--foreground))` 
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 border-2 border-foreground bg-background">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
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

export default AboutSection;
