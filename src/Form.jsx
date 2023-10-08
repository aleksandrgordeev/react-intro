import { useEffect, useState } from "react";
import useBreedList from "./useBreedList";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

export default function Form({ setPets }) {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");

  useEffect(() => {
    requestPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();
    setPets(json.pets);
  }
  const [breeds] = useBreedList(animal);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        requestPets();
      }}
    >
      <label>
        Location
        <input
          onChange={(e) => setLocation(e.target.value)}
          id="location"
          value={location}
          placeholder="Location"
        />
      </label>
      <label>
        Animal
        <select
          id="animal"
          value={animal}
          disabled={!ANIMALS.length}
          onChange={(e) => {
            setAnimal(e.target.value);
            setBreed("");
          }}
        >
          <option />
          {ANIMALS.map((animal) => (
            <option key={animal}>{animal}</option>
          ))}
        </select>
      </label>
      <label>
        Breed
        <select
          id="breed"
          value={breed}
          disabled={!breeds.length}
          onChange={(e) => setBreed(e.target.value)}
        >
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
