import Logo from "../assets/react.svg";
const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full px-10 z-50 shadow-md backdrop-blur-md">
      <div className="flex justify-between h-16">
        <div className="flex items-center">
          <img className="h-8 w-auto" src={Logo} alt="React Logo" />
        </div>
        <div className="flex items-center">
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
                <a>
                  <span className="text-emerald-300">01.</span> About me
                </a>
              </li>
              <li>
                <a>
                  <span className="text-emerald-300">02.</span> Experience
                </a>
              </li>
              <li>
                <a>
                  <span className="text-emerald-300">03.</span> Projects
                </a>
              </li>
              <li>
                <a>
                  <span className="text-emerald-300">04.</span> Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal pr-5">
              <li>
                <a className="text-gray-400">
                  <span className="text-emerald-300">01.</span> About me
                </a>
              </li>
              <li>
                <a className="text-gray-400">
                  <span className="text-emerald-300">02.</span> Experience
                </a>
              </li>
              <li>
                <a className="text-gray-400">
                  <span className="text-emerald-300">03.</span> Projects
                </a>
              </li>
              <li>
                <a className="text-gray-400">
                  <span className="text-emerald-300">04.</span> Contact
                </a>
              </li>
            </ul>
          </div>
          <button className="btn border-emerald-300 text-emerald-300 hover:-translate-1 hover:shadow-[4px_4px_0_0_#6ee7b7] transition-transform duration-200">
            Resume
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
