import React, { useState, useEffect } from "react";

const Patients = () => {
  const [patients, setPatients] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  // Load saved patients from localStorage
  useEffect(() => {
    const savedPatients = JSON.parse(localStorage.getItem("patients")) || [];
    setPatients(savedPatients);
  }, []);

  // Save patients to localStorage whenever updated
  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);

  const addPatient = () => {
    if (name.trim() && age.trim()) {
      const newPatient = { id: Date.now(), name, age };
      setPatients([...patients, newPatient]);
      setName("");
      setAge("");
    }
  };

  const removePatient = (id) => {
    const updated = patients.filter((p) => p.id !== id);
    setPatients(updated);
  };

  return (
    <div className="container my-4">
      <h3 className="mb-3">Patients</h3>

      {/* Form */}
      <div className="card p-3 shadow-sm mb-4">
        <h5 className="mb-3">Add New Patient</h5>
        <div className="mb-3">
          <label className="form-label">Patient Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter patient name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" onClick={addPatient}>
          Add Patient
        </button>
      </div>

      {/* Patient List */}
      <h5>Patient List</h5>
      {patients.length === 0 ? (
        <p className="text-muted">No patients available.</p>
      ) : (
        <ul className="list-group">
          {patients.map((p) => (
            <li
              key={p.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {p.name}  <span className="text-muted">{p.age} years</span>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => removePatient(p.id)}
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Patients;
