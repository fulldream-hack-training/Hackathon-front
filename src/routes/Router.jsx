import AuthLayout from '../layouts/AuthLayout';
import HomePage from '../pages/HomePage';
import NotFound from '../pages/NotFound';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import { Route, Routes } from 'react-router-dom';

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='*' element={<NotFound />} />
      <Route path='/auth' element={<AuthLayout />}>
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Route>
    </Routes>
  );
}
