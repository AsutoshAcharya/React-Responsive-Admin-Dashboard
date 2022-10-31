import React from "react";
import "./Sidebar.css";
import DehazeIcon from "@mui/icons-material/Dehaze";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarContent">
        <h3>Sidebar</h3>
        <div>
          <button className="btn">
            <DehazeIcon sx={{ color: "red" }} />
          </button>
        </div>
      </div>
      <div className="sidebarContent">
        <div>icon &nbsp;Dashboard</div>
        <div> drp icon</div>
      </div>
      <ul>
        <li>ECommerce</li>
        <li>Sass</li>
        <li>Crypto</li>
      </ul>
      <div className="sidebarContent" style={{ marginLeft: "5px" }}>
        APPLICATION
      </div>
      <div className="sidebarContent">
        <div>icon &nbsp;Calender</div>
      </div>
      <div className="sidebarContent">
        <div>icon &nbsp;Chat</div>
        <span
          style={{
            backgroundColor: "rgb(255, 156, 159)",
            color: "red",
            borderRadius: "5px",
            padding:"2px"
          }}
        >
          Hot
        </span>
      </div>
      <div className="sidebarContent">
        <div>icon &nbsp;File Manager</div>
      </div>
      <div className="sidebarContent">
        <div>icon &nbsp;ECommerce</div>
        <div> drp icon</div>
      </div>
      <div className="sidebarContent">
        <div>icon &nbsp;Email</div>
        <div> drp icon</div>
      </div>
      <div className="sidebarContent">
        <div>icon &nbsp;Invoice</div>
        <div> drp icon</div>
      </div>
      <div className="sidebarContent">
        <div>icon &nbsp;Contacts</div>
        <div> drp icon</div>
      </div>
      <div className="sidebarContent" style={{ marginLeft: "5px" }}>
        Layouts
      </div>
      <div className="sidebarContent" style={{ marginLeft: "5px" }}>
        Pages
      </div>
      <div className="sidebarContent">
        <div>icon &nbsp;Authentication</div>
        <div> drp icon</div>
      </div>
      <div className="sidebarContent">
        <div>icon &nbsp;Utility</div>
        <div> drp icon</div>
      </div>
      <div className="sidebarContent" style={{ marginLeft: "5px" }}>
        Components
      </div>
      <div className="sidebarContent">
        <div>icon &nbsp;UI Elements</div>
        <div> drp icon</div>
      </div>
      <div className="sidebarContent">
        <div>icon &nbsp;Forms</div>
        <div> drp icon</div>
      </div>
    </div>
  );
};

export default Sidebar;
