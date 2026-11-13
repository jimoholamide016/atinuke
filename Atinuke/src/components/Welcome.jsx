
function Welcome() {
  return (
    <section
      id="home"
      className="min-h-[90vh] bg-[#fff8f5] flex items-center justify-center px-6 py-20 text-center"
    >
      <div className="max-w-3xl">
        <p className="text-[#b47780] uppercase tracking-[5px] text-sm mb-6">
          A little something for you
        </p>

        <h1 className="text-5xl md:text-7xl font-serif text-[#743d4b] mb-6">
          Hello, Hikmah ♡
        </h1>

        <p className="text-lg md:text-xl text-[#765b60] leading-8 mb-10">
          To the person who makes ordinary moments feel special.
          This little corner of the internet was made just for you, Atinuke.
        </p>

        <a
          href="#letter"
          className="inline-block bg-[#743d4b] text-white px-8 py-4 rounded-full hover:bg-[#965b68] transition duration-300"
        >
          Discover Your Surprise ♡
        </a>
      </div>
    </section>
  );
}

export default Welcome;
