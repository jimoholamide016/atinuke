
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import LoveLetter from "./components/LoveLetter";
import Memories from "./components/Memories";
import Reasons from "./components/Reasons";
import Surprise from "./components/Surprise";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Welcome />
      <LoveLetter />
      <Memories />
      <Reasons />
      <Surprise />

      <footer className="bg-[#743d4b] text-[#fff8f5] text-center py-8 px-6">
        <p className="font-serif text-xl">
          Made with appreciation for Hikmah ♡
        </p>
        <p className="text-sm mt-3 opacity-80">
          Always remember how special you are.
        </p>
        <p className="text-xs mt-5 opacity-60">
          © 2026 | Olamide
        </p>
      </footer>
    </div>
  );
}

export default App;
