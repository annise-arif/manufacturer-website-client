import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../Firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div>
      <h1 className="text-xl font-bold text-teal-200 text-center mt-4">
        Well Come To Dashboard
      </h1>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <label
            for="my-drawer-2"
            className="btn bg-teal-600 drawer-button lg:hidden"
          >
            Open drawer
          </label>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label for="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 font-bold text-base-content">
            {!admin && <>
              <li>
              <Link to="/dashboard/myorders">My Orders</Link>
            </li>
            <li>
              <Link to="/dashboard/addareview">Add A Review</Link>
            </li>
            </>}
            <li>
              <Link to="/dashboard/myprofile">My Profile</Link>
            </li>
            
            {admin && <>
              <li>
              <Link to="/dashboard/allusers">All Users</Link>
            </li>
              <li>
              <Link to="/dashboard/manageallorders">Manage All Orders</Link>
            </li>
            <li>
              <Link to="/dashboard/addaproduct">Add A Product</Link>
            </li>
            <li>
              <Link to="/dashboard/makeadmin">Make Admin</Link>
            </li>
            <li>
              <Link to="/dashboard/manageproducts">Manage Products</Link>
            </li>
            </>}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
