import React from "react";
import LazyImg from "./LazyImg";

const Card = ({ navigate, res }) => {
  return (
    <div
      onClick={() => navigate(`/details/${res.idMeal}`)}
      className="rounded-lg z-10 bg-white w-[18rem] mb-10 cursor-pointer overflow-hidden h-[16rem] shadow-lg hover:-translate-y-1 duration-[300ms]"
    >
      <div className="w-full h-[12rem] overflow-hidden">
        <LazyImg src={res.strMealThumb} />
      </div>

      <div className="text-center p-2.5">
        <p>{res.strMeal}</p>
      </div>
    </div>
  );
};

export default Card;
