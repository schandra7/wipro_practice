import React from "react";

const Home = ({ setActiveTab, aboutRef }) => {
  const handleClick = () => {
    // Scroll to About section
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
    setActiveTab("about");
  };

  return (
    <div
      className="home-page"
      style={{ backgroundImage: "url('/laptop1.jpg')" }}
    >
      <div className="home-content">
        {/* <h1 className="name">𝓗𝓲, 𝓘 𝓪𝓶 𝓐𝓲𝓼𝓱𝔀𝓪𝓻𝔂𝓪 <span className="wave">👋🏻</span></h1> */}
        <h1 className="name">𝓗𝓲, 𝓘 𝓪𝓶 𝓐𝓲𝓼𝓱𝔀𝓪𝓻𝔂𝓪<span className="wave">👋🏻</span></h1>

        <h2 className="role">Frontend Developer</h2>  
        <button className="home-btn" onClick={handleClick}>
          Know More About Me
        </button>
          <div className="scroll-down" onClick={handleClick}>
           <span></span>
           <span></span>
          </div>
       </div>
    </div>
  );
};

export default Home;