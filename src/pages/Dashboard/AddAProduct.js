import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../Firebase.init";

const AddAProduct = () => {
  const [user] = useAuthState(auth);
  const addProduct = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const img = event.target.img.value;
    const price = event.target.price.value;
    const description = event.target.description.value;
    const minOrderQuantity = event.target.minQuan.value;
    const availableQuantity = event.target.availableQuan.value;
    const email = user.email;
    const orderSumary = {
      email: email,
      name: name,
      image: img,
      price: price,
      description: description,
      minOrderQuantity: minOrderQuantity,
      availableQuantity: availableQuantity,
    };
    console.log(orderSumary);

    fetch("https://aqueous-fortress-84806.herokuapp.com/addaproduct", {
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
          toast.success(`added success your Product`);
          event.target.reset();
        } else {
          toast.error("Failed Your Product");
          event.target.reset();
        }
      });
  };
  return (
    <div className="card w-1/3 mb-16 bg-base-100 shadow-xl p-6 pt-8 text-center align-center mt-12 mx-auto">
      <h3 className="text-teal-400 text-2xl font-bold p-4 text-center">
        Add A Product
      </h3>

      <form onSubmit={addProduct}>
        <br />
        <input
          readOnly
          disabled
          type="text"
          name="email"
          value={user.email}
          id=""
          className="border-4 p-2 rounded-lg mb-4 w-full"
        />
        <br />
        <input
          required
          type="text"
          name="name"
          placeholder="Product Name"
          id=""
          className="border-4 p-2 rounded-lg mb-4 w-full"
        />
        <br />
        <input
          type="text"
          name="img"
          placeholder="imgbb images link"
          id=""
          className="border-4 p-2 rounded-lg w-full"
        />
        <br />
        <input
          type="number"
          name="price"
          placeholder="Product Price"
          id=""
          className="border-4 p-2 my-4 rounded-lg w-full"
        />
        <br />
        <textarea
          name="description"
          id=""
          cols="24"
          rows="3"
          className="border-4 p-2 rounded-lg w-full"
          placeholder="Product Description write here"
        ></textarea>

        <br />

        <input
          type="number"
          name="minQuan"
          placeholder="Min buying Quantity"
          id=""
          className="border-4 p-2 mt-3 rounded-lg w-full"
        />
        <br />
        <input
          type="number"
          name="availableQuan"
          placeholder="Available Quantity"
          id=""
          className="border-4 p-2 mt-3 rounded-lg w-full"
        />
        <br />
        <input
          className="btn btn-sm bg-teal-600 mt-3"
          type="submit"
          value="add Review"
        />
      </form>
    </div>
  );
};

export default AddAProduct;
