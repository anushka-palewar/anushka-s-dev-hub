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
  },
  {
    title: 'Java Full-Stack Development',
    description: 'Certification by Eduskills Academy',
  },
  {
    title: 'Active LeetCode Problem Solver',
    description: 'Continuously improving DSA skills',
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-primary text-sm mb-2">{'// SECTION'}</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            education<span className="text-primary">()</span>
          </h2>
          <div className="w-24 h-1 bg-foreground mt-4"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div>
            <p className="text-xs text-muted-foreground mb-6 flex items-center gap-2">
              <GraduationCap size={14} />
              {'// ACADEMIC BACKGROUND'}
            </p>

            <div className="space-y-4">
              {education.map((item, index) => (
                <div
                  key={index}
                  className={`terminal-box-sm ${item.current ? 'border-primary' : ''}`}
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h4 className="font-bold text-sm">{item.degree}</h4>
                    {item.current && (
                      <span className="text-xs bg-primary text-primary-foreground px-2 py-0.5 border border-foreground">
                        NOW
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">{item.institution}</p>
                  {item.period && (
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Calendar size={12} />
                      {item.period}
                    </div>
                  )}
                  {item.percentage && (
                    <div className="mt-2 inline-block code-tag text-primary font-bold">
                      {item.percentage}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <p className="text-xs text-muted-foreground mb-6 flex items-center gap-2">
              <Award size={14} />
              {'// ACHIEVEMENTS & CERTIFICATIONS'}
            </p>

            <div className="space-y-4">
              {achievements.map((item, index) => (
                <div
                  key={index}
                  className="terminal-box-sm group hover:translate-x-1 hover:-translate-y-1 transition-transform"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 border-2 border-foreground bg-background">
                      <Award size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
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

export default EducationSection;
