
function Memories() {
  const photos = [
    {
      image: "/hikmah1.jpg",
      caption: "A beautiful memory"
    },
    {
      image: "/hikmah3.jpg",
      caption: "One to remember"
    },
    {
      image: "/hikmah2.jpg",
      caption: "A special moment"
    }
  ];

  return (
    <section
      id="memories"
      className="bg-[#fff8f5] px-6 py-24 md:px-16"
    >
      <div className="text-center mb-14">
        <p className="text-[#b47780] uppercase tracking-[4px] text-sm mb-4">
          Moments worth keeping
        </p>

        <h2 className="text-4xl md:text-5xl font-serif text-[#743d4b]">
          Our Little Gallery
        </h2>

        <p className="text-[#765b60] mt-5">
          A collection of moments that deserve to be remembered.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="bg-white p-3 rounded-2xl shadow-md hover:-translate-y-2 transition duration-300"
          >
            <img
              src={photo.image}
              alt={photo.caption}
              className="w-full h-80 object-cover rounded-xl"
            />

            <p className="text-center text-[#743d4b] font-serif mt-5 mb-3">
              {photo.caption} ♡
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Memories;
