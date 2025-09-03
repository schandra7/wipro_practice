import React from "react";
import northpic from "./images/northpic.png";
import southpic from "./images/southpic.png";

const HemisphereDisplay = ({ latitude }) => {
  const hemisphere = latitude > 0 ? "Northern Hemisphere" : "Southern Hemisphere";
  const picture = latitude > 0 ? northpic : southpic;

  return (
    <div>
      <img src={picture} alt={hemisphere} />
      <p>{hemisphere}</p>
    </div>
  );
};

export default HemisphereDisplay;
