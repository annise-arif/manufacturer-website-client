import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ManageProduct from "./ManageProduct";

const ManageProducts = () => {
  const [services, setServices] = useState([]);
  const { name } = services;
  useEffect(() => {
    fetch("https://aqueous-fortress-84806.herokuapp.com/manageproducts")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const handleDelete = (_id) => {
    window.confirm("Are you sure to delete this service");
    fetch(`https://aqueous-fortress-84806.herokuapp.com/manageproduct/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          toast.success(`Product: ${name} is deleted.`);
        }
      });
  };
  return (
    <div>
      <h2 className="text-teal-400 text-2xl font-bold p-4 text-center">
        Manage Products: {services.length}
      </h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Services Name</th>
              <th>Available Quantity</th>
              <th>Delete service</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <ManageProduct
                key={service._id}
                service={service}
                handleDelete={handleDelete}
              ></ManageProduct>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
