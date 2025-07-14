const Header = () => {
  return (
    <div className="flex flex-row items-center justify-center">
      <header className="flex justify-center items-center sticky top-0 z-50">
      <nav className="mt-10 backdrop-blur-sm px-1 bg-black/25  shadow shadow-green-200 rounded-4xl w-xl py-5 flex flex-row justify-center gap-15 text-2xl text-white font-small">
        <a href="#features" className="hover:text-green-200 text-white">Features</a>
        <a href="#expenses" className="hover:text-green-200 text-white">Expenses</a>
        <a href="#gallery" className="hover:text-green-200 text-white">Gallery</a>
        <a href="#profile" className="hover:text-green-200 text-white">Profile</a>
      </nav>
    </header>
       <div className="absolute right-5 px-4 mt-8">
  <div className="backdrop-blur-md bg-white/10 shadow shadow-green-300 rounded-xl p-[2px]">
  <a href="/login">  <button
      aria-label="User Login Button"
      tabIndex={0}
      className="flex items-center gap-3 px-5 py-3 rounded-xl bg-black/80 text-white cursor-pointer font-medium hover:bg-blue-500 transition"
    >
      
      <svg
        className="w-6 h-6 fill-white"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <g>
          <path d="m15.626 11.769a6 6 0 1 0 -7.252 0 9.008 9.008 0 0 0 -5.374 8.231 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 9.008 9.008 0 0 0 -5.374-8.231zm-7.626-4.769a4 4 0 1 1 4 4 4 4 0 0 1 -4-4zm10 14h-12a1 1 0 0 1 -1-1 7 7 0 0 1 14 0 1 1 0 0 1 -1 1z" />
        </g>
      </svg>
      <span>Log In</span>
    </button> </a>
   


  </div>
</div>
</div>
    
  );
}

export default Header;
