import React, { createContext, useState, useCallback } from "react";
import axios from "axios";

export const ProjectContext = createContext();
const API_URL = "http://localhost:8087/projects";

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);

  const fetchProjects = useCallback(async () => {
    const res = await axios.get(`${API_URL}/get`);
    setProjects(res.data);
  }, []);

  const addProject = async (data) => {
    await axios.post(`${API_URL}/add`, data);
    fetchProjects();
  };

  const updateProject = async (id, data) => {
    await axios.put(`${API_URL}/update/${id}`, data);
    fetchProjects();
  };

  const deleteProject = async (id) => {
    await axios.delete(`${API_URL}/delete/${id}`);
    fetchProjects();
  };

  return (
    <ProjectContext.Provider value={{ projects, fetchProjects, addProject, updateProject, deleteProject }}>
      {children}
    </ProjectContext.Provider>
  );
};