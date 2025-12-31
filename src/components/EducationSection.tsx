import { GraduationCap, Award, Calendar } from 'lucide-react';

const education = [
  {
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'Shri Ramdeobaba College of Engineering and Management (RCOEM)',
    location: 'Nagpur',
    period: '2023 – 2027',
    current: true,
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Maharashtra State Board',
    percentage: '88.67%',
    current: false,
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Maharashtra State Board',
    percentage: '95%',
    current: false,
  },
];

const achievements = [
  {
    title: 'Smart India Hackathon (SIH) 2025',
    description: 'Internal Round Finalist',
    icon: Award,
  },
  {
    title: 'Java Full-Stack Development',
    description: 'Certification by Eduskills Academy',
    icon: GraduationCap,
  },
  {
    title: 'Active LeetCode Problem Solver',
    description: 'Continuously improving DSA skills',
    icon: Award,
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding bg-background">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Education & <span className="text-gradient">Achievements</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education Timeline */}
            <div>
              <h3 className="text-xl font-semibold mb-8 flex items-center gap-3">
                <GraduationCap className="text-primary" size={24} />
                Education
              </h3>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />

                <div className="space-y-8">
                  {education.map((item, index) => (
                    <div key={index} className="relative pl-12">
                      {/* Timeline dot */}
                      <div
                        className={`absolute left-2 top-1.5 w-5 h-5 rounded-full border-4 border-background ${
                          item.current ? 'bg-primary' : 'bg-muted-foreground/30'
                        }`}
                      />

                      <div className="p-5 bg-card rounded-xl border border-border hover:border-primary/30 transition-all duration-300">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-foreground">{item.degree}</h4>
                          {item.current && (
                            <span className="px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-full">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{item.institution}</p>
                        {item.period && (
                          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                            <Calendar size={12} />
                            {item.period}
                          </div>
                        )}
                        {item.percentage && (
                          <div className="mt-2 inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-lg">
                            {item.percentage}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h3 className="text-xl font-semibold mb-8 flex items-center gap-3">
                <Award className="text-primary" size={24} />
                Achievements & Certifications
              </h3>

              <div className="space-y-4">
                {achievements.map((item, index) => (
                  <div
                    key={index}
                    className="group p-5 bg-card rounded-xl border border-border hover:border-primary/30 transition-all duration-300 card-hover"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <item.icon size={22} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
