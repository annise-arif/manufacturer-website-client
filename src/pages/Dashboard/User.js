import React from "react";
import { toast } from "react-toastify";

const User = ({ user }) => {
  const { email, _id, role} = user;

  const makeAdmin = () => {
    fetch(`https://aqueous-fortress-84806.herokuapp.com/user/admin/${email}`, {
      method: 'PUT',
    })
    .then((res) =>{
        if (res.status === 403) {
            toast.error("Failed to Make an admin");
          }
          return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.matchedCount > 0) {
          toast.success(`Successfully Made An Admin`);
        }
      });
  };
  return (
    <tr>
      <th></th>
      <td>{email}</td>
      <td>{_id}</td>
      <td>
       {role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs bg-teal-600">
          Make Admin
        </button>}
        {role === 'admin' && <b>Admin</b>}
      </td>
      <td>
        {role !== 'admin' && <button className="btn btn-xs bg-red-400">Remove user</button>}
      </td>
    </tr>
  );
};

export default User;
