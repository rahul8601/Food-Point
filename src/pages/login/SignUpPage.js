import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "./FirebaseConfig";
import { useNavigate } from "react-router-dom";

function SignUpPage({ setUserName }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errmassage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || !name) {
      setErrorMessage("Fill all fields");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(async (data) => {
        setErrorMessage("");
        if (data) {
          await updateProfile(data.user, {
            displayName: name,
          });
          setUserName(data?.user?.displayName);
          alert("Account Created successfully");
          setName("");
          setEmail("");
          setPassword("");
          navigate(`/`);
        } else {
          return null;
        }
      })
      .catch((err) => setErrorMessage(err.message));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            SignUp your account
          </h2>
        </div>
        <form
          className="mt-8 space-y-6 bg-white p-[30px] rounded-xl shadow-sm"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="mt-2.5 mb-2.5">
              <h5>Name</h5>
              <input
                id="name"
                name="name"
                type="name"
                // autoComplete="name"
                required
                value={name}
                onChange={handleNameChange}
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  rounded-md my-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
              />
            </div>
            <div className="mt-2.5 mb-2.5">
              <h5>Email address</h5>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={handleEmailChange}
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  rounded-md my-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>

            <div className="mt-2.5 mb-2.5">
              <h5>Password</h5>

              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={handlePasswordChange}
                className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 my-1 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>
          <h3 className="text-red-600">{errmassage}</h3>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700   focus:ring-indigo-500"
            >
              Signup
            </button>
          </div>
          <p>
            Already have an account?
            <span
              onClick={() => navigate(`/login`)}
              className="ml-1 text-blue-900 cursor-pointer"
            >
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;
