
function Navbar() {
  return (
    <nav className="w-full bg-[#fff8f5] px-6 md:px-16 py-6 flex justify-between items-center">

      <h1 className="text-xl font-serif font-bold text-[#743d4b]">
        For My Atinuke ♡
      </h1>

      <div className="hidden md:flex gap-8 text-sm text-[#765b60]">
        <a href="#home" className="hover:text-[#b47780]">Home</a>
        <a href="#letter" className="hover:text-[#b47780]">My Letter</a>
        <a href="#memories" className="hover:text-[#b47780]">Memories</a>
        <a href="#reasons" className="hover:text-[#b47780]">Why You</a>
      </div>

    </nav>
  );
}

export default Navbar;
