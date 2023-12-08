import React from "react";
import Tooltip from "../Tooltip";
import './icon.css';

export default function Icon({ src, classes, iconName }) {
    return (
        <Tooltip tooltipText={iconName}>
            <img src={src} alt="icon" className={`icon ${classes}`}  />
        </Tooltip>
    )
}