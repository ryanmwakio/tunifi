import React from "react";
import "./Home.css";
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
        <div className="col-span-5 lg:col-span-4 ">
          <MiddleColumn />
        </div>
        <div className=" lg:col-span-1 right-div">
          <RightColumn />
        </div>
      </div>
    </>
  );
}

export default Home;
