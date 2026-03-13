import { GitHubCalendar } from 'react-github-calendar';
import { motion } from 'framer-motion';

const GithubActivity = () => {
  // Replace with the user's actual GitHub username
  const username = "anushka-palewar";

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="section-padding bg-background"
      id="github-activity"
    >
      <div className="container-custom">
        <div className="mb-12">
          <p className="text-primary text-sm mb-2">{'// CONTRIBUTIONS'}</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            github_activity<span className="text-primary">()</span>
          </h2>
          <div className="w-24 h-1 bg-foreground mt-4"></div>
        </div>

        <div className="terminal-box bg-card p-8 flex flex-col items-center justify-center overflow-x-auto">
          <div className="min-w-full lg:min-w-[800px]">
            <GitHubCalendar
              username={username}
              blockSize={12}
              blockMargin={4}
              fontSize={14}
              theme={{
                light: ['#f0f0f0', '#c4a484', '#a67c52', '#8b5e34', '#5d4037'],
                dark: ['#1a1a1a', '#a67c52', '#8b5e34', '#5d4037', '#3e2723'],
              }}
              labels={{
                totalCount: "{{count}} contributions in the last year",
              }}
            />
          </div>
          <div className="mt-8 flex flex-wrap gap-4 justify-center text-xs font-mono text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-primary/20 border border-foreground"></span>
              <span>no_activity</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-primary/50 border border-foreground"></span>
              <span>low_activity</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-primary border border-foreground"></span>
              <span>high_activity</span>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default GithubActivity;
