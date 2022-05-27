import React from "react";

const ContactUs = () => {
  return (
    <div>
    
      <div class="hero min-h-screen bg-base-200">
      
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left ml-20">
            <h1 class="text-5xl font-bold text-teal-800">Don't hesitate to contact us !</h1>
            <p class="py-6">If you have any queries about your enrollment or have 
               any questions about our orders before you want to enroll, please don't
               hesitate to fill out our ...
            </p>
          </div>
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-teal-50">
          <h5 className="text-teal-600 text-2xl font-bold text-center mt-4">Contact Us</h5>
            <div class="card-body">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Your Phone </span>
                </label>
                <input
                  type="number"
                  placeholder="number"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Your Address </span>
                </label>
                <input
                  type="text"
                  placeholder="address"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">What's Your Need </span>
                </label>
                <textarea placeholder="write your needed" name="textarea" id="" cols="4" rows="2" className="border-2 rounded-lg p-2">
                </textarea>
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control mt-6">
                <button class="btn bg-teal-500">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
