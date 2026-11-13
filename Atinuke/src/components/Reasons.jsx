
function Reasons() {
  const reasons = [
    "Your ability to make ordinary moments special.",
    "The memories we continue to create.",
    "The conversations we share.",
    "Your unique personality.",
    "The little things that make you who you are.",
    "Simply being yourself."
  ];

  return (
    <section
      id="reasons"
      className="bg-[#f4e3e0] px-6 py-24 md:px-16"
    >
      <div className="text-center mb-14">
        <p className="text-[#b47780] uppercase tracking-[4px] text-sm mb-4">
          Just a few of many
        </p>

        <h2 className="text-4xl md:text-5xl font-serif text-[#743d4b]">
          Why You're Special
        </h2>
      </div>

      <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="bg-[#fffaf8] p-6 rounded-xl shadow-sm flex gap-4 items-center"
          >
            <span className="text-2xl text-[#b47780]">♡</span>
            <p className="text-[#765b60]">{reason}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reasons;
