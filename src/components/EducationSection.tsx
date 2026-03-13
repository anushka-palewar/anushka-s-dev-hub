import { GraduationCap, Award, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const education = [
  {
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'Shri Ramdeobaba College of Engineering and Management (RCOEM)',
    location: 'Nagpur',
    period: '2023 – 2027',
    current: true,
    percentage: 'CGPA: 9.39',
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
    title: 'LeetCode & CodeChef',
    description: 'Solved 200+ DSA problems improving complex problem-solving skills',
  },
  {
    title: 'Deep Learning (NVIDIA)',
    description: 'Fundamentals of Deep Learning Certificate of Competency',
  },
  {
    title: 'Full-Stack Certifications',
    description: 'Eduskills Virtual Internship & Java Full Stack Development Specialist',
  },
  {
    title: 'NSS & REEF Club',
    description: 'Active member involved in community service and environmental sustainability initiatives. Participated in blood donation drives and campus environmental programs while collaborating with teams to create positive social impact.'
  },
];


const EducationSection = () => {
  return (
    <section id="education" className="section-padding bg-background overflow-hidden border-b-2 border-foreground">
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
            education<span className="text-primary">()</span>
          </h2>
          <div className="w-24 h-1 bg-foreground mt-4"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div>
            <p className="text-xs text-muted-foreground mb-6 flex items-center gap-2 font-mono">
              <GraduationCap size={14} />
              {'// ACADEMIC BACKGROUND'}
            </p>

            <div className="space-y-6">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`terminal-box-sm bg-card relative shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${item.current ? 'border-primary' : ''}`}
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h4 className="font-bold text-sm font-mono">{item.degree}</h4>
                    {item.current && (
                      <span className="text-xs bg-primary text-primary-foreground px-2 py-0.5 border border-foreground animate-pulse">
                        NOW
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mb-2 font-mono">{item.institution}</p>
                  {item.period && (
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
                      <Calendar size={12} />
                      {item.period}
                    </div>
                  )}
                  {item.percentage && (
                    <div className="mt-2 inline-block code-tag text-primary font-bold font-mono">
                      {item.percentage}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <p className="text-xs text-muted-foreground mb-6 flex items-center gap-2 font-mono">
              <Award size={14} />
              {'// ACHIEVEMENTS & CERTIFICATIONS'}
            </p>

            <div className="space-y-6">
              {achievements.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="terminal-box-sm bg-card group hover:translate-x-1 hover:-translate-y-1 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 border-2 border-foreground bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Award size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm mb-1 font-mono">{item.title}</h4>
                      <p className="text-xs text-muted-foreground font-mono">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

