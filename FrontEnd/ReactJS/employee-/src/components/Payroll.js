import React, { useEffect, useContext, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { PayrollContext } from "../context/PayrollContext";

const validationSchema = Yup.object({
  empId: Yup.number().required("Employee ID is required"),
  salaryMonth: Yup.string().required("Salary month is required"),
  basicSalary: Yup.number().required("Basic salary is required").positive(),
  allowances: Yup.number().min(0),
  deductions: Yup.number().min(0),
  netSalary: Yup.number().required("Net salary is required").positive(),
  paymentDate: Yup.date().required("Payment date is required"),
});

export default function Payroll() {
  const { payrolls, fetchPayrolls, addPayroll, updatePayroll, deletePayroll } = useContext(PayrollContext);
  const [editingPayroll, setEditingPayroll] = useState(null);

  useEffect(() => { fetchPayrolls() }, [fetchPayrolls]);

  const formik = useFormik({
    initialValues: { empId: "", salaryMonth: "", basicSalary: "", allowances: "", deductions: "", netSalary: "", paymentDate: "" },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
        if (editingPayroll) {
            updatePayroll(editingPayroll.payrollId, values);
        } else {
            addPayroll(values);
        }
        resetForm();
        setEditingPayroll(null);
    }
  });

  const handleEdit = (pr) => {
    setEditingPayroll(pr);
    formik.setValues(pr);
  };
  
  return (
    <div className="container mt-4">
      <h2 className="mb-3">Payroll Management</h2>
      <form onSubmit={formik.handleSubmit} className="mb-4">
        <div className="row g-3">
            <div className="col-md-3">
                <input type="number" name="empId" placeholder="Employee ID" className="form-control" {...formik.getFieldProps('empId')} />
                {formik.touched.empId && formik.errors.empId && <div className="text-danger">{formik.errors.empId}</div>}
            </div>
            <div className="col-md-3">
                <input type="month" name="salaryMonth" className="form-control" {...formik.getFieldProps('salaryMonth')} />
                {formik.touched.salaryMonth && formik.errors.salaryMonth && <div className="text-danger">{formik.errors.salaryMonth}</div>}
            </div>
            <div className="col-md-3">
                <input type="number" name="basicSalary" placeholder="Basic Salary" className="form-control" {...formik.getFieldProps('basicSalary')} />
                {formik.touched.basicSalary && formik.errors.basicSalary && <div className="text-danger">{formik.errors.basicSalary}</div>}
            </div>
            <div className="col-md-3">
                <input type="number" name="allowances" placeholder="Allowances" className="form-control" {...formik.getFieldProps('allowances')} />
            </div>
            <div className="col-md-3">
                <input type="number" name="deductions" placeholder="Deductions" className="form-control" {...formik.getFieldProps('deductions')} />
            </div>
            <div className="col-md-3">
                <input type="number" name="netSalary" placeholder="Net Salary" className="form-control" {...formik.getFieldProps('netSalary')} />
                {formik.touched.netSalary && formik.errors.netSalary && <div className="text-danger">{formik.errors.netSalary}</div>}
            </div>
            <div className="col-md-3">
                <input type="date" name="paymentDate" className="form-control" {...formik.getFieldProps('paymentDate')} />
                {formik.touched.paymentDate && formik.errors.paymentDate && <div className="text-danger">{formik.errors.paymentDate}</div>}
            </div>
            <div className="col-md-3">
                <button type="submit" className="btn btn-primary w-100">{editingPayroll ? "Update" : "Add"} Payroll</button>
            </div>
        </div>
      </form>

      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr><th>ID</th><th>Emp ID</th><th>Month</th><th>Basic</th><th>Allowances</th><th>Deductions</th><th>Net</th><th>Payment Date</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {payrolls.map((pr) => (
            <tr key={pr.payrollId}>
              <td>{pr.payrollId}</td><td>{pr.empId}</td><td>{pr.salaryMonth}</td><td>{pr.basicSalary}</td><td>{pr.allowances}</td><td>{pr.deductions}</td><td>{pr.netSalary}</td><td>{pr.paymentDate}</td>
              <td>
                <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(pr)}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={() => deletePayroll(pr.payrollId)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}