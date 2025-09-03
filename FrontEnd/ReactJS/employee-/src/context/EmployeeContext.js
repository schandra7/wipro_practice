import React, { createContext, useState, useCallback } from "react";
import axios from "axios";

export const EmployeeContext = createContext();

// Backend API
const API_URL = "http://localhost:8081/employees";

// Predefined credentials
const USERNAME = "admin";
const PASSWORD = "admin123";

// Axios instance with Basic Auth
const axiosInstance = axios.create({
  baseURL: API_URL,
  auth: {
    username: USERNAME,
    password: PASSWORD,
  },
  headers: {
    "Content-Type": "application/json",
  },
});

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);

  // Get all employees
  const fetchEmployees = useCallback(async () => {
    try {
      const res = await axiosInstance.get("/get");
      setEmployees(res.data);
    } catch (err) {
      console.error("Error fetching employees:", err);
    }
  }, []);

  // Add new employee
  const addEmployee = async (data) => {
    try {
      const formatted = {
        ...data,
        salary: Number(data.salary),
        joiningDate: data.joiningDate ? data.joiningDate : null,
      };
      await axiosInstance.post("/add", formatted);
      await fetchEmployees();
    } catch (err) {
      console.error("Error adding employee:", err);
    }
  };

  // Update employee
  const updateEmployee = async (id, data) => {
    try {
      const formatted = {
        ...data,
        salary: Number(data.salary),
        joiningDate: data.joiningDate ? data.joiningDate : null,
      };
      await axiosInstance.put(`/update/${id}`, formatted);
      await fetchEmployees();
    } catch (err) {
      console.error("Error updating employee:", err);
    }
  };

  // Delete employee
  const deleteEmployee = async (id) => {
    try {
      await axiosInstance.delete(`/delete/${id}`);
      await fetchEmployees();
    } catch (err) {
      console.error("Error deleting employee:", err);
    }
  };

  return (
    <EmployeeContext.Provider
      value={{ employees, fetchEmployees, addEmployee, updateEmployee, deleteEmployee }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};
