import React from "react";
// import cardPhoto from "../images/firstcard.png";
import starIcon from "../images/star.png";

function Card(props) {
    return (
        <div className="card">
            <img className="card--photo" src={props.img}/>
            <div className="card--stats">
                <img className="card--star-icon" src={starIcon} />
                <span>{props.rating}</span>
                <span className="grey-text">({props.reviewCount})</span>
                <span className="grey-text">• {props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><b>From {props.price}</b> / person</p>
        </div>
    )
}

export default Card