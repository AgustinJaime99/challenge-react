import React from "react";
import useHero from "../../hooks/useHero";
import ListOfHeros from "../ListOfHeros";

function SearchResults({ params }) {
  // const { search } = params;
  const { heros } = useHero();
  console.log(heros);
  return (
    <>
      <ListOfHeros heros={heros} />
    </>
  );
}

export default SearchResults;
