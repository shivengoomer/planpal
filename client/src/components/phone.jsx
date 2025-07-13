import React from "react";

const Phone = () => {
  return (
    <div className="w-[250px] h-[500px] bg-black rounded-[35px] border border-neutral-800 p-[7px] relative shadow-lg shadow-green-200 group">
      
      {/* Right side button */}
      <div className="absolute top-[30%] right-[-4px] h-[45px] w-[2px] bg-gradient-to-r from-[#e15454] via-[#333] to-[#595959]" />
      
      {/* Left side buttons */}
      <div className="absolute left-[-4px] top-[26%] h-[30px] w-[2px] bg-gradient-to-r from-[#c75b5b] via-[#333] to-[#595959] scale-x-[-1]" />
      <div className="absolute left-[-4px] top-[36%] h-[30px] w-[2px] bg-gradient-to-r from-[#de6363] via-[#333] to-[#595959] scale-x-[-1]" />

      {/* Card Inner- Chat option */}
      <div className="bg-white rounded-3xl min-h-34/35 p-4 mt-2 flex flex-col max-w-[255px]  shadow-md">
      <div className="flex items-center pb-2 border-b border-gray-300">
        <div className="w-[50px] h-[50px] rounded-full bg-green-300 mr-5" />
        <div className="text-black text-lg font-semibold">Manali Trip</div>
      </div>

      <div className="flex-1 overflow-y-auto max-h-64">
        <div className="p-4 space-y-2">
          <div className="bg-gray-100 text-black text-sm p-2 rounded-lg w-fit max-w-full">Guyz,Ladakh Next?</div>
          <div className="bg-gray-800 text-white text-sm p-2 rounded-lg w-fit self-end ml-auto max-w-full">Boom Boom</div>
        </div>
      </div>

      <div className="pt-2 border-t border-gray-300">
        <form className="flex flex-col gap-2">
          <textarea
            placeholder="Type your message here"
            className="w-full p-2 rounded-lg border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-gray-800 text-white py-2 px-4 rounded-lg text-sm hover:bg-gray-100 hover:text-gray-800 transition-colors"
          >
            Send
          </button>
        </form>
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

export default Phone;
