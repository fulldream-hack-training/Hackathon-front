import LoginCSS from './Login.module.css';
import { CloudMoon } from 'phosphor-react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <form autoComplete='off' className={LoginCSS.sign_in_form}>
      <div className={LoginCSS.logo}>
        <h1>
          <CloudMoon className={LoginCSS.icon} /> Dreamy
        </h1>
      </div>

      <div className={LoginCSS.heading}>
        <h2>
          Welcome to <span>Dreamy</span>
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
          <input type='password' minlength={4} className={LoginCSS.input_field} autocomplete='on' required />
          <label>Password</label>
        </div>

        <input type='submit' value='Sign In' className={LoginCSS.sign_btn} />

        <p className={LoginCSS.text}>
          Forgotten your password or you login datails?
          <Link to='/auth/new-password'>Get help</Link> signing in
        </p>
      </div>
    </form>
  );
}
