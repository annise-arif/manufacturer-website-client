import React from "react";
import review1 from '../../../images/reviews/review1.png';
import review2 from '../../../images/reviews/review2.png';
import review3 from '../../../images/reviews/review3.png';
import review4 from '../../../images/reviews/review4.png';

const Reviews = () => {
  return (
    <div className="mt-20">
      <h1 className="text-teal-600 text-2xl font-bold text-center">
        Satisfied Our Client
      </h1>

      <div className="lg:px-12 md:px-8 sm:px-6 inline-grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 w-full mx-auto mt-8">
        <div class="card w-96 bg-base-100">
          <figure class="px-10 pt-10">
            <img
              src={review1}
              alt="Shoes"
              class="rounded-full"
            />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Name: Akbor dorsl</h2>
            <p>The best magnetic core drill machine in the market. They have the largest variety of machines to suit almost every drilling requirement for portable drill machines.</p>
            <div>
            <i class="fa-solid fa-star text-orange-300"></i>
            <i class="fa-solid fa-star text-orange-300"></i>
            <i class="fa-solid fa-star text-orange-300"></i>
            <i class="fa-solid fa-star text-orange-300"></i>
            <i class="fa-solid fa-star text-orange-300"></i>
            </div>
          </div>
          
        </div>
        <div class="card w-96 bg-base-100">
          <figure class="px-10 pt-10">
            <img
              src={review2}
              alt="Shoes"
              class="rounded-full"
            />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Name: Akbor dorsl</h2>
            <p>The best magnetic core drill machine in the market. They have the largest variety of machines to suit almost every drilling requirement for portable drill machines.</p>
            <div>
            <i class="fa-solid fa-star text-orange-300"></i>
            <i class="fa-solid fa-star text-orange-300"></i>
            <i class="fa-solid fa-star text-orange-300"></i>
            <i class="fa-solid fa-star text-orange-300"></i>
            <i class="fa-solid fa-star text-orange-300"></i>
            </div>
          </div>
          
        </div>
        <div class="card w-96 bg-base-100">
          <figure class="px-10 pt-10">
            <img
              src={review3}
              alt="Shoes"
              class="rounded-full"
            />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Name: Akbor dorsl</h2>
            <p>The best magnetic core drill machine in the market. They have the largest variety of machines to suit almost every drilling requirement for portable drill machines.</p>
            <div>
            <i class="fa-solid fa-star text-orange-300"></i>
            <i class="fa-solid fa-star text-orange-300"></i>
            <i class="fa-solid fa-star text-orange-300"></i>
            <i class="fa-solid fa-star text-orange-300"></i>
            <i class="fa-solid fa-star "></i>
            </div>
          </div>
          
        </div>
        <div class="card w-96 bg-base-100">
          <figure class="px-10 pt-10">
            <img
              src={review4}
              alt="Shoes"
              class="rounded-full"
            />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Name: Akbor dorsl</h2>
            <p>The best magnetic core drill machine in the market. They have the largest variety of machines to suit almost every drilling requirement for portable drill machines.</p>
            <div>
            <i class="fa-solid fa-star text-orange-300"></i>
            <i class="fa-solid fa-star text-orange-300"></i>
            <i class="fa-solid fa-star text-orange-300"></i>
            <i class="fa-solid fa-star text-orange-300"></i>
            <i class="fa-solid fa-star text-orange-300"></i>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Reviews;
