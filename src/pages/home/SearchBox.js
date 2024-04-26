import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import LazyImg from "../../components/LazyImg";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState(null);

  const navigate = useNavigate();
  const baseUrl = "https://www.themealdb.com/api/json/v1/1";

  useEffect(() => {
    const controller = new AbortController();
    if (query) {
      const searchData = async () => {
        try {
          const res = await fetch(`${baseUrl}/filter.php?i=${query}`, {
            signal: controller.signal,
          });

          const data = await res.json();
          setData(data);
        } catch (error) {
          // console.log(error.message);
        }
      };
      searchData();
    }

    return function () {
      controller.abort();
    };
  }, [query]);

  function handleQuery(e) {
    if (e.target.value.trim()) {
      setQuery(e.target.value);
    } else {
      setQuery("");
    }
  }

  return (
    <div>
      <label className="relative block">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2 ">
          <CiSearch
            size={20}
            style={{ color: "black", position: "absolute" }}
          />
        </span>
        <input
          className=" block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-[#F4931F] focus:ring-[ #F4931F] focus:ring-1 "
          placeholder="Search for restaurant, cuisine or a dish"
          type="text"
          onChange={handleQuery}
          value={query}
          // name="search"
        />

        {data?.meals && query.length > 0 ? (
          <div className="absolute w-[50%]  bg-white top-[48px] rounded-lg z-10 p-2.5 h-[23rem] overflow-y-scroll">
            {data?.meals?.map((res) => (
              <div
                onClick={() => navigate(`/details/${res.idMeal}`)}
                key={res.idMeal}
                className="flex items-center  gap-2.5 rounded-md pt-[7px] hover:bg-gray-100"
              >
                <div className=" w-[4rem] overflow-hidden ">
                  <LazyImg src={res.strMealThumb} />
                </div>
                <p>{res.strMeal}</p>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
      </label>
    </div>
  );
};

export default SearchBox;
