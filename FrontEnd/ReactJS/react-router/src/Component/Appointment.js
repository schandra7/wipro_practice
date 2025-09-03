import React, { useState, useEffect } from "react";

const Appointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [formData, setFormData] = useState({
    patient: "",
    doctor: "",
    date: ""
  });

  // Load appointments from localStorage
  useEffect(() => {
    const savedAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
    setAppointments(savedAppointments);
  }, []);

  // Save appointments to localStorage whenever updated
  useEffect(() => {
    localStorage.setItem("appointments", JSON.stringify(appointments));
  }, [appointments]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.patient && formData.doctor && formData.date) {
      const newAppointment = { id: Date.now(), ...formData };
      setAppointments([...appointments, newAppointment]);
      setFormData({ patient: "", doctor: "", date: "" });
    }
  };

  const removeAppointment = (id) => {
    const updated = appointments.filter((a) => a.id !== id);
    setAppointments(updated);
  };

  return (
    <div className="container my-4">
      <h3 className="mb-3">Appointments</h3>

      {/* Form */}
      <div className="card p-3 shadow-sm mb-4">
        <h5 className="mb-3">Book Appointment</h5>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Patient Name</label>
            <input
              type="text"
              className="form-control"
              name="patient"
              value={formData.patient}
              onChange={handleChange}
              placeholder="Enter patient name"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Doctor Name</label>
            <input
              type="text"
              className="form-control"
              name="doctor"
              value={formData.doctor}
              onChange={handleChange}
              placeholder="Enter doctor name"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Appointment Date</label>
            <input
              type="date"
              className="form-control"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>

          <button className="btn btn-dark" type="submit">
            Book Appointment
          </button>
        </form>
      </div>

      {/* List */}
      <h5>Booked Appointments</h5>
      {appointments.length === 0 ? (
        <p className="text-muted">No appointments booked yet.</p>
      ) : (
        <ul className="list-group">
          {appointments.map((a) => (
            <li
              key={a.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <span>
                <strong>{a.patient}</strong> with <strong>{a.doctor}</strong> on{" "}
                {a.date}
              </span>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => removeAppointment(a.id)}
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

export default Appointment;
