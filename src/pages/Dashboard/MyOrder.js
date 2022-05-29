import React from "react";

const MyOrder = ({ order, setOrders, orders }) => {
  const { name, quantity, number, address, email, _id } = order;

  const handleDelete = (id) => {
    const proceed = window.confirm(
      `Are You Sure to Cancel this Order : ${name}`
    );
    if (proceed) {
      const url = `https://aqueous-fortress-84806.herokuapp.com/myorders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = orders.filter((o) => o._id !== id);
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
      <button
        onClick={() => handleDelete(_id)}
        className="btn btn-xs bg-red-400"
      >
        Cancel
      </button>
      <button className="btn btn-xs bg-teal-400 ml-12 mt-2 mb-2">Pay</button>
    </tr>
  );
};

export default MyOrder;
