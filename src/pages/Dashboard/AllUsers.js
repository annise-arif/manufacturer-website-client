import React, { useState } from "react";
import User from "./User";

const AllUsers = () => {
  const [allusers, setAllusers] = useState([]);

  fetch("http://localhost:5000/allusers")
    .then((res) => res.json())
    .then((data) => setAllusers(data));

  return (
    <div>
      <h1 className="text-teal-500 font-bold text-center py-8">All Users : {allusers.length}</h1>

      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {
                allusers.map(user => <User
                key={user._id}
                user={user}
                ></User>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
