import React from 'react';
// Removed: import './Sidebar.css';

function Sidebar() {
  return (
    <div className="Sidebar">
      <h2>Experience</h2>
      <div className="experience-item">
        <h3>Cowan Insurance - IT Support Co-op</h3>
        <p>Jan 2024 - Apr 2024 (4 months)</p>
        <p>Provided technical support and troubleshooting for company employees, managed network configurations, and assisted with software deployments.</p>
      </div>
      <div className="experience-item">
        <h3>Additional Experience</h3>
        <p>For more detailed information about my professional journey, please visit my LinkedIn profile.</p>
        <a href="https://www.linkedin.com/in/brysonbui/" target="_blank" rel="noopener noreferrer">View LinkedIn Profile</a>
      </div>
    </div>
  );
}

export default Sidebar;
