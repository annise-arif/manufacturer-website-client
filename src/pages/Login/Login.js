import React from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../Firebase.init";
import Loading from "../Shared/Loading/Loading";
import SocialLogin from "./SocialLogin/SocialLogin";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let from = location?.state?.from?.pathname || "/";
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

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
    if (email && password) {
      signInWithEmailAndPassword(email, password);
    }
  };
  const navigateRegister = () => {
    navigate("/register");
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl text-center my-20 mx-auto">
      <h1 className="text-teal-700 font-bold">Please Login</h1>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            id=""
            placeholder="Example@gmail.com"
            className="border rounded-md p-2"
          />
          <input
            type="password"
            name="password"
            id=""
            placeholder="password"
            className="border rounded-md p-2 my-4"
          />
          <p>
            <input
              type="submit"
              value="Login"
              className="btn btn-sm bg-teal-500"
            />
          </p>
          <p className="text-red-500">{errorElement}</p>
        </form>
        <p className="mt-4">
          New to Hammer Drill M.F.C ?{" "}
          <Link
            to="/register"
            className="text-primary text-decoration-none"
            onClick={navigateRegister}
          >
            Please Register
          </Link>
        </p>
      </div>
      <div className="my-5">
        <div className="divider">OR</div>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Login;
