import RegisterCSS from './Register.module.css';
import { MoonStars } from 'phosphor-react';
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <form>
      <div className={RegisterCSS.logo}>
        <h1>
          <MoonStars className={RegisterCSS.icon} /> Dreamy
        </h1>
      </div>

      <div className={RegisterCSS.heading}>
        <h2>Get Started</h2>
        <h6>Already have an account ? </h6>
        <Link to='/auth/login' className={RegisterCSS.toggle}>
          Sign in
        </Link>
      </div>

      <div className={RegisterCSS.actual_form}>
        <div className={RegisterCSS.input_wrap}>
          <input type='text' minLength={4} className={RegisterCSS.input_field} autoComplete='off' required />
          <label>First Name</label>
        </div>

        <div className={RegisterCSS.input_wrap}>
          <input type='text' minLength={4} className={RegisterCSS.input_field} autoComplete='off' required />
          <label>Last Name</label>
        </div>

        <div className={RegisterCSS.input_wrap}>
          <input type='email' className={RegisterCSS.input_field} autoComplete='off' required />
          <label>Email</label>
        </div>

        <div className={RegisterCSS.input_wrap}>
          <input type='password' minlength={4} className={RegisterCSS.input_field} autocomplete='on' required />
          <label>Password</label>
        </div>

        <input type='submit' value='Sign Up' className={RegisterCSS.sign_btn} />

        <p className={RegisterCSS.text}>
          Forgotten your password or you login datails?
          <Link to='/auth/new-password'> Get help</Link> signing in
        </p>
      </div>
    </form>
  );
}
