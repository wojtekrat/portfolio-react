import {useState, useEffect, useRef} from 'react'
import HeroSection from "./components/HeroSection"
import AboutMeSection from "./components/AboutMeSection"
import SkillsSection from "./components/SkillsSection"
import ProjectsSection from "./components/ProjectsSection"
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import Draggable from 'react-draggable';

function App() {
  const [isSent, setIsSent] = useState(false)

  return (
    <div className="App">
      <HeroSection setIsSent={setIsSent}/>
      <AboutMeSection/>
      <ProjectsSection/>
      <Footer isSent={isSent} setIsSent={setIsSent}/>
      {isSent &&
      <ContactSection setIsSent={setIsSent}/>
      }
      
    </div>
  );
}

export default App;
