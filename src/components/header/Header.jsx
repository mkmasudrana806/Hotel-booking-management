import React from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="headerList">
          <div className="headerListItem">
          <FontAwesomeIcon icon={faBed} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
