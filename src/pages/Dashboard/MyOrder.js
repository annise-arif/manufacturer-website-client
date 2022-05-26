import React from "react";

const MyOrder = ({order}) => {
    const {name, quantity, number, address, email} = order;
  return (
    <tr>
      <th>{name}</th>
      <td>{quantity}</td>
      <td>{email}</td>
      <td>{number}</td>
      <td>{address}</td>
      <button className="btn btn-xs bg-red-400">delete</button>
      <button className="btn btn-xs bg-teal-400 ml-8">Pay</button>
    </tr>
  );
};

export default MyOrder;
