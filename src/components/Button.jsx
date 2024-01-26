import React from 'react';

const Button = ({ styles }) => (
  <button
    type='button'
    className={`py-4 px-6 font-poppins text-[18px] text-white bg-[#8371fd] rounded-[10px] outline-none font-semibold ${styles}`}
  >
    Get Started
  </button>
);

export default Button;
