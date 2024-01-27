import AuthLayout from '../layouts/AuthLayout';
import HomePage from '../pages/HomePage';
import Login from '../pages/login/Login';
import NotFound from '../pages/notFound/NotFound';
import OnBoarding from '../pages/onBoarding/OnBoarding';
import Register from '../pages/register/Register';
import { Route, Routes } from 'react-router-dom';

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='*' element={<NotFound />} />
      <Route path='/on-boarding' element={<OnBoarding />} />
      <Route path='/auth' element={<AuthLayout />}>
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Route>
    </Routes>
  );
}
