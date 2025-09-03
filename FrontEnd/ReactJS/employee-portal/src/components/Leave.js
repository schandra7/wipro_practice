import React from "react"; 
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const LeaveSchema = Yup.object().shape({
  employeeId: Yup.number().required("Employee ID is required"),
  reason: Yup.string().min(5, "At least 5 chars").required("Reason is required"),
  days: Yup.number().positive("Must be positive").required("Days required"),
});

export default function Leave() {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Request Leave</h2>
      <div className="card shadow p-4">
        <Formik
          initialValues={{ employeeId: "", reason: "", days: "" }}
          validationSchema={LeaveSchema}
          onSubmit={(values, { resetForm }) => {
            console.log("Leave request submitted:", values);
            alert("Leave submitted!");
            resetForm();
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-3">
                <label className="form-label">Employee ID</label>
                <Field type="number" name="employeeId" className="form-control" />
                <ErrorMessage name="employeeId" component="div" className="text-danger" />
              </div>

              <div className="mb-3">
                <label className="form-label">Reason</label>
                <Field type="text" name="reason" className="form-control" />
                <ErrorMessage name="reason" component="div" className="text-danger" />
              </div>

              <div className="mb-3">
                <label className="form-label">Days</label>
                <Field type="number" name="days" className="form-control" />
                <ErrorMessage name="days" component="div" className="text-danger" />
              </div>

              <button 
                type="submit" 
                className="btn btn-primary w-100" 
                disabled={isSubmitting}
              >
                Submit Leave
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
