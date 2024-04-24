import React, { useEffect } from "react";
import foodpointlogo from "../assets/Foodpoint-logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../pages/login/FirebaseConfig";

function NavBar({ userName }) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  function logoutHandle() {
    signOut(auth);
    navigate(`/login`);
  }

  function loginHandle() {
    navigate(`/login`);
  }

  return (
    <div className=" m-auto h-16 flex justify-between max-w-6xl items-center  top-0 left-0 right-0  shadow-lg absolute z-10">
      <img
        src={foodpointlogo}
        alt="logo"
        className="w-16 ml-2.5 cursor-pointer"
        onClick={() => navigate(`/`)}
      />
      <div className="pr-2.5 flex">
        <>
          {userName ? (
            <div className="flex items-center px-2.5">
              <h1 className="">{userName}</h1>
            </div>
          ) : null}

          {userName ? (
            <button
              className="h-9 w-20 border-2 border-[#F4931F] rounded  text-[#F4931F]"
              onClick={() => logoutHandle()}
            >
              Logout
            </button>
          ) : (
            <button
              className="h-9 w-20 border-2 border-[#F4931F] rounded  text-[#F4931F]"
              onClick={() => loginHandle()}
            >
              Login
            </button>
          )}
        </>
      </div>
    </div>
  );
}

export default NavBar;
