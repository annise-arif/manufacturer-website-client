import React from "react";
import Review from "./Review";

const Reviews = () => {
  const reviews = [
    {
      _id:1,
      img: "https://i.ibb.co/HFH50XS/review1.jpg",
      name: "Akbor dorsl",
      feedback: "The best magnetic core drill machine in the market. They have the largest variety of machines to suit almost every drilling requirement for portable drill machines.",
      ratings: 6,
    },
    {
      _id:2,
      img: "https://i.ibb.co/F4g9c43/review2.jpg",
      name: "Jhon nitro",
      feedback: "The best magnetic core drill machine in the market. They have the largest variety of machines to suit almost every drilling requirement for portable drill machines.",
      ratings: 5.9,
    },
    {
      _id:3,
      img: "https://i.ibb.co/pPBGt1W/review3.jpg",
      name: "pekarotoy",
      feedback: "The best magnetic core drill machine in the market. They have the largest variety of machines to suit almost every drilling requirement for portable drill machines.",
      ratings: 5.8,
    },
    {
      _id:4,
      img: "https://i.ibb.co/BCkcTZ1/review4.jpg",
      name: "lonchobiko viki",
      feedback: "The best magnetic core drill machine in the market. They have the largest variety of machines to suit almost every drilling requirement for portable drill machines.",
      ratings: 6,
    }
  ]
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
