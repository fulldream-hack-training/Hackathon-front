import AuthLayoutCSS from './AuthLayout.module.css';
import { Outlet } from 'react-router-dom';

export default function AuthLayout() {
  return (
    <main>
      <div className={AuthLayoutCSS.box}>
        <div className={AuthLayoutCSS.inner_box}>
          <div className={AuthLayoutCSS.forms_wrap}>
            <Outlet />
          </div>
        </div>
      </div>
    </main>
  );
}
