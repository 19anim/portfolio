import indexPage from "../assets/jagerthejagershop.png";

const Project3 = () => {
  return (
    <section className="h-screen snap-start pt-16 flex flex-col items-center justify-center gap-1">
      <div className="flex">
        <div className="flex gap-2 items-center">
          <div className="border rounded-md px-1 border-emerald-300 text-emerald-300">03. 03 </div>
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
            https://jagerthejagershop.netlify.app/
            <i
              className="fa-solid fa-arrow-right-long ml-auto cursor-pointer"
              onClick={() => window.open("https://jagerthejagershop.netlify.app/", "_blank")}
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
                <h1 className="text-2xl md:text-5xl font-bold">JAGERTHEJAGER SHOP</h1>
                <p className="py-3">
                  A web application that allows users to browse and purchase products from an online
                  store. Users can create accounts, add items to their cart, and securely checkout
                  with estimated shipping fee. Moreover there is an admin dashboard for the store
                  owner to manage products, orders.
                </p>
                <button
                  className="btn btn-primary hover:scale-95 transition-all duration-300"
                  onClick={() => window.open("https://jagerthejagershop.netlify.app/", "_blank")}
                >
                  To the site
                </button>
                <div className="pt-3 flex flex-wrap gap-2">
                  <div className="badge badge-outline border-emerald-300 text-emerald-300">
                    ReactJs
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
                  <div className="badge badge-outline border-emerald-300 text-emerald-300">JWT</div>
                  <div className="badge badge-outline border-emerald-300 text-emerald-300">
                    Tailwindcss
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

export default Project3;
