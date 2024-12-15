import { Link } from "react-router-dom";
import { FaSun, FaMoon, FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { NavLinks } from "./";
import { useEffect, useState } from "react";

const themeLocalStorage = () => {
  return localStorage.getItem("theme") || "winter";
};

function Navbar() {
  const [theme, setTheme] = useState(themeLocalStorage());
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
  const toggleTheme = () => {
    const newTheme = theme == "winter" ? "dracula" : "winter";
    setTheme(newTheme);
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    // HEADER NAV QISMI BOSHLANISHI
    <header className="bg-base-300">
      <div className="navbar align-elements container">
        {/* //  NAV QISMI LOGOTIPI */}
        <div className="navbar-start">
          <Link to="/" className="flex items-center md:flex">
            <img
              className="mr-2"
              src="https://sports.uz/resources/img/logo-light.svg" 
              alt="bayroq"
              width={90}
              height={90}
              // https://cdn-icons-png.flaticon.com/512/197/197416.png
              // https://sports.uz/resources/img/logo-light.svg
            />
          </Link>
        </div>
        {/* //  NAV QISMI LOGOTIPI */}

        {/* //  NAV QISMI LINKLARI */}
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal rounded-box ">
            <NavLinks />
          </ul>
        </div>
        {/* //  NAV QISMI LINKLARI */}

        {/* //  NAV QISMI O'NG QISMI DARK MODE QISMI */}
        <div className="navbar-end flex gap-4 items-center">
          <div className="bg-transparent md:hidden lg:hidden">
            <button className=" m-1" onClick={toggleDropdown}>
              {isOpen ? (<IoClose className="w-6 h-6 bg-transparent" />) : ( <FaBars className="w-6 h-6 bg-transparent" />)}
            </button>
            {isOpen && (
              <ul className="menu bg-base-100  z-[1] w-[200px] p-2 shadow transition-all duration-200 ease-in-out absolute right-4">
                <NavLinks /> 
              </ul>
            )}
          </div>

          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}

            <input type="checkbox" onClick={toggleTheme} />

            {/* sun icon */}

            <FaSun className="swap-on h-7 w-7 fill-current" />

            {/* moon icon */}
            <FaMoon className="swap-off h-7 w-7 fill-current" />
          </label>
        </div>
        {/* //  NAV QISMI O'NG QISMI DARK MODE QISMI */}
      </div>
    </header>
  );
}

export default Navbar;
