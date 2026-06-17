"use client";

import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { References } from "./components/References";

export default function App() {
  return (
    <div className="min-h-screen" style={{ background: "#0B0B0B" }}>
      <Nav />
      <div id="profile">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="references">
        <References />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}
