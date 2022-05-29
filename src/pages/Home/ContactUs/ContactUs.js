import React from "react";

const ContactUs = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left ml-20">
            <h1 className="text-5xl font-bold text-teal-800">
              Don't hesitate to contact us !
            </h1>
            <p className="py-6">
              If you have any queries about your enrollment or have any
              questions about our orders before you want to enroll, please don't
              hesitate to fill out our ...
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-teal-50">
            <h5 className="text-teal-600 text-2xl font-bold text-center mt-4">
              Contact Us
            </h5>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Phone </span>
                </label>
                <input
                  type="number"
                  placeholder="number"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Address </span>
                </label>
                <input
                  type="text"
                  placeholder="address"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">What's Your Need </span>
                </label>
                <textarea
                  placeholder="write your needed"
                  name="textarea"
                  id=""
                  cols="4"
                  rows="2"
                  className="border-2 rounded-lg p-2"
                ></textarea>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-teal-500">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
