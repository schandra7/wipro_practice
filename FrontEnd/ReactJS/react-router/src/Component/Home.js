import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  const [patientCount, setPatientCount] = useState(0);
  const [doctorCount, setDoctorCount] = useState(0);
  const [appointmentCount, setAppointmentCount] = useState(0);

  const location = useLocation(); // Detect route changes

  useEffect(() => {
    // Load counts from localStorage whenever route changes
    const patients = JSON.parse(localStorage.getItem("patients")) || [];
    const doctors = JSON.parse(localStorage.getItem("doctors")) || [];
    const appointments = JSON.parse(localStorage.getItem("appointments")) || [];

    setPatientCount(patients.length);
    setDoctorCount(doctors.length);
    setAppointmentCount(appointments.length);
  }, [location]); // runs again every time you navigate

  return (
    <div className="container my-4">
      <h2 className="mb-3">Hospital Manager</h2>

      {/* Stats Cards */}
      <div className="row mb-4">
        <div className="col-md-4">
          <div className="card p-3 text-center shadow-sm">
            <h5>Patients</h5>
            <p className="fs-4 fw-bold">{patientCount} 👨‍⚕️</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3 text-center shadow-sm">
            <h5>Doctors</h5>
            <p className="fs-4 fw-bold">{doctorCount} 👩‍⚕️</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3 text-center shadow-sm">
            <h5>Appointments (Today)</h5>
            <p className="fs-4 fw-bold">{appointmentCount} 📅</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="card p-3 shadow-sm">
        <h5 className="mb-3">Quick Actions</h5>
        <div className="d-flex gap-2 flex-wrap">
          <Link to="/patient" className="btn btn-primary">
            Add Patient
          </Link>
          <Link to="/doctor" className="btn btn-info text-white">
            Add Doctor
          </Link>
          <Link to="/appointment" className="btn btn-dark">
            Book Appointment
          </Link>
        </div>
      </div>

      <footer className="text-center mt-4 text-muted">
        Appolo Hospitals Limited
      </footer>
    </div>
  );
}

export default Home;
