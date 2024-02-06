import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const setOnlineStatus = useOnlineStatus();
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>
              Online Status: {setOnlineStatus ? "Online" : "Offline"}
            </li>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/about">About Us</Link></li>
            <li>
            <Link to="/contact">Contact Us</Link></li>
            <li>Cart</li>
            <button className="login" onClick={() => {
              btnName == "Login" ? setBtnName("logout") : setBtnName("Login")}}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;