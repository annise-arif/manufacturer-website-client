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
      <div class="navbar bg-teal-200">
        <div class="navbar-start">
          <a class="btn btn-ghost text-teal-600 normal-case lg:text-3xl md:text-2xl font-bold">
            Hammer Drill M.F.C (L.T.D)
          </a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            <li>
              <Link to="/"></Link>
            </li>
            <li>
              <Link to="/home">Home</Link>
            </li>

            {user && (
              <>
                <li>
                  <Link to="/home">About</Link>
                </li>
                <li>
                  <Link to="/home">Home</Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <div class="navbar-end">
          <ul class="menu menu-horizontal p-0">
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
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
