import React, { createContext, useState, useCallback } from "react";
import axios from "axios";

export const PayrollContext = createContext();
const API_URL = "http://localhost:8084/payrolls";

export const PayrollProvider = ({ children }) => {
  const [payrolls, setPayrolls] = useState([]);

  const fetchPayrolls = useCallback(async () => {
    const res = await axios.get(`${API_URL}/get`);
    setPayrolls(res.data);
  }, []);

  const addPayroll = async (data) => {
    await axios.post(`${API_URL}/add`, data);
    fetchPayrolls();
  };

  const updatePayroll = async (id, data) => {
    await axios.put(`${API_URL}/update/${id}`, data);
    fetchPayrolls();
  };

  const deletePayroll = async (id) => {
    await axios.delete(`${API_URL}/delete/${id}`);
    fetchPayrolls();
  };

  return (
    <PayrollContext.Provider value={{ payrolls, fetchPayrolls, addPayroll, updatePayroll, deletePayroll }}>
      {children}
    </PayrollContext.Provider>
  );
};