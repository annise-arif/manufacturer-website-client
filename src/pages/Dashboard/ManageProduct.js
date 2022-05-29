import React from "react";

const ManageProduct = ({service, handleDelete}) => {
  const {_id, name, availableQuantity} = service;
  return (
    <tr>
      <th></th>
      <td>{name}</td>
      <td>{availableQuantity}</td>
      <td><button onClick={() =>handleDelete(_id)} className="btn btn-xs bg-red-400"> Delete </button></td>
    </tr>
  );
};

export default ManageProduct;
