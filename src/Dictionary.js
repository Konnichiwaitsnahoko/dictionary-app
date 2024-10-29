import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState({});
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(null);

  function handleResponse(response) {
    setLoading(false);
    setError(null);
    setResults(response.data[0]);
  }

  function handleError(error) {
    setLoading(false);
    setError("Word not found.");
    console.error(error);
  }

  function search(event) {
    event.preventDefault();
    setLoading(true);
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse).catch(handleError);
    setKeyword("");
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          onChange={handleKeywordChange}
          placeholder="Search for a word..."
          autoFocus={true}></input>
        <button type="submit">Search</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      <Results results={results} />
    </div>
  );
}
