import React from "react";
import "./RightContent.css";
import image from "../../assets/landscape.jpg";
import image1 from "../../assets/demo.jpg";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
function RightContent() {
  return (
    <div className="right-content">
      <img src={image} alt="landscape" />
      <figure>
        <img src={image1} alt="me" className="myImg" />
        <figcaption>Asutosh Acharya</figcaption>
      </figure>
      <div className="details">
        <div>
          &nbsp;&nbsp; 1269 <br />
          Products
        </div>
        <div>
          &nbsp;&nbsp;&nbsp;&nbsp;5.2k <br />
          Followers
        </div>
      </div>
      <hr />
      <div className="earnings">
        <p>Earnings</p>
        
          <ErrorOutlineIcon className="icon"/>
        
      </div>
    </div>
  );
}

export default RightContent;
