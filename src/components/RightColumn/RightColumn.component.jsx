import React from "react";
import classes from "./RightColumn.module.css";
import Playlist from "./../PlaysListSection/Playlist.component";

function RightColumn() {
  return (
    <div className={classes.wrapper}>
      <Playlist />
    </div>
  );
}

export default RightColumn;
