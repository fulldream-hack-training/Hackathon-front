import { children } from '../assets';
import styles from '../style';
import GetStarted from './GetStarted';

const Hero = () => {
  return (
    <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]'>
            Welcome to
            <br className='sm:block hidden' />
            <span className='text-[#8371fd]'>Dreamy</span>
          </h1>
        </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nesciunt deleniti in maxime possimus veniam error
          a quasi eius quidem soluta qui, optio reprehenderit illo quo, similique dolores quia numquam!
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={children} alt='billing' className='w-[100%] h-[100%] relative z-[5]' />
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
