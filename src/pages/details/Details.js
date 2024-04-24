import React from "react";
import ReactPlayer from "react-player/youtube";

import { useParams } from "react-router-dom";
import UseFetch from "../../costomFetchHook/UseFetch";
import LazyImg from "../../components/LazyImg";
import Sppiner from "../../components/Loader";

const Details = () => {
  const useparams = useParams();

  const { data, loading } = UseFetch(
    `www.themealdb.com/api/json/v1/1/lookup.php?i=${useparams.id}`
  );

  return (
    <div className="mt-[4rem]">
      {loading ? (
        <Sppiner />
      ) : (
        <div className="max-w-[72rem]  m-auto flex justify-center items-center bg-[bisque]  ">
          <div className="    p-2.5 flex text-center flex-col">
            {data?.meals.map((res, i) => (
              <div key={res.idMeal}>
                <div>
                  <div className="w-full m-[24px]">
                    <h6 className="font-medium text-lg m-auto border-b-[1px] border-black w-[12rem]">
                      {res.strMeal}
                    </h6>
                  </div>
                  <div className="flex justify-around items-center my-5 flex-col md:flex-row  md:w-[48rem] md:m-auto lg:w-[52rem]">
                    <div className="w-[28rem] md:w-[24rem] mt-[16px]">
                      <LazyImg src={res.strMealThumb} />
                    </div>
                    <div className="min-w-[28rem] md:w-[20rem]  ">
                      <div className="flex text-left gap2.5 justify-evenly">
                        <div>
                          <h6 className="font-medium text-lg mb-2.5 ">
                            Ingredients
                          </h6>
                          <div>
                            <p>{res.strIngredient1}</p>
                            <p>{res.strIngredient2}</p>
                            <p>{res.strIngredient3}</p>
                            <p>{res.strIngredient4}</p>
                            <p>{res.strIngredient5}</p>
                            <p>{res.strIngredient6}</p>
                            <p>{res.strIngredient7}</p>
                            <p>{res.strIngredient8}</p>
                            <p>{res.strIngredient9}</p>
                            <p>{res.strIngredient10}</p>
                            <p>{res.strIngredient11}</p>
                            <p>{res.strIngredient12}</p>
                            <p>{res.strIngredient13}</p>
                            <p>{res.strIngredient14}</p>
                            <p>{res.strIngredient15}</p>
                            <p>{res.strIngredient16}</p>
                            <p>{res.strIngredient17}</p>
                            <p>{res.strIngredient18}</p>
                            <p>{res.strIngredient19}</p>
                            <p>{res.strIngredient20}</p>
                          </div>
                        </div>
                        <div>
                          <h6 className="font-medium text-lg mb-2.5">
                            Measure
                          </h6>
                          <div className="">
                            <p>{res.strMeasure1}</p>
                            <p>{res.strMeasure2}</p>
                            <p>{res.strMeasure3}</p>
                            <p>{res.strMeasure4}</p>
                            <p>{res.strMeasure5}</p>
                            <p>{res.strMeasure6}</p>
                            <p>{res.strMeasure7}</p>
                            <p>{res.strMeasure8}</p>
                            <p>{res.strMeasure9}</p>
                            <p>{res.strMeasure10}</p>
                            <p>{res.strMeasure11}</p>
                            <p>{res.strMeasure12}</p>
                            <p>{res.strMeasure13}</p>
                            <p>{res.strMeasure14}</p>
                            <p>{res.strMeasure15}</p>
                            <p>{res.strMeasure16}</p>
                            <p>{res.strMeasure17}</p>
                            <p>{res.strMeasure18}</p>
                            <p>{res.strMeasure19}</p>
                            <p>{res.strMeasure20}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-[40px] w-full">
                    <h6 className="font-medium text-lg m-auto border-b-[1px] border-black w-[8rem] mb-2">
                      Instructions
                    </h6>
                  </div>
                  <p>{res.strInstructions}</p>
                </div>
                <div className="w-[32rem] mx-auto my-6 h-[16rem]">
                  {res?.strYoutube === "" ? (
                    "Video Not Available"
                  ) : (
                    <ReactPlayer
                      url={res.strYoutube}
                      controls
                      width="100%"
                      height="100%"
                      playing={false}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
