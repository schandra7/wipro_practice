import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Optional: for conditional rendering

export default function Landing() {
  const { user } = useAuth();

  return (
    <div className="d-flex align-items-center justify-content-center text-center" style={{ minHeight: '70vh' }}>
      <div>
        <h1 className="display-4 fw-bold">Welcome to FRESH BUS</h1>
        <p className="lead text-muted">
          Fast, reliable bus ticket booking — real-time seats, secure payments, and instant e-tickets.
        </p>
        <div className="mt-4">
          {user ? (
            // If user is logged in, show a different call to action
            <Link to={user.role === 'ADMIN' ? '/admin' : '/customer/search'} className="btn btn-brand btn-lg">
              Go to Dashboard
            </Link>
          ) : (
            // If user is not logged in, show login/register
            <>
              <Link to="/login" className="btn btn-brand btn-lg me-2">Login</Link>
              <Link to="/register" className="btn btn-outline-secondary btn-lg">Register</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}