import { useState } from "react";
import { LOGO_URL } from "../utils/constantData";
import { Link } from "react-router-dom";


const Head = () => {
  let [logbtn, setlogbtn] = useState("Login");
  console.log("headerrender");

  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} />
      </div>
      <div className="item">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li>Services</li>
          <li>New</li>
          <li><Link to="/about">About</Link></li>
          <li>
            <button
              onClick={() => {
                logbtn === "Login" ? setlogbtn("Logout") : setlogbtn("Login");
              }}
            >
              {logbtn}
            </button>
          </li>  
        </ul>
      </div>
    </div>
  );
};
export default Head;
