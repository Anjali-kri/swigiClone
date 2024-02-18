import { useState , useContext} from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const {loggedInUser} = useContext(UserContext);

  const setOnlineStatus = useOnlineStatus();

  // selector
  const cartItems = useSelector((store) => store.cart.items);  
  console.log(cartItems);
  
    return (
      <div className="flex justify-between bg-pink-100 sm:bg-yellow-50 shadow-lg mb-2">
        <div className="logo-container">
          <img
            className="w-24"
            src={LOGO_URL}
          />
        </div>
        <div className="flex items-center  ">
          <ul className="flex p-4 m-4">
            <li className="px-4">
              Online Status: {setOnlineStatus ? "Online" : "Offline"}
            </li>
            <li className="px-4">
            <Link to="/">Home</Link>
            </li>
            <li className="px-4">
            <Link to="/about">About Us</Link></li>
            <li>
            <Link to="/contact">Contact Us</Link></li>
            <li className="px-4 font-bold text-xl">
            <Link to="/cart">
              Cart- ({cartItems.length} items)
              </Link>
              </li>
            <button className="px-4 rounded-md bg-green-100" onClick={() => {
              btnName == "Login" ? setBtnName("logout") : setBtnName("Login")}}>{btnName}</button>
            <li className="px-4 font-bold">{loggedInUser}</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;