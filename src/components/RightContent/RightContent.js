import React from "react";
import "./RightContent.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import image from "../../assets/landscape.jpg";
import image1 from "../../assets/demo.jpg";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
function RightContent() {
  const percentage = 66;
  return (
    <div className="right-content">
      <img src={image} alt="landscape" />
      <figure>
        <img src={image1} alt="me" className="myImg" />
        <figcaption>
          Asutosh Acharya
          <br />
          <article>Product Designer</article>
        </figcaption>
      </figure>
      <div className="details">
        <div>
          &nbsp;&nbsp; 1269 <br />
          <p>Products</p>
        </div>
        <div>
          &nbsp;&nbsp;&nbsp;&nbsp;5.2k <br />
          <p>Followers</p>
        </div>
      </div>
      <hr />
      <div className="earnings">
        <p>Earnings</p>

        <ErrorOutlineIcon className="icon" />
      </div>
      <div className="circle">
        <CircularProgressbar
          value={percentage}
          circleRatio={0.5}
          strokeWidth={8}
          className="circleProgress"
        />
      </div>
      <div className="totalEarnings">
        <div>76%</div>
        <div>$26,256</div>
        <div style={{ color: "grey", fontWeight: "400" }}>
          Earnings this month
        </div>
      </div>
      <br />
      <hr />
      <p style={{ marginRight: "9rem", marginTop: "0", fontWeight: 600 }}>
        Recent Activity
      </p>
      <div className="activity">
        <div className="date">
          12 <br />
          Sep
        </div>
        <div className="info">Respond to need "Volunteer Activities"</div>
      </div>
      <div className="activity">
        <div className="date">
          11 <br />
          Sep
        </div>
        <div className="info">Everyone realizes would be desirable...</div>
      </div>
      <div className="activity">
        <div className="date">
          12 <br />
          Sep
        </div>
        <div className="info">Joined the group "Boardsmanship"</div>
      </div>
    </div>
  );
}

export default RightContent;
