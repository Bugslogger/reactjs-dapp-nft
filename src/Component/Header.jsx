import React from "react";
import { Link } from "react-router-dom";
import "./component.css";

const Header = () => {
  return (
    <div className="container d-flex justify-content-between align-items-center p-3 fw-bold my-4 class-header">
      <div className="left-side-header">
        <ul className="nav">
          <li className="nav-item class-header-list">
            <Link className="nav-link text-dark">Home</Link>
          </li>
          <li className="class-header-list nav-item">
            <Link className="nav-link text-dark">Stake</Link>
          </li>
        </ul>
      </div>
      <div className="right-side-header">
          <div className="class-header-list2">Connect To Wallet</div>
      </div>
    </div>
  );
};

export default Header;
