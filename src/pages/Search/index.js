import React, { useState } from "react";
import Fade from "react-reveal/Fade";

import { Link } from "wouter";
import axios from "axios";

import useHero from "../../hooks/useHero";
import { API_KEY, API_URL } from "../../utils/settings";

import SearchResults from "../../components/SearchResults";

export default function SearchPage() {
  const [search, setSearch] = useState("");
  const { setHeros } = useHero();

  const getHeros = async (search) => {
    const res = await axios.get(`${API_URL}/${API_KEY}/search/${search}`);
    console.log(res);
    setHeros(res.data.results);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getHeros(search);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div id="main_search_result">
      <Fade>
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
          <SearchResults />
        </Fade>
      </Fade>
    </div>
  );
}
