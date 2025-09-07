import React, { useState } from 'react';
import adminService from '../services/adminService';

const AdminAddUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleAddUser = async (e) => {
    e.preventDefault();
    try {
      const data = await adminService.addUser({ name, email, password });
      alert('User added: ' + data.name);
    } catch (err) {
      console.error(err);
      alert('Error adding user');
    }
  };

  return (
    <form onSubmit={handleAddUser}>
      <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Name" required />
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AdminAddUser;
