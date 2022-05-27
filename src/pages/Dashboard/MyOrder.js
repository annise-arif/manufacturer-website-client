import React from "react";

const MyOrder = ({order, setOrders}) => {
    const {name, quantity, number, address, email, _id} = order;

    const handleDelete = (id) => {
      const proceed = window.confirm("You want to Delete");
      if (proceed) {
        const url = `http://localhost:5000/myorders/${_id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            const remaining = order.filter((o) => o._id !== id);
            setOrders(remaining);
          });
      }
    };
  return (
    <tr>
      <th>{name}</th>
      <td>{quantity}</td>
      <td>{email}</td>
      <td>{number}</td>
      <td>{address}</td>
      <button onClick={() =>handleDelete(_id)} className="btn btn-xs bg-red-400">delete</button>
      <button className="btn btn-xs bg-teal-400 ml-8">Pay</button>
    </tr>
  );
};

export default MyOrder;
