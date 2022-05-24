import React from "react";

const Tool = ({ service }) => {
    const {name, image, description, minOrderQuantity, availableQuantity, price} = service;
  return (
    <div class="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src={image} alt="image"/></figure>
  <div class="card-body">
    <h2 class="card-title font-bold text-teal-600">{name}</h2>
    <p>{description}</p>
    <p><b>Available:</b> <small>{availableQuantity}pc,</small></p>
    <p><b>Minimum Order:</b> <small>{minOrderQuantity}pc,</small></p>
    <p><b>Price:</b> $<small>{price}</small></p>
    <div class="card-actions justify-end">
      <button class="btn bg-teal-500">Purchase</button>
    </div>
  </div>
</div>
  );
};

export default Tool;
