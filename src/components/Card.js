import React from "react";
import cardPhoto from "../images/firstcard.png";
import starIcon from "../images/star.png";

function Card() {
    return (
        <div className="card">
            <img className="card--photo" src={cardPhoto} />
            <div className="card--stats">
                <img className="card--star-icon" src={starIcon} />
                <span>5.0</span>
                <span className="grey-text">(8)</span>
                <span className="grey-text">• USA</span>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p><b>From $136</b> / person</p>
        </div>
    )
}

export default Card