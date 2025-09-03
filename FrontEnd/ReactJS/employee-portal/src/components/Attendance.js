import React, { useState, useEffect } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const AttendanceSchema = Yup.object().shape({
  empId: Yup.number().required("Employee ID is required"),
  date: Yup.string().required("Date is required"),
  checkInTime: Yup.string().required("Check-in time is required"),
  outTime: Yup.string(),
  status: Yup.string().required("Status is required"),
});

export default function Attendance() {
  const [attendanceList, setAttendanceList] = useState([]);
  const [editRecord, setEditRecord] = useState(null);

  useEffect(() => {
    fetchAttendance();
  }, []);

  const fetchAttendance = async () => {
    try {
      const res = await axios.get("http://localhost:8082/attendance/get");
      setAttendanceList(res.data);
    } catch (err) {
      console.error("Error fetching attendance:", err);
    }
  };

  const handleSubmit = async (values, { resetForm }) => {
    const formattedForm = {
      empId: values.empId,
      date: values.date,
      checkInTime: `${values.date}T${values.checkInTime}:00`,
      outTime: values.outTime ? `${values.date}T${values.outTime}:00` : null,
      status: values.status,
    };

    try {
      if (editRecord) {
        await axios.put(
          `http://localhost:8082/attendance/update/${editRecord.attId}`,
          formattedForm
        );
      } else {
        await axios.post("http://localhost:8082/attendance/add", formattedForm);
      }

      fetchAttendance();
      resetForm();
      setEditRecord(null);
    } catch (err) {
      console.error("Error saving attendance:", err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this record?")) {
      try {
        await axios.delete(`http://localhost:8082/attendance/delete/${id}`);
        fetchAttendance();
      } catch (err) {
        console.error("Error deleting attendance:", err);
      }
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Employee Attendance</h2>

      {/* Formik Attendance Form */}
      <div className="card shadow p-4 mb-4">
        <Formik
          initialValues={{
            empId: editRecord?.empId || "",
            date: editRecord?.date || "",
            checkInTime: editRecord?.checkInTime?.split("T")[1]?.substring(0, 5) || "",
            outTime: editRecord?.outTime?.split("T")[1]?.substring(0, 5) || "",
            status: editRecord?.status || "",
          }}
          validationSchema={AttendanceSchema}
          enableReinitialize
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="row g-3">
              <div className="col-md-3">
                <Field type="number" name="empId" placeholder="Employee ID" className="form-control" />
                <ErrorMessage name="empId" component="div" className="text-danger" />
              </div>
              <div className="col-md-3">
                <Field type="date" name="date" className="form-control" />
                <ErrorMessage name="date" component="div" className="text-danger" />
              </div>
              <div className="col-md-3">
                <Field type="time" name="checkInTime" className="form-control" />
                <ErrorMessage name="checkInTime" component="div" className="text-danger" />
              </div>
              <div className="col-md-3">
                <Field type="time" name="outTime" className="form-control" />
              </div>
              <div className="col-md-3">
                <Field as="select" name="status" className="form-control">
                  <option value="">Select Status</option>
                  <option value="Present">Present</option>
                  <option value="Absent">Absent</option>
                  <option value="Late">Late</option>
                </Field>
                <ErrorMessage name="status" component="div" className="text-danger" />
              </div>
              <div className="col-md-3">
                <button type="submit" className="btn btn-primary w-100">
                  {editRecord ? "Update" : "Add"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>

      {/* Attendance Table */}
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Employee ID</th>
            <th>Date</th>
            <th>Check-In</th>
            <th>Check-Out</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {attendanceList.length > 0 ? (
            attendanceList.map((a) => (
              <tr key={a.attId}>
                <td>{a.attId}</td>
                <td>{a.empId}</td>
                <td>{a.date}</td>
                <td>{a.checkInTime}</td>
                <td>{a.outTime}</td>
                <td>{a.status}</td>
                <td>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => setEditRecord(a)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(a.attId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center">No records found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
