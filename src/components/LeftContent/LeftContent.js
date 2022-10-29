import React from "react";
import "./Left-Content.css";
import LeftTop from "./LeftTop/LeftTop";
import Graph from "./Graph/Graph";
import LeftBottom from "./LeftBottom/LeftBottom";
function LeftContent(props) {
  return (
    <div className="left-content">
      <LeftTop />
      <Graph />
      <LeftBottom />
    </div>
  );
}

export default LeftContent;
