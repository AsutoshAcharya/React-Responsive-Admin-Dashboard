import React from "react";
import "./LeftTop.css";
import img1 from "../../../assets/Topimg1.jpg";
import img2 from "../../../assets/TopImg2.jpg";
import img3 from "../../../assets/TopImg3.jpg";
import LeftTopContent from "./LeftTopContent";

function LeftTop() {
  const data = [
    {
      head: "Revenue",
      price: "$21,456",
      profLoss: "+2.65%",
      image1: img1,
      id:1
    },
    {
      head: "Orders",
      price: "5643",
      profLoss: "-0.82%",
      image1: img2,
      id:2
    },
    {
      head: "Customers",
      price: "45,254",
      profLoss: "-1.04%",
      image1: img3,
      id:3
    },
  ];

  return (
    <div className="LeftTop">
      {data.map((item)=>{
        return (<LeftTopContent data1={item} key={item.id}/>);
      })}
    </div>
  );
}

export default LeftTop;
