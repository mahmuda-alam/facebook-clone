import React from "react";
import Logo from "./../Logo";
import Input from "./../Input";
import "./leftHeader.css";


function LeftHeader() {
    return (
        <div className="left-header-container">
            <Logo></Logo>
            <Input></Input>
        </div>
    )
}

export default LeftHeader;