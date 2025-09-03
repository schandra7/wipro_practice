import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

// ✅ Exported directly so it can be imported elsewhere if needed
export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [counts, setCounts] = useState({
    employees: 0,
    attendance: 0,
    leave: 0,
    payroll: 0,
    reviews: 0,
    projects: 0,
  });

  const [employees, setEmployees] = useState([]);
  const [attendance, setAttendance] = useState([]);
  const [leave, setLeave] = useState([]);
  const [payroll, setPayroll] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [projects, setProjects] = useState([]);

  // Fetch all data on mount
  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    try {
      const [empRes, attRes, leaveRes, payrollRes, revRes, projRes] =
        await Promise.all([
          axios.get("http://localhost:8081/employees/get"),
          axios.get("http://localhost:8082/attendance/get"),
          axios.get("http://localhost:8083/leaves/get"),
          axios.get("http://localhost:8084/payrolls/get"),
          axios.get("http://localhost:8085/reviews/get"),
          axios.get("http://localhost:8087/projects/get"),
        ]);

      setEmployees(empRes.data);
      setAttendance(attRes.data);
      setLeave(leaveRes.data);
      setPayroll(payrollRes.data);
      setReviews(revRes.data);
      setProjects(projRes.data);

      setCounts({
        employees: empRes.data.length,
        attendance: attRes.data.length,
        leave: leaveRes.data.length,
        payroll: payrollRes.data.length,
        reviews: revRes.data.length,
        projects: projRes.data.length,
      });
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    }
  };

  // Example add functions
  const addEmployee = async (employee) => {
    try {
      await axios.post("http://localhost:8081/employees/add", employee);
      fetchAllData();
    } catch (error) {
      console.error("Error adding employee:", error);
    }
  };

  const addLeave = async (leaveData) => {
    try {
      await axios.post("http://localhost:8083/leaves/add", leaveData);
      fetchAllData();
    } catch (error) {
      console.error("Error adding leave:", error);
    }
  };

  const addAttendance = async (attData) => {
    try {
      await axios.post("http://localhost:8082/attendance/add", attData);
      fetchAllData();
    } catch (error) {
      console.error("Error adding attendance:", error);
    }
  };

  return (
    <DashboardContext.Provider
      value={{
        counts,
        employees,
        attendance,
        leave,
        payroll,
        reviews,
        projects,
        addEmployee,
        addLeave,
        addAttendance,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

// ✅ Two ways to consume context:
// 1. import { DashboardContext } and useContext(DashboardContext)
// 2. import { useDashboard } and just call useDashboard()
export const useDashboard = () => useContext(DashboardContext);
