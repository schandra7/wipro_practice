import React from "react";


const Experience = () => {
  const projects = [
    {
      title: "COBE",
      description:
        "Realtime application for creating investments and retirement accounts in US markets. Worked as React developer, collaborating in an agile environment to fix bugs and enhance features.",
      tech: "React, Redux, Zustand, MUI, Axios",
    },
    {
      title: "Student Management Dashboard",
      description:
        "Dashboard with student and teacher logins. Students can view subjects, calendar, and grades, while teachers can manage student data and update profiles.",
      tech: "React, JavaScript (ES6), Redux",
    },
    {
      title: "Ecommerce App",
      description:
        "Mobile app for browsing products, adding them to cart, and placing orders with smooth navigation across pages.",
      tech: "React Native",
    },
    {
      title: "Weather App",
      description:
        "Web app displaying real-time weather data fetched from APIs.",
      tech: "HTML, CSS, JavaScript",
    },
    {
      title: "My Portfolio",
      description: "Portfolio website showcasing my skills and projects.",
      tech: "React.js",
    },
  ];

  const certifications = [
    {
      title: "GitHub Copilot Certification",
      description:
        "Certified in using GitHub Copilot to improve productivity and code quality with AI-powered code suggestions.",
    },
    {
      title: "Google Cloud Certified Associate Cloud Engineer",
      description:
        "Validated ability to deploy applications, monitor operations, and manage enterprise cloud solutions on Google Cloud.",
    },
    {
      title: "Cloud Computing by NPTEL",
      description:
        "Completed an academic course covering cloud architecture, virtualization, and distributed systems.",
    },
    {
      title: "AWS Academy Graduate - Cloud Foundations",
      description:
        "Gained foundational knowledge of AWS cloud concepts, services, security, architecture, pricing, and support.",
    },
  ];

  return (
    <div className="experience">
      {/* Projects Section */}
      <section className="section">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          Some of the key projects I have developed and contributed to:
        </p>
        <div className="card-grid">
          {projects.map((proj, index) => (
            <div key={index} className="card-exp">
              <h3 className="card-title">{proj.title}</h3>
              <p className="card-desc">{proj.description}</p>
              <p className="card-tech">Tech: {proj.tech}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section">
        <h2 className="section-title">Certifications</h2>
        <p className="section-subtitle">
          Certifications that validate my skills and learning journey:
        </p>
        <div className="card-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="card-exp">
              <h3 className="card-title">{cert.title}</h3>
              <p className="card-desc">{cert.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Experience;