import React from "react";
import "./Graph.css";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { Legend } from "chart.js";
const Graph = () => {
  const data = [
    {
      name: "Feb",

      sales: 2400,
    },
    {
      name: "Mar",

      sales: 1398,
    },
    {
      name: "Apr",

      sales: 9800,
    },
    {
      name: "May",

      sales: 3908,
    },
    {
      name: "June",

      sales: 4800,
    },
    {
      name: "July",

      sales: 3800,
    },
    {
      name: "Aug",

      sales: 4300,
    },
  ];
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
      <div className="sortby">
        sort by:
        <select name="" id="opt">
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
          <option value="Yearly">Yearly</option>
        </select>
      </div>
      <div>
        <ResponsiveContainer width={600} height="100%">
          <BarChart width={730} height={250} data={data}>
            <XAxis dataKey="name" />
            <YAxis />

            <Bar dataKey="sales" fill="#8884d8" barSize={20} className="bar" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Graph;
