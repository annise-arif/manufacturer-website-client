import React from "react";

const BusinessSummary = () => {
  return (
    <div className="my-20 mx-20">
      <div className="text-center mt-10 mb-8">
        <h2 className="text-teal-600 lg:text-4xl md:text-3xl sm:text-2xl mb-2 font-bold">
          MILLIONS BUSINESS TRUST US
        </h2>
        <span className="">TRY TO UNDERSTAND USERS EXPECTATION</span>
      </div>
      <div className="inline-grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 w-full mx-auto mt-8">
        <div className="card w-96 bg-base-100">
          <figure className="px-10 pt-10">
            <i className="fa-solid fa-flag-usa text-3xl text-teal-600"></i>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold lg:text-4xl md:text-3xl sm:text-2xl">
              72
            </h2>
            <p>
              <small className="text-teal-500 font-bold">Countries</small>
            </p>
          </div>
        </div>
        <div className="card w-96 bg-base-100">
          <figure className="px-10 pt-10">
            <i className="fa-solid fa-computer text-3xl text-teal-600"></i>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold lg:text-4xl md:text-3xl sm:text-2xl">
              535+
            </h2>
            <p>
              <small className="text-teal-500 font-bold">
                Complete Projects
              </small>
            </p>
          </div>
        </div>
        <div className="card w-96 bg-base-100">
          <figure className="px-10 pt-10">
            <i className="fa-solid fa-people-group text-3xl text-teal-600"></i>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold lg:text-4xl md:text-3xl sm:text-2xl">
              283+
            </h2>
            <p>
              <small className="text-teal-500 font-bold">Happy Client</small>
            </p>
          </div>
        </div>
        <div className="card w-96 bg-base-100">
          <figure className="px-10 pt-10">
            <i className="fa-solid fa-thumbs-up text-3xl text-teal-600"></i>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold lg:text-4xl md:text-3xl sm:text-2xl">
              435+
            </h2>
            <p>
              <small className="text-teal-500 font-bold">Feedbacks</small>
            </p>
          </div>
        </div>
      </div>

      <div className="d-flex bg-light shadow-lg mx-auto mt-12 w-1/2 p-4">
        <div className="content">
          <h1 className="text-teal-600 lg:text-2xl font-bold  pt-6 pb-2">
            Have any question about us get a <br /> products request?
          </h1>
          <span>Don't hesitate to contact us</span>
        </div>
        <div className="card-actions justify-end">
          <button className="btn bg-teal-600 btn-sm">Request For Quote</button>
          <button className="btn bg-black btn-sm">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
