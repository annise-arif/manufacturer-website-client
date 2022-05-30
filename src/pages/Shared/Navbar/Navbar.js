import { signOut } from "firebase/auth";
import React from "react";
import { Nav } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../Firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <header>
      <div className="navbar bg-teal-300">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
               <li>
              <Link to="/"></Link>
            </li>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/myportfolio">My Portfolio</Link>
            </li>

            {user && (
              <>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
              </>
            )}
            </ul>
          </div>
          <a className="btn btn-ghost text-teal-600 normal-case lg:text-3xl md:text-2xl font-bold">
           <Link to="/home">Hammer Drill M.F.C..</Link>  <span className="text-white"> (L.T.D)</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/myportfolio">My Portfolio</Link>
            </li>

            {user && (
              <>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div>
              <button
                className="btn btn-link text-decoration-none text-white"
                onClick={handleSignOut}
              >
                Sign Out
              </button>
              <small className="text-info">{user.email}</small>
            </div>
          ) : (
            <>
              <Nav.Link as={Link} to="/login" className="px-5">
                LogIn
              </Nav.Link>
              <Nav.Link as={Link} to="/register">
                Register
              </Nav.Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
