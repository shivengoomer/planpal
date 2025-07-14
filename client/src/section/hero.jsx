const style = `
   @keyframes textColorCycle {
    0%, 100% { color: lightgreen; }
    33%, 66% { color: white; }
  }

  .word {
    animation: textColorCycle 5s infinite ease-in-out;
    display: inline-block;
    animation-fill-mode: forwards;
  }

  .delay-0 { animation-delay: 0s; }
  .delay-1 { animation-delay: 0.4s; }
  .delay-2 { animation-delay: 0.8s; }

@keyframes slide {
  0% {
    transform: translateX(calc(200%));
  }
  100% {
    transform: translateX(calc(-250%));
  }
}




}

`;

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Button from '../components/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <>
      <style>{style}</style>

      
      <div className="mt-20 px-2.5 text-white flex flex-col items-center gap-5">
        <div className='px-0'>
        <div className="flex flex-row gap-3 ">
        <h2 className=" text-8xl font-[Lobster] px-0" >PlanPal</h2>
          <div className='flex flex-col items-center justify-center py-4 px-3 gap-0.25 animate-[textColorCycle_7s_linear_infinite] '>

            <p className='word delay-0'>Chat</p>
          <p className='word delay-1'>Split</p>
          <p className='word delay-2'>Share</p>
          </div>
        </div>

      </div>
       <div>
        <Link to="/chat">
      <button
        className="w-fit h-20 text-3xl px-4 flex items-center justify-start gap-2 bg-lime-300 rounded-full text-neutral-900 font-semibold border-none relative cursor-pointer shadow-md transition-all duration-500 hover:bg-lime-200 active:scale-95 group"
      >
        <svg
          className="h-[25px] transition-transform duration-[1500ms] group-hover:rotate-[250deg]"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
        </svg>
        Lets Plan vibes, not chaos
      </button>
      </Link>
    </div>
        <p className="font-[Nunito] font-extralight text-2xl text-center">
          All-in-one app to chat, split, and plan trips or events—without losing track
        </p>
      </div>

      <div className=" flex flex-col items-center justify-center w-screen">
        <DotLottieReact
          className="h-90 w-90 animate-[slide_10s_linear_infinite]  "
          src="https://lottie.host/314c926f-2b9c-4fc6-9231-57489667ed92/HX6TmErbj5.lottie"
          loop
          autoplay
        />
      </div>


    </>
  );
};

export default Hero;
