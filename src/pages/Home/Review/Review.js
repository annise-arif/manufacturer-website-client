import React from "react";

const Review = ({ review }) => {
  const { name, img, feedback, ratings } = review;
  return (
    <div className="card w-96 bg-base-100">
      <figure className="px-10 pt-10">
        <div className="avatar">
          <div className="w-24 mask mask-hexagon">
            <img src={img} />
          </div>
        </div>
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Name: {name}</h2>
        <p>
          <b>Review: </b>
          {feedback}
        </p>
        <div>
          <p>
            Ratings: {ratings}{" "}
            <i className="fa-solid fa-star text-orange-300"></i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Review;
