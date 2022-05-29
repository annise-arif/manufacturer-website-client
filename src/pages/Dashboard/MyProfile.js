import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase.init";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  return (
    <div className=" w-1/2">
      <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-teal-50">
        <div className="card-body">
          <h1 className="text-teal-400 text-2xl font-bold">My Profile</h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              value={email}
              readOnly
              disabled
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Country</span>
            </label>
            <input
              type="text"
              placeholder="Country"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Current City</span>
            </label>
            <input
              type="text"
              placeholder="City"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your phone</span>
            </label>
            <input
              type="number"
              placeholder="Number"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-teal-600">Update profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
