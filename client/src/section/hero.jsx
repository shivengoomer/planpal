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
        <h1 className="text-4xl font-[ubuntu] ">
          Plan vibes, not chaos
        </h1>
        <p className="font-[Nunito] font-extralight text-2xl text-center">
          All-in-one app to chat, split, and plan trips or events—without losing track
        </p>
      </div>

      <div className=" flex flex-col items-center justify-center w-screen">
        <DotLottieReact
          className="h-100 w-100 animate-[slide_10s_linear_infinite]  "
          src="https://lottie.host/314c926f-2b9c-4fc6-9231-57489667ed92/HX6TmErbj5.lottie"
          loop
          autoplay
        />
      </div>


    </>
  );
};

export default Hero;
