import React, { useRef, useState, useEffect } from "react";
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Education from './components/Education';

function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  // Section refs
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const sections = [
    { id: "home", ref: homeRef },
    { id: "about", ref: aboutRef },
    { id: "education", ref: educationRef },
    { id: "experience", ref: experienceRef },
    { id: "skills", ref: skillsRef },
    { id: "contact", ref: contactRef },
  ];

  // Scroll to section on tab click
  const handleTabClick = (ref, id) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setActiveTab(id);
    setMenuOpen(false); // close menu on mobile after click
  };

  // Update active tab on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      for (let section of sections) {
        const offsetTop = section.ref.current.offsetTop;
        const offsetHeight = section.ref.current.offsetHeight;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveTab(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Navbar / Tabs / AJ Circle */}
      <div className="tabs-container">
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        </div>
        
        <div className={`tabs ${menuOpen ? "open" : ""}`}>
          {sections.map((section) => (
            <button
              key={section.id}
              className={activeTab === section.id ? "active" : ""}
              onClick={() => handleTabClick(section.ref, section.id)}
            >
              {section.id.charAt(0).toUpperCase() + section.id.slice(1)}
            </button>
          ))}
        </div>

        
        {/* <div className="aj-circle">AJ</div> */}
        <button className="aj-circle" onClick={() => handleTabClick(homeRef, "home")}>
  AJ
</button>
      </div>

      {/* Sections */}
      <div ref={homeRef}>
        <Home setActiveTab={setActiveTab} aboutRef={aboutRef} />
      </div>
      <div ref={aboutRef}><About /></div>
      <div ref={educationRef}><Education /></div>
      <div ref={experienceRef}><Experience /></div>
      <div ref={skillsRef}><Skills /></div>
      <div ref={contactRef}><Contact /></div>
    </div>
  );
}

export default App;
