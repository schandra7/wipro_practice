import React, { useState, useEffect } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDashboard } from "../context/dashboardContext";

const Employee = () => {
  const { employees } = useDashboard(); // count from context
  const [employeeList, setEmployeeList] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const res = await axios.get("http://localhost:8081/employees/get");
      setEmployeeList(res.data);
    } catch (err) {
      console.error("Error fetching employees:", err);
    }
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    department: Yup.string().required("Department is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await axios.post("http://localhost:8081/employees/save", values);
      fetchEmployees();
      resetForm();
    } catch (err) {
      console.error("Error saving employee:", err);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Employees ({employees})</h2>

      {/* Formik Form */}
      <Formik
        initialValues={{ name: "", department: "", email: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="mb-4">
          <div className="mb-3">
            <label>Name</label>
            <Field name="name" className="form-control" />
            <ErrorMessage
              name="name"
              component="div"
              className="text-danger"
            />
          </div>

          <div className="mb-3">
            <label>Department</label>
            <Field name="department" className="form-control" />
            <ErrorMessage
              name="department"
              component="div"
              className="text-danger"
            />
          </div>

          <div className="mb-3">
            <label>Email</label>
            <Field name="email" type="email" className="form-control" />
            <ErrorMessage
              name="email"
              component="div"
              className="text-danger"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Add Employee
          </button>
        </Form>
      </Formik>

      {/* Employee List */}
      <h4>Employee List</h4>
      <ul className="list-group">
        {employeeList.map((emp) => (
          <li key={emp.id} className="list-group-item">
            {emp.name} - {emp.department} - {emp.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Employee;
