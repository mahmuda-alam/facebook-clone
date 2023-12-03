import React from "react";
import "./input.css";

export default function Input() {
    return(
        <div>
            {/* <img src={SearchIcon}  alt="search-icon"className="search-icon"/> */}
    
            <input type='text' placeholder='Search Facebook' className="input" />
        </div>
    )
}