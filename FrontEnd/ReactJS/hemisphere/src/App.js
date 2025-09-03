/*import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

class App extends Component{
  constructor(props){
    super(props);

    this.state={count:0}
  }
  incrementCount=() =>{
    this.setState({count: this.state.count+1});
  }
  render(){
    return(
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    )
  }
}
const App = () => {
  const[count,setCount] = useState(0);
  return(
   <div>
      <p>Count: {count}</p>
      <button onClick= {() => setCount(count+1)}>Increment</button>
   </div>
  )
}

export default App;*/
/*import './App.css';
//import React,{Component} from 'react';
import HemishphereDisplay from './Hemisphere';
import React,{useState,useEffect} from 'react';
 
 function App(){
    const [latitude,setlatitude] = useState(0);
 
    useEffect(() => {
      window.navigator.geolocation.getCurrentPosition(
            (position) =>{
        setlatitude(position.coords.latitude)
        }
        );
 
    }, []);
    return(
      <div>
       <HemishphereDisplay latitude={latitude}/>
      </div>
    )
}
 
 
export default App;
 

import React from "react";
import ControlledForm from "./ControlledForm";
import UncontrolledForm from "./UncontrolledForm";
 
export default function App() {
  return (
    <div style={{ display: "flex", gap: "40px", padding: "20px" }}>
      <ControlledForm />
      <UncontrolledForm />
    </div>
  );
}*/

import React, { useState, useRef, useEffect } from "react";

// Child Component
function InputField({ label, value, onChange }) {
  return (
    <div>
      <label>{label}: </label>
      <input value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}

// Parent Component
function App() {
  const [username, setUsername] = useState("");   // useState
  const [password, setPassword] = useState("");
  const inputRef = useRef();                      // useRef

  useEffect(() => {                               // useEffect
    inputRef.current.focus();
  }, []);

  const handleSubmit = () => {
    alert(`Username: ${username}, Password: ${password}`);
  };

  return (
    <div>
      <h2>Login</h2>
      {/* Controlled form */}
      <InputField label="Username" value={username} onChange={setUsername} />
      <InputField label="Password" value={password} onChange={setPassword} />

      {/* Uncontrolled form */}
      <div>
        <label>Email: </label>
        <input ref={inputRef} placeholder="Enter email" />
      </div>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
