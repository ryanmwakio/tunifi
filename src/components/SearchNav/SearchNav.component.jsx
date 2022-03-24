import React from "react";
import classes from "./SearchNav.module.css";
import SearchInput from "./SearchInput.component";
import Filter from "./Filter.component";

function SearchNav() {
  return (
    <>
      <div className={classes.wrapper}>
        <div>
          <SearchInput />
        </div>
        <div>
          <Filter />
        </div>
      </div>
    </>
  );
}

export default SearchNav;
