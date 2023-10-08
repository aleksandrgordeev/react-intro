import { useState } from "react";
import Results from "./Results";
import Form from "./Form";

const SearchParams = () => {
  const [pets, setPets] = useState([]);

  return (
    <div className="search-params">
      <Form setPets={setPets} />
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
