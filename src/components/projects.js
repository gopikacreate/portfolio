import React from "react";
import {
  FaBrain,
  FaReact,
  FaDatabase,
  FaAws,
  FaPython,
  FaArrowUp,
} from "react-icons/fa";
import {
  SiMui,
  SiC,
  SiCplusplus,
  SiNextdotjs,
} from "react-icons/si";
import { Link } from "react-router-dom";

export default function Projects() {

        const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
     <div className="portfolio-container">
      <nav className="navbar">
         
        <h2 className="logo"><Link style={{color: "#FBFFE4" , textDecoration:"none"}}  to="/"> {`< Home Page`}</Link></h2>
      </nav>
      <div  style={{padding:"0px"}}  className="hero-section">
        <div className="hero-text">
          <h1>A Glimpse of What I Build</h1>
          <p>
           Where concepts turn into creations, and every project tells a little story of design, debugging, and discovery.
          </p>
        
        </div>
      </div>

  
      <section style={{padding:"0px"}} id="projects" className="projects-section">
        <p style={{fontSize:"34px"}}>Projects</p>
        <div className="projects-container">
          <div className="project-card">
            <h3>Datafree Portal</h3>
            <p>
              Built an interactive web application, streamlining data access for
              500+ users.
            </p>
            <div className="tech-stack">
              <FaReact /> <SiMui /> <FaAws />
            </div>
          </div>
          <div className="project-card">
            <a
              href="https://blog-temp-livid.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Simply Scribbled</h3>
            </a>

            <p>
              Built a personal blogging platform using Next.js and Firebase for
              secure content management and real-time updates.
            </p>
            <div className="tech-stack">
              <SiNextdotjs /> <FaDatabase />
            </div>
          </div>
          <div className="project-card">
            <a
              href="https://taskapp-ashy.vercel.app/dashboard"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Tusk</h3>
            </a>

            <p>
              Built a competitive task management app using Next.js and
              Firebase, enabling real-time productivity duels, secure pairing
              via unique codes, and live scoreboard tracking.
            </p>
            <div className="tech-stack">
              <SiNextdotjs /> <FaDatabase />
            </div>
          </div>
          <div className="project-card">
            <a
              href="https://norway-blog-cyan.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Norway Blog</h3>
            </a>

            <p>
              Developed a travel blog website designed to be fully responsive,
              delivering an optimal experience on both mobile and desktop
              devices.
            </p>
            <div className="tech-stack">
              <FaReact /> <FaDatabase />
            </div>
          </div>
          <div className="project-card">
            <a
              href="https://recipeapp-murex.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Recipe App</h3>
            </a>

            <p>
              Created a responsive meal planner app with multi-dish slots and a
              persistent grocery checklist.
            </p>
            <div className="tech-stack">
              <SiNextdotjs /> <FaDatabase />
            </div>
          </div>

          <div className="project-card">
            <h3>Smart Irrigation System</h3>
            <p>
              Designed a prototype to improve water efficiency in irrigation
              systems using Arduino and sensors.
            </p>
            <div className="tech-stack">
              <SiC /> <SiCplusplus />
            </div>
          </div>
          <div className="project-card">
            <h3>Library Management System</h3>
            <p>
              Developed a streamlined system for managing library operations
              efficiently.
            </p>
            <div className="tech-stack">
              <FaDatabase />
            </div>
          </div>

          <div className="project-card">
            <h3>Diabetic Retinopathy Detection</h3>
            <p>
              Compared pre-built models for accurate retinal abnormality
              detection using deep learning.
            </p>
            <div className="tech-stack">
              <FaPython /> <FaBrain />
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
            
             <div className="scroll-top" onClick={scrollToTop}>
               <FaArrowUp size={20} /> Back to Top
             </div>
           </footer>
    </div>
  )
}
