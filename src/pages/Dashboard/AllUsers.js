import React, { useEffect, useState } from "react";
import User from "./User";

const AllUsers = () => {
  const [allusers, setAllusers] = useState([]);

  useEffect(() => {
    fetch("https://aqueous-fortress-84806.herokuapp.com/allusers")
      .then((res) => res.json())
      .then((data) => setAllusers(data));
  }, []);

  return (
    <div>
      <h1 className="text-teal-500 font-bold text-center py-8">
        All Users : {allusers.length}
      </h1>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>user id</th>
              <th>make admin</th>
              <th>delete admin</th>
            </tr>
          </thead>
          <tbody>
            {allusers.map((user) => (
              <User key={user._id} user={user}></User>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
