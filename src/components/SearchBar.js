import React from 'react';

function SearchBar({ keyword, keywordChange }) {
  return (
    <input
      className="search-bar"
      type="text"
      placeholder="Cari berdasarkan judul"
      value={keyword}
      onChange={(event) => keywordChange(event.target.value)}
    />
  );
}

export default SearchBar;
