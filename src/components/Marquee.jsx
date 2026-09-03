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
    <div className="marquee" aria-hidden="true">
      <div className="marquee-content">
        {items.map((word, index) => (
          <span key={index}>
            {word}
            <b>✦</b>
          </span>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
