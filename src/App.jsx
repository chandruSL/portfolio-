import './index.css';
import { portfolioData } from './data/portfolio';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <>
      <div className="bg-animations">
        <div className="bg-orb orb-1"></div>
        <div className="bg-orb orb-2"></div>
        <div className="bg-orb orb-3"></div>
      </div>
      <Navbar />
      <main>
        <Hero data={portfolioData.hero} />
        <About data={portfolioData.about} />
        <Skills data={portfolioData.skills} />
        <Projects data={portfolioData.projects} />
        <Experience data={portfolioData.experience} />
        <Certifications data={portfolioData.certifications} />
        <Achievements data={portfolioData.achievements} />
        <Contact data={portfolioData.contact} />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
