import Logo from "../assets/logo.png";
import { useState } from "react";

const Navbar = () => {
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
    link.href = "/resume.pdf";
    link.target = "_blank";
    link.download = "CV_NguyenPhiTuanAn_WebDeveloper.pdf";
    link.click();
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 w-full px-10 z-50 shadow-md backdrop-blur-md">
      <div className="flex justify-between h-16">
        <div className="flex items-center">
          <a onClick={() => scrollToSection("landing")}>
            <img className="h-16 w-auto cursor-pointer" src={Logo} alt="Logo" />
          </a>
        </div>
        <div className="flex items-center gap-4">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-md dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a onClick={() => scrollToSection("about")}>
                  <span className="text-emerald-300">01.</span> About me
                </a>
              </li>
              <li>
                <a onClick={() => scrollToSection("experience")}>
                  <span className="text-emerald-300">02.</span> Experience
                </a>
              </li>
              <li>
                <a onClick={() => scrollToSection("projects")}>
                  <span className="text-emerald-300">03.</span> Projects
                </a>
              </li>
              <li>
                <a onClick={() => scrollToSection("contact")}>
                  <span className="text-emerald-300">04.</span> Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal pr-5">
              <li>
                <a
                  onClick={() => scrollToSection("about")}
                  className="text-gray-400 cursor-pointer hover:text-emerald-300 transition-colors"
                >
                  <span className="text-emerald-300">01.</span> About me
                </a>
              </li>
              <li>
                <a
                  onClick={() => scrollToSection("experience")}
                  className="text-gray-400 cursor-pointer hover:text-emerald-300 transition-colors"
                >
                  <span className="text-emerald-300">02.</span> Experience
                </a>
              </li>
              <li>
                <a
                  onClick={() => scrollToSection("projects")}
                  className="text-gray-400 cursor-pointer hover:text-emerald-300 transition-colors"
                >
                  <span className="text-emerald-300">03.</span> Projects
                </a>
              </li>
              <li>
                <a
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-400 cursor-pointer hover:text-emerald-300 transition-colors"
                >
                  <span className="text-emerald-300">04.</span> Contact
                </a>
              </li>
            </ul>
          </div>
          <button
            onClick={handleResumeDownload}
            disabled={isDownloading}
            className={`btn border-2 transition-all duration-500 ${
              isDownloaded
                ? "bg-emerald-500 border-emerald-500 text-white"
                : isDownloading
                  ? "bg-emerald-300/20 border-emerald-300 text-emerald-300"
                  : "border-emerald-300 text-emerald-300 hover:-translate-x-1 hover:shadow-[4px_4px_0_0_#10b981]"
            }`}
          >
            <i
              className={`fa-solid transition-all ${
                isDownloading
                  ? "fa-spinner animate-spin"
                  : isDownloaded
                    ? "fa-check"
                    : "fa-download"
              }`}
            ></i>
            {isDownloading ? "Downloading..." : isDownloaded ? "Downloaded!" : "Resume"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
