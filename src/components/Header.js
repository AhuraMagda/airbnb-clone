import React from "react";
import logo from "../images/airbnb1.png";


function Header() {
    return (
        <nav>
            <img className="nav--logo" src={logo} />
        </nav>
    )
}

export default Header