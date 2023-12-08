import React from "react";
import Icon from "./../Icon";
import MenuBarIcon from "./../../assets/menu-bar-icon.png";
import MessengerIcon from "./../../assets/messenger-icon.png";
import NotificationBellIcon from "./../../assets/notification-bell-icon.png";
import ImageIcon from "./../../assets/Pic.jpg"

function RightHeader() {
    return(
        <div className="icon-container">
            <Icon src={MenuBarIcon} iconName="Menu" classes="right-icon"></Icon>
            <Icon src={MessengerIcon} iconName="Messenger" classes="right-icon"></Icon>
            <Icon src={NotificationBellIcon} iconName="Notifications" classes="right-icon"></Icon>
            <Icon src={ImageIcon} iconName="Account" classes="img-round right-icon"></Icon> 
        </div>
    )
}

export default RightHeader;