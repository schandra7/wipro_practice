import React from "react";


const Skills = () => {
  return (
    <div className="skills">
      <h2 className="skills-title">Technical Skills</h2>
      <p className="skills-subtitle">Here are the technologies I work with</p>

      {/* Row 1 */}
      <div className="skills-row">
        <div className="skill-item">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" />
          <p>Java</p>
        </div>
        <div className="skill-item">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
          <p>MongoDB</p>
        </div>
        <div className="skill-item">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
          <p>React</p>
        </div>
        <div className="skill-item">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="RESTful APIs" style={{ filter: 'invert(1) brightness(2)' }}/>
          <p>RESTful APIs</p>
        </div>
      </div>

      {/* Row 2 */}
      <div className="skills-row">
        <div className="skill-item">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" />
          <p>HTML</p>
        </div>
        <div className="skill-item">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" />
          <p>CSS</p>
        </div>
        <div className="skill-item">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
          <p>JavaScript</p>
        </div>
        <div className="skill-item">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" alt="jQuery" />
          <p>jQuery</p>
        </div>
        <div className="skill-item">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" />
          <p>Bootstrap</p>
        </div>
        <div className="skill-item">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
          <p>Python</p>
        </div>
      </div>

      {/* Row 3 */}
      <div className="skills-row">
        <div className="skill-item">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
          <p>Node.js</p>
        </div>
        <div className="skill-item">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-original.svg" alt="JSON" />
          <p>JSON</p>
        </div>
        <div className="skill-item">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" />
          <p>MySQL</p>
        </div>
        <div className="skill-item">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" style={{ filter: 'invert(1) brightness(2)' }}/>
          <p>GitHub</p>
        </div>
        <div className="skill-item">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" alt="Jira" />
          <p>Jira</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;


