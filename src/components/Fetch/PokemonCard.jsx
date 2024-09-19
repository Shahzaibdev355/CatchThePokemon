const PokemonCard = ({ pokemonCardData }) => {
  return (
    <>
      <div className="product-card">
        <div className="product-card__image">
          <img
            src={pokemonCardData.sprites.other.dream_world.front_default}
            alt={pokemonCardData.name}
          />
        </div>
        <div className="product-card__info">
          <h2 className="product-card__title">{pokemonCardData.name}</h2>

          <button className="product-card__btn">
            {
              // console.log(pokemonCardData.types)
              // pokemonCardData.types.map((currType)=>
              //     console.log(currType.type)

              // )

              pokemonCardData.types
                .map((currType) => currType.type.name)
                .join(", ")
            }
          </button>

          <div className="product-card__price-row">
            <span className="product-card__price">
              Height: {pokemonCardData.height}
            </span>
            <span className="product-card__price">
              Weight: {pokemonCardData.weight}kg
            </span>
            <span className="product-card__price">
              Speed: {pokemonCardData.stats[5].base_stat}
            </span>
          </div>

          <div className="product-card__price-row">
            <span className="product-card__price">
              Experience <span>{pokemonCardData.base_experience}</span>
            </span>
            <span className="product-card__price">
              Attack <span>{pokemonCardData.stats[1].base_stat}</span>
            </span>
            <span className="product-card__price">
              Abilities
              <span>
                {pokemonCardData.abilities
                  .map((currability) => currability.ability.name)
                  .slice(0, 1)
                  .join(", ")}
              </span>
            </span>
          </div>

          <div className="product-card__price-row">
            <audio controls>
              <source src={pokemonCardData.cries.latest} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>



        </div>
      </div>
    </>
  );
};

export default PokemonCard;
