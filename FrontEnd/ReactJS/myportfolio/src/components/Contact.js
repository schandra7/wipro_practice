import React from 'react';


const Contact = () => {
    
    // const handleEmailClick = () => {
    //     window.location.href = "mailto:204g1a0505@srit.ac.in";
    // };
       const handleEmailClick = () => {
        window.open(
            "https://mail.google.com/mail/?view=cm&fs=1&to=204g1a0505@srit.ac.in",
            "_blank"
        );
    };

     
    return (
        <div className="contact" >
            <h2>𝒞𝒪𝒩𝒯𝒜𝒞𝒯 𝑀𝐸</h2>
            <p className="subheading">Have a project to discuss? Contact Me using any of the links!!</p>
            {/* <p className="subheading">I’m always excited to work on new projects and bring creative ideas to life. Whether you have a project in mind, want to collaborate, or just want to say hello, feel free to reach out. Let’s build something amazing together!</p> */}
            <hr className="blue-line" /> 
            <a 
                href="/AISHWARYA_RESUME.pdf"  // replace with your actual resume path
                target="_blank" 
                rel="noopener noreferrer" 
                className="resume-button"
            >
                See My Resume
            </a>

            <div className="icon-container">
                {/* <a href="mailto:204g1a0505@srit.ac.in" className="icon-card" title="Email">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Mail_%28iOS%29.svg" alt="Email" />
                </a> */}
              <div className="icon-card" title="Email" onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=204g1a0505@srit.ac.in","_blank")}style={{ cursor: 'pointer' }}>
  <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Mail_%28iOS%29.svg" alt="Email" />
</div>


                <a href="https://www.linkedin.com/in/aishwarya-j-776908217" target="_blank" rel="noopener noreferrer" className="icon-card" title="LinkedIn">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" alt="LinkedIn" />
                </a>
                <a href="https://github.com/204g1a0505" target="_blank" rel="noopener noreferrer" className="icon-card" title="GitHub">
                    {/* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" alt="GitHub" /> */}
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" style={{ filter: 'invert(1) brightness(2)' }} />

                </a>
            </div>

            <p className="location">📍 Bangalore, India</p>
            <p className="copyright">Copyright © 2025 Aishwarya. All Rights Reserved.</p>
        </div>
    );
};

export default Contact;
