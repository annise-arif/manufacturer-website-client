import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase.init";
import MyOrder from "./MyOrder";

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  console.log();

  useEffect(() => {
    const url = `http://localhost:5000/myorders/${user?.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((ordersData) => setOrders(ordersData));
  }, [user]);

  
  return (
    <div className="">
      <h1 className="text-teal-800 text-3xl my-2 text-center">My Orders</h1>
      <div class="overflow-x-auto">
        <table class="table table-compact w-full">
          <thead>
            <tr>
              <th>Order Name</th>
              <th>Quantity</th>
              <th>Email</th>
              <th>Phone</th>
              <th>address</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <MyOrder 
              key={order._id} 
              order={order}
              setOrders={setOrders}
              ></MyOrder>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th>Order Name</th>
              <th>Quantity</th>
              <th>Email</th>
              <th>Phone</th>
              <th>address</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
