import React from "react";
import UseFetch from "../../costomFetchHook/UseFetch";
import { useNavigate, useParams } from "react-router-dom";
import LazyImg from "../../components/LazyImg";
import MealsBanner from "./../../assets/meals-banner.avif";
import Sppiner from "../../components/Loader";
import Card from "../../components/Card";
const Meals = () => {
  const useparams = useParams();
  const navigate = useNavigate();
  const { data, loading } = UseFetch(
    `www.themealdb.com/api/json/v1/1/filter.php?c=${useparams.name}`
  );

  return (
    <div className="mt-[4rem]">
      {loading ? (
        <Sppiner />
      ) : (
        <>
          <div className="max-w-[72rem] m-auto py-2.5 px-2.5 ">
            <LazyImg src={MealsBanner} />
          </div>
          <div className=" w-full min-h-96 bg-white pb-14">
            <div className="max-w-[72rem] m-auto p-2.5 grid  place-items-center sm:grid-cols-2  md:grid-cols-3 ">
              {data?.meals?.map((res, i) => (
                <Card res={res} key={res?.idMeal} navigate={navigate} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Meals;
