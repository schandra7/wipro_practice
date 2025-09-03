import React, { useEffect, useContext, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { EmployeeContext } from "../context/EmployeeContext";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  phone: Yup.string().matches(/^[0-9]+$/, "Must be only digits").min(10, 'Must be at least 10 digits').max(15, 'Must be 15 digits or less'),
  salary: Yup.number().positive("Salary must be a positive number"),
  joiningDate: Yup.date().required("Joining date is required").nullable(),
});

const Employee = () => {
  const { employees, fetchEmployees, addEmployee, updateEmployee, deleteEmployee } = useContext(EmployeeContext);
  const [editingEmployee, setEditingEmployee] = useState(null);

  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees]);

  const formik = useFormik({
    initialValues: {
      name: "", email: "", designation: "", department: "", phone: "", address: "", salary: "", joiningDate: ""
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
        const formattedValues = {
            ...values,
            joiningDate: values.joiningDate ? new Date(values.joiningDate).toISOString().split("T")[0] : null,
        };
      if (editingEmployee) {
        updateEmployee(editingEmployee.id, formattedValues);
      } else {
        addEmployee(formattedValues);
      }
      resetForm();
      setEditingEmployee(null);
    },
  });

  const handleEdit = (employee) => {
    setEditingEmployee(employee);
    formik.setValues({
      name: employee.name || "",
      email: employee.email || "",
      designation: employee.designation || "",
      department: employee.department || "",
      phone: employee.phone || "",
      address: employee.address || "",
      salary: employee.salary || "",
      joiningDate: employee.joiningDate || "",
    });
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Employee Management</h2>
      <form onSubmit={formik.handleSubmit} className="mb-4">
        <div className="row g-3">
            {/* Repeat for all fields: name, value, onChange, onBlur, and error display */}
            <div className="col-md-4">
                <input type="text" name="name" placeholder="Name" className="form-control" {...formik.getFieldProps('name')} />
                {formik.touched.name && formik.errors.name && <div className="text-danger">{formik.errors.name}</div>}
            </div>
            <div className="col-md-4">
                <input type="email" name="email" placeholder="Email" className="form-control" {...formik.getFieldProps('email')} />
                {formik.touched.email && formik.errors.email && <div className="text-danger">{formik.errors.email}</div>}
            </div>
            <div className="col-md-4">
                <input type="text" name="designation" placeholder="Designation" className="form-control" {...formik.getFieldProps('designation')} />
            </div>
            <div className="col-md-4">
                <input type="text" name="department" placeholder="Department" className="form-control" {...formik.getFieldProps('department')} />
            </div>
            <div className="col-md-4">
                <input type="text" name="phone" placeholder="Phone" className="form-control" {...formik.getFieldProps('phone')} />
                {formik.touched.phone && formik.errors.phone && <div className="text-danger">{formik.errors.phone}</div>}
            </div>
             <div className="col-md-4">
                <input type="text" name="address" placeholder="Address" className="form-control" {...formik.getFieldProps('address')} />
            </div>
            <div className="col-md-4">
                <input type="number" name="salary" placeholder="Salary" className="form-control" {...formik.getFieldProps('salary')} />
                {formik.touched.salary && formik.errors.salary && <div className="text-danger">{formik.errors.salary}</div>}
            </div>
            <div className="col-md-4">
                <input type="date" name="joiningDate" className="form-control" {...formik.getFieldProps('joiningDate')} />
                {formik.touched.joiningDate && formik.errors.joiningDate && <div className="text-danger">{formik.errors.joiningDate}</div>}
            </div>
            <div className="col-md-4">
                <button type="submit" className="btn btn-primary w-100">{editingEmployee ? "Update Employee" : "Add Employee"}</button>
            </div>
        </div>
      </form>

      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th><th>Name</th><th>Email</th><th>Designation</th><th>Department</th><th>Phone</th><th>Address</th><th>Salary</th><th>Joining Date</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td><td>{emp.name}</td><td>{emp.email}</td><td>{emp.designation}</td><td>{emp.department}</td><td>{emp.phone}</td><td>{emp.address}</td><td>{emp.salary}</td><td>{emp.joiningDate}</td>
              <td>
                <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(emp)}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={() => deleteEmployee(emp.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employee;