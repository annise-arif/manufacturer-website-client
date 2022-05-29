import React from 'react';

const ManageAllOrder = ({order}) => {
    return (
        <tr>
      <th></th>
      <td>{order.name}</td>
      <td>{order.quantity}</td>
      <td><button className="btn btn-xs bg-red-400"> Delete </button></td>
    </tr>
    );
};

export default ManageAllOrder;