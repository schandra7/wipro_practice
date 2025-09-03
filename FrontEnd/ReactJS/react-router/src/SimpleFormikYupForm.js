import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup"; // for validation
 
export default function SimpleFormikYupForm() {
  // 1. Define Yup validation rules
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });
 
  // 2. Use Formik
  const formik = useFormik({
    initialValues: { name: "", email: "" },
    validationSchema, // plug in the Yup schema
    onSubmit: (values) => {
      alert("Submitted: " + JSON.stringify(values, null, 2));
    },
  });
 
  return (
    <form onSubmit={formik.handleSubmit}>
      {/* Name field */}
      <div>
        <label htmlFor="name">Name:</label>
        <input id="name" name="name" {...formik.getFieldProps("name")} />
        {formik.touched.name && formik.errors.name && (
          <div style={{ color: "red" }}>{formik.errors.name}</div>
        )}
      </div>
 
      {/* Email field */}
      <div>
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" {...formik.getFieldProps("email")} />
        {formik.touched.email && formik.errors.email && (
          <div style={{ color: "red" }}>{formik.errors.email}</div>
        )}
      </div>
 
      <button type="submit">Submit</button>
    </form>
  );
}
 
 