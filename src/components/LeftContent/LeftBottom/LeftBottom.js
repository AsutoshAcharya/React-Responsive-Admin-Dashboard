import React from "react";
import "./LeftBottom.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import TopProducts from "./TopProducts";
import img1 from "../../../assets/#1.jpg";
import img2 from "../../../assets/#2.jpg";
import img3 from "../../../assets/#3.jpg";
function LeftBottom() {
  const data = [
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
      <div className="childs">a</div>

      {/*-----------------------------------------------------------*/}
      <div className="childs stats">
        <div className="orders">
          <p>Order Stats</p>
          <div>
            <MoreHorizIcon className="moreHorizIcon" />
          </div>
        </div>
        <div>stats cirlce image or component</div>
        <div className="completed">
          <div>Completed</div>
          <div>Pending</div>
          <div>Cancel</div>
        </div>
      </div>
      {/*-----------------------------------------------------------*/}
      <div className="childs topProducts">
        <div className="top">
          <div>Top Products</div>
          <div>
            <select name="opt" id="opt">
              <option value="">Monthly</option>
              <option value="">Yearly</option>
              <option value="">Weekly</option>
            </select>
          </div>
        </div>

        {data.map((item) => {
          return <TopProducts products={item} key={item.id} />;
        })}
      </div>
    </div>
  );
}

export default LeftBottom;
