import React from "react";
import Icon from "./../Icon";
import "./headerContent.css"
import HomeIcon from "./../../assets/home-icon.png"
import MarketplaceIcon from "./../../assets/marketplace-icon.png"
import GroupIcon from "./../../assets/group-icon.png"
import GamingIcon from "./../../assets/gaming-icon.png"

function HeaderContent() {
    return (
        <div className="icon-container">
            <Icon src={HomeIcon}></Icon>
            <Icon src={MarketplaceIcon}></Icon>
            <Icon src={GroupIcon}></Icon>
            <Icon src={GamingIcon}></Icon>
        </div>
    )
}

export default HeaderContent;