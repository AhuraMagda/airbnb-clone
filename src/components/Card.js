import React from "react";
import cardPhoto from "../images/firstcard.png"

function Card() {
    return (
        <div className="experience-card">
            <img src={cardPhoto} />
            <div>X 5.0 (8) USA</div>
            <p>Life lessons with Katie Zaferes</p>
            <p>From $136 / person</p>
        </div>
    )
}

export default Card