import React from "react";
import classes from "./Home.module.css";
import LeftColumn from "./../../components/LeftColumn/LeftColumn.component";
import MiddleColumn from "./../../components/MiddleColumn/MiddleColumn.component";
import RightColumn from "./../../components/RightColumn/RightColumn.component";

function Home() {
  return (
    <>
      <div className="container grid grid-cols-6">
        <div className="col-span-1">
          <LeftColumn />
        </div>
        <div className="col-span-4">
          <MiddleColumn />
        </div>
        <div className="col-span-1">
          <RightColumn />
        </div>
      </div>
    </>
  );
}

export default Home;
