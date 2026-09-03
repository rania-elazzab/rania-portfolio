import { useEffect, useState } from "react";

function Loader() {
  const [loading, setLoading] = useState(true);
  const [loaderVisible, setLoaderVisible] = useState(true);
  const [loaderProgress, setLoaderProgress] = useState(0);

  useEffect(() => {
    let progress = 0;

    const progressInterval = setInterval(() => {
      progress += 1;

      if (progress >= 100) {
        progress = 100;
        clearInterval(progressInterval);
      }

      setLoaderProgress(progress);
    }, 23);

    const startExit = setTimeout(() => {
      setLoading(false);
    }, 2500);

    const removeLoader = setTimeout(() => {
      setLoaderVisible(false);
    }, 3400);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(startExit);
      clearTimeout(removeLoader);
    };
  }, []);

  if (!loaderVisible) return null;

  return (
    <div className={`portfolio-loader ${!loading ? "loader-hide" : ""}`}>
      <div className="loader-grid"></div>
      <div className="loader-circle"></div>

      <div className="loader-content">
        <div className="loader-number">
          <span>{String(loaderProgress).padStart(2, "0")}</span>
          <small>%</small>
        </div>

        <div className="loader-name">
          RANIA<span>.</span>
        </div>

        <p>WEB DEVELOPER · DESIGNER · MARKETING</p>

        <div className="loader-line">
          <div
            className="loader-line-fill"
            style={{ width: `${loaderProgress}%` }}
          ></div>
        </div>

        <div className="loader-year">PORTFOLIO / 2026</div>
      </div>
    </div>
  );
}

export default Loader;
