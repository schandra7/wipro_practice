import React, { createContext, useState, useCallback } from "react";
import axios from "axios";

export const AttendanceContext = createContext();
const API_URL = "http://localhost:8082/attendance";

export const AttendanceProvider = ({ children }) => {
  const [attendanceList, setAttendanceList] = useState([]);

  const fetchAttendance = useCallback(async () => {
    const res = await axios.get(`${API_URL}/get`);
    setAttendanceList(res.data);
  }, []);

  const addAttendance = async (data) => {
    await axios.post(`${API_URL}/add`, data);
    fetchAttendance();
  };

  const updateAttendance = async (id, data) => {
    await axios.put(`${API_URL}/update/${id}`, data);
    fetchAttendance();
  };

  const deleteAttendance = async (id) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
        await axios.delete(`${API_URL}/delete/${id}`);
        fetchAttendance();
    }
  };

  return (
    <AttendanceContext.Provider value={{ attendanceList, fetchAttendance, addAttendance, updateAttendance, deleteAttendance }}>
      {children}
    </AttendanceContext.Provider>
  );
};