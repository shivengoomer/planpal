import React from "react";

const Card = () => {
  return (
    <div className="w-[270px] h-[500px] bg-black rounded-[35px] border border-neutral-800 p-[7px] relative shadow-lg shadow-green-200 group">
      
      {/* Right side button */}
      <div className="absolute top-[30%] right-[-4px] h-[45px] w-[2px] bg-gradient-to-r from-[#e15454] via-[#333] to-[#595959]" />
      
      {/* Left side buttons */}
      <div className="absolute left-[-4px] top-[26%] h-[30px] w-[2px] bg-gradient-to-r from-[#c75b5b] via-[#333] to-[#595959] scale-x-[-1]" />
      <div className="absolute left-[-4px] top-[36%] h-[30px] w-[2px] bg-gradient-to-r from-[#de6363] via-[#333] to-[#595959] scale-x-[-1]" />

      {/* Card Inner */}
      <div className="card-int relative h-full rounded-[25px] transition-all duration-500 ease-out overflow-hidden group-hover:bg-pos-100 bg-pos-0">
        <div className="hello flex flex-col items-center justify-center h-full bg-cyan-100/90 text-black text-2xl font-bold leading-[35px] text-center transform transition-transform duration-500 group-hover:-translate-y-5">
          Hello
          <span className="hidden-text block opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            uiverse
          </span>
        </div>
      </div>

      {/* Top Section */}
      <div className="absolute top-0 right-1/2 translate-x-1/2 w-[35%] h-[18px] bg-green rounded-b-[10px]" />
      <div className="absolute top-[2px] right-1/2 translate-x-1/2 w-[40%] h-[2px] rounded bg-neutral-800" />

      {/* Camera */}
      <div className="absolute top-[6px] right-[84%] translate-x-1/2 w-[6px] h-[6px] rounded-full bg-white/5">
        <div className="absolute top-1/2 right-1/2 w-[3px] h-[3px] rounded-full bg-blue-600 transform translate-x-1/2 -translate-y-1/2" />
      </div>
    </div>
  );
};

export default Card;
