import React, { createContext, useState, useCallback } from "react";
import axios from "axios";

export const LeaveContext = createContext();
const API_URL = "http://localhost:8083/leaves";

export const LeaveProvider = ({ children }) => {
  const [leaves, setLeaves] = useState([]);

  const fetchLeaves = useCallback(async () => {
    const res = await axios.get(`${API_URL}/get`);
    setLeaves(res.data);
  }, []);

  const addLeave = async (data) => {
    await axios.post(`${API_URL}/add`, data);
    fetchLeaves();
  };

  const updateLeave = async (id, data) => {
    await axios.put(`${API_URL}/update/${id}`, data);
    fetchLeaves();
  };

  const deleteLeave = async (id) => {
    await axios.delete(`${API_URL}/delete/${id}`);
    fetchLeaves();
  };

  return (
    <LeaveContext.Provider value={{ leaves, fetchLeaves, addLeave, updateLeave, deleteLeave }}>
      {children}
    </LeaveContext.Provider>
  );
};