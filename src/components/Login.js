import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData }from "../utils/validate"
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../utils/firebase"


const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null)
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {

     const message = checkValidData(email.current.value,password.current.value)
     setErrorMessage(message);

     if(message) return;

     // Sign / Sign up
    if(!isSignInForm){
      // Sign up logic
      createUserWithEmailAndPassword(auth,
        email.current.value,
        password.current.value
        )
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" + errorMessage);
        // ..
      });

    }
    else{
      // Sign in logic

    }

  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <form onSubmit = {(e) => e.preventDefault()}
      className="w-3/12 p-12 my-36 absolute mx-auto right-0 left-0 bg-black rounded bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref= {name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-grey-700"
          />
        )}
        <input
          ref = {email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-grey-700"
        />

        <input
          ref = {password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-grey-700"
        />
        <p className="text-red-500 py-2 text-lg font-bold">{ errorMessage }</p>

        <button className="p-4 my-6 bg-red-700 w-full rounded-lg" 
        onClick={handleButtonClick} >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-6 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
