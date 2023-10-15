import { useState } from "react";
import Results from "./Results";
import Form from "./Form";
import fetchSearch from "./fetchSearch";
import { useQuery } from "@tanstack/react-query";

const SearchParams = () => {
  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "",
    breed: "",
  });
  const results = useQuery(["search", requestParams], fetchSearch);
  const pets = results?.data?.pets ?? [];

  return (
    <div className="search-params">
      <Form setRequestParams={setRequestParams} />
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
