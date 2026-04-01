import indexPage from "../assets/playandshare.png";

const Project1 = () => {
  return (
    <section className="h-screen snap-start pt-16 flex flex-col items-center justify-center gap-1">
      <div className="flex">
        <div className="flex gap-2 items-center">
          <div className="border rounded-md px-1 border-emerald-300 text-emerald-300">03. 01 </div>
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

      <div className="mockup-browser border border-base-300 w-[370px] lg:min-w-[1150px] md:w-[80%] h-[700px] lg:h-[500px] bg-black/30">
        <div className="mockup-browser-toolbar">
          <div className="input">
            https://playandshare.netlify.app/
            <i
              className="fa-solid fa-arrow-right-long ml-auto cursor-pointer"
              onClick={() => window.open("https://playandshare.netlify.app/", "_blank")}
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
                <h1 className="text-2xl md:text-5xl font-bold">Play And Share</h1>
                <p className="py-3">
                  A web application that allows users to share their favorite travel destinations,
                  complete with images and descriptions. Moreover, users can create travel timeline,
                  or split the money for a trip with their friends.
                </p>
                <button
                  className="btn btn-primary hover:scale-95 transition-all duration-300"
                  onClick={() => window.open("https://playandshare.netlify.app/", "_blank")}
                >
                  To the site
                </button>
                <div className="pt-3 flex flex-wrap gap-2">
                  <div className="badge badge-outline border-emerald-300 text-emerald-300">
                    ReactJs
                  </div>
                  <div className="badge badge-outline border-emerald-300 text-emerald-300">
                    ReduxJs
                  </div>
                  <div className="badge badge-outline border-emerald-300 text-emerald-300">
                    NodeJs
                  </div>
                  <div className="badge badge-outline border-emerald-300 text-emerald-300">
                    ExpressJs
                  </div>
                  <div className="badge badge-outline border-emerald-300 text-emerald-300">
                    MongoDB
                  </div>
                  <div className="badge badge-outline border-emerald-300 text-emerald-300">
                    Cloudinary
                  </div>
                  <div className="badge badge-outline border-emerald-300 text-emerald-300">
                    DnD-Kit
                  </div>
                  <div className="badge badge-outline border-emerald-300 text-emerald-300">
                    Tailwindcss
                  </div>
                  <div className="badge badge-outline border-emerald-300 text-emerald-300">
                    DaisyUI
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

export default Project1;
