import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Dropdown } from "flowbite-react";
import { LoginContext, UserContext } from "./Context";
import request from "../request";
import { useSignOut } from "react-auth-kit";

const Navbar = ( {installHandler} ) => {
  const [scrolled, setScrolled] = useState(false);
  // const { loggedIn, setLoggedIn } = useContext(LoginContext);
  const { user, setUser } = useContext(UserContext);
  const username = localStorage.getItem("user");
  const signOut = useSignOut();

  // add event listener to window to track when user scrolls
  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 10) {
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
                <Link to="/login">
                  <Dropdown.Item className="text-slate-900 hover:bg-slate-200">
                    Login
                  </Dropdown.Item>
                </Link>
                <Link to="/register">
                  <Dropdown.Item className="text-slate-900 hover:bg-slate-200">
                    Register
                  </Dropdown.Item>
                </Link>
              </Dropdown>
            </li>
          ) : (
            <li>
              <Dropdown label={username} inline={true} dismissOnClick={true}>
                <Link to={`/profile/${username}`}>
                  <Dropdown.Item className="text-slate-900 hover:bg-slate-200">
                    Profile
                  </Dropdown.Item>
                </Link>

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
          {/* <BiMenuAltRight /> */}
          <Dropdown label="Menu" inline={true} dismissOnClick={true}>
            <Link to="/">
              <Dropdown.Item className="text-slate-900 hover:bg-slate-200">
                Home
              </Dropdown.Item>
            </Link>
            <Link to="/contact">
              <Dropdown.Item className="text-slate-900 hover:bg-slate-200">
                Contact
              </Dropdown.Item>
            </Link>
            <Link to="/login">
              <Dropdown.Item className="text-slate-900 hover:bg-slate-200">
                Login
              </Dropdown.Item>
            </Link>
            <Link to="/register">
              <Dropdown.Item className="text-slate-900 hover:bg-slate-200">
                Register
              </Dropdown.Item>
            </Link>
              <Dropdown.Item className="text-slate-100 hover:bg-slate-200 m-2 bg-blue-500 rounded-lg">
                  <button onClick={installHandler}>Install</button>
              </Dropdown.Item>
          </Dropdown>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
