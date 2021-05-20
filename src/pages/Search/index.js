import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import { Link } from "wouter";
import useHero from "../../hooks/useHero";
import SearchResults from "../../components/SearchResults";
import useUser from "../../hooks/useUser";

import { RotateLoader } from "react-spinners";

export default function SearchPage() {
  const { isLogged } = useUser();
  const [search, setSearch] = useState("");
  const { setHeros, getHeros, loading } = useHero();

  const handleSubmit = (e) => {
    e.preventDefault();
    getHeros(search).then((res) => setHeros(res.data.results));
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div id="main_search_result">
      <Fade>
        {isLogged ? (
          <>
            <h1 className="tittle">Search your hero</h1>
            <Link to="/" className="Link">
              Go home
            </Link>
            <form onSubmit={handleSubmit}>
              <input
                className="label_search"
                placeholder="Search your hero"
                type="text"
                value={search}
                onChange={handleChange}
              />
            </form>
            <Fade>
              {loading ? (
                <>
                  <div className="spinner">
                    <RotateLoader color="maroon" size={72} margin={100} />
                  </div>
                </>
              ) : (
                <SearchResults />
              )}
            </Fade>
          </>
        ) : (
          <h1>You need login to search your heros</h1>
        )}
      </Fade>
    </div>
  );
}
