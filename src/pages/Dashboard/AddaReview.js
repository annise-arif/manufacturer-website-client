import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../Firebase.init";
import Loading from "../Shared/Loading/Loading";

const AddaReview = () => {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <Loading></Loading>;
  }
  const handlereview = (event) => {
    event.preventDefault();

    const img = event.target.img.value;
    const Name = event.target.name.value;
    const email = event.target.email.value;
    const feedback = event.target.feedback.value;
    const ratings = event.target.ratings.value;
    const orderSumary = {
      img: img,
      name: Name,
      email: email,
      ratings: ratings,
      feedback: feedback,
    };
    console.log(orderSumary);

    fetch("https://aqueous-fortress-84806.herokuapp.com/reviews", {
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
          toast.success(`added success your review`);
          event.target.reset();
        } else {
          toast.error("Failed Your review");
          event.target.reset();
        }
      });
  };
  return (
    <div className="card w-1/4 mb-16 bg-base-100 shadow-xl p-6 pt-8 text-center align-center mt-12 mx-auto">
      <h1 className="font-bold text-teal-600 text-xl">Add A Review</h1>

      <form onSubmit={handlereview}>
        <br />
        <input
          type="text"
          name="img"
          placeholder="Your image link"
          id=""
          className="border-4 p-2 rounded-lg mb-4 w-full"
        />
        <br />
        <input
          type="name"
          name="name"
          placeholder="Your Name"
          id=""
          className="border-4 p-2 rounded-lg w-full"
        />
        <br />
        <input
          type="email"
          name="email"
          value={user.email}
          readOnly
          disabled
          id=""
          className="border-4 p-2 my-4 rounded-lg w-full"
        />
        <br />
        <textarea
          name="feedback"
          id=""
          cols="24"
          rows="3"
          className="border-4 rounded-lg w-full"
          placeholder="write here Your Review..."
        ></textarea>

        <br />

        <input
          type="number"
          name="ratings"
          placeholder="Ratings 1 to 5 any press"
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

export default AddaReview;
