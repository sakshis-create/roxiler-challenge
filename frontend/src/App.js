import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import AdminDashboard from './pages/AdminDashboard';
import AdminAddStore from './pages/AdminAddStore';
import AdminAddUser from './pages/AdminAddUser';
import OwnerDashboard from './pages/OwnerDashboard';
import StoreList from './pages/StoreList';
import ProtectedRoute from './components/ProtectedRoute';
import Unauthorized from './pages/Unauthorized';

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/add-store"
          element={
            <ProtectedRoute role="admin">
              <AdminAddStore />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/add-user"
          element={
            <ProtectedRoute role="admin">
              <AdminAddUser />
            </ProtectedRoute>
          }
        />

       
        <Route
          path="/owner/dashboard"
          element={
            <ProtectedRoute role="owner">
              <OwnerDashboard />
            </ProtectedRoute>
          }
        />

        
        <Route path="/stores" element={<StoreList />} />

        
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
