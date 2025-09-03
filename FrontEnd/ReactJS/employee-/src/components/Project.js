import React, { useEffect, useContext, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ProjectContext } from "../context/ProjectContext";

const validationSchema = Yup.object({
  assignedEmpId: Yup.number().required("Employee ID is required"),
  taskDescription: Yup.string().required("Description is required"),
  startDate: Yup.date().required("Start date is required"),
  dueDate: Yup.date().required("Due date is required").min(Yup.ref('startDate'), "Due date must be after start date"),
  status: Yup.string().required("Status is required"),
});

export default function Project() {
  const { projects, fetchProjects, addProject, updateProject, deleteProject } = useContext(ProjectContext);
  const [editingProject, setEditingProject] = useState(null);

  useEffect(() => { fetchProjects() }, [fetchProjects]);

  const formik = useFormik({
    initialValues: { assignedEmpId: "", taskDescription: "", startDate: "", dueDate: "", status: "" },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      const formattedForm = {
        ...values,
        startDate: new Date(values.startDate).toISOString().split("T")[0],
        dueDate: new Date(values.dueDate).toISOString().split("T")[0],
      };

      if (editingProject) {
        updateProject(editingProject.taskId, formattedForm);
      } else {
        addProject(formattedForm);
      }
      resetForm();
      setEditingProject(null);
    }
  });

  const handleEdit = (pj) => {
    setEditingProject(pj);
    formik.setValues(pj);
  };
  
  return (
    <div className="container mt-4">
      <h2 className="mb-3">Project Management</h2>
      <form onSubmit={formik.handleSubmit} className="mb-4">
        <div className="row g-3">
          <div className="col-md-2">
            <input type="number" name="assignedEmpId" placeholder="Assigned Employee ID" className="form-control" {...formik.getFieldProps('assignedEmpId')} />
            {formik.touched.assignedEmpId && formik.errors.assignedEmpId && <div className="text-danger">{formik.errors.assignedEmpId}</div>}
          </div>
          <div className="col-md-3">
            <input type="text" name="taskDescription" placeholder="Task Description" className="form-control" {...formik.getFieldProps('taskDescription')} />
            {formik.touched.taskDescription && formik.errors.taskDescription && <div className="text-danger">{formik.errors.taskDescription}</div>}
          </div>
          <div className="col-md-2">
            <input type="date" name="startDate" className="form-control" {...formik.getFieldProps('startDate')} />
            {formik.touched.startDate && formik.errors.startDate && <div className="text-danger">{formik.errors.startDate}</div>}
          </div>
          <div className="col-md-2">
            <input type="date" name="dueDate" className="form-control" {...formik.getFieldProps('dueDate')} />
            {formik.touched.dueDate && formik.errors.dueDate && <div className="text-danger">{formik.errors.dueDate}</div>}
          </div>
          <div className="col-md-2">
            <select name="status" className="form-control" {...formik.getFieldProps('status')}>
              <option value="">Select Status</option>
              <option value="ASSIGNED">ASSIGNED</option>
              <option value="IN_PROGRESS">IN_PROGRESS</option>
              <option value="DONE">DONE</option>
              <option value="BLOCKED">BLOCKED</option>
            </select>
            {formik.touched.status && formik.errors.status && <div className="text-danger">{formik.errors.status}</div>}
          </div>
          <div className="col-md-1">
            <button type="submit" className="btn btn-primary w-100">{editingProject ? "Update" : "Add"}</button>
          </div>
        </div>
      </form>

      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr><th>ID</th><th>Assigned Emp</th><th>Description</th><th>Start Date</th><th>Due Date</th><th>Status</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {projects.map((pj) => (
            <tr key={pj.taskId}>
              <td>{pj.taskId}</td><td>{pj.assignedEmpId}</td><td>{pj.taskDescription}</td><td>{pj.startDate}</td><td>{pj.dueDate}</td><td>{pj.status}</td>
              <td>
                <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(pj)}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={() => deleteProject(pj.taskId)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}