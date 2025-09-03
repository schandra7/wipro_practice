import React, { createContext, useState, useCallback } from "react";
import axios from "axios";

export const ReviewContext = createContext();
const API_URL = "http://localhost:8085/reviews";

export const ReviewProvider = ({ children }) => {
  const [reviews, setReviews] = useState([]);

  const fetchReviews = useCallback(async () => {
    const res = await axios.get(`${API_URL}/get`);
    setReviews(res.data);
  }, []);

  const addReview = async (data) => {
    await axios.post(`${API_URL}/add`, data);
    fetchReviews();
  };

  const updateReview = async (id, data) => {
    await axios.put(`${API_URL}/update/${id}`, data);
    fetchReviews();
  };

  const deleteReview = async (id) => {
    await axios.delete(`${API_URL}/delete/${id}`);
    fetchReviews();
  };

  return (
    <ReviewContext.Provider value={{ reviews, fetchReviews, addReview, updateReview, deleteReview }}>
      {children}
    </ReviewContext.Provider>
  );
};