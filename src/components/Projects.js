import React from 'react';

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project">
        <h3>Project 1: Portfolio Website</h3>
        <p>This is a personal portfolio website to showcase my projects and skills. Built using React and deployed on Vercel.</p>
        <a href="https://github.com/bbuigithub/portfolio-v2">GitHub Repository</a>
      </div>
      <div className="project">
        <h3>Project 2: Student Together</h3>
        <p>A collaborative project aimed at connecting students for study groups and project collaboration. The platform facilitates group creation, communication, and resource sharing among students.</p>
        <a href="https://github.com/bbuigithub/student-together">GitHub Repository</a>
      </div>
    </section>
  );
}

export default Projects;
