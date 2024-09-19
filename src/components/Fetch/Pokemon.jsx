import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState("");

  const API = "https://pokeapi.co/api/v2/pokemon/?limit=100";

  const fetchPokemons = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      // console.log(data);

      const detailedPokemonData = data.results.map(async (pokemonData) => {
        const res = await fetch(pokemonData.url);
        const data = await res.json();

        return data;

        // console.log(data);

        // console.log(pokemonData.url);
      });
      // console.log(detailedPokemonData);

      const detailedResponse = await Promise.all(detailedPokemonData);
      setPokemon(detailedResponse);
      setLoading(false);

      console.log(detailedResponse);
    } catch (error) {
      setLoading(false);
      setError(error);
      //   console.log(error);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);


//   const handleSearch = ()=>{
    
//   }

  const searchData = pokemon.filter((currname) =>
    currname.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>{error.message}</h1>
      </div>
    );
  }

  return (
    <>
      <div id="search-wrapper">
        <i className="search-icon fas fa-search" />
        <input
          type="text"
          id="search"
          placeholder="Catch Pokemon :)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {/* <button id="search-button">Search</button> */}
      </div>

      <div className="pokemon-row">
        {/* {pokemon.map((currpokemonData) => ( */}
        {searchData.map((currpokemonData) => (
          <>
            <PokemonCard
              key={currpokemonData.id}
              pokemonCardData={currpokemonData}
            />
          </>
        ))}
      </div>
    </>
  );
};

export default Pokemon;
