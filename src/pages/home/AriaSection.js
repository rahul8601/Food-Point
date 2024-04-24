import React from "react";
import UseFetch from "../../costomFetchHook/UseFetch";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card";
import Sppiner from "../../components/Loader";

const AriaSection = () => {
  const navigate = useNavigate();

  const { data, loading } = UseFetch(
    `www.themealdb.com/api/json/v1/1/filter.php?a=Canadian`
  );

  return (
    <div>
      <div className="w-full py-3">
        {loading ? (
          <Sppiner />
        ) : (
          <div className="max-w-[72rem] m-auto">
            <h1 className="font-semibold text-xl py-5">Location: Canadian</h1>
            <div className="flex flex-wrap justify-evenly gap-2.5">
              {data?.meals.map((res) => (
                <Card navigate={navigate} res={res} key={res?.idMeal} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AriaSection;
