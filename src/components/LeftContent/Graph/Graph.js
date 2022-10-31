import React from "react";
import "./Graph.css";
import { ResponsiveContainer, BarChart, Bar } from "recharts";
const Graph = () => {
  return (
    <div className="graph">
      <div className="graphData">
        <b>Overview</b>
        <div style={{ marginTop: "5px", padding: "5px" }}>
          <span> This Month</span> <br />
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
        {/*<span className="verticalLine"></span>*/}
        <div
          className="orders"
          style={{ padding: "10px", justifyContent: "space-around" }}
        >
          <div className="orderDetails">
            Orders <br />
            <b>5,643</b>
          </div>
          <span className="verticalLine"></span>
          <div className="orderDetails">
            Sales <br />
            <b>16,273</b>
          </div>
        </div>
        <hr />
        <div
          className="orders"
          style={{ padding: "10px", justifyContent: "space-around" }}
        >
          <div className="orderDetails">
            Order Value <br />
            <b>12.03%</b>
          </div>
          <span className="verticalLine"></span>
          <div className="orderDetails">
            Customers <br />
            <b>21,456</b>
          </div>
        </div>
        <hr />
        <div
          className="orders"
          style={{ padding: "10px", justifyContent: "space-around" }}
        >
          <div className="orderDetails">
            Income <br />
            <b>$35,643</b>
          </div>
          <span className="verticalLine"></span>
          <div className="orderDetails">
            Expenses <br />
            <b>$12,248</b>
          </div>
        </div>
      </div>

      {/*---------------------------------------------*/}

      <div className="displayGraph">
        
      </div>
    </div>
  );
};

export default Graph;
