import React, { useEffect, useState } from 'react';
import adminService from '../services/adminService';

const AdminDashboard = () => {
  const [dashboard, setDashboard] = useState({});
  const [stores, setStores] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dash = await adminService.getDashboard();
        const storeList = await adminService.getStoresAdmin();
        const userList = await adminService.getUsers();
        setDashboard(dash);
        setStores(storeList);
        setUsers(userList);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <div>Stats: {JSON.stringify(dashboard)}</div>
      <h2>Stores</h2>
      <ul>{stores.map(s => <li key={s.id}>{s.name}</li>)}</ul>
      <h2>Users</h2>
      <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>
    </div>
  );
};

export default AdminDashboard;
