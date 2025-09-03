import React, { useState, useEffect } from "react";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [name, setName] = useState("");
  const [specialization, setSpecialization] = useState("");

  // Load doctors on mount
  useEffect(() => {
    const savedDoctors = JSON.parse(localStorage.getItem("doctors")) || [];
    setDoctors(savedDoctors);
  }, []);

  // Save doctors to localStorage whenever updated
  useEffect(() => {
    localStorage.setItem("doctors", JSON.stringify(doctors));
  }, [doctors]);

  const addDoctor = () => {
    if (name.trim() && specialization.trim()) {
      const newDoctor = { id: Date.now(), name, specialization };
      setDoctors([...doctors, newDoctor]);
      setName("");
      setSpecialization("");
    }
  };

  const removeDoctor = (id) => {
    const updated = doctors.filter((d) => d.id !== id);
    setDoctors(updated);
  };

  return (
    <div className="container my-4">
      <h3 className="mb-3">Doctors</h3>

      {/* Form */}
      <div className="card p-3 shadow-sm mb-4">
        <h5 className="mb-3">Add New Doctor</h5>
        <div className="mb-3">
          <label className="form-label">Doctor Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter doctor name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Specialization</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter specialization"
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" onClick={addDoctor}>
          Add Doctor
        </button>
      </div>

      {/* Doctor List */}
      <h5>Doctor List</h5>
      {doctors.length === 0 ? (
        <p className="text-muted">No doctors available.</p>
      ) : (
        <ul className="list-group">
          {doctors.map((d) => (
            <li
              key={d.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {d.name} - <span className="text-muted">{d.specialization}</span>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => removeDoctor(d.id)}
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

export default Doctors;
