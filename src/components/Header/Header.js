import React from "react";
import classes from "./Header.module.css";
import USAImage from "../../assets/usa.jpg";
import MyImage from "../../assets/demo.jpg";
import SearchIcon from "@mui/icons-material/Search";
import WidgetsIcon from "@mui/icons-material/Widgets";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsIcon from "@mui/icons-material/Settings";
const Header = () => {
  return (
    <header className={classes.header}>
      <h3 className={classes.heading}>Dashboard</h3>
      <ul className={classes.nav}>
        <li>
          <button className={classes.search}>
            <SearchIcon />
          </button>
        </li>
        <li>
          <img
            src={USAImage}
            alt="USA"
            style={{ width: "40px", height: "23px" }}
          />
        </li>
        <li>
          <WidgetsIcon />
        </li>
        <li>
          <NotificationsNoneIcon />
        </li>
        <li>
          <SettingsIcon />
        </li>
        <li>
          <img src={MyImage} alt="demo" className={classes.myImage} />
        </li>
      </ul>
    </header>
  );
};

export default Header;
