import React, { useEffect, useContext, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AttendanceContext } from "../context/AttendanceContext";

const validationSchema = Yup.object({
  empId: Yup.number().required("Employee ID is required"),
  date: Yup.date().required("Date is required"),
  checkInTime: Yup.string().required("Check-in time is required"),
  outTime: Yup.string(),
  status: Yup.string().required("Status is required"),
});

export default function Attendance() {
  const { attendanceList, fetchAttendance, addAttendance, updateAttendance, deleteAttendance } = useContext(AttendanceContext);
  const [editingAttendance, setEditingAttendance] = useState(null);

  useEffect(() => { fetchAttendance() }, [fetchAttendance]);

  const formik = useFormik({
    initialValues: { empId: "", date: "", checkInTime: "", outTime: "", status: "" },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      const formattedForm = {
        empId: values.empId,
        date: new Date(values.date).toISOString().split("T")[0],
        checkInTime: `${values.date}T${values.checkInTime}:00`,
        outTime: values.outTime ? `${values.date}T${values.outTime}:00` : null,
        status: values.status,
      };

      if (editingAttendance) {
        updateAttendance(editingAttendance.attId, formattedForm);
      } else {
        addAttendance(formattedForm);
      }
      resetForm();
      setEditingAttendance(null);
    }
  });
  
  const handleEdit = (record) => {
    setEditingAttendance(record);
    formik.setValues({
      empId: record.empId,
      date: record.date,
      checkInTime: record.checkInTime ? record.checkInTime.split("T")[1]?.substring(0, 5) : "",
      outTime: record.outTime ? record.outTime.split("T")[1]?.substring(0, 5) : "",
      status: record.status,
    });
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Employee Attendance</h2>
      <form onSubmit={formik.handleSubmit} className="mb-4">
        <div className="row g-3">
            <div className="col-md-3">
                <input type="number" name="empId" placeholder="Employee ID" className="form-control" {...formik.getFieldProps('empId')} />
                {formik.touched.empId && formik.errors.empId && <div className="text-danger">{formik.errors.empId}</div>}
            </div>
            <div className="col-md-3">
                <input type="date" name="date" className="form-control" {...formik.getFieldProps('date')} />
                {formik.touched.date && formik.errors.date && <div className="text-danger">{formik.errors.date}</div>}
            </div>
            <div className="col-md-3">
                <input type="time" name="checkInTime" className="form-control" {...formik.getFieldProps('checkInTime')} />
                {formik.touched.checkInTime && formik.errors.checkInTime && <div className="text-danger">{formik.errors.checkInTime}</div>}
            </div>
            <div className="col-md-3">
                <input type="time" name="outTime" className="form-control" {...formik.getFieldProps('outTime')} />
            </div>
            <div className="col-md-3">
              <select name="status" className="form-control" {...formik.getFieldProps('status')}>
                  <option value="">Select Status</option>
                  <option value="Present">Present</option>
                  <option value="Absent">Absent</option>
                  <option value="Late">Late</option>
              </select>
              {formik.touched.status && formik.errors.status && <div className="text-danger">{formik.errors.status}</div>}
            </div>
            <div className="col-md-3">
                <button type="submit" className="btn btn-primary w-100">{editingAttendance ? "Update" : "Add"} Attendance</button>
            </div>
        </div>
      </form>

      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr><th>ID</th><th>Emp ID</th><th>Date</th><th>Check-In</th><th>Check-Out</th><th>Status</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {attendanceList.map((a) => (
            <tr key={a.attId}>
              <td>{a.attId}</td><td>{a.empId}</td><td>{a.date}</td><td>{a.checkInTime}</td><td>{a.outTime}</td><td>{a.status}</td>
              <td>
                <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(a)}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={() => deleteAttendance(a.attId)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}