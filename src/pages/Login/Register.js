import React, { useRef } from "react";
import auth from "../../Firebase.init";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import SocialLogin from "./SocialLogin/SocialLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loading from "../Shared/Loading/Loading";
import { Button, Form } from "react-bootstrap";

const Register = () => {
  
  const navigate = useNavigate();
  const location = useLocation();
  let from = location?.state?.from?.pathname || "/";
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  let errorElement;

  if (loading) {
    return <Loading></Loading>;
  }

  if (error) {
    errorElement = <p className="text-danger"> Error: {error?.message}</p>;
  }

  if (user) {
    navigate(from, { replace: true });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
    if (email && password) {
      createUserWithEmailAndPassword(email, password);
    }
  };
  return (
    <div class="card w-96 bg-base-100 shadow-xl text-center my-20 mx-auto">
    <h1 className="text-teal-700 font-bold">Please Register</h1>
      <div class="card-body">
          <form onSubmit={handleSubmit}>
              <input type="email" name="email" id="" placeholder="Example@gmail.com" className="border rounded-md p-2"/>
              <input type="password" name="password" id="" placeholder="password" className="border rounded-md p-2 my-4"/>
              <p><input type="submit" value="Register" className="btn btn-sm"/></p>
              
          </form>
      </div>
      <div className="my-5">
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Register;
