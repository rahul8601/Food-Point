import React, { useState } from "react";
import { useEffect } from "react";

const UseFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  //   console.log(data?.meals.map((res) => res));

  useEffect(() => {
    const FetchApiData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https:/${url}`);
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
