import React from "react";
import "./LeftBottom.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Doughnut } from "react-chartjs-2";

// import {Chart} from 'react-chartjs-2';
import CircleIcon from "@mui/icons-material/Circle";
import TopProducts from "./TopProducts";
import img1 from "../../../assets/#1.jpg";
import img2 from "../../../assets/#2.jpg";
import img3 from "../../../assets/#3.jpg";
// import areachart1 from "../../../assets/areaChart2.jpg";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import BottomGraph from "./BottomGraph";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  datasets: [
    {
      label: "# of Votes",
      data: [20, 50, 30],
      backgroundColor: [
        "rgb(196, 39, 65)",
        "rgba(39, 60, 196)",
        "rgba(209, 186, 54)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

function LeftBottom() {
  const data1 = [
    {
      image: img1,
      head: "Polo blue T-shirt",
      price: "$25.4",
      sale: "3.84k",
      id: 1,
    },
    {
      image: img2,
      head: "Hoodies for men",
      price: "$24.5",
      sale: "3.14k",
      id: 2,
    },
    {
      image: img3,
      head: "Red color Cap",
      price: "$22.5",
      sale: "2.84k",
      id: 3,
    },
  ];
  return (
    <div className="leftBottom">
      <div className="childs">
        <div className="top">
          <div style={{ marginLeft: "10px" }}>User Activity</div>
          <div>
            <select name="opt" id="opt">
              <option value="Monthly">Monthly</option>
              <option value="Yearly">Yearly</option>
              <option value="Weekly">Weekly</option>
            </select>
          </div>
        </div>
        <div className="months">
          <div style={{ fontSize: "small" }}>
            This Month <br />
            <b>16,543</b>
          </div>
          <div style={{ marginTop: "20px", fontSize: "small" }}>
            <CircleIcon sx={{ width: "15px", color: "blue" }} />{" "}
            <sup>Current</sup>
            <CircleIcon sx={{ width: "15px", color: "green" }} />{" "}
            <sup>Previous</sup>
          </div>
        </div>
        <>
          <BottomGraph className="bottomGraph"/>
          </>
      </div>

      {/*-----------------------------------------------------------*/}
      <div className="childs stats">
        <div className="orders">
          <p>Order Stats</p>
          <div>
            <MoreHorizIcon className="moreHorizIcon" />
          </div>
        </div>
        <div style={{ width: "150px", height: "150px", marginLeft: "53px" }}>
          <Doughnut data={data} className="donut" options={{}} />
        </div>
        <div className="completed">
          <div style={{ color: "blue" }}>Completed</div>
          <div style={{ color: "rgb(128, 83, 25)" }}>Pending</div>
          <div style={{ color: "red" }}>Cancel</div>
        </div>
      </div>
      {/*-----------------------------------------------------------*/}
      <div className="childs topProducts">
        <div className="top">
          <div style={{ marginLeft: "10px" }}>Top Products</div>
          <div>
            <select name="opt" id="opt">
              <option value="Monthly">Monthly</option>
              <option value="Yearly">Yearly</option>
              <option value="Weekly">Weekly</option>
            </select>
          </div>
        </div>

        {data1.map((item) => {
          return <TopProducts products={item} key={item.id} />;
        })}
      </div>
    </div>
  );
}

export default LeftBottom;
