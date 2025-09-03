import React, { useEffect, useContext, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ReviewContext } from "../context/ReviewContext";

const validationSchema = Yup.object({
  empId: Yup.number().required("Employee ID is required"),
  reviewerId: Yup.number().required("Reviewer ID is required"),
  reviewDate: Yup.date().required("Review date is required"),
  performanceRating: Yup.number().required("Rating is required").min(1).max(5),
  comments: Yup.string().required("Comments are required"),
});

const Review = () => {
    const { reviews, fetchReviews, addReview, updateReview, deleteReview } = useContext(ReviewContext);
    const [editingReview, setEditingReview] = useState(null);

    useEffect(() => { fetchReviews() }, [fetchReviews]);
    
    const formik = useFormik({
        initialValues: { empId: "", reviewerId: "", reviewDate: "", performanceRating: "", comments: "" },
        validationSchema,
        onSubmit: (values, { resetForm }) => {
            const formattedForm = { ...values, reviewDate: new Date(values.reviewDate).toISOString().split("T")[0] };
            if (editingReview) {
                updateReview(editingReview.reviewId, formattedForm);
            } else {
                addReview(formattedForm);
            }
            resetForm();
            setEditingReview(null);
        }
    });

    const handleEdit = (review) => {
        setEditingReview(review);
        formik.setValues(review);
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-3">Employee Review Management</h2>
            <form onSubmit={formik.handleSubmit} className="mb-4">
                <div className="row g-3">
                    <div className="col-md-2">
                        <input type="number" name="empId" placeholder="Employee ID" className="form-control" {...formik.getFieldProps('empId')} />
                        {formik.touched.empId && formik.errors.empId && <div className="text-danger">{formik.errors.empId}</div>}
                    </div>
                    <div className="col-md-2">
                        <input type="number" name="reviewerId" placeholder="Reviewer ID" className="form-control" {...formik.getFieldProps('reviewerId')} />
                        {formik.touched.reviewerId && formik.errors.reviewerId && <div className="text-danger">{formik.errors.reviewerId}</div>}
                    </div>
                    <div className="col-md-2">
                        <input type="date" name="reviewDate" className="form-control" {...formik.getFieldProps('reviewDate')} />
                        {formik.touched.reviewDate && formik.errors.reviewDate && <div className="text-danger">{formik.errors.reviewDate}</div>}
                    </div>
                    <div className="col-md-2">
                        <input type="number" name="performanceRating" placeholder="Rating (1-5)" className="form-control" {...formik.getFieldProps('performanceRating')} />
                        {formik.touched.performanceRating && formik.errors.performanceRating && <div className="text-danger">{formik.errors.performanceRating}</div>}
                    </div>
                    <div className="col-md-3">
                        <input type="text" name="comments" placeholder="Comments" className="form-control" {...formik.getFieldProps('comments')} />
                        {formik.touched.comments && formik.errors.comments && <div className="text-danger">{formik.errors.comments}</div>}
                    </div>
                    <div className="col-md-1">
                        <button type="submit" className="btn btn-primary w-100">{editingReview ? "Update" : "Add"}</button>
                    </div>
                </div>
            </form>
            
            <table className="table table-bordered table-striped">
                <thead className="table-dark">
                    <tr><th>ID</th><th>Emp ID</th><th>Reviewer ID</th><th>Date</th><th>Rating</th><th>Comments</th><th>Actions</th></tr>
                </thead>
                <tbody>
                    {reviews.map((rv) => (
                        <tr key={rv.reviewId}>
                            <td>{rv.reviewId}</td><td>{rv.empId}</td><td>{rv.reviewerId}</td><td>{rv.reviewDate}</td><td>{rv.performanceRating}</td><td>{rv.comments}</td>
                            <td>
                                <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(rv)}>Edit</button>
                                <button className="btn btn-danger btn-sm" onClick={() => deleteReview(rv.reviewId)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Review;