import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import EducationSection from '@/components/EducationSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Anushka Palewar | Java Spring Boot Developer & ML Enthusiast</title>
        <meta
          name="description"
          content="Portfolio of Anushka Palewar - Computer Science Engineering student, Java Spring Boot Full-Stack Developer, and Machine Learning Enthusiast. View my projects and skills."
        />
        <meta
          name="keywords"
          content="Anushka Palewar, Java Developer, Spring Boot, Full Stack Developer, Machine Learning, Portfolio, RCOEM"
        />
        <meta property="og:title" content="Anushka Palewar | Java Spring Boot Developer" />
        <meta
          property="og:description"
          content="Java Spring Boot Full-Stack Developer | Machine Learning Enthusiast | Problem Solver"
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://anushkapalewar.dev" />
      </Helmet>

      <div className="min-h-screen">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <EducationSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
