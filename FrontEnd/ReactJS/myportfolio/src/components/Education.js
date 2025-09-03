import React from "react";


const educationData = [
  {
    name: "Srinivasa Ramanujan Institute of Technology",
    degree: "Bachelor of Technology",
    specialization: "CSE",
    year: "2020-2024",
    image : '/SRIT.jpeg'
  },
  {
    name: "Jnabhaharathi Junior College",
    degree: "Intermediate",
    specialization: "Mathematics, Physics, Chemistry",
    year: "2018-2020",
    image : '/InterCollege.jpeg'
  },
  {
    name: "SriRamakrishna Vidyalayam",
    degree: "10th - Class",
    specialization: "Secondary Education",
    year: "2018",
    image : '/School.jpeg'
  }
];

const Education = () => {
  return (
    <div className="education-container" >
      <h1>Education</h1>
      <div className="timeline">
        {educationData.map((edu, index) => (
          <div key={index} className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}>
            <div className="card" style={{ backgroundImage: `url(${edu.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          
             <h3 className="college-name">{edu.name}</h3>
             <h2 className="degree">{edu.degree}</h2>
                {edu.specialization && <p className="specialization">Specialization: {edu.specialization}</p>}
            </div>
            <div className="timeline-year">{edu.year}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
