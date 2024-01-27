import LoginCSS from './Login.module.css';
import { CloudMoon } from 'phosphor-react';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';

export default function Login() {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Dreamy'],
      typeSpeed: 100,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <form autoComplete='off' className={LoginCSS.sign_in_form}>
      <div className={LoginCSS.logo}>
        <h1 className='font-bold'>
          <CloudMoon className={LoginCSS.icon} /> Dreamy
        </h1>
      </div>

      <div className={LoginCSS.heading}>
        <h2>
          Welcome to <span ref={el}></span>
        </h2>
        <h6>Not Registered yet ? </h6>
        <Link to='/auth/register' className={LoginCSS.toggle}>
          Sign up
        </Link>
      </div>

      <div className={LoginCSS.actual_form}>
        <div className={LoginCSS.input_wrap}>
          <input type='text' minLength={4} className={LoginCSS.input_field} autoComplete='off' required />
          <label>Name</label>
        </div>

        <div className={LoginCSS.input_wrap}>
          <input type='password' minLength={4} className={LoginCSS.input_field} autoComplete='on' required />
          <label>Password</label>
        </div>

        <input type='submit' value='Sign In' className={LoginCSS.sign_btn} />

        <p className={LoginCSS.text}>
          Forgotten your password or you login details?
          <Link to='/auth/new-password'> Get help</Link> signing in
        </p>
      </div>
    </form>
  );
}
