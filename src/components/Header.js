import React from 'react';

function Header() {
  return (
    <header>
      <h1>Bryson Bui - IT Professional</h1>
      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="social-links">
        <a href="https://github.com/bbuigithub" target="_blank" rel="noopener noreferrer">GitHub</a> | 
        <a href="https://www.linkedin.com/in/brysonbui/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </header>
  );
}

export default Header;
