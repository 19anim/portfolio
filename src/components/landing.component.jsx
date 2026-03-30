import MySelf from "../assets/Myself.JPG";

const LandingPage = () => {
  return (
    <section class="h-screen snap-start pt-16 flex items-center justify-center">
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row ">
          <img src={MySelf} className="max-w-75 md:max-w-sm rounded-lg shadow-2xl" />
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
            <button className="btn btn-ghost border-emerald-300 text-emerald-300 tracking-widest">
              Get My Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
