import React from "react";
import classes from "./MiddleColumn.module.css";
import SearchNav from "./../SearchNav/SearchNav.component";
import AdSection from "./../AdSection/AdSection.component";
import ArtistsSection from "./../ArtistsSection/ArtistsSection.component";
import RecentSection from "./../RecentSection/RecentSection";
import Player from "./../Player/Player";
import CategoriesSection from "./../Categories/CategoriesSection";
import Markets from "./../Markets/Markets";

function MiddleColumn() {
  return (
    <div className={classes.wrapper}>
      <SearchNav />
      <AdSection />
      <ArtistsSection />

      <RecentSection />
      <CategoriesSection />
      <Markets />
      <Player />
      <div className=" h-5 p-5 bg-transparent"></div>
    </div>
  );
}

export default MiddleColumn;
