import React, { useState } from "react";
import useHero from "../../hooks/useHero";
import ListOfHeros from "../ListOfHeros";
import Pages from "../Pagination";

function SearchResults() {
  const { heros } = useHero();

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = heros && heros.slice(indexOfFirstPost, indexOfLastPost);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(heros && heros.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      {heros === undefined && <h1>No hero was found</h1>}
      {}
      <ListOfHeros heros={currentPosts} />
      <div className="pages">
        <Pages totalPages={pageNumbers.length} paginate={paginate} />
      </div>
    </div>
  );
}

export default SearchResults;
