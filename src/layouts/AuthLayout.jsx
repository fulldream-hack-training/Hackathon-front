import Children from '../assets/children.png';
import AuthLayoutCSS from './AuthLayout.module.css';
import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Outlet } from 'react-router-dom';

export default function AuthLayout() {
  return (
    <main>
      <div className={AuthLayoutCSS.box}>
        <div className={AuthLayoutCSS.inner_box}>
          <div className={AuthLayoutCSS.forms_wrap}>
            <Outlet />
          </div>

          <div className={AuthLayoutCSS.right}>
            <Canvas>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={2} />
              <directionalLight position={[1, 6, 10]} />
              <Sphere args={[1, 100, 200]} scale={1.8}>
                <MeshDistortMaterial color='#8371fd' attach='material' distort={0.5} speed={2} />
              </Sphere>
            </Canvas>

            <img src={Children} alt='' />
          </div>
        </div>
      </div>
    </main>
  );
}
