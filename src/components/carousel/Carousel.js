import React, { useRef } from "react";
import UseFetch from "../../costomFetchHook/UseFetch";
import Img from "./Img";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Carousel = () => {
  const navigate = useNavigate();

  const { data, loading, error } = UseFetch(`/categories.php`);
  // console.log(data);

  const carouselContainer = useRef();
  const navigation = (dir) => {
    const container = carouselContainer.current;

    const scrollAmount =
      dir === "left"
        ? container.scrollLeft - container.offsetWidth
        : container.scrollLeft + container.offsetWidth;

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="w-full bg-[#F8F8F8] h-78">
        <div className="mx-2.5">
          <div className="max-w-6xl mx-auto h-full py-8 relative ">
            <h1 className="text-3xl mb-5">Inspiration for your first order</h1>
            <div
              ref={carouselContainer}
              className="overflow-hidden m-auto w-[96%]"
            >
              <div className=" inline-flex ">
                {data?.categories.map((res, i) => (
                  <div
                    onClick={() => navigate(`/meals/${res.strCategory}`)}
                    className="w-[11.4rem] flex flex-col items-center cursor-pointer "
                    key={i}
                  >
                    <div>
                      <Img src={res.strCategoryThumb} />
                    </div>
                    <h1 className="font-semibold text-xl ">
                      {res.strCategory}
                    </h1>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={() => navigation("left")}
              className="absolute left-0 top-[50%] rounded-full w-8 h-8 bg-[#F8F8F8] flex justify-center items-center shadow-lg"
            >
              <FaAngleLeft />
            </button>
            <button
              onClick={() => navigation("right")}
              className="absolute right-0 top-[50%] rounded-full w-8 h-8 bg-[#F8F8F8] flex justify-center items-center shadow-lg"
            >
              <FaAngleRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
