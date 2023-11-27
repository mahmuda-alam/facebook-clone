import React from "react";
import LeftHeader from "./../LeftHeader";
import HeaderContent from "./../HeaderContent";
import RightHeader from "./../RightHeader";
import "./header.css";

function Header() {
    return(
        <div className="header-container">
            <LeftHeader></LeftHeader>
            <HeaderContent></HeaderContent>
            <RightHeader></RightHeader>
        </div>
    )
}

export default Header