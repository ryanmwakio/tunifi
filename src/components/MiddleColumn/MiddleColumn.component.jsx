import React from "react";
import classes from "./MiddleColumn.module.css";
import SearchNav from "./../SearchNav/SearchNav.component";

function MiddleColumn() {
  return (
    <div className={classes.wrapper}>
      <SearchNav />
    </div>
  );
}

export default MiddleColumn;
