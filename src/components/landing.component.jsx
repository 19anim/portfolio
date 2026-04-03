import MySelf from "../assets/Myself.JPG";
import { useState } from "react";

const LandingPage = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleResumeDownload = () => {
    setIsDownloading(true);

    setTimeout(() => {
      setIsDownloading(false);
      setIsDownloaded(true);

      setTimeout(() => {
        setIsDownloaded(false);
      }, 3000);
    }, 1500);

    const link = document.createElement("a");
    link.href = "../../public/resume.pdf";
    link.download = "CV_NguyenPhiTuanAn_WebDeveloper.pdf";
    link.click();
  };

  return (
    <section id="landing" className="h-screen snap-start pt-16 flex items-center justify-center">
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col sm:flex-row ">
          <img src={MySelf} className="max-w-70 md:max-w-sm rounded-lg shadow-2xl" />
          <div>
            <p className="tracking-widest">Hi, my name is</p>
            <h1 className="text-3xl lg:text-5xl font-bold pb-4">Nguyen Phi Tuan An</h1>
            <p className="text-xl">
              A{" "}
              <span className="text-rotate duration-6000">
                <span>
                  <span className="bg-teal-400 text-teal-800 px-2">Passionate Developer</span>
                  <span className="bg-red-400 text-red-800 px-2">Creative Developer</span>
                  <span className="bg-blue-400 text-blue-800 px-2">Meister</span>
                </span>
              </span>
            </p>
            <p className="py-4">
              I'm a website developer with a passion for creating innovative and efficient
              solutions. I strive to build applications that not only function flawlessly but also
              provide an exceptional user experience.
            </p>
            <button
              onClick={handleResumeDownload}
              disabled={isDownloading}
              className={`btn border-2 tracking-widest font-semibold transition-all duration-500 ${
                isDownloaded
                  ? "bg-emerald-500 border-emerald-500 text-white"
                  : isDownloading
                    ? "bg-emerald-300/20 border-emerald-300 text-emerald-300"
                    : "bg-transparent border-emerald-300 text-emerald-300 hover:bg-emerald-300/10 hover:scale-105 active:scale-95"
              }`}
            >
              <i
                className={`fa-solid transition-all duration-500 ${
                  isDownloading
                    ? "fa-spinner animate-spin"
                    : isDownloaded
                      ? "fa-check"
                      : "fa-download group-hover:animate-bounce"
                }`}
              ></i>
              {isDownloading ? "Downloading..." : isDownloaded ? "Downloaded!" : "Get My Resume"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
