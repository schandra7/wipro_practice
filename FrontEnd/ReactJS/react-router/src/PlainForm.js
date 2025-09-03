import React, { useState } from "react";
 
export default function PlainForm() {
  const [values, setValues] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({});
 
  const handleChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
 
  const handleSubmit = e => {
    e.preventDefault();
    let errs = {};
    if (!values.name) errs.name = "Required";
    if (!values.email) errs.email = "Required";
    setErrors(errs);
    if (Object.keys(errs).length === 0) alert(JSON.stringify(values));
  };
 
  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={values.name} onChange={handleChange} />
      {errors.name && <div style={{ color: "red" }}>{errors.name}</div>}
      <input name="email" value={values.email} onChange={handleChange} />
      {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
      <button type="submit">Submit</button>
    </form>
  );
}