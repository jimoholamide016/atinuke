
import { useState } from "react";

function Surprise() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <section className="bg-[#fff8f5] px-6 py-24 text-center">
      <p className="text-[#b47780] uppercase tracking-[4px] text-sm mb-4">
        One last thing
      </p>

      <h2 className="text-4xl md:text-5xl font-serif text-[#743d4b] mb-6">
        A Little Surprise ♡
      </h2>

      <p className="text-[#765b60] mb-8">
        There's something I want you to know.
      </p>

      <button
        onClick={() => setShowMessage(!showMessage)}
        className="bg-[#743d4b] text-white px-8 py-4 rounded-full hover:bg-[#965b68] transition duration-300"
      >
        {showMessage ? "Hide Message" : "Click to Reveal"}
      </button>

      {showMessage && (
        <div className="max-w-xl mx-auto mt-10 bg-[#f4e3e0] p-8 rounded-2xl">
          <p className="text-[#743d4b] text-xl md:text-2xl font-serif leading-9">
            Hikmah, never forget that you are appreciated.
            I hope this little website reminds you that you
            deserve kindness, happiness and beautiful memories. ♡
          </p>
        </div>
      )}
    </section>
  );
}

export default Surprise;
