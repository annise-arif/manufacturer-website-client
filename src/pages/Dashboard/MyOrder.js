import React from "react";

const MyOrder = ({order, setOrders, orders}) => {
    const {name, quantity, number, address, email, _id} = order;

    const handleDelete = (_id) => {
      const proceed = window.confirm(`Are You Sure to Cancel this Order : ${name}`);
      if (proceed) {
        const url = `http://localhost:5000/myorders/${_id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            const remaining = orders.filter((o) => o._id !== _id);
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
      <button onClick={() =>handleDelete(_id)} className="btn btn-xs bg-red-400">Cancel</button>
      <button className="btn btn-xs bg-teal-400 ml-8">Pay</button>
    </tr>
  );
};

export default MyOrder;
