import React, { useState } from 'react';
import adminService from '../services/adminService';

const AdminAddStore = () => {
  const [name, setName] = useState('');

  const handleAddStore = async (e) => {
    e.preventDefault();
    try {
      const data = await adminService.addStore({ name });
      alert('Store added: ' + data.name);
    } catch (err) {
      console.error(err);
      alert('Error adding store');
    }
  };

  return (
    <form onSubmit={handleAddStore}>
      <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Store Name" required />
      <button type="submit">Add Store</button>
    </form>
  );
};

export default AdminAddStore;
