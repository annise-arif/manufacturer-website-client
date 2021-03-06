import React from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../Firebase.init";
import Loading from "../Shared/Loading/Loading";
import SocialLogin from "./SocialLogin/SocialLogin";

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let from = location?.state?.from?.pathname || "/";
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  // const [users, setUsers] = useState(user);
  // const {email} = users?.emil;
  // console.log(email)

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
    const usersInfo = { email: email };
    if (email && password) {
      createUserWithEmailAndPassword(email, password);

      fetch(`https://aqueous-fortress-84806.herokuapp.com/user/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(usersInfo),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };
  const navigateRegister = () => {
    navigate("/login");
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl text-center my-20 mx-auto">
      <h1 className="text-teal-700 font-bold">Please Register</h1>
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
              value="Register"
              className="btn btn-sm bg-teal-500"
            />
          </p>
          <p className="text-red-500">{errorElement}</p>
        </form>
        <p className="mt-4">
          Have an account Hammer Drill M.F.C ?{" "}
          <Link
            to="/login"
            className="text-primary text-decoration-none"
            onClick={navigateRegister}
          >
            Please Login
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

export default Register;
