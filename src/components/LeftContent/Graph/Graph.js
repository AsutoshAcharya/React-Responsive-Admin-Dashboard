import React from "react";
import "./Graph.css";
const Graph = () => {
  return (
    <div className="graph">
      <div className="graphData">
        <b>Overview</b>
        <div style={{marginTop:"5px",padding: "5px"}}>
          This Month <br />
          <b>$24,568</b>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span
            style={{
              backgroundColor: "rgb(133, 255, 153)",
              borderRadius: "10px",
              padding: "3px",
            }}
          >
            +2.65%
          </span>
        </div>
      </div>

      {/*---------------------------------------------*/}

      <div className="displayGraph">Graph</div>
    </div>
  );
};

export default Graph;
