import React from "react";
import { useDashboard } from "../context/dashboardContext";

const Home = () => {
  const { employees, attendance, leave, payroll, reviews, projects } = useDashboard();

  return (
    <div className="container mt-4">
      <h2>Dashboard</h2>
      <div className="row">
        <div className="col-md-2">
          <div className="card text-center p-3">
            <h5>Employees</h5>
            <p>{employees}</p>
          </div>
        </div>
        <div className="col-md-2">
          <div className="card text-center p-3">
            <h5>Attendance</h5>
            <p>{attendance}</p>
          </div>
        </div>
        <div className="col-md-2">
          <div className="card text-center p-3">
            <h5>Leaves</h5>
            <p>{leave}</p>
          </div>
        </div>
        <div className="col-md-2">
          <div className="card text-center p-3">
            <h5>Payroll</h5>
            <p>{payroll}</p>
          </div>
        </div>
        <div className="col-md-2">
          <div className="card text-center p-3">
            <h5>Reviews</h5>
            <p>{reviews}</p>
          </div>
        </div>
        <div className="col-md-2">
          <div className="card text-center p-3">
            <h5>Projects</h5>
            <p>{projects}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
