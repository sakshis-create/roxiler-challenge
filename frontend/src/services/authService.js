import api from '../api/api';

const authService = {
  register: (payload) => api.post('/auth/register', payload).then(r => r.data),

  login: (payload) => api.post('/auth/login', payload).then(r => r.data),

  updatePassword: (payload) => api.put('/auth/password', payload).then(r => r.data),

  saveToken: (token, user) => {
    if (!user) return; 
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
  },

  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },

  currentUser: () => {
    const user = localStorage.getItem('user');
    try {
      return user ? JSON.parse(user) : null;
    } catch (err) {
      console.error('Error parsing user from localStorage', err);
      localStorage.removeItem('user'); 
      return null;
    }
  }
};

export default authService;
