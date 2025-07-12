const Header = () => {
  return (
    <header className="flex justify-center items-center sticky top-0 z-50">
      <nav className="mt-10 px-1 bg-black/25  shadow shadow-green-300 rounded-4xl w-xl py-5 flex flex-row justify-center gap-15 text-2xl text-white font-small">
        <a href="#chat" className="hover:text-green-200 text-white">Chat</a>
        <a href="#expenses" className="hover:text-green-200 text-white">Expenses</a>
        <a href="#gallery" className="hover:text-green-200 text-white">Gallery</a>
        <a href="#profile" className="hover:text-green-200 text-white">Profile</a>
      </nav>
    </header>
  );
}

export default Header;
