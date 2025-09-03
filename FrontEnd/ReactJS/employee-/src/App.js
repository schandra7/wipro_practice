import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Employee from "./components/Employee";
import Attendance from "./components/Attendance";
import Leave from "./components/Leave";
import Payroll from "./components/Payroll";
import Review from "./components/Review";
import Project from "./components/Project";

// Import all providers
import { EmployeeProvider } from "./context/EmployeeContext";
import { AttendanceProvider } from "./context/AttendanceContext";
import { LeaveProvider } from "./context/LeaveContext";
import { PayrollProvider } from "./context/PayrollContext";
import { ReviewProvider } from "./context/ReviewContext";
import { ProjectProvider } from "./context/ProjectContext";

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <EmployeeProvider>
          <AttendanceProvider>
            <LeaveProvider>
              <PayrollProvider>
                <ReviewProvider>
                  <ProjectProvider>
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/employees" element={<Employee />} />
                      <Route path="/attendance" element={<Attendance />} />
                      <Route path="/leave" element={<Leave />} />
                      <Route path="/payroll" element={<Payroll />} />
                      <Route path="/reviews" element={<Review />} />
                      <Route path="/projects" element={<Project />} />
                    </Routes>
                  </ProjectProvider>
                </ReviewProvider>
              </PayrollProvider>
            </LeaveProvider>
          </AttendanceProvider>
        </EmployeeProvider>
      </div>
    </Router>
  );
}