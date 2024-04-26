import React, { useState } from "react";
import { useEffect } from "react";

const baseUrl = "https://www.themealdb.com/api/json/v1/1";
const UseFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  //   console.log(data?.meals.map((res) => res));

  useEffect(() => {
    const FetchApiData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${baseUrl}${url}`);
        const data = await response.json();
        setLoading(false);
        setData(data);
      } catch (error) {
        setError(error.message);
        // console.log("error =>", error.message);
      }
    };

    FetchApiData();
  }, [url]);

  return { data, loading, error };
};

export default UseFetch;
