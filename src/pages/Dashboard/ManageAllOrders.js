import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ManageAllOrder from "./ManageAllOrder";

const ManageAllOrders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("https://aqueous-fortress-84806.herokuapp.com/manageallorders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure to delete this service");
    if (proceed) {
      fetch(
        `https://aqueous-fortress-84806.herokuapp.com/manageallorders/${id}`,
        {
          method: "DELETE",
        }
      )
      .then((res) => res.json())
      .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            const remaining = orders.filter((o) => o._id !== id);
            setOrders(remaining);
            toast.success(`Product is deleted..`);
          }
        });
    }
  };
  return (
    <div className="w-1/2">
      <h2 className="text-teal-400 text-2xl font-bold p-4 text-center">
        Manage All Orders Length: {orders.length}
      </h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Order Name</th>
              <th>Order Quantity</th>
              <th>Delete Order</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <ManageAllOrder
                key={order._id}
                order={order}
                setOrders={setOrders}
                handleDelete={handleDelete}
              ></ManageAllOrder>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAllOrders;
