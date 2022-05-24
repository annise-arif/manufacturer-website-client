import React from 'react';
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../Firebase.init';
import google from '../../../images/social/google.png';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading ] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
  
    if(loading){
        <Loading></Loading>
    }
    if (user) {
      navigate(from, { replace: true});
    }
      return (
          <div>
              <button
          onClick={() => signInWithGoogle()}
          className="btn btn-info w-50 d-block mx-auto mt-5"
        >
          <img src={google} alt="" />
          <span className="ms-2">Google Sign In</span>
        </button>
          </div>
      );
};

export default SocialLogin;