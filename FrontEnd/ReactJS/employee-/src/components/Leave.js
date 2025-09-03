import React, { useEffect, useContext, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { LeaveContext } from "../context/LeaveContext";

const validationSchema = Yup.object({
  empId: Yup.number().required("Employee ID is required"),
  leaveType: Yup.string().required("Leave type is required"),
  startDate: Yup.date().required("Start date is required"),
  endDate: Yup.date().required("End date is required").min(Yup.ref('startDate'), "End date can't be before start date"),
  reason: Yup.string().required("Reason is required"),
  status: Yup.string().required("Status is required"),
});

const Leave = () => {
    const { leaves, fetchLeaves, addLeave, updateLeave, deleteLeave } = useContext(LeaveContext);
    const [editingLeave, setEditingLeave] = useState(null);

    useEffect(() => { fetchLeaves() }, [fetchLeaves]);

    const formik = useFormik({
        initialValues: { empId: "", leaveType: "", startDate: "", endDate: "", reason: "", status: "PENDING" },
        validationSchema,
        onSubmit: (values, { resetForm }) => {
            if (editingLeave) {
                updateLeave(editingLeave.leaveId, values);
            } else {
                addLeave(values);
            }
            resetForm();
            setEditingLeave(null);
        }
    });

    const handleEdit = (leave) => {
        setEditingLeave(leave);
        formik.setValues(leave);
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-3">Leave Management</h2>
            <form onSubmit={formik.handleSubmit} className="mb-4">
                <div className="row g-3">
                    <div className="col-md-3">
                        <input type="number" name="empId" placeholder="Employee ID" className="form-control" {...formik.getFieldProps('empId')} />
                        {formik.touched.empId && formik.errors.empId && <div className="text-danger">{formik.errors.empId}</div>}
                    </div>
                    <div className="col-md-3">
                        <input type="text" name="leaveType" placeholder="Leave Type (SICK, ANNUAL)" className="form-control" {...formik.getFieldProps('leaveType')} />
                        {formik.touched.leaveType && formik.errors.leaveType && <div className="text-danger">{formik.errors.leaveType}</div>}
                    </div>
                    <div className="col-md-3">
                        <input type="date" name="startDate" className="form-control" {...formik.getFieldProps('startDate')} />
                        {formik.touched.startDate && formik.errors.startDate && <div className="text-danger">{formik.errors.startDate}</div>}
                    </div>
                    <div className="col-md-3">
                        <input type="date" name="endDate" className="form-control" {...formik.getFieldProps('endDate')} />
                        {formik.touched.endDate && formik.errors.endDate && <div className="text-danger">{formik.errors.endDate}</div>}
                    </div>
                    <div className="col-md-4">
                        <input type="text" name="reason" placeholder="Reason" className="form-control" {...formik.getFieldProps('reason')} />
                        {formik.touched.reason && formik.errors.reason && <div className="text-danger">{formik.errors.reason}</div>}
                    </div>
                    <div className="col-md-4">
                        <select name="status" className="form-control" {...formik.getFieldProps('status')}>
                            <option value="PENDING">Pending</option>
                            <option value="APPROVED">Approved</option>
                            <option value="REJECTED">Rejected</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <button type="submit" className="btn btn-primary w-100">{editingLeave ? "Update" : "Add"} Leave</button>
                    </div>
                </div>
            </form>

            <table className="table table-bordered table-striped">
                <thead className="table-dark">
                    <tr><th>ID</th><th>Emp ID</th><th>Type</th><th>Start</th><th>End</th><th>Reason</th><th>Status</th><th>Actions</th></tr>
                </thead>
                <tbody>
                    {leaves.map((lv) => (
                        <tr key={lv.leaveId}>
                            <td>{lv.leaveId}</td><td>{lv.empId}</td><td>{lv.leaveType}</td><td>{lv.startDate}</td><td>{lv.endDate}</td><td>{lv.reason}</td><td>{lv.status}</td>
                            <td>
                                <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(lv)}>Edit</button>
                                <button className="btn btn-danger btn-sm" onClick={() => deleteLeave(lv.leaveId)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Leave;