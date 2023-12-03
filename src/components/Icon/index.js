import React from "react";
import './icon.css';

export default function Icon({ src, classes }) {
    return (
        <div>
            <img src={src} alt="icon" className={`icon ${classes}`}  />
        </div>
    )
}