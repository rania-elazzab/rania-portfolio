const WORDS = [
  "WEB DEVELOPMENT",
  "WEB DESIGN",
  "REACT",
  "MARKETING",
  "COMMERCE",
  "CREATIVITY"
];

function Marquee() {
  const items = [...WORDS, ...WORDS];

  return (
    <div className="relative overflow-hidden border-y border-line-soft bg-white py-5" aria-hidden="true">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent"></div>

      <div className="flex w-max gap-10 animate-marquee whitespace-nowrap">
        {items.map((word, index) => (
          <span key={index} className="flex items-center gap-10 font-serif text-2xl font-semibold tracking-wide text-plum-800">
            {word}
            <b className="text-rose-soft">✦</b>
          </span>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
