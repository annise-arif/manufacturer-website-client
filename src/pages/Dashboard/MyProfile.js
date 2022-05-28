import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase.init";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  return (
    <div className="">
      <div class="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-teal-50">
        <div class="card-body">
        <h1 className='text-teal-400 text-2xl font-bold'>My Profile</h1>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your Name"
              class="input input-bordered"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              type="text"
              value={email}
              readOnly
              disabled
              class="input input-bordered"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Your Country</span>
            </label>
            <input
              type="text"
              placeholder="Country"
              class="input input-bordered"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Your Current City</span>
            </label>
            <input
              type="text"
              placeholder="City"
              class="input input-bordered"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Your phone</span>
            </label>
            <input
              type="number"
              placeholder="Number"
              class="input input-bordered"
            />
          </div>
          <div class="form-control mt-6">
            <button class="btn bg-teal-600">Update profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
