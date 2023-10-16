import { useState } from "react";
import useBreedList from "./useBreedList";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

export default function Form({ setRequestParams, adoptedPet }) {
  const [animal, setAnimal] = useState("");
  const [breeds] = useBreedList(animal);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const obj = {
          animal: formData.get("animal") ?? "",
          location: formData.get("location") ?? "",
          breed: formData.get("breed") ?? "",
        };
        setRequestParams(obj);
      }}
    >
      {adoptedPet ? (
        <div className="pet image-container">
          <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
        </div>
      ) : null}
      <label>
        Location
        <input id="location" placeholder="Location" name="location" />
      </label>
      <label>
        Animal
        <select
          id="animal"
          value={animal}
          name="animal"
          onChange={(e) => setAnimal(e.target.value)}
        >
          <option />
          {ANIMALS.map((animal) => (
            <option key={animal}>{animal}</option>
          ))}
        </select>
      </label>
      <label>
        Breed
        <select id="breed" disabled={!breeds.length} name="breed">
          <option />
          {breeds.map((breed) => (
            <option key={breed}>{breed}</option>
          ))}
        </select>
      </label>
      <button>Submit</button>
    </form>
  );
}
