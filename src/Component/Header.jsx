import React from "react";
import { Link } from "react-router-dom";
import "./component.css";
import { MdOutlineContentCopy } from "react-icons/md";

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
        {/* <div className="class-header-list2">Connect To Wallet</div> */}
        <div className="class-header-list3">
          <span>
            {"0xc604bc2bF73691253172550C7568Ec5ed1F037E7".slice(0, 7) +
              "...." +
              "0xc604bc2bF73691253172550C7568Ec5ed1F037E7".slice(35)}
          </span>{" "}
          <MdOutlineContentCopy fontSize={"20px"} />
        </div>
      </div>
    </div>
  );
};

export default Header;
