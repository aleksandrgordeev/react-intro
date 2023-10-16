import { useState, useContext } from "react";
import AdoptedPetContext from "./AdoptedPetContext";
import Results from "./Results";
import Form from "./Form";
import fetchSearch from "./fetchSearch";
import { useQuery } from "@tanstack/react-query";

const SearchParams = () => {
  const adoptedPet = useContext(AdoptedPetContext)[0];
  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "",
    breed: "",
  });
  const results = useQuery(["search", requestParams], fetchSearch);
  const pets = results?.data?.pets ?? [];

  return (
    <div className="search-params">
      <Form setRequestParams={setRequestParams} adoptedPet={adoptedPet} />
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
