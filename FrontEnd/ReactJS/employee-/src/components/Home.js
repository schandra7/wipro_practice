import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { EmployeeContext } from "../context/EmployeeContext";
import { AttendanceContext } from "../context/AttendanceContext";
import { LeaveContext } from "../context/LeaveContext";
import { PayrollContext } from "../context/PayrollContext";
import { ReviewContext } from "../context/ReviewContext";
import { ProjectContext } from "../context/ProjectContext";
import "./Home.css"; // custom styles

export default function Home() {
  // Consume contexts to get data counts
  const { employees } = useContext(EmployeeContext);
  const { attendanceList } = useContext(AttendanceContext);
  const { leaves } = useContext(LeaveContext);
  const { payrolls } = useContext(PayrollContext);
  const { reviews } = useContext(ReviewContext);
  const { projects } = useContext(ProjectContext);

  const cardStyle = { textDecoration: "none" };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Dashboard</h2>
      <div className="row">
        {/* Employee Card */}
        <div className="col-md-4 mb-3">
          <Link to="/employees" style={cardStyle}>
            <div className="card dashboard-card text-white bg-primary shadow">
              <div className="card-body">
                <h5 className="card-title">Employees</h5>
                <h2>{employees.length}</h2>
              </div>
            </div>
          </Link>
        </div>

        {/* Attendance Card */}
        <div className="col-md-4 mb-3">
          <Link to="/attendance" style={cardStyle}>
            <div className="card dashboard-card text-white bg-success shadow">
              <div className="card-body">
                <h5 className="card-title">Attendance Records</h5>
                <h2>{attendanceList.length}</h2>
              </div>
            </div>
          </Link>
        </div>

        {/* Leave Card */}
        <div className="col-md-4 mb-3">
          <Link to="/leave" style={cardStyle}>
            <div className="card dashboard-card text-white bg-warning shadow">
              <div className="card-body">
                <h5 className="card-title">Leaves</h5>
                <h2>{leaves.length}</h2>
              </div>
            </div>
          </Link>
        </div>
        
        {/* Payroll Card */}
        <div className="col-md-4 mb-3">
          <Link to="/payroll" style={cardStyle}>
            <div className="card dashboard-card text-white bg-danger shadow">
              <div className="card-body">
                <h5 className="card-title">Payroll Records</h5>
                <h2>{payrolls.length}</h2>
              </div>
            </div>
          </Link>
        </div>

        {/* Review Card */}
        <div className="col-md-4 mb-3">
          <Link to="/reviews" style={cardStyle}>
            <div className="card dashboard-card text-white bg-info shadow">
              <div className="card-body">
                <h5 className="card-title">Reviews</h5>
                <h2>{reviews.length}</h2>
              </div>
            </div>
          </Link>
        </div>

        {/* Project Card */}
        <div className="col-md-4 mb-3">
          <Link to="/projects" style={cardStyle}>
            <div className="card dashboard-card text-white bg-secondary shadow">
              <div className="card-body">
                <h5 className="card-title">Projects</h5>
                <h2>{projects.length}</h2>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}