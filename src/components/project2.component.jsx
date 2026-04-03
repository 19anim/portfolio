import indexPage from "../assets/tamtwedding.png";

const Project2 = () => {
  return (
    <section className="h-screen snap-start pt-16 flex flex-col items-center justify-center gap-1">
      <div className="flex">
        <div className="flex gap-2 items-center">
          <div className="border rounded-md px-1 border-emerald-300 text-emerald-300">03. 02 </div>
          {"PROJECTS".split("").map((char, i) => (
            <kbd key={i} className="kbd">
              {char}
            </kbd>
          ))}
        </div>
        <div className="pl-3 hidden md:flex w-80 flex-col">
          <div className="divider"></div>
        </div>
      </div>

      <desc className="text-center text-gray-300 max-w-2xl">
        Here are some of the "worthy" projects I've worked on.
      </desc>

      <div className="mockup-browser overflow-visible border border-base-300 w-[370px] lg:min-w-[1150px] md:w-[80%] h-[700px] lg:h-[500px] bg-black/30">
        <div className="mockup-browser-toolbar">
          <div className="input">
            https://tamtwedding.netlify.app/
            <i
              className="fa-solid fa-arrow-right-long ml-auto cursor-pointer"
              onClick={() => window.open("https://tamtwedding.netlify.app/", "_blank")}
            ></i>
          </div>
        </div>

        <div className="h-[calc(100%-44px)] flex flex-col lg:flex-row items-center justify-center">
          <div className="hero">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src={indexPage}
                className="max-w-xs md:max-w-lg lg:max-w-xl rounded-lg shadow-2xl hover:scale-125 transition-all duration-300 cursor-pointer"
              />
              <div className="font-mono">
                <h1 className="text-2xl md:text-5xl font-bold text-emerald-300">TAMT Wedding</h1>
                <p className="py-3">
                  An online wedding invitation website for me and my wife. The website includes
                  information about the wedding, such as the date, location, and schedule of events,
                  and a RSVP form for guests to confirm their attendance.
                </p>
                <button
                  className="btn btn-primary hover:scale-95 transition-all duration-300"
                  onClick={() => window.open("https://tamtwedding.netlify.app/", "_blank")}
                >
                  To the site
                </button>
                <div className="pt-3 flex flex-wrap gap-2">
                  <div className="badge badge-outline border-emerald-300 text-emerald-300">
                    ReactJs
                  </div>
                  <div className="badge badge-outline border-emerald-300 text-emerald-300">
                    Tailwindcss
                  </div>
                  <div className="badge badge-outline border-emerald-300 text-emerald-300">
                    Motion Dev
                  </div>
                  <div className="badge badge-outline border-emerald-300 text-emerald-300">
                    DaisyUI
                  </div>
                  <div className="badge badge-outline border-emerald-300 text-emerald-300">
                    SheetDB
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project2;
