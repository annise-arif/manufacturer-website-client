import React from "react";

const Tool = ({ service }) => {
    const {name, image, description, minOrderQuantity, availableQuantity, price} = service;
  return (
    <div class="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src={image} alt="image"/></figure>
  <div class="card-body">
    <h2 class="card-title">{name}</h2>
    <p>{description}</p>
    <p>Available: <small>{availableQuantity}pc,</small></p>
    <p>Minimum Order: <small>{minOrderQuantity}pc,</small></p>
    <p>Price: $<small>{price}</small></p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Purchase</button>
    </div>
  </div>
</div>
  );
};

export default Tool;
