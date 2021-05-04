import React, { useState } from "react";
import axios from "axios";
import useHero from "../../hooks/useHero";
import { API_KEY, API_URL } from "../../utils/settings";
import SearchResults from "../../components/SearchResults";
import { Link } from "wouter";

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
    <>
      <div>Search</div>
      <Link to="/"> Go home</Link>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search your hero"
          type="text"
          value={search}
          onChange={handleChange}
        />
      </form>
      <SearchResults />
    </>
  );
}
