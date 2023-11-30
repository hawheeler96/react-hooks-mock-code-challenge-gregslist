import React from "react";

function Search({handleChange, filter}) {

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={filter}
        onChange={(e) => handleChange(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
