import './global.css';
import AuthLayout from './layouts/AuthLayout';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <Routes>
      <Route path='/auth' element={<AuthLayout />}>
        {/* Public routes */}
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Route>
    </Routes>
  );
}
