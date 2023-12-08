import React from "react";
import "./tooltip.css";

export default function Tooltip({tooltipText, children}) {
    return(
        <div className="tooltip">
            {children}
            {!!tooltipText && <span className="tooltip-text">{tooltipText}</span>}
        </div>
    )
}