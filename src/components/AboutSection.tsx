import { Code2, Brain, Trophy } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Full-Stack Development',
    description: 'Building end-to-end web applications with modern technologies',
  },
  {
    icon: Brain,
    title: 'Machine Learning',
    description: 'Applying ML concepts to solve real-world problems',
  },
  {
    icon: Trophy,
    title: 'Problem Solving',
    description: 'Active LeetCode practitioner improving DSA skills daily',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Hi, I'm <span className="text-foreground font-semibold">Anushka Palewar</span>, a Computer Science Engineering student at RCOEM, Nagpur and an aspiring Java Spring Boot Full-Stack Developer.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I enjoy building scalable web applications and solving algorithmic problems. I have hands-on experience in <span className="text-foreground font-medium">Java, Spring Boot, REST APIs, SQL</span>, and front-end technologies like <span className="text-foreground font-medium">HTML, CSS, JavaScript, and React</span>.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Along with full-stack development, I have worked on <span className="text-foreground font-medium">Machine Learning projects</span>, applying concepts such as text preprocessing, feature extraction, and model deployment.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I actively practice <span className="text-foreground font-medium">Data Structures & Algorithms</span> on LeetCode and continuously work on improving my problem-solving skills.
              </p>
            </div>

            {/* Highlight Cards */}
            <div className="space-y-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="group p-6 bg-background rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
