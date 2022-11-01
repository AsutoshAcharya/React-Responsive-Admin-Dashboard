import React from "react";
import "./Sidebar.css";
import ChatIcon from "@mui/icons-material/Chat";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import WidgetsIcon from "@mui/icons-material/Widgets";
import MailIcon from "@mui/icons-material/Mail";
import DescriptionIcon from "@mui/icons-material/Description";
import WifiIcon from "@mui/icons-material/Wifi";
import PersonIcon from "@mui/icons-material/Person";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import LayersIcon from "@mui/icons-material/Layers";
import FeedIcon from "@mui/icons-material/Feed";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DehazeIcon from "@mui/icons-material/Dehaze";
import { useState } from "react";
const Sidebar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="sidebar">
      <div className="sidebarContent">
        <h3>Sidebar</h3>
        <div>
          <button className="btn">
            <DehazeIcon sx={{ color: "rgb(245, 88, 122)" }} />
          </button>
        </div>
      </div>
      <div
        className="sidebarContent"
        onClick={() => {
          setVisible(!visible);
        }}
      >
        <div>
          <WidgetsIcon sx={{ width: "14px" }} className="sidebarIcon" /> &nbsp;
          <span className="sidebarInfo">Dashboard</span>
        </div>
        <div>
          <KeyboardArrowDownIcon sx={{ width: "17px" }} />
        </div>
      </div>
      {visible && (
        <ul>
          <li>ECommerce</li>
          <li>Sass</li>
          <li>Crypto</li>
        </ul>
      )}
      <div className="sidebarContent" style={{ marginLeft: "5px" }}>
        APPLICATION
      </div>
      <div className="sidebarContent">
        <div>
          <CalendarMonthIcon sx={{ width: "14px" }} className="sidebarIcon" />{" "}
          &nbsp;Calender
        </div>
      </div>
      <div className="sidebarContent">
        <div>
          <ChatIcon sx={{ width: "14px" }} className="sidebarIcon" /> &nbsp;Chat
        </div>
        <span
          style={{
            backgroundColor: "rgb(255, 156, 159)",
            color: "red",
            borderRadius: "5px",
            padding: "2px",
          }}
        >
          Hot
        </span>
      </div>
      <div className="sidebarContent">
        <div>
          <Inventory2Icon sx={{ width: "14px" }} className="sidebarIcon" />
          &nbsp;File Manager
        </div>
      </div>
      <div className="sidebarContent">
        <div>
          <LocalMallIcon sx={{ width: "14px" }} className="sidebarIcon" />{" "}
          &nbsp;ECommerce
        </div>
        <div>
          <KeyboardArrowDownIcon sx={{ width: "17px" }} />
        </div>
      </div>
      <div className="sidebarContent">
        <div>
          <MailIcon sx={{ width: "14px" }} className="sidebarIcon" />
          &nbsp;Email
        </div>
        <div>
          <KeyboardArrowDownIcon sx={{ width: "17px" }} />
        </div>
      </div>
      <div className="sidebarContent">
        <div>
          <DescriptionIcon sx={{ width: "14px" }} className="sidebarIcon" />
          &nbsp;Invoice
        </div>
        <div>
          <KeyboardArrowDownIcon sx={{ width: "17px" }} />
        </div>
      </div>
      <div className="sidebarContent">
        <div>
          <WifiIcon sx={{ width: "14px" }} className="sidebarIcon" />{" "}
          &nbsp;Contacts
        </div>
        <div>
          <KeyboardArrowDownIcon sx={{ width: "17px" }} />
        </div>
      </div>
      <div className="sidebarContent" style={{ marginLeft: "5px" }}>
        Layouts
      </div>
      <div className="sidebarContent" style={{ marginLeft: "5px" }}>
        Pages
      </div>
      <div className="sidebarContent">
        <div>
          <PersonIcon sx={{ width: "14px" }} className="sidebarIcon" />
          &nbsp;Authentication
        </div>
        <div>
          <KeyboardArrowDownIcon sx={{ width: "17px" }} />
        </div>
      </div>
      <div className="sidebarContent">
        <div>
          <ViewInArIcon sx={{ width: "14px" }} className="sidebarIcon" />{" "}
          &nbsp;Utility
        </div>
        <div>
          <KeyboardArrowDownIcon sx={{ width: "17px" }} />
        </div>
      </div>
      <div className="sidebarContent" style={{ marginLeft: "5px" }}>
        Components
      </div>
      <div className="sidebarContent">
        <div>
          <LayersIcon sx={{ width: "14px" }} className="sidebarIcon" /> &nbsp;UI
          Elements
        </div>
        <div>
          <KeyboardArrowDownIcon sx={{ width: "17px" }} />
        </div>
      </div>
      <div className="sidebarContent">
        <div>
          <FeedIcon sx={{ width: "14px" }} className="sidebarIcon" />{" "}
          &nbsp;Forms
        </div>
        <div>
          <KeyboardArrowDownIcon sx={{ width: "17px" }} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
