import React from "react";
import "./topbar.css";
import { Chat, Notifications, Person, Search } from "@mui/icons-material";
import { Link } from "react-router-dom";
const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/">
          <span className="logo">Lamasocial</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend,post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <Link to="/">
            <span className="topbarLink">Homepage</span>
          </Link>
          <Link to="/profile">
            <span className="topbarLink">Timeline</span>
          </Link>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>

          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <Link to="/login">
          <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
        </Link>
      </div>
    </div>
  );
};

export default Topbar;
