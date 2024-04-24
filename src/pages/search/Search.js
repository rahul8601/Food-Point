import React from "react";
import UseFetch from "../../costomFetchHook/UseFetch";
import { useParams } from "react-router-dom";
import Sppiner from "../../components/Spinner";

const Search = () => {
  const useparams = useParams();
  const { loading } = UseFetch(
    `www.themealdb.com/api/json/v1/1/lookup.php?i=${useparams.id}`
  );

  return <div>{loading ? <Sppiner /> : <div>Search</div>}</div>;
};

export default Search;
