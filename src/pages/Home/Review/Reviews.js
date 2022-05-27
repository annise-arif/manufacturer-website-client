import React, { useEffect, useState } from "react";
import Review from "./Review";

const Reviews = () => {
  const [reviews, setReviews ] = useState([]);
  useEffect(() =>{
    fetch('http://localhost:5000/reviews')
    .then(res=>res.json())
    .then(data => setReviews(data))
  }, []);
  return (
    <div className="mt-20">
      <h1 className="text-teal-600 text-2xl font-bold text-center">
        Our Clients Reviews
      </h1>

      <div className="lg:px-12 md:px-8 sm:px-6 inline-grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 w-full mx-auto mt-8">
        {
          reviews.map(review => <Review
          key={review._id}
          review={review}
          ></Review>)
        }
      </div>
    </div>
  );
};

export default Reviews;
