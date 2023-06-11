import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "flowbite-react";
import { useSignOut } from "react-auth-kit";
import PropTypes from "prop-types";


const Navbar = ({ installHandler }) => {
  const [scrolled, setScrolled] = useState(false);
  const username = localStorage.getItem("user");
  const signOut = useSignOut();

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`p-4 text-slate-100 fixed z-10 w-full transition-all duration-500 ${
        scrolled
          ? "bg-gradient-to-r from-[#BB33C2]/70 to-[#5168eb]/70 backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div className="flex justify-between container mx-auto">
        <Link to="/" className="font-bold text-2xl">
          GhostTalk
        </Link>

        <ul className="md:flex items-center gap-4 hidden">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <button onClick={installHandler}>Install</button>
          </li>
          {!username ? (
            <li>
              <Dropdown label="Join Us" inline={true} dismissOnClick={true}>
                <Dropdown.Item>
                  <Link to="/login" className="text-slate-900 hover:bg-slate-200">
                    Login
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/register" className="text-slate-900 hover:bg-slate-200">
                    Register
                  </Link>
                </Dropdown.Item>
              </Dropdown>
            </li>
          ) : (
            <li>
              <Dropdown label={username} inline={true} dismissOnClick={true}>
                <Dropdown.Item>
                  <Link to={`/profile/${username}`} className="text-slate-900 hover:bg-slate-200">
                    Profile
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    localStorage.removeItem("user");
                    signOut();
                  }}
                  className="text-slate-900 hover:bg-slate-200"
                >
                  Logout
                </Dropdown.Item>
              </Dropdown>
            </li>
          )}
        </ul>
        <div className="md:hidden flex items-center">
          <Dropdown label="Menu" inline={true} dismissOnClick={true}>
            <Dropdown.Item>
              <Link to="/" className="text-slate-900 hover:bg-slate-200">
                Home
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/contact" className="text-slate-900 hover:bg-slate-200">
                Contact
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <button onClick={installHandler} className="text-slate-100 hover:bg-slate-200 m-2 bg-blue-500 rounded-lg">
                Install
              </button>
            </Dropdown.Item>
          </Dropdown>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  installHandler: PropTypes.func.isRequired,
};

export default Navbar;
