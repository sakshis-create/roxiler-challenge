import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await authService.login({ email, password });
      authService.saveToken(res.token, res.user);

      // Redirect based on role
      if (res.user.role === 'admin') navigate('/admin/dashboard');
      else if (res.user.role === 'owner') navigate('/owner/dashboard');
      else navigate('/'); // regular user
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      {/* login form fields */}
    </form>
  );
};
