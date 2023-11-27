import React from "react";
import FbLogo from "./../../assets/facebook.png";
import "./logo.css";
export default function Logo() {
    return(
        <div>
            <img src={FbLogo} alt="Facebook logo" className="logo"/>
        </div>
    )
}