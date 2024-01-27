import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ styles }) => (
  <button
    type='button'
    className={`py-4 px-6 font-poppins text-[18px] text-black bg-[#00f6ff] rounded-[10px] outline-none font-semibold ${styles}`}
  >
    <Link to={'/auth/login'}>Get Started</Link>
  </button>
);

export default Button;
