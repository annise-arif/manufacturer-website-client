import React from "react";

const Blogs = () => {
  return (
    <div>
      <h1 className="text-teal-700 text-3xl my-2 text-center font-bold">
        Blogs pages
      </h1>
      <div className="lg:flex">
      <div class="card w-1/2 bg-teal-200 text-primary-content m-6">
        <div class="card-body">
          <h2 class="card-title text-2xl font-bold text-teal-900 mb-4">Question : How will you improve the performance of a React
              Application</h2>
          <div>
          <span class="py-6 text-teal-600">No: 1
              Keeping component state local where necessary.
            </span>
            <br />
            <span class="py-6 text-teal-600">No: 2
            Memoizing React components to prevent unnecessary re-renders.
            </span>
            <br />
            <span class="py-6 text-teal-600">No: 3
            Code-splitting in React using dynamic import()
            </span>
            <br />
            <span class="py-6 text-teal-600">No: 4
            Windowing or list virtualization in React. Lazy loading images in React.
            </span>
          </div>
        </div>
      </div>


      <div class="card w-1/2 bg-teal-200 text-primary-content m-6">
        <div class="card-body">
          <h2 class="card-title text-2xl font-bold text-teal-900 mb-4">Question : What are the different ways to manage a state in a React application
          </h2>
          <div>
          <span class="py-6 text-teal-600">No: 1
          Local state
            </span>
            <br />
            <span class="py-6 text-teal-600">No: 2
            Global state.
            </span>
            <br />
            <span class="py-6 text-teal-600">No: 3
            Server state.
            </span>
            <br />
            <span class="py-6 text-teal-600">No: 4
            URL state.
            </span>
          </div>
        </div>
      </div>


      <div class="card w-1/2 bg-teal-200 text-primary-content m-6">
        <div class="card-body">
          <h2 class="card-title text-2xl font-bold text-teal-900 mb-4">Question : How does prototypical inheritance work</h2>
          <div>
          <span class="py-6 text-teal-600">No: 1
          Simply put, prototypical inheritance refers to the ability to access 
            </span>
            <br />
            <span class="py-6 text-teal-600">No: 2
            object properties from another object. We use a JavaScript prototype 
            </span>
            <br />
            <span class="py-6 text-teal-600">No: 3
            to add new properties and methods to an existing object constructor. 
            </span>
            <br />
            <span class="py-6 text-teal-600">No: 4
            We can then essentially tell our JS code to inherit properties from a prototype
            </span>
          </div>
        </div>
      </div>


      <div class="card w-1/2 bg-teal-200 text-primary-content m-6">
        <div class="card-body">
          <h2 class="card-title text-2xl font-bold text-teal-900 mb-4">Question : Why you do not set the state directly in React</h2>
          <div>
          <span class="py-6 text-teal-600">No: 1
          One should never update the state directly because of the following reasons: If you update it directly, calling the setState() afterward may just replace the update you made.
            </span>
          </div>
        </div>
      </div>
      <div class="card w-1/2 bg-teal-200 text-primary-content m-6">
        <div class="card-body">
          <h2 class="card-title text-2xl font-bold text-teal-900 mb-4">Question : Why you do not set the state directly in React</h2>
          <div>
          <span class="py-6 text-teal-600">No: 1
          One should never update the state directly because of the following reasons: If you update it directly, calling the setState() afterward may just replace the update you made.
            </span>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Blogs;
