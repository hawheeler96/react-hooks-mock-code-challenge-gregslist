import React from "react";
import Search from "./Search";

function Header({handleChange, filter}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search filter={filter} handleChange={handleChange}/>
    </header>
  );
}

export default Header;
