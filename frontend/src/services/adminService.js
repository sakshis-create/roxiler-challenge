import api from '../api/api';

const adminService = {
  addUser: (payload) => api.post('/admin/add-user', payload).then(r => r.data),
  addStore: (payload) => api.post('/admin/add-store', payload).then(r => r.data),
  getDashboard: () => api.get('/admin/dashboard').then(r => r.data),
  getStoresAdmin: () => api.get('/admin/stores').then(r => r.data),
  getUsers: () => api.get('/admin/users').then(r => r.data)
};

export default adminService;
