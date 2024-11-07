import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState({});
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(null);
  let [photos, setPhotos] = useState([]);

  function handleResponse(response) {
    setLoading(false);
    setError(null);
    setResults(response.data[0]);
  }

  function handlePhotosResponse(response) {
    if (response.data.photos && response.data.photos.length > 0) {
      setPhotos(response.data.photos);
    } else {
      setPhotos([]);
    }
  }

  function search(event) {
    event.preventDefault();
    setLoading(true);
    setPhotos([]);

    // Dictionary API request
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse).catch(handleError);

    // Shecodes images API for images
    const photosApiKey = "7e6535efo0b6a8aba82ctdabc0ba3974";
    const photosApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${photosApiKey}`;

    axios.get(photosApiUrl).then(handlePhotosResponse).catch(handleError);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function handleError(error) {
    setLoading(false);
    setError("An error occurred. Please try again.");
    console.error(error);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          onChange={handleKeywordChange}
          placeholder="Search for a word..."
          autoFocus={true}
        />
        <button type="submit">Search</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      <Results results={results} />
      {photos && <Photos photos={photos} />} {/* Pass array of photos */}
    </div>
  );
}
