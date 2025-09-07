import React from 'react';
import { Navigate } from 'react-router-dom';
import authService from '../services/authService';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const user = authService.currentUser();

  if (!user) return <Navigate to="/login" />;

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    if (user.role === 'admin') return <Navigate to="/admin/dashboard" />;
    if (user.role === 'owner') return <Navigate to="/owner/dashboard" />;
    return <Navigate to="/" />; 
  }

  return children; 
};

export default ProtectedRoute;
