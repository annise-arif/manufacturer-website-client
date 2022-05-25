import React from "react";
import { useNavigate } from "react-router-dom";

const Tool = ({ service }) => {
  const {
    _id,
    name,
    image,
    description,
    minOrderQuantity,
    availableQuantity,
    price,
  } = service;
  const navigate = useNavigate();

  const handlePurchase = (id) => {
    console.log(id);
    navigate(`/purchase/${id}`);
  };
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold text-teal-600">{name}</h2>
        <p>{description}</p>
        <p>
          <b>Available:</b> <small>{availableQuantity}pc,</small>
        </p>
        <p>
          <b>Minimum Order:</b> <small>{minOrderQuantity}pc,</small>
        </p>
        <p>
          <b>Price:</b> $<small>{price}</small>
        </p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handlePurchase(_id)}
            className="btn bg-teal-500"
          >
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tool;
