import React, { useState } from "react";
 
export default function ControlledForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
 
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Controlled Form Data:\nName: ${name}\nEmail: ${email}`);
  };
 
  return (
    <div style={{ border: "1px solid black", padding: "20px" }}>
      <h2>Controlled Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={name} // Controlled by state
            onChange={(e) => setName(e.target.value)} // Update state
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Submit Controlled</button>
      </form>
    </div>
  );
}