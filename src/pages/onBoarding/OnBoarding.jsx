import OnBoardingCSS from './OnBoarding.module.css';
import { Avatar } from '@mui/material';

export default function OnBoarding() {
  return (
    <main>
      <div className={OnBoardingCSS.box}>
        <div className={OnBoardingCSS.inner_box}>
          <div className={OnBoardingCSS.heading}>
            <h1>Here we are !</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate magnam alias fuga numquam magni, iste,
              veniam aliquid quisquam excepturi repudiandae officiis! Expedita dicta libero aliquam atque sequi quidem
              sint eaque.
            </p>
            <div className={OnBoardingCSS.box_container}>
              <div className={OnBoardingCSS.container}>
                <Avatar />
                <h4>Fiantso Harena</h4>
              </div>
              <div className={OnBoardingCSS.container}>
                <Avatar />
                <h4>Fiantso Harena</h4>
              </div>
              <div className={OnBoardingCSS.container}>
                <Avatar />
                <h4>Fiantso Harena</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
