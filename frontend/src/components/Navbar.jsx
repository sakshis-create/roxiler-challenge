import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav style={{ padding: 12, borderBottom: '1px solid #ddd' }}>
      <Link to="/">Stores</Link> {' | '}

      {user?.role === 'Admin' && (
        <>
          <Link to="/admin">Admin</Link> {' | '}
          <Link to="/admin/add-user">Add User</Link> {' | '}
          <Link to="/admin/add-store">Add Store</Link> {' | '}
        </>
      )}

      {user?.role === 'StoreOwner' && (
        <>
          <Link to="/owner">Owner</Link> {' | '}
        </>
      )}

      {!user ? (
        <>
          <Link to="/login">Login</Link> {' | '}
          <Link to="/register">Register</Link>
        </>
      ) : (
        <>
          <span style={{ marginLeft: 8 }}>Hi, {user.name.split(' ')[0]}</span>
          <button style={{ marginLeft: 12 }} onClick={logout}>
            Logout
          </button>
        </>
      )}
    </nav>
  );
}
