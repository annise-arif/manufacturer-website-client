import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../Firebase.init";

const Purchase = () => {
  const [user, loading, error] = useAuthState(auth);
  const { id } = useParams();
  const [services, setServices] = useState([]);
  console.log();
  useEffect(() => {
    fetch(`https://aqueous-fortress-84806.herokuapp.com/services/${id}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [id]);

  let quantityError;
  console.log(quantityError);

  const handleQuantity = (event) => {
    const userAddedQuantity = event.target.value;
    if (userAddedQuantity < services[0]?.minOrderQuantity) {
      return (quantityError = (
        <p className="text-red-500">
          Please enter a quantity up to minimum order quantity:{" "}
        </p>
      ));
    }
    console.log(event.target.value);
  };
  const handleProceedOrder = (event) => {
    event.preventDefault();

    const orderName = services[0]?.name;
    const orderimage = services[0]?.image;
    const email = event.target.email.value;
    const orderQuantity = event.target.quantity.value;
    const number = event.target.number.value;
    const address = event.target.address.value;
    const orderSumary = {
      name: orderName,
      image: orderimage,
      email: email,
      quantity: orderQuantity,
      number: number,
      address: address,
    };

    if (
      orderQuantity >= services[0]?.minOrderQuantity &&
      orderQuantity <= services[0]?.availableQuantity
    ) {
      fetch("https://aqueous-fortress-84806.herokuapp.com/order", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(orderSumary),
      })
        .then((res) => res.json())
        .then((inserted) => {
          console.log(inserted);
          if (inserted) {
            toast.success(`Proced Your Order for : ${services[0]?.name}`);
            event.target.reset();
          } else {
            toast.error("Failed Your Order");
            event.target.reset();
          }
        });
    }
    else{
      toast.error("Please Enter a valid quantity");
    }
  };
  return (
    <div className="card w-96 mb-16 bg-base-100 shadow-xl p-2 pt-8 text-center align-center mt-12 mx-auto">
      <h1 className="font-bold text-teal-600 text-xl">
        Order minimum Quantity: {services[0]?.minOrderQuantity}
      </h1>

      <figure className="px-10 pt-10">
        <img src={services[0]?.image} alt="img" className="rounded-xl" />
      </figure>

      <form onSubmit={handleProceedOrder}>
        <br />
        <input
          type="name"
          name="name"
          value={services[0]?.name}
          readOnly
          disabled
          id=""
          className="border-4 p-2 rounded-lg"
        />
        <br />
        <input
          type="email"
          name="email"
          value={user.email}
          readOnly
          disabled
          id=""
          className="border-4 p-2 my-4 rounded-lg"
        />
        <br />
        <input
          onChange={handleQuantity}
          type="text"
          name="quantity"
          placeholder={services[0]?.minOrderQuantity}
          id=""
          className="border-4 p-2 mt- rounded-lg"
        />
        {quantityError}
        <br />

        <input
          type="number"
          name="number"
          placeholder="Your Phone"
          id=""
          className="border-4 p-2 mt-3 rounded-lg"
        />
        <br />
        <input
          type="text"
          name="address"
          placeholder="Your Current Address"
          id=""
          className="border-4 p-2 mt-3 rounded-lg"
        />
        <br />
        <input
          className="btn btn-sm bg-teal-600 mt-3"
          type="submit"
          value="Proceed"
        />
      </form>
    </div>
  );
};

export default Purchase;
