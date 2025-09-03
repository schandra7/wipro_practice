import React, { useRef } from "react";
 
export default function UncontrolledForm() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
 
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Uncontrolled Form Data:\nName: ${nameRef.current.value}\nEmail: ${emailRef.current.value}`
    );
  };
 
  return (
    <div style={{ border: "1px solid black", padding: "20px" }}>
      <h2>Uncontrolled Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input type="text" ref={nameRef} /> {/* Direct DOM access */}
        </div>
        <div>
          <label>Email: </label>
          <input type="email" ref={emailRef} />
        </div>
        <button type="submit">Submit Uncontrolled</button>
      </form>
    </div>
  );
}
 