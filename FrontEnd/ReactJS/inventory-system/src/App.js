import React, { useState } from "react";


const App = () =>{

return (
  <div className="ui comment">
    <div className="comment">
      <a href="/" className="avatar">
      <img src={Profile}>profile picture</img>
      </a>
      <div className="content">
        <a href ="/" className="author"> Chandra Shekhar </a>
        <div className ="metadata">
          <span className="data">Today at 5:00 pm</span>
        </div>
        <div className="text"> This is all about React JS</div>
      </div>
    </div>


  </div>
)


}

export default App;
