import React, { useEffect, useState } from 'react';
import ManageAllOrder from './ManageAllOrder';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/manageallorders')
        .then(res=>res.json())
        .then(data => setOrders(data))
    }, []);
    return (
        <div className='w-1/2'>
      <h2 className="text-teal-400 text-2xl font-bold p-4 text-center">Manage All Orders Length: {orders.length}</h2>
      <div class="overflow-x-auto w-full">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Order Name</th>
              <th>Order Quantity</th>
              <th>Delete Order</th>
            </tr>
          </thead>
          <tbody>
            {
                orders.map(order => <ManageAllOrder
                key={order._id}
                order={order}
                setOrders={setOrders}
                ></ManageAllOrder>)
            }
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default ManageAllOrders;